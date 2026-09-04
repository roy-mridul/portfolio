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

/** What kind of case study this is — lets Work group honestly instead of implying every entry is a shipped product. */
export type ProjectKind = 'production' | 'prototype' | 'research' | 'academic'

export interface Project {
  slug: string
  title: string
  tagline: string
  visibility: ProjectVisibility
  status: ProjectStatus
  kind: ProjectKind
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

/**
 * What this entry actually is, not just whether it's active — keeps a
 * half-finished investigation from reading like shipped software.
 */
export type ExperimentStage = 'ongoing-research' | 'experiment' | 'prototype' | 'shipped'

export interface Experiment {
  slug: string
  title: string
  category: ExperimentCategory
  stage: ExperimentStage
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
