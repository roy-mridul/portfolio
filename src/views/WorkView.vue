<script setup lang="ts">
import { projects } from '@/content/projects'
import PageHeader from '@/components/common/PageHeader.vue'
import ProjectRow from '@/components/work/ProjectRow.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta(() => ({
  title: 'Work',
  description:
    'Selected professional and independent projects from Mridul Roy — context, problem, approach and outcome, not just a technology list.',
  path: '/work',
}))
</script>

<template>
  <div>
    <PageHeader
      eyebrow="Work"
      title="Engineering stories, not tech-stack lists."
      lead="Context, problem, approach, architecture and outcome for the work I can talk about — including private work, described without exposing source or confidential detail."
    />

    <div class="container work-view">
      <div v-if="projects.length" class="work-view__list">
        <ProjectRow
          v-for="(project, i) in projects"
          :key="project.slug"
          :project="project"
          :index="String(i + 1).padStart(2, '0')"
        />
      </div>

      <RevealOnScroll v-else>
        <div class="work-view__empty">
          <p class="mono work-view__empty-tag">// nothing published yet</p>
          <p>
            I'd rather leave this page empty than fill it with placeholder project descriptions.
            Real write-ups — context, problem, architecture, decisions, and what I learned — will
            land here as they're ready.
          </p>
          <p>
            In the meantime, take a look at the
            <router-link to="/experiments">experiments log</router-link>
            — it's the more current picture of what I'm actually building right now.
          </p>
        </div>
      </RevealOnScroll>
    </div>
  </div>
</template>

<style scoped>
.work-view {
  padding-block: var(--space-8) var(--space-10);
}

.work-view__empty {
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius);
  padding: var(--space-8);
  max-width: 42rem;
  color: var(--ink-muted);
  display: grid;
  gap: var(--space-4);
}

.work-view__empty-tag {
  color: var(--ink-faint);
  font-size: var(--step--1);
}

.work-view__empty a {
  color: var(--signal);
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
