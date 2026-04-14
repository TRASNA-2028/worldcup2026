/**
 * 2026 FIFA World Cup Interactive Tracker
 * All state stored in localStorage. Pure vanilla JS, no dependencies.
 */

// ── State ─────────────────────────────────────────────────────────────────────
const STATE_KEY = 'wc2026_state';

function defaultState() {
  const s = { groups: {}, r32: {}, r16: {}, qf: {}, sf: {}, final: {}, third: {} };
  Object.keys(WC2026.groups).forEach(g => {
    s.groups[g] = { scores: {} }; // scores[matchIdx] = {h, a}
  });
  for (let i = 0; i < 16; i++) s.r32[i] = { h: '', a: '', pens_h: '', pens_a: '' };
  for (let i = 0; i < 8;  i++) s.r16[i] = { h: '', a: '', pens_h: '', pens_a: '' };
  for (let i = 0; i < 4;  i++) s.qf[i]  = { h: '', a: '', pens_h: '', pens_a: '' };
  for (let i = 0; i < 2;  i++) s.sf[i]  = { h: '', a: '', pens_h: '', pens_a: '' };
  s.final[0] = { h: '', a: '', pens_h: '', pens_a: '' };
  s.third[0] = { h: '', a: '', pens_h: '', pens_a: '' };
  return s;
}

let state = (() => {
  try {
    const saved = localStorage.getItem(STATE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Merge with defaults to handle new fields
      const def = defaultState();
      return { ...def, ...parsed };
    }
  } catch(e) {}
  return defaultState();
})();

function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

// ── Group Stage Logic ─────────────────────────────────────────────────────────
function computeStandings(groupKey) {
  const group = WC2026.groups[groupKey];
  const teams = group.teams;
  const scores = state.groups[groupKey]?.scores || {};

  const stats = teams.map((t, i) => ({
    idx: i, name: t.name, flag: t.flag,
    pld: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0
  }));

  group.matches.forEach((m, mi) => {
    const sc = scores[mi];
    if (sc === undefined || sc.h === '' || sc.a === '' || sc.h === null || sc.a === null) return;
    const h = parseInt(sc.h), a = parseInt(sc.a);
    if (isNaN(h) || isNaN(a)) return;

    const ht = stats[m.home], at = stats[m.away];
    ht.pld++; at.pld++;
    ht.gf += h; ht.ga += a;
    at.gf += a; at.ga += h;
    ht.gd = ht.gf - ht.ga;
    at.gd = at.gf - at.ga;

    if (h > a)      { ht.w++; ht.pts += 3; at.l++; }
    else if (h < a) { at.w++; at.pts += 3; ht.l++; }
    else            { ht.d++; ht.pts++; at.d++; at.pts++; }
  });

  // Sort: pts → gd → gf → name
  stats.sort((a, b) =>
    b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || a.name.localeCompare(b.name)
  );

  return stats;
}

function isGroupComplete(groupKey) {
  const group = WC2026.groups[groupKey];
  const scores = state.groups[groupKey]?.scores || {};
  return group.matches.every((_, mi) => {
    const sc = scores[mi];
    return sc !== undefined && sc.h !== '' && sc.a !== '' && sc.h !== null && sc.a !== null;
  });
}

function getGroupTeam(groupKey, pos) {
  // pos: 0=1st, 1=2nd, 2=3rd, 3=4th
  if (!isGroupComplete(groupKey)) return { name: 'TBD', flag: '' };
  const standings = computeStandings(groupKey);
  return standings[pos] || { name: 'TBD', flag: '' };
}

// ── Knockout Logic ────────────────────────────────────────────────────────────
function getR32Team(matchIdx, side) {
  // side: 'a' or 'b'
  const pairing = WC2026.r32Pairings[matchIdx];
  const src = side === 'a' ? pairing.a : pairing.b;
  if (src[0] === '3rd') return { name: 'Best 3rd TBD', flag: '🔄' };
  const [grp, pos] = src;
  return getGroupTeam(grp, pos - 1);
}

function getKOWinner(round, matchIdx) {
  const roundState = state[round]?.[matchIdx];
  if (!roundState) return { name: 'TBD', flag: '' };

  let teamA, teamB;
  if (round === 'r32') {
    teamA = getR32Team(matchIdx, 'a');
    teamB = getR32Team(matchIdx, 'b');
  } else {
    const prevRound = { r16: 'r32', qf: 'r16', sf: 'qf', final: 'sf', third: 'sf' }[round];
    if (round === 'third') {
      teamA = getKOLoser(prevRound, matchIdx === 0 ? 0 : 1);
      teamB = getKOLoser(prevRound, matchIdx === 0 ? 1 : 0);
    } else {
      const pairings = { r16: WC2026.r16Pairings, qf: WC2026.qfPairings, sf: WC2026.sfPairings };
      const pair = pairings[round]?.[matchIdx];
      if (!pair) {
        // Final
        teamA = getKOWinner('sf', 0);
        teamB = getKOWinner('sf', 1);
      } else {
        const aIdx = parseInt(pair.a.split('-M')[1]) - 1;
        const bIdx = parseInt(pair.b.split('-M')[1]) - 1;
        teamA = getKOWinner(prevRound, aIdx);
        teamB = getKOWinner(prevRound, bIdx);
      }
    }
  }

  if (teamA.name === 'TBD' || teamB.name === 'TBD') return { name: 'TBD', flag: '' };

  const h = roundState.h === '' ? null : parseInt(roundState.h);
  const a = roundState.a === '' ? null : parseInt(roundState.a);
  if (h === null || a === null) return { name: 'TBD', flag: '' };

  if (h > a) return teamA;
  if (a > h) return teamB;

  // Draw — check pens
  const ph = roundState.pens_h === '' ? null : parseInt(roundState.pens_h);
  const pa = roundState.pens_a === '' ? null : parseInt(roundState.pens_a);
  if (ph !== null && pa !== null) {
    if (ph > pa) return teamA;
    if (pa > ph) return teamB;
  }
  return { name: 'Draw', flag: '⚖️' };
}

function getKOLoser(round, matchIdx) {
  const roundState = state[round]?.[matchIdx];
  if (!roundState) return { name: 'TBD', flag: '' };

  const prevRound = { r16: 'r32', qf: 'r16', sf: 'qf' }[round];
  const pairings = { r16: WC2026.r16Pairings, qf: WC2026.qfPairings, sf: WC2026.sfPairings };
  const pair = pairings[round]?.[matchIdx];
  if (!pair) return { name: 'TBD', flag: '' };

  const aIdx = parseInt(pair.a.split('-M')[1]) - 1;
  const bIdx = parseInt(pair.b.split('-M')[1]) - 1;
  const teamA = getKOWinner(prevRound, aIdx);
  const teamB = getKOWinner(prevRound, bIdx);

  if (teamA.name === 'TBD' || teamB.name === 'TBD') return { name: 'TBD', flag: '' };

  const h = roundState.h === '' ? null : parseInt(roundState.h);
  const a = roundState.a === '' ? null : parseInt(roundState.a);
  if (h === null || a === null) return { name: 'TBD', flag: '' };

  if (h > a) return teamB;
  if (a > h) return teamA;

  const ph = roundState.pens_h === '' ? null : parseInt(roundState.pens_h);
  const pa = roundState.pens_a === '' ? null : parseInt(roundState.pens_a);
  if (ph !== null && pa !== null) {
    if (ph > pa) return teamB;
    if (pa > ph) return teamA;
  }
  return { name: 'TBD', flag: '' };
}

function getFinalTeams(matchIdx) {
  if (matchIdx === 0) { // 3rd place
    return {
      a: getKOLoser('sf', 0),
      b: getKOLoser('sf', 1)
    };
  } else { // Final
    return {
      a: getKOWinner('sf', 0),
      b: getKOWinner('sf', 1)
    };
  }
}

