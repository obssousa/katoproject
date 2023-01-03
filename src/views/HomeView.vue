<script setup>
import UnitsSection from '@/components/sections/UnitsSection.vue'
import LearnSection from '@/components/sections/LearnSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import PartnersSection from '@/components/sections/PartnersSection.vue'
import FederationSection from '@/components/sections/FederationSection.vue'
</script>

<template>
  <div>
    <AboutSection id="about" />
    <LearnSection id="learn"  />
    <UnitsSection id="units"  />
    <FederationSection id="federation" />
    <PartnersSection id="partners" />
  </div>
</template>
