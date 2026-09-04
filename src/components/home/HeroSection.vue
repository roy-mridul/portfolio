<script setup lang="ts">
import { profile } from '@/content/profile'

const loop = profile.philosophy.loop
</script>

<template>
  <section class="hero" aria-label="Introduction">
    <div class="hero__grid" aria-hidden="true"></div>
    <div class="container hero__inner">
      <p class="eyebrow hero__eyebrow">
        {{ profile.role }} — {{ profile.roleSecondary }} · {{ profile.yearsExperience }} years
      </p>

      <h1 class="hero__title">{{ profile.tagline }}</h1>

      <p class="hero__lead">{{ profile.heroLead }}</p>
      <p class="hero__sub">{{ profile.heroSub }}</p>

      <ol class="hero__loop mono" aria-label="How I approach problems">
        <li v-for="(step, i) in loop" :key="step">
          <span>{{ step }}</span>
          <span v-if="i < loop.length - 1" class="hero__loop-arrow" aria-hidden="true">→</span>
        </li>
      </ol>

      <div class="hero__actions">
        <router-link to="/work" class="btn btn--primary">Selected work</router-link>
        <router-link to="/experiments" class="btn btn--ghost">Experiments</router-link>
        <a
          :href="profile.social.github"
          target="_blank"
          rel="noreferrer noopener"
          class="btn btn--ghost"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding-block: var(--space-9) var(--space-9);
  overflow: clip;
  border-bottom: 1px solid var(--line);
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, var(--line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--line) 1px, transparent 1px);
  background-size: 64px 64px;
  -webkit-mask-image: radial-gradient(ellipse 70% 55% at 20% 10%, black 0%, transparent 70%);
  mask-image: radial-gradient(ellipse 70% 55% at 20% 10%, black 0%, transparent 70%);
  opacity: 0.6;
  pointer-events: none;
}

.hero__inner {
  position: relative;
}

.hero__eyebrow {
  margin-bottom: var(--space-5);
}

.hero__title {
  font-size: var(--step-5);
  max-width: 20ch;
}

.hero__lead {
  margin-top: var(--space-6);
  max-width: 42rem;
  font-size: var(--step-1);
  color: var(--ink);
}

.hero__sub {
  margin-top: var(--space-3);
  max-width: 40rem;
  color: var(--ink-muted);
}

.hero__loop {
  margin-top: var(--space-8);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--step--1);
  color: var(--ink-faint);
}

.hero__loop li {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.hero__loop li:first-child span:first-child,
.hero__loop li:last-child span:first-child {
  color: var(--signal);
}

.hero__loop-arrow {
  color: var(--line-strong);
}

.hero__actions {
  margin-top: var(--space-8);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.7em 1.2em;
  font-family: var(--font-mono);
  font-size: var(--step--1);
  border-radius: var(--radius);
  border: 1px solid var(--line-strong);
  transition:
    border-color var(--dur-fast) var(--ease-out),
    color var(--dur-fast) var(--ease-out),
    background var(--dur-fast) var(--ease-out);
}

.btn--primary {
  border-color: var(--signal);
  color: var(--signal);
}

.btn--primary:hover {
  background: var(--signal-dim);
}

.btn--ghost {
  color: var(--ink-muted);
}

.btn--ghost:hover {
  color: var(--ink);
  border-color: var(--line-strong);
  background: var(--bg-raised);
}

@media (max-width: 640px) {
  .hero {
    padding-block: var(--space-7);
  }
}
</style>
