<template>
    <section class="section min-h-screen flex flex-col justify-center items-center py-16">
         <div class="container flex flex-col gap-5">
            <div class="max-w-xl mx-auto text-center group">
                <h2 class="title text-5xl lg:text-6xl xl:text-8xl mb-5 hover:text-brand-blue"> <a href="#">One Spirit </a> </h2>
                <p>
                    United Tractors berdedikasi melayani pelanggan dengan sepenuh hati dan mengutamakan kerja sama. United Tractors mengedepankan kolaborasi dengan semua pemangku kepentingan dan menciptakan praktik berkelanjutan jangka panjang melalui produk, layanan, dan semua lini bisnis kami.
                </p>
            </div>
            <div class="max-w-screen-xl mx-auto">
                <div class="logo flex flex-wrap justify-center items-center gap-5">
                    <img src="/utrees.png" alt="" class="h-24">
                    <img src="/utfuture.png" alt="" class="h-24">
                    <img src="/utcare.png" alt="" class="h-24">
                    <img src="/utaction.png" alt="" class="h-24">
                    <img src="/utgrowth.png" alt="" class="h-24">
                </div>
            </div>
         </div>
    </section>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
const images = document.querySelectorAll('.logo img');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section',
    start: 'center bottom',
    end: 'center center',
    scrub: 1,
  }
});

// Animasi fade-up secara bergantian
tl.from('.section .title',{opacity:0})
tl.from('.section p',{opacity:0})
images.forEach((image, index) => {
  tl.fromTo(image, { opacity: 0 , y:100}, { opacity: 1, y:0 }, `+=${index * .5}`);
});
});
</script>
<style  scoped>

</style>