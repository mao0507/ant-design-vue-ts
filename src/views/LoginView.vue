<template>
  <div class="loginLayout">
    <a-card title="Sign In" :bordered="false" style="width: 400px">
      <a-form
        :model="loginState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Account"
          name="account"
          :rules="[{ required: true, message: 'Please input your account!' }]"
          class="loginItem"
        >
          <a-input v-model:value="loginState.account">
            <template #prefix>
              <ant-UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
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
          label="Captcha"
          name="captcha"
          :rules="[{ required: true, message: 'Please input your Captcha!' }]"
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
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
import type { loginInfo } from '@/module/loginModule';

import { login } from '@/composable/useLogin';

export default {
  setup() {
    const useCaptcha = ref<Boolean>(
      import.meta.env.VITE_USE_CAPTCHA === 'true',
    );
    const loginState = reactive<loginInfo>({
      account: 'mao',
      password: 'mao',
      captcha: '',
    });
    const onFinish = async (values: any) => {
      console.log('Success:', values);

      const resp = await login(values);
      console.log(resp);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

    return {
      useCaptcha,
      loginState,
      onFinish,
      onFinishFailed,
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