// ── Rendering ─────────────────────────────────────────────────────────────────
function renderGroups() {
  const grid = document.getElementById('groupsGrid');
  grid.innerHTML = '';

  Object.keys(WC2026.groups).forEach(groupKey => {
    const group = WC2026.groups[groupKey];
    const standings = computeStandings(groupKey);
    const complete = isGroupComplete(groupKey);
    const scores = state.groups[groupKey]?.scores || {};

    const card = document.createElement('div');
    card.className = 'group-card';

    // Header
    card.innerHTML = `
      <div class="group-header">
        <div>
          <div class="group-letter">Group ${groupKey}</div>
          <div class="group-label">Group Stage</div>
        </div>
        ${complete ? '<span style="margin-left:auto;font-size:1.2rem" title="All matches played">✅</span>' : ''}
      </div>
    `;

    // Standings table
    const table = document.createElement('table');
    table.className = 'standings-table';
    table.innerHTML = `
      <thead>
        <tr>
          <th style="width:30px">#</th>
          <th style="text-align:left">Team</th>
          <th>Pld</th><th>W</th><th>D</th><th>L</th>
          <th>GF</th><th>GA</th><th>GD</th><th>Pts</th>
        </tr>
      </thead>
      <tbody>
        ${standings.map((t, i) => {
          const rowClass = i === 0 ? 'pos-1-row' : i === 1 ? 'pos-2-row' : i === 2 ? 'pos-3-row' : 'pos-4-row';
          const gdClass = t.gd > 0 ? 'gd-pos' : t.gd < 0 ? 'gd-neg' : '';
          return `<tr class="${rowClass}">
            <td><span class="pos-badge pos-${i+1}">${i+1}</span></td>
            <td>
              <div class="team-cell">
                <span class="team-flag">${t.flag}</span>
                <span class="team-name">${t.name}</span>
              </div>
            </td>
            <td>${t.pld}</td>
            <td>${t.w}</td>
            <td>${t.d}</td>
            <td>${t.l}</td>
            <td>${t.gf}</td>
            <td>${t.ga}</td>
            <td class="${gdClass}">${t.gd > 0 ? '+' : ''}${t.gd}</td>
            <td class="pts-cell">${t.pts}</td>
          </tr>`;
        }).join('')}
      </tbody>
    `;
    card.appendChild(table);

    // Matches
    const matchSection = document.createElement('div');
    matchSection.className = 'matches-section';
    matchSection.innerHTML = `<div class="matches-title">Match Results</div>`;

    group.matches.forEach((m, mi) => {
      const sc = scores[mi] || {};
      const homeTeam = group.teams[m.home];
      const awayTeam = group.teams[m.away];

      const matchRow = document.createElement('div');
      matchRow.className = 'match-row';
      matchRow.innerHTML = `
        <div class="match-team">
          <span class="team-flag">${homeTeam.flag}</span>
          <span class="team-name">${homeTeam.name}</span>
        </div>
        <div class="match-score-box">
          <input class="score-input" type="number" min="0" max="30"
            placeholder="–"
            value="${sc.h !== undefined && sc.h !== '' ? sc.h : ''}"
            data-group="${groupKey}" data-match="${mi}" data-side="h" />
          <span class="score-sep">:</span>
          <input class="score-input" type="number" min="0" max="30"
            placeholder="–"
            value="${sc.a !== undefined && sc.a !== '' ? sc.a : ''}"
            data-group="${groupKey}" data-match="${mi}" data-side="a" />
        </div>
        <div class="match-team away">
          <span class="team-flag">${awayTeam.flag}</span>
          <span class="team-name">${awayTeam.name}</span>
        </div>
      `;
      matchSection.appendChild(matchRow);
    });

    card.appendChild(matchSection);
    grid.appendChild(card);
  });

  // Attach listeners
  document.querySelectorAll('.score-input').forEach(inp => {
    inp.addEventListener('input', onGroupScoreInput);
    inp.addEventListener('change', onGroupScoreInput);
  });
}

function onGroupScoreInput(e) {
  const { group, match, side } = e.target.dataset;
  const val = e.target.value.trim();
  if (!state.groups[group]) state.groups[group] = { scores: {} };
  if (!state.groups[group].scores[match]) state.groups[group].scores[match] = {};
  state.groups[group].scores[match][side] = val === '' ? '' : parseInt(val);
  saveState();
  renderAll();
}

