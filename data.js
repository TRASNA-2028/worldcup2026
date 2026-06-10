/**
 * 2026 FIFA World Cup - Complete Tournament Data
 * Groups and teams sourced from Wikipedia / official FIFA draw
 */
const WC2026 = {
  groups: {
    A: {
      teams: [
        { name: "Mexico",          flag: "🇲🇽" },
        { name: "South Africa",    flag: "🇿🇦" },
        { name: "South Korea",     flag: "🇰🇷" },
        { name: "Czech Republic",  flag: "🇨🇿" }
      ],
      matches: [
        { home: 0, away: 1 }, { home: 2, away: 3 },
        { home: 0, away: 2 }, { home: 3, away: 1 },
        { home: 3, away: 0 }, { home: 1, away: 2 }
      ]
    },
    B: {
      teams: [
        { name: "Canada",          flag: "🇨🇦" },
        { name: "Bosnia & Herz.",  flag: "🇧🇦" },
        { name: "Qatar",           flag: "🇶🇦" },
        { name: "Switzerland",     flag: "🇨🇭" }
      ],
      matches: [
        { home: 0, away: 1 }, { home: 2, away: 3 },
        { home: 0, away: 2 }, { home: 3, away: 1 },
        { home: 3, away: 0 }, { home: 1, away: 2 }
      ]
    },
    C: {
      teams: [
        { name: "Brazil",          flag: "🇧🇷" },
        { name: "Morocco",         flag: "🇲🇦" },
        { name: "Haiti",           flag: "🇭🇹" },
        { name: "Scotland",        flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" }
      ],
      matches: [
        { home: 0, away: 1 }, { home: 2, away: 3 },
        { home: 0, away: 2 }, { home: 3, away: 1 },
        { home: 3, away: 0 }, { home: 1, away: 2 }
      ]
    },
    D: {
      teams: [
        { name: "United States",   flag: "🇺🇸" },
        { name: "Paraguay",        flag: "🇵🇾" },
        { name: "Australia",       flag: "🇦🇺" },
        { name: "Turkey",          flag: "🇹🇷" }
      ],
      matches: [
        { home: 0, away: 1 }, { home: 2, away: 3 },
        { home: 0, away: 2 }, { home: 3, away: 1 },
        { home: 3, away: 0 }, { home: 1, away: 2 }
      ]
    },
    E: {
      teams: [
        { name: "Germany",         flag: "🇩🇪" },
        { name: "Curaçao",         flag: "🇨🇼" },
        { name: "Ivory Coast",     flag: "🇨🇮" },
        { name: "Ecuador",         flag: "🇪🇨" }
      ],
      matches: [
        { home: 0, away: 1 }, { home: 2, away: 3 },
        { home: 0, away: 2 }, { home: 3, away: 1 },
        { home: 3, away: 0 }, { home: 1, away: 2 }
      ]
    },
    F: {
      teams: [
        { name: "Netherlands",     flag: "🇳🇱" },
        { name: "Japan",           flag: "🇯🇵" },
        { name: "Sweden",          flag: "🇸🇪" },
        { name: "Tunisia",         flag: "🇹🇳" }
      ],
      matches: [
        { home: 0, away: 1 }, { home: 2, away: 3 },
        { home: 0, away: 2 }, { home: 3, away: 1 },
        { home: 3, away: 0 }, { home: 1, away: 2 }
      ]
    },
    G: {
      teams: [
        { name: "Belgium",         flag: "🇧🇪" },
        { name: "Egypt",           flag: "🇪🇬" },
        { name: "Iran",            flag: "🇮🇷" },
        { name: "New Zealand",     flag: "🇳🇿" }
      ],
      matches: [
        { home: 0, away: 1 }, { home: 2, away: 3 },
        { home: 0, away: 2 }, { home: 3, away: 1 },
        { home: 3, away: 0 }, { home: 1, away: 2 }
      ]
    },
    H: {
      teams: [
        { name: "Spain",           flag: "🇪🇸" },
        { name: "Cape Verde",      flag: "🇨🇻" },
        { name: "Saudi Arabia",    flag: "🇸🇦" },
        { name: "Uruguay",         flag: "🇺🇾" }
      ],
      matches: [
        { home: 0, away: 1 }, { home: 2, away: 3 },
        { home: 0, away: 2 }, { home: 3, away: 1 },
        { home: 3, away: 0 }, { home: 1, away: 2 }
      ]
    },
    I: {
      teams: [
        { name: "France",          flag: "🇫🇷" },
        { name: "Senegal",         flag: "🇸🇳" },
        { name: "Iraq",            flag: "🇮🇶" },
        { name: "Norway",          flag: "🇳🇴" }
      ],
      matches: [
        { home: 0, away: 1 }, { home: 2, away: 3 },
        { home: 0, away: 2 }, { home: 3, away: 1 },
        { home: 3, away: 0 }, { home: 1, away: 2 }
      ]
    },
    J: {
      teams: [
        { name: "Argentina",       flag: "🇦🇷" },
        { name: "Algeria",         flag: "🇩🇿" },
        { name: "Austria",         flag: "🇦🇹" },
        { name: "Jordan",          flag: "🇯🇴" }
      ],
      matches: [
        { home: 0, away: 1 }, { home: 2, away: 3 },
        { home: 0, away: 2 }, { home: 3, away: 1 },
        { home: 3, away: 0 }, { home: 1, away: 2 }
      ]
    },
    K: {
      teams: [
        { name: "Portugal",        flag: "🇵🇹" },
        { name: "DR Congo",        flag: "🇨🇩" },
        { name: "Uzbekistan",      flag: "🇺🇿" },
        { name: "Colombia",        flag: "🇨🇴" }
      ],
      matches: [
        { home: 0, away: 1 }, { home: 2, away: 3 },
        { home: 0, away: 2 }, { home: 3, away: 1 },
        { home: 3, away: 0 }, { home: 1, away: 2 }
      ]
    },
    L: {
      teams: [
        { name: "Sasana",          flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
        { name: "Croatia",         flag: "🇭🇷" },
        { name: "Ghana",           flag: "🇬🇭" },
        { name: "Panama",          flag: "🇵🇦" }
      ],
      matches: [
        { home: 0, away: 1 }, { home: 2, away: 3 },
        { home: 0, away: 2 }, { home: 3, away: 1 },
        { home: 3, away: 0 }, { home: 1, away: 2 }
      ]
    }
  },

  // ── Round of 32 pairings ──────────────────────────────────────────────────
  // Official FIFA match schedule (Match 73–88):
  // M73: 2A vs 2B         M74: 1E vs 3rd(*)     M75: 1F vs 2C
  // M76: 1C vs 2F         M77: 1I vs 3rd(*)     M78: 2E vs 2I
  // M79: 1A vs 3rd(*)     M80: 1L vs 3rd(*)     M81: 1D vs 3rd(*)
  // M82: 1G vs 3rd(*)     M83: 2K vs 2L         M84: 1H vs 2J
  // M85: 1B vs 3rd(*)     M86: 1J vs 2H         M87: 1K vs 3rd(*)
  // M88: 2D vs 2G
  //
  // The 8 "3rd(*)" slots are filled by the Annex C lookup below.
  // Annex C columns map to these matches:
  //   col 0 → "1A vs" → M79    col 1 → "1B vs" → M85
  //   col 2 → "1D vs" → M81    col 3 → "1E vs" → M74
  //   col 4 → "1G vs" → M82    col 5 → "1I vs" → M77
  //   col 6 → "1K vs" → M87    col 7 → "1L vs" → M80
  //
  // r32Pairings index → FIFA match number:
  //   0→M73  1→M74  2→M75  3→M76  4→M77  5→M78
  //   6→M79  7→M80  8→M81  9→M82  10→M83 11→M84
  //   12→M85 13→M86 14→M87 15→M88
  //
  // Pairing format:
  //   { a: ["GROUP", pos], b: ["GROUP", pos] }   pos: 1=winner, 2=runner-up
  //   { a: ["GROUP", pos], b: ["3rd", "X"] }     "X" = group letter of 3rd-place team (from Annex C)
  //   { a: ["3rd","X"], b: ["GROUP", pos] }
  //
  // For matches involving 3rd-place teams, the b-side is set to ["3rd","?"]
  // and will be resolved dynamically by the Annex C lookup in app.js.

  r32Pairings: [
    { a: ["A",2], b: ["B",2],   label: "M73: 2A vs 2B"  },  // 0 → M73
    { a: ["E",1], b: ["3rd","?"], label: "M74: 1E vs 3rd" }, // 1 → M74
    { a: ["F",1], b: ["C",2],   label: "M75: 1F vs 2C"  },  // 2 → M75
    { a: ["C",1], b: ["F",2],   label: "M76: 1C vs 2F"  },  // 3 → M76
    { a: ["I",1], b: ["3rd","?"], label: "M77: 1I vs 3rd" }, // 4 → M77
    { a: ["E",2], b: ["I",2],   label: "M78: 2E vs 2I"  },  // 5 → M78
    { a: ["A",1], b: ["3rd","?"], label: "M79: 1A vs 3rd" }, // 6 → M79
    { a: ["L",1], b: ["3rd","?"], label: "M80: 1L vs 3rd" }, // 7 → M80
    { a: ["D",1], b: ["3rd","?"], label: "M81: 1D vs 3rd" }, // 8 → M81
    { a: ["G",1], b: ["3rd","?"], label: "M82: 1G vs 3rd" }, // 9 → M82
    { a: ["K",2], b: ["L",2],   label: "M83: 2K vs 2L"  },  // 10 → M83
    { a: ["H",1], b: ["J",2],   label: "M84: 1H vs 2J"  },  // 11 → M84
    { a: ["B",1], b: ["3rd","?"], label: "M85: 1B vs 3rd" }, // 12 → M85
    { a: ["J",1], b: ["H",2],   label: "M86: 1J vs 2H"  },  // 13 → M86
    { a: ["K",1], b: ["3rd","?"], label: "M87: 1K vs 3rd" }, // 14 → M87
    { a: ["D",2], b: ["G",2],   label: "M88: 2D vs 2G"  },  // 15 → M88
  ],

  // Annex C: maps sorted group-key (8 letters) → [slot0..slot7]
  // slot[i] = which 3rd-place team fills each column:
  //   slot[0]=1A col, slot[1]=1B col, slot[2]=1D col, slot[3]=1E col,
  //   slot[4]=1G col, slot[5]=1I col, slot[6]=1K col, slot[7]=1L col
  // e.g. "3E" means the 3rd-place team from Group E
  // Annex C column → R32 match index mapping:
  annexCColToR32: [6, 12, 8, 1, 9, 4, 14, 7],
  //  col0(1A)→idx6(M79), col1(1B)→idx12(M85), col2(1D)→idx8(M81),
  //  col3(1E)→idx1(M74), col4(1G)→idx9(M82), col5(1I)→idx4(M77),
  //  col6(1K)→idx14(M87), col7(1L)→idx7(M80)

  // Full 495-entry Annex C lookup table (key = sorted group letters of best 8 third-placed teams)
  annexC: {"EFGHIJKL":["3E","3J","3I","3F","3H","3G","3L","3K"],"DFGHIJKL":["3H","3G","3I","3D","3J","3F","3L","3K"],"DEGHIJKL":["3E","3J","3I","3D","3H","3G","3L","3K"],"DEFHIJKL":["3E","3J","3I","3D","3H","3F","3L","3K"],"DEFGIJKL":["3E","3G","3I","3D","3J","3F","3L","3K"],"DEFGHJKL":["3E","3G","3J","3D","3H","3F","3L","3K"],"DEFGHIKL":["3E","3G","3I","3D","3H","3F","3L","3K"],"DEFGHIJL":["3E","3G","3J","3D","3H","3F","3L","3I"],"DEFGHIJK":["3E","3G","3J","3D","3H","3F","3I","3K"],"CFGHIJKL":["3H","3G","3I","3C","3J","3F","3L","3K"],"CEGHIJKL":["3E","3J","3I","3C","3H","3G","3L","3K"],"CEFHIJKL":["3E","3J","3I","3C","3H","3F","3L","3K"],"CEFGIJKL":["3E","3G","3I","3C","3J","3F","3L","3K"],"CEFGHJKL":["3E","3G","3J","3C","3H","3F","3L","3K"],"CEFGHIKL":["3E","3G","3I","3C","3H","3F","3L","3K"],"CEFGHIJL":["3E","3G","3J","3C","3H","3F","3L","3I"],"CEFGHIJK":["3E","3G","3J","3C","3H","3F","3I","3K"],"CDGHIJKL":["3H","3G","3I","3C","3J","3D","3L","3K"],"CDFHIJKL":["3C","3J","3I","3D","3H","3F","3L","3K"],"CDFGIJKL":["3C","3G","3I","3D","3J","3F","3L","3K"],"CDFGHJKL":["3C","3G","3J","3D","3H","3F","3L","3K"],"CDFGHIKL":["3C","3G","3I","3D","3H","3F","3L","3K"],"CDFGHIJL":["3C","3G","3J","3D","3H","3F","3L","3I"],"CDFGHIJK":["3C","3G","3J","3D","3H","3F","3I","3K"],"CDEHIJKL":["3E","3J","3I","3C","3H","3D","3L","3K"],"CDEGIJKL":["3E","3G","3I","3C","3J","3D","3L","3K"],"CDEGHJKL":["3E","3G","3J","3C","3H","3D","3L","3K"],"CDEGHIKL":["3E","3G","3I","3C","3H","3D","3L","3K"],"CDEGHIJL":["3E","3G","3J","3C","3H","3D","3L","3I"],"CDEGHIJK":["3E","3G","3J","3C","3H","3D","3I","3K"],"CDEFIJKL":["3C","3J","3E","3D","3I","3F","3L","3K"],"CDEFHJKL":["3C","3J","3E","3D","3H","3F","3L","3K"],"CDEFHIKL":["3C","3E","3I","3D","3H","3F","3L","3K"],"CDEFHIJL":["3C","3J","3E","3D","3H","3F","3L","3I"],"CDEFHIJK":["3C","3J","3E","3D","3H","3F","3I","3K"],"CDEFGJKL":["3C","3G","3E","3D","3J","3F","3L","3K"],"CDEFGIKL":["3C","3G","3E","3D","3I","3F","3L","3K"],"CDEFGIJL":["3C","3G","3E","3D","3J","3F","3L","3I"],"CDEFGIJK":["3C","3G","3E","3D","3J","3F","3I","3K"],"CDEFGHKL":["3C","3G","3E","3D","3H","3F","3L","3K"],"CDEFGHJL":["3C","3G","3J","3D","3H","3F","3L","3E"],"CDEFGHJK":["3C","3G","3J","3D","3H","3F","3E","3K"],"CDEFGHIL":["3C","3G","3E","3D","3H","3F","3L","3I"],"CDEFGHIK":["3C","3G","3E","3D","3H","3F","3I","3K"],"CDEFGHIJ":["3C","3G","3J","3D","3H","3F","3E","3I"],"BFGHIJKL":["3H","3J","3B","3F","3I","3G","3L","3K"],"BEGHIJKL":["3E","3J","3I","3B","3H","3G","3L","3K"],"BEFHIJKL":["3E","3J","3B","3F","3I","3H","3L","3K"],"BEFGIJKL":["3E","3J","3B","3F","3I","3G","3L","3K"],"BEFGHJKL":["3E","3J","3B","3F","3H","3G","3L","3K"],"BEFGHIKL":["3E","3G","3B","3F","3I","3H","3L","3K"],"BEFGHIJL":["3E","3J","3B","3F","3H","3G","3L","3I"],"BEFGHIJK":["3E","3J","3B","3F","3H","3G","3I","3K"],"BDGHIJKL":["3H","3J","3B","3D","3I","3G","3L","3K"],"BDFHIJKL":["3H","3J","3B","3D","3I","3F","3L","3K"],"BDFGIJKL":["3I","3G","3B","3D","3J","3F","3L","3K"],"BDFGHJKL":["3H","3G","3B","3D","3J","3F","3L","3K"],"BDFGHIKL":["3H","3G","3B","3D","3I","3F","3L","3K"],"BDFGHIJL":["3H","3G","3B","3D","3J","3F","3L","3I"],"BDFGHIJK":["3H","3G","3B","3D","3J","3F","3I","3K"],"BDEHIJKL":["3E","3J","3B","3D","3I","3H","3L","3K"],"BDEGIJKL":["3E","3J","3B","3D","3I","3G","3L","3K"],"BDEGHJKL":["3E","3J","3B","3D","3H","3G","3L","3K"],"BDEGHIKL":["3E","3G","3B","3D","3I","3H","3L","3K"],"BDEGHIJL":["3E","3J","3B","3D","3H","3G","3L","3I"],"BDEGHIJK":["3E","3J","3B","3D","3H","3G","3I","3K"],"BDEFIJKL":["3E","3J","3B","3D","3I","3F","3L","3K"],"BDEFHJKL":["3E","3J","3B","3D","3H","3F","3L","3K"],"BDEFHIKL":["3E","3I","3B","3D","3H","3F","3L","3K"],"BDEFHIJL":["3E","3J","3B","3D","3H","3F","3L","3I"],"BDEFHIJK":["3E","3J","3B","3D","3H","3F","3I","3K"],"BDEFGJKL":["3E","3G","3B","3D","3J","3F","3L","3K"],"BDEFGIKL":["3E","3G","3B","3D","3I","3F","3L","3K"],"BDEFGIJL":["3E","3G","3B","3D","3J","3F","3L","3I"],"BDEFGIJK":["3E","3G","3B","3D","3J","3F","3I","3K"],"BDEFGHKL":["3E","3G","3B","3D","3H","3F","3L","3K"],"BDEFGHJL":["3H","3G","3B","3D","3J","3F","3L","3E"],"BDEFGHJK":["3H","3G","3B","3D","3J","3F","3E","3K"],"BDEFGHIL":["3E","3G","3B","3D","3H","3F","3L","3I"],"BDEFGHIK":["3E","3G","3B","3D","3H","3F","3I","3K"],"BDEFGHIJ":["3H","3G","3B","3D","3J","3F","3E","3I"],"BCGHIJKL":["3H","3J","3B","3C","3I","3G","3L","3K"],"BCFHIJKL":["3H","3J","3B","3C","3I","3F","3L","3K"],"BCFGIJKL":["3I","3G","3B","3C","3J","3F","3L","3K"],"BCFGHJKL":["3H","3G","3B","3C","3J","3F","3L","3K"],"BCFGHIKL":["3H","3G","3B","3C","3I","3F","3L","3K"],"BCFGHIJL":["3H","3G","3B","3C","3J","3F","3L","3I"],"BCFGHIJK":["3H","3G","3B","3C","3J","3F","3I","3K"],"BCEHIJKL":["3E","3J","3B","3C","3I","3H","3L","3K"],"BCEGIJKL":["3E","3J","3B","3C","3I","3G","3L","3K"],"BCEGHJKL":["3E","3J","3B","3C","3H","3G","3L","3K"],"BCEGHIKL":["3E","3G","3B","3C","3I","3H","3L","3K"],"BCEGHIJL":["3E","3J","3B","3C","3H","3G","3L","3I"],"BCEGHIJK":["3E","3J","3B","3C","3H","3G","3I","3K"],"BCEFIJKL":["3E","3J","3B","3C","3I","3F","3L","3K"],"BCEFHJKL":["3E","3J","3B","3C","3H","3F","3L","3K"],"BCEFHIKL":["3E","3I","3B","3C","3H","3F","3L","3K"],"BCEFHIJL":["3E","3J","3B","3C","3H","3F","3L","3I"],"BCEFHIJK":["3E","3J","3B","3C","3H","3F","3I","3K"],"BCEFGJKL":["3E","3G","3B","3C","3J","3F","3L","3K"],"BCEFGIKL":["3E","3G","3B","3C","3I","3F","3L","3K"],"BCEFGIJL":["3E","3G","3B","3C","3J","3F","3L","3I"],"BCEFGIJK":["3E","3G","3B","3C","3J","3F","3I","3K"],"BCEFGHKL":["3E","3G","3B","3C","3H","3F","3L","3K"],"BCEFGHJL":["3H","3G","3B","3C","3J","3F","3L","3E"],"BCEFGHJK":["3H","3G","3B","3C","3J","3F","3E","3K"],"BCEFGHIL":["3E","3G","3B","3C","3H","3F","3L","3I"],"BCEFGHIK":["3E","3G","3B","3C","3H","3F","3I","3K"],"BCEFGHIJ":["3H","3G","3B","3C","3J","3F","3E","3I"],"BCDHIJKL":["3H","3J","3B","3C","3I","3D","3L","3K"],"BCDGIJKL":["3I","3G","3B","3C","3J","3D","3L","3K"],"BCDGHJKL":["3H","3G","3B","3C","3J","3D","3L","3K"],"BCDGHIKL":["3H","3G","3B","3C","3I","3D","3L","3K"],"BCDGHIJL":["3H","3G","3B","3C","3J","3D","3L","3I"],"BCDGHIJK":["3H","3G","3B","3C","3J","3D","3I","3K"],"BCDFIJKL":["3C","3J","3B","3D","3I","3F","3L","3K"],"BCDFHJKL":["3C","3J","3B","3D","3H","3F","3L","3K"],"BCDFHIKL":["3C","3I","3B","3D","3H","3F","3L","3K"],"BCDFHIJL":["3C","3J","3B","3D","3H","3F","3L","3I"],"BCDFHIJK":["3C","3J","3B","3D","3H","3F","3I","3K"],"BCDFGJKL":["3C","3G","3B","3D","3J","3F","3L","3K"],"BCDFGIKL":["3C","3G","3B","3D","3I","3F","3L","3K"],"BCDFGIJL":["3C","3G","3B","3D","3J","3F","3L","3I"],"BCDFGIJK":["3C","3G","3B","3D","3J","3F","3I","3K"],"BCDFGHKL":["3C","3G","3B","3D","3H","3F","3L","3K"],"BCDFGHJL":["3C","3G","3B","3D","3H","3F","3L","3J"],"BCDFGHJK":["3H","3G","3B","3C","3J","3F","3D","3K"],"BCDFGHIL":["3C","3G","3B","3D","3H","3F","3L","3I"],"BCDFGHIK":["3C","3G","3B","3D","3H","3F","3I","3K"],"BCDFGHIJ":["3H","3G","3B","3C","3J","3F","3D","3I"],"BCDEIJKL":["3E","3J","3B","3C","3I","3D","3L","3K"],"BCDEHJKL":["3E","3J","3B","3C","3H","3D","3L","3K"],"BCDEHIKL":["3E","3I","3B","3C","3H","3D","3L","3K"],"BCDEHIJL":["3E","3J","3B","3C","3H","3D","3L","3I"],"BCDEHIJK":["3E","3J","3B","3C","3H","3D","3I","3K"],"BCDEGJKL":["3E","3G","3B","3C","3J","3D","3L","3K"],"BCDEGIKL":["3E","3G","3B","3C","3I","3D","3L","3K"],"BCDEGIJL":["3E","3G","3B","3C","3J","3D","3L","3I"],"BCDEGIJK":["3E","3G","3B","3C","3J","3D","3I","3K"],"BCDEGHKL":["3E","3G","3B","3C","3H","3D","3L","3K"],"BCDEGHJL":["3H","3G","3B","3C","3J","3D","3L","3E"],"BCDEGHJK":["3H","3G","3B","3C","3J","3D","3E","3K"],"BCDEGHIL":["3E","3G","3B","3C","3H","3D","3L","3I"],"BCDEGHIK":["3E","3G","3B","3C","3H","3D","3I","3K"],"BCDEGHIJ":["3H","3G","3B","3C","3J","3D","3E","3I"],"BCDEFJKL":["3C","3J","3B","3D","3E","3F","3L","3K"],"BCDEFIKL":["3C","3E","3B","3D","3I","3F","3L","3K"],"BCDEFIJL":["3C","3J","3B","3D","3E","3F","3L","3I"],"BCDEFIJK":["3C","3J","3B","3D","3E","3F","3I","3K"],"BCDEFHKL":["3C","3E","3B","3D","3H","3F","3L","3K"],"BCDEFHJL":["3C","3J","3B","3D","3H","3F","3L","3E"],"BCDEFHJK":["3C","3J","3B","3D","3H","3F","3E","3K"],"BCDEFHIL":["3C","3E","3B","3D","3H","3F","3L","3I"],"BCDEFHIK":["3C","3E","3B","3D","3H","3F","3I","3K"],"BCDEFHIJ":["3C","3J","3B","3D","3H","3F","3E","3I"],"BCDEFGKL":["3C","3G","3B","3D","3E","3F","3L","3K"],"BCDEFGJL":["3C","3G","3B","3D","3J","3F","3L","3E"],"BCDEFGJK":["3C","3G","3B","3D","3J","3F","3E","3K"],"BCDEFGIL":["3C","3G","3B","3D","3E","3F","3L","3I"],"BCDEFGIK":["3C","3G","3B","3D","3E","3F","3I","3K"],"BCDEFGIJ":["3C","3G","3B","3D","3J","3F","3E","3I"],"BCDEFGHL":["3C","3G","3B","3D","3H","3F","3L","3E"],"BCDEFGHK":["3C","3G","3B","3D","3H","3F","3E","3K"],"BCDEFGHJ":["3H","3G","3B","3C","3J","3F","3D","3E"],"BCDEFGHI":["3C","3G","3B","3D","3H","3F","3E","3I"],"AFGHIJKL":["3H","3J","3I","3F","3A","3G","3L","3K"],"AEGHIJKL":["3E","3J","3I","3A","3H","3G","3L","3K"],"AEFHIJKL":["3E","3J","3I","3F","3A","3H","3L","3K"],"AEFGIJKL":["3E","3J","3I","3F","3A","3G","3L","3K"],"AEFGHJKL":["3E","3G","3J","3F","3A","3H","3L","3K"],"AEFGHIKL":["3E","3G","3I","3F","3A","3H","3L","3K"],"AEFGHIJL":["3E","3G","3J","3F","3A","3H","3L","3I"],"AEFGHIJK":["3E","3G","3J","3F","3A","3H","3I","3K"],"ADGHIJKL":["3H","3J","3I","3D","3A","3G","3L","3K"],"ADFHIJKL":["3H","3J","3I","3D","3A","3F","3L","3K"],"ADFGIJKL":["3I","3G","3J","3D","3A","3F","3L","3K"],"ADFGHJKL":["3H","3G","3J","3D","3A","3F","3L","3K"],"ADFGHIKL":["3H","3G","3I","3D","3A","3F","3L","3K"],"ADFGHIJL":["3H","3G","3J","3D","3A","3F","3L","3I"],"ADFGHIJK":["3H","3G","3J","3D","3A","3F","3I","3K"],"ADEHIJKL":["3E","3J","3I","3D","3A","3H","3L","3K"],"ADEGIJKL":["3E","3J","3I","3D","3A","3G","3L","3K"],"ADEGHJKL":["3E","3G","3J","3D","3A","3H","3L","3K"],"ADEGHIKL":["3E","3G","3I","3D","3A","3H","3L","3K"],"ADEGHIJL":["3E","3G","3J","3D","3A","3H","3L","3I"],"ADEGHIJK":["3E","3G","3J","3D","3A","3H","3I","3K"],"ADEFIJKL":["3E","3J","3I","3D","3A","3F","3L","3K"],"ADEFHJKL":["3H","3J","3E","3D","3A","3F","3L","3K"],"ADEFHIKL":["3H","3E","3I","3D","3A","3F","3L","3K"],"ADEFHIJL":["3H","3J","3E","3D","3A","3F","3L","3I"],"ADEFHIJK":["3H","3J","3E","3D","3A","3F","3I","3K"],"ADEFGJKL":["3E","3G","3J","3D","3A","3F","3L","3K"],"ADEFGIKL":["3E","3G","3I","3D","3A","3F","3L","3K"],"ADEFGIJL":["3E","3G","3J","3D","3A","3F","3L","3I"],"ADEFGIJK":["3E","3G","3J","3D","3A","3F","3I","3K"],"ADEFGHKL":["3H","3G","3E","3D","3A","3F","3L","3K"],"ADEFGHJL":["3H","3G","3J","3D","3A","3F","3L","3E"],"ADEFGHJK":["3H","3G","3J","3D","3A","3F","3E","3K"],"ADEFGHIL":["3H","3G","3E","3D","3A","3F","3L","3I"],"ADEFGHIK":["3H","3G","3E","3D","3A","3F","3I","3K"],"ADEFGHIJ":["3H","3G","3J","3D","3A","3F","3E","3I"],"ACGHIJKL":["3H","3J","3I","3C","3A","3G","3L","3K"],"ACFHIJKL":["3H","3J","3I","3C","3A","3F","3L","3K"],"ACFGIJKL":["3I","3G","3J","3C","3A","3F","3L","3K"],"ACFGHJKL":["3H","3G","3J","3C","3A","3F","3L","3K"],"ACFGHIKL":["3H","3G","3I","3C","3A","3F","3L","3K"],"ACFGHIJL":["3H","3G","3J","3C","3A","3F","3L","3I"],"ACFGHIJK":["3H","3G","3J","3C","3A","3F","3I","3K"],"ACEHIJKL":["3E","3J","3I","3C","3A","3H","3L","3K"],"ACEGIJKL":["3E","3J","3I","3C","3A","3G","3L","3K"],"ACEGHJKL":["3E","3G","3J","3C","3A","3H","3L","3K"],"ACEGHIKL":["3E","3G","3I","3C","3A","3H","3L","3K"],"ACEGHIJL":["3E","3G","3J","3C","3A","3H","3L","3I"],"ACEGHIJK":["3E","3G","3J","3C","3A","3H","3I","3K"],"ACEFIJKL":["3E","3J","3I","3C","3A","3F","3L","3K"],"ACEFHJKL":["3H","3J","3E","3C","3A","3F","3L","3K"],"ACEFHIKL":["3H","3E","3I","3C","3A","3F","3L","3K"],"ACEFHIJL":["3H","3J","3E","3C","3A","3F","3L","3I"],"ACEFHIJK":["3H","3J","3E","3C","3A","3F","3I","3K"],"ACEFGJKL":["3E","3G","3J","3C","3A","3F","3L","3K"],"ACEFGIKL":["3E","3G","3I","3C","3A","3F","3L","3K"],"ACEFGIJL":["3E","3G","3J","3C","3A","3F","3L","3I"],"ACEFGIJK":["3E","3G","3J","3C","3A","3F","3I","3K"],"ACEFGHKL":["3H","3G","3E","3C","3A","3F","3L","3K"],"ACEFGHJL":["3H","3G","3J","3C","3A","3F","3L","3E"],"ACEFGHJK":["3H","3G","3J","3C","3A","3F","3E","3K"],"ACEFGHIL":["3H","3G","3E","3C","3A","3F","3L","3I"],"ACEFGHIK":["3H","3G","3E","3C","3A","3F","3I","3K"],"ACEFGHIJ":["3H","3G","3J","3C","3A","3F","3E","3I"],"ACDHIJKL":["3H","3J","3I","3C","3A","3D","3L","3K"],"ACDGIJKL":["3I","3G","3J","3C","3A","3D","3L","3K"],"ACDGHJKL":["3H","3G","3J","3C","3A","3D","3L","3K"],"ACDGHIKL":["3H","3G","3I","3C","3A","3D","3L","3K"],"ACDGHIJL":["3H","3G","3J","3C","3A","3D","3L","3I"],"ACDGHIJK":["3H","3G","3J","3C","3A","3D","3I","3K"],"ACDFIJKL":["3C","3J","3I","3D","3A","3F","3L","3K"],"ACDFHJKL":["3H","3J","3F","3C","3A","3D","3L","3K"],"ACDFHIKL":["3H","3F","3I","3C","3A","3D","3L","3K"],"ACDFHIJL":["3H","3J","3F","3C","3A","3D","3L","3I"],"ACDFHIJK":["3H","3J","3F","3C","3A","3D","3I","3K"],"ACDFGJKL":["3C","3G","3J","3D","3A","3F","3L","3K"],"ACDFGIKL":["3C","3G","3I","3D","3A","3F","3L","3K"],"ACDFGIJL":["3C","3G","3J","3D","3A","3F","3L","3I"],"ACDFGIJK":["3C","3G","3J","3D","3A","3F","3I","3K"],"ACDFGHKL":["3H","3G","3F","3C","3A","3D","3L","3K"],"ACDFGHJL":["3C","3G","3J","3D","3A","3F","3L","3H"],"ACDFGHJK":["3H","3G","3J","3C","3A","3F","3D","3K"],"ACDFGHIL":["3H","3G","3F","3C","3A","3D","3L","3I"],"ACDFGHIK":["3H","3G","3F","3C","3A","3D","3I","3K"],"ACDFGHIJ":["3H","3G","3J","3C","3A","3F","3D","3I"],"ACDEIJKL":["3E","3J","3I","3C","3A","3D","3L","3K"],"ACDEHJKL":["3H","3J","3E","3C","3A","3D","3L","3K"],"ACDEHIKL":["3H","3E","3I","3C","3A","3D","3L","3K"],"ACDEHIJL":["3H","3J","3E","3C","3A","3D","3L","3I"],"ACDEHIJK":["3H","3J","3E","3C","3A","3D","3I","3K"],"ACDEGJKL":["3E","3G","3J","3C","3A","3D","3L","3K"],"ACDEGIKL":["3E","3G","3I","3C","3A","3D","3L","3K"],"ACDEGIJL":["3E","3G","3J","3C","3A","3D","3L","3I"],"ACDEGIJK":["3E","3G","3J","3C","3A","3D","3I","3K"],"ACDEGHKL":["3H","3G","3E","3C","3A","3D","3L","3K"],"ACDEGHJL":["3H","3G","3J","3C","3A","3D","3L","3E"],"ACDEGHJK":["3H","3G","3J","3C","3A","3D","3E","3K"],"ACDEGHIL":["3H","3G","3E","3C","3A","3D","3L","3I"],"ACDEGHIK":["3H","3G","3E","3C","3A","3D","3I","3K"],"ACDEGHIJ":["3H","3G","3J","3C","3A","3D","3E","3I"],"ACDEFJKL":["3C","3J","3E","3D","3A","3F","3L","3K"],"ACDEFIKL":["3C","3E","3I","3D","3A","3F","3L","3K"],"ACDEFIJL":["3C","3J","3E","3D","3A","3F","3L","3I"],"ACDEFIJK":["3C","3J","3E","3D","3A","3F","3I","3K"],"ACDEFHKL":["3H","3E","3F","3C","3A","3D","3L","3K"],"ACDEFHJL":["3H","3J","3F","3C","3A","3D","3L","3E"],"ACDEFHJK":["3H","3J","3E","3C","3A","3F","3D","3K"],"ACDEFHIL":["3H","3E","3F","3C","3A","3D","3L","3I"],"ACDEFHIK":["3H","3E","3F","3C","3A","3D","3I","3K"],"ACDEFHIJ":["3H","3J","3E","3C","3A","3F","3D","3I"],"ACDEFGKL":["3C","3G","3E","3D","3A","3F","3L","3K"],"ACDEFGJL":["3C","3G","3J","3D","3A","3F","3L","3E"],"ACDEFGJK":["3C","3G","3J","3D","3A","3F","3E","3K"],"ACDEFGIL":["3C","3G","3E","3D","3A","3F","3L","3I"],"ACDEFGIK":["3C","3G","3E","3D","3A","3F","3I","3K"],"ACDEFGIJ":["3C","3G","3J","3D","3A","3F","3E","3I"],"ACDEFGHL":["3H","3G","3F","3C","3A","3D","3L","3E"],"ACDEFGHK":["3H","3G","3E","3C","3A","3F","3D","3K"],"ACDEFGHJ":["3H","3G","3J","3C","3A","3F","3D","3E"],"ACDEFGHI":["3H","3G","3E","3C","3A","3F","3D","3I"],"ABGHIJKL":["3H","3J","3B","3A","3I","3G","3L","3K"],"ABFHIJKL":["3H","3J","3B","3A","3I","3F","3L","3K"],"ABFGIJKL":["3I","3J","3B","3F","3A","3G","3L","3K"],"ABFGHJKL":["3H","3J","3B","3F","3A","3G","3L","3K"],"ABFGHIKL":["3H","3G","3B","3A","3I","3F","3L","3K"],"ABFGHIJL":["3H","3J","3B","3F","3A","3G","3L","3I"],"ABFGHIJK":["3H","3J","3B","3F","3A","3G","3I","3K"],"ABEHIJKL":["3E","3J","3B","3A","3I","3H","3L","3K"],"ABEGIJKL":["3E","3J","3B","3A","3I","3G","3L","3K"],"ABEGHJKL":["3E","3J","3B","3A","3H","3G","3L","3K"],"ABEGHIKL":["3E","3G","3B","3A","3I","3H","3L","3K"],"ABEGHIJL":["3E","3J","3B","3A","3H","3G","3L","3I"],"ABEGHIJK":["3E","3J","3B","3A","3H","3G","3I","3K"],"ABEFIJKL":["3E","3J","3B","3A","3I","3F","3L","3K"],"ABEFHJKL":["3E","3J","3B","3F","3A","3H","3L","3K"],"ABEFHIKL":["3E","3I","3B","3F","3A","3H","3L","3K"],"ABEFHIJL":["3E","3J","3B","3F","3A","3H","3L","3I"],"ABEFHIJK":["3E","3J","3B","3F","3A","3H","3I","3K"],"ABEFGJKL":["3E","3J","3B","3F","3A","3G","3L","3K"],"ABEFGIKL":["3E","3G","3B","3A","3I","3F","3L","3K"],"ABEFGIJL":["3E","3J","3B","3F","3A","3G","3L","3I"],"ABEFGIJK":["3E","3J","3B","3F","3A","3G","3I","3K"],"ABEFGHKL":["3E","3G","3B","3F","3A","3H","3L","3K"],"ABEFGHJL":["3H","3J","3B","3F","3A","3G","3L","3E"],"ABEFGHJK":["3H","3J","3B","3F","3A","3G","3E","3K"],"ABEFGHIL":["3E","3G","3B","3F","3A","3H","3L","3I"],"ABEFGHIK":["3E","3G","3B","3F","3A","3H","3I","3K"],"ABEFGHIJ":["3H","3J","3B","3F","3A","3G","3E","3I"],"ABDHIJKL":["3I","3J","3B","3D","3A","3H","3L","3K"],"ABDGIJKL":["3I","3J","3B","3D","3A","3G","3L","3K"],"ABDGHJKL":["3H","3J","3B","3D","3A","3G","3L","3K"],"ABDGHIKL":["3I","3G","3B","3D","3A","3H","3L","3K"],"ABDGHIJL":["3H","3J","3B","3D","3A","3G","3L","3I"],"ABDGHIJK":["3H","3J","3B","3D","3A","3G","3I","3K"],"ABDFIJKL":["3I","3J","3B","3D","3A","3F","3L","3K"],"ABDFHJKL":["3H","3J","3B","3D","3A","3F","3L","3K"],"ABDFHIKL":["3H","3I","3B","3D","3A","3F","3L","3K"],"ABDFHIJL":["3H","3J","3B","3D","3A","3F","3L","3I"],"ABDFHIJK":["3H","3J","3B","3D","3A","3F","3I","3K"],"ABDFGJKL":["3F","3J","3B","3D","3A","3G","3L","3K"],"ABDFGIKL":["3I","3G","3B","3D","3A","3F","3L","3K"],"ABDFGIJL":["3F","3J","3B","3D","3A","3G","3L","3I"],"ABDFGIJK":["3F","3J","3B","3D","3A","3G","3I","3K"],"ABDFGHKL":["3H","3G","3B","3D","3A","3F","3L","3K"],"ABDFGHJL":["3H","3G","3B","3D","3A","3F","3L","3J"],"ABDFGHJK":["3H","3G","3B","3D","3A","3F","3J","3K"],"ABDFGHIL":["3H","3G","3B","3D","3A","3F","3L","3I"],"ABDFGHIK":["3H","3G","3B","3D","3A","3F","3I","3K"],"ABDFGHIJ":["3H","3G","3B","3D","3A","3F","3I","3J"],"ABDEIJKL":["3E","3J","3B","3A","3I","3D","3L","3K"],"ABDEHJKL":["3E","3J","3B","3D","3A","3H","3L","3K"],"ABDEHIKL":["3E","3I","3B","3D","3A","3H","3L","3K"],"ABDEHIJL":["3E","3J","3B","3D","3A","3H","3L","3I"],"ABDEHIJK":["3E","3J","3B","3D","3A","3H","3I","3K"],"ABDEGJKL":["3E","3J","3B","3D","3A","3G","3L","3K"],"ABDEGIKL":["3E","3G","3B","3A","3I","3D","3L","3K"],"ABDEGIJL":["3E","3J","3B","3D","3A","3G","3L","3I"],"ABDEGIJK":["3E","3J","3B","3D","3A","3G","3I","3K"],"ABDEGHKL":["3E","3G","3B","3D","3A","3H","3L","3K"],"ABDEGHJL":["3H","3J","3B","3D","3A","3G","3L","3E"],"ABDEGHJK":["3H","3J","3B","3D","3A","3G","3E","3K"],"ABDEGHIL":["3E","3G","3B","3D","3A","3H","3L","3I"],"ABDEGHIK":["3E","3G","3B","3D","3A","3H","3I","3K"],"ABDEGHIJ":["3H","3J","3B","3D","3A","3G","3E","3I"],"ABDEFJKL":["3E","3J","3B","3D","3A","3F","3L","3K"],"ABDEFIKL":["3E","3I","3B","3D","3A","3F","3L","3K"],"ABDEFIJL":["3E","3J","3B","3D","3A","3F","3L","3I"],"ABDEFIJK":["3E","3J","3B","3D","3A","3F","3I","3K"],"ABDEFHKL":["3H","3E","3B","3D","3A","3F","3L","3K"],"ABDEFHJL":["3H","3J","3B","3D","3A","3F","3L","3E"],"ABDEFHJK":["3H","3J","3B","3D","3A","3F","3E","3K"],"ABDEFHIL":["3H","3E","3B","3D","3A","3F","3L","3I"],"ABDEFHIK":["3H","3E","3B","3D","3A","3F","3I","3K"],"ABDEFHIJ":["3H","3J","3B","3D","3A","3F","3E","3I"],"ABDEFGKL":["3E","3G","3B","3D","3A","3F","3L","3K"],"ABDEFGJL":["3E","3G","3B","3D","3A","3F","3L","3J"],"ABDEFGJK":["3E","3G","3B","3D","3A","3F","3J","3K"],"ABDEFGIL":["3E","3G","3B","3D","3A","3F","3L","3I"],"ABDEFGIK":["3E","3G","3B","3D","3A","3F","3I","3K"],"ABDEFGIJ":["3E","3G","3B","3D","3A","3F","3I","3J"],"ABDEFGHL":["3H","3G","3B","3D","3A","3F","3L","3E"],"ABDEFGHK":["3H","3G","3B","3D","3A","3F","3E","3K"],"ABDEFGHJ":["3H","3G","3B","3D","3A","3F","3E","3J"],"ABDEFGHI":["3H","3G","3B","3D","3A","3F","3E","3I"],"ABCHIJKL":["3I","3J","3B","3C","3A","3H","3L","3K"],"ABCGIJKL":["3I","3J","3B","3C","3A","3G","3L","3K"],"ABCGHJKL":["3H","3J","3B","3C","3A","3G","3L","3K"],"ABCGHIKL":["3I","3G","3B","3C","3A","3H","3L","3K"],"ABCGHIJL":["3H","3J","3B","3C","3A","3G","3L","3I"],"ABCGHIJK":["3H","3J","3B","3C","3A","3G","3I","3K"],"ABCFIJKL":["3I","3J","3B","3C","3A","3F","3L","3K"],"ABCFHJKL":["3H","3J","3B","3C","3A","3F","3L","3K"],"ABCFHIKL":["3H","3I","3B","3C","3A","3F","3L","3K"],"ABCFHIJL":["3H","3J","3B","3C","3A","3F","3L","3I"],"ABCFHIJK":["3H","3J","3B","3C","3A","3F","3I","3K"],"ABCFGJKL":["3C","3J","3B","3F","3A","3G","3L","3K"],"ABCFGIKL":["3I","3G","3B","3C","3A","3F","3L","3K"],"ABCFGIJL":["3C","3J","3B","3F","3A","3G","3L","3I"],"ABCFGIJK":["3C","3J","3B","3F","3A","3G","3I","3K"],"ABCFGHKL":["3H","3G","3B","3C","3A","3F","3L","3K"],"ABCFGHJL":["3H","3G","3B","3C","3A","3F","3L","3J"],"ABCFGHJK":["3H","3G","3B","3C","3A","3F","3J","3K"],"ABCFGHIL":["3H","3G","3B","3C","3A","3F","3L","3I"],"ABCFGHIK":["3H","3G","3B","3C","3A","3F","3I","3K"],"ABCFGHIJ":["3H","3G","3B","3C","3A","3F","3I","3J"],"ABCEIJKL":["3E","3J","3B","3A","3I","3C","3L","3K"],"ABCEHJKL":["3E","3J","3B","3C","3A","3H","3L","3K"],"ABCEHIKL":["3E","3I","3B","3C","3A","3H","3L","3K"],"ABCEHIJL":["3E","3J","3B","3C","3A","3H","3L","3I"],"ABCEHIJK":["3E","3J","3B","3C","3A","3H","3I","3K"],"ABCEGJKL":["3E","3J","3B","3C","3A","3G","3L","3K"],"ABCEGIKL":["3E","3G","3B","3A","3I","3C","3L","3K"],"ABCEGIJL":["3E","3J","3B","3C","3A","3G","3L","3I"],"ABCEGIJK":["3E","3J","3B","3C","3A","3G","3I","3K"],"ABCEGHKL":["3E","3G","3B","3C","3A","3H","3L","3K"],"ABCEGHJL":["3H","3J","3B","3C","3A","3G","3L","3E"],"ABCEGHJK":["3H","3J","3B","3C","3A","3G","3E","3K"],"ABCEGHIL":["3E","3G","3B","3C","3A","3H","3L","3I"],"ABCEGHIK":["3E","3G","3B","3C","3A","3H","3I","3K"],"ABCEGHIJ":["3H","3J","3B","3C","3A","3G","3E","3I"],"ABCEFJKL":["3E","3J","3B","3C","3A","3F","3L","3K"],"ABCEFIKL":["3E","3I","3B","3C","3A","3F","3L","3K"],"ABCEFIJL":["3E","3J","3B","3C","3A","3F","3L","3I"],"ABCEFIJK":["3E","3J","3B","3C","3A","3F","3I","3K"],"ABCEFHKL":["3H","3E","3B","3C","3A","3F","3L","3K"],"ABCEFHJL":["3H","3J","3B","3C","3A","3F","3L","3E"],"ABCEFHJK":["3H","3J","3B","3C","3A","3F","3E","3K"],"ABCEFHIL":["3H","3E","3B","3C","3A","3F","3L","3I"],"ABCEFHIK":["3H","3E","3B","3C","3A","3F","3I","3K"],"ABCEFHIJ":["3H","3J","3B","3C","3A","3F","3E","3I"],"ABCEFGKL":["3E","3G","3B","3C","3A","3F","3L","3K"],"ABCEFGJL":["3E","3G","3B","3C","3A","3F","3L","3J"],"ABCEFGJK":["3E","3G","3B","3C","3A","3F","3J","3K"],"ABCEFGIL":["3E","3G","3B","3C","3A","3F","3L","3I"],"ABCEFGIK":["3E","3G","3B","3C","3A","3F","3I","3K"],"ABCEFGIJ":["3E","3G","3B","3C","3A","3F","3I","3J"],"ABCEFGHL":["3H","3G","3B","3C","3A","3F","3L","3E"],"ABCEFGHK":["3H","3G","3B","3C","3A","3F","3E","3K"],"ABCEFGHJ":["3H","3G","3B","3C","3A","3F","3E","3J"],"ABCEFGHI":["3H","3G","3B","3C","3A","3F","3E","3I"],"ABCDIJKL":["3I","3J","3B","3C","3A","3D","3L","3K"],"ABCDHJKL":["3H","3J","3B","3C","3A","3D","3L","3K"],"ABCDHIKL":["3H","3I","3B","3C","3A","3D","3L","3K"],"ABCDHIJL":["3H","3J","3B","3C","3A","3D","3L","3I"],"ABCDHIJK":["3H","3J","3B","3C","3A","3D","3I","3K"],"ABCDGJKL":["3C","3J","3B","3D","3A","3G","3L","3K"],"ABCDGIKL":["3I","3G","3B","3C","3A","3D","3L","3K"],"ABCDGIJL":["3C","3J","3B","3D","3A","3G","3L","3I"],"ABCDGIJK":["3C","3J","3B","3D","3A","3G","3I","3K"],"ABCDGHKL":["3H","3G","3B","3C","3A","3D","3L","3K"],"ABCDGHJL":["3H","3G","3B","3C","3A","3D","3L","3J"],"ABCDGHJK":["3H","3G","3B","3C","3A","3D","3J","3K"],"ABCDGHIL":["3H","3G","3B","3C","3A","3D","3L","3I"],"ABCDGHIK":["3H","3G","3B","3C","3A","3D","3I","3K"],"ABCDGHIJ":["3H","3G","3B","3C","3A","3D","3I","3J"],"ABCDFJKL":["3C","3J","3B","3D","3A","3F","3L","3K"],"ABCDFIKL":["3C","3I","3B","3D","3A","3F","3L","3K"],"ABCDFIJL":["3C","3J","3B","3D","3A","3F","3L","3I"],"ABCDFIJK":["3C","3J","3B","3D","3A","3F","3I","3K"],"ABCDFHKL":["3H","3F","3B","3C","3A","3D","3L","3K"],"ABCDFHJL":["3C","3J","3B","3D","3A","3F","3L","3H"],"ABCDFHJK":["3H","3J","3B","3C","3A","3F","3D","3K"],"ABCDFHIL":["3H","3F","3B","3C","3A","3D","3L","3I"],"ABCDFHIK":["3H","3F","3B","3C","3A","3D","3I","3K"],"ABCDFHIJ":["3H","3J","3B","3C","3A","3F","3D","3I"],"ABCDFGKL":["3C","3G","3B","3D","3A","3F","3L","3K"],"ABCDFGJL":["3C","3G","3B","3D","3A","3F","3L","3J"],"ABCDFGJK":["3C","3G","3B","3D","3A","3F","3J","3K"],"ABCDFGIL":["3C","3G","3B","3D","3A","3F","3L","3I"],"ABCDFGIK":["3C","3G","3B","3D","3A","3F","3I","3K"],"ABCDFGIJ":["3C","3G","3B","3D","3A","3F","3I","3J"],"ABCDFGHL":["3C","3G","3B","3D","3A","3F","3L","3H"],"ABCDFGHK":["3H","3G","3B","3C","3A","3F","3D","3K"],"ABCDFGHJ":["3H","3G","3B","3C","3A","3F","3D","3J"],"ABCDFGHI":["3H","3G","3B","3C","3A","3F","3D","3I"],"ABCDEJKL":["3E","3J","3B","3C","3A","3D","3L","3K"],"ABCDEIKL":["3E","3I","3B","3C","3A","3D","3L","3K"],"ABCDEIJL":["3E","3J","3B","3C","3A","3D","3L","3I"],"ABCDEIJK":["3E","3J","3B","3C","3A","3D","3I","3K"],"ABCDEHKL":["3H","3E","3B","3C","3A","3D","3L","3K"],"ABCDEHJL":["3H","3J","3B","3C","3A","3D","3L","3E"],"ABCDEHJK":["3H","3J","3B","3C","3A","3D","3E","3K"],"ABCDEHIL":["3H","3E","3B","3C","3A","3D","3L","3I"],"ABCDEHIK":["3H","3E","3B","3C","3A","3D","3I","3K"],"ABCDEHIJ":["3H","3J","3B","3C","3A","3D","3E","3I"],"ABCDEGKL":["3E","3G","3B","3C","3A","3D","3L","3K"],"ABCDEGJL":["3E","3G","3B","3C","3A","3D","3L","3J"],"ABCDEGJK":["3E","3G","3B","3C","3A","3D","3J","3K"],"ABCDEGIL":["3E","3G","3B","3C","3A","3D","3L","3I"],"ABCDEGIK":["3E","3G","3B","3C","3A","3D","3I","3K"],"ABCDEGIJ":["3E","3G","3B","3C","3A","3D","3I","3J"],"ABCDEGHL":["3H","3G","3B","3C","3A","3D","3L","3E"],"ABCDEGHK":["3H","3G","3B","3C","3A","3D","3E","3K"],"ABCDEGHJ":["3H","3G","3B","3C","3A","3D","3E","3J"],"ABCDEGHI":["3H","3G","3B","3C","3A","3D","3E","3I"],"ABCDEFKL":["3C","3E","3B","3D","3A","3F","3L","3K"],"ABCDEFJL":["3C","3J","3B","3D","3A","3F","3L","3E"],"ABCDEFJK":["3C","3J","3B","3D","3A","3F","3E","3K"],"ABCDEFIL":["3C","3E","3B","3D","3A","3F","3L","3I"],"ABCDEFIK":["3C","3E","3B","3D","3A","3F","3I","3K"],"ABCDEFIJ":["3C","3J","3B","3D","3A","3F","3E","3I"],"ABCDEFHL":["3H","3F","3B","3C","3A","3D","3L","3E"],"ABCDEFHK":["3H","3E","3B","3C","3A","3F","3D","3K"],"ABCDEFHJ":["3H","3J","3B","3C","3A","3F","3D","3E"],"ABCDEFHI":["3H","3E","3B","3C","3A","3F","3D","3I"],"ABCDEFGL":["3C","3G","3B","3D","3A","3F","3L","3E"],"ABCDEFGK":["3C","3G","3B","3D","3A","3F","3E","3K"],"ABCDEFGJ":["3C","3G","3B","3D","3A","3F","3E","3J"],"ABCDEFGI":["3C","3G","3B","3D","3A","3F","3E","3I"],"ABCDEFGH":["3H","3G","3B","3C","3A","3F","3D","3E"]},

  r16Pairings: [
    { a: "R32-M1",  b: "R32-M2"  },
    { a: "R32-M3",  b: "R32-M4"  },
    { a: "R32-M5",  b: "R32-M6"  },
    { a: "R32-M7",  b: "R32-M8"  },
    { a: "R32-M9",  b: "R32-M10" },
    { a: "R32-M11", b: "R32-M12" },
    { a: "R32-M13", b: "R32-M14" },
    { a: "R32-M15", b: "R32-M16" },
  ],

  qfPairings: [
    { a: "R16-M1", b: "R16-M2" },
    { a: "R16-M3", b: "R16-M4" },
    { a: "R16-M5", b: "R16-M6" },
    { a: "R16-M7", b: "R16-M8" },
  ],

  sfPairings: [
    { a: "QF-M1", b: "QF-M2" },
    { a: "QF-M3", b: "QF-M4" },
  ],
};
