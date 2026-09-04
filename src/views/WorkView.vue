<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '@/content/projects'
import type { ProjectKind } from '@/content/types'
import PageHeader from '@/components/common/PageHeader.vue'
import ProjectRow from '@/components/work/ProjectRow.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta(() => ({
  title: 'Work',
  description:
    'Selected engineering work from Mridul Roy, by kind — production, prototype, research and academic — with context, problem, approach and outcome, not just a technology list.',
  path: '/work',
}))

interface Group {
  kind: ProjectKind
  label: string
  note: string
}

const groups: Group[] = [
  {
    kind: 'production',
    label: 'Production',
    note: 'Case studies from professional engineering work are in development.',
  },
  {
    kind: 'prototype',
    label: 'Prototype',
    note: 'Hands-on builds in progress — currently tracked in the experiments log.',
  },
  {
    kind: 'research',
    label: 'Research',
    note: 'Active investigations — currently tracked in the experiments log.',
  },
  {
    kind: 'academic',
    label: 'Academic',
    note: '',
  },
]

const grouped = computed(() =>
  groups.map((group) => ({
    ...group,
    items: projects.filter((p) => p.kind === group.kind),
  })),
)
</script>

<template>
  <div>
    <PageHeader
      eyebrow="Work"
      title="Engineering stories, not tech-stack lists."
      lead="Context, problem, approach, architecture and outcome — grouped by what kind of work it actually is, including private work described without exposing source or confidential detail."
    />

    <div class="container work-view">
      <section v-for="group in grouped" :key="group.kind" class="work-view__group">
        <RevealOnScroll>
          <h2 class="work-view__group-title">
            {{ group.label }}
            <span v-if="group.items.length" class="mono work-view__group-count">{{
              group.items.length
            }}</span>
          </h2>

          <div v-if="group.items.length" class="work-view__list">
            <ProjectRow
              v-for="(project, i) in group.items"
              :key="project.slug"
              :project="project"
              :index="String(i + 1).padStart(2, '0')"
            />
          </div>

          <p v-else-if="group.note" class="work-view__group-note">
            {{ group.note }}
            <router-link
              v-if="group.kind === 'prototype' || group.kind === 'research'"
              to="/experiments"
            >
              See the experiments log →
            </router-link>
          </p>
        </RevealOnScroll>
      </section>
    </div>
  </div>
</template>

<style scoped>
.work-view {
  padding-block: var(--space-8) var(--space-10);
}

.work-view__group {
  padding-block: var(--space-7);
  border-top: 1px solid var(--line);
}

.work-view__group:last-child {
  border-bottom: 1px solid var(--line);
}

.work-view__group-title {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  font-family: var(--font-display);
  font-size: var(--step-2);
}

.work-view__group-count {
  font-size: var(--step--1);
  color: var(--ink-faint);
}

.work-view__list {
  margin-top: var(--space-2);
}

.work-view__group-note {
  margin-top: var(--space-4);
  color: var(--ink-muted);
  max-width: 48rem;
}

.work-view__group-note a {
  margin-left: var(--space-2);
  color: var(--signal);
}

.work-view__group-note a:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
