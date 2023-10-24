<template>
<a-row>
  <a-col :span="12">
    <CardView 
      :maxHeight="300"
      :paddingBottom="30"
    >
    <h3 style="font-weight: bold;">
      在線人數 (線圖)
    </h3>
    <canvas ref="lineChartEl"></canvas>
  </CardView> 
  </a-col>
  <a-col :span="12">
    <CardView 
      :maxHeight="300" 
      :paddingBottom="30"
    >
    <h3>
      在線人數 (長條圖)
    </h3>
    <canvas ref="barChartEl"></canvas>
  </CardView>
  </a-col>
</a-row>
  
  

<CardView>
    <h3>
      DashBoard Page
    </h3>
</CardView>
 
</template>

<script lang='ts'>
import CardView from '../layout/CardView.vue';
import { onMounted, ref  } from 'vue' 
import { useLineChart,useBarChart } from '../composable/useChart'
export default {
  components: {
    CardView
  },
  setup() {
    const lineChartEl = ref(null)
    const barChartEl = ref(null)
    const labels = ['10/16', '10/17', '10/18', '10/19', '10/20', '10/21'];
    const data = [{
        label: '在線人數數量',
        data: [150, 105, 155, 200, 180, 360],
        color: '#7C3AED',
      },
    ]

    const lineScales = {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [3],
          drawBorder: false,
        },
      },
    };

    const barScales = {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [3],
          drawBorder: false,
        },
      },
    };

    onMounted(() => {
      useLineChart(lineChartEl, labels, data, lineScales);
      useBarChart(barChartEl,labels,data,barScales)
    }) 

    return {
      lineChartEl,
      barChartEl
    };
  },
};
</script>
