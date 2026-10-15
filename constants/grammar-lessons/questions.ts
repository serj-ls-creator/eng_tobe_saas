import type { GrammarLesson } from "./types";

export const QUESTION_LESSONS: Record<string, GrammarLesson> = {
  "yes-no-questions": {
    intro: "Yes/no questions ask for confirmation or a short answer such as yes or no. Their word order depends on whether the sentence already has an auxiliary verb.",
    blocks: [
      { type: "table", title: "Question patterns", headings: ["Statement", "Question", "Pattern"], rows: [
        ["She is ready.", "Is she ready?", "be + subject"], ["They can swim.", "Can they swim?", "modal + subject + base verb"], ["He has finished.", "Has he finished?", "have + subject + participle"], ["You like coffee.", "Do you like coffee?", "do + subject + base verb"],
      ] },
      { type: "text", title: "Move the auxiliary", body: "If the sentence has be, have or a modal, move that auxiliary before the subject. Keep the main verb and the rest of the phrase after the subject.", examples: [
        { text: "They are working. → Are they working?" }, { text: "She has seen the film. → Has she seen the film?" }, { text: "He should call. → Should he call?" },
      ] },
      { type: "text", title: "Use do, does or did", body: "In the present or past simple, add do/does/did if there is no auxiliary. After the helper, use the base verb. Do agrees with I/you/we/they; does with he/she/it; did for all subjects in the past.", examples: [
        { text: "You work here. → Do you work here?" }, { text: "Mia lives nearby. → Does Mia live nearby?" }, { text: "They left early. → Did they leave early?" },
      ] },
      { type: "text", title: "Short answers", body: "Answer with the auxiliary from the question, not with the main verb. Use a pronoun in the short answer. The answer form matches the tense and subject.", examples: [
        { text: "Do you drive? — Yes, I do. / No, I don't." }, { text: "Is Ben at home? — Yes, he is." }, { text: "Can they come? — No, they can't." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "You are tired? (standard neutral question order)", correct: "Are you tired?", explanation: "Move be before the subject to form a neutral yes/no question." },
        { incorrect: "Does she likes tea?", correct: "Does she like tea?", explanation: "Use the base verb after does." },
        { incorrect: "Did they went home?", correct: "Did they go home?", explanation: "Use the base verb after did." },
      ] },
      { type: "tip", title: "Find the helper", body: "Look for be, have or a modal. If there is one, move it to the front. If not, add do/does/did and use the base form of the main verb." },
    ],
    review: ["Move an existing auxiliary before the subject.", "Use do/does/did in simple tenses when there is no auxiliary.", "Use the base verb after do/does/did and repeat the auxiliary in short answers."],
  },
  "wh-questions": {
    intro: "Wh- questions ask for information. The question word tells you what kind of answer you need: a person, place, time, reason, manner or choice.",
    blocks: [
      { type: "table", title: "Question words", headings: ["Word", "Asks about", "Example"], rows: [
        ["who", "person", "Who is your teacher?"], ["what", "thing or information", "What do you need?"], ["where", "place", "Where does she work?"], ["when", "time", "When did they arrive?"], ["why", "reason", "Why are you laughing?"], ["how", "way, condition or manner", "How do you feel?"], ["which", "choice from a known set", "Which colour do you prefer?"],
      ] },
      { type: "text", title: "Question word + auxiliary + subject", body: "When the question word is not the subject, put it first, then the auxiliary, then the subject and main verb. Add do/does/did in a simple tense when there is no other auxiliary.", examples: [
        { text: "Where are they staying?" }, { text: "What does this word mean?" }, { text: "Why did you leave early?" },
      ] },
      { type: "text", title: "How + expression", body: "How combines with adjectives and adverbs to ask about degree, quantity, age, distance, length or frequency. Keep the same auxiliary and subject order as other information questions.", examples: [
        { text: "How old is your sister?" }, { text: "How often do you exercise?" }, { text: "How many tickets did you buy?" }, { text: "How long have you lived here?" },
      ] },
      { type: "text", title: "Questions with prepositions", body: "In everyday English, a preposition often stays at the end of the question. In a formal style, it can come before whom or which.", examples: [
        { text: "Who did you go with? (everyday)" }, { text: "What are you looking for?" }, { text: "With whom did you travel? (formal)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Where you live?", correct: "Where do you live?", explanation: "Add do when there is no auxiliary in a present simple question." },
        { incorrect: "Why she is upset?", correct: "Why is she upset?", explanation: "Put the auxiliary before the subject." },
        { incorrect: "How many money do you need?", correct: "How much money do you need?", explanation: "Money is uncountable; use how much." },
      ] },
      { type: "tip", title: "The answer guides the question word", body: "If the answer is ‘at the library’, ask where. If it is ‘because I was tired’, ask why. Then build the rest of the question around the auxiliary." },
    ],
    review: ["Wh- words ask for information and normally come first.", "Use question word + auxiliary + subject when asking about an object or detail.", "How combines with words such as many, much, often, old and long."],
  },
  "subject-object-questions": {
    intro: "A subject question asks who or what does the action. An object question asks who or what receives the action. This difference changes word order and whether you use do/does/did.",
    blocks: [
      { type: "table", title: "Compare the two question types", headings: ["Question", "Missing information", "Word order"], rows: [
        ["Who called you?", "subject (the caller)", "who + verb; no do-support"], ["Who did you call?", "object (the person called)", "who + did + subject + base verb"], ["What broke the window?", "subject (the thing that broke it)", "what + verb"], ["What did the ball break?", "object (the thing affected)", "what + did + subject + base verb"],
      ] },
      { type: "text", title: "Subject questions", body: "When who or what is the subject, it takes the place of the subject. Use normal statement order after it and do not add do/does/did. The verb agrees with the answer: Who lives here? / Who live here? (plural context).", examples: [
        { text: "Someone took my umbrella. → Who took my umbrella?" }, { text: "A noise woke us. → What woke you?" }, { text: "Two people work here. → Who works here? (often singular in the question; plural answers are also possible in context)" },
      ] },
      { type: "text", title: "Object questions", body: "When who or what is the object, the subject remains in the question. Use the normal question pattern: auxiliary before subject, or do/does/did + subject + base verb.", examples: [
        { text: "You met someone. → Who did you meet?" }, { text: "She bought something. → What did she buy?" }, { text: "They are helping someone. → Who are they helping?" },
      ] },
      { type: "text", title: "Prepositions", body: "An object question can ask about the object of a preposition. In everyday English, the preposition often stays at the end; in formal English, it can come before whom or which.", examples: [
        { text: "Who are you waiting for?" }, { text: "Which team did she play against?" }, { text: "To whom did you send the letter? (formal)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Who did call you? (asking who was the caller)", correct: "Who called you?", explanation: "Who is the subject, so do-support is not needed." },
        { incorrect: "Who you saw yesterday? (asking about the object)", correct: "Who did you see yesterday?", explanation: "Who is the object; use did + subject + base verb." },
        { incorrect: "What did happen? (neutral subject question)", correct: "What happened?", explanation: "When what is the subject, use statement order without did." },
      ] },
      { type: "tip", title: "Find the missing role", body: "Answer with a full sentence. If the answer does the action, it is a subject question: Maya called. If it receives the action, it is an object question: I called Maya." },
    ],
    review: ["Subject question: who/what + verb; no do/does/did.", "Object question: question word + auxiliary + subject + verb.", "Identify whether the missing person/thing does or receives the action."],
  },
  "question-word-order": {
    intro: "Most English questions use a fixed order: question word, auxiliary, subject and main verb. Subject questions are the main exception because the question word is the subject.",
    blocks: [
      { type: "table", title: "Common word orders", headings: ["Question type", "Pattern", "Example"], rows: [
        ["Yes/no", "auxiliary + subject + main verb", "Have you finished?"], ["Wh- object/detail", "question word + auxiliary + subject + verb", "Where do they live?"], ["Subject question", "question word + verb + object", "Who opened the door?"], ["Be question", "question word + be + subject", "Why are you here?"],
      ] },
      { type: "text", title: "Find the first auxiliary", body: "If a sentence has more than one auxiliary, move only the first one before the subject. Keep the other auxiliaries and main verb after the subject.", examples: [
        { text: "She has been working. → Has she been working?" }, { text: "They will be waiting. → When will they be waiting?" }, { text: "The door was being repaired. → Why was the door being repaired?" },
      ] },
      { type: "text", title: "Add do in simple tenses", body: "If the simple present or past sentence has no auxiliary, add do/does/did after the question word and before the subject. The main verb returns to its base form.", examples: [
        { text: "Where does your sister work?" }, { text: "What did they decide?" }, { text: "How often do you call your parents?" },
      ] },
      { type: "text", title: "Subject questions keep statement order", body: "When who or what asks about the subject, do not invert subject and auxiliary and do not add do/does/did. The question word itself occupies the subject position.", examples: [
        { text: "Who has taken my book?" }, { text: "What happened here?" }, { text: "Who can help us?" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Where your parents live?", correct: "Where do your parents live?", explanation: "Use question word + do + subject + base verb." },
        { incorrect: "Why you are laughing?", correct: "Why are you laughing?", explanation: "Move the auxiliary before the subject." },
        { incorrect: "Who did break the glass? (neutral subject question)", correct: "Who broke the glass?", explanation: "Do not add do when who is the subject." },
      ] },
      { type: "tip", title: "Use a simple frame", body: "For most questions, fill in: question word + auxiliary + subject + main verb. If who/what is doing the action, use who/what + verb instead." },
    ],
    review: ["Most questions invert the auxiliary and subject.", "Add do/does/did in simple tenses if no auxiliary is present.", "Subject questions use the question word as the subject and keep statement order."],
  },
  "auxiliary-verbs-questions": {
    intro: "Auxiliary verbs help form questions. English uses be, have and modal verbs directly; do/does/did are added when a simple present or past sentence has no auxiliary.",
    blocks: [
      { type: "table", title: "Which helper do I use?", headings: ["Statement form", "Question helper", "Example"], rows: [
        ["be", "move be", "They are ready. → Are they ready?"], ["have (perfect)", "move have/has/had", "She has left. → Has she left?"], ["modal", "move the modal", "You can drive. → Can you drive?"], ["simple present", "do/does", "He works here. → Does he work here?"], ["simple past", "did", "They arrived. → Did they arrive?"],
      ] },
      { type: "text", title: "One auxiliary can form the question", body: "Move the first auxiliary before the subject. If a verb phrase has two or more auxiliaries, keep the others in their original order after the subject.", examples: [
        { text: "We have been waiting. → Have we been waiting?" }, { text: "The documents will be checked. → Will the documents be checked?" }, { text: "He should have called. → Should he have called?" },
      ] },
      { type: "text", title: "Do-support", body: "Use do/does/did with ordinary verbs in simple questions. The helper carries tense and agreement, so the main verb uses its base form. Do not use do when be, a modal or a perfect have is already the auxiliary.", examples: [
        { text: "Does she know the answer?" }, { text: "Did you see the message?" }, { text: "Are they know the answer? (incorrect) → Do they know the answer?" },
      ] },
      { type: "text", title: "Questions with be", body: "Be also works as a main linking verb, so it moves to the beginning without do. This is true in present and past forms.", examples: [
        { text: "Is the room warm?" }, { text: "Were you tired after the trip?" }, { text: "Why was the shop closed?" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Do you are busy?", correct: "Are you busy?", explanation: "Move be directly before the subject; do is not needed." },
        { incorrect: "Does he can swim?", correct: "Can he swim?", explanation: "Move a modal before the subject; do not add do." },
        { incorrect: "Did she bought a ticket?", correct: "Did she buy a ticket?", explanation: "Did carries the past tense, so use the base verb bought → buy." },
      ] },
      { type: "tip", title: "Do not double the helper", body: "Use one question helper: Is she...? / Can she...? / Has she...? / Does she...? Avoid adding do when the sentence already has an auxiliary." },
    ],
    review: ["Move be, have or a modal before the subject.", "Use do/does/did when no other auxiliary is in a simple present/past question.", "After do/does/did, use the base verb."],
  },
  "indirect-questions": {
    intro: "Indirect questions ask for information in a more polite or less direct way. After the opening phrase, use statement word order rather than direct-question order.",
    blocks: [
      { type: "table", title: "Direct and indirect questions", headings: ["Direct question", "Indirect question", "What changes"], rows: [
        ["Where is the station?", "Could you tell me where the station is?", "subject before verb"], ["What time does it start?", "Do you know what time it starts?", "remove do-support"], ["Is the shop open?", "Can you tell me if the shop is open?", "if introduces yes/no question"],
      ] },
      { type: "text", title: "Indirect wh-questions", body: "Keep the question word, then use subject + verb. Do not invert the subject and auxiliary after the question word. Remove do/does/did and put the main verb in its ordinary form.", examples: [
        { text: "Where does Ana live? → Do you know where Ana lives?" }, { text: "When will they arrive? → Could you tell me when they will arrive?" }, { text: "Why is he leaving? → I wonder why he is leaving." },
      ] },
      { type: "text", title: "Indirect yes/no questions", body: "Use if or whether after an opening phrase to introduce a yes/no question. Then use statement word order. Whether is common when there is a choice or when the sentence is more formal.", examples: [
        { text: "Is the café open? → Do you know if the café is open?" }, { text: "Did she call? → I wonder whether she called." }, { text: "Could you tell me whether the bus stops here?" },
      ] },
      { type: "text", title: "Question mark or full stop?", body: "Use a question mark if the whole sentence is a question. If the whole sentence is a statement containing an indirect question, use a full stop.", examples: [
        { text: "Could you tell me where the bank is?" }, { text: "I wonder where the bank is." }, { text: "Do you know if they are coming?" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Could you tell me where is the station?", correct: "Could you tell me where the station is?", explanation: "Use statement word order inside an indirect question." },
        { incorrect: "Do you know what time does it start?", correct: "Do you know what time it starts?", explanation: "Do not keep do-support in the embedded clause." },
        { incorrect: "I wonder is she at home.", correct: "I wonder if she is at home.", explanation: "Use if or whether and statement word order for an indirect yes/no question." },
      ] },
      { type: "tip", title: "Keep the opening separate", body: "Make the direct question first. Then place it after ‘Could you tell me...?’ and change the inside to subject + verb order." },
    ],
    review: ["Indirect questions use statement order after the question word.", "Use if/whether for an indirect yes/no question.", "The full sentence determines whether you need a question mark."],
  },
  "question-tags": {
    intro: "A question tag is a short question added to a statement. It can check information, invite agreement or show uncertainty.",
    blocks: [
      { type: "table", title: "The basic pattern", headings: ["Statement", "Tag", "Example"], rows: [
        ["positive statement", "negative tag", "You are ready, aren't you?"], ["negative statement", "positive tag", "She isn't busy, is she?"], ["modal statement", "same modal in tag", "They can swim, can't they?"], ["past simple without auxiliary", "did in tag", "He called, didn't he?"],
      ] },
      { type: "text", title: "Match the auxiliary", body: "Use the same auxiliary or modal in the tag. If the statement has no auxiliary in the simple present or past, use do/does/did. Make a positive statement take a negative tag, and a negative statement take a positive tag.", examples: [
        { text: "You have finished, haven't you?" }, { text: "Maya likes jazz, doesn't she?" }, { text: "They didn't leave, did they?" },
      ] },
      { type: "text", title: "Use a pronoun", body: "The tag subject is usually a pronoun that matches the statement subject. With this/that use it; with these/those use they. There is/are repeats there in the tag.", examples: [
        { text: "This is yours, isn't it?" }, { text: "Those were expensive, weren't they?" }, { text: "There is a problem, isn't there?" },
      ] },
      { type: "text", title: "Special negative words", body: "Words such as never, nobody, hardly and nothing make a statement negative in meaning, so they usually take a positive tag. I am has the special tag aren't I? in standard conversational English.", examples: [
        { text: "You never eat meat, do you?" }, { text: "Nobody called, did they?" }, { text: "I'm late, aren't I?" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She likes tea, isn't she?", correct: "She likes tea, doesn't she?", explanation: "Use does in the tag for a present simple main verb." },
        { incorrect: "They aren't ready, aren't they?", correct: "They aren't ready, are they?", explanation: "A negative statement usually takes a positive tag." },
        { incorrect: "I'm next, amn't I?", correct: "I'm next, aren't I?", explanation: "The standard tag after I'm is aren't I?" },
      ] },
      { type: "tip", title: "Think of a tiny echo", body: "Repeat the sentence's helper, switch positive/negative, and replace the subject with a pronoun: ‘Maya called’ → ‘didn't she?’" },
    ],
    review: ["Use the same auxiliary/modal as the statement; use do/does/did if needed.", "Positive statement → negative tag; negative meaning → positive tag.", "Use a matching pronoun; remember aren't I? and tags after never/nobody."],
  },
  "negative-questions": {
    intro: "Negative questions use a negative auxiliary. They can show surprise, check an expectation or invite agreement; the speaker often thinks a particular answer is likely.",
    blocks: [
      { type: "table", title: "Form negative questions", headings: ["Statement", "Negative question", "Pattern"], rows: [
        ["You aren't ready.", "Aren't you ready?", "be + n't + subject"], ["He doesn't work here.", "Doesn't he work here?", "does + n't + subject + base verb"], ["They haven't arrived.", "Haven't they arrived?", "have + n't + subject + participle"], ["She can't drive.", "Can't she drive?", "modal + n't + subject + base verb"],
      ] },
      { type: "text", title: "Contractions and full forms", body: "In conversation, negative questions usually use contractions: Isn't he...? Don't you...? The full forms Is he not...? and Do you not...? are more formal or emphatic and have a different word order.", examples: [
        { text: "Don't you know the answer?" }, { text: "Isn't the shop open today?" }, { text: "Do you not understand? (formal/emphatic)" },
      ] },
      { type: "text", title: "Use with do-support", body: "For present and past simple verbs without an auxiliary, put don't/doesn't/didn't before the subject, then use the base verb. Do not keep the -s or past form on the main verb.", examples: [
        { text: "Doesn't he live nearby?" }, { text: "Didn't they see my message?" }, { text: "Don't your friends like this music?" },
      ] },
      { type: "text", title: "Meaning and answers", body: "A negative question can mean ‘I expected this’ or ‘I think this is true; please confirm’. Answer yes/no according to whether the statement is true, not according to the negative shape of the question.", examples: [
        { text: "Don't you like coffee? — Yes, I do. (I like it.)" }, { text: "Isn't she coming? — No, she isn't. (She is not coming.)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Doesn't she likes it?", correct: "Doesn't she like it?", explanation: "Use the base verb after doesn't." },
        { incorrect: "Don't he work here?", correct: "Doesn't he work here?", explanation: "Use doesn't with he, she or it." },
        { incorrect: "Aren't you like the film?", correct: "Don't you like the film?", explanation: "Use do-support with the main verb like; are is not its auxiliary." },
      ] },
      { type: "tip", title: "Choose the right helper", body: "Use the same helper as a positive question: Is she...? → Isn't she...? Do they...? → Don't they...? Has he...? → Hasn't he...?" },
    ],
    review: ["Put a negative auxiliary before the subject in a contracted negative question.", "Use do/does/did + base verb in simple questions without another auxiliary.", "Answer based on whether the positive statement is true."],
  },
  "embedded-questions": {
    intro: "An embedded question is a question placed inside another sentence, often after phrases such as I wonder, Do you know or Can you tell me. It uses statement word order inside.",
    blocks: [
      { type: "table", title: "Direct and embedded forms", headings: ["Direct question", "Embedded question", "Embedded clause order"], rows: [
        ["Where is the exit?", "I wonder where the exit is.", "subject + verb"], ["What does this mean?", "Can you explain what this means?", "no do-support"], ["Is she at home?", "Do you know if she is at home?", "if + subject + verb"],
      ] },
      { type: "text", title: "Wh- questions inside a sentence", body: "Keep the wh-word, then use subject + verb order. Do not invert the auxiliary and subject inside the embedded clause, and remove do/does/did if it was only used to make the direct question.", examples: [
        { text: "How much does it cost? → I don't know how much it costs." }, { text: "When will the train arrive? → Do you know when the train will arrive?" }, { text: "Why did he leave? → She asked why he left." },
      ] },
      { type: "text", title: "Yes/no questions inside a sentence", body: "Use if or whether to connect an embedded yes/no question. Then use statement order. Whether is useful when the sentence mentions a choice or uses ‘or not’.", examples: [
        { text: "Are they open? → I wonder if they are open." }, { text: "Did the package arrive? → Check whether the package arrived." }, { text: "I don't know whether or not he is coming." },
      ] },
      { type: "text", title: "Punctuation", body: "Use a question mark only when the whole sentence asks a question. If the main sentence is a statement, end with a full stop even though it contains an embedded question.", examples: [
        { text: "Could you tell me where the library is? (whole sentence is a question)" }, { text: "I wonder where the library is. (whole sentence is a statement)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I don't know where is my phone.", correct: "I don't know where my phone is.", explanation: "Use statement word order inside the embedded question." },
        { incorrect: "Can you tell me what does it mean?", correct: "Can you tell me what it means?", explanation: "Remove do-support and put the subject before the verb." },
        { incorrect: "I wonder does he know.", correct: "I wonder if he knows.", explanation: "Use if/whether and statement order for an embedded yes/no question." },
      ] },
      { type: "tip", title: "The outside sentence controls punctuation", body: "First decide whether the whole sentence is asking the listener something. If yes, use a question mark; if it simply reports a thought or question, use a full stop." },
    ],
    review: ["Embedded questions use statement word order.", "Use if/whether for embedded yes/no questions.", "Use a question mark only if the whole sentence is a question."],
  },
};
