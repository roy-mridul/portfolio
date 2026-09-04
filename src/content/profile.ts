export const profile = {
  name: 'Mridul Roy',
  fullName: 'Mridul Chandra Roy',
  initials: 'MR',
  role: 'Software Engineer',
  location: 'Hamburg, Germany',
  site: 'https://mridulroy.dev',

  // Used in <meta> descriptions — can run longer than the terse hero copy.
  tagline:
    'Frontend-focused software engineer with a computational-science background, building interfaces and investigating the systems behind them.',

  // What the hero actually renders — deliberately short. WHO / WHAT / HOW, nothing more.
  heroStatement: 'I build interfaces and investigate the systems behind them.',
  heroTags: ['Frontend', 'Systems', 'Experiments'],

  // Short narrative used across About / meta description. Keep it factual.
  bio: [
    'I’m a software engineer based in Hamburg, with about nine years in the industry — nearly all of it at dpa. I started as a junior web developer, spent a year running service and release management for a publisher-facing product, and have worked as a software engineer, focused on the frontend, since 2021. My day-to-day tools are TypeScript, Vue and React, with enough Java, Spring Boot and SQL to be dangerous on the other side of the API.',
    'I don’t treat frontend and backend as separate concerns. Building interfaces, integrating with APIs, and understanding the systems and data behind them are part of the same job — that’s been true across every role I’ve had, from writing a feature to being the one who owns what happens when it breaks.',
    'Before any of that, I trained as a computational scientist — modelling stochastic systems and numerical methods rather than writing production code. It’s a different kind of work than software engineering; the M.Sc. thesis is a concrete example of it.',
    'Outside of client work, I use my own time to ask questions I can’t always answer on the job: how offline-first applications stay consistent, what changes when an AI agent writes the first draft of a frontend, whether a specification can do more work than a ticket. Some of that turns into working prototypes. Some of it stays a note. Both are on this site.',
  ],

  academic: {
    degree: 'M.Sc. Computer Simulation in Science',
    university: 'Bergische Universität Wuppertal',
    period: '2012–2014',
    specialization: 'Financial Mathematics',
    note: 'Contributes to my interest in computational thinking, modelling and experimentation — not a research career. I’ve considered a PhD / industry doctorate alongside professional work, and it remains a possible future direction rather than a current plan.',
    thesis: {
      title: 'The Least Squares Monte Carlo Method for the Valuation of Gas Storages',
      slug: 'least-squares-monte-carlo-gas-storage',
      summary:
        'Applied Least Squares Monte Carlo (Longstaff–Schwartz-style) methods to value the embedded optionality of a physical gas storage facility — modelling stochastic gas-price dynamics alongside real injection, withdrawal and capacity constraints, implemented in MATLAB.',
    },
  },

  philosophy: {
    heading: 'Question, explore, build.',
    lead: 'The way I approach most technical problems follows the same loop, whether it’s a production bug or a weekend prototype.',
    loop: ['Question', 'Explore', 'Understand', 'Experiment', 'Build', 'Learn', 'Iterate'],
    body: 'I’d rather spend an extra hour understanding why an approach works than copy it and hope. That instinct is slower on small tasks and pays off on everything else — architecture decisions, framework choices, and the kind of bugs that only show up once you understand the system they live in.',
  },

  social: {
    github: 'https://github.com/roy-mridul',
    repo: 'https://github.com/roy-mridul/portfolio',
    linkedin: 'https://www.linkedin.com/in/mridul-roy-de',
    // TODO: [Public contact email] — confirm which address should appear on the site.
    email: undefined as string | undefined,
  },
}
