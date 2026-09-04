<script setup lang="ts">
import { profile } from '@/content/profile'
import SectionHeading from '@/components/common/SectionHeading.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'

const academic = profile.academic
</script>

<template>
  <section class="academic" aria-labelledby="academic-heading">
    <div class="container">
      <RevealOnScroll>
        <SectionHeading
          index="05"
          heading-id="academic-heading"
          eyebrow="Computational background"
          title="Before software, it was mathematical modelling."
          lead="A M.Sc. in Computer Simulation in Science, specializing in financial mathematics — the origin of the habit of modelling a problem before touching a solution."
        />
      </RevealOnScroll>

      <RevealOnScroll :delay="80">
        <div class="academic__card">
          <div class="academic__meta">
            <p class="academic__degree">{{ academic.degree }}</p>
            <p class="mono academic__institution">{{ academic.university }} · {{ academic.period }}</p>
            <p class="mono academic__specialization">{{ academic.specialization }}</p>
          </div>

          <div class="academic__thesis">
            <h3 class="mono academic__thesis-label">Thesis</h3>
            <p class="academic__thesis-title">“{{ academic.thesis.title }}”</p>
            <p class="academic__thesis-summary">{{ academic.thesis.summary }}</p>
            <router-link :to="`/work/${academic.thesis.slug}`" class="academic__thesis-link mono">
              Read the case study →
            </router-link>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>

<style scoped>
.academic {
  padding-block: var(--space-9);
  border-bottom: 1px solid var(--line);
}

.academic__card {
  display: grid;
  grid-template-columns: 18rem 1fr;
  gap: var(--space-8);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: var(--space-7);
  background: var(--bg-raised);
}

.academic__degree {
  font-family: var(--font-display);
  font-size: var(--step-1);
}

.academic__institution {
  margin-top: var(--space-3);
  color: var(--ink-muted);
  font-size: var(--step--1);
}

.academic__specialization {
  margin-top: var(--space-2);
  color: var(--signal);
  font-size: var(--step--1);
}

.academic__thesis {
  border-left: 1px solid var(--line);
  padding-left: var(--space-7);
}

.academic__thesis-label {
  font-size: var(--step--1);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink-faint);
  margin-bottom: var(--space-3);
}

.academic__thesis-title {
  font-family: var(--font-display);
  font-size: var(--step-1);
  max-width: 42ch;
}

.academic__thesis-summary {
  margin-top: var(--space-4);
  color: var(--ink-muted);
  max-width: 60ch;
}

.academic__thesis-link {
  display: inline-block;
  margin-top: var(--space-5);
  font-size: var(--step--1);
  color: var(--signal);
}

.academic__thesis-link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 720px) {
  .academic__card {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .academic__thesis {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid var(--line);
    padding-top: var(--space-6);
  }
}
</style>