// ── Knockout Match Card ───────────────────────────────────────────────────────
function renderKOMatch(round, matchIdx, teamA, teamB, roundState, label) {
  const h = roundState.h;
  const a = roundState.a;
  const ph = roundState.pens_h;
  const pa = roundState.pens_a;

  const isDraw = h !== '' && a !== '' && parseInt(h) === parseInt(a);
  const hWins = h !== '' && a !== '' && parseInt(h) > parseInt(a);
  const aWins = h !== '' && a !== '' && parseInt(a) > parseInt(h);
  const penHWins = isDraw && ph !== '' && pa !== '' && parseInt(ph) > parseInt(pa);
  const penAWins = isDraw && ph !== '' && pa !== '' && parseInt(pa) > parseInt(ph);

  const aHighlight = (hWins || penHWins) ? 'winner-highlight' : '';
  const bHighlight = (aWins || penAWins) ? 'winner-highlight' : '';

  const teamAName = teamA.name === 'TBD' ? '<span class="knockout-team-name tbd">TBD</span>' :
    `<span class="knockout-team-name">${teamA.name}</span>`;
  const teamBName = teamB.name === 'TBD' ? '<span class="knockout-team-name tbd">TBD</span>' :
    `<span class="knockout-team-name">${teamB.name}</span>`;

  const disabled = (teamA.name === 'TBD' || teamB.name === 'TBD') ? 'disabled' : '';

  const winner = getKORoundWinner(round, matchIdx, teamA, teamB, roundState);
  const winnerText = winner.name !== 'TBD' && winner.name !== 'Draw'
    ? `${winner.flag} ${winner.name} advances →`
    : winner.name === 'Draw' ? '⚖️ Draw — enter penalties below' : '';

  let pensHTML = '';
  if (isDraw && !disabled) {
    pensHTML = `
      <div class="pens-row">
        <span class="pens-label">Pens:</span>
        <input class="pens-input" type="number" min="0" max="20" placeholder="–"
          value="${ph !== '' ? ph : ''}"
          data-round="${round}" data-match="${matchIdx}" data-side="pens_h" ${disabled} />
        <span style="color:var(--grey-mid);font-weight:700">–</span>
        <input class="pens-input" type="number" min="0" max="20" placeholder="–"
          value="${pa !== '' ? pa : ''}"
          data-round="${round}" data-match="${matchIdx}" data-side="pens_a" ${disabled} />
        <span style="margin-left:6px;font-size:0.7rem;color:var(--grey-dark)">(after extra time)</span>
      </div>`;
  }

  return `
    <div class="knockout-match">
      <div class="knockout-match-header">
        <span class="knockout-match-label">${label}</span>
        <span class="knockout-match-winner">${winnerText}</span>
      </div>
      <div class="knockout-team-row ${aHighlight}">
        <span class="knockout-team-flag">${teamA.flag || ''}</span>
        ${teamAName}
        <input class="knockout-score-input" type="number" min="0" max="30" placeholder="–"
          value="${h !== '' ? h : ''}"
          data-round="${round}" data-match="${matchIdx}" data-side="h" ${disabled} />
      </div>
      <div class="knockout-team-row ${bHighlight}">
        <span class="knockout-team-flag">${teamB.flag || ''}</span>
        ${teamBName}
        <input class="knockout-score-input" type="number" min="0" max="30" placeholder="–"
          value="${a !== '' ? a : ''}"
          data-round="${round}" data-match="${matchIdx}" data-side="a" ${disabled} />
      </div>
      ${pensHTML}
    </div>`;
}

function getKORoundWinner(round, matchIdx, teamA, teamB, roundState) {
  if (teamA.name === 'TBD' || teamB.name === 'TBD') return { name: 'TBD', flag: '' };
  const h = roundState.h === '' ? null : parseInt(roundState.h);
  const a = roundState.a === '' ? null : parseInt(roundState.a);
  if (h === null || a === null) return { name: 'TBD', flag: '' };
  if (h > a) return teamA;
  if (a > h) return teamB;
  const ph = roundState.pens_h === '' ? null : parseInt(roundState.pens_h);
  const pa = roundState.pens_a === '' ? null : parseInt(roundState.pens_a);
  if (ph !== null && pa !== null) {
    if (ph > pa) return teamA;
    if (pa > ph) return teamB;
  }
  return { name: 'Draw', flag: '⚖️' };
}

