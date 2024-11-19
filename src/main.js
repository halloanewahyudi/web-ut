import { createApp } from 'vue';
import './style.css';
// import 'locomotive-scroll/locomotive-scroll.css' // if you install trough package manager  
import { createPotiah } from 'potiah'
import App from './App.vue';

const app = createApp(App);
const potiah = createPotiah()
app.use(potiah)
app.mount('#app');
