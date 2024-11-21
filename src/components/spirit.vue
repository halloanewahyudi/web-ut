<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ref } from "vue";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import thumb from './thumb.vue';

const content = ref([
    {
        image: '/img/bisnis-construction-machinery2.jpg',
        title: 'Mesin Konstruksi'
    },
    {
        image: '/img/business-mining-contracting.jpg',
        title: 'Kontraktor Penambangan'
    },
    {
        image: '/img/spirit3.jpg',
        title: 'Pertambangan'
    },
    {
        image: '/img/business-construction-industry.jpg',
        title: 'Industri Konstruksi'
    },
    {
        image: '/img/business-energy.jpg',
        title: 'Energi'
    }
]);

const modules = ref([Navigation, Pagination, Autoplay]);

const breakpoints = {
    640: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
};

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
</script>

<template>
<div>
    <Swiper 
        :slides-per-view="3" 
        :space-between="30"  
        :loop="true" 
        :speed="1500" 
        :centered-slides="true" 
        :autoplay="{ delay: 3000 }"
        :modules="modules"
        :pagination="{ 
            type: 'fraction',
            el: '.custom-pagination'
        }"
        navigation
        :breakpoints="breakpoints"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="marquee-swiper"
    >
        <SwiperSlide v-for="slide in content" :key="slide.title">
            <div class="slide-content">
                <thumb :title="slide.title" :image="slide.image" />
            </div>
        </SwiperSlide>
    </Swiper>
    <div class="custom-pagination"></div> <!-- Pagination elemen -->
</div>
</template>

<style scoped>
.swiper.marquee-swiper {
  margin-top: 4rem;
  position: relative;
  padding-bottom: 3rem; /* Memberikan ruang untuk pagination */
}

.marquee-swiper .swiper-wrapper {
  transition-timing-function: linear;
  align-items: center; /* Pastikan semua item di tengah secara vertikal */
}

.slide-content {
  display: flex; /* Flexbox untuk tata letak */
  justify-content: center; /* Posisi horizontal di tengah */
  align-items: center; /* Posisi vertikal di tengah */
  height: 100%; /* Pastikan elemen memenuhi tinggi slide */
  text-align: center; /* Untuk teks di dalam elemen */
}

.thumb {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.custom-pagination {
  position: absolute;
  bottom: 50px; /* Letakkan di bawah slide */
  left: 50%; /* Tengah secara horizontal */
  transform: translateX(-50%);
  font-size: 1rem; /* Ukuran pagination */
  text-align: center;
}
</style>
