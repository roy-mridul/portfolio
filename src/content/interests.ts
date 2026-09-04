import type { InterestEntry } from './types'

/** "Currently exploring" — topics I'm actively thinking about, not a skills list. */
export const interests: InterestEntry[] = [
  {
    label: 'Agentic coding',
    kind: 'experiment',
    note: 'Using coding agents like Claude Code as an active part of frontend implementation, not just autocomplete.',
    relatedExperimentSlug: 'agentic-coding-figma-prototype',
  },
  {
    label: 'Specification-driven development',
    kind: 'interest',
    note: 'How a well-structured specification changes what an AI coding agent can be trusted with.',
  },
  {
    label: 'Offline-first & local-first architecture',
    kind: 'research',
    note: 'Sync strategies, conflict resolution, and where the source of truth actually lives.',
    relatedExperimentSlug: 'offline-first-vue',
  },
  {
    label: 'Distributed systems',
    kind: 'interest',
    note: 'Consistency, coordination and failure modes once a system stops fitting on one machine.',
  },
  {
    label: 'Database systems',
    kind: 'interest',
    note: 'How storage engines and query planners shape the constraints an application inherits.',
  },
  {
    label: 'Cloud infrastructure',
    kind: 'interest',
    note: 'The deployment and runtime layer underneath the applications I build.',
  },
]
