<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false)
const toggleMenu = () => {
    isMenuOpen.value =! isMenuOpen.value;
}

</script>
<template>
    <div class="hamburger-menu" @click="toggleMenu">
        <div class="bar" :class="{ 'rotate45 absolute top-0': isMenuOpen }"></div>
        <div class="bar" :class="{ 'hidden': isMenuOpen }"></div>
        <div class="bar" :class="{ 'rotate-45 absolute top-0': isMenuOpen }"></div>
    </div>
</template>

<style scoped>
.hamburger-menu {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    justify-items: center;
    justify-content: center;
    position: relative;
}

.bar {
   @apply w-7 h-[2px] transition-all ease-in-out duration-300 bg-brand-yellow my-1;
}

.rotate45 {
    transform: rotate(45deg);
    transform-origin: bottom;
}

.rotate-45 {
    transform: rotate(-45deg);
    transform-origin: center;
}
</style>