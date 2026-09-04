<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import SelectedWorkSection from '@/components/home/SelectedWorkSection.vue'
import ExperimentsPreviewSection from '@/components/home/ExperimentsPreviewSection.vue'
import CurrentlyExploringSection from '@/components/home/CurrentlyExploringSection.vue'
import ExperienceSection from '@/components/home/ExperienceSection.vue'
import PhilosophySection from '@/components/home/PhilosophySection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta(() => ({
  title: 'Mridul Roy',
  description:
    'Mridul Roy — software engineer building interfaces, systems, and the experiments in between. Frontend-focused work in TypeScript, Vue and React, with backend and systems curiosity.',
  path: '/',
}))
</script>

<template>
  <div>
    <HeroSection />
    <SelectedWorkSection />
    <ExperimentsPreviewSection />
    <CurrentlyExploringSection />
    <ExperienceSection />
    <PhilosophySection />
    <ContactSection />
  </div>
</template>
