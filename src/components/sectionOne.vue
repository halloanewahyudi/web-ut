<template>
    <div class="title-section py-20 min-h-screen">
        <div class="container">
            <div class="flex flex-col justify-center items-center gap-5 min-h-screen text-brand-blue text-center">
                <h1 class="title-one text-5xl lg:text-6xl xl:text-8xl font-extrabold"> United Tractors </h1>
                <h1 class="title-two text-5xl lg:text-4xl xl:text-6xl  font-extrabold"> Sustainability Initiatives</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from "vue";

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  // Setup animasi GSAP dengan ScrollTrigger
  gsap.timeline({
    scrollTrigger: {
      trigger: '.title-section', // Elemen yang memicu scroll trigger
      start: 'center bottom', // Mulai animasi (viewport atas ke elemen atas)
      end: 'center center', // Akhir animasi (viewport bawah ke elemen bawah)
      scrub: 1, // Sinkronisasi dengan scroll
     //  pin: true, // Pin elemen selama animasi
    },
  })
    .from('.title-one', { opacity: 0, x: 300, duration: 2}) // Animasi masuk
    .from('.title-two', { opacity: 0.5, x: -250, duration: 2}); // Animasi keluar
});

onUnmounted(() => {
  // Membersihkan ScrollTrigger
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<style lang="scss" scoped>

</style>