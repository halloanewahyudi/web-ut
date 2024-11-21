<script setup>
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import news from '@/assets/news-content.json';
import { ref, onMounted } from "vue";

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};

// Swiper instance reference
const swiperRef = ref(null);

// Modules
const modules = ref([Autoplay]);

// Navigation controls
const slideNext = () => {
    if (swiperRef.value) swiperRef.value.slideNext();
};
const slidePrev = () => {
    if (swiperRef.value) swiperRef.value.slidePrev();
};
</script>

<template>
    <div>
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-6">
                <!-- Tombol navigasi -->
                <div class="kiri lg:col-span-2 flex items-center justify-center">
                    <button @click="slidePrev" class="btn-nav prev-btn">Prev</button>
                </div>
                
                <!-- Swiper -->
                <div class="kanan lg:col-span-4">
                    <Swiper
                        ref="swiperRef"
                        :autoplay="{ delay: 3000, disableOnInteraction: false }"
                        :slides-per-view="3"
                        :space-between="30"
                        :loop="true"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        :modules="modules"
                        class="news-slide"
                    >
                        <SwiperSlide v-for="(item, index) in news" :key="index">
                            <div class="rounded-xl overflow-hidden">
                                <img :src="item.image" alt="" class="w-full h-[240px] object-cover">
                                <div class="p-4 lg:p-6 bg-white">
                                    <h4>{{ item.title }}</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <!-- Tombol navigasi -->
                <div class="kiri lg:col-span-2 flex items-center justify-center">
                    <button @click="slideNext" class="btn-nav next-btn">Next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Styling tombol navigasi */
.btn-nav {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #3498db;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-nav:hover {
  background-color: #1d6fa5;
}

/* Styling Swiper */
.news-slide {
  width: 100%;
  height: auto;
}
</style>
