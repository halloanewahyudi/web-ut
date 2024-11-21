<template>
    <div class="">
        <video-background src="/utclip4.mp4" class="w-full min-h-screen flex flex-col justify-center items-center relative">
            <div class="layer"></div>
            <div class="flex flex-col gap-6 lg:gap-10 text-white min-h-screen justify-end p-6 lg:p-10">
                <swiper :modules="modules" :slides-per-view="1" :space-between="10" :speed="1500" @swiper="onSwiper"
                    :centered-slides="true" @slideChange="onSlideChange" :thumbs="{ swiper: thumbsSwiper }"
                    class="swiper-cover ">
                    <swiper-slide v-for="slide in Slides" :key="slide" class="">
                        <div class="">
                            <p>{{ slide.subtitle }}</p>
                            <h3 class="text-3xl  font-medium mb-5 break-words whitespace-normal">{{ slide.title }}</h3>
                            <p class="break-words whitespace-normal">{{ slide.content }}</p>
                            <div v-if="slide.id === 1" class="flex gap-4 items-center flex-wrap">
                                <a href="#" class="py-2 px-4  border border-white rounded-xl hover:bg-white hover:text-brand-blue inline-block mt-5 duration-200"> www.agincourtresources.com </a>
                                <a href="#" class="py-2 px-4  border border-white rounded-xl hover:bg-white hover:text-brand-blue inline-block mt-5 duration-200"> www.turanggaresources.com</a>
                                </div>
                        </div>
                    </swiper-slide>
                </swiper>

                <swiper @swiper="setThumbsSwiper" :spaceBetween="0" :slidesPerView="auto"
                    :centerdSlides="true" :watchSlidesProgress="true" :modules="modules" class="swiper-subtitle">
                    <swiper-slide v-for="thumb in Slides" :key="thumb" class="slide-thumb max-w-[calc(100%/2)] w-full text-center border-t">
                        <div class="cursor-pointer p-4 w-full text-center">
                            {{ thumb.subtitle }}
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </video-background>
    </div>
</template>

<script setup>
import VideoBackground from 'vue-responsive-video-background-player'
import Slides from '@/assets/slide-content.json'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay, Thumbs } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { ref } from 'vue';

const modules = ref([ Autoplay, Thumbs])

const onSwiper = (swiper) => {
    console.log(swiper)
}
const onSlideChange = (swiper) => {
    const activeSlide = swiper.activeIndex;
    swiper.slides[activeSlide].querySelector('.slide-thumb');

}

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

</script>

<style scoped>
.swiper-cover, .swiper-subtitle{
 @apply overflow-hidden max-w-screen-md mx-auto w-full;
}

.layer {
    @apply absolute top-0 right-0 bottom-0 left-0 w-full h-full;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0) 28%, rgba(0,0,0,0.7819502801120448) 100%);
}
.swiper-subtitle .swiper-slide-thumb-active::before {
    content: '';
    animation-name: line-active;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    @apply w-full h-1 bg-brand-yellow block rounded-full;
}
.swiper-subtitle .swiper-slide-thumb-active{
    @apply text-xl text-brand-yellow font-medium;
}

@keyframes line-active {
    0% {
        width: 0;
    }

    100% {
        width: 100%;
    }
}
</style>