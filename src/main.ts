import { createApp } from 'vue';
import './styles/index.scss';
import App from './App.vue';
import router from './app/router';
import store from './app/store/store';

createApp(App).use(router).use(store).mount('#app');