function renderProgressBar() {
  const bar = document.getElementById('groupProgressBar');
  if (!bar) return;
  const total = Object.keys(WC2026.groups).length;
  const done = Object.keys(WC2026.groups).filter(g => isGroupComplete(g)).length;
  const pct = Math.round((done / total) * 100);
  bar.innerHTML = `
    <div class="progress-track">
      <div class="progress-fill" style="width:${pct}%"></div>
    </div>
    <div class="progress-label">${done} / ${total} groups complete</div>
  `;
}

function renderR32() {
  const grid = document.getElementById('r32Grid');
  const note = document.getElementById('r32Note');

  // Count complete groups
  const doneGroups = Object.keys(WC2026.groups).filter(g => isGroupComplete(g));
  const pendingGroups = Object.keys(WC2026.groups).filter(g => !isGroupComplete(g));

  if (note) {
    if (pendingGroups.length > 0) {
      note.style.display = 'block';
      note.innerHTML = `
        <strong>⏳ Waiting for group results:</strong>
        Groups ${pendingGroups.join(', ')} still need all 6 match scores entered.
        Once a group is complete, its 1st and 2nd place teams will appear here automatically.
        <br><br>
        <strong>🔄 Matches 13–16 (Best 3rd Place):</strong>
        After all groups are done, the 8 best 3rd-placed teams are ranked by FIFA rules
        (Points → GD → GF). Enter their names manually in the team fields below — or wait
        for the official FIFA announcement.
      `;
    } else {
      note.style.display = 'block';
      note.innerHTML = `
        ✅ All 12 groups complete! 1st and 2nd place teams have been auto-populated.
        <br><strong>🔄 Matches 13–16:</strong> Enter the 8 best 3rd-placed teams manually in the fields below.
      `;
      note.style.background = 'rgba(39,174,96,0.12)';
      note.style.borderColor = 'var(--green)';
      note.style.color = 'var(--green)';
    }
  }

  let html = '';
  for (let i = 0; i < 16; i++) {
    const teamA = getR32Team(i, 'a');
    const teamB = getR32Team(i, 'b');
    const rs = state.r32[i] || { h: '', a: '', pens_h: '', pens_a: '' };
    const label = i < 12
      ? `R32 Match ${i + 1}`
      : `R32 Match ${i + 1} — Best 3rd Place`;
    html += renderKOMatch('r32', i, teamA, teamB, rs, label);
  }
  grid.innerHTML = html;
  attachKOListeners();
}

function renderR16() {
  const grid = document.getElementById('r16Grid');
  let html = '';
  for (let i = 0; i < 8; i++) {
    const pair = WC2026.r16Pairings[i];
    const aIdx = parseInt(pair.a.split('-M')[1]) - 1;
    const bIdx = parseInt(pair.b.split('-M')[1]) - 1;
    const teamA = getKOWinner('r32', aIdx);
    const teamB = getKOWinner('r32', bIdx);
    const rs = state.r16[i] || { h: '', a: '', pens_h: '', pens_a: '' };
    html += renderKOMatch('r16', i, teamA, teamB, rs, `R16 Match ${i + 1}`);
  }
  grid.innerHTML = html;
  attachKOListeners();
}

function renderQF() {
  const grid = document.getElementById('qfGrid');
  let html = '';
  for (let i = 0; i < 4; i++) {
    const pair = WC2026.qfPairings[i];
    const aIdx = parseInt(pair.a.split('-M')[1]) - 1;
    const bIdx = parseInt(pair.b.split('-M')[1]) - 1;
    const teamA = getKOWinner('r16', aIdx);
    const teamB = getKOWinner('r16', bIdx);
    const rs = state.qf[i] || { h: '', a: '', pens_h: '', pens_a: '' };
    html += renderKOMatch('qf', i, teamA, teamB, rs, `Quarter-Final ${i + 1}`);
  }
  grid.innerHTML = html;
  attachKOListeners();
}

