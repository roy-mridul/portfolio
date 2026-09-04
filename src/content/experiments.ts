import type { Experiment } from './types'

export const experiments: Experiment[] = [
  {
    slug: 'offline-first-vue',
    title: 'Offline-first data sync for Vue 3',
    category: 'offline-first',
    stage: 'ongoing-research',
    date: '2026',
    question:
      'How can a Vue application stay reliable and useful when the network isn’t — without turning every screen into a sync bug waiting to happen?',
    tried:
      'Researching local-first architectures for Vue 3, including ElectricSQL as a sync layer between a local store and a backend database. Alongside that, examining — from what’s publicly documented, not from their source — how products like Notion, Tana and MoreApp approach offline/local interaction, synchronization and data consistency.',
    technologies: ['Vue 3', 'TypeScript', 'ElectricSQL', 'SQL'],
    result:
      'Early-stage research, not a shipped system — a working hypothesis rather than a conclusion. A strong candidate for a future case study, not a claim that a Notion/Tana-style system has been built, and not a claim of ElectricSQL expertise beyond what’s been investigated so far.',
    learned:
      'Local-first and offline-first solve overlapping but different problems — "works without a network" and "feels instant regardless of the network" push toward different trade-offs around conflict resolution and source of truth.',
  },
  {
    slug: 'agentic-coding-figma-prototype',
    title: 'Agentic coding: from a Figma prototype to a Vue frontend',
    category: 'agentic-coding',
    stage: 'ongoing-research',
    date: '2026',
    question:
      'What actually changes in frontend implementation when a coding agent does the first pass — and how does the shape of the spec change what the agent gets right?',
    tried:
      'Using Claude Code to implement an existing Figma prototype as a Vue 3 frontend against mock data, deliberately observing and documenting the process rather than just shipping the result — where the agent needed more spec, where it made reasonable assumptions, and where a human decision was unavoidable.',
    technologies: ['Vue 3', 'TypeScript', 'Claude Code', 'Figma'],
    result:
      'Early observation, not a finished study: the agent handles well-specified UI structure convincingly and needs the most human steering around ambiguous interaction states the design file doesn’t fully specify. A working hypothesis, not a conclusion — the experiment is ongoing.',
    learned:
      'The quality of the output tracks the quality of the specification more than the quality of the prompt — which is what pulled me toward specification-driven development as its own topic worth understanding.',
  },
]
