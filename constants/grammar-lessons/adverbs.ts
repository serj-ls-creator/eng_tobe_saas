import type { GrammarLesson } from "./types";

export const ADVERB_LESSONS: Record<string, GrammarLesson> = {
  "adverb-basics": {
    intro: "Adverbs add information about actions, descriptions and other adverbs. They can tell us how, when, where or how often something happens.",
    blocks: [
      { type: "text", title: "What an adverb describes", body: "An adverb can modify a verb, an adjective or another adverb. Many adverbs are formed with -ly, but some common adverbs have other forms.", examples: [
        { text: "She speaks clearly.", highlight: "clearly", note: "describes how she speaks" },
        { text: "The water is very cold.", highlight: "very", note: "changes the strength of cold" },
        { text: "He runs really quickly.", highlight: "really", note: "modifies the adverb quickly" },
      ] },
      { type: "table", title: "Common jobs of adverbs", headings: ["Meaning", "Question", "Example"], rows: [
        ["Manner", "How?", "They worked carefully."], ["Frequency", "How often?", "I usually walk to school."], ["Time", "When?", "We arrived yesterday."], ["Place", "Where?", "Please wait outside."], ["Degree", "How much?", "The bag is quite heavy."],
      ] },
      { type: "text", title: "Making adverbs with -ly", body: "Many adverbs come from adjectives. Add -ly to most adjectives. If an adjective ends in consonant + y, change y to i and add -ly. Some adjectives ending in -le drop the e. The spelling changes do not apply to every word, so learn common forms.", examples: [
        { text: "quick → quickly; careful → carefully" }, { text: "easy → easily; happy → happily" }, { text: "possible → possibly" },
      ] },
      { type: "table", title: "Adverbs with special forms", headings: ["Adjective", "Adverb", "Example"], rows: [
        ["good", "well", "She sings well."], ["fast", "fast", "The train travels fast."], ["hard", "hard", "They studied hard."], ["late", "late", "I arrived late."], ["early", "early", "We got up early."],
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She speaks English good.", correct: "She speaks English well.", explanation: "Use the adverb well to describe the verb speaks." },
        { incorrect: "He drives very careful.", correct: "He drives very carefully.", explanation: "Carefully describes the action drives." },
        { incorrect: "I work hardly every day. (meaning: a lot)", correct: "I work hard every day.", explanation: "Hard means with effort. Hardly means almost not." },
      ] },
      { type: "tip", title: "Remember", body: "Do not add -ly automatically. Fast, hard, late and early can be adverbs without -ly. Some -ly words, such as friendly, are adjectives." },
    ],
    review: ["Adverbs can describe verbs, adjectives and other adverbs.", "Many, but not all, adverbs end in -ly.", "Use well after an action verb; good usually describes a noun or follows a linking verb."],
  },
  "adverbs-of-manner": {
    intro: "Adverbs of manner explain how someone does something. They often come after the verb or after the verb's object.",
    blocks: [
      { type: "text", title: "Form and position", body: "Most adverbs of manner are made by adding -ly to an adjective. Put the adverb after an intransitive verb, or after the object when the verb has one. Do not usually put it between a verb and its object.", examples: [
        { text: "The baby slept peacefully.", highlight: "peacefully" }, { text: "Mia answered the question correctly.", highlight: "correctly" }, { text: "Mia answered correctly the question. (incorrect)", highlight: "correctly" },
      ] },
      { type: "table", title: "Spelling patterns", headings: ["Adjective", "Adverb", "Example"], rows: [
        ["slow", "slowly", "Please speak slowly."], ["comfortable", "comfortably", "She sat comfortably."], ["easy", "easily", "He passed the test easily."], ["good", "well", "You played well."], ["fast", "fast", "The horse ran fast."],
      ] },
      { type: "text", title: "With a linking verb", body: "After linking verbs such as look, feel, smell, taste and sound, use an adjective when you describe the subject. These verbs connect the subject to a description; they do not show an action in this use.", examples: [
        { text: "The soup smells delicious.", highlight: "delicious" }, { text: "You look tired.", highlight: "tired" }, { text: "The musician played beautifully.", highlight: "beautifully", note: "played is an action here" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "He opened carefully the door.", correct: "He opened the door carefully.", explanation: "With an object, the manner adverb usually comes after the object." },
        { incorrect: "The flowers smell sweetly.", correct: "The flowers smell sweet.", explanation: "Smell links flowers to a description, so use an adjective." },
        { incorrect: "She did good in the test.", correct: "She did well in the test.", explanation: "Well describes how she did." },
      ] },
      { type: "tip", title: "Sentence focus", body: "You can place a manner adverb at the beginning for emphasis: Carefully, he opened the box. This is more marked than the usual position at the end." },
    ],
    review: ["Manner adverbs answer How?", "They usually follow the verb or its object.", "Use an adjective after a linking verb when it describes the subject."],
  },
  "adverbs-of-frequency": {
    intro: "Adverbs of frequency say how often something happens. Their position depends on the main verb and any auxiliary verbs.",
    blocks: [
      { type: "table", title: "A scale of frequency", headings: ["Adverb", "Approximate meaning", "Example"], rows: [
        ["always", "every time", "She always checks her work."], ["usually / normally", "most times", "We usually eat at home."], ["often / frequently", "many times", "He often visits us."], ["sometimes", "on some occasions", "I sometimes take the bus."], ["rarely / seldom", "not often", "They rarely watch TV."], ["never", "at no time", "Tom never drinks coffee."],
      ] },
      { type: "text", title: "Position with main verbs", body: "Put an adverb of frequency before most main verbs. With the verb be, put it after am, is, are, was or were. If there is an auxiliary or modal, put the adverb after the first helper verb.", examples: [
        { text: "I often read before bed." }, { text: "She is always polite." }, { text: "We have never seen snow." }, { text: "You can usually park here." },
      ] },
      { type: "text", title: "Questions and short answers", body: "In yes/no questions, the frequency adverb usually follows the subject. How often asks for frequency. Never is already negative, so do not add not to the same clause.", examples: [
        { text: "Do you usually cook dinner?" }, { text: "Is he often late?" }, { text: "How often do they travel? — They travel twice a year." },
      ] },
      { type: "text", title: "Expressions of frequency", body: "Phrases such as every day, once a week and from time to time usually go at the end of the sentence, or at the beginning for emphasis.", examples: [
        { text: "We have a meeting every Monday." }, { text: "Once a month, I call my grandparents." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She goes always by train.", correct: "She always goes by train.", explanation: "Put the adverb before the main verb goes." },
        { incorrect: "They never don't eat meat.", correct: "They never eat meat.", explanation: "Never has a negative meaning; do not add another negative." },
        { incorrect: "He often is tired.", correct: "He is often tired.", explanation: "With be, place the adverb after the verb." },
      ] },
      { type: "tip", title: "Sometimes", body: "Sometimes is flexible: Sometimes I walk to work. / I sometimes walk to work. / I walk to work sometimes." },
    ],
    review: ["Before a main verb: usually work. After be: am usually ready.", "After the first auxiliary: have often visited.", "Frequency phrases like every week usually go at the end."],
  },
  "adverbs-time-place": {
    intro: "Adverbs and adverbial phrases of time and place tell us when and where something happens.",
    blocks: [
      { type: "text", title: "Time: when?", body: "Time words include today, tomorrow, soon, already, yesterday and later. Many time expressions go at the end of a sentence. A time phrase can also come first when it sets the scene or receives emphasis.", examples: [
        { text: "I saw Daniel yesterday." }, { text: "We are leaving soon." }, { text: "Tomorrow, the shop opens at nine." },
      ] },
      { type: "text", title: "Place: where?", body: "Place words include here, there, outside, upstairs and nearby. They commonly come after the verb or its object. Do not put a place adverb between a verb and its object.", examples: [
        { text: "Please put your bag here." }, { text: "The children are playing outside." }, { text: "We visited nearby. (less natural) → We visited a nearby town." },
      ] },
      { type: "table", title: "Place and time together", headings: ["Usual order", "Example"], rows: [
        ["Place + time", "We met at the library yesterday."], ["Place + time", "She will stay in London next week."], ["Time first for context", "Yesterday, we met at the library."],
      ] },
      { type: "text", title: "Already, yet and still", body: "Already often appears before a main verb or after be / the first auxiliary. Yet usually comes at the end of questions and negatives. Still comes before a main verb but after be or the first auxiliary.", examples: [
        { text: "I have already finished." }, { text: "Have you finished yet?" }, { text: "She still lives here." }, { text: "They are still waiting." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I put carefully the glass there.", correct: "I put the glass there carefully.", explanation: "Keep the object after the verb; place details usually follow it." },
        { incorrect: "We went yesterday to the park.", correct: "We went to the park yesterday.", explanation: "The usual order is place before time." },
        { incorrect: "Have you yet finished?", correct: "Have you finished yet?", explanation: "Yet normally goes at the end in questions and negatives." },
      ] },
      { type: "tip", title: "Natural order", body: "When a sentence has manner, place and time information, a common order is manner + place + time: She walked slowly to the station this morning." },
    ],
    review: ["Time answers When?; place answers Where?", "Place usually comes before time at the end of a sentence.", "Yet commonly goes at the end of questions and negative sentences."],
  },
  "adverbs-of-degree": {
    intro: "Adverbs of degree show how strong, complete or limited something is. Choose one that fits the word it modifies.",
    blocks: [
      { type: "table", title: "Degree words", headings: ["Adverb", "Typical use", "Example"], rows: [
        ["very / really", "strong degree", "The test was very difficult."], ["quite / fairly", "medium degree", "The room is quite warm."], ["a little / slightly", "small degree", "I am a little tired."], ["extremely", "very strong degree", "It is extremely cold."], ["too", "more than is wanted or safe", "This coffee is too hot to drink."], ["enough", "the needed amount", "The box is light enough to carry."],
      ] },
      { type: "text", title: "Position", body: "Put a degree adverb before an adjective or another adverb: very tall, quite slowly. Enough is different: it comes after an adjective or adverb, but before a noun. Too also comes before an adjective or adverb.", examples: [
        { text: "The train is surprisingly fast." }, { text: "You speak clearly enough." }, { text: "We have enough time." }, { text: "There are too many people." },
      ] },
      { type: "text", title: "With verbs", body: "Some degree adverbs can modify verbs. Very usually modifies an adjective or adverb, not a verb by itself. Use very much or really with verbs such as like, enjoy and want.", examples: [
        { text: "I really like this song." }, { text: "She likes her new job very much." }, { text: "I very like this song. (incorrect)" },
      ] },
      { type: "text", title: "Choose a suitable combination", body: "Some degree words do not normally go with extreme adjectives. For example, use absolutely with perfect or impossible, and very with cold or interesting. In everyday English, really can be used with many kinds of adjectives.", examples: [
        { text: "The view is absolutely beautiful." }, { text: "The room is very cold." }, { text: "That answer is completely wrong." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "The tea is enough hot.", correct: "The tea is hot enough.", explanation: "Enough follows an adjective." },
        { incorrect: "We have time enough to finish. (usual A2 order)", correct: "We have enough time to finish.", explanation: "Enough comes before a noun." },
        { incorrect: "The bag is too heavy for carry.", correct: "The bag is too heavy to carry.", explanation: "Use too + adjective + to + base verb." },
      ] },
      { type: "tip", title: "Too or very?", body: "Very means a high degree. Too means more than is wanted or possible, and often explains a problem: too tired to study." },
    ],
    review: ["Most degree adverbs come before the word they modify.", "Enough comes after adjectives, but before nouns.", "Too often describes an excessive amount or degree."],
  },
  "adverb-position": {
    intro: "Adverb position depends on the kind of information it gives. The usual patterns help a sentence sound clear and natural.",
    blocks: [
      { type: "table", title: "Usual positions", headings: ["Type", "Typical position", "Example"], rows: [
        ["Manner", "after verb/object", "She closed the door quietly."], ["Place", "after verb/object", "We waited outside."], ["Time", "often at the end", "I called him yesterday."], ["Frequency", "before main verb", "They often travel."], ["Degree", "before adjective/adverb", "It is very useful."],
      ] },
      { type: "text", title: "Adverbs with auxiliaries", body: "Put frequency adverbs and many other mid-position adverbs after be or the first auxiliary, but before the main verb. In a negative sentence, they usually come after not when not belongs with the auxiliary.", examples: [
        { text: "She is always cheerful." }, { text: "We have never been there." }, { text: "He does not usually eat breakfast." }, { text: "I can easily help you." },
      ] },
      { type: "text", title: "Beginning and end positions", body: "Time and place information can move to the beginning to give context. Manner adverbs may begin a sentence for emphasis. Avoid separating a verb from its object with an adverb.", examples: [
        { text: "After lunch, we went for a walk." }, { text: "Outside, the children were waiting." }, { text: "She explained clearly the problem. (less natural) → She explained the problem clearly." },
      ] },
      { type: "text", title: "Adverbs that change position", body: "Some adverbs can move, but the focus may change. Only usually goes immediately before the part it limits: Only Mia called (no one else called); Mia only called (she did not visit).", examples: [
        { text: "I only wanted a cup of tea.", note: "only limits wanted" }, { text: "Only I knew the answer.", note: "only limits I" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She speaks fluently English.", correct: "She speaks English fluently.", explanation: "Do not place a manner adverb between a verb and its object." },
        { incorrect: "I go every day to class.", correct: "I go to class every day.", explanation: "Time expressions usually go at the end, after the place." },
        { incorrect: "He always is busy.", correct: "He is always busy.", explanation: "Put the adverb after be." },
      ] },
      { type: "tip", title: "Build the sentence", body: "Start with subject + verb (+ object), then add the adverb in its usual position. Move it only when you want a different emphasis." },
    ],
    review: ["Frequency words usually go before a main verb and after be / the first auxiliary.", "Manner and place usually follow the object.", "Time often goes at the end or beginning for context."],
  },
  "comparative-superlative-adverbs": {
    intro: "Comparative adverbs compare how two actions happen. Superlative adverbs show which action in a group happens to the greatest or least degree.",
    blocks: [
      { type: "table", title: "How to form comparisons", headings: ["Adverb", "Comparative", "Superlative"], rows: [
        ["fast", "faster", "(the) fastest"], ["hard", "harder", "(the) hardest"], ["early", "earlier", "(the) earliest"], ["carefully", "more carefully", "(the) most carefully"], ["slowly", "more slowly", "(the) most slowly"], ["well", "better", "(the) best"], ["badly", "worse", "(the) worst"],
      ] },
      { type: "text", title: "Comparing two actions", body: "Use the comparative form, often with than, to compare two actions. Short adverbs such as fast and hard take -er. Adverbs ending in -ly usually use more. A few forms are irregular.", examples: [
        { text: "A car usually travels faster than a bicycle." }, { text: "Please speak more slowly." }, { text: "Lena sings better than I do." },
      ] },
      { type: "text", title: "Comparing with a group", body: "Use the + superlative adverb to compare an action with a whole group. The is common before a superlative, especially when it is followed by of or in.", examples: [
        { text: "Of all the runners, Sam ran the fastest." }, { text: "She answered the most confidently in the class." }, { text: "Who arrived earliest?" },
      ] },
      { type: "text", title: "As ... as", body: "Use as + adverb + as to say two actions are equal. Use not as/so + adverb + as to say they are not equal.", examples: [
        { text: "Kai can run as quickly as his brother." }, { text: "I cannot type as fast as you." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She drives more careful than me.", correct: "She drives more carefully than me.", explanation: "Use the adverb carefully to describe drives." },
        { incorrect: "He speaks the most loudly than I do.", correct: "He speaks more loudly than I do.", explanation: "Use a comparative, not a superlative, to compare two people." },
        { incorrect: "I work gooder now.", correct: "I work better now.", explanation: "The comparative of well is better." },
      ] },
      { type: "tip", title: "Adjective or adverb?", body: "Compare an adjective with an adverb: a faster car (adjective) but drive faster (adverb). The form fast is the same in both roles." },
    ],
    review: ["Short adverbs often take -er/-est; -ly adverbs use more/most.", "Use than for a comparison between two actions.", "Remember irregular forms: well–better–best and badly–worse–worst."],
  },
  "adjectives-vs-adverbs": {
    intro: "Adjectives describe nouns and pronouns. Adverbs often describe verbs, adjectives or other adverbs. Choose the form by asking what word you are describing.",
    blocks: [
      { type: "table", title: "Compare the job", headings: ["What is described?", "Use", "Example"], rows: [
        ["A noun", "Adjective", "She is a careful driver."], ["An action verb", "Adverb", "She drives carefully."], ["A linking verb + subject", "Adjective", "The food tastes good."], ["An adjective", "Adverb", "The food is really good."], ["An adverb", "Adverb", "He walks very slowly."],
      ] },
      { type: "text", title: "After linking verbs", body: "After be and linking verbs such as seem, look, feel, sound, taste and smell, an adjective describes the subject. If the same verb shows a real action, an adverb may be needed instead.", examples: [
        { text: "You look happy.", highlight: "happy" }, { text: "She looked carefully at the map.", highlight: "carefully", note: "looked means directed her eyes" }, { text: "The soup tastes delicious." },
      ] },
      { type: "text", title: "Forms that look similar", body: "Some words have the same adjective and adverb form: fast, hard, early and late. Good is an adjective; well is usually its adverb. Be careful: hardly means almost not, and lately means recently.", examples: [
        { text: "It is a fast train. / The train goes fast." }, { text: "He is a good singer. / He sings well." }, { text: "We arrived late. / I have not seen her lately." },
      ] },
      { type: "text", title: "-ly adjectives", body: "Not every word ending in -ly is an adverb. Friendly, lovely, lonely and lively are adjectives. To express manner, use a phrase such as in a friendly way.", examples: [
        { text: "They are friendly people." }, { text: "They welcomed us in a friendly way." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "He is a carefully driver.", correct: "He is a careful driver.", explanation: "Careful describes the noun driver." },
        { incorrect: "The children behaved bad.", correct: "The children behaved badly.", explanation: "Badly describes the action behaved." },
        { incorrect: "I feel happily today.", correct: "I feel happy today.", explanation: "Feel is a linking verb here, so use an adjective." },
      ] },
      { type: "tip", title: "Ask the right question", body: "Ask ‘What kind of person/thing?’ for an adjective. Ask ‘How does the action happen?’ for an adverb." },
    ],
    review: ["Adjectives describe nouns; adverbs often describe actions and modifiers.", "Use adjectives after linking verbs when they describe the subject.", "Good is an adjective; well is usually an adverb. Fast and hard can be both."],
  },
};
