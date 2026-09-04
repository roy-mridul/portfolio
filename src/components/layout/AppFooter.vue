<script setup lang="ts">
import { profile } from '@/content/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__row">
        <div class="site-footer__col">
          <p class="eyebrow">Get in touch</p>
          <ul class="site-footer__links">
            <li>
              <a :href="profile.social.github" target="_blank" rel="noreferrer noopener">
                GitHub ↗
              </a>
            </li>
            <li v-if="profile.social.linkedin">
              <a :href="profile.social.linkedin" target="_blank" rel="noreferrer noopener">
                LinkedIn ↗
              </a>
            </li>
            <li v-if="profile.social.email">
              <a :href="`mailto:${profile.social.email}`">Email</a>
            </li>
          </ul>
        </div>

        <div class="site-footer__col">
          <p class="eyebrow">Elsewhere</p>
          <ul class="site-footer__links">
            <li>
              <router-link to="/work">Selected work</router-link>
            </li>
            <li>
              <router-link to="/experiments">Experiments</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </div>

        <div class="site-footer__col site-footer__col--meta">
          <p class="eyebrow">This site</p>
          <p class="site-footer__meta mono">
            Vue 3 · TypeScript · Vite<br />
            Built &amp; deployed by hand.
          </p>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p class="mono">© {{ year }} {{ profile.name }}</p>
        <p class="mono site-footer__coords">mridulroy.dev</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--line);
  margin-top: var(--space-10);
  padding-block: var(--space-8) var(--space-6);
}

.site-footer__row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

.site-footer__col--meta {
  text-align: right;
}

.site-footer__links {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-top: var(--space-4);
}

.site-footer__links a {
  color: var(--ink-muted);
  transition: color var(--dur-fast) var(--ease-out);
}

.site-footer__links a:hover {
  color: var(--signal);
}

.site-footer__meta {
  margin-top: var(--space-4);
  color: var(--ink-faint);
  font-size: var(--step--1);
  line-height: 1.7;
}

.site-footer__bottom {
  display: flex;
  justify-content: space-between;
  padding-top: var(--space-5);
  border-top: 1px solid var(--line);
  font-size: var(--step--1);
  color: var(--ink-faint);
}

@media (max-width: 720px) {
  .site-footer__row {
    grid-template-columns: 1fr;
    gap: var(--space-7);
  }

  .site-footer__col--meta {
    text-align: left;
  }
}
</style>
