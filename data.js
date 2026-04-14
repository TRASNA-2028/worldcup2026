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
        { name: "England",         flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
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

  // Round of 32 pairings: [Group, Position (1-based)] or ['3rd', n]
  // Official FIFA 2026 R32 bracket:
  // M1:  1A vs 2C   M2:  1B vs 2D   M3:  1C vs 2A   M4:  1D vs 2B
  // M5:  1E vs 2G   M6:  1F vs 2H   M7:  1G vs 2E   M8:  1H vs 2F
  // M9:  1I vs 2K   M10: 1J vs 2L   M11: 1K vs 2I   M12: 1L vs 2J
  // M13–M16: best 8 third-placed teams (manually assigned)
  r32Pairings: [
    { a: ["A",1], b: ["C",2] },  // M1
    { a: ["B",1], b: ["D",2] },  // M2
    { a: ["C",1], b: ["A",2] },  // M3
    { a: ["D",1], b: ["B",2] },  // M4
    { a: ["E",1], b: ["G",2] },  // M5
    { a: ["F",1], b: ["H",2] },  // M6
    { a: ["G",1], b: ["E",2] },  // M7
    { a: ["H",1], b: ["F",2] },  // M8
    { a: ["I",1], b: ["K",2] },  // M9
    { a: ["J",1], b: ["L",2] },  // M10
    { a: ["K",1], b: ["I",2] },  // M11
    { a: ["L",1], b: ["J",2] },  // M12
    { a: ["3rd",1], b: ["3rd",2] }, // M13
    { a: ["3rd",3], b: ["3rd",4] }, // M14
    { a: ["3rd",5], b: ["3rd",6] }, // M15
    { a: ["3rd",7], b: ["3rd",8] }, // M16
  ],

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
