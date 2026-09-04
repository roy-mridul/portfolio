import type { Project } from './types'

/**
 * TODO: [Production case studies]
 *
 * No professional project has enough public detail yet (architecture,
 * decisions, outcome) to write an honest case study — only a role summary
 * and tech stack were provided. Rather than inventing outcomes, that
 * category stays empty until real write-ups exist; see WorkView for how
 * the empty state is presented (in development, not "missing").
 *
 * To add one: fill in a Project object per src/content/types.ts. Private/
 * professional work can skip source and stay high-level — the type
 * intentionally has no field for exposing private code.
 */
export const projects: Project[] = [
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
      'Modelled stochastic gas-price dynamics and applied the Least Squares Monte Carlo method — regression over simulated price paths, in the style of Longstaff–Schwartz — to approximate the storage’s optimal operating policy and value the optionality it represents.',
    decisions: [
      'Used regression-based continuation-value estimation (Longstaff–Schwartz) rather than a full finite-difference PDE solve, trading some theoretical precision for tractability on a higher-dimensional, path-dependent problem.',
      'Modelled the physical storage constraints — injection/withdrawal rates, capacity limits — directly in the simulation rather than treating the facility as a pure financial option.',
    ],
    technologies: ['MATLAB'],
    outcome:
      'Completed as the M.Sc. thesis for Computer Simulation in Science at Bergische Universität Wuppertal.',
    learned:
      'Numerical methods for path-dependent, constrained optimization problems generalize further than they first appear — the same regression-based approach to estimating "what happens if I wait" shows up again in how I think about system and architecture trade-offs today.',
  },
]
