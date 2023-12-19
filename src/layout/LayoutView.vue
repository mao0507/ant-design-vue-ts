<template>
  <a-layout style="height: 100vh">
    <!-- SideBar -->
    <SideBarView />
    <a-layout>
      <!-- Header -->
      <HeaderView />
      <!-- Content -->
      <RouterView></RouterView>
      <!-- Footer -->
      <FooterView />
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import SideBarView from '@/layout/SideBarView.vue';
import HeaderView from '@/layout/HeaderView.vue';
import FooterView from '@/layout/FooterView.vue';

export default {
  components: {
    SideBarView,
    HeaderView,
    FooterView,
  },
  setup() {
    return {};
  },
};
</script>
