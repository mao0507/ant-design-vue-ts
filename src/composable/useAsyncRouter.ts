import router from '@/router/index';
import type { sideBar } from '@/module/sideBarModule';

/**
 * 動態加入 Router 設定，動態組成對應 component View
 * 依照 sideBar 的結構需要做對應處理
 * @param {Array<sideBar>} data 帶入sideBar資料
 */
export function installRouter(data: Array<sideBar>) {
  console.log('Install Async Router');
  // 如果缺少資料，直接return
  if (data === null || data.length === 0) return false;
  data.forEach((item) => {
    if (item.url === '') {
      item.subMenu.forEach((sub) => {
        if (sub.url !== '') {
          const routerItem = {
            path: sub.url,
            name: sub.name,
            meta: { code: sub.code },
            component: () => import(`@/views/${sub.code}View.vue`),
          };
          router.addRoute('layout', routerItem);
        }
      });
    }
  });
}
/**
 * 清除原先路由內容
 */
export function resetRouter(name: string) {
  router.removeRoute(name);
}

/**
 * 建立預設路由
 */
export function initRouter(name: string) {
  const routerObj = {
    path: '/',
    name,
    component: () => import('@/layout/LayoutView.vue'),
    children: [],
  };
  router.addRoute(routerObj);
}
