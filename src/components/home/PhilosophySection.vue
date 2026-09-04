<script setup lang="ts">
import { profile } from '@/content/profile'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
</script>

<template>
  <section class="philosophy" aria-labelledby="philosophy-heading">
    <div class="container philosophy__inner">
      <RevealOnScroll>
        <p class="eyebrow">05 · Philosophy</p>
      </RevealOnScroll>

      <RevealOnScroll :delay="60">
        <p class="philosophy__statement">{{ profile.philosophy.heading }}</p>
      </RevealOnScroll>

      <RevealOnScroll :delay="120">
        <div class="philosophy__body">
          <p>{{ profile.philosophy.lead }}</p>
          <p>{{ profile.philosophy.body }}</p>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>

<style scoped>
.philosophy {
  padding-block: var(--space-10);
  border-bottom: 1px solid var(--line);
  background: var(--bg-inset);
}

.philosophy__inner {
  max-width: 52rem;
}

.philosophy__statement {
  margin-top: var(--space-5);
  font-family: var(--font-display);
  font-size: var(--step-4);
  letter-spacing: -0.015em;
  line-height: 1.15;
}

.philosophy__body {
  margin-top: var(--space-7);
  display: grid;
  gap: var(--space-5);
  max-width: 42rem;
  color: var(--ink-muted);
  font-size: var(--step-1);
}
</style>
