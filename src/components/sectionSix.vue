<template>
    <section class="section min-h-screen flex flex-col py-20 ">
        <div class="container flex flex-col gap-5 lg:gap-10">
           
                <div class="max-w-[600px]">
                    <h2 class=" text-5xl lg:text-6xl xl:text-8xl mb-5 hover:text-brand-yellow"> <a href="#" >
                    <span class="text-brand-yellow font-semibold"> One </span> Synergy </a>
                </h2>
                <p class="text-neutral-700">
                    United Tractors bersinergi dengan pelanggan untuk membangun hubungan mutualisme dan keberhasilan
                    bersama. Dalam setiap kontribusi yang diberikan.
                </p>
                </div>
       
            <!--       <Sinergi /> -->
            <div class="grid grid-cols-1 lg:grid-cols-6 ">
            <div class="lg:col-span-2 clear-start flex flex-col justify-center items-center mb-5">
                <p class="font-semibold text-brand-blue">News Room</p>
                <h3 class=" text-5xl lg:text-6xl font-semibold text-center text-brand-blue">Berita <br> Terkini</h3>
            </div>
            <div class="lg:col-span-4">
                <News />
            </div>
        </div>
        </div>
    </section>

</template>

<script setup>

import { onMounted } from "vue";
import Sinergi from './sinergi.vue'
import News from './news.vue'

</script>
<style scoped></style>