import type { Dictionary } from "./types";
import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";

const dictionaries = {
  en,
  fr,
} as const;

export type Locale = keyof typeof dictionaries;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  // Ensure we're returning a valid dictionary
  const dictionary = dictionaries[locale];
  if (!dictionary) {
    throw new Error(`Dictionary not found for locale: ${locale}`);
  }
  return dictionary;
}

// Export the Dictionary type for use in components
export type { Dictionary } from "./types";
