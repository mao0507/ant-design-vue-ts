<template>
<a-menu theme="dark" mode="inline">
  <div 
    v-for="item in sideBarData" 
    :key="item.code"
  >

    <!-- 無子項目 -->
    <template v-if="item.url ">
      <a-menu-item >
        <div class="sideBarItem">
          <Icon :icon="item.icon"/>
          <router-link :to="item.url">{{ item.name }}</router-link>
        </div>
      </a-menu-item>
    </template>


    <!-- 有子項目 -->
    <template v-if="!item.url ">
      <a-sub-menu :key="item.featuresId">
        <!-- 分類選單 -->
        <template #title>
          <div class="sideBarMenu">
            <Icon :icon="item.icon"/>
            <span v-if="item.subMenu.length > 0">{{ item.name }}</span>   
          </div>
        </template>
        <!-- 子項目 -->
        <template v-if="!item.url">
          <a-menu-item v-for="sub in item.subMenu" :key="sub.featuresId">
            <div class="sideBarItem">
              <Icon :icon="sub.icon" v-if="sub.icon"/>
              <router-link :to="sub.url">{{ sub.name }}</router-link>
            </div>
          </a-menu-item>
        </template>
      </a-sub-menu> 
    </template>
    
   
   

  </div>
  
</a-menu>
</template>

<script lang='ts'>
import { Icon } from '@iconify/vue'
import { sideBar } from '../../module/mock/sideBar'
export default {
  components: {
    Icon
  },
  props:{
    data: {
      type: Array<sideBar>,
      default:() => [],
    }
  },
  setup(props) {
    const sideBarData = props.data;
    //console.log('sideBarMenu', sideBarData)
    return {
      sideBarData,
    };
  },
};
</script>
<style lang="sass">
.sideBarItem
  display: flex
  align-items: center
  > a 
    padding-left: 8px
  


.sideBarMenu 
  display: flex
  align-items: center
  > span 
    padding-left: 8px
</style>