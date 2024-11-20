<template>
    <section class="section min-h-screen flex flex-col justify-center items-center py-16 bg-brand-blue text-white">
         <div class="container flex flex-col gap-5 lg:gap-10">
            <div class="max-w-xl mx-auto text-center group">
                <h2 class=" text-5xl lg:text-6xl xl:text-8xl mb-5 hover:text-brand-yellow"> <a href="#">One Spirit </a> </h2>
                <p>
                    United Tractors berdedikasi melayani pelanggan dengan sepenuh hati dan mengutamakan kerja sama. United Tractors mengedepankan kolaborasi dengan semua pemangku kepentingan dan menciptakan praktik berkelanjutan jangka panjang melalui produk, layanan, dan semua lini bisnis kami.
                </p>
            </div>
            <Spirit />
         </div>
         
    </section> 
   
</template>

<script setup>

import { onMounted } from "vue";
import Spirit from './spirit.vue'

</script>
<style  scoped>

</style>