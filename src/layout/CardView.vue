<template>
<a-layout-content
  :style="{ 
    'margin-left':props.marginLeft + 'px',
    'margin-top':props.marginTop + 'px',
    'margin-right':props.marginRight + 'px',
    'margin-bottom':props.marginBottom + 'px' ,
    'padding-left':props.paddingLeft + 'px',
    'padding-top':props.paddingTop + 'px',
    'padding-right':props.paddingRight + 'px',
    'padding-bottom':props.paddingBottom + 'px' ,
    background: '#fff',
    minHeight: props.minHeight + 'px',
    maxHeight: props.maxHeight + 'px'
  }"
>
  <!-- 內嵌項目 -->
  <slot></slot>
</a-layout-content>
</template>

<script lang='ts'>
export default {
  props: {
    //高度相關
    minHeight: {
      type: Number,
      default:280
    },
    maxHeight: {
      type: Number,
      default:800
    },
    //內距處理
    paddingLeft: {
      type: Number,
      default:24
    },
    paddingRight: {
      type: Number,
      default:24
    },
    paddingTop: {
      type: Number,
      default:24
    },
    paddingBottom: {
      type: Number,
      default:24
    },
    //外距
    marginTop: {
      type: Number,
      default:24
    },
    marginLeft: {
      type: Number,
      default:16
    },
    marginRight: {
      type: Number,
      default:16
    },
    marginBottom: {
      type: Number,
      default:16
    },
  },
  setup(props) {
    return {
      props
    }
  },
};
</script>
