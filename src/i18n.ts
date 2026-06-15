import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import idTranslation from "./locales/id/translation.json";
import suTranslation from "./locales/su/translation.json";

const LS_KEY = "birthday-guesser-settings";

function getInitialLanguage(): string {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const settings = JSON.parse(raw);
      if (settings.language) return settings.language;
    }
  } catch {
    // ignore
  }
  return "en";
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    id: { translation: idTranslation },
    su: { translation: suTranslation },
  },
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
