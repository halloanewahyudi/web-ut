<template>
    <div class="footer bg-brand-blue rounded-t-3xl lg:rounded-t-[100px] text-blue-200 pt-20 pb-6">
        <div class="container  flex flex-col gap-6">
            <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="">
                <h4 class="text-xl font-medium mb-4"> PT United Tractors Tbk</h4>
                <div>
                    Jl. Raya Bekasi Km 22, <br>
                    Cakung, Jakarta Timur <br>
                    Indonesia, 13910 <br>
                    Phone +62 21 2457 9999 <br>
                </div>
            </div>
        </div>
        <div class="flex gap-4 justify-between items-end">
            <div class="flex items-center gap-5 flex-wrap">
            <img src="/logo-ut.png" alt="" class="h-14 grayscale invert">
            <img src="/astra.png" alt="" class="h-14 grayscale invert">
            <img src="/logosatu.png" alt="" class="h-14">
        </div>
        <div class="flex gap-4 items-center text-xl">
            <youtube class="w-7 h-7 hover:text-brand-yellow duration-200" />
            <instagram class="w-6 h-6  hover:text-brand-yellow duration-200" />
            <linkedin  class="w-6 h-6  hover:text-brand-yellow duration-200 "/>
            <facebook  class="w-6 h-6  hover:text-brand-yellow duration-200"/>
        </div>
        </div>

        <div class="text-right py-2 text-sm border-t border-blue-400 border-opacity-40">
            © 2024 United Tractors all right reserved.
        </div>

        </div>

    </div>
</template>

<script setup>
import youtube from '@/components/icons/youtube.vue'
import instagram from '@/components/icons/instagram.vue'
import linkedin from '@/components/icons/linkedin.vue'
import facebook from '@/components/icons/facebook.vue'
</script>

<style scoped>
.footer{
    background-image: url('/bg-footer.png');
    background-repeat: no-repeat;
    background-position: right center;
}
</style>