import { FOOD_IDIOMS } from "@/data/idioms/food_idioms";
import { WEATHER_IDIOMS } from "@/data/idioms/weather_idioms";
import { EMOTIONAL_IDIOMS } from "@/data/idioms/emotional_idioms";
import { BODY_IDIOMS } from "@/data/idioms/body_parts_idioms";
import { ANIMAL_IDIOMS } from "@/data/idioms/animal_idioms";
import { BUSINESS_IDIOMS } from "@/data/idioms/business_idioms";
import { SLANG_IDIOMS } from "@/data/idioms/slang_idioms";

const IDIOM_DATA = {
  food: FOOD_IDIOMS,
  weather: WEATHER_IDIOMS,
  emotional: EMOTIONAL_IDIOMS,
  body: BODY_IDIOMS,
  animal: ANIMAL_IDIOMS,
  business: BUSINESS_IDIOMS,
  "slang-idioms": SLANG_IDIOMS,
} as const;

export type IdiomCategory = keyof typeof IDIOM_DATA;

export interface Idiom {
  idiom: string;
  meaning: string;
  wrong: string[];
}

export function getIdiomsByLevel(categoryId: IdiomCategory, level: number): Idiom[] {
  const idioms = IDIOM_DATA[categoryId];
  if (!idioms) return [];
  
  const startIndex = (level - 1) * 10;
  const endIndex = startIndex + 10;
  
  return idioms.slice(startIndex, endIndex);
}

export function getCategoryName(categoryId: IdiomCategory): string {
  const names = {
    food: "Food Idioms",
    weather: "Weather Idioms", 
    emotional: "Emotional Idioms",
    body: "Body Parts Idioms",
    animal: "Animal Idioms",
    business: "Business Idioms",
    "slang-idioms": "Slang Idioms"
  };
  
  return names[categoryId] || "Unknown Category";
}
