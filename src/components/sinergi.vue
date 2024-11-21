<script setup>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import 'swiper/css';
import 'swiper/css/pagination';

const content = ref([
    {
        image:'/img/one-synergy-1.jpg',
        title:'Mesin Konstruksi'
    },

    {
        image:'/img/one-synergy-2.jpg',
        title:'Kontraktor Penambangan'
    },
    {
        image:'/img/one-synergy-3.jpg',
        title:'Pertambangan'
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
    :speed="5000" 
    :loop="true"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="marquee-swiper">
        <SwiperSlide v-for="slide in 3" :key="slide" >
            <div class="max-w[400px] w-full relative group">
                <img :src="`/img/one-synergy-${slide}.jpg`" alt="" class="max-w-[400px] w-full h-[300px] object-cover rounded-xl opacity-90 group-hover:opacity-100 duration-200">
          
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