import { createI18n } from 'vue-i18n';
import locales from '@/utils/locales';

// i18n 語系設定
export const i18n = createI18n({
  locale: 'zh-tw',
  messages: { ...locales },
  legacy: false,
  globalInjection: true,
});
