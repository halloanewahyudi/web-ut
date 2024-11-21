<script setup>
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import 'swiper/css/navigation'; // Import CSS untuk navigasi
import news from '@/assets/news-content.json'; // Pastikan ini memiliki data valid
import { ref } from "vue";

// Konfigurasi Swiper modules
const modules = ref([Autoplay, Navigation]);

// Event handler
const onSwiper = (swiper) => {
    console.log('Swiper instance:', swiper);
};
const onSlideChange = () => {
    console.log('Slide changed');
};
</script>

<template>
    <div>
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-6 relative">
                <!-- Tombol Navigasi di luar Swiper -->
                <div class="kiri lg:col-span-2 flex items-center justify-between">
                    <button class="swiper-prev bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Prev
                    </button>
                    <button class="swiper-next bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Next
                    </button>
                </div>

                <!-- Swiper -->
                <div class="lkanan lg:col-span-4">
                    <Swiper
                        :modules="modules"
                        :autoplay="{ delay: 3000, disableOnInteraction: false }"
                        :slides-per-view="3"
                        :space-between="30"
                        :loop="true"
                        navigation="{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        class="news-slide"
                    >
                        <!-- Render slides -->
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
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Custom Style untuk Tombol Navigasi */
.swiper-prev,
.swiper-next {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 10; /* Agar berada di atas elemen lain */
}

.swiper-prev:hover,
.swiper-next:hover {
    transform: scale(1.1);
}

/* Tambahan styling opsional */
.news-slide {
    width: 100%;
    overflow: hidden;
}
</style>
