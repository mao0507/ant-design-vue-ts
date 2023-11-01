<template>
  <a-layout-sider
    v-model:collapsed="sideBarDisplay"
    :width="230"
    :collapsedWidth="0"
    :trigger="null"
    collapsible
    class="sideBarStyle"
  >
    <div class="logo">
      <div class="imgBox">
        <img src="../assets/img/logo.png" alt="logo" />
        <span>控端</span>
        <component :is="'ant-design-dashboard-outlined'" />
      </div>
    </div>

    <sideBarMenu :data="sideBarData" />
  </a-layout-sider>
</template>

<script lang="ts" type="module">
import { computed } from 'vue';
import sideBarMenu from '@/components/sideBar/sideBarMenu.vue';
import { getStorage } from '@/composable/useStorage';
import { useSideBarStore } from '@/stores/sideBarStore';
import { installRouter, initRouter } from '@/composable/useAsyncRouter';
import router from '@/router';

export default {
  components: {
    sideBarMenu,
  },
  setup() {
    // 宣告對應的 store
    const sideBarStore = useSideBarStore();
    const sideBarDisplay = computed(() => sideBarStore.display);

    // 從 store 取得 sideBar
    const sideBarData = computed(() => sideBarStore.sideBar);
    // 如果 store 沒有資料，去檢查 storage
    if (sideBarData.value.length === 0) {
      initRouter('layout');
      const storageData = JSON.parse(getStorage('sideBar'));
      sideBarStore.sideBar = storageData;
      // 重新取得資料得時候，一併重新處理 Router
      installRouter(storageData);
      router.push(getStorage('nowPath'));
    }

    return {
      sideBarDisplay,
      sideBarData,
    };
  },
};
</script>
<style scoped lang="sass">

.sideBarStyle
  height: 100vh
  overflow: auto

.logo
  margin:15px 0px
  > .imgBox
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    > img
      height: auto
      max-width: 100%
    > span
      color: #fff
      margin-top: 10px

/* ⬇️ sideBar scroll style ⬇️ */

/* width */
::-webkit-scrollbar
  width: 10px

/* Track */
::-webkit-scrollbar-track
  background: #f1f1f1

/* Handle */
::-webkit-scrollbar-thumb
  background: #888

/* Handle on hover */
::-webkit-scrollbar-thumb:hover
  background: #555
</style>
