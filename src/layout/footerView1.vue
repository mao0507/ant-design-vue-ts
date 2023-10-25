<template>
  <a-layout-footer style="text-align: center">
    {{ content }}
  </a-layout-footer>
</template>

<script lang='ts'>
export default {
  props: {
    footerContent: {
      type: String,
      default: 'Ant Design ©2018 Created by Ant UED',
    },
  },
  setup(props) {
    const content = props.footerContent;
    return {
      content,
    };
  },
};
</script>
