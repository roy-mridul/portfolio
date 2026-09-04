<script setup lang="ts">
import { profile } from '@/content/profile'
import { stack } from '@/content/stack'
import PageHeader from '@/components/common/PageHeader.vue'
import TagPill from '@/components/common/TagPill.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta(() => ({
  title: 'About',
  description:
    'About Mridul Roy — a frontend-focused software engineer with a computational-science background, who moves between component composition and database consistency, frontend and the systems underneath it.',
  path: '/about',
}))
</script>

<template>
  <div>
    <PageHeader eyebrow="About" title="Frontend by trade. The rest of the stack by curiosity." />

    <div class="container about-view">
      <div class="about-view__grid">
        <RevealOnScroll as="div" class="about-view__bio">
          <p class="about-view__byline mono">{{ profile.fullName }} · {{ profile.location }}</p>
          <p v-for="(paragraph, i) in profile.bio" :key="i">{{ paragraph }}</p>
        </RevealOnScroll>

        <RevealOnScroll as="aside" class="about-view__aside" :delay="80">
          <section>
            <h2 class="mono about-view__label">Computational background</h2>
            <p class="about-view__education-degree">{{ profile.academic.degree }}</p>
            <p class="about-view__education-sub mono">
              {{ profile.academic.university }} · {{ profile.academic.period }}
            </p>
            <p class="about-view__education-sub mono about-view__education-spec">
              {{ profile.academic.specialization }}
            </p>
            <p class="about-view__education-note">{{ profile.academic.note }}</p>
            <router-link
              :to="`/work/${profile.academic.thesis.slug}`"
              class="about-view__education-link mono"
            >
              Read the thesis case study →
            </router-link>
          </section>
        </RevealOnScroll>
      </div>

      <RevealOnScroll :delay="140">
        <section class="about-view__stack">
          <h2 class="mono about-view__label">Stack</h2>
          <div class="about-view__stack-grid">
            <div v-for="(techs, group) in stack" :key="group" class="about-view__stack-group">
              <h3 class="about-view__stack-group-title">{{ group }}</h3>
              <div class="about-view__stack-tags">
                <TagPill v-for="tech in techs" :key="tech.label" :label="tech.label" />
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  </div>
</template>

<style scoped>
.about-view {
  padding-block: var(--space-8) var(--space-10);
}

.about-view__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 18rem;
  gap: var(--space-9);
  align-items: start;
}

.about-view__bio {
  display: grid;
  gap: var(--space-6);
  max-width: 60ch;
  font-size: var(--step-1);
  color: var(--ink-muted);
}

.about-view__byline {
  font-size: var(--step--1);
  color: var(--ink-faint);
}

.about-view__aside {
  display: grid;
  gap: var(--space-8);
  border-left: 1px solid var(--line);
  padding-left: var(--space-6);
}

.about-view__label {
  font-size: var(--step--1);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink-faint);
  margin-bottom: var(--space-3);
}

.about-view__education-degree {
  font-weight: 500;
}

.about-view__education-sub {
  margin-top: var(--space-2);
  color: var(--ink-muted);
  font-size: var(--step--1);
}

.about-view__education-spec {
  color: var(--signal);
}

.about-view__education-note {
  margin-top: var(--space-4);
  color: var(--ink-muted);
  font-size: var(--step--1);
}

.about-view__education-link {
  display: inline-block;
  margin-top: var(--space-4);
  font-size: var(--step--1);
  color: var(--signal);
}

.about-view__education-link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.about-view__stack {
  margin-top: var(--space-9);
  padding-top: var(--space-8);
  border-top: 1px solid var(--line);
}

.about-view__stack-grid {
  margin-top: var(--space-5);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.about-view__stack-group-title {
  font-size: var(--step--1);
  color: var(--ink-muted);
  margin-bottom: var(--space-3);
}

.about-view__stack-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

@media (max-width: 900px) {
  .about-view__grid {
    grid-template-columns: 1fr;
  }

  .about-view__aside {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid var(--line);
    padding-top: var(--space-6);
  }
}

@media (max-width: 640px) {
  .about-view__stack-grid {
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }
}
</style>
