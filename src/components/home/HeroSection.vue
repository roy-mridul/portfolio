<script setup lang="ts">
import { profile } from '@/content/profile'
</script>

<template>
  <section class="hero" aria-label="Introduction">
    <div class="hero__grid" aria-hidden="true"></div>
    <div class="container hero__inner">
      <p class="hero__name mono">{{ profile.name }}</p>
      <p class="eyebrow hero__role">{{ profile.role }}</p>

      <h1 class="hero__statement">{{ profile.heroStatement }}</h1>

      <p class="hero__tags mono">{{ profile.heroTags.join(' · ') }}</p>

      <div class="hero__actions">
        <router-link to="/work" class="btn btn--primary">Work</router-link>
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

.hero__name {
  font-size: var(--step-1);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.hero__role {
  margin-top: var(--space-3);
}

.hero__statement {
  margin-top: var(--space-5);
  font-size: var(--step-5);
  max-width: 18ch;
}

.hero__tags {
  margin-top: var(--space-6);
  font-size: var(--step--1);
  color: var(--ink-faint);
  letter-spacing: 0.02em;
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
