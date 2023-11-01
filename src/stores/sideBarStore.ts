import { ref } from 'vue';
import { defineStore } from 'pinia';
// 加入 module
import type { sideBar } from '@/module/sideBarModule';

export const useSideBarStore = defineStore('sidebar', {
  state: () => ({
    display: ref<Boolean>(false),
    sideBar: ref<Array<sideBar>>([]),
  }),
  actions: {
    switchDisplay() {
      this.display = !this.display;
    },
    bindSideBarData(data: Array<sideBar>) {
      this.sideBar = data;
    },
  },
});
