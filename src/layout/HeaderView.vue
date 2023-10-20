<template>
  <a-layout-header class="headerNav">
    <!-- sideBar switch Button -->
    <div>
      <ant-design-menu-outlined 
        class="trigger"
        @click="switchDisplay()"
      />
    </div>

    <div class="headerButtonList">
      <!-- i18n Button-->

      <a-dropdown :trigger="['click']" arrow>
        <template #overlay>
          <a-menu>
            <a-menu-item key="1">
              <UserOutlined />
              1st menu item
            </a-menu-item>
            <a-menu-item key="2">
              <UserOutlined />
              2nd menu item
            </a-menu-item>
            <a-menu-item key="3">
              <UserOutlined />
              3rd item
            </a-menu-item>
          </a-menu>
        </template>
        <a-button class="headerButton" style="margin-right: 10px;">
          <ant-design-message-filled/>
          <span >Zh-tw</span>
        </a-button>
      </a-dropdown>

      <!-- user Button -->

      <a-dropdown :trigger="['click']" arrow>
        <template #overlay>
          <a-menu>
            <a-menu-item key="1" >
              <div class="menuItem">
                <ant-design-setting-outlined/>
                <span>更改密碼</span>
              </div>
            </a-menu-item>
            <a-menu-item key="2" >
              <div class="menuItem">
                <ant-design-key-outlined />
                <span>登出</span>
              </div>
              
            </a-menu-item>
         
          </a-menu>
        </template>
        <a-button class="headerButton">
          <ant-design-user-outlined />
          <span>Admin</span>
        </a-button>
      </a-dropdown>



    </div>

    

  </a-layout-header>
</template>

<script lang='ts'>
import { computed } from 'vue';
import { useSideBarStore } from '../stores/sideBarStore'

export default {
  setup() {
    const store = useSideBarStore();
    const display = computed(() => store.display)
    const switchDisplay = () => store.switchDisplay()

    return {
      display,
      switchDisplay
    };
  },
};
</script>
<style lang="sass" scoped>
  .headerNav
    background: #fff !important
    padding-inline: 32px !important
    display: flex
    align-items: center
    justify-content: space-between

  .headerButtonList
    display: flex

  .headerButton
    display: flex
    align-items: center
    justify-content: space-between
    > svg
      margin-right: 5px

  .menuItem
    display: flex
    align-items: center
    > svg 
      margin-right: 5px
    > span 
      margin: 0px 3px
    

  .trigger:hover 
    cursor: pointer

</style>
