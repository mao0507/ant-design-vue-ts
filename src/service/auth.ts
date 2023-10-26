import type { loginInfo } from '@/module/loginModule';
import request from './request';

// 登入API
export const loginAPI = (param:loginInfo) => request.post('/api/Auth/Login', param);
