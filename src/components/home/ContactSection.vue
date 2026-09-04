<script setup lang="ts">
import { profile } from '@/content/profile'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
</script>

<template>
  <section class="contact" aria-labelledby="contact-heading">
    <div class="container">
      <RevealOnScroll>
        <p class="eyebrow">07 · Contact</p>
      </RevealOnScroll>

      <RevealOnScroll :delay="60">
        <h2 id="contact-heading" class="contact__title">
          If something here is worth talking about, I'd like to hear it.
        </h2>
      </RevealOnScroll>

      <RevealOnScroll :delay="120">
        <div class="contact__links">
          <a
            :href="profile.social.github"
            target="_blank"
            rel="noreferrer noopener"
            class="contact__link"
          >
            <span class="contact__link-label">GitHub</span>
            <span class="contact__link-arrow" aria-hidden="true">↗</span>
          </a>
          <a
            v-if="profile.social.linkedin"
            :href="profile.social.linkedin"
            target="_blank"
            rel="noreferrer noopener"
            class="contact__link"
          >
            <span class="contact__link-label">LinkedIn</span>
            <span class="contact__link-arrow" aria-hidden="true">↗</span>
          </a>
          <a v-if="profile.social.email" :href="`mailto:${profile.social.email}`" class="contact__link">
            <span class="contact__link-label">Email</span>
            <span class="contact__link-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding-block: var(--space-10);
}

.contact__title {
  margin-top: var(--space-5);
  font-size: var(--step-3);
  max-width: 26ch;
}

.contact__links {
  margin-top: var(--space-8);
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line);
}

.contact__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: var(--space-6);
  border-bottom: 1px solid var(--line);
  font-family: var(--font-display);
  font-size: var(--step-2);
  transition: color var(--dur-fast) var(--ease-out);
}

.contact__link:hover {
  color: var(--signal);
}

.contact__link-arrow {
  font-family: var(--font-mono);
  font-size: var(--step-0);
  color: var(--ink-faint);
  transition: transform var(--dur-fast) var(--ease-out);
}

.contact__link:hover .contact__link-arrow {
  transform: translate(2px, -2px);
  color: var(--signal);
}
</style>
