import type { loginInfo } from '@/module/loginModule';
import { loginAPI } from '@/service/auth';

export function login(data: loginInfo) {
  const respond = loginAPI(data);
  return respond;
}
