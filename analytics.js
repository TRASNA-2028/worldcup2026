// ============================================================
// World Cup 2026 Analytics — Supabase backend
// ============================================================
const SUPABASE_URL = 'https://hwfnxzwcdkatbauxedfr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3Zm54endjZGthdGJhdXhlZGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMDY1NDQsImV4cCI6MjA5MTc4MjU0NH0.TIArG6ppDkq5tV6Hixnj50TfRfDKB0TsosGv0dBDkvU';

// ── Helpers ──────────────────────────────────────────────────

function getOrCreateSessionId() {
  let sid = sessionStorage.getItem('wc2026_sid');
  if (!sid) {
    sid = 'sess_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem('wc2026_sid', sid);
  }
  return sid;
}

function detectDevice() {
  const ua = navigator.userAgent;
  if (/Mobi|Android/i.test(ua)) return 'mobile';
  if (/Tablet|iPad/i.test(ua)) return 'tablet';
  return 'desktop';
}

function detectBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Edg/')) return 'Edge';
  if (ua.includes('OPR') || ua.includes('Opera')) return 'Opera';
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Safari')) return 'Safari';
  return 'Other';
}

async function sbInsert(table, row) {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(row)
    });
  } catch (e) {
    // Silently fail — analytics should never break the main app
  }
}

