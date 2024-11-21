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
const swiperInstance = ref(null);

// Modules
const modules = ref([Autoplay]);

// Navigation controls
const slideNext = () => {
    if (swiperInstance.value?.swiper) {
        swiperInstance.value.swiper.slideNext();
    }
};
const slidePrev = () => {
    if (swiperInstance.value?.swiper) {
        swiperInstance.value.swiper.slidePrev();
    }
};
</script>

<template>
    <div class="w-full">
        <Swiper ref="swiperInstance" :autoplay="{ delay: 3000, disableOnInteraction: false }" :slides-per-view="3"
            :space-between="30" :loop="true" @swiper="onSwiper" @slideChange="onSlideChange" :modules="modules"
            class="news-slide">
            <SwiperSlide v-for="(item, index) in news" :key="index">
                <div class="rounded-xl overflow-hidden   ">
                    <img :src="item.image" alt="" class="w-full h-[240px] object-cover rounded-xl shadow-xl mb-5">
                    <h4 class="!text-neutral-700">{{ item.title }}</h4>
                </div>
            </SwiperSlide>
        </Swiper>
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
