<script setup lang="ts">
import { experiments } from '@/content/experiments'
import SectionHeading from '@/components/common/SectionHeading.vue'
import ExperimentCard from '@/components/experiments/ExperimentCard.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'

const preview = experiments.slice(0, 2)
</script>

<template>
  <section class="experiments-preview" aria-labelledby="experiments-heading">
    <div class="container">
      <RevealOnScroll>
        <SectionHeading
          index="02"
          heading-id="experiments-heading"
          eyebrow="Experiments"
          title="Where the curiosity actually goes."
          lead="Small, deliberately unpolished investigations — a question, what I tried, what happened. Not every experiment ships."
        />
      </RevealOnScroll>

      <div class="experiments-preview__list">
        <RevealOnScroll v-for="(experiment, i) in preview" :key="experiment.slug" :delay="i * 90">
          <ExperimentCard :experiment="experiment" :index="String(i + 1).padStart(2, '0')" />
        </RevealOnScroll>
      </div>

      <RevealOnScroll :delay="200">
        <router-link to="/experiments" class="experiments-preview__all">
          All experiments →
        </router-link>
      </RevealOnScroll>
    </div>
  </section>
</template>

<style scoped>
.experiments-preview {
  padding-block: var(--space-9);
  border-bottom: 1px solid var(--line);
}

.experiments-preview__list {
  display: grid;
  gap: var(--space-5);
}

.experiments-preview__all {
  display: inline-block;
  margin-top: var(--space-7);
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--ink-muted);
}

.experiments-preview__all:hover {
  color: var(--signal);
}
</style>
