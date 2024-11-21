<script setup>
import gsap from "gsap"
import { ref } from "vue"
const props = defineProps({
    image:String,
    title:String
})

</script>
<template>
<div  class="rounded-full relative group w-[300px] h-[300px]  shadow-2xl flex flex-col justify-center items-center">
    <div class=" absolute top-0 left-0 w-full h-full ">
        <div class="thumb-backdrop relative w-[300px] h-[300px]  backdrop-blur-lg bg-white bg-opacity-60 rounded-full flex flex-col justify-center items-center text-lg scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 duration-300 ease-out">
           <h4  class="thumb-title  text-brand-black opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 delay-300 duration-300 ease-in">{{ props.title }} </h4> 
        </div>
    </div>
    <img :src="props.image" alt="" class="w-[300px] h-[300px] object-cover rounded-full">
</div>
</template>