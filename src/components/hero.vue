<template>
    <div>
        <video-background src="/utclip4.mp4" class="w-full min-h-screen flex flex-col justify-center items-center">
            <Swiper class="hero-swiper" :modules="[Autoplay]" direction="horizontal" :slides-per-view="1"
                :space-between="0" :autoplay="{ delay: 7000 }" :speed="50" :loop="true" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <SwiperSlide v-for="(slide, index) in slideContent" :key="index"
                    class="min-h-screen flex flex-col justify-center items-center relative">
                  <!--   <div class="layer"></div> -->
                    <div ref="slide"
                        class="slide-content max-w-screen-md rounded-2xl p-6 bg-brand-blue backdrop-blur-lg bg-opacity-30 text-white absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col gap-5 text-center">
                        <p class="text-xl italic">{{ slide.subtitle }}</p>
                        <h3 class="text-3xl lg:text-5xl font-bold">{{ slide.title }}</h3>
                        <p class="">{{ slide.content }}</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </video-background>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules';
import slideContent from '@/assets/slide-content.json'
import 'swiper/css';
import VideoBackground from 'vue-responsive-video-background-player'
import { onMounted, ref, watchEffect } from 'vue';
import gsap from 'gsap';

// const slideContentRef = ref(null);
const slide = ref(null)

const onSwiper = (swiper) => {
    console.log(swiper);
};

const onSlideChange = (swiper) => {
    const activeSlide = swiper.activeIndex;
    const currentSlideContent = swiper.slides[activeSlide].querySelector('.slide-content');

    gsap.from(currentSlideContent, {
        duration: 2,
        delay: .5,
        opacity: 0,
        y: 500,
        ease: "power3.out",
    });
};

onMounted(() => {
    slide.value = document.querySelector('.slide-content');
});
</script>

<style scoped>
.hero-swiper {
    @apply min-h-screen overflow-hidden;
    /* Slider container memenuhi layar penuh */
}

.hero-swiper .swiper-slide {
    @apply flex flex-col justify-center items-center min-h-screen;
    /* Slide dengan konten terpusat */
}

.layer {
    @apply absolute top-0 right-0 bottom-0 left-0 w-full h-full;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0) 28%, rgba(0,0,0,0.7819502801120448) 100%);
}
</style>