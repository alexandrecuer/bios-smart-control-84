import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import type { TranslationKey } from "./i18n-types";
import { resources } from "./resources";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator', 'querystring', 'cookie', 'localStorage'],
      caches: [],
    },
    resources
  });

export default i18n;

export function tAuto(key: TranslationKey): string {
  const value = i18n.t(key, { returnObjects: true });

  if (Array.isArray(value)) {
    return value.join(" ");
  }

  return String(value);
}