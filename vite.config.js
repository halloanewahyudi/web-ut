import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true, // Tambahkan sourcemap untuk debugging
    target: 'esnext', // Pastikan menggunakan modern ES
  },
  resolve: {
    alias: {
      '@': '/src', // Pastikan alias terselesaikan dengan benar
    },
  },
});
