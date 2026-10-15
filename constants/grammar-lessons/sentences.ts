import type { GrammarLesson } from "./types";

export const SENTENCE_LESSONS: Record<string, GrammarLesson> = {
  "basic-sentence-structure": {
    intro: "A basic English sentence usually has a subject and a verb. The subject comes before the verb in statements; an object or other information may follow.",
    blocks: [
      { type: "table", title: "Common sentence patterns", headings: ["Pattern", "Example", "Parts"], rows: [
        ["subject + verb", "Birds fly.", "who/what + action"], ["subject + verb + object", "Mia reads books.", "who + action + what"], ["subject + be + description", "The soup is hot.", "thing + be + adjective"], ["subject + verb + indirect + direct object", "He gave me a key.", "who + action + receiver + thing"],
      ] },
      { type: "text", title: "Subject before verb", body: "In a statement, the subject normally comes before the main verb. The subject can be a noun, a pronoun or a longer phrase. In questions, the auxiliary may come before the subject; in commands, the subject you is usually understood.", examples: [
        { text: "My younger brother plays chess." }, { text: "They are waiting outside." }, { text: "Please close the door. (You close the door is understood.)" },
      ] },
      { type: "text", title: "Objects and complements", body: "A verb may take an object that receives the action. Some verbs do not need an object. After be and other linking verbs, a complement describes or identifies the subject rather than receiving an action.", examples: [
        { text: "We watched a film. (object)" }, { text: "The baby slept. (no object)" }, { text: "Her father is a doctor. (complement identifies father)" },
      ] },
      { type: "text", title: "Add place, time and manner", body: "Extra details can explain how, where or when something happens. A common order at the end is manner + place + time, though the order can change for emphasis.", examples: [
        { text: "She spoke quietly in the library yesterday." }, { text: "We met our friends at the station after work." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Likes my sister music.", correct: "My sister likes music.", explanation: "Use subject + verb + object in a basic statement." },
        { incorrect: "They are play football.", correct: "They are playing football. / They play football.", explanation: "Use a complete verb form: be + -ing for an action in progress, or present simple for a habit." },
        { incorrect: "I explained him the rule.", correct: "I explained the rule to him.", explanation: "This verb pattern needs the thing before to + person." },
      ] },
      { type: "tip", title: "Build from the core", body: "Start with who/what + verb. Add an object if the verb needs one, then add details such as how, where and when." },
    ],
    review: ["A statement usually puts the subject before the verb.", "A verb may take an object or a subject complement, or neither.", "Add details after the core sentence in a clear order."],
  },
  "subject-predicate": {
    intro: "A sentence has a subject and a predicate. The subject tells who or what the sentence is about; the predicate contains the verb and says something about the subject.",
    blocks: [
      { type: "table", title: "Find the two parts", headings: ["Sentence", "Subject", "Predicate"], rows: [
        ["The dog barked loudly.", "The dog", "barked loudly"], ["My friends from school are visiting.", "My friends from school", "are visiting"], ["The old bridge over the river was closed.", "The old bridge over the river", "was closed"],
      ] },
      { type: "text", title: "The complete subject", body: "The complete subject includes the main noun or pronoun and the words that describe or identify it. The simple subject is just the main noun or pronoun.", examples: [
        { text: "The small brown dog barked. (simple subject: dog; complete subject: the small brown dog)" }, { text: "My closest friend from college is visiting. (simple subject: friend)" },
      ] },
      { type: "text", title: "The predicate", body: "The predicate includes the verb and may also include an object, complement or extra details. It can be short or long, but it must connect to the subject through a verb.", examples: [
        { text: "Birds sing. (short predicate)" }, { text: "The children have been playing happily in the garden all afternoon. (long predicate)" }, { text: "The room looks clean. (looks clean describes the subject)" },
      ] },
      { type: "text", title: "Do not confuse subject with first noun", body: "A phrase after the subject can contain another noun, but that noun does not automatically become the subject. Find the main noun phrase and match the verb to it.", examples: [
        { text: "The box of old photographs is heavy. (subject: box)" }, { text: "A friend of my parents lives nearby. (subject: friend)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "The list of names are on the desk.", correct: "The list of names is on the desk.", explanation: "The subject is singular list; names is inside a prepositional phrase." },
        { incorrect: "Because it was raining. (as a complete sentence)", correct: "Because it was raining, we stayed inside.", explanation: "This dependent part needs a main clause to complete the thought." },
        { incorrect: "My brother the tall one is here. (unclear punctuation)", correct: "My brother, the tall one, is here.", explanation: "Use commas around extra identifying information when it interrupts the subject." },
      ] },
      { type: "tip", title: "Find the main verb", body: "Find the verb first, then ask who or what does it or is described by it. That noun phrase is the subject; the verb and the rest form the predicate." },
    ],
    review: ["Subject = who/what the sentence is about; predicate = verb and information about it.", "The complete subject may include describing words and phrases.", "A noun inside a phrase is not necessarily the subject."],
  },
  "simple-compound-complex": {
    intro: "Sentences can have one or more clauses. A simple sentence has one independent clause; compound and complex sentences connect clauses in different ways.",
    blocks: [
      { type: "table", title: "Three sentence types", headings: ["Type", "Structure", "Example"], rows: [
        ["simple", "one independent clause", "The train arrived."], ["compound", "two or more independent clauses", "The train arrived, and we got on."], ["complex", "one independent clause + at least one dependent clause", "When the train arrived, we got on."],
      ] },
      { type: "text", title: "Simple sentences", body: "A simple sentence has one independent clause. It can still have a compound subject or verb, or several details; the word simple refers to its clause structure, not to the length of the sentence.", examples: [
        { text: "The young doctor and her assistant checked the patient carefully." }, { text: "Sam washed the dishes and dried them." },
      ] },
      { type: "text", title: "Compound sentences", body: "A compound sentence joins independent clauses, which can each stand alone. Use a comma before a coordinating conjunction such as and, but or so when it joins two complete clauses.", examples: [
        { text: "I wanted to walk, but it started raining." }, { text: "The shop was closed, so we went home." },
      ] },
      { type: "text", title: "Complex sentences", body: "A complex sentence contains an independent clause and a dependent clause. The dependent clause often begins with because, when, if or although. Put a comma after it when it comes first; a comma is usually not needed when it comes second.", examples: [
        { text: "Because it was raining, we stayed inside." }, { text: "We stayed inside because it was raining." }, { text: "Although she was tired, she finished her work." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I was hungry, I made a sandwich.", correct: "I was hungry, so I made a sandwich. / I was hungry; I made a sandwich.", explanation: "Do not join two independent clauses with only a comma." },
        { incorrect: "Because we were late. (as a complete sentence)", correct: "Because we were late, we took a taxi.", explanation: "Because introduces a dependent clause that needs a main clause." },
        { incorrect: "She likes tea but, she doesn't like coffee.", correct: "She likes tea, but she doesn't like coffee.", explanation: "Put a comma before the conjunction joining two complete clauses, not after it." },
      ] },
      { type: "tip", title: "Count the clauses", body: "Find each subject–verb group. One independent clause is simple; two independent clauses make a compound sentence; an independent clause plus a dependent one makes a complex sentence." },
    ],
    review: ["Simple: one independent clause; compound: two or more independent clauses.", "Complex: an independent clause plus one or more dependent clauses.", "Use commas to show clause boundaries clearly."],
  },
  "independent-dependent-clauses": {
    intro: "A clause is a group of words with a subject and a verb. An independent clause can stand alone; a dependent clause needs another clause to complete the sentence.",
    blocks: [
      { type: "table", title: "Compare clause types", headings: ["Clause", "Can stand alone?", "Example"], rows: [
        ["independent", "yes", "We missed the bus."], ["dependent", "no", "because we left late"], ["combined", "yes, as one sentence", "Because we left late, we missed the bus."],
      ] },
      { type: "text", title: "Independent clauses", body: "An independent clause expresses a complete thought. It has a subject and a verb and can be a sentence by itself. It can also be joined to another independent clause.", examples: [
        { text: "The children played outside." }, { text: "I called the restaurant." }, { text: "The weather was cold, but the sky was clear." },
      ] },
      { type: "text", title: "Dependent clauses", body: "A dependent clause has a subject and a verb but begins with a word that makes it depend on another clause. Common starters include because, when, if, although, who and which.", examples: [
        { text: "because the road was closed" }, { text: "when the lesson ended" }, { text: "who lives next door" },
      ] },
      { type: "text", title: "Join them clearly", body: "Put the dependent clause first with a comma after it. When it follows the independent clause, a comma is usually not needed. A relative clause follows the noun it describes.", examples: [
        { text: "When the lesson ended, we went for coffee." }, { text: "We went for coffee when the lesson ended." }, { text: "I met a woman who speaks five languages." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Although I was tired. (as a complete sentence)", correct: "Although I was tired, I finished the report.", explanation: "Although introduces a dependent clause; add an independent clause." },
        { incorrect: "We stayed inside, because it was cold. (neutral sentence order)", correct: "We stayed inside because it was cold.", explanation: "A comma is not usually needed before a dependent clause at the end." },
        { incorrect: "The bus was late we waited outside.", correct: "The bus was late, so we waited outside.", explanation: "Join independent clauses with punctuation or a conjunction." },
      ] },
      { type: "tip", title: "Test the clause", body: "Read the clause by itself. If it sounds complete, it may be independent. If it begins with because/when/although and leaves you waiting for more, it is dependent." },
    ],
    review: ["A clause contains a subject and a verb.", "An independent clause can stand alone; a dependent clause cannot.", "Use punctuation and conjunctions to connect clauses clearly."],
  },
  "coordinating-conjunctions": {
    intro: "Coordinating conjunctions connect equal parts of a sentence: words, phrases or independent clauses. The common set is remembered as FANBOYS: for, and, nor, but, or, yet, so.",
    blocks: [
      { type: "table", title: "FANBOYS meanings", headings: ["Conjunction", "Use", "Example"], rows: [
        ["for", "reason (formal/literary)", "We stayed inside, for the weather was poor."], ["and", "addition", "She opened the door and walked in."], ["nor", "negative addition", "He didn't call, nor did he text."], ["but / yet", "contrast", "I was tired, but I kept working."], ["or", "choice", "Would you like tea or coffee?"], ["so", "result", "It was late, so we went home."],
      ] },
      { type: "text", title: "Join words or phrases", body: "A conjunction can join equal words or phrases. A comma is usually not needed when it joins only two short items. Use a comma before the final and/or in a list of three or more items according to the style guide you follow.", examples: [
        { text: "I bought apples and oranges." }, { text: "She works in the morning or in the evening." }, { text: "We need bread, milk, and eggs." },
      ] },
      { type: "text", title: "Join two independent clauses", body: "When a coordinating conjunction joins two complete clauses, put a comma before it. The comma helps the reader see the boundary between the two sentences.", examples: [
        { text: "I called the hotel, but nobody answered." }, { text: "We can walk, or we can take a taxi." }, { text: "The bus was full, so we waited for the next one." },
      ] },
      { type: "text", title: "Keep the parts parallel", body: "Join parts with the same grammatical form when possible: noun with noun, verb phrase with verb phrase, or clause with clause. Nor often causes inversion when it begins a new clause after a negative statement.", examples: [
        { text: "She likes reading and swimming. (two -ing forms)" }, { text: "He neither called nor sent a message." }, { text: "She didn't agree, nor did she explain why." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I was tired, I went to bed.", correct: "I was tired, so I went to bed.", explanation: "Use a conjunction or stronger punctuation to join two independent clauses." },
        { incorrect: "He bought bread, and milk. (two-item list)", correct: "He bought bread and milk.", explanation: "A comma is not usually needed before and when it joins two words." },
        { incorrect: "She likes to swim and running.", correct: "She likes swimming and running. / She likes to swim and to run.", explanation: "Keep the joined forms parallel." },
      ] },
      { type: "tip", title: "Does each side stand alone?", body: "If the conjunction joins two complete sentences, use a comma before it. If it joins only two words or phrases, a comma is usually unnecessary." },
    ],
    review: ["FANBOYS connect equal words, phrases or clauses.", "Use a comma before a coordinating conjunction joining two independent clauses.", "Keep the connected parts parallel when possible."],
  },
  "subordinating-conjunctions": {
    intro: "A subordinating conjunction begins a dependent clause and shows its relationship to an independent clause, such as time, reason, condition or contrast.",
    blocks: [
      { type: "table", title: "Common subordinating conjunctions", headings: ["Relationship", "Conjunctions", "Example"], rows: [
        ["time", "when, before, after, while, until", "Call me when you arrive."], ["reason", "because, since, as", "We stayed home because it was snowing."], ["condition", "if, unless", "If you need help, call me."], ["contrast", "although, though, even though", "Although it was cold, we went outside."], ["purpose / result", "so that", "I wrote it down so that I would remember."],
      ] },
      { type: "text", title: "Dependent clause first", body: "When the dependent clause comes first, put a comma after it. The main clause can then complete the idea.", examples: [
        { text: "Because the road was icy, the school opened late." }, { text: "Although he was nervous, he gave a clear talk." }, { text: "If you finish early, you can leave." },
      ] },
      { type: "text", title: "Dependent clause second", body: "When the independent clause comes first, a comma is not usually needed before a short dependent clause. Use punctuation if the clause is long or if it prevents misunderstanding.", examples: [
        { text: "The school opened late because the road was icy." }, { text: "You can leave if you finish early." }, { text: "I waited until the rain stopped." },
      ] },
      { type: "text", title: "Do not confuse because and so", body: "Because introduces a reason clause. So can join a result clause. In standard writing, do not use because and so together to connect the same two clauses in one simple pattern.", examples: [
        { text: "Because it was late, we went home." }, { text: "It was late, so we went home." }, { text: "Because it was late, so we went home. (incorrect)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "When I get home. I will call you.", correct: "When I get home, I will call you.", explanation: "Do not separate the opening dependent clause from its main clause with a full stop." },
        { incorrect: "Although it was raining, but we went out.", correct: "Although it was raining, we went out. / It was raining, but we went out.", explanation: "Use although or but, not both in this structure." },
        { incorrect: "We left, because it was late. (simple clause order)", correct: "We left because it was late.", explanation: "A comma is usually unnecessary before a final dependent clause." },
      ] },
      { type: "tip", title: "Find the relationship", body: "Choose the conjunction by meaning: when = time, because = reason, if = condition, although = contrast. Put a comma after the dependent clause when it comes first." },
    ],
    review: ["Subordinating conjunctions introduce dependent clauses.", "Opening dependent clause + comma + main clause.", "A final dependent clause usually needs no comma; avoid doubling conjunctions such as although + but."],
  },
  "relative-clauses": {
    intro: "A relative clause describes a noun by adding information about a person, thing or place. It begins with a relative word such as who, which, that, whose or where.",
    blocks: [
      { type: "table", title: "Relative words", headings: ["Word", "Use", "Example"], rows: [
        ["who", "people", "The woman who called is my aunt."], ["which", "things / animals", "The phone which I bought is broken."], ["that", "people or things in defining clauses", "The film that we watched was funny."], ["whose", "possession", "I know a student whose father is a pilot."], ["where", "places", "This is the café where we met."],
      ] },
      { type: "text", title: "Defining relative clauses", body: "A defining clause identifies which person or thing you mean. Do not put commas around it. That is common in defining clauses; who and which are also possible. You can often omit the relative word when it is the object, but not when it is the subject.", examples: [
        { text: "The student who sits by the window is new. (who is the subject)" }, { text: "The book (that) I borrowed is overdue. (that is the object and can be omitted)" },
      ] },
      { type: "text", title: "Non-defining relative clauses", body: "A non-defining clause adds extra information about a noun already identified. Put commas around it and do not use that. Keep the relative pronoun, even when it is the object.", examples: [
        { text: "My uncle, who lives in Leeds, is visiting." }, { text: "The library, which opened last year, is very popular." },
      ] },
      { type: "text", title: "Put the clause next to its noun", body: "Place a relative clause immediately after the noun it describes. This helps the reader understand who or what the clause refers to.", examples: [
        { text: "I spoke to a woman who works at the hospital." }, { text: "We stayed at a hotel that had a swimming pool." }, { text: "The boy whose bike was stolen is in my class." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "My mother that lives in Rome is a doctor. (extra information; one mother)", correct: "My mother, who lives in Rome, is a doctor.", explanation: "Use commas and who in a non-defining clause; not that." },
        { incorrect: "The man which called is here.", correct: "The man who called is here.", explanation: "Use who for a person." },
        { incorrect: "The book, that I borrowed, is overdue.", correct: "The book that I borrowed is overdue. / The book, which I borrowed, is overdue.", explanation: "Do not use that in a non-defining clause; omit commas if the information identifies the book." },
      ] },
      { type: "tip", title: "Need-to-know or extra?", body: "If the clause tells you which noun you mean, it is defining and has no commas. If it only adds extra information, use commas and who/which." },
    ],
    review: ["Relative clauses describe nouns and follow the noun they modify.", "Defining clauses identify and use no commas; non-defining clauses add information and use commas.", "Use who for people, which for things, and do not use that in non-defining clauses."],
  },
  "there-is-there-are": {
    intro: "Use there is and there are to say that something exists or is present. The verb agrees with the noun phrase that follows it.",
    blocks: [
      { type: "table", title: "Choose is or are", headings: ["Noun phrase", "Form", "Example"], rows: [
        ["singular countable", "there is / there's", "There is a café nearby."], ["uncountable", "there is / there's", "There is some water in the bottle."], ["plural countable", "there are", "There are two cafés nearby."], ["past singular/uncountable", "there was", "There was a problem."], ["past plural", "there were", "There were several problems."],
      ] },
      { type: "text", title: "A or some", body: "Use a/an with a singular countable noun and some with plural countable or uncountable nouns in positive statements. Use any commonly in questions and negatives.", examples: [
        { text: "There is an email for you." }, { text: "There are some clean towels." }, { text: "Is there any coffee?" }, { text: "There aren't any clean cups." },
      ] },
      { type: "text", title: "Questions and negatives", body: "Make a question by moving is/are/was/were before there. Put not after the verb for a negative. Use do-support only with expressions where there is the main verb have in a different construction, not with there is/are.", examples: [
        { text: "Is there a bus at this time?" }, { text: "Were there many people at the concert?" }, { text: "There isn't a lift in this building." },
      ] },
      { type: "text", title: "Lists and informal speech", body: "When a list follows, formal agreement follows the first noun: There is a chair and two tables. In informal speech, some speakers use there is before a plural noun, but there are is the standard form for plural items.", examples: [
        { text: "There is a book and two pens on the desk. (formal agreement with first noun)" }, { text: "There are two pens on the desk." }, { text: "There's two pens... (common informal speech; use there are in careful writing)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "There is three chairs.", correct: "There are three chairs.", explanation: "Use are with a plural noun phrase." },
        { incorrect: "Is have a supermarket nearby?", correct: "Is there a supermarket nearby?", explanation: "Use the there is/are structure to say something exists." },
        { incorrect: "There are some milk in the fridge.", correct: "There is some milk in the fridge.", explanation: "Milk is uncountable and takes is." },
      ] },
      { type: "tip", title: "Look after there", body: "Ignore there for agreement and check the noun phrase after the verb: there is a shop; there are shops; there is some bread." },
    ],
    review: ["There is + singular/uncountable noun; there are + plural noun.", "Move is/are to make a question; add not for a negative.", "The noun phrase after the verb controls the standard agreement."],
  },
  "fragments-run-on-sentences": {
    intro: "A complete sentence needs an independent clause. A fragment is an incomplete part presented as a sentence; a run-on joins independent clauses without correct punctuation.",
    blocks: [
      { type: "table", title: "Complete or incomplete?", headings: ["Type", "Example", "Problem / fix"], rows: [
        ["fragment", "Because I was tired.", "dependent clause; add a main clause"], ["complete", "Because I was tired, I went to bed.", "dependent + independent clause"], ["comma splice", "I was tired, I went to bed.", "two complete clauses joined only by a comma"], ["run-on", "I was tired I went to bed.", "two complete clauses need punctuation or a conjunction"],
      ] },
      { type: "text", title: "Fix a fragment", body: "A fragment may be a dependent clause without a main clause, a phrase without a verb, or a phrase without a subject. Add the missing information or connect it to a complete sentence.", examples: [
        { text: "After the film ended. → After the film ended, we went home." }, { text: "Walking through the park. → We saw a fox walking through the park." }, { text: "The largest house on the street. → The largest house on the street is for sale." },
      ] },
      { type: "text", title: "Fix a run-on", body: "Separate two independent clauses with a full stop or semicolon, or join them with a comma plus a coordinating conjunction. You can also make one clause dependent with a suitable subordinating conjunction.", examples: [
        { text: "The bus was late. We waited in the rain." }, { text: "The bus was late, so we waited in the rain." }, { text: "Because the bus was late, we waited in the rain." },
      ] },
      { type: "text", title: "Do not rely on a comma alone", body: "A comma splice happens when two complete clauses are joined by only a comma. A comma is useful inside a sentence, but it cannot usually replace a conjunction, full stop or semicolon between complete thoughts.", examples: [
        { text: "The shop was closed, we went home. (comma splice)" }, { text: "The shop was closed, so we went home." }, { text: "The shop was closed; we went home." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Although the test was difficult. (fragment)", correct: "Although the test was difficult, I finished it.", explanation: "Although introduces a dependent clause that needs an independent clause." },
        { incorrect: "I called her, she didn't answer. (comma splice)", correct: "I called her, but she didn't answer.", explanation: "Add a coordinating conjunction or use stronger punctuation." },
        { incorrect: "The dog barked all night we couldn't sleep. (run-on)", correct: "The dog barked all night, so we couldn't sleep.", explanation: "Use punctuation and a conjunction to join the complete clauses." },
      ] },
      { type: "tip", title: "Read each part alone", body: "Check both sides of punctuation. If each part is a complete sentence, use a full stop, semicolon or comma + coordinating conjunction. If one part begins with because/although/when, connect it to a main clause." },
    ],
    review: ["A fragment is not a complete independent clause.", "A run-on joins complete clauses without correct punctuation.", "Use a full stop, semicolon or comma + coordinating conjunction to join independent clauses."],
  },
  "cleft-sentences-emphasis": {
    intro: "Cleft sentences divide one idea into two parts to emphasize a person, thing, time or reason. They are useful for contrast or when correcting information.",
    blocks: [
      { type: "table", title: "Two common cleft patterns", headings: ["Pattern", "Emphasis", "Example"], rows: [
        ["It + be + focus + who/that-clause", "person / thing / time", "It was Anna who called."], ["What-clause + be + focus", "thing / action / idea", "What I need is a quiet room."],
      ] },
      { type: "text", title: "It-cleft", body: "Use It is/was + the emphasized part + who/that + the rest of the sentence. Use who for a person and that for a thing or time in many common patterns. Match is/was to the time of the original idea.", examples: [
        { text: "Anna called me yesterday. → It was Anna who called me yesterday. (not someone else)" }, { text: "I lost my keys at the station. → It was at the station that I lost my keys." }, { text: "He bought a bicycle. → It was a bicycle that he bought." },
      ] },
      { type: "text", title: "What-cleft", body: "Use What + subject + verb + be + the important information. The what-clause acts as the subject of the sentence. The verb be agrees with the focused information in many examples; singular is common when the focus is a whole action or idea.", examples: [
        { text: "I need a holiday. → What I need is a holiday." }, { text: "She wants to speak to you. → What she wants is to speak to you." }, { text: "He enjoys most is cooking. (incorrect) → What he enjoys most is cooking." },
      ] },
      { type: "text", title: "Use emphasis for a reason", body: "Cleft sentences often answer an implied question or correct a detail. Use them when the emphasis is useful; a simple sentence is usually clearer when no contrast is needed.", examples: [
        { text: "‘Who sent the message?’ — It was Leo who sent it." }, { text: "‘Where did you find it?’ — It was under the sofa that I found it." }, { text: "‘What do you want?’ — What I want is an explanation." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "It was Anna which called.", correct: "It was Anna who called.", explanation: "Use who to emphasize a person." },
        { incorrect: "What I need a holiday.", correct: "What I need is a holiday.", explanation: "A what-cleft needs be between the what-clause and focused information." },
        { incorrect: "It is yesterday that I saw him. (past event)", correct: "It was yesterday that I saw him.", explanation: "Use past be for a past event." },
      ] },
      { type: "tip", title: "Find the focus", body: "Ask what you want the listener to notice: the person, place, time or thing. Put that part after It is/was, or after the What-clause." },
    ],
    review: ["It-cleft: It + be + focus + who/that + clause.", "What-cleft: What + clause + be + focus.", "Use cleft sentences to emphasize or correct one part of a message."],
  },
};
