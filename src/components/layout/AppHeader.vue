<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navItems } from '@/content/nav'

const route = useRoute()
const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}

watch(
  () => route.fullPath,
  () => closeMenu(),
)

watch(menuOpen, (open) => {
  document.documentElement.classList.toggle('menu-open', open)
})

onBeforeUnmount(() => {
  document.documentElement.classList.remove('menu-open')
})
</script>

<template>
  <header class="site-header" @keydown="onKeydown">
    <div class="site-header__bar container">
      <router-link to="/" class="brand" aria-label="Mridul Roy — home">
        <span class="brand__mark mono" aria-hidden="true">MR</span>
        <span class="brand__url mono">mridulroy.dev</span>
      </router-link>

      <nav class="primary-nav" aria-label="Primary">
        <ul>
          <li v-for="item in navItems" :key="item.to">
            <router-link :to="item.to" class="primary-nav__link">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        class="menu-toggle"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">{{ menuOpen ? 'Close menu' : 'Open menu' }}</span>
        <span class="menu-toggle__icon" :class="{ 'is-open': menuOpen }" aria-hidden="true">
          <span></span><span></span>
        </span>
      </button>
    </div>

    <Transition name="menu">
      <div v-if="menuOpen" id="mobile-menu" class="mobile-menu">
        <nav aria-label="Mobile">
          <ul>
            <li v-for="(item, i) in navItems" :key="item.to">
              <router-link :to="item.to" class="mobile-menu__link" @click="closeMenu">
                <span class="mono mobile-menu__index">{{ String(i + 1).padStart(2, '0') }}</span>
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: color-mix(in oklab, var(--bg) 88%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.site-header__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.25rem;
}

.brand {
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-3);
}

.brand__mark {
  font-size: var(--step--1);
  font-weight: 600;
  color: var(--signal);
  border: 1px solid var(--signal-line);
  padding: 0.15em 0.45em;
  border-radius: var(--radius);
  line-height: 1;
}

.brand__url {
  font-size: var(--step--1);
  color: var(--ink-muted);
  letter-spacing: 0.01em;
}

.primary-nav ul {
  display: flex;
  gap: var(--space-6);
}

.primary-nav__link {
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--ink-muted);
  letter-spacing: 0.02em;
  position: relative;
  padding-block: var(--space-2);
  transition: color var(--dur-fast) var(--ease-out);
}

.primary-nav__link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 100%;
  bottom: 0;
  height: 1px;
  background: var(--signal);
  transition: right var(--dur-med) var(--ease-out);
}

.primary-nav__link:hover,
.primary-nav__link.router-link-active {
  color: var(--ink);
}

.primary-nav__link:hover::after,
.primary-nav__link.router-link-active::after {
  right: 0;
}

.menu-toggle {
  display: none;
  padding: var(--space-2);
  margin-right: calc(var(--space-2) * -1);
}

.menu-toggle__icon {
  width: 20px;
  height: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-toggle__icon span {
  display: block;
  height: 1px;
  background: var(--ink);
  transition:
    transform var(--dur-fast) var(--ease-out),
    opacity var(--dur-fast) var(--ease-out);
}

.menu-toggle__icon.is-open span:first-child {
  transform: translateY(6.5px) rotate(45deg);
}

.menu-toggle__icon.is-open span:last-child {
  transform: translateY(-6.5px) rotate(-45deg);
}

.mobile-menu {
  position: fixed;
  inset: 4.25rem 0 0 0;
  background: var(--bg);
  border-top: 1px solid var(--line);
  overflow-y: auto;
}

.mobile-menu ul {
  padding: var(--space-6) var(--content-pad);
}

.mobile-menu__link {
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
  padding: var(--space-5) 0;
  border-bottom: 1px solid var(--line);
  font-family: var(--font-display);
  font-size: var(--step-2);
}

.mobile-menu__index {
  font-size: var(--step--1);
  color: var(--signal);
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity var(--dur-fast) var(--ease-out);
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

@media (max-width: 720px) {
  .primary-nav {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .brand__url {
    display: none;
  }
}
</style>
