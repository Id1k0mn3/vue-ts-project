import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { DesignItem } from '../intefaces';

const routes:  Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home-page',
    component: () => import('../pages/home-page/HomePage.vue'),
  },
  {
    path: '/design/:id',
    name: 'add-change',
    component: () => import('../pages/design-form/DesignForm.vue'),
    props: (route) => ({ designItemData: route.params.data })
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})