import { enDict } from "./en";
import { jpDict } from "./jp";
import { I18nAllDict } from "./type";

export const i18nDict: I18nAllDict = {
  jp: jpDict,
  en: enDict,
} as const;
