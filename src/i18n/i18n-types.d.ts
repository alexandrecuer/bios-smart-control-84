import { resources } from "./resources";

type DeepKeys<T> = {
  [K in keyof T & string]:
    T[K] extends string | number
      ? K
      : T[K] extends readonly string[]
        ? K
        : `${K}.${DeepKeys<T[K]>}`;
}[keyof T & string];

export type TranslationKey = DeepKeys<typeof resources.fr.translation>;