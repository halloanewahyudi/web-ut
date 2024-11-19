<template>
    <div>
        <div class="atas py-2 ">
            <div class="container">
                <div class="nav-wrap flex items-center justify-between gap-6">
                    <img src="/logo-ut.png" alt="" srcset="" class="h-10 lg:h-12">
                    <img src="/logosatu.png" alt="" class="h-10 lg:h-14">
                </div>
            </div>
        </div>
        <nav class="nav-bawah nav-dekstop hidden lg:block ">
            <div class="container">
                <div class="py-3 px-4 rounded-2xl bg-white bg-opacity-70 relative max-h-max h-full"
                    @mouseleave="unselect">
                    <div class="flex flex-wrap justify-between items-center ">
                        <ul class="flex  items-center gap-5 py-2">
                            <li v-for="(menu, index) in menus" :key="index">
                                <a href="#" @mouseenter="select(menu, index)"
                                    class="font-medium hover:text-brand-blue duration-200"> {{ menu.name }}</a>
                            </li>
                        </ul>
                        <div>
                            <search />
                        </div>
                    </div>

                    <div v-if="selectItem" class="nav-dhild">
                        <div class="p-6">
                            <ul class="flex flex-col sub-menu">
                                <li v-for="item in selectItem.child " :key="item">
                                    <a href="#"
                                        class="lg:text-4xl p-4 font-semibold hover:text-brand-blue hover;text-opcity-75 inline-block w-full rounded-xl duration-200 ">{{
                                        item.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <nav class="nav-bawah nav-mobile lg:hidden">
            <div>
                <ul class="">
                    <li v-for="(menu, index) in menus" :key="index" @mouseenter="select(item)"
                        @mouseleave="unselect(item)">
                        <a href="#" @mouseenter="select(menu, index)"> {{ menu.name }}</a>
                    </li>
                </ul>
            </div>
        </nav>
        <!--   <div class="bg-brand-yellow min-h-screen flex flex-col justify-center absolute top-0 left-0 w-1/2">
            <div class="container py-6">
                {{ selectItem }}
            </div>
        </div> -->

    </div>
</template>

<script setup>
import menus from '@/assets/menu.json';
import { ref } from 'vue';
import search from './icons/search.vue';
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
</script>

<style lang="scss" scoped></style>