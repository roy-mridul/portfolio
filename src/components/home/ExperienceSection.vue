<script setup lang="ts">
import { experience } from '@/content/experience'
import SectionHeading from '@/components/common/SectionHeading.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
</script>

<template>
  <section class="experience" aria-labelledby="experience-heading">
    <div class="container">
      <RevealOnScroll>
        <SectionHeading
          index="04"
          heading-id="experience-heading"
          eyebrow="Experience"
          title="Built it, operated it, then built again."
          lead="Nine years, mostly at dpa — junior web developer, then App & Service Manager, then frontend-focused software engineer. The progression is the point: the year spent owning a service end to end shows up in how I build software now, not just on the timeline."
        />
      </RevealOnScroll>

      <RevealOnScroll :delay="80">
        <ol class="experience__list">
          <li v-for="role in experience" :key="`${role.company}-${role.start}`" class="experience__item" :class="{ 'is-todo': role.isTodo }">
            <div class="experience__dates">
              <span class="mono">{{ role.start }} — {{ role.end }}</span>
              <span v-if="role.location" class="experience__location mono">{{ role.location }}</span>
            </div>
            <div class="experience__body">
              <div class="experience__title-line">
                <h3 class="experience__title">{{ role.title }}</h3>
                <span class="experience__company">{{ role.company }}</span>
              </div>
              <p v-if="role.summary" class="experience__summary">{{ role.summary }}</p>
              <ul v-if="role.highlights?.length" class="experience__highlights">
                <li v-for="h in role.highlights" :key="h">{{ h }}</li>
              </ul>
              <ul v-if="role.links?.length" class="experience__links">
                <li v-for="link in role.links" :key="link.href">
                  <a :href="link.href" target="_blank" rel="noreferrer noopener" class="mono">
                    {{ link.label }} ↗
                  </a>
                </li>
              </ul>
              <p v-if="role.isTodo" class="experience__todo-note mono">
                Placeholder — real employer, dates and responsibilities go here.
              </p>
            </div>
          </li>
        </ol>
      </RevealOnScroll>
    </div>
  </section>
</template>

<style scoped>
.experience {
  padding-block: var(--space-9);
  border-bottom: 1px solid var(--line);
}

.experience__list {
  display: flex;
  flex-direction: column;
}

.experience__item {
  display: grid;
  grid-template-columns: 10rem 1fr;
  gap: var(--space-5);
  padding-block: var(--space-6);
  border-top: 1px solid var(--line);
}

.experience__item:last-child {
  border-bottom: 1px solid var(--line);
}

.experience__item.is-todo {
  border-style: dashed;
  border-color: var(--line-strong);
}

.experience__dates {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  color: var(--ink-faint);
  font-size: var(--step--1);
  padding-top: 0.25em;
}

.experience__location {
  color: var(--ink-faint);
  opacity: 0.75;
}

.experience__title-line {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-3);
}

.experience__title {
  font-size: var(--step-1);
  font-weight: 500;
}

.experience__company {
  color: var(--ink-muted);
  font-family: var(--font-mono);
  font-size: var(--step--1);
}

.experience__summary {
  margin-top: var(--space-3);
  color: var(--ink-muted);
  max-width: 60ch;
}

.experience__highlights {
  margin-top: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  color: var(--ink-muted);
}

.experience__highlights li {
  padding-left: var(--space-4);
  position: relative;
}

.experience__highlights li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--ink-faint);
}

.experience__links {
  margin-top: var(--space-3);
  font-size: var(--step--1);
}

.experience__links a {
  color: var(--signal);
}

.experience__links a:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.experience__todo-note {
  margin-top: var(--space-3);
  font-size: var(--step--1);
  color: var(--signal);
}

@media (max-width: 640px) {
  .experience__item {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }
}
</style>
