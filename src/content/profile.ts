export const profile = {
  name: 'Mridul Roy',
  initials: 'MR',
  role: 'Software Engineer',
  roleSecondary: 'Product Engineer',
  yearsExperience: 9,
  site: 'https://mridulroy.dev',

  tagline: 'Software engineer building interfaces, systems, and the experiments in between.',

  heroLead:
    'I build software professionally — mostly at the interface layer — and spend my own time understanding what sits underneath it.',

  heroSub:
    "Frontend by trade. Curious about the rest of the stack by habit — state, APIs, databases, and the infrastructure holding it together.",

  // Short narrative used across About / meta description. Keep it factual.
  bio: [
    'I’m a software engineer with about nine years in the industry, nearly all of it at dpa. I started as a junior web developer, spent a year running service and release management for a publisher-facing product, and have worked as a software engineer, focused on the frontend, since 2021. My day-to-day tools are TypeScript, Vue and React, with enough Java, Spring Boot and SQL to be dangerous on the other side of the API.',
    'I don’t think of frontend and backend as separate worlds. A component tree, a REST contract, a database schema and a deployment pipeline are all the same system, viewed from different altitudes. I like moving between those altitudes — understanding why a UI decision constrains an API, or why a schema shapes what a form can do.',
    'Outside of client work, I use my own time to ask questions I can’t always answer on the job: how offline-first applications stay consistent, what changes when an AI agent writes the first draft of a frontend, whether a specification can do more work than a ticket. Some of that turns into working prototypes. Some of it stays a note. Both are on this site.',
  ],

  education: {
    degree: "Master's degree, Computer Simulation in Science",
    note: 'Contributes to my interest in computational thinking, modelling and experimentation — not a research career. I’ve considered a PhD / industry doctorate alongside professional work, and it remains a possible future direction rather than a current plan.',
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
