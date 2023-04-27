import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../pages/DesignesList.vue'),
    },
    {
      path: '/design/:id',
      component: () => import('../pages/DesignForm.vue'),
      props: true,
    },
  ]
})