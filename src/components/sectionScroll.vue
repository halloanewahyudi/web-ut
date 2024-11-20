<template>
    <section ref="featItem" class="feat-item min-h-screen">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
        <!-- Bagian kiri (gambar) -->
        <div class="kiri bg-brand-blue">
          <img
            ref="fixedImage"
            :src="props.img"
            alt="Fixed Image"
            class="fixed-image object-cover"
          />
        </div>
  
        <!-- Bagian kanan (teks) -->
        <div class="kanan min-h-screen p-6 lg:p-12 xl:p-20 flex flex-col gap-8">
          <h2 class="text-3xl lg:text-5xl xl:text-8xl font-semibold break-words" v-html="props.title"></h2>
          <div v-html="props.content" class="leading-relaxed"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ref, onMounted, onUnmounted } from "vue";
  
  // Menerima props dari parent
  const props = defineProps({
    title: String,
    img: String,
    content: String,
  });
  

  
  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    const featItem = ref(null); // Ref untuk elemen utama
    const fixedImage = ref(null); // Ref untuk elemen gambar
  
    // Setup animasi GSAP
    gsap.timeline({
      scrollTrigger: {
        trigger: featItem.value, // Elemen utama sebagai pemicu
        start: "top center", // Mulai saat bagian atas elemen mencapai tengah viewport
        end: "bottom center", // Berakhir saat bagian bawah elemen mencapai tengah viewport
        scrub: true, // Animasi sinkron dengan scroll
      },
    })
      .fromTo(
        fixedImage.value, 
        { opacity: 0 }, // Awal animasi: transparan
        { opacity: 1, duration: 2 } // Akhir animasi: sepenuhnya terlihat
      )
      .to(
        fixedImage.value,
        { opacity: 0, duration: 2 }, // Memudar saat akhir scroll
        "+=1" // Tambahkan sedikit jeda sebelum memulai fade out
      );
  });
  
  onUnmounted(() => {
    // Bersihkan ScrollTrigger saat komponen dilepas
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });
  </script>
  
  <style scoped>
  .feat-item {
    padding: 100px 0;
  }
  
  .fixed-image {
    @apply lg:fixed top-0 left-0 min-h-screen lg:w-1/2 opacity-0 transition-all ease-in-out duration-300;
  }
  
  .kanan {
    font-size: 16px;
    line-height: 1.6;
  }
  </style>
  