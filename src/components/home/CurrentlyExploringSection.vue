<script setup lang="ts">
import { interests } from '@/content/interests'
import SectionHeading from '@/components/common/SectionHeading.vue'
import EngagementBadge from '@/components/common/EngagementBadge.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
</script>

<template>
  <section class="exploring" aria-labelledby="exploring-heading">
    <div class="container">
      <RevealOnScroll>
        <SectionHeading
          index="03"
          heading-id="exploring-heading"
          eyebrow="Currently exploring"
          title="What I'm reading, testing, and arguing with myself about."
          lead="Not a skills list — a map of where I currently sit between experience, interest, active experiment, and open research."
        />
      </RevealOnScroll>

      <ul class="exploring__list">
        <RevealOnScroll
          v-for="(item, i) in interests"
          :key="item.label"
          as="li"
          :delay="i * 60"
        >
          <div class="exploring__item">
            <div class="exploring__item-top">
              <h3 class="exploring__label">{{ item.label }}</h3>
              <EngagementBadge :kind="item.kind" />
            </div>
            <p class="exploring__note">{{ item.note }}</p>
            <router-link
              v-if="item.relatedExperimentSlug"
              to="/experiments"
              class="exploring__link mono"
            >
              See the experiment →
            </router-link>
          </div>
        </RevealOnScroll>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.exploring {
  padding-block: var(--space-9);
  border-bottom: 1px solid var(--line);
}

.exploring__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}

.exploring__item {
  background: var(--bg);
  padding: var(--space-6);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.exploring__item-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
}

.exploring__label {
  font-size: var(--step-1);
  font-weight: 500;
}

.exploring__note {
  color: var(--ink-muted);
  flex: 1;
}

.exploring__link {
  font-size: var(--step--1);
  color: var(--signal);
  align-self: flex-start;
}

@media (max-width: 900px) {
  .exploring__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .exploring__list {
    grid-template-columns: 1fr;
  }
}
</style>
