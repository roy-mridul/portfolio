<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lead?: string
}>()
</script>

<template>
  <header class="page-header">
    <div class="container">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1 class="page-header__title">{{ title }}</h1>
      <p v-if="lead" class="page-header__lead">{{ lead }}</p>
    </div>
  </header>
</template>

<style scoped>
.page-header {
  padding-block: var(--space-9) var(--space-8);
  border-bottom: 1px solid var(--line);
}

.page-header__title {
  margin-top: var(--space-4);
  font-size: var(--step-4);
  max-width: 22ch;
}

.page-header__lead {
  margin-top: var(--space-5);
  max-width: 40rem;
  font-size: var(--step-1);
  color: var(--ink-muted);
}
</style>
