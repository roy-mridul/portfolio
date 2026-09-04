import { onBeforeUnmount, onMounted, ref } from 'vue'

/** Tracks the user's `prefers-reduced-motion` setting, live. */
export function useReducedMotion() {
  const prefersReduced = ref(false)
  let mediaQuery: MediaQueryList | undefined

  const update = () => {
    prefersReduced.value = mediaQuery?.matches ?? false
  }

  onMounted(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    update()
    mediaQuery.addEventListener('change', update)
  })

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener('change', update)
  })

  return prefersReduced
}
