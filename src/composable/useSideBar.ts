import { sideBarAPI } from '@/service/sideBar';

/**
 * 取得 sideBar 資料
 * @returns { string } 回傳sideBar資料
 */
export function getSideBar() {
  const respond = sideBarAPI();
  return respond;
}
