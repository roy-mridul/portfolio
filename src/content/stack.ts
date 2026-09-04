import type { TechTag } from './types'

/**
 * Two tiers, deliberately not three: technologies used professionally, and
 * engineering concepts worked with day to day. Topics under active
 * investigation (offline-first, AI-assisted development, etc.) live in
 * interests.ts instead — they already carry an explicit "interest"/
 * "research" label there via EngagementBadge, so they don't need a second,
 * unlabelled tag list here that could read as claimed expertise.
 */
export const stack: Record<string, TechTag[]> = {
  Professional: [
    { label: 'TypeScript', category: 'frontend' },
    { label: 'JavaScript', category: 'frontend' },
    { label: 'Vue', category: 'frontend' },
    { label: 'React', category: 'frontend' },
    { label: 'HTML', category: 'frontend' },
    { label: 'CSS', category: 'frontend' },
    { label: 'Java', category: 'backend' },
    { label: 'Spring Boot', category: 'backend' },
    { label: 'REST APIs', category: 'backend' },
    { label: 'SQL', category: 'data' },
  ],
  Engineering: [
    { label: 'Frontend architecture', category: 'architecture' },
    { label: 'API integration', category: 'architecture' },
    { label: 'Production systems', category: 'infrastructure' },
    { label: 'Release & incident management', category: 'architecture' },
  ],
}
