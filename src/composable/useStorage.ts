// 判斷 使用 localStorage 還是 sessionStorage
const useLocal: Boolean = import.meta.env.VITE_USE_STORAGE === 'local';

/**
 * 將 資料 存入 Storage
 * 需特別注意 !
 * 只能存入 字串、數字， 物件請經過序列化後再存入
 * @param { sting } key 對應key值
 * @param { any } data 要儲存的資料
 */
export function setStorage(key: string, data: any): void {
  if (useLocal) localStorage.setItem(key, data);
  else sessionStorage.setItem(key, data);
}
/**
 * 從 Storage 取出資料
 * 需特別注意 !
 * 資料格式為json ，取出後需要自行反序列化
 * @param { string } key 對應key值
 * @returns { any }
 */
export function getStorage(key: string): any {
  if (useLocal) return localStorage.getItem(key);
  return sessionStorage.getItem(key);
}

/**
 * 清除 Storage 中的資料
 * @param { string } key 對應key值
 */
export function removeStorage(key: string): void {
  if (useLocal) localStorage.removeItem(key);
  else sessionStorage.removeItem(key);
}
