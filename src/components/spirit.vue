<script setup>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import 'swiper/css';
import 'swiper/css/pagination';

const content = ref([
    {
        image:'/spirit1.png',
        title:'Mesin Konstruksi'
    },

    {
        image:'/spirit2.jpg',
        title:'Kontraktor Penambangan'
    },
    {
        image:'/spirit3.jpg',
        title:'Pertambangan'
    },
    {
        image:'/spirit4.jpeg',
        title:'Industri Konstruksi'
    },
    {
        image:'/spirit5.jpg',
        title:'Energi'
    }
])

const modules = ref([Autoplay, Navigation, Pagination])

const onSwiper = (swiper) => {
        console.log(swiper);
      }
      const onSlideChange = () => {
        console.log('slide change');
      }
</script>
<template>
<div>
    <Swiper 
    :slides-per-view="3" 
    :space-between="30"  
    :autoplay="{delay:1, disableOnInteraction: false}" 
    :loop="true" 
    :speed="5000" 
    :allow-touch-move="false"
    :centered-slides="true" 
   
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="marquee-swiper">
        <SwiperSlide v-for="slide in content" :key="slide" >
            <div class="max-w[400px] w-full relative group">
                <img :src="slide.image" alt="" class="max-w-[400px] w-full h-[300px] object-cover rounded-xl opacity-90 group-hover:opacity-100 duration-200">
                <div class="absolute bottom-4 left-4 group-hover:translate-x-2 group-hover:text-xl duration-200">{{ slide.title }}</div>
            </div>
           
        </SwiperSlide>
    </Swiper>
</div>
</template>
<style scoped>
.swiper.marquee-swiper {
  margin-top: 4rem;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    white 10%,
    white 90%,
    transparent 100%
  );
}

.marquee-swiper .swiper-wrapper {
  transition-timing-function: linear;
  align-items: center;
}


</style>