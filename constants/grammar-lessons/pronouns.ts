import type { GrammarLesson } from "./types";

export const PRONOUN_LESSONS: Record<string, GrammarLesson> = {
  "personal-pronouns": {
    intro: "Personal pronouns replace people or things already known from context. Choose a pronoun that matches the person or thing and its role in the sentence.",
    blocks: [
      { type: "table", title: "Personal pronoun forms", headings: ["Person", "Subject", "Object", "Example"], rows: [
        ["first person singular", "I", "me", "I called Alex. Alex called me."], ["second person", "you", "you", "You helped us."], ["third person singular", "he / she / it", "him / her / it", "She saw him. It surprised her."], ["first person plural", "we", "us", "We invited them."], ["third person plural", "they", "them", "They spoke to us."],
      ] },
      { type: "text", title: "Use a pronoun instead of repeating a noun", body: "Use a personal pronoun when the listener or reader knows which person or thing you mean. Make sure its reference is clear, especially when there are two possible people or things in the sentence.", examples: [
        { text: "Maya has a new phone. She bought it yesterday." }, { text: "The neighbours called; they need our help." }, { text: "I put the cup beside the plate, but it fell. (unclear: which one?)" },
      ] },
      { type: "text", title: "Singular they", body: "They/them/their can refer to more than one person or to one person whose gender is unknown or who uses they pronouns. With singular they, use a plural-form verb: they are, they have.", examples: [
        { text: "Someone left their umbrella." }, { text: "Alex said they are ready." }, { text: "If a student has a question, they can ask me." },
      ] },
      { type: "text", title: "It for things and situations", body: "Use it for a thing, animal when its sex is not important, or an idea or situation. English also uses it in expressions about weather, time and distance when there is no specific subject.", examples: [
        { text: "I found my key. It was under the sofa." }, { text: "It is raining." }, { text: "It is nearly six o'clock." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Me and Sam went home.", correct: "Sam and I went home.", explanation: "Use subject pronouns for the subject of the verb." },
        { incorrect: "The company changed it's name.", correct: "The company changed its name.", explanation: "Its is possessive; it's means it is or it has." },
        { incorrect: "Someone forgot his or her ticket. They are... (agreement switched mid-sentence)", correct: "Someone forgot their ticket. They are...", explanation: "Singular they is widely used; keep its plural verb form consistently." },
      ] },
      { type: "tip", title: "Check the pronoun's job", body: "Ask whether the pronoun is doing the action or receiving it. The subject/object forms change: she called him; he called her." },
    ],
    review: ["Personal pronouns replace known people, things or ideas.", "Choose subject or object form based on the pronoun's role.", "Singular they uses are/have and their/them."],
  },
  "subject-object-pronouns": {
    intro: "Subject pronouns do the action or are described by the verb. Object pronouns receive the action or follow a preposition.",
    blocks: [
      { type: "table", title: "Subject and object forms", headings: ["Subject", "Object", "Example"], rows: [
        ["I", "me", "I saw her. She saw me."], ["you", "you", "You helped us."], ["he", "him", "He called them."], ["she", "her", "She called him."], ["we", "us", "They invited us."], ["they", "them", "We invited them."],
      ] },
      { type: "text", title: "Before the verb: subject", body: "Use I, you, he, she, it, we or they as the subject of a verb. In a compound subject, each pronoun is still a subject form.", examples: [
        { text: "He and I work together." }, { text: "They live near the station." }, { text: "She and her brother are here." },
      ] },
      { type: "text", title: "After verbs and prepositions: object", body: "Use me, you, him, her, it, us or them as the object of a verb or after a preposition. In a compound object, use object forms for both people.", examples: [
        { text: "The teacher helped him." }, { text: "Please come with us." }, { text: "This message is for Maya and me." },
      ] },
      { type: "text", title: "After be in everyday English", body: "In everyday conversation, object forms are common after be: It's me. In very formal English, subject forms may appear after linking be, but learners can use the natural conversational form in ordinary situations.", examples: [
        { text: "Who is it? — It's me." }, { text: "That was her on the phone." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Her called I.", correct: "She called me.", explanation: "Use a subject form before the verb and an object form after it." },
        { incorrect: "The gift is for my brother and I.", correct: "The gift is for my brother and me.", explanation: "A pronoun after the preposition for must be an object form." },
        { incorrect: "Me and him are ready.", correct: "He and I are ready.", explanation: "The pronouns are subjects, so use he and I." },
      ] },
      { type: "tip", title: "Remove the other person", body: "To check a compound phrase, remove the other person: ‘for my brother and me’ → ‘for me’; ‘he and I are ready’ → ‘I am ready’." },
    ],
    review: ["Use subject forms before the verb: I, she, we, they.", "Use object forms after verbs and prepositions: me, her, us, them.", "In everyday English, object forms are natural after be: It's me."],
  },
  "possessive-pronouns-determiners": {
    intro: "Possessive determiners come before a noun and show who it belongs to. Possessive pronouns replace the determiner + noun, so the noun is not repeated.",
    blocks: [
      { type: "table", title: "Two possessive forms", headings: ["Person", "Determiner + noun", "Pronoun", "Example"], rows: [
        ["I", "my bag", "mine", "This is my bag. It is mine."], ["you", "your keys", "yours", "Are these your keys? They are yours."], ["he", "his coat", "his", "That coat is his."], ["she", "her phone", "hers", "The phone is hers."], ["we", "our house", "ours", "The house is ours."], ["they", "their seats", "theirs", "Those seats are theirs."],
      ] },
      { type: "text", title: "Before a noun", body: "Use my, your, his, her, its, our or their directly before a noun. These words are determiners, not pronouns; do not add an article before them.", examples: [
        { text: "My room is upstairs." }, { text: "Their children go to this school." }, { text: "The dog wagged its tail." },
      ] },
      { type: "text", title: "Replace the noun", body: "Use mine, yours, his, hers, ours or theirs without a noun after them. They can stand alone as the complement of be or as the subject or object of a sentence.", examples: [
        { text: "This seat is ours." }, { text: "Mine is the blue one." }, { text: "I like your plan, but I prefer hers." },
      ] },
      { type: "text", title: "Possessive forms have no apostrophe", body: "Possessive determiners and pronouns do not use apostrophes. Its shows possession; it's is the contraction of it is or it has. The apostrophe in a noun possessive, such as the dog's bowl, is a different structure.", examples: [
        { text: "The cat is cleaning its paws." }, { text: "It's raining. (It is raining.)" }, { text: "That is James's bicycle." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "This is mine book.", correct: "This is my book. / This book is mine.", explanation: "Use a determiner before a noun; use the pronoun without the noun." },
        { incorrect: "The blue bag is her's.", correct: "The blue bag is hers.", explanation: "Do not add an apostrophe to possessive pronouns." },
        { incorrect: "The bird broke it's wing.", correct: "The bird broke its wing.", explanation: "Its is possessive; it's means it is or it has." },
      ] },
      { type: "tip", title: "Noun or no noun?", body: "If a noun follows, choose my/your/her/our/their. If the possessive word stands alone, choose mine/yours/hers/ours/theirs." },
    ],
    review: ["Possessive determiners come before nouns: my coat, their home.", "Possessive pronouns replace the noun: mine, theirs.", "Its is possessive and has no apostrophe; it's means it is/has."],
  },
  "reflexive-pronouns": {
    intro: "Use a reflexive pronoun when the subject and object refer to the same person or thing. Reflexive forms also add emphasis in some sentences.",
    blocks: [
      { type: "table", title: "Reflexive forms", headings: ["Subject", "Reflexive pronoun"], rows: [
        ["I", "myself"], ["you (singular)", "yourself"], ["he / she / it", "himself / herself / itself"], ["we", "ourselves"], ["you (plural)", "yourselves"], ["they", "themselves"],
      ] },
      { type: "text", title: "Subject and object are the same", body: "Use the reflexive pronoun as the object when the subject does something to itself or for itself. It can follow a verb or a preposition.", examples: [
        { text: "I taught myself to play guitar." }, { text: "She looked at herself in the mirror." }, { text: "They made dinner for themselves." },
      ] },
      { type: "text", title: "For emphasis", body: "A reflexive pronoun can emphasize that someone did something personally, without help. In this use, it can often be removed without changing the basic meaning.", examples: [
        { text: "The manager herself spoke to us." }, { text: "I repaired the chair myself." }, { text: "The house itself is beautiful." },
      ] },
      { type: "text", title: "By myself", body: "By myself can mean alone or without help. Use the correct reflexive form for the subject: by yourself, by himself, by ourselves and so on.", examples: [
        { text: "Did you travel by yourself?" }, { text: "The children stayed by themselves." }, { text: "I built the shelf by myself." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Please contact myself tomorrow.", correct: "Please contact me tomorrow.", explanation: "Use a reflexive only when it refers back to the subject or adds emphasis." },
        { incorrect: "He introduced him to the class. (intended: he introduced himself)", correct: "He introduced himself to the class.", explanation: "The subject and object are the same person." },
        { incorrect: "We enjoyed us at the party.", correct: "We enjoyed ourselves at the party.", explanation: "The expression is enjoy yourself/yourselves." },
      ] },
      { type: "tip", title: "Find the subject", body: "Before choosing a reflexive form, identify the subject it refers to: I → myself; she → herself; they → themselves." },
    ],
    review: ["Use a reflexive when the subject and object refer to the same person or thing.", "Reflexives can also add emphasis; by + reflexive can mean alone or without help.", "Do not use myself as a formal replacement for me."],
  },
  "reciprocal-pronouns": {
    intro: "Each other and one another show that two or more people do the same action to each other. They express a shared relationship or action.",
    blocks: [
      { type: "text", title: "Shared actions", body: "Use each other or one another after a verb when the people give or receive the action mutually. In everyday English, the two expressions are generally interchangeable.", examples: [
        { text: "The two sisters help each other." }, { text: "We sent one another messages." }, { text: "The neighbours smiled at each other." },
      ] },
      { type: "table", title: "Reciprocal or reflexive?", headings: ["Form", "Meaning", "Example"], rows: [
        ["each other / one another", "A does something to B, and B does it to A.", "They looked at each other."], ["themselves", "Each person does something to their own self.", "They looked at themselves in the mirror."],
      ] },
      { type: "text", title: "Possessive form", body: "Use each other's or one another's before a noun to show shared possession or connection. Add the apostrophe + s to the final word.", examples: [
        { text: "They know each other's families." }, { text: "The players borrowed one another's equipment." },
      ] },
      { type: "text", title: "One group or two people", body: "Each other is especially common for two people, while one another can be used for two or more. In modern everyday English, the distinction is not strict; clarity is more important.", examples: [
        { text: "The couple often cooks for each other." }, { text: "The team members congratulated one another." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "They looked themselves. (intended: they looked at each other)", correct: "They looked at each other.", explanation: "Use a reciprocal pronoun when each person looks at the other." },
        { incorrect: "They helped each others.", correct: "They helped each other.", explanation: "Each other has no plural -s; use each other's before a noun." },
        { incorrect: "They spoke each other.", correct: "They spoke to each other.", explanation: "Keep the preposition required by the verb: speak to someone." },
      ] },
      { type: "tip", title: "Draw two arrows", body: "If the action goes both ways (A → B and B → A), use each other or one another. If each person acts on themselves, use a reflexive pronoun." },
    ],
    review: ["Each other and one another show a mutual action or relationship.", "Use themselves when people act on their own selves.", "Possessive form: each other's / one another's + noun."],
  },
  "demonstrative-pronouns": {
    intro: "This, that, these and those point to people or things. Choose a form for singular or plural and for something near or farther away.",
    blocks: [
      { type: "table", title: "Four demonstratives", headings: ["Distance", "Singular", "Plural", "Example"], rows: [
        ["near", "this", "these", "This is my cup. These are my keys."], ["farther away", "that", "those", "That is your bag. Those are our seats."],
      ] },
      { type: "text", title: "Before a noun or on its own", body: "The same four words can be demonstrative determiners before a noun or pronouns that stand in place of a noun. Match this/that with a singular noun and these/those with a plural noun.", examples: [
        { text: "This book is new. (determiner)" }, { text: "This is new. (pronoun)" }, { text: "Those apples look delicious. / Those look delicious." },
      ] },
      { type: "text", title: "Distance in time and conversation", body: "Near and far can refer to physical distance, time or ideas. This/these often introduce something current or next; that/those can refer back to something already mentioned or more distant.", examples: [
        { text: "These days, I walk to work." }, { text: "That was a great idea you mentioned." }, { text: "Listen to this: I got the job!" },
      ] },
      { type: "text", title: "Agreement", body: "A demonstrative pronoun determines whether the verb is singular or plural. This and that usually take is/was; these and those usually take are/were.", examples: [
        { text: "This is my favourite." }, { text: "Those were expensive." }, { text: "These are the photos from our trip." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "These is my ticket.", correct: "This is my ticket. / These are my tickets.", explanation: "Match singular/plural demonstratives with the noun and verb." },
        { incorrect: "That shoes are mine.", correct: "Those shoes are mine.", explanation: "Use those before a plural noun." },
        { incorrect: "This are delicious.", correct: "These are delicious. / This is delicious.", explanation: "Choose the demonstrative and verb to match one or more things." },
      ] },
      { type: "tip", title: "Check number first", body: "Decide whether you mean one or more than one: this/that for one; these/those for more than one. Then choose near or farther away." },
    ],
    review: ["This/these are near; that/those are farther away or refer to a more distant idea.", "This/that are singular; these/those are plural.", "They can come before nouns or stand alone as pronouns."],
  },
  "indefinite-pronouns": {
    intro: "Indefinite pronouns refer to people or things without naming exactly who or what. Common groups include someone, anyone, everyone, something, nothing and each.",
    blocks: [
      { type: "table", title: "Common groups", headings: ["People", "Things", "Meaning"], rows: [
        ["someone / somebody", "something", "an unspecified person or thing"], ["anyone / anybody", "anything", "any person or thing; common in questions and negatives"], ["everyone / everybody", "everything", "all people or things"], ["no one / nobody", "nothing", "not a person or thing"],
      ] },
      { type: "text", title: "Singular verb agreement", body: "Pronouns ending in -one, -body or -thing are grammatically singular and usually take a singular verb. Each, either and neither are also singular when used as pronouns.", examples: [
        { text: "Everyone is ready." }, { text: "Something was making a noise." }, { text: "Neither of the answers is correct. (formal agreement)" },
      ] },
      { type: "text", title: "Some, any, every and no", body: "Use some- forms mainly in positive statements and offers; any- forms are common in questions and negatives. Every- includes all members. No- forms make a sentence negative without not.", examples: [
        { text: "Someone called while you were out." }, { text: "Did anyone call? I didn't hear anything." }, { text: "Nobody called." },
      ] },
      { type: "text", title: "Adjectives come after", body: "Put an adjective after an indefinite pronoun: something interesting, anyone new, nothing special. A prepositional phrase can also follow it.", examples: [
        { text: "I need something warm to wear." }, { text: "Is there anyone from Canada here?" }, { text: "We have nothing to worry about." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Everybody are here.", correct: "Everybody is here.", explanation: "Everybody is grammatically singular and takes is." },
        { incorrect: "I didn't see nobody.", correct: "I didn't see anybody. / I saw nobody.", explanation: "Use one negative form in standard English, not two." },
        { incorrect: "I need warm something.", correct: "I need something warm.", explanation: "Place an adjective after an indefinite pronoun." },
      ] },
      { type: "tip", title: "Singular grammar, plural meaning", body: "Everyone refers to many people but uses a singular verb: Everyone is here. In the next sentence, singular they is natural: Everyone has their own seat." },
    ],
    review: ["Indefinite pronouns do not name a specific person or thing.", "Words ending in -one, -body and -thing usually take singular verbs.", "Put adjectives after them and avoid double negatives."],
  },
  "relative-pronouns": {
    intro: "Relative pronouns introduce a clause that describes a person or thing. Use who for people, which for things and that for people or things in many defining clauses.",
    blocks: [
      { type: "table", title: "Choose a relative pronoun", headings: ["Pronoun", "Refers to", "Example"], rows: [
        ["who", "people", "The woman who lives next door is a doctor."], ["which", "things / animals", "The book which is on the desk is mine."], ["that", "people or things in defining clauses", "The film that we watched was funny."], ["whose", "possession", "I know a boy whose mother is a pilot."], ["where", "a place", "This is the café where we met."],
      ] },
      { type: "text", title: "Defining clauses", body: "A defining relative clause gives information needed to identify the person or thing. Do not put commas around it. That is common in defining clauses, especially in conversation; who and which are also possible.", examples: [
        { text: "The student who sits by the door is from Spain." }, { text: "The phone that I bought is already broken." },
      ] },
      { type: "text", title: "Non-defining clauses", body: "A non-defining relative clause adds extra information about someone or something already identified. Use commas, who for people and which for things. Do not use that in a non-defining clause.", examples: [
        { text: "My aunt, who lives in York, is visiting us." }, { text: "The museum, which opened in 1920, is free today." },
      ] },
      { type: "text", title: "When the pronoun can be omitted", body: "In a defining clause, you can often omit who, which or that when it is the object of the relative clause. Do not omit it when it is the subject. Never omit the pronoun in a non-defining clause.", examples: [
        { text: "The cake that I made was delicious. → The cake I made was delicious." }, { text: "The person who called is here. (who is the subject; keep it)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "My sister that lives in Rome is a chef. (intended: extra information; only one sister)", correct: "My sister, who lives in Rome, is a chef.", explanation: "Use commas and who in a non-defining clause; do not use that." },
        { incorrect: "The man which called me is outside.", correct: "The man who called me is outside.", explanation: "Use who for a person." },
        { incorrect: "The book which is on the desk is mine. → The book is on the desk is mine.", correct: "The book which is on the desk is mine.", explanation: "Keep the relative pronoun when it is the subject of its clause." },
      ] },
      { type: "tip", title: "Ask two questions", body: "Is the information needed to identify the noun? Use a defining clause without commas. Is it extra information? Use commas and who/which, not that." },
    ],
    review: ["Who for people; which for things; that often for either in defining clauses; whose for possession.", "Non-defining clauses use commas and do not use that.", "Omit a relative pronoun only when it is the object in a defining clause."],
  },
  "interrogative-pronouns": {
    intro: "Interrogative pronouns ask questions about people, things, choices or possession. Choose the form based on what information is missing and the pronoun's role in the question.",
    blocks: [
      { type: "table", title: "Question pronouns", headings: ["Pronoun", "Asks about", "Example"], rows: [
        ["who", "a person as subject or object", "Who called? / Who did you call?"], ["whom", "a person as object (formal)", "Whom did you invite?"], ["whose", "ownership", "Whose is this?"], ["what", "a thing or information", "What happened?"], ["which", "a choice from a known group", "Which do you prefer?"],
      ] },
      { type: "text", title: "Who as subject or object", body: "When who asks for the subject, it comes directly before the verb and does not need do/does/did. When who asks for the object, use normal question order with an auxiliary. Whom is a formal object form; who is more common in conversation.", examples: [
        { text: "Who opened the window? (who did the action)" }, { text: "Who did you invite? (who received the action)" }, { text: "Whom did you invite? (formal)" },
      ] },
      { type: "text", title: "What or which", body: "Use what when the possible answer is open or unknown. Use which when choosing from a limited or known set. They can be pronouns on their own or determiners before nouns.", examples: [
        { text: "What is your favourite food? (open choice)" }, { text: "Which is your bag, the red one or the blue one? (limited choice)" }, { text: "Which train goes to Oxford? (determiner + noun)" },
      ] },
      { type: "text", title: "Whose", body: "Whose asks who owns something. Use it alone as a pronoun or before a noun as a determiner. Do not confuse whose with who's, the contraction of who is or who has.", examples: [
        { text: "Whose is this?" }, { text: "Whose jacket is on the chair?" }, { text: "Who's at the door? (Who is at the door?)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Who you invited?", correct: "Who did you invite?", explanation: "Who asks for the object here, so use the auxiliary did." },
        { incorrect: "Which is your name?", correct: "What is your name?", explanation: "Use what for an open question; which is for a limited choice." },
        { incorrect: "Who's phone is this?", correct: "Whose phone is this?", explanation: "Whose asks about possession; who's means who is or who has." },
      ] },
      { type: "tip", title: "Subject or object?", body: "Answer the question in a short sentence. If the answer does the action (Maya called), who is the subject. If it receives the action (I called Maya), use auxiliary + subject + who." },
    ],
    review: ["Who asks about a person; what asks about an open thing; which selects from a known group.", "Who can be subject or object; whom is a formal object form.", "Whose shows possession; who's means who is/has."],
  },
  "one-ones": {
    intro: "Use one or ones to avoid repeating a singular or plural countable noun that is clear from context. They refer to a previously mentioned type of thing, not to an exact number in this use.",
    blocks: [
      { type: "table", title: "Singular and plural", headings: ["Number", "Form", "Example"], rows: [
        ["singular", "one", "I need a pen. Do you have one?"], ["plural", "ones", "These shoes are nicer than those ones."], ["with an adjective", "adjective + one(s)", "I like the blue one and the black ones."],
      ] },
      { type: "text", title: "Avoid repeating a noun", body: "Use one for a singular countable noun and ones for its plural. The noun must already be clear from the conversation or sentence. They are often used after this/that/these/those or an adjective.", examples: [
        { text: "Would you like an apple? — Yes, I'll have one." }, { text: "I like those chairs, but these ones are more comfortable." }, { text: "Which jacket do you want? — The warmer one." },
      ] },
      { type: "text", title: "Articles and determiners", body: "Use a/an before one when you mean an unspecified example, and the before one when you mean a specific item: a red one, the red one. Demonstratives can also come before one/ones.", examples: [
        { text: "I need a bigger one." }, { text: "The one by the door is mine." }, { text: "Those ones look new." },
      ] },
      { type: "text", title: "When not to use one(s)", body: "Do not normally use one/ones to replace an uncountable noun. Repeat the noun or use a suitable amount word. Also, do not add one after a possessive determiner in standard English: say my book, not my one when you mean the book itself.", examples: [
        { text: "Would you like some water? — Yes, please. (not: a water one)" }, { text: "I prefer your idea to mine. (not: your one, in this possessive pattern)" }, { text: "I need a new phone. The old one is broken." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I need a new furniture.", correct: "I need new furniture.", explanation: "Furniture is uncountable, so do not use one to replace it." },
        { incorrect: "I like the red one shoes.", correct: "I like the red shoes. / I like the red ones.", explanation: "Use the noun or replace it with ones; do not use both together." },
        { incorrect: "Which shoes do you prefer? — The black one.", correct: "Which shoes do you prefer? — The black ones.", explanation: "Use ones to refer to plural shoes." },
      ] },
      { type: "tip", title: "Check the noun", body: "Ask whether the missing noun is countable and whether it is singular or plural. Use one for a singular countable noun, ones for plural, and neither for uncountable nouns." },
    ],
    review: ["One replaces a singular countable noun; ones replaces a plural countable noun.", "Use them when the noun is clear from context, often after an adjective or demonstrative.", "Do not use one(s) for uncountable nouns."],
  },
};
