export interface WordOfTheDay {
  simple: string;
  synonym: string;
  explanation: string;
}

export const WORDS_OF_THE_DAY: WordOfTheDay[] = [
  {
    simple: "Very tired",
    synonym: "Exhausted",
    explanation: "Completely drained of energy and strength"
  },
  {
    simple: "Very happy",
    synonym: "Ecstatic",
    explanation: "Feeling overwhelming happiness and excitement"
  },
  {
    simple: "Very sad",
    synonym: "Devastated",
    explanation: "Extremely upset or emotionally destroyed"
  },
  {
    simple: "Very angry",
    synonym: "Furious",
    explanation: "Extremely angry and full of rage"
  },
  {
    simple: "Very scared",
    synonym: "Terrified",
    explanation: "Extremely frightened or fearful"
  },
  {
    simple: "Very big",
    synonym: "Enormous",
    explanation: "Extremely large in size or scale"
  },
  {
    simple: "Very small",
    synonym: "Tiny",
    explanation: "Extremely small in size"
  },
  {
    simple: "Very fast",
    synonym: "Lightning-fast",
    explanation: "Moving at incredible speed"
  },
  {
    simple: "Very slow",
    synonym: "Sluggish",
    explanation: "Moving or reacting very slowly"
  },
  {
    simple: "Very cold",
    synonym: "Freezing",
    explanation: "Extremely cold temperature"
  },
  {
    simple: "Very hot",
    synonym: "Scorching",
    explanation: "Extremely hot or burning"
  },
  {
    simple: "Very beautiful",
    synonym: "Stunning",
    explanation: "Extremely attractive or impressive"
  },
  {
    simple: "Very ugly",
    synonym: "Hideous",
    explanation: "Extremely unpleasant to look at"
  },
  {
    simple: "Very smart",
    synonym: "Brilliant",
    explanation: "Extremely intelligent or clever"
  },
  {
    simple: "Very stupid",
    synonym: "Idiotic",
    explanation: "Extremely unintelligent or foolish"
  },
  {
    simple: "Very hungry",
    synonym: "Starving",
    explanation: "Extremely hungry or famished"
  },
  {
    simple: "Very thirsty",
    synonym: "Parched",
    explanation: "Extremely thirsty or dry"
  },
  {
    simple: "Very clean",
    synonym: "Immaculate",
    explanation: "Perfectly clean and tidy"
  },
  {
    simple: "Very dirty",
    synonym: "Filthy",
    explanation: "Extremely dirty or unclean"
  },
  {
    simple: "Very quiet",
    synonym: "Silent",
    explanation: "Completely without sound"
  },
  {
    simple: "Very loud",
    synonym: "Deafening",
    explanation: "Extremely loud, causing temporary hearing loss"
  },
  {
    simple: "Very rich",
    synonym: "Wealthy",
    explanation: "Having a lot of money and possessions"
  },
  {
    simple: "Very poor",
    synonym: "Destitute",
    explanation: "Extremely poor, lacking basic necessities"
  },
  {
    simple: "Very strong",
    synonym: "Powerful",
    explanation: "Having great physical strength or influence"
  },
  {
    simple: "Very weak",
    synonym: "Frail",
    explanation: "Physically weak and delicate"
  },
  {
    simple: "Very important",
    synonym: "Crucial",
    explanation: "Extremely important or essential"
  },
  {
    simple: "Very difficult",
    synonym: "Challenging",
    explanation: "Requiring great effort or skill"
  },
  {
    simple: "Very easy",
    synonym: "Effortless",
    explanation: "Requiring no difficulty or effort"
  },
  {
    simple: "Very dangerous",
    synonym: "Perilous",
    explanation: "Extremely dangerous or risky"
  },
  {
    simple: "Very safe",
    synonym: "Secure",
    explanation: "Completely protected from danger"
  }
];

// Function to get word of the day based on current date
export function getWordOfTheDay(): WordOfTheDay {
  const today = new Date();
  // Get days since epoch (January 1, 1970)
  const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
  // Use modulo to cycle through the array
  const wordIndex = daysSinceEpoch % WORDS_OF_THE_DAY.length;
  return WORDS_OF_THE_DAY[wordIndex];
}
