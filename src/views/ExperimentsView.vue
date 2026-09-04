<script setup lang="ts">
import { experiments } from '@/content/experiments'
import PageHeader from '@/components/common/PageHeader.vue'
import ExperimentCard from '@/components/experiments/ExperimentCard.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta(() => ({
  title: 'Experiments',
  description:
    'A running log of technical experiments — AI, agentic coding, offline-first architecture, and frontend investigations. Small, honest, not always finished.',
  path: '/experiments',
}))
</script>

<template>
  <div>
    <PageHeader
      eyebrow="Experiments"
      title="A running log, not a highlight reel."
      lead="Each entry is a real question, what I actually tried, and what happened — including the ones that are still open. Experiments don't need to be finished to be worth writing down."
    />

    <div class="container experiments-view">
      <div v-if="experiments.length" class="experiments-view__list">
        <ExperimentCard
          v-for="(experiment, i) in experiments"
          :key="experiment.slug"
          :experiment="experiment"
          :index="String(i + 1).padStart(2, '0')"
        />
      </div>

      <RevealOnScroll v-else>
        <p class="experiments-view__empty">Nothing logged yet — check back soon.</p>
      </RevealOnScroll>
    </div>
  </div>
</template>

<style scoped>
.experiments-view {
  padding-block: var(--space-8) var(--space-10);
}

.experiments-view__list {
  display: grid;
  gap: var(--space-6);
}

.experiments-view__empty {
  color: var(--ink-muted);
}
</style>
