import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes:  Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home-page',
    component: () => import('../pages/DesignesList.vue'),
  },
  {
    path: '/design/:id',
    name: 'add-change',
    component: () => import('../pages/DesignForm.vue'),
    props: true,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})