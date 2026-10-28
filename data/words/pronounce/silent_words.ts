export interface SilentWordItem {
  word: string;
  silentLetter: string;
  silentIndex: number;
  transcription: string;
}

export interface SilentWordLevel {
  id: string;
  name: string;
  words: SilentWordItem[];
}

export const SILENT_WORD_LEVELS: SilentWordLevel[] = [
  {
    id: "level-1",
    name: "Level 1",
    words: [
      { word: "would", silentLetter: "l", silentIndex: 3, transcription: "/wʊd/" },
      { word: "could", silentLetter: "l", silentIndex: 3, transcription: "/kʊd/" },
      { word: "should", silentLetter: "l", silentIndex: 4, transcription: "/ʃʊd/" },
      { word: "knight", silentLetter: "k", silentIndex: 0, transcription: "/naɪt/" },
      { word: "knife", silentLetter: "k", silentIndex: 0, transcription: "/naɪf/" },
      { word: "know", silentLetter: "k", silentIndex: 0, transcription: "/noʊ/" },
      { word: "knock", silentLetter: "k", silentIndex: 0, transcription: "/nɒk/" },
      { word: "knee", silentLetter: "k", silentIndex: 0, transcription: "/niː/" },
      { word: "knew", silentLetter: "k", silentIndex: 0, transcription: "/njuː/" },
      { word: "wrap", silentLetter: "w", silentIndex: 0, transcription: "/ræp/" },
    ],
  },
  {
    id: "level-2",
    name: "Level 2",
    words: [
      { word: "write", silentLetter: "w", silentIndex: 0, transcription: "/raɪt/" },
      { word: "wrong", silentLetter: "w", silentIndex: 0, transcription: "/rɒŋ/" },
      { word: "wrist", silentLetter: "w", silentIndex: 0, transcription: "/rɪst/" },
      { word: "wreck", silentLetter: "w", silentIndex: 0, transcription: "/rek/" },
      { word: "lamb", silentLetter: "b", silentIndex: 3, transcription: "/læm/" },
      { word: "climb", silentLetter: "b", silentIndex: 4, transcription: "/klaɪm/" },
      { word: "bomb", silentLetter: "b", silentIndex: 3, transcription: "/bɒm/" },
      { word: "thumb", silentLetter: "b", silentIndex: 4, transcription: "/θʌm/" },
      { word: "comb", silentLetter: "b", silentIndex: 3, transcription: "/koʊm/" },
      { word: "debt", silentLetter: "b", silentIndex: 2, transcription: "/det/" },
    ],
  },
  {
    id: "level-3",
    name: "Level 3",
    words: [
      { word: "doubt", silentLetter: "b", silentIndex: 3, transcription: "/daʊt/" },
      { word: "subtle", silentLetter: "b", silentIndex: 2, transcription: "/ˈsʌtəl/" },
      { word: "hour", silentLetter: "h", silentIndex: 0, transcription: "/aʊər/" },
      { word: "honest", silentLetter: "h", silentIndex: 0, transcription: "/ˈɒnɪst/" },
      { word: "ghost", silentLetter: "h", silentIndex: 1, transcription: "/ɡoʊst/" },
      { word: "heir", silentLetter: "h", silentIndex: 0, transcription: "/eər/" },
      { word: "herb", silentLetter: "h", silentIndex: 0, transcription: "/hɜːrb/" },
      { word: "honor", silentLetter: "h", silentIndex: 0, transcription: "/ˈɒnər/" },
      { word: "island", silentLetter: "s", silentIndex: 1, transcription: "/ˈaɪlənd/" },
      { word: "castle", silentLetter: "t", silentIndex: 3, transcription: "/ˈkæsəl/" },
    ],
  },
  {
    id: "level-4",
    name: "Level 4",
    words: [
      { word: "listen", silentLetter: "t", silentIndex: 3, transcription: "/ˈlɪsən/" },
      { word: "often", silentLetter: "t", silentIndex: 2, transcription: "/ˈɒfən/" },
      { word: "fasten", silentLetter: "t", silentIndex: 3, transcription: "/ˈfæsən/" },
      { word: "soften", silentLetter: "t", silentIndex: 3, transcription: "/ˈsɒfən/" },
      { word: "hasten", silentLetter: "t", silentIndex: 3, transcription: "/ˈheɪsən/" },
      { word: "moisten", silentLetter: "t", silentIndex: 4, transcription: "/ˈmɔɪsən/" },
      { word: "calm", silentLetter: "l", silentIndex: 2, transcription: "/kɑːm/" },
      { word: "palm", silentLetter: "l", silentIndex: 2, transcription: "/pɑːm/" },
      { word: "psalm", silentLetter: "p", silentIndex: 0, transcription: "/sɑːm/" },
      { word: "receipt", silentLetter: "p", silentIndex: 5, transcription: "/rɪˈsiːt/" },
    ],
  },
  {
    id: "level-5",
    name: "Level 5",
    words: [
      { word: "scene", silentLetter: "c", silentIndex: 1, transcription: "/siːn/" },
      { word: "science", silentLetter: "c", silentIndex: 1, transcription: "/ˈsaɪəns/" },
      { word: "autumn", silentLetter: "n", silentIndex: 5, transcription: "/ˈɔːtəm/" },
      { word: "column", silentLetter: "n", silentIndex: 5, transcription: "/ˈkɒləm/" },
      { word: "solemn", silentLetter: "n", silentIndex: 5, transcription: "/ˈsɒləm/" },
      { word: "sword", silentLetter: "w", silentIndex: 1, transcription: "/sɔːrd/" },
      { word: "answer", silentLetter: "w", silentIndex: 3, transcription: "/ˈænsər/" },
      { word: "two", silentLetter: "w", silentIndex: 1, transcription: "/tuː/" },
      { word: "whole", silentLetter: "w", silentIndex: 0, transcription: "/hoʊl/" },
      { word: "who", silentLetter: "w", silentIndex: 0, transcription: "/huː/" },
    ],
  },
  {
    id: "level-6",
    name: "Level 6",
    words: [
      { word: "whose", silentLetter: "w", silentIndex: 0, transcription: "/huːz/" },
      { word: "whom", silentLetter: "w", silentIndex: 0, transcription: "/huːm/" },
      { word: "sign", silentLetter: "g", silentIndex: 2, transcription: "/saɪn/" },
      { word: "design", silentLetter: "g", silentIndex: 4, transcription: "/dɪˈzaɪn/" },
      { word: "align", silentLetter: "g", silentIndex: 3, transcription: "/əˈlaɪn/" },
      { word: "gnome", silentLetter: "g", silentIndex: 0, transcription: "/noʊm/" },
      { word: "gnarl", silentLetter: "g", silentIndex: 0, transcription: "/nɑːrl/" },
      { word: "gnat", silentLetter: "g", silentIndex: 0, transcription: "/næt/" },
      { word: "foreign", silentLetter: "g", silentIndex: 5, transcription: "/ˈfɒrən/" },
      { word: "reign", silentLetter: "g", silentIndex: 3, transcription: "/reɪn/" },
    ],
  },
  {
    id: "level-7",
    name: "Level 7",
    words: [
      { word: "muscle", silentLetter: "c", silentIndex: 3, transcription: "/ˈmʌsəl/" },
      { word: "scissors", silentLetter: "c", silentIndex: 1, transcription: "/ˈsɪzərz/" },
      { word: "yacht", silentLetter: "c", silentIndex: 2, transcription: "/jɒt/" },
      { word: "psychology", silentLetter: "p", silentIndex: 0, transcription: "/saɪˈkɒlədʒi/" },
      { word: "pneumonia", silentLetter: "p", silentIndex: 0, transcription: "/njuːˈmoʊniə/" },
      { word: "pterodactyl", silentLetter: "p", silentIndex: 0, transcription: "/ˌtɛrəˈdæktɪl/" },
      { word: "fetch", silentLetter: "t", silentIndex: 2, transcription: "/fetʃ/" },
      { word: "match", silentLetter: "t", silentIndex: 2, transcription: "/mætʃ/" },
      { word: "watch", silentLetter: "t", silentIndex: 2, transcription: "/wɒtʃ/" },
      { word: "witch", silentLetter: "t", silentIndex: 2, transcription: "/wɪtʃ/" },
    ],
  },
  {
    id: "level-8",
    name: "Level 8",
    words: [
      { word: "catch", silentLetter: "t", silentIndex: 2, transcription: "/kætʃ/" },
      { word: "wrinkle", silentLetter: "w", silentIndex: 0, transcription: "/ˈrɪŋkəl/" },
      { word: "folklore", silentLetter: "l", silentIndex: 2, transcription: "/ˈfoʊklɔːr/" },
      { word: "half", silentLetter: "l", silentIndex: 2, transcription: "/hæf/" },
      { word: "calf", silentLetter: "l", silentIndex: 2, transcription: "/kæf/" },
      { word: "talk", silentLetter: "l", silentIndex: 2, transcription: "/tɔːk/" },
      { word: "walk", silentLetter: "l", silentIndex: 2, transcription: "/wɔːk/" },
      { word: "chalk", silentLetter: "l", silentIndex: 3, transcription: "/tʃɔːk/" },
      { word: "stalk", silentLetter: "l", silentIndex: 3, transcription: "/stɔːk/" },
      { word: "yolk", silentLetter: "l", silentIndex: 2, transcription: "/joʊk/" },
    ],
  },
  {
    id: "level-9",
    name: "Level 9",
    words: [
      { word: "folk", silentLetter: "l", silentIndex: 2, transcription: "/foʊk/" },
      { word: "knob", silentLetter: "k", silentIndex: 0, transcription: "/nɒb/" },
      { word: "kneel", silentLetter: "k", silentIndex: 0, transcription: "/niːl/" },
      { word: "knit", silentLetter: "k", silentIndex: 0, transcription: "/nɪt/" },
      { word: "knack", silentLetter: "k", silentIndex: 0, transcription: "/næk/" },
      { word: "wrestle", silentLetter: "w", silentIndex: 0, transcription: "/ˈrɛsəl/" },
      { word: "wrath", silentLetter: "w", silentIndex: 0, transcription: "/ræθ/" },
      { word: "wrought", silentLetter: "w", silentIndex: 0, transcription: "/rɔːt/" },
      { word: "rhyme", silentLetter: "h", silentIndex: 1, transcription: "/raɪm/" },
      { word: "rhythm", silentLetter: "h", silentIndex: 1, transcription: "/ˈrɪðəm/" },
    ],
  },
  {
    id: "level-10",
    name: "Level 10",
    words: [
      { word: "rhinoceros", silentLetter: "h", silentIndex: 1, transcription: "/raɪˈnɒsərəs/" },
      { word: "exhaust", silentLetter: "h", silentIndex: 2, transcription: "/ɪɡˈzɔːst/" },
      { word: "exhibit", silentLetter: "h", silentIndex: 2, transcription: "/ɪɡˈzɪbɪt/" },
      { word: "vehicle", silentLetter: "h", silentIndex: 2, transcription: "/ˈviːɪkəl/" },
      { word: "mortgage", silentLetter: "t", silentIndex: 3, transcription: "/ˈmɔːrɡɪdʒ/" },
      { word: "Wednesday", silentLetter: "d", silentIndex: 2, transcription: "/ˈwɛnzdeɪ/" },
      { word: "raspberry", silentLetter: "p", silentIndex: 3, transcription: "/ˈræzbəri/" },
      { word: "cupboard", silentLetter: "p", silentIndex: 2, transcription: "/ˈkʌbərd/" },
      { word: "iron", silentLetter: "r", silentIndex: 1, transcription: "/ˈaɪərn/" },
      { word: "colonel", silentLetter: "l", silentIndex: 2, transcription: "/ˈkɜːrnəl/" },
    ],
  },
];
