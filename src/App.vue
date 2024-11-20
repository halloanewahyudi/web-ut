<script setup>
import { onMounted, ref, onErrorCaptured } from 'vue';
import navbarVue from './components/navbar.vue'
import hero from '@/components/hero.vue'
import sectionOneVue from './components/sectionOne.vue';
import sectinTwo from './components/sectionTwo.vue';
import sectionThree from './components/sectionThree.vue';
import sectionFour from './components/sectionFour.vue';
import sectionFive from './components/sectionFive.vue';
import sectionSix from './components/sectionSix.vue';
import Footer from './components/footer.vue';
import slidethumb from './components/slidethumb.vue';

import { ScrollView } from 'potiah'

const duration = ref(2.5)
const setelahMovingOne = ref(false)
onMounted(() => {
  console.log('Komponen berhasil di-mount');
});

onErrorCaptured((err, instance, info) => {
  console.error('Error tertangkap:', err, instance, info);
  return false; // Memastikan Vue melanjutkan render meskipun ada error
});
</script>

<template>
  <ScrollView root :duration="duration">

  <div class="min-h-screen relative overflow-hidden">
    <navbarVue class="absolute top-0 left-1/2 -translate-x-1/2 w-full z-50 " />
    <slidethumb />
  </div>
<sectionOneVue />
<sectinTwo />
<sectionThree />
<sectionFour />
<sectionFive />
<sectionSix />
</ScrollView> <!-- end scrollview -->
<footer />
</template>
<style scoped>
.smooth-wrapper {
  overflow: hidden;
}

.smooth-content {
  will-change: transform;
}
</style>
