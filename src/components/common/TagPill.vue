<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span class="tag-pill mono">{{ label }}</span>
</template>

<style scoped>
.tag-pill {
  display: inline-flex;
  align-items: center;
  font-size: var(--step--1);
  color: var(--ink-muted);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 0.2em 0.6em;
  line-height: 1.6;
}
</style>
