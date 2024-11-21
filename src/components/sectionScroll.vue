<template>
  <section ref="featItem" class="feat-item lg:min-h-screen">
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
      <!-- Bagian kiri (gambar) -->
      <div class="kiri bg-brand-blue relative ">
        <img ref="fixedImage" :src="props.img" :alt="props.title" class="fixed-image object-cover" />
      </div>

      <!-- Bagian kanan (teks) -->
      <div class="kanan lg:min-h-screen p-6 lg:p-12 xl:p-20 flex flex-col  gap-8">
        <h2 class="text-3xl lg:text-5xl xl:text-8xl  break-words" v-html="props.title"></h2>
        <div>
          <div v-if="!showMore" v-html="props.content.substring(0, 300)" class="leading-relaxed"></div>
          <div v-else v-html="props.content" class="leading-relaxed text-more"></div>
          <button class="max-w-max inline-block text-white text-sm py-2 px-4 rounded-lg bg-brand-blue mt-5" v-if="props.content.length > 300"  @click="showMore = !showMore">{{
            showMore ? ' Kurangi -' : ' Selengkapnya +' }} </button>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted, onUnmounted } from "vue";
import chevup from '@/components/icons/chevup.vue'
import chevdown from '@/components/icons/chevdown.vue'
// Menerima props dari parent
const props = defineProps({
  title: String,
  img: String,
  content: String,
});

const showMore = ref(false)

const featItem = ref(null); // Ref untuk elemen utama
const fixedImage = ref(null); // Ref untuk elemen gambar


onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

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
    )
});

onUnmounted(() => {
  // Bersihkan ScrollTrigger saat komponen dilepas
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<style scoped>
.feat-item {
 
}

.fixed-image {
  @apply lg:fixed z-0 top-0 left-0 min-h-screen lg:w-1/2 opacity-0 transition-all ease-in-out duration-300;
}

.kanan {
  font-size: 16px;
  line-height: 1.6;
}
</style>