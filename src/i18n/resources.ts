import fr from "../locales/fr.json";
import en from "../locales/en.json";

export const resources = {
  en: { translation: en },
  fr: { translation: fr }
} as const;

export type Resources = typeof resources;