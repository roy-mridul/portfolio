<script setup lang="ts">
import PageHeader from '@/components/common/PageHeader.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta(() => ({
  title: 'Notes',
  description:
    'Technical notes and writing from Mridul Roy — on frontend engineering, architecture, and agentic coding. Coming soon.',
  path: '/notes',
}))
</script>

<template>
  <div>
    <PageHeader
      eyebrow="Notes"
      title="Writing, when there's something worth writing."
      lead="Short technical notes — on frontend architecture, offline-first systems, agentic coding, and whatever else earns a second look. Nothing published yet."
    />

    <div class="container notes-view">
      <RevealOnScroll>
        <div class="notes-view__empty">
          <p class="mono notes-view__empty-tag">// draft</p>
          <p>
            This is reserved space for longer-form notes — the kind that don't fit in an
            experiment log entry. Until then, the
            <router-link to="/experiments">experiments</router-link>
            section carries the same spirit in shorter form.
          </p>
        </div>
      </RevealOnScroll>
    </div>
  </div>
</template>

<style scoped>
.notes-view {
  padding-block: var(--space-8) var(--space-10);
}

.notes-view__empty {
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius);
  padding: var(--space-8);
  max-width: 42rem;
  color: var(--ink-muted);
  display: grid;
  gap: var(--space-4);
}

.notes-view__empty-tag {
  color: var(--ink-faint);
  font-size: var(--step--1);
}

.notes-view__empty a {
  color: var(--signal);
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
