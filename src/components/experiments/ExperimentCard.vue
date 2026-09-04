<script setup lang="ts">
import type { Experiment } from '@/content/types'
import TagPill from '@/components/common/TagPill.vue'

defineProps<{
  experiment: Experiment
  index: string
}>()

const categoryLabel: Record<Experiment['category'], string> = {
  ai: 'AI',
  'agentic-coding': 'Agentic Coding',
  frontend: 'Frontend',
  architecture: 'Architecture',
  'offline-first': 'Offline-first',
  backend: 'Backend',
  'developer-experience': 'Developer Experience',
}

const statusLabel: Record<Experiment['status'], string> = {
  ongoing: 'Ongoing',
  concluded: 'Concluded',
  paused: 'Paused',
}
</script>

<template>
  <article class="experiment-card">
    <header class="experiment-card__header">
      <span class="mono experiment-card__index">{{ index }}</span>
      <div class="experiment-card__heading">
        <p class="eyebrow">
          {{ categoryLabel[experiment.category] }} · {{ experiment.date }}
        </p>
        <h3 class="experiment-card__title">{{ experiment.title }}</h3>
      </div>
      <span class="mono experiment-card__status" :class="`is-${experiment.status}`">
        {{ statusLabel[experiment.status] }}
      </span>
    </header>

    <dl class="experiment-card__fields">
      <div>
        <dt class="mono">Question</dt>
        <dd>{{ experiment.question }}</dd>
      </div>
      <div>
        <dt class="mono">What I tried</dt>
        <dd>{{ experiment.tried }}</dd>
      </div>
      <div>
        <dt class="mono">Result</dt>
        <dd>{{ experiment.result }}</dd>
      </div>
      <div>
        <dt class="mono">What I learned</dt>
        <dd>{{ experiment.learned }}</dd>
      </div>
    </dl>

    <footer class="experiment-card__footer">
      <div class="experiment-card__tags">
        <TagPill v-for="tech in experiment.technologies" :key="tech" :label="tech" />
      </div>
      <div v-if="experiment.links?.length" class="experiment-card__links">
        <a
          v-for="link in experiment.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noreferrer noopener"
        >
          {{ link.label }} ↗
        </a>
      </div>
    </footer>
  </article>
</template>

<style scoped>
.experiment-card {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: var(--space-6);
  background: var(--bg-raised);
}

.experiment-card__header {
  display: grid;
  grid-template-columns: 2.5rem 1fr auto;
  gap: var(--space-4);
  align-items: start;
  margin-bottom: var(--space-6);
}

.experiment-card__index {
  color: var(--ink-faint);
  font-size: var(--step--1);
  padding-top: 0.3em;
}

.experiment-card__title {
  margin-top: var(--space-2);
  font-size: var(--step-2);
}

.experiment-card__status {
  font-size: var(--step--1);
  color: var(--ink-faint);
  white-space: nowrap;
}

.experiment-card__status.is-ongoing {
  color: var(--signal);
}

.experiment-card__fields {
  display: grid;
  gap: var(--space-5);
  padding-left: calc(2.5rem + var(--space-4));
}

.experiment-card__fields dt {
  font-size: var(--step--1);
  color: var(--ink-faint);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--space-2);
}

.experiment-card__fields dd {
  color: var(--ink-muted);
  max-width: 62ch;
}

.experiment-card__footer {
  padding-left: calc(2.5rem + var(--space-4));
  margin-top: var(--space-6);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-4);
}

.experiment-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.experiment-card__links {
  display: flex;
  gap: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--step--1);
}

.experiment-card__links a:hover {
  color: var(--signal);
}

@media (max-width: 640px) {
  .experiment-card__header {
    grid-template-columns: 1fr;
  }

  .experiment-card__index {
    display: none;
  }

  .experiment-card__fields,
  .experiment-card__footer {
    padding-left: 0;
  }
}
</style>
