<template>
  <a-layout style="min-height: 100vh; ">
    <!-- SideBar -->
    <SideBarView/>
    <a-layout>
      <!-- Header -->
      <header-view/>
      <!-- Content -->
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
      <!-- Footer -->
      <footerView/>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import SideBarView from './SideBarView.vue';
import headerView from './HeaderView.vue';
import footerView from './FooterView.vue';
export default {
  components: {
    SideBarView,
    headerView,
    footerView
  },
  setup() {
    return {
    }
  }
  
}
</script>



