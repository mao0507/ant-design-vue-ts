import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { userInfo } from '@/module/userInfoModule';

export const userInfoStore = defineStore('userInfo', {
  state: () => ({
    userId: ref<number>(0),
    userName: ref<string>(''),
    token: ref<string>(''),
  }),
  actions: {
    /**
     * 自動綁定回傳的使用者資料
     * @param {userInfo} data 使用者資料
     */
    bindingUserInfo(data: userInfo) {
      // 拆解 data Object 的 key 值
      const keyArray: string[] = Object.keys(data);
      // 閉包 function 用於處理 typeScript keyof 資料
      function isValidKey(
        key: string | number | symbol,
        object: object,
      ): key is keyof typeof object {
        return key in object;
      }
      // 迴圈處
      keyArray.forEach((item) => {
        if (isValidKey(item, data)) {
          // this 指向 state ， state 需要手動建立
          this[item] = data[item];
        }
      });
    },
  },
});
