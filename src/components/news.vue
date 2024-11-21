<script setup>
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css'
import news from '@/assets/news-content.json';
import { ref } from "vue";
const onSwiper = (swiper) => {
    console.log(swiper);
}
const onSlideChange = () => {
    console.log('slide change');
}
const modules = ref([Autoplay]) 
</script>
<template>
    <div>
        <div class="container">
            <div class="grid gri-cols-1 lg:grid-cols-6">
                <div class="lg:col-span-2">

                </div>
                <div class="lg:col-span-4">
                    <Swiper :autoplay="{ delay: 300, disableOnInteraction: false }" :slides-per-view="3" :space-between="10"
                        :loop="true" @swiper="onSwiper" @slideChange="onSlideChange" :modules="modules" class="news-slide">
                        <SwiperSlide v-for="(item, index) in news" :key="index">
                            <div class="rounded-xl overflow-hidden">
                                <img :src="item.image" alt="" class="w-full h-[300px] object-cover">
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