<template>
<a-card
  :bordered="false" 
  :title="props.title"
  :style="{ 
      'margin-left':props.marginLeft != 0 ? props.marginLeft + 'px' : '',
      'margin-top':props.marginTop != 0 ? props.marginTop + 'px' : '',
      'margin-right':props.marginRight != 0 ? props.marginRight + 'px' : '',
      'margin-bottom':props.marginBottom != 0 ? props.marginBottom + 'px' : '',
      'padding-left':props.paddingLeft != 0 ? props.paddingLeft + 'px' : '',
      'padding-top':props.paddingTop != 0 ? props.paddingTop + 'px' : '',
      'padding-right':props.paddingRight != 0 ? props.paddingRight + 'px' : '',
      'padding-bottom':props.paddingBottom != 0 ? props.paddingBottom + 'px' : '',
      'min-Height': props.minHeight != 0 ? props.minHeight + 'px' : '',
      'max-Height': props.maxHeight != 0 ? props.maxHeight + 'px' : '',
      'min-width': props.minWidth != 0 ? props.minWidth + 'px' : '',
      'max-width': props.maxWidth != 0 ? props.maxWidth + 'px' : '',
    }"
  >
  <!-- 內嵌項目 -->
  <slot></slot>
</a-card>
</template>

<script lang='ts'>
export default {
  props: {
    title: {
      type:String
    },
    //寬度相關
    minWidth: {
      type: Number,
    },
    maxWidth: {
      type: Number,
    },
    //高度相關
    minHeight: {
      type: Number,
      default:280
    },
    maxHeight: {
      type: Number,
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
