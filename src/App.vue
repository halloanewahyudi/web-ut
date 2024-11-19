<script setup>

import navbarVue from './components/navbar.vue'
import hero from '@/components/hero.vue'

import { onMounted, ref } from 'vue';
import sectionOneVue from './components/sectionOne.vue';
import sectinTwo from './components/sectionTwo.vue';
import sectionThree from './components/sectionThree.vue';
import { ScrollView } from 'potiah'


const duration = ref(2.5)
</script>

<template>
  <ScrollView root :duration="duration">

  <div class="min-h-screen relative overflow-hidden">
    <navbarVue class="absolute top-0 left-1/2 -translate-x-1/2 w-full z-50 " />
    <hero />
  </div>
<sectionOneVue />
<sectinTwo />
<sectionThree />

</ScrollView> <!-- end scrollview -->

</template>
<style scoped>
.smooth-wrapper {
  overflow: hidden;
}

.smooth-content {
  will-change: transform;
}
</style>
