// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {},
      },
      fr: {
        translation: {},
      },
    },
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
