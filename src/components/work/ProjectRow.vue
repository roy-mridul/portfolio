<script setup lang="ts">
import type { Project } from '@/content/types'
import TagPill from '@/components/common/TagPill.vue'

defineProps<{
  project: Project
  index: string
}>()

const statusLabel: Record<Project['status'], string> = {
  active: 'Active',
  shipped: 'Shipped',
  exploratory: 'Exploratory',
}
</script>

<template>
  <router-link :to="`/work/${project.slug}`" class="project-row">
    <span class="mono project-row__index">{{ index }}</span>

    <span class="project-row__body">
      <span class="project-row__title-line">
        <span class="project-row__title">{{ project.title }}</span>
        <span class="mono project-row__status">{{ statusLabel[project.status] }}</span>
      </span>
      <span class="project-row__tagline">{{ project.tagline }}</span>
      <span class="project-row__tags">
        <TagPill v-for="tech in project.technologies.slice(0, 4)" :key="tech" :label="tech" />
      </span>
    </span>

    <span class="mono project-row__year">{{ project.year }}</span>
    <span class="project-row__arrow" aria-hidden="true">→</span>
  </router-link>
</template>

<style scoped>
.project-row {
  display: grid;
  grid-template-columns: 2.5rem 1fr auto auto;
  align-items: start;
  gap: var(--space-5);
  padding-block: var(--space-6);
  border-top: 1px solid var(--line);
  transition: background var(--dur-fast) var(--ease-out);
}

.project-row:last-child {
  border-bottom: 1px solid var(--line);
}

.project-row:hover {
  background: var(--bg-raised);
}

.project-row:hover .project-row__title {
  color: var(--signal);
}

.project-row:hover .project-row__arrow {
  transform: translateX(4px);
}

.project-row__index {
  color: var(--ink-faint);
  font-size: var(--step--1);
  padding-top: 0.35em;
}

.project-row__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  min-width: 0;
}

.project-row__title-line {
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.project-row__title {
  font-family: var(--font-display);
  font-size: var(--step-2);
  transition: color var(--dur-fast) var(--ease-out);
}

.project-row__status {
  font-size: var(--step--1);
  color: var(--ink-faint);
}

.project-row__tagline {
  color: var(--ink-muted);
  max-width: 48ch;
}

.project-row__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.project-row__year {
  color: var(--ink-faint);
  font-size: var(--step--1);
  padding-top: 0.35em;
}

.project-row__arrow {
  color: var(--ink-faint);
  padding-top: 0.3em;
  transition: transform var(--dur-fast) var(--ease-out);
}

@media (max-width: 720px) {
  .project-row {
    grid-template-columns: 2rem 1fr;
  }

  .project-row__year,
  .project-row__arrow {
    display: none;
  }
}
</style>
