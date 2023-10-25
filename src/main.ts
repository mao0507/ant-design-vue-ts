/* eslint-disable */

import { createApp } from 'vue';
import { createPinia } from 'pinia';
// 註冊 ant Design
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
// 引入樣式
import '../src/assets/scss/app.scss';

// 註冊 chart js
import Chart from 'chart.js/auto';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd);

app.mount('#app');
