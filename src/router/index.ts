import { createRouter, createWebHistory } from 'vue-router';
import { getStorage, setStorage } from '@/composable/useStorage';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layout/LayoutView.vue'),
      children: [],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

// 建立路由守衛，透過路由守衛來檢查 token
router.beforeEach((to, from, next) => {
  // 檢查是否在登入頁面
  if (to.name !== 'login') {
    // 嘗試抓取token
    const token = getStorage('token');
    if (token === null || token === '') {
      // 沒有token的話，重新導向login
      next({ name: 'login', path: '/login' });
    } else {
      next();
    }
  } else next();
});

// 紀錄當前頁面，防止重新刷新後丟失當前頁面
router.afterEach((to, from) => {
  console.log('to', to);
  console.log('from', from);
  if (to.path !== '/' || from.path !== '/') {
    setStorage('nowPath', to.path);
  }
});

export default router;
