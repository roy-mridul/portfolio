/**
 * Shared content types. Keeping these separate from components means new
 * projects/experiments/etc. can be added by editing data files only.
 */

/** How deep my engagement with a topic actually is — never blur these. */
export type EngagementKind = 'experience' | 'interest' | 'experiment' | 'research'

export type TechCategory =
  | 'frontend'
  | 'backend'
  | 'data'
  | 'architecture'
  | 'ai'
  | 'infrastructure'

export interface TechTag {
  label: string
  category: TechCategory
}

export interface ContentLink {
  label: string
  href: string
}

export type ProjectVisibility = 'public' | 'private'
export type ProjectStatus = 'active' | 'shipped' | 'exploratory'

export interface Project {
  slug: string
  title: string
  tagline: string
  visibility: ProjectVisibility
  status: ProjectStatus
  year: string
  featured: boolean
  context?: string
  problem: string
  approach: string
  architecture?: string
  decisions?: string[]
  technologies: string[]
  challenges?: string
  outcome?: string
  learned?: string
  links?: ContentLink[]
  isTodo?: boolean
}

export type ExperimentCategory =
  | 'ai'
  | 'agentic-coding'
  | 'frontend'
  | 'architecture'
  | 'offline-first'
  | 'backend'
  | 'developer-experience'

export type ExperimentStatus = 'ongoing' | 'concluded' | 'paused'

export interface Experiment {
  slug: string
  title: string
  category: ExperimentCategory
  status: ExperimentStatus
  date: string
  question: string
  tried: string
  technologies: string[]
  result: string
  learned: string
  links?: ContentLink[]
}

export interface ExperienceEntry {
  company: string
  title: string
  start: string
  end: string
  location?: string
  summary?: string
  highlights?: string[]
  links?: ContentLink[]
  isTodo?: boolean
}

export interface InterestEntry {
  label: string
  kind: EngagementKind
  note: string
  relatedExperimentSlug?: string
}
