<template>
  <div class="loginLayout">
    <a-card title="Sign In" :bordered="false" style="width: 400px">
      <a-form
        layout="vertical"
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
</style>
