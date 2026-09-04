<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useReducedMotion } from '@/composables/useReducedMotion'

withDefaults(
  defineProps<{
    as?: string
    delay?: number
  }>(),
  { as: 'div', delay: 0 },
)

const el = ref<HTMLElement | null>(null)
const visible = ref(false)
const prefersReduced = useReducedMotion()
let observer: IntersectionObserver | undefined

onMounted(() => {
  if (prefersReduced.value || typeof IntersectionObserver === 'undefined') {
    visible.value = true
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          visible.value = true
          observer?.disconnect()
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
  )
  if (el.value) observer.observe(el.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <component
    :is="as"
    ref="el"
    class="reveal"
    :class="{ 'is-visible': visible }"
    :style="{ transitionDelay: visible ? `${delay}ms` : '0ms' }"
  >
    <slot />
  </component>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity var(--dur-slow) var(--ease-out),
    transform var(--dur-slow) var(--ease-out);
}

.reveal.is-visible {
  opacity: 1;
  transform: none;
}
</style>
