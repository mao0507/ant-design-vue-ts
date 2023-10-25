<template>
  <a-layout style="min-height: 100vh; ">
    <!-- SideBar -->
    <SideBarView/>
    <a-layout>
      <!-- Header -->
      <HeaderView/>
      <!-- Content -->
      <RouterView></RouterView>
      <!-- Footer -->
      <FooterView/>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import SideBarView from './SideBarView.vue';
import HeaderView from './HeaderView.vue';
import FooterView from './FooterView.vue';

export default {
  components: {
    SideBarView,
    HeaderView,
    FooterView,
  },
  setup() {
    return {
    };
  },

};
</script>
