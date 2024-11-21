<script setup>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import 'swiper/css';
import 'swiper/css/pagination';
import thumb from './thumb.vue'

const content = ref([
    {
        image:'/img/bisnis-construction-machinery2.jpg ',
        title:'Mesin Konstruksi'
    },

    {
        image:'/img/business-mining-contracting.jpg',
        title:'Kontraktor Penambangan'
    },
    {
        image:'/img/spirit3.jpg',
        title:'Pertambangan'
    },
    {
        image:'/img/business-construction-industry.jpg',
        title:'Industri Konstruksi'
    },
    {
        image:'/img/business-energy.jpg',
        title:'Energi'
    }
])

const modules = ref([ Navigation, Pagination, Autoplay])

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
    :loop="true" 
    :speed="1500" 
    :centered-slides="true" 
    :autoplay="{delay:3000}"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="marquee-swiper">
        <SwiperSlide v-for="slide in content" :key="slide" >
            <div class="max-w[400px] w-full relative group">
               <thumb :title="slide.title" :image="slide.image" />
            </div>
           
        </SwiperSlide>
    </Swiper>
</div>
</template>
<style scoped>
.swiper.marquee-swiper {
  margin-top: 4rem;
}

.marquee-swiper .swiper-wrapper {
  transition-timing-function: linear;
  align-items: center;
}


</style>