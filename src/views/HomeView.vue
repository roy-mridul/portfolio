<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import SelectedWorkSection from '@/components/home/SelectedWorkSection.vue'
import ExperimentsPreviewSection from '@/components/home/ExperimentsPreviewSection.vue'
import CurrentlyExploringSection from '@/components/home/CurrentlyExploringSection.vue'
import ExperienceSection from '@/components/home/ExperienceSection.vue'
import AcademicSection from '@/components/home/AcademicSection.vue'
import PhilosophySection from '@/components/home/PhilosophySection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta(() => ({
  title: 'Mridul Roy',
  description:
    'Mridul Roy — frontend-focused software engineer building interfaces and investigating the systems behind them. TypeScript, Vue and React work, a computational-science background, and ongoing experiments in agentic coding and offline-first architecture.',
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
    <AcademicSection />
    <PhilosophySection />
    <ContactSection />
  </div>
</template>
