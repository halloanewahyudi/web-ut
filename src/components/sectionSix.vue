<template>
    <section class="section min-h-screen flex flex-col justify-center items-center py-20 ">
         <div class="container flex flex-col gap-5 lg:gap-10">
            <div class="max-w-xl mx-auto text-center group">
                <h2 class=" text-5xl lg:text-6xl xl:text-8xl mb-5 hover:text-brand-yellow"> <a href="#">One Sinergy </a> </h2>
                <p>
                    United Tractors bersinergi dengan pelanggan untuk membangun hubungan mutualisme dan keberhasilan bersama. Dalam setiap kontribusi yang diberikan, United Tractors mendukung pertumbuhan keberlanjutan Indonesia melalui tata kelola perusahaan yang baik dan praktik bisnis yang berkelanjutan & bertanggung jawab.
                </p>
            </div>
            <Sinergi />
         </div>
         
    </section> 
   
</template>

<script setup>

import { onMounted } from "vue";
import Sinergi from './sinergi.vue'

</script>
<style  scoped>

</style>