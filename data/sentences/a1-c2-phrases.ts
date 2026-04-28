export interface Phrase {
  id: string;
  title: string;
  levels: {
    A1: string;
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };
}

export const A1_C2_PHRASES: Phrase[] = [
  {
    id: 'i-dont-understand',
    title: "I don't understand",
    levels: {
      'A1': "I don't understand",
      'A2': "I don't get it",
      'B1': "Could you explain?",
      'B2': "I'm not following",
      'C1': "I'm having trouble grasping that",
      'C2': "I'm unable to comprehend that"
    }
  },
  {
    id: 'yes',
    title: "Yes",
    levels: {
      'A1': "Yes",
      'A2': "Sure",
      'B1': "Absolutely",
      'B2': "Certainly",
      'C1': "Definitely",
      'C2': "Unquestionably"
    }
  },
  {
    id: 'im-very-busy',
    title: "I'm very busy",
    levels: {
      'A1': "I'm very busy",
      'A2': "I have a lot of work",
      'B1': "I'm quite busy",
      'B2': "I'm tied up",
      'C1': "I'm swamped",
      'C2': "I'm slammed"
    }
  },
  {
    id: 'i-think',
    title: "I think",
    levels: {
      'A1': "I think",
      'A2': "I guess",
      'B1': "In my opinion",
      'B2': "My take is",
      'C1': "I'd argue that",
      'C2': "The way I see it"
    }
  },
  {
    id: 'its-good',
    title: "It's good",
    levels: {
      'A1': "It's good",
      'A2': "It's really good",
      'B1': "It's great",
      'B2': "It's fantastic",
      'C1': "It's solid",
      'C2': "It slaps!"
    }
  },
  {
    id: 'its-easy',
    title: "It's easy",
    levels: {
      'A1': "It's easy",
      'A2': "It's really easy",
      'B1': "It's simple",
      'B2': "It's a piece of cake",
      'C1': "It's a no-brainer",
      'C2': "Easy peasy!"
    }
  },
  {
    id: 'im-angry',
    title: "I'm angry",
    levels: {
      'A1': "I'm angry",
      'A2': "I'm really angry",
      'B1': "I'm furious",
      'B2': "I'm fuming",
      'C1': "I'm losing it",
      'C2': "I'm about to flip!"
    }
  },
  {
    id: 'im-tired',
    title: "I'm tired",
    levels: {
      'A1': "I'm tired.",
      'A2': "I'm very tired.",
      'B1': "I'm exhausted.",
      'B2': "I'm beat.",
      'C1': "I'm totally drained.",
      'C2': "I'm running on fumes."
    }
  },
  {
    id: 'im-hungry',
    title: "I'm hungry",
    levels: {
      'A1': "I'm hungry.",
      'A2': "I need food.",
      'B1': "I'm starving.",
      'B2': "I'm absolutely famished.",
      'C1': "My stomach's yelling.",
      'C2': "I could eat a horse!"
    }
  },
  {
    id: 'i-like-it',
    title: "I like it",
    levels: {
      'A1': "I like it.",
      'A2': "I really like it.",
      'B1': "I'm a fan of it.",
      'B2': "I'm quite fond of it.",
      'C1': "I'm kinda obsessed with it!",
      'C2': "It's my jam!"
    }
  },
  {
    id: 'its-expensive',
    title: "It's expensive!",
    levels: {
      'A1': "It's expensive!",
      'A2': "It costs a lot!",
      'B1': "It's pricey.",
      'B2': "It's quite costly.",
      'C1': "It costs a fortune.",
      'C2': "My wallet just cried!"
    }
  },
  {
    id: 'lets-go',
    title: "Let's Go",
    levels: {
      'A1': "Let's go",
      'A2': "Let's get going",
      'B1': "Let's hit the road",
      'B2': "Let's make a move",
      'C1': "Shall we bounce?",
      'C2': "Let's skedaddle!"
    }
  },
  {
    id: 'its-funny',
    title: "It's funny",
    levels: {
      'A1': "It's funny.",
      'A2': "It's really funny.",
      'B1': "It's hilarious.",
      'B2': "I completely lost it.",
      'C1': "I was dying of laughter.",
      'C2': "I was rolling on the floor laughing!"
    }
  },
  {
    id: 'im-sick',
    title: "I'm sick",
    levels: {
      'A1': "I'm sick",
      'A2': "I'm not feeling well",
      'B1': "I'm under the weather",
      'B2': "I'm feeling rough today",
      'C1': "I'm feeling absolutely dreadful",
      'C2': "I'm feeling completely out of sorts"
    }
  },
  {
    id: 'im-late',
    title: "I'm late",
    levels: {
      'A1': "I'm late",
      'A2': "I'm running late",
      'B1': "I'm a bit behind schedule",
      'B2': "I'm delayed",
      'C1': "I lost track of time",
      'C2': "Time flies when you're procrastinating!"
    }
  },
  {
    id: 'i-like-coffee',
    title: "I like coffee",
    levels: {
      'A1': "I like coffee",
      'A2': "I'm fond of coffee",
      'B1': "I need my coffee fix",
      'B2': "I run on coffee",
      'C1': "Coffee is my fuel",
      'C2': "Espresso yourself!"
    }
  },
  {
    id: 'i-need-help',
    title: "I need help",
    levels: {
      'A1': "I need help.",
      'A2': "Can you help me?",
      'B1': "I could use a hand.",
      'B2': "I could use some assistance.",
      'C1': "Would you mind lending me a hand?",
      'C2': "I'd greatly appreciate your support in this matter."
    }
  },
  {
    id: 'im-busy',
    title: "I'm busy",
    levels: {
      'A1': "I'm busy",
      'A2': "I have a lot to do",
      'B1': "I'm swamped",
      'B2': "I'm drowning in work",
      'C1': "I'm up to my neck in tasks",
      'C2': "My schedule is packed to the brim"
    }
  },
  {
    id: 'i-understand',
    title: "I understand",
    levels: {
      'A1': "I understand",
      'A2': "I get it",
      'B1': "I see",
      'B2': "Makes sense",
      'C1': "I follow you",
      'C2': "That resonates with me"
    }
  },
  {
    id: 'thank-you',
    title: "Thank you",
    levels: {
      'A1': "Thank you",
      'A2': "Thanks a lot!",
      'B1': "I appreciate it",
      'B2': "I'm truly grateful",
      'C1': "You're a lifesaver!",
      'C2': "I can't thank you enough!"
    }
  },
  {
    id: 'im-sorry',
    title: "I'm sorry",
    levels: {
      'A1': "I'm sorry",
      'A2': "Sorry about that",
      'B1': "My apologies",
      'B2': "I deeply regret it",
      'C1': "Please accept my sincerest apologies",
      'C2': "I take full responsibility"
    }
  },
  {
    id: 'i-dont-know',
    title: "I don't know",
    levels: {
      'A1': "I don't know",
      'A2': "I'm not sure",
      'B1': "I have no idea",
      'B2': "I can't say for sure",
      'C1': "Beats me",
      'C2': "No clue"
    }
  },
  {
    id: 'how-are-you',
    title: "How are you?",
    levels: {
      'A1': "How are you?",
      'A2': "How are you doing?",
      'B1': "How's it going?",
      'B2': "How have you been?",
      'C1': "What's up?",
      'C2': "Sup?"
    }
  }
];
