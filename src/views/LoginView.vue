<template>
  <div class="loginLayout">
    <a-card :title="$t('P00001')" :bordered="false" style="width: 400px">
      <a-form
        :model="loginState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
      >
        <a-form-item
          :label="$t('P00002')"
          name="account"
          :rules="[{ required: true, message: getLangText('P00006') }]"
          class="loginItem"
        >
          <a-input v-model:value="loginState.account">
            <template #prefix>
              <ant-UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          :label="$t('P00003')"
          name="password"
          :rules="[{ required: true, message: getLangText('P00007') }]"
          class="loginItem"
        >
          <a-input-password v-model:value="loginState.password">
            <template #prefix>
              <ant-LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item
          v-if="useCaptcha"
          :label="$t('P00004')"
          name="captcha"
          :rules="[{ required: true, message: getLangText('P00008') }]"
          class="loginItem"
        >
          <a-input v-model:value="loginState.captcha">
            <template #prefix>
              <ant-design-safety-certificate-outlined
                class="site-form-item-icon"
              />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item class="loginButton">
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
            style="width: 100%"
          >
            {{ $t('P00005') }}
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { reactive, ref } from 'vue';
import type { loginInfo } from '@/module/loginModule';
import { getLangText } from '@/composable/useLangs';
import { login } from '@/composable/useLogin';
import { getSideBar } from '@/composable/useSideBar';
import { userInfoStore } from '@/stores/userInfoStore';
import { useSideBarStore } from '@/stores/sideBarStore';
import { setStorage, removeStorage } from '@/composable/useStorage';
import {
  installRouter,
  resetRouter,
  initRouter,
} from '@/composable/useAsyncRouter';

export default {
  setup() {
    // 依照環境變數，決定是否要使用驗證碼
    const useCaptcha = ref<Boolean>(
      import.meta.env.VITE_USE_CAPTCHA === 'true',
    );
    // 宣告欄位變數
    const loginState = reactive<loginInfo>({
      account: 'mao',
      password: 'mao',
      captcha: 'mao',
    });
    // 宣告對應的 store
    const userInfo = userInfoStore();
    const sideBar = useSideBarStore();

    // 頁面載入時，清除Storage紀錄
    removeStorage('token');
    removeStorage('sideBar');
    removeStorage('nowPath');
    // 清除原先路由，重新建立項目
    resetRouter('layout');
    initRouter('layout');

    // 驗證通過
    const onFinish = async (values: any) => {
      const loginResponse = await login(values);
      // 判斷登入情況
      if (loginResponse.success) {
        // 綁定回傳 userInfo 資料
        userInfo.bindingUserInfo(loginResponse.data);
        // 儲存 token
        setStorage('token', loginResponse.data.token);

        // 取得 sideBar 資料
        const sideBarResponse = await getSideBar();
        // 判斷請求狀況
        if (sideBarResponse.success) {
          sideBar.bindSideBarData(sideBarResponse.data);
          // 存入 Storage
          setStorage('sideBar', JSON.stringify(sideBarResponse.data));
          // 建立動態路由
          installRouter(sideBarResponse.data);
        }
        // 導頁
        router.push('/');
      } else {
        // 顯示錯誤訊息
        console.log(loginResponse.msg);
      }
    };

    return {
      useCaptcha,
      loginState,
      onFinish,
      getLangText,
    };
  },
};
</script>
<style lang="sass" scope>

//設定登入位置
.loginLayout
  height: 100vh
  width: 100vw
  display: flex
  align-items: center
  justify-content: center
  padding-bottom: 180px

//調整提示文字位置
div[role='alert']
  margin:10px

//調整版面物件位置
.loginItem
  //因為只加入class會綁定到目標上一層，無法對應到指定元素改寫，
  //故往下指定ant-row來進行變動
  > .ant-row
    display: flex
    flex-direction: column

//登入按鈕
.loginButton
  > .ant-row
    margin-top: 20px

// 調整輸入框之間的 margin-bottom
:where(.css-dev-only-do-not-override-185kyl0).ant-form-item
  margin-bottom: 0px
// 調整label文字位置
:where(.css-dev-only-do-not-override-185kyl0).ant-form-item .ant-form-item-label
  text-align: start
//調整錯誤訊息顯示時，排版會跑動內縮問題
:where(.css-dev-only-do-not-override-185kyl0).ant-form-horizontal .ant-form-item-control
  flex:1 1 auto
//調整line-height
.ant-form-item-label
  line-height: 10px
</style>
