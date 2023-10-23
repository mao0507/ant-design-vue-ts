<template>
<a-layout-content
  :style="{ 
    margin: '24px 16px 12px 16px', 
    padding: '24px',
    background: '#fff',
    minHeight: minH,
    maxHeight: maxH
  }"
>
  <slot></slot>
</a-layout-content>
</template>

<script lang='ts'>
export default {
  props: {
    min: {
      type: Number,
      default:280
    },
    max: {
      type: Number,
      default:800
    }
  },
  setup(props) {
    const minH = props.min + 'px'
    const maxH = props.max + 'px'
    return {
      minH,
      maxH
    }
  },
};
</script>
