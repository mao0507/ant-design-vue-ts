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
      <img 
        src="../assets/img/logo.png" 
        alt="logo" 
      >
      <span>控端</span>
    </div>
  </div>
  <a-menu theme="dark" mode="inline">
    
    <a-menu-item v-for="item in 10 " :key="item">
      <user-outlined />
      <span>nav {{ item }}</span>
    </a-menu-item>

    <a-sub-menu key="sub2">
      <template #title>
        <span>
          <team-outlined />
          <span>Team</span>
        </span>
      </template>
      <a-menu-item key="6">Team 1</a-menu-item>
      <a-menu-item key="8">Team 2</a-menu-item>
    </a-sub-menu>
  </a-menu>
</a-layout-sider>
</template>

<script lang='ts'>
import { computed } from 'vue'
import { useSideBarStore } from '../stores/sideBarStore'
export default {
  setup() {

    const sideBarStore = useSideBarStore()
    const sideBarDisplay = computed(() => sideBarStore.display)

    return {
      sideBarDisplay
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