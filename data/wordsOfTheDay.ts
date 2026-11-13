export interface WordOfTheDay {
  simple: string;
  synonym: string;
  explanation: string;
  transcription: string;
}

export const WORDS_OF_THE_DAY: WordOfTheDay[] = [
  {
    simple: "Very tired",
    synonym: "Exhausted",
    explanation: "Completely drained of energy and strength",
    transcription: "/ɪɡˈzɔːstɪd/"
  },
  {
    simple: "Very happy",
    synonym: "Ecstatic",
    explanation: "Feeling overwhelming happiness and excitement",
    transcription: "/ɪkˈstætɪk/"
  },
  {
    simple: "Very sad",
    synonym: "Devastated",
    explanation: "Extremely upset or emotionally destroyed",
    transcription: "/ˈdevəsteɪtɪd/"
  },
  {
    simple: "Very angry",
    synonym: "Furious",
    explanation: "Extremely angry and full of rage",
    transcription: "/ˈfjʊəriəs/"
  },
  {
    simple: "Very scared",
    synonym: "Terrified",
    explanation: "Extremely frightened or fearful",
    transcription: "/ˈterɪfaɪd/"
  },
  {
    simple: "Very big",
    synonym: "Enormous",
    explanation: "Extremely large in size or scale",
    transcription: "/ɪˈnɔːrməs/"
  },
  {
    simple: "Very small",
    synonym: "Tiny",
    explanation: "Extremely small in size",
    transcription: "/ˈtaɪni/"
  },
  {
    simple: "Very fast",
    synonym: "Lightning-fast",
    explanation: "Moving at incredible speed",
    transcription: "/ˈlaɪtnɪŋ fɑːst/"
  },
  {
    simple: "Very slow",
    synonym: "Sluggish",
    explanation: "Moving or reacting very slowly",
    transcription: "/ˈslʌɡɪʃ/"
  },
  {
    simple: "Very cold",
    synonym: "Freezing",
    explanation: "Extremely cold temperature",
    transcription: "/ˈfriːzɪŋ/"
  },
  {
    simple: "Very hot",
    synonym: "Scorching",
    explanation: "Extremely hot or burning",
    transcription: "/ˈskɔːrtʃɪŋ/"
  },
  {
    simple: "Very beautiful",
    synonym: "Stunning",
    explanation: "Extremely attractive or impressive",
    transcription: "/ˈstʌnɪŋ/"
  },
  {
    simple: "Very ugly",
    synonym: "Hideous",
    explanation: "Extremely unpleasant to look at",
    transcription: "/ˈhɪdiəs/"
  },
  {
    simple: "Very smart",
    synonym: "Brilliant",
    explanation: "Extremely intelligent or clever",
    transcription: "/ˈbrɪljənt/"
  },
  {
    simple: "Very stupid",
    synonym: "Idiotic",
    explanation: "Extremely unintelligent or foolish",
    transcription: "/ˌɪdiˈɒtɪk/"
  },
  {
    simple: "Very hungry",
    synonym: "Starving",
    explanation: "Extremely hungry or famished",
    transcription: "/ˈstɑːrvɪŋ/"
  },
  {
    simple: "Very thirsty",
    synonym: "Parched",
    explanation: "Extremely thirsty or dry",
    transcription: "/pɑːrtʃt/"
  },
  {
    simple: "Very clean",
    synonym: "Immaculate",
    explanation: "Perfectly clean and tidy",
    transcription: "/ɪˈmækjələt/"
  },
  {
    simple: "Very dirty",
    synonym: "Filthy",
    explanation: "Extremely dirty or unclean",
    transcription: "/ˈfɪlθi/"
  },
  {
    simple: "Very quiet",
    synonym: "Silent",
    explanation: "Completely without sound",
    transcription: "/ˈsaɪlənt/"
  },
  {
    simple: "Very loud",
    synonym: "Deafening",
    explanation: "Extremely loud, causing temporary hearing loss",
    transcription: "/ˈdefənɪŋ/"
  },
  {
    simple: "Very rich",
    synonym: "Wealthy",
    explanation: "Having a lot of money and possessions",
    transcription: "/ˈwelθi/"
  },
  {
    simple: "Very poor",
    synonym: "Destitute",
    explanation: "Extremely poor, lacking basic necessities",
    transcription: "/ˈdestɪtjuːt/"
  },
  {
    simple: "Very strong",
    synonym: "Powerful",
    explanation: "Having great physical strength or influence",
    transcription: "/ˈpaʊərfl/"
  },
  {
    simple: "Very weak",
    synonym: "Frail",
    explanation: "Physically weak and delicate",
    transcription: "/freɪl/"
  },
  {
    simple: "Very important",
    synonym: "Crucial",
    explanation: "Extremely important or essential",
    transcription: "/ˈkruːʃl/"
  },
  {
    simple: "Very difficult",
    synonym: "Challenging",
    explanation: "Requiring great effort or skill",
    transcription: "/ˈtʃælɪndʒɪŋ/"
  },
  {
    simple: "Very easy",
    synonym: "Effortless",
    explanation: "Requiring no difficulty or effort",
    transcription: "/ˈefərtləs/"
  },
  {
    simple: "Very dangerous",
    synonym: "Perilous",
    explanation: "Extremely dangerous or risky",
    transcription: "/ˈperələs/"
  },
  {
    simple: "Very safe",
    synonym: "Secure",
    explanation: "Completely protected from danger",
    transcription: "/sɪˈkjʊər/"
  }
];

export function getWordOfTheDay(): WordOfTheDay {
  const today = new Date();
  const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
  const wordIndex = daysSinceEpoch % WORDS_OF_THE_DAY.length;
  return WORDS_OF_THE_DAY[wordIndex];
}