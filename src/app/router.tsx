import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

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
    props: true,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})