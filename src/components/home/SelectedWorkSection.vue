<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '@/content/projects'
import SectionHeading from '@/components/common/SectionHeading.vue'
import ProjectRow from '@/components/work/ProjectRow.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'

const featured = computed(() => projects.filter((p) => p.featured).slice(0, 4))
</script>

<template>
  <section class="work-section" aria-labelledby="work-heading">
    <div class="container">
      <RevealOnScroll>
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title="Professional and independent work, written up honestly."
          lead="Case studies that go past a tech-stack list — the problem, the approach, and the trade-offs behind it."
        />
      </RevealOnScroll>

      <RevealOnScroll v-if="featured.length" :delay="80">
        <div class="work-section__list">
          <ProjectRow
            v-for="(project, i) in featured"
            :key="project.slug"
            :project="project"
            :index="String(i + 1).padStart(2, '0')"
          />
        </div>
      </RevealOnScroll>

      <RevealOnScroll v-else :delay="80">
        <div class="work-section__empty">
          <p class="mono work-section__empty-tag">// in progress</p>
          <p>
            Detailed write-ups aren't published yet — I'd rather leave this empty than pad it with
            a project description that isn't backed by real detail. In the meantime, the
            <router-link to="/experiments">experiments log</router-link>
            and my
            <a href="https://github.com/roy-mridul" target="_blank" rel="noreferrer noopener"
              >GitHub</a
            >
            are the more current picture of what I'm building.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll :delay="140">
        <router-link to="/work" class="work-section__all">View all work →</router-link>
      </RevealOnScroll>
    </div>
  </section>
</template>

<style scoped>
.work-section {
  padding-block: var(--space-9);
  border-bottom: 1px solid var(--line);
}

.work-section__list {
  margin-top: var(--space-2);
}

.work-section__empty {
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius);
  padding: var(--space-7);
  max-width: 42rem;
  color: var(--ink-muted);
}

.work-section__empty-tag {
  font-size: var(--step--1);
  color: var(--ink-faint);
  margin-bottom: var(--space-3);
}

.work-section__empty a {
  color: var(--signal);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.work-section__all {
  display: inline-block;
  margin-top: var(--space-7);
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--ink-muted);
}

.work-section__all:hover {
  color: var(--signal);
}
</style>
