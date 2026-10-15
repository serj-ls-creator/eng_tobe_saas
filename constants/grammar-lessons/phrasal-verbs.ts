import type { GrammarLesson } from "./types";

export const PHRASAL_VERB_LESSONS: Record<string, GrammarLesson> = {
  "phrasal-verb-basics": {
    intro: "A phrasal verb combines a verb with a short word such as up, out, off or on. Together, the words can have a special meaning that is different from the verb alone.",
    blocks: [
      { type: "text", title: "Verb + particle", body: "A phrasal verb has a main verb and one or more particles. The particle is often an adverb, but it can look like a preposition. Learn the whole combination and its meaning as one vocabulary item.", examples: [
        { text: "Please turn off the light. (stop the light)" }, { text: "We ran out of milk. (had no milk left)" }, { text: "I get up at seven. (leave my bed)" },
      ] },
      { type: "table", title: "Phrasal verbs in context", headings: ["Phrasal verb", "Meaning", "Example"], rows: [
        ["look for", "try to find", "I am looking for my keys."], ["pick up", "collect / lift", "Can you pick up the parcel?"], ["give up", "stop trying or doing something", "He gave up smoking."], ["put on", "dress yourself in something", "Put on your coat."],
      ] },
      { type: "text", title: "Literal and less literal meanings", body: "Some phrasal verbs have a meaning you can guess from the parts, such as sit down. Others have a less predictable meaning, such as give up. Context helps you understand which meaning is intended.", examples: [
        { text: "She sat down by the window. (literal movement)" }, { text: "They set up a small business. (established it)" }, { text: "He made up a story. (invented it)" },
      ] },
      { type: "text", title: "Use the right tense", body: "Change the main verb to show tense; the particle stays the same. In a continuous form, the particle remains with the phrasal verb. Some particles combine with a preposition to make a three-word verb.", examples: [
        { text: "I usually wake up early." }, { text: "She woke up late yesterday." }, { text: "We are looking after the dog this weekend." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I am looking my keys for.", correct: "I am looking for my keys.", explanation: "Look for is inseparable; keep for after the verb." },
        { incorrect: "She gave up to smoke.", correct: "She gave up smoking.", explanation: "Give up is followed by a noun or gerund, not a to-infinitive." },
        { incorrect: "He look after his sister yesterday.", correct: "He looked after his sister yesterday.", explanation: "Change the verb for the past tense; keep the particle/preposition." },
      ] },
      { type: "tip", title: "Learn a full example", body: "Record a phrasal verb with its meaning, object pattern and a sentence: pick up + object — collect — I picked up my friend at the station." },
    ],
    review: ["A phrasal verb combines a verb and one or more particles.", "The combined meaning may be literal or idiomatic; learn it in context.", "Change the verb for tense; the particle usually stays the same."],
  },
  "separable-inseparable": {
    intro: "Some transitive phrasal verbs allow the object between the verb and particle. Others must stay together. Learn which pattern each verb uses.",
    blocks: [
      { type: "table", title: "Two object patterns", headings: ["Type", "Pattern", "Example"], rows: [
        ["Separable", "verb + object + particle", "Turn the radio off."], ["Separable", "verb + particle + object", "Turn off the radio."], ["Inseparable", "verb + particle + object", "Look after the baby."],
      ] },
      { type: "text", title: "Separable phrasal verbs", body: "With a separable phrasal verb, a noun object can usually go before or after the particle. Common examples include turn off, put on, pick up, take off and write down.", examples: [
        { text: "Please switch the computer off." }, { text: "Please switch off the computer." }, { text: "She wrote the address down." },
      ] },
      { type: "text", title: "Inseparable phrasal verbs", body: "With an inseparable phrasal verb, keep the particle or preposition after the verb and put the object after it. Common examples include look for, look after, get over and run into.", examples: [
        { text: "We are looking for a new flat." }, { text: "I ran into my old teacher." }, { text: "He got over the flu quickly." },
      ] },
      { type: "text", title: "Three-word verbs", body: "In three-word phrasal verbs, keep the verb, particle and preposition together. The object follows the complete phrase: look forward to something, put up with something.", examples: [
        { text: "I look forward to the weekend." }, { text: "She put up with the noise." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I turned off it.", correct: "I turned it off.", explanation: "A pronoun object must go between the parts of a separable phrasal verb." },
        { incorrect: "She looked her little brother after.", correct: "She looked after her little brother.", explanation: "Look after is inseparable; its object follows after." },
        { incorrect: "We ran the problem into.", correct: "We ran into the problem.", explanation: "Run into is inseparable." },
      ] },
      { type: "tip", title: "Check a dictionary", body: "There is no reliable spelling clue that tells you if a phrasal verb is separable. Learn the pattern with the verb: turn something off; look after someone." },
    ],
    review: ["A separable verb allows a noun object before or after the particle.", "An inseparable verb keeps the object after the complete phrasal verb.", "Three-word verbs stay together; pronouns go between the parts only in separable verbs."],
  },
  "transitive-intransitive": {
    intro: "A transitive phrasal verb has an object. An intransitive phrasal verb does not. Some phrasal verbs can be used both ways, sometimes with a change in meaning.",
    blocks: [
      { type: "table", title: "With and without an object", headings: ["Type", "Pattern", "Example"], rows: [
        ["Transitive", "verb + particle + object (or split if separable)", "She turned on the lamp."], ["Intransitive", "verb + particle", "The plane took off."], ["Both", "meaning depends on object", "He woke up. / I woke him up."],
      ] },
      { type: "text", title: "Transitive phrasal verbs", body: "The object answers ‘what?’ or ‘who?’ after the phrasal verb. It may be a noun or, depending on separability, a pronoun.", examples: [
        { text: "Please fill in this form. (fill in what? this form)" }, { text: "They called off the match. (called off what? the match)" }, { text: "I looked after the children. (looked after whom? the children)" },
      ] },
      { type: "text", title: "Intransitive phrasal verbs", body: "An intransitive phrasal verb has no direct object. Do not add an object just because a similar verb normally takes one. You can still add time, place or manner information.", examples: [
        { text: "The guests arrived and sat down." }, { text: "Our car broke down on the way home." }, { text: "The price went up last month." },
      ] },
      { type: "text", title: "One verb, two patterns", body: "Some phrasal verbs can be transitive or intransitive. The object may appear when someone causes an action and disappear when the action happens by itself. The meaning can also change, so use context.", examples: [
        { text: "The alarm went off at six. (it started ringing)" }, { text: "She turned off the alarm. (she stopped it)" }, { text: "The children grew up quickly. / She brought up the children." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "The plane took off the airport.", correct: "The plane took off from the airport.", explanation: "Take off is intransitive in this meaning; add a preposition for the place." },
        { incorrect: "Please fill in.", correct: "Please fill in the form. (when you mean complete a form)", explanation: "Fill in is transitive in this meaning and needs an object." },
        { incorrect: "The meeting called off because of snow.", correct: "The meeting was called off because of snow. / They called off the meeting.", explanation: "Call off is transitive; use an object or a passive form." },
      ] },
      { type: "tip", title: "Ask ‘what?’ or ‘who?’", body: "After the phrasal verb, ask ‘what?’ or ‘who?’ If the sentence answers the question with an object, the verb is transitive in that use." },
    ],
    review: ["Transitive phrasal verbs take an object; intransitive ones do not.", "Some phrasal verbs can be used both ways, and their meanings may differ.", "Learn the object pattern together with each meaning."],
  },
  "three-word-phrasal-verbs": {
    intro: "A three-word phrasal verb has a verb, a particle and a preposition, as in get on with. Keep the three words together and place the object after the phrase.",
    blocks: [
      { type: "table", title: "Useful three-word verbs", headings: ["Phrasal verb", "Meaning", "Example"], rows: [
        ["get on with", "have a good relationship", "I get on with my neighbours."], ["look forward to", "feel happy about a future event", "We look forward to the holidays."], ["put up with", "accept something unpleasant", "She puts up with the noise."], ["run out of", "have none left", "We ran out of milk."], ["look up to", "admire", "He looks up to his coach."], ["come up with", "think of an idea", "They came up with a solution."],
      ] },
      { type: "text", title: "Keep the phrase together", body: "Treat the three-word verb as one unit. Put its object after the final preposition. Unlike many two-part separable verbs, a three-word phrasal verb is not split by a noun or pronoun object.", examples: [
        { text: "I get on with them." }, { text: "She came up with a great idea." }, { text: "We are looking forward to it." },
      ] },
      { type: "text", title: "To can be a preposition", body: "In look forward to, to is a preposition, not an infinitive marker. Follow it with a noun, pronoun or gerund. Compare it with want to, where to begins an infinitive.", examples: [
        { text: "I look forward to seeing you." }, { text: "I want to see you." }, { text: "She is looking forward to the concert." },
      ] },
      { type: "text", title: "Tense and questions", body: "Change the verb at the beginning of the phrase to show tense. In questions and negatives, use the sentence's auxiliary; keep all three words in their usual order.", examples: [
        { text: "He ran out of time." }, { text: "Have you come up with a name yet?" }, { text: "I don't get on with that colleague." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I look forward it to.", correct: "I look forward to it.", explanation: "Keep the three-word verb together and put the object after it." },
        { incorrect: "We ran milk out of.", correct: "We ran out of milk.", explanation: "The object follows the complete phrase run out of." },
        { incorrect: "She looks forward to meet you.", correct: "She looks forward to meeting you.", explanation: "To is a preposition in this expression, so use a gerund." },
      ] },
      { type: "tip", title: "Record all three words", body: "Write the full phrase with its pattern and an example: run out of + noun; look forward to + noun/-ing; come up with + idea." },
    ],
    review: ["Three-word phrasal verbs keep their verb + particle + preposition order.", "The object follows the whole phrase.", "In look forward to, to is a preposition and is followed by a noun or gerund."],
  },
  "multiple-meanings": {
    intro: "Many phrasal verbs have more than one meaning. The words around them, the object and the situation help you understand which meaning is intended.",
    blocks: [
      { type: "table", title: "One phrasal verb, several meanings", headings: ["Phrasal verb", "Meaning", "Example"], rows: [
        ["pick up", "collect someone or something", "I'll pick you up at six."], ["pick up", "lift from a surface", "Pick up that paper, please."], ["pick up", "learn informally", "She picked up some Italian while travelling."], ["take off", "leave the ground", "The plane took off on time."], ["take off", "remove clothing", "He took off his shoes."], ["take off", "become successful quickly", "Her business took off."],
      ] },
      { type: "text", title: "Use the context", body: "Look at the subject, object, place and surrounding words. They often make one meaning more likely. If the sentence is still unclear, ask a speaker or check a dictionary that gives phrasal-verb examples.", examples: [
        { text: "The taxi picked us up outside the hotel. (collected us)" }, { text: "Pick up the cup before it falls. (lift it)" }, { text: "He picked up the new words from his classmates. (learned them informally)" },
      ] },
      { type: "text", title: "Meaning can change with grammar", body: "The object pattern can help identify a meaning. Some uses take an object and others do not; some are separable and others are not. Learn each common meaning with its grammar pattern.", examples: [
        { text: "The plane took off. (no object)" }, { text: "She took her coat off. (object; removable clothing)" }, { text: "The company took off. (became successful)" },
      ] },
      { type: "text", title: "Keep a meaning map", body: "When you learn a new use, add a short definition and a sentence that makes the context clear. Avoid assuming that every use has the same translation as the first meaning you learned.", examples: [
        { text: "look up a word = search for information" }, { text: "look up to someone = admire them" }, { text: "Things are looking up = the situation is improving" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I looked up my sister at the station. (intended: collected her)", correct: "I picked up my sister at the station.", explanation: "Pick someone up means collect them; look someone up usually means search for or visit them." },
        { incorrect: "The plane took my shoes off. (intended: the plane left the ground)", correct: "The plane took off.", explanation: "Take off without an object means leave the ground; with an object it can mean remove something." },
        { incorrect: "I looked the meaning up it.", correct: "I looked the meaning up. / I looked it up.", explanation: "With separable look up, a pronoun object goes between the verb and particle." },
      ] },
      { type: "tip", title: "Learn meanings in sentences", body: "Make one short example for each meaning. A translation alone may not show the object pattern or the situation in which the phrasal verb is used." },
    ],
    review: ["Context helps you identify which meaning is intended.", "One phrasal verb can have different object patterns for different meanings.", "Learn each meaning with a clear example and its grammar."],
  },
  "pronouns-with-phrasal-verbs": {
    intro: "Object pronouns such as it, them and him have a fixed position with separable phrasal verbs. With inseparable and three-word verbs, the pronoun follows the complete phrase.",
    blocks: [
      { type: "table", title: "Pronoun placement", headings: ["Type", "Pattern", "Example"], rows: [
        ["Separable", "verb + pronoun + particle", "Turn it off."], ["Inseparable", "verb + particle + pronoun", "Look after them."], ["Three-word", "verb + particle + preposition + pronoun", "I get on with her."],
      ] },
      { type: "text", title: "Separable verbs", body: "When the object is a personal pronoun, it must go between the verb and particle in a separable phrasal verb. A noun object can often go in either position, but a pronoun cannot go at the end.", examples: [
        { text: "Turn the light off. / Turn off the light." }, { text: "Turn it off. (not: Turn off it.)" }, { text: "She picked them up." },
      ] },
      { type: "text", title: "Inseparable and three-word verbs", body: "Do not split an inseparable verb. Put the pronoun after its particle or after the full three-word expression.", examples: [
        { text: "I am looking for it." }, { text: "He looks after them." }, { text: "We are looking forward to it." },
      ] },
      { type: "text", title: "Long objects", body: "A long noun phrase usually sounds clearer after the particle in a separable verb. This is one reason noun objects can appear in both positions but pronouns have a fixed position.", examples: [
        { text: "She put on her new red coat." }, { text: "She put her new red coat on." }, { text: "She put it on." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Please switch off them.", correct: "Please switch them off.", explanation: "A pronoun goes between the parts of a separable phrasal verb." },
        { incorrect: "We ran it into at the store. (intended: met by chance)", correct: "We ran into it at the store. / We ran into our old friend at the store.", explanation: "Run into is inseparable; the object follows the full verb." },
        { incorrect: "I look forward to them seeing you. (intended: look forward to the event)", correct: "I look forward to seeing them. / I look forward to it.", explanation: "Put the object after the complete phrase, or after the gerund if it is the object of seeing." },
      ] },
      { type: "tip", title: "Use a short pronoun", body: "First identify whether the verb is separable. If it is, put it/them/him/her between verb and particle. If it is inseparable, keep it after the full phrase." },
    ],
    review: ["Separable + pronoun: turn it off.", "Inseparable: look after them.", "Three-word: get on with her; keep the phrase together."],
  },
  "questions-negatives": {
    intro: "Phrasal verbs form questions and negatives with the same auxiliary system as other verbs. Keep the verb and particle in their usual order, and place an object according to separability.",
    blocks: [
      { type: "text", title: "Present and past simple", body: "Use do/does/did to form questions and negatives when the phrasal verb is in the simple present or past and has no other auxiliary. After do/does/did, use the base verb.", examples: [
        { text: "Do you get up early?" }, { text: "She doesn't look after the dog on Fridays." }, { text: "Did they call off the meeting?" },
      ] },
      { type: "text", title: "Other tenses", body: "If the sentence already has an auxiliary, use it to make a question or negative. Keep the phrasal verb's particle after the main verb. For a separable verb with a pronoun object, keep the pronoun between the parts.", examples: [
        { text: "Are you looking for your keys?" }, { text: "He hasn't turned it on." }, { text: "Will the match be called off?" },
      ] },
      { type: "table", title: "Question and negative patterns", headings: ["Statement", "Question", "Negative"], rows: [
        ["They gave up.", "Did they give up?", "They didn't give up."], ["She looks after him.", "Does she look after him?", "She doesn't look after him."], ["We are running out of time.", "Are we running out of time?", "We aren't running out of time."],
      ] },
      { type: "text", title: "Question words", body: "Put a question word at the beginning, then follow the normal question order. When the question word is the subject, do not add do/does/did.", examples: [
        { text: "What time do you get up?" }, { text: "Who is she looking after?" }, { text: "Who called off the meeting? (who is the subject)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Did she called you back?", correct: "Did she call you back?", explanation: "Use the base form after did." },
        { incorrect: "He doesn't gets along with them.", correct: "He doesn't get along with them.", explanation: "Use the base verb after doesn't." },
        { incorrect: "Has she turned on it?", correct: "Has she turned it on?", explanation: "With separable turn on, put a pronoun between the verb and particle." },
      ] },
      { type: "tip", title: "Find the auxiliary", body: "Look for do/does/did, be, have or a modal. Move that helper to make a question, or add not after it for a negative. Do not move the particle to the front." },
    ],
    review: ["Use do/does/did with simple present/past when there is no auxiliary.", "Use the existing auxiliary for other tenses and modals.", "Keep the particle with the verb and place pronoun objects according to separability."],
  },
};
