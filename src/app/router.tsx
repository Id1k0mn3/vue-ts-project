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
    name: 'design-form',
    component: () => import('../pages/design-form/DesignForm.vue'),
    props: (route) => {      
      return {
        designItemData: JSON.parse(route.query.designItemData as string),
      }
    },
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})