<template>
  <a-row>
    <a-col :span="12">
      <!-- <CardView
      :maxHeight="300"
      :paddingBottom="50"
    >
    <h3 style="font-weight: bold;">
      在線人數 (線圖)
    </h3>
    <canvas ref="lineChartEl"></canvas>
  </CardView>  -->

      <CardView
        :title="'DashBoard'"
        :paddingLeft="10"
        :paddingRight="10"
        :paddingBottom="10"
        :paddingTop="10"
      >
        <canvas ref="lineChartEl"></canvas>
      </CardView>
    </a-col>
    <a-col :span="12">
      <CardView
        :title="'在線人數'"
        :paddingLeft="10"
        :paddingRight="10"
        :paddingBottom="10"
        :paddingTop="10"
      >
        <canvas ref="barChartEl"></canvas>
      </CardView>
    </a-col>
  </a-row>

  <CardView :title="'DashBoard'"> </CardView>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { useLineChart, useBarChart } from '@/composable/useChart';
import CardView from '../layout/CardView.vue';

export default {
  components: {
    CardView,
  },
  setup() {
    const lineChartEl = ref(null);
    const barChartEl = ref(null);
    const labels = ['10/16', '10/17', '10/18', '10/19', '10/20', '10/21'];
    const data = [
      {
        label: '在線人數數量',
        data: [150, 105, 155, 200, 180, 360],
        color: '#7C3AED',
      },
    ];

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
      useBarChart(barChartEl, labels, data, barScales);
    });

    return {
      lineChartEl,
      barChartEl,
    };
  },
};
</script>
