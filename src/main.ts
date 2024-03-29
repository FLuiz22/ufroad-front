import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ElementPlus from 'element-plus';
import VueMask from 'vue-the-mask';
import router from './router/index.ts';

const app = createApp(App);

app.use(VueMask);
app.use(ElementPlus);
app.use(router);

app.mount('#app');