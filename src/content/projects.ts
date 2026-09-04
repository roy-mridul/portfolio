import type { Project } from './types'

/**
 * TODO: [Production case studies]
 *
 * The 2020–2021 entry below is a real role, written up as a concise case
 * study rather than a fabricated project — see src/content/experience.ts
 * for the underlying facts. A production case study for the *current*
 * (2021–present) Software Engineer role is intentionally not here yet:
 * no specific system or problem has been provided to write about honestly.
 *
 * To add one: fill in a Project object per src/content/types.ts. Private/
 * professional work can skip source and stay high-level — the type
 * intentionally has no field for exposing private code.
 */
export const projects: Project[] = [
  {
    slug: 'epaper-apps-service-ownership',
    title: 'Owning the ePaper apps services',
    tagline:
      'End-to-end ownership of a publisher-facing product across Android and iOS — not just writing code for it, running it.',
    visibility: 'private',
    status: 'shipped',
    kind: 'production',
    year: '2020–2021',
    featured: true,
    context:
      'App & Service Manager role at dpa - digital services, owning the ePaper apps (Android and iOS) services for publisher customers across Germany.',
    problem:
      'A publisher-facing product needs more than development — it needs a single accountable owner for service definition, releases, incidents, and the relationship with the customers depending on it day to day.',
    approach:
      'Took end-to-end ownership of the service: service definition and branding, release planning and rollout, change-request management, and service-level reporting through the team’s ticketing system — while staying close to the backend and web technology behind the apps, and working alongside Business Relationship Management on strategic direction with publisher customers.',
    technologies: ['Android', 'iOS'],
    outcome:
      'Moved into a frontend-focused Software Engineer role at dpa-IT Services GmbH in 2021, carrying the same operational instincts — release discipline, incident awareness — into day-to-day development.',
    learned:
      'Being accountable for a service after it ships changes how you think about building one. Release rollout, incident response and customer communication stop being someone else’s problem the moment you own all three at once.',
  },
  {
    slug: 'least-squares-monte-carlo-gas-storage',
    title: 'Least Squares Monte Carlo valuation of gas storage',
    tagline:
      "Master's thesis: pricing the embedded optionality of a physical gas storage facility under stochastic price dynamics.",
    visibility: 'public',
    status: 'shipped',
    kind: 'academic',
    year: '2014',
    featured: true,
    context:
      "M.Sc. thesis in Computer Simulation in Science, specializing in financial mathematics, at Bergische Universität Wuppertal.",
    problem:
      'A gas storage facility is not just inventory — it behaves like a portfolio of embedded options: when to inject gas, when to withdraw it, and when to leave it alone, all under uncertain future prices and hard physical limits on injection rate, withdrawal rate and capacity.',
    approach:
      'Modelled stochastic gas-price dynamics and applied the Least Squares Monte Carlo method — a Longstaff–Schwartz-style regression over simulated price paths — alongside the physical operating constraints of the storage facility itself (injection/withdrawal limits, capacity).',
    technologies: ['MATLAB'],
    outcome:
      'Completed as the M.Sc. thesis for Computer Simulation in Science at Bergische Universität Wuppertal.',
  },
]
