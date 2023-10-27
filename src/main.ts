/* eslint-disable */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
// 註冊 ant Design
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
// 引入樣式
import '@/assets/scss/app.scss';
// i18n;
import { i18n } from '@/plugins/i18n';
// router
import router from '@/router';
import App from '@/App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd);
app.use(i18n);

app.mount('#app');
