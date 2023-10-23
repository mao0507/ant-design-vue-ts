import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../layout/LayoutView.vue'
// DEV test Page
import HomeView from '../views/homeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayoutView,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
          //component: () => import('../views/homeView.vue')
        },
        {
          path: '/dashBoard',
          name: 'dashBoard',
          component: () => import('../views/dashBoardView.vue'),
        },
      ],
    },
  ],
})

export default router
