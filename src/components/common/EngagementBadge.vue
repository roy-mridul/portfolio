<script setup lang="ts">
import { computed } from 'vue'
import type { EngagementKind } from '@/content/types'

const props = defineProps<{
  kind: EngagementKind
}>()

const label: Record<EngagementKind, string> = {
  experience: 'Experience',
  interest: 'Interest',
  experiment: 'Experiment',
  research: 'Research',
}

const isLived = computed(() => props.kind === 'experience' || props.kind === 'experiment')
</script>

<template>
  <span class="badge mono" :class="{ 'badge--lived': isLived }">{{ label[kind] }}</span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  font-size: var(--step--1);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.2em 0.55em;
  border-radius: var(--radius);
  border: 1px dashed var(--line-strong);
  color: var(--ink-faint);
}

.badge--lived {
  border-style: solid;
  border-color: var(--signal-line);
  color: var(--signal);
}
</style>
