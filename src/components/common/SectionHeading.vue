<script setup lang="ts">
defineProps<{
  index?: string
  eyebrow: string
  title: string
  lead?: string
}>()
</script>

<template>
  <div class="section-heading">
    <p class="eyebrow">
      <span v-if="index" class="mono section-heading__index">{{ index }}</span>
      {{ eyebrow }}
    </p>
    <h2 class="section-heading__title">{{ title }}</h2>
    <p v-if="lead" class="section-heading__lead">{{ lead }}</p>
  </div>
</template>

<style scoped>
.section-heading {
  max-width: 42rem;
  margin-bottom: var(--space-8);
}

.section-heading__index {
  color: var(--ink-faint);
}

.section-heading__title {
  margin-top: var(--space-3);
  font-size: var(--step-3);
}

.section-heading__lead {
  margin-top: var(--space-4);
  color: var(--ink-muted);
  font-size: var(--step-1);
  max-width: 38rem;
}
</style>
