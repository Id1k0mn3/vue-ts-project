import { createApp } from 'vue';
import './styles/index.scss';
import App from './App.vue';
import router from './app/router';

createApp(App).use(router).mount('#app');
