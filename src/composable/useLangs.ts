import { computed } from 'vue';
import { i18n } from '@/plugins/i18n';

const { locale, t } = i18n.global;

export interface langItem {
  value: string;
  text: string;
}

/**
 * 語系清單
 * 未使用語系請註解
 */
export const langsList: Array<langItem> = [
  { value: 'zh-tw', text: '繁體中文' },
  { value: 'zh-cn', text: '简体中文' },
  { value: 'en-us', text: 'ENGLISH' },
  //   { value: 'th-th', text: 'ไทย' },
  //   { value: 'ko-kr', text: '한국어' },
  //   { value: 'en-my', text: 'हिन्दी' },
  //   { value: 'id-id', text: 'Indonesia' },
  //   { value: 'vi-vn', text: 'Tiếng Việt' },
  //   { value: 'ja-jp', text: '日本語' },
];

/**
 * 取得當前環境語系
 * @returns { string }
 */
export function getNowLang() {
  return computed(
    () => langsList.find((i: langItem) => i.value === locale.value)?.text,
  );
}

/**
 * 更換語系
 * @param { string }lang 要更換的語系 value
 */
export function changeLang(lang: string) {
  locale.value = lang;
}

/**
 * 使用函示來取得對應語系文字
 * @param { string } code 輸入對應代碼
 * @returns { string } 回傳對應文字
 */
export function getLangText(code: string) {
  return t(code);
}
