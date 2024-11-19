<template>
    <div>
        <section>
            <div class="">
                <sectionScroll v-for="(item, index) in maincontent" :key="index" :title="item.content.title"
                    :content="item.content.description" :img="item.content.image">
                </sectionScroll>
            </div>
        </section>
    </div>
</template>

<script setup>
import maincontent from '@/assets/main-content.json'
import sectionScroll from '@/components/sectionScroll.vue';

</script>

<style lang="scss" scoped></style>