import request from './request';

// 取得 sideBar
export const sideBarAPI = () => request.get('/api/sidebar');
