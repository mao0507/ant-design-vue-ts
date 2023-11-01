import type { loginInfo } from '@/module/loginModule';
import { loginAPI } from '@/service/auth';

/**
 * 登入
 * @param  { loginInfo } data 登入所需資訊
 * @returns { string } 回傳登入狀態
 */
export function login(data: loginInfo) {
  const respond = loginAPI(data);
  return respond;
}
