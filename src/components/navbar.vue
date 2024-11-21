<template>
    <div>
        <div class="atas py-2 ">
            <div class="container">
                <div class="nav-wrap flex items-center justify-between gap-6">
                    <img src="/logo-ut-new.png" alt="" srcset="" class="h-10 lg:h-12">
                 <!--    bersatu dan tombol lang -->
                    <div class="flex items-center gap-4">
                        <div class="hidden lg:flex border border-white text-white rounded-lg lang overflow-hidden text-sm">
                       <a href="" class="py-1 px-2 active">ID</a> <a href="" class="py-1 px-2">EN</a>
                    </div>
                        <img src="/logosatu.png" alt="" class="h-10 lg:h-14">
                    </div>
                </div>
            </div>
        </div>
        <!-- navbar di mulai ==================== -->
        <nav class="nav-bawah nav-dekstop hidden lg:block ">
            <div class="container">
                <div class="py-3 px-6 rounded-2xl bg-white bg-opacity-70 relative max-h-max h-full"
                    @mouseleave="unselect">
                    <div class="flex flex-wrap justify-between items-center w-full">
                        <ul class="flex items-center justify-between gap-2 xl:gap-6 py-2 w-auto flex-wrap ">
                            <li v-for="(menu, index) in menus" :key="index">
                                <a href="#" @mouseenter="select(menu, index)"
                                    class="font-medium hover:text-brand-blue duration-200 flex items-center gap-1"> {{ menu.name }}  <span v-if="menu.child !=''" class="w-3 h-3"><chevdown /></span> </a>
                            </li>
                        </ul>
                        <div>
                            <div class="w-8 h-8 rounded-full bg-brand-blue text-white flex justify-center items-center">
                                <search />
                            </div>
                        </div>
                    </div>
                   <!--  <div v-if="selectItem" class="nav-dhild">
                        <div class="p-6">
                            <ul class="flex flex-col sub-menu">
                                <li v-for="item in selectItem.child " :key="item">
                                    <a href="#"
                                        class="lg:text-4xl p-4 font-semibold hover:text-brand-blue hover;text-opcity-75 inline-block w-full rounded-xl duration-200 ">{{
                                            item.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </div> -->
                </div>
            </div>
        </nav>

        <!-- navbar mobile di mulai================ ###########============ -->
        <nav class="nav-bawah nav-mobile lg:hidden ">
            <div class="container">
                <div class="bg-white bg-opacity-95 p-4 rounded-xl" >
                    <div class="flex justify-between items-center h-6">
                    <hamburger  @click="bukaMenu"/>
                    <div class="flex border border-brand-black rounded-xl lang overflow-hidden">
                       <a href="" class="py-1 px-2 active">ID</a> <a href="" class="py-1 px-2">EN</a>
                    </div>
                    <search class="w-5 h-5" />
                </div>
                <div v-if="mobileMenu" class="py-5">
                    <ul class="flex flex-col gap-2">
                        <li v-for="(menu, index) in menus" :key="index" @mouseenter="select(item)"
                            @mouseleave="unselect(item)">
                            <a href="#" @mouseenter="select(menu, index)" class="hover:text-brand-blue duration-200"> {{ menu.name }}</a>
                            <ul class="sub-menu" v-if="menu.child !=''">
                               <li v-for="ch in menu.child" :key="ch">
                                <a href="#"> {{ ch.name }}</a>
                               </li>
                            </ul>
                            </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import menus from '@/assets/menu.json';
import { ref } from 'vue';
import search from './icons/search.vue';
import hamburger from './icons/hamburger.vue';
import chevdown from './icons/chevdown.vue';
const selectItem = ref(null)
const selected = ref()
const select = (item, index) => {
    if (item.child != '') {
        selectItem.value = item
    }
    selected.value = index
}
const unselect = () => {
    selectItem.value = null
}

const mobileMenu = ref(false)
const bukaMenu = ()=>{
    mobileMenu.value = !mobileMenu.value
}
</script>

<style scoped>
.lang .active{
    @apply bg-brand-blue text-white lg:bg-white lg:text-brand-blue;
}
</style>

