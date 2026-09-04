import type { TechTag } from './types'

/** Grouped by relevance, not alphabetised — order communicates emphasis. */
export const stack: Record<string, TechTag[]> = {
  Frontend: [
    { label: 'TypeScript', category: 'frontend' },
    { label: 'JavaScript', category: 'frontend' },
    { label: 'Vue', category: 'frontend' },
    { label: 'React', category: 'frontend' },
    { label: 'HTML', category: 'frontend' },
    { label: 'CSS', category: 'frontend' },
  ],
  Backend: [
    { label: 'Java', category: 'backend' },
    { label: 'Spring Boot', category: 'backend' },
    { label: 'REST APIs', category: 'backend' },
  ],
  Data: [{ label: 'SQL', category: 'data' }],
  'Broader areas': [
    { label: 'Software Architecture', category: 'architecture' },
    { label: 'AI', category: 'ai' },
    { label: 'Distributed Systems', category: 'architecture' },
    { label: 'Cloud', category: 'infrastructure' },
  ],
}
