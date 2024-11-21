<template>
    <section class="one-spirit min-h-screen flex flex-col justify-center items-center py-20  text-white">
         <div class="container flex flex-col gap-5 lg:gap-8">
            <div class="max-w-xl mx-auto text-center group">
                <h2 class="spirit-title text-5xl lg:text-6xl xl:text-8xl mb-5 hover:text-brand-yellow"> <a href="#">One Spirit </a> </h2>
                <p class="description">
                    United Tractors berdedikasi melayani pelanggan dengan sepenuh hati dan mengutamakan kerja sama, kolaborasi dan menciptakan praktik berkelanjutan jangka panjang.
                </p>
            </div>
            <Spirit />
         </div>
    </section> 
   
</template>
<script setup>
import gsap from "gsap";
import { onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spirit from './spirit.vue';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".one-spirit", // Target the section for scroll events
      start: "top center", // Animation starts when the section top hits the center of the viewport
      end: "center center", // Ends at the center of the viewport
      scrub: true,          // Smooth animation linked to scroll
      pin: true,         // Pins the title during the animation
    },
  })
  .fromTo(
    ".one-spirit .spirit-title",
    { scale: 1 }, // Start at normal size
    { scale: 2, duration: 2, ease: "power2.out" } // Enlarge to 2x size
  )
  .to(".one-spirit .spirit-title", { scale: 1, duration: 2, ease: "power2.in" })
  .from('.one-spirit .description',{ opacity:0, delay:2, duration:2})
});
</script>

<style  scoped>

.one-spirit{
  background-image: url('/bg-spirit.png') ;
}

.one-spirit  .spirit-title {
  transform-origin: center center;
  display: inline-block; /* Ensures proper scaling of text */
}
</style>