import { watchEffect } from 'vue'

const SITE_NAME = 'Mridul Roy'
const SITE_URL = 'https://mridulroy.dev'

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

interface PageMetaOptions {
  title: string
  description: string
  path?: string
}

/** Minimal per-view document title / meta description for this SPA (no SSR). */
export function usePageMeta(options: () => PageMetaOptions) {
  watchEffect(() => {
    const { title, description, path = '' } = options()
    const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`
    document.title = fullTitle
    setMetaTag('name', 'description', description)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', `${SITE_URL}${path}`)
    setMetaTag('name', 'twitter:title', fullTitle)
    setMetaTag('name', 'twitter:description', description)
    setCanonical(`${SITE_URL}${path}`)
  })
}
