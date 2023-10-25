import { Chart, registerables } from 'chart.js';
import { unref } from 'vue';

/**
 * 建立 ChartJs 圖表所需的 設定參數
 * @param { object } scales x,y軸的細項設定
 * @returns
 */
const createdOption = (scales: object) => {
  const option = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        align: 'end',
        position: 'bottom',
      },
    },
    scales,
  };

  return option;
};

/**
 * 專門渲染線圖
 * @param { string } target canvas 所需要渲染的位置
 * @param { Array<string> } labels 圖表下方的 x軸 顯示文字
 * @param { Array<object> } data  圖表資料
 * @param { object } scales x,y軸的細項設定
 * @returns
 */
export function useLineChart(
  target: string,
  labels: Array<string>,
  data: Array<object>,
  scales: object,
) {
  const el = unref(target);

  const datasets = data.map((x: any) => {
    if (x.color) {
      x.borderColor = x?.color;
      x.backgroundColor = x?.color;
    }
    x.tension = 0.4;
    return x;
  });

  const options: object = createdOption(scales);

  Chart.register(...registerables);

  return new Chart(el, {
    type: 'line',
    data: {
      labels,
      datasets,
    },
    options,
  });
}

/**
 * 專門渲染長條圖
 * @param { string } target canvas 所需要渲染的位置
 * @param { Array<string> } labels 圖表下方的 x軸 顯示文字
 * @param { Array<object> } data  圖表資料
 * @param { object } scales x,y軸的細項設定
 * @returns
 */
export function useBarChart(
  target: string,
  labels: Array<string>,
  data: Array<object>,
  scales: object,
) {
  const el = unref(target);

  const datasets = data.map((x: any) => {
    if (x.color) {
      x.borderColor = x?.color;
      x.backgroundColor = x?.color;
    }
    x.barThickness = 8;
    return x;
  });

  const options: object = createdOption(scales);

  return new Chart(el, {
    type: 'bar',
    data: {
      labels,
      datasets,
    },
    options,
  });
}
