<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta(() => ({
  title: 'Page not found',
  description: 'This page does not exist.',
  path: '/404',
}))
</script>

<template>
  <div class="container not-found">
    <p class="eyebrow mono">404</p>
    <h1 class="not-found__title">There's nothing at this coordinate.</h1>
    <p class="not-found__lead">The page you're looking for doesn't exist, or moved.</p>
    <router-link to="/" class="not-found__link mono">← Back home</router-link>
  </div>
</template>

<style scoped>
.not-found {
  padding-block: var(--space-9) var(--space-10);
  min-height: 50vh;
}

.not-found__title {
  margin-top: var(--space-4);
  font-size: var(--step-3);
  max-width: 24ch;
}

.not-found__lead {
  margin-top: var(--space-4);
  color: var(--ink-muted);
}

.not-found__link {
  display: inline-block;
  margin-top: var(--space-7);
  color: var(--ink-muted);
}

.not-found__link:hover {
  color: var(--signal);
}
</style>
