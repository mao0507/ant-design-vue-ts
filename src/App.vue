<template>
  <router-view v-if="open" />
  <LoginView v-if="!open" />
</template>

<script lang='ts'>
import LoginView from '@/views/LoginView.vue';
import { ref } from 'vue';

export default {
  components: {
    LoginView,
  },
  setup() {
    const open = ref<Boolean>(true);
    return { open };
  },
};
</script>
<style lang="sass">
body
  background-color: #f5f5f5
</style>
