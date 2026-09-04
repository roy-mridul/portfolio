<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '@/content/projects'
import TagPill from '@/components/common/TagPill.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
import { usePageMeta } from '@/composables/usePageMeta'

const props = defineProps<{ slug: string }>()

const project = computed(() => projects.find((p) => p.slug === props.slug))

const statusLabel: Record<string, string> = {
  active: 'Active',
  shipped: 'Shipped',
  exploratory: 'Exploratory',
}

const visibilityLabel: Record<string, string> = {
  public: 'Public',
  private: 'Private — described without source',
}

usePageMeta(() => ({
  title: project.value?.title ?? 'Project not found',
  description: project.value?.tagline ?? 'This project could not be found.',
  path: `/work/${props.slug}`,
}))
</script>

<template>
  <div class="project-detail">
    <div v-if="project" class="container">
      <RevealOnScroll>
        <router-link to="/work" class="project-detail__back mono">← All work</router-link>
        <p class="eyebrow">
          {{ visibilityLabel[project.visibility] }} · {{ statusLabel[project.status] }} ·
          {{ project.year }}
        </p>
        <h1 class="project-detail__title">{{ project.title }}</h1>
        <p class="project-detail__tagline">{{ project.tagline }}</p>
      </RevealOnScroll>

      <div class="project-detail__grid">
        <RevealOnScroll as="div" class="project-detail__main" :delay="60">
          <section v-if="project.context">
            <h2 class="mono project-detail__label">Context</h2>
            <p>{{ project.context }}</p>
          </section>
          <section>
            <h2 class="mono project-detail__label">Problem</h2>
            <p>{{ project.problem }}</p>
          </section>
          <section>
            <h2 class="mono project-detail__label">Approach</h2>
            <p>{{ project.approach }}</p>
          </section>
          <section v-if="project.architecture">
            <h2 class="mono project-detail__label">Architecture</h2>
            <p>{{ project.architecture }}</p>
          </section>
          <section v-if="project.decisions?.length">
            <h2 class="mono project-detail__label">Key decisions</h2>
            <ul class="project-detail__list">
              <li v-for="d in project.decisions" :key="d">{{ d }}</li>
            </ul>
          </section>
          <section v-if="project.challenges">
            <h2 class="mono project-detail__label">Challenges</h2>
            <p>{{ project.challenges }}</p>
          </section>
          <section v-if="project.outcome">
            <h2 class="mono project-detail__label">Outcome</h2>
            <p>{{ project.outcome }}</p>
          </section>
          <section v-if="project.learned">
            <h2 class="mono project-detail__label">What I learned</h2>
            <p>{{ project.learned }}</p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll as="aside" class="project-detail__aside" :delay="120">
          <h2 class="mono project-detail__label">Technologies</h2>
          <div class="project-detail__tags">
            <TagPill v-for="tech in project.technologies" :key="tech" :label="tech" />
          </div>

          <template v-if="project.links?.length">
            <h2 class="mono project-detail__label project-detail__label--spaced">Links</h2>
            <ul class="project-detail__links">
              <li v-for="link in project.links" :key="link.href">
                <a :href="link.href" target="_blank" rel="noreferrer noopener">
                  {{ link.label }} ↗
                </a>
              </li>
            </ul>
          </template>
        </RevealOnScroll>
      </div>
    </div>

    <div v-else class="container project-detail__missing">
      <p class="eyebrow">Not found</p>
      <h1 class="project-detail__title">This project isn't here.</h1>
      <p class="project-detail__tagline">
        It may not be published yet, or the link is out of date.
      </p>
      <router-link to="/work" class="project-detail__back mono">← All work</router-link>
    </div>
  </div>
</template>

<style scoped>
.project-detail {
  padding-block: var(--space-9) var(--space-10);
}

.project-detail__back {
  display: inline-block;
  margin-bottom: var(--space-6);
  color: var(--ink-muted);
  font-size: var(--step--1);
}

.project-detail__back:hover {
  color: var(--signal);
}

.project-detail__title {
  margin-top: var(--space-4);
  font-size: var(--step-4);
  max-width: 24ch;
}

.project-detail__tagline {
  margin-top: var(--space-5);
  font-size: var(--step-1);
  color: var(--ink-muted);
  max-width: 42rem;
}

.project-detail__grid {
  margin-top: var(--space-9);
  display: grid;
  grid-template-columns: minmax(0, 1fr) 18rem;
  gap: var(--space-9);
  align-items: start;
}

.project-detail__main {
  display: grid;
  gap: var(--space-7);
  max-width: 60ch;
}

.project-detail__main p {
  color: var(--ink-muted);
}

.project-detail__label {
  font-size: var(--step--1);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink-faint);
  margin-bottom: var(--space-3);
}

.project-detail__label--spaced {
  margin-top: var(--space-7);
}

.project-detail__list {
  display: grid;
  gap: var(--space-2);
  color: var(--ink-muted);
}

.project-detail__list li {
  padding-left: var(--space-4);
  position: relative;
}

.project-detail__list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--ink-faint);
}

.project-detail__aside {
  position: sticky;
  top: 6rem;
  border-left: 1px solid var(--line);
  padding-left: var(--space-6);
}

.project-detail__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.project-detail__links {
  display: grid;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--step--1);
}

.project-detail__links a:hover {
  color: var(--signal);
}

.project-detail__missing {
  padding-block: var(--space-8);
}

@media (max-width: 900px) {
  .project-detail__grid {
    grid-template-columns: 1fr;
  }

  .project-detail__aside {
    position: static;
    border-left: none;
    padding-left: 0;
    border-top: 1px solid var(--line);
    padding-top: var(--space-6);
  }
}
</style>