async function sbSelect(table, params) {
  try {
    const qs = params ? '?' + params : '';
    const resp = await fetch(`${SUPABASE_URL}/rest/v1/${table}${qs}`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    return await resp.json();
  } catch (e) {
    return [];
  }
}

// ── Page Visit Tracking ───────────────────────────────────────

async function trackPageVisit() {
  // Avoid double-counting on same session
  if (sessionStorage.getItem('wc2026_visit_tracked')) return;
  sessionStorage.setItem('wc2026_visit_tracked', '1');

  // Get rough geo from a free IP API (no key needed)
  let country = null, city = null;
  try {
    const geo = await fetch('https://ipapi.co/json/');
    const geoData = await geo.json();
    country = geoData.country_name || null;
    city = geoData.city || null;
  } catch (e) {}

  await sbInsert('page_visits', {
    session_id: getOrCreateSessionId(),
    country,
    city,
    device: detectDevice(),
    browser: detectBrowser(),
    referrer: document.referrer || null
  });
}

// ── Stage Advancement Tracking ────────────────────────────────

// Track which countries have already been logged per session to avoid duplicates
// Use sessionStorage so it persists across re-renders but resets on new sessions
function getTrackedSet() {
  try {
    return new Set(JSON.parse(sessionStorage.getItem('wc2026_tracked') || '[]'));
  } catch(e) { return new Set(); }
}
function saveTrackedSet(s) {
  sessionStorage.setItem('wc2026_tracked', JSON.stringify([...s]));
}

async function trackAdvancement(country, stage) {
  if (!country || country === 'TBD' || country === 'Draw' || country === '' || country.includes('resolving')) return;
  const key = `${country}:${stage}`;
  const tracked = getTrackedSet();
  if (tracked.has(key)) return;
  tracked.add(key);
  saveTrackedSet(tracked);

  await sbInsert('stage_advancements', {
    session_id: getOrCreateSessionId(),
    country,
    stage
  });
}

// Call this whenever the app state changes.
// Uses the app's own getR32Team / getKOWinner functions which must be loaded first.
async function syncAdvancements(state) {
  if (!state) return;
  // These functions are defined in app.js and available globally
  if (typeof getR32Team !== 'function' || typeof getKOWinner !== 'function') return;

  const safe = (team) => team && team.name && team.name !== 'TBD' && team.name !== 'Draw' && !team.name.includes('resolving');

  // R32 — 16 matches, teams from group stage
  for (let i = 0; i < 16; i++) {
    const a = getR32Team(i, 'a');
    const b = getR32Team(i, 'b');
    if (safe(a)) trackAdvancement(a.name, 'r32');
    if (safe(b)) trackAdvancement(b.name, 'r32');
  }

  // R16 — 8 matches, winners of R32
  for (let i = 0; i < 8; i++) {
    const a = getKOWinner('r32', WC2026.r16Pairings[i] ? parseInt(WC2026.r16Pairings[i].a.split('-M')[1]) - 1 : -1);
    const b = getKOWinner('r32', WC2026.r16Pairings[i] ? parseInt(WC2026.r16Pairings[i].b.split('-M')[1]) - 1 : -1);
    if (safe(a)) trackAdvancement(a.name, 'r16');
    if (safe(b)) trackAdvancement(b.name, 'r16');
  }

  // QF — 4 matches
  for (let i = 0; i < 4; i++) {
    const a = getKOWinner('r16', WC2026.qfPairings[i] ? parseInt(WC2026.qfPairings[i].a.split('-M')[1]) - 1 : -1);
    const b = getKOWinner('r16', WC2026.qfPairings[i] ? parseInt(WC2026.qfPairings[i].b.split('-M')[1]) - 1 : -1);
    if (safe(a)) trackAdvancement(a.name, 'qf');
    if (safe(b)) trackAdvancement(b.name, 'qf');
  }

  // SF — 2 matches
  for (let i = 0; i < 2; i++) {
    const a = getKOWinner('qf', WC2026.sfPairings[i] ? parseInt(WC2026.sfPairings[i].a.split('-M')[1]) - 1 : -1);
    const b = getKOWinner('qf', WC2026.sfPairings[i] ? parseInt(WC2026.sfPairings[i].b.split('-M')[1]) - 1 : -1);
    if (safe(a)) trackAdvancement(a.name, 'sf');
    if (safe(b)) trackAdvancement(b.name, 'sf');
  }

  // Final — teams from SF winners
  const finalA = getKOWinner('sf', 0);
  const finalB = getKOWinner('sf', 1);
  if (safe(finalA)) trackAdvancement(finalA.name, 'final');
  if (safe(finalB)) trackAdvancement(finalB.name, 'final');

  // Champion — winner of final
  const champion = getKOWinner('final', 0);
  if (safe(champion)) trackAdvancement(champion.name, 'champion');
}

// ── Dashboard Data Fetching ───────────────────────────────────

async function fetchAnalyticsSummary() {
  const [visits, advancements] = await Promise.all([
    sbSelect('page_visits', 'select=id,visited_at,country,city,device,browser'),
    sbSelect('stage_advancements', 'select=country,stage')
  ]);

  // Total visits
  const totalVisits = visits.length;

  // Unique sessions
  const uniqueSessions = new Set(visits.map(v => v.session_id)).size;

  // Visits by country
  const byCountry = {};
  for (const v of visits) {
    const c = v.country || 'Unknown';
    byCountry[c] = (byCountry[c] || 0) + 1;
  }

  // Visits by device
  const byDevice = {};
  for (const v of visits) {
    const d = v.device || 'Unknown';
    byDevice[d] = (byDevice[d] || 0) + 1;
  }

  // Visits by browser
  const byBrowser = {};
  for (const v of visits) {
    const b = v.browser || 'Unknown';
    byBrowser[b] = (byBrowser[b] || 0) + 1;
  }

  // Visits over time (last 30 days by day)
  const byDay = {};
  for (const v of visits) {
    const day = v.visited_at?.slice(0, 10);
    if (day) byDay[day] = (byDay[day] || 0) + 1;
  }

  // Stage advancements leaderboard
  const stages = ['r32', 'r16', 'qf', 'sf', 'final', 'champion'];
  const stageData = {};
  for (const stage of stages) {
    const counts = {};
    for (const a of advancements) {
      if (a.stage === stage) {
        counts[a.country] = (counts[a.country] || 0) + 1;
      }
    }
    stageData[stage] = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
  }

  return { totalVisits, uniqueSessions, byCountry, byDevice, byBrowser, byDay, stageData };
}

// Export for use in app.js and dashboard.js
window.WCAnalytics = {
  trackPageVisit,
  trackAdvancement,
  syncAdvancements,
  fetchAnalyticsSummary
};