function renderSF() {
  const grid = document.getElementById('sfGrid');
  let html = '';
  for (let i = 0; i < 2; i++) {
    const pair = WC2026.sfPairings[i];
    const aIdx = parseInt(pair.a.split('-M')[1]) - 1;
    const bIdx = parseInt(pair.b.split('-M')[1]) - 1;
    const teamA = getKOWinner('qf', aIdx);
    const teamB = getKOWinner('qf', bIdx);
    const rs = state.sf[i] || { h: '', a: '', pens_h: '', pens_a: '' };
    html += renderKOMatch('sf', i, teamA, teamB, rs, `Semi-Final ${i + 1}`);
  }
  grid.innerHTML = html;
  attachKOListeners();
}

function renderFinal() {
  const grid = document.getElementById('finalGrid');

  // 3rd place
  const thirdA = getKOLoser('sf', 0);
  const thirdB = getKOLoser('sf', 1);
  const thirdRS = state.third[0] || { h: '', a: '', pens_h: '', pens_a: '' };

  // Final
  const finalA = getKOWinner('sf', 0);
  const finalB = getKOWinner('sf', 1);
  const finalRS = state.final[0] || { h: '', a: '', pens_h: '', pens_a: '' };

  grid.innerHTML = `
    <div class="final-match-wrapper" style="opacity:0.85">
      <div style="text-align:center;margin-bottom:8px;font-family:'Montserrat',sans-serif;font-weight:700;font-size:0.8rem;color:var(--orange);letter-spacing:2px">🥉 3RD PLACE PLAY-OFF · JULY 18</div>
      ${renderKOMatch('third', 0, thirdA, thirdB, thirdRS, '3rd Place Play-off')}
    </div>
    <div class="final-match-wrapper">
      <div style="text-align:center;margin-bottom:8px;font-family:'Montserrat',sans-serif;font-weight:700;font-size:0.9rem;color:var(--gold);letter-spacing:2px">🏆 THE FINAL · JULY 19 · METLIFE STADIUM</div>
      ${renderKOMatch('final', 0, finalA, finalB, finalRS, 'World Cup Final')}
    </div>
  `;

  // Champion banner
  const champion = getKORoundWinner('final', 0, finalA, finalB, finalRS);
  const banner = document.getElementById('championBanner');
  if (champion.name !== 'TBD' && champion.name !== 'Draw') {
    banner.style.display = 'block';
    banner.innerHTML = `
      <span class="champ-trophy">🏆</span>
      <div class="champ-label">2026 FIFA World Cup Champion</div>
      <div class="champ-name">${champion.name}</div>
      <span class="champ-flag">${champion.flag}</span>
    `;
  } else {
    banner.style.display = 'none';
  }

  attachKOListeners();
}

function attachKOListeners() {
  document.querySelectorAll('.knockout-score-input, .pens-input').forEach(inp => {
    inp.addEventListener('input', onKOScoreInput);
    inp.addEventListener('change', onKOScoreInput);
  });
}

function onKOScoreInput(e) {
  const { round, match, side } = e.target.dataset;
  const val = e.target.value.trim();
  const parsed = val === '' ? '' : parseInt(val);
  if (!state[round]) state[round] = {};
  if (!state[round][match]) state[round][match] = { h: '', a: '', pens_h: '', pens_a: '' };
  state[round][match][side] = parsed;
  saveState();
  renderAll();
}

// ── Tab Navigation ────────────────────────────────────────────────────────────
function renderAll() {
  renderProgressBar();
  renderGroups();
  renderR32();
  renderR16();
  renderQF();
  renderSF();
  renderFinal();
}

function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    });
  });
}

function initReset() {
  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('Reset all scores? This cannot be undone.')) {
      state = defaultState();
      saveState();
      renderAll();
    }
  });
}

// ── Boot ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initReset();
  renderAll();
});
