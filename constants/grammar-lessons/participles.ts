import type { GrammarLesson } from "./types";

export const PARTICIPLE_LESSONS: Record<string, GrammarLesson> = {
  "present-participles": {
    intro: "The present participle is the -ing form of a verb. It appears in continuous tenses, can describe a noun and can begin a participle clause.",
    blocks: [
      { type: "text", title: "Form the present participle", body: "Add -ing to the base verb. For many verbs ending in silent e, drop the e; change -ie to y; and double the final consonant in some short stressed verbs. There are spelling exceptions, so check a word when unsure.", examples: [
        { text: "work → working; go → going" }, { text: "write → writing; make → making" }, { text: "lie → lying; sit → sitting" },
      ] },
      { type: "table", title: "Three common uses", headings: ["Use", "Pattern", "Example"], rows: [
        ["Continuous tense", "be + -ing", "They are waiting for the bus."], ["Adjective", "-ing form before/after a noun", "It was an interesting story."], ["Participle clause", "-ing phrase + main clause", "Walking home, I called my sister."],
      ] },
      { type: "text", title: "Present participle or gerund?", body: "Both use the -ing form, but their jobs differ. A present participle is part of a verb or describes a noun. A gerund acts like a noun and can be a subject or the object of a verb or preposition.", examples: [
        { text: "The baby is sleeping. (continuous verb)" }, { text: "The sleeping baby looks peaceful. (describes baby)" }, { text: "Sleeping is important. (gerund subject)" },
      ] },
      { type: "text", title: "Active meaning", body: "An -ing participle often has an active meaning: the person or thing it describes does the action. Compare it with a past participle, which often has a passive or completed meaning.", examples: [
        { text: "The man carrying a suitcase is my uncle. (he carries it)" }, { text: "The suitcase carried by the man is heavy. (it is carried)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She is interesting in music.", correct: "She is interested in music.", explanation: "Interested describes how she feels; interesting describes something that creates interest." },
        { incorrect: "The man stand at the door is my teacher.", correct: "The man standing at the door is my teacher.", explanation: "Use the -ing participle to describe what the man is doing." },
        { incorrect: "I enjoy to swimming.", correct: "I enjoy swimming.", explanation: "Here swimming is a gerund after enjoy, not a continuous participle." },
      ] },
      { type: "tip", title: "Look at the job", body: "Ask what the -ing word does. Is it part of be + verb, describing a noun, or naming an activity? The spelling is the same, but the grammar is different." },
    ],
    review: ["The present participle is the -ing form.", "Use it in continuous tenses, as an adjective, or in a participle clause.", "An -ing form can also be a gerund; identify its job in the sentence."],
  },
  "past-participles": {
    intro: "The past participle is a verb form used in perfect tenses, passive sentences and some descriptions. Regular verbs usually end in -ed; irregular forms must be learned.",
    blocks: [
      { type: "table", title: "Regular and irregular forms", headings: ["Base verb", "Past simple", "Past participle"], rows: [
        ["work", "worked", "worked"], ["study", "studied", "studied"], ["stop", "stopped", "stopped"], ["go", "went", "gone"], ["write", "wrote", "written"], ["break", "broke", "broken"], ["see", "saw", "seen"],
      ] },
      { type: "text", title: "Perfect tenses", body: "Use have/has + past participle for the present perfect and had + past participle for the past perfect. The participle does not change for different subjects.", examples: [
        { text: "I have finished my homework." }, { text: "She has gone to the shop." }, { text: "They had eaten before we arrived." },
      ] },
      { type: "text", title: "Passive voice", body: "Form the passive with be + past participle. The tense appears on be; the past participle stays after it. Use the past participle even when the verb is irregular.", examples: [
        { text: "The window was broken during the storm." }, { text: "These phones are made in Korea." }, { text: "The email has been sent." },
      ] },
      { type: "text", title: "Past participles as adjectives", body: "Some past participles describe a state or feeling, often after be or before a noun. Their meaning is often passive or the result of an action. The exact meaning depends on the adjective and context.", examples: [
        { text: "We were bored during the long lecture." }, { text: "The door is closed." }, { text: "I read a translated article." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I have went there before.", correct: "I have been there before.", explanation: "Use the past participle after have; go → went → gone." },
        { incorrect: "The letter was wrote yesterday.", correct: "The letter was written yesterday.", explanation: "Use the past participle in the passive; write → wrote → written." },
        { incorrect: "She has saw that film.", correct: "She has seen that film.", explanation: "The past participle of see is seen, not saw." },
      ] },
      { type: "tip", title: "Learn three forms", body: "For an irregular verb, learn base form, past simple and past participle as a set: take–took–taken; bring–brought–brought." },
    ],
    review: ["Regular past participles usually end in -ed; irregular forms vary.", "Use have + participle for perfect tenses and be + participle for passive forms.", "Do not confuse the past simple with the past participle."],
  },
  "perfect-participles": {
    intro: "A perfect participle shows that one action was completed before another action. The active form is having + past participle; the passive form is having been + past participle.",
    blocks: [
      { type: "text", title: "Active form: having done", body: "Use having + past participle when the subject completed one action before the main action. This form is more common in formal writing than in everyday conversation; a clause with after is often simpler.", examples: [
        { text: "Having finished her work, Maya went home." }, { text: "Having eaten lunch, we returned to the museum." }, { text: "After Maya had finished her work, she went home. (same sequence, explicit clause)" },
      ] },
      { type: "text", title: "Passive form: having been done", body: "Use having been + past participle when the subject received the earlier action. The subject of the perfect participle must be the same as the subject of the main clause.", examples: [
        { text: "Having been invited to the event, we bought new clothes." }, { text: "Having been warned about the ice, the drivers moved slowly." },
      ] },
      { type: "table", title: "Sequence of actions", headings: ["Earlier action", "Later action", "Participle sentence"], rows: [
        ["She packed her bag.", "She left the hotel.", "Having packed her bag, she left the hotel."], ["They completed the project.", "They celebrated.", "Having completed the project, they celebrated."],
      ] },
      { type: "text", title: "Punctuation and subject", body: "A perfect participle clause often comes first and is followed by a comma. It can also come after the main clause. In either position, both actions must belong to the same understood subject.", examples: [
        { text: "Having checked the tickets, we went inside." }, { text: "We went inside, having checked the tickets." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Having finished the test, the bell rang.", correct: "Having finished the test, I heard the bell ring.", explanation: "The person who finished the test must also be the subject of the main clause." },
        { incorrect: "Having ate dinner, we watched a film.", correct: "Having eaten dinner, we watched a film.", explanation: "Use the past participle after having: eat → eaten." },
        { incorrect: "Having been finish the work, she left.", correct: "Having finished the work, she left.", explanation: "Use the active form having + past participle when she did the work." },
      ] },
      { type: "tip", title: "Check who did it", body: "Name the subject of the main clause first. Then check that this same person or thing completed the earlier action in the participle phrase." },
    ],
    review: ["Active: having + past participle; passive: having been + past participle.", "The perfect participle marks an earlier completed action.", "Its understood subject must match the subject of the main clause."],
  },
  "participial-adjectives": {
    intro: "Participial adjectives come from -ing or past participle forms. Many -ing adjectives describe what causes a feeling; many -ed adjectives describe the person or thing that experiences the feeling.",
    blocks: [
      { type: "table", title: "Cause and feeling", headings: ["-ing adjective", "-ed adjective", "Example"], rows: [
        ["boring", "bored", "The lesson is boring. The students are bored."], ["exciting", "excited", "The trip is exciting. We are excited."], ["tiring", "tired", "The work is tiring. I feel tired."], ["confusing", "confused", "The directions are confusing. I am confused."], ["surprising", "surprised", "The news was surprising. She was surprised."],
      ] },
      { type: "text", title: "Who causes the feeling?", body: "Use an -ing adjective for a person, thing or situation that causes a reaction. Use an -ed adjective for someone who feels or experiences that reaction. The noun itself can also take an -ed adjective when it has been affected, as in a broken window.", examples: [
        { text: "The film was frightening, so the children felt frightened." }, { text: "I am interested in the story; it is interesting." }, { text: "The damaged road is closed." },
      ] },
      { type: "text", title: "Position and linking verbs", body: "Like other adjectives, participial adjectives can come before a noun or after a linking verb such as be, feel, seem or look. Use very with many of these adjectives; use the adjective form that matches the meaning.", examples: [
        { text: "We watched an exciting match." }, { text: "The players looked exhausted." }, { text: "I was very surprised by the result." },
      ] },
      { type: "text", title: "Not all pairs describe feelings", body: "Some -ing/-ed pairs describe other relationships or states, not simply a person’s emotion: a growing city is becoming larger; a grown child has reached adulthood. Learn common pairs in context.", examples: [
        { text: "a growing problem / a grown child" }, { text: "falling leaves / fallen leaves" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I am boring in this class. (intended: I feel no interest)", correct: "I am bored in this class.", explanation: "Bored describes the feeling; boring describes something that causes it." },
        { incorrect: "The children were exciting about the trip.", correct: "The children were excited about the trip.", explanation: "Use excited for how the children feel." },
        { incorrect: "It was a very amazed result.", correct: "It was a very amazing result. / We were very amazed.", explanation: "The result causes amazement; people feel amazed." },
      ] },
      { type: "tip", title: "Ask ‘cause or feeling?’", body: "For common emotion pairs, ask whether the subject causes the feeling (-ing) or experiences it (-ed): The game is exciting; I am excited." },
    ],
    review: ["Many -ing adjectives describe a cause; many -ed adjectives describe a feeling or affected state.", "Participial adjectives behave like other adjectives in a sentence.", "Check meaning: not every -ing/-ed pair is simply cause versus emotion."],
  },
  "participial-clauses": {
    intro: "A participle clause is a shortened phrase that adds information about a person, thing or action. Its understood subject normally matches the subject of the main clause.",
    blocks: [
      { type: "text", title: "An -ing clause", body: "Use an -ing participle clause when its subject actively does the action. It can describe a noun or provide extra information about the subject of the main clause.", examples: [
        { text: "The woman carrying a red bag is my aunt." }, { text: "Walking through the park, I saw a fox." }, { text: "The students waiting outside are in my class." },
      ] },
      { type: "text", title: "A past participle clause", body: "Use a past participle clause when the noun or subject receives an action or has a resulting state. It often has a passive meaning and can shorten a relative clause.", examples: [
        { text: "The letters sent yesterday have arrived." }, { text: "Built in 1905, the bridge is still in use." }, { text: "The cake made by my sister was delicious." },
      ] },
      { type: "table", title: "Full clause and shorter clause", headings: ["Full form", "Participle form", "Relationship"], rows: [
        ["The girl who is sitting by the window is Ana.", "The girl sitting by the window is Ana.", "active; she sits"], ["The photos that were taken on holiday are here.", "The photos taken on holiday are here.", "passive; someone took them"],
      ] },
      { type: "text", title: "Position and punctuation", body: "A participle clause can come before the main clause with a comma, or directly after the noun it describes. Use a comma for extra introductory information. The phrase must clearly refer to the right person or thing.", examples: [
        { text: "Feeling tired, Leo went to bed early." }, { text: "Leo went to bed early, feeling tired." }, { text: "The people invited to the wedding are arriving." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Walking to school, the rain started.", correct: "Walking to school, I got caught in the rain.", explanation: "The rain did not walk; the understood subject must match the main clause." },
        { incorrect: "The man talking to is my neighbour.", correct: "The man talking to me is my neighbour.", explanation: "Include the needed object after talking to." },
        { incorrect: "The book writing by Mia is popular.", correct: "The book written by Mia is popular.", explanation: "The book receives the action, so use the past participle written." },
      ] },
      { type: "tip", title: "Find the hidden subject", body: "For an opening participle phrase, ask ‘Who is doing or experiencing this?’ The answer should also be the subject of the main clause." },
    ],
    review: ["Use -ing for an active action and a past participle for a passive or resulting meaning.", "Participle clauses can shorten some relative clauses or add context.", "Check that the phrase clearly connects to the correct noun or main-clause subject."],
  },
  "reduced-relative-clauses": {
    intro: "Some relative clauses can be shortened by removing the relative pronoun and a form of be. The shorter phrase must still describe the same noun clearly.",
    blocks: [
      { type: "table", title: "Common reductions", headings: ["Full relative clause", "Reduced form", "Meaning"], rows: [
        ["the woman who is waiting", "the woman waiting", "she is waiting (active)"], ["the people who live next door", "the people living next door", "they live there (active; ongoing/general)"], ["the meal that was prepared by Leo", "the meal prepared by Leo", "someone prepared it (passive)"], ["the documents which were sent yesterday", "the documents sent yesterday", "someone sent them (passive)"],
      ] },
      { type: "text", title: "Active meaning: -ing", body: "When the noun does the action, a relative clause with who/which + be + -ing can often be shortened to an -ing phrase. Some active clauses without be can also reduce, especially when they describe a continuing situation.", examples: [
        { text: "The boy who is wearing a blue coat is my brother." }, { text: "The boy wearing a blue coat is my brother." }, { text: "People living in this area can use the park." },
      ] },
      { type: "text", title: "Passive meaning: past participle", body: "When the noun receives the action, a passive relative clause with who/which/that + be + past participle can often be reduced to the past participle phrase.", examples: [
        { text: "The paintings that were stolen last year have been found." }, { text: "The paintings stolen last year have been found." }, { text: "The food served here is fresh." },
      ] },
      { type: "text", title: "When you cannot reduce", body: "Do not remove a relative pronoun when it is the object of the clause and the result would be unclear or ungrammatical. A defining relative clause with a main verb (not be) usually cannot be shortened by simply deleting who/that.", examples: [
        { text: "The person who called you is here. (not: the person called you is here; that changes the meaning)" }, { text: "The person I called is here. (object pronoun omitted in a full relative clause)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "The woman standing there she is our guide.", correct: "The woman standing there is our guide.", explanation: "The participle phrase already describes the subject; do not repeat it with she." },
        { incorrect: "The article wrote by Sam was useful.", correct: "The article written by Sam was useful.", explanation: "Use the past participle in a passive reduced relative clause." },
        { incorrect: "The man lives upstairs is a chef. (reduced by deleting only who)", correct: "The man who lives upstairs is a chef. / The man living upstairs is a chef.", explanation: "Do not simply remove who before a finite verb; use a suitable -ing reduction or keep the full clause." },
      ] },
      { type: "tip", title: "Active or passive?", body: "Ask whether the noun does the action or receives it. Use -ing when it does the action (a student asking a question); use a past participle when the action is done to it (a question asked by a student)." },
    ],
    review: ["Reduce some relative clauses by removing a relative pronoun and be.", "Use -ing for active meaning and a past participle for passive meaning.", "Do not delete who/that before a finite verb unless the grammar allows it."],
  },
  "participle-clauses-cause-time-result": {
    intro: "Participle clauses can show a reason, time relationship or result. They make writing shorter, but the understood subject must be clear and normally match the subject of the main clause.",
    blocks: [
      { type: "table", title: "Meaning and form", headings: ["Meaning", "Common form", "Example"], rows: [
        ["Cause / reason", "-ing", "Knowing the area well, she showed us the way."], ["Time / simultaneous action", "-ing", "Crossing the road, he saw an old friend."], ["Earlier completed action", "having + past participle", "Having finished dinner, they went for a walk."], ["Passive reason or time", "past participle", "Asked about the delay, he explained the problem."], ["Result", "-ing phrase after a clause", "The ball hit the window, breaking the glass."],
      ] },
      { type: "text", title: "Cause and time", body: "An opening -ing phrase can give the reason for an action or describe an action happening at the same time. The exact relationship comes from context. Use a past participle when the subject receives the action.", examples: [
        { text: "Feeling ill, Eva stayed at home. (reason)" }, { text: "Waiting for the bus, I read the news. (same time)" }, { text: "Invited to the party, we bought a gift. (passive)" },
      ] },
      { type: "text", title: "Earlier action", body: "Use having + past participle to make it clear that an action finished before the main action. For a passive earlier action, use having been + past participle. These forms are more formal; an after-clause is often easier in conversation.", examples: [
        { text: "Having locked the door, Sam left the house." }, { text: "Having been told the news, I called my family." }, { text: "After Sam had locked the door, he left." },
      ] },
      { type: "text", title: "Result", body: "A participle phrase after the main clause can show a result or next effect. Use the -ing form when the result follows from the main action. Do not use this pattern if the connection between the actions is unclear.", examples: [
        { text: "The storm damaged several roofs, leaving many homes without power." }, { text: "She dropped the glass, breaking it into pieces." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Driving home, the traffic was terrible.", correct: "Driving home, I found the traffic terrible. / The traffic was terrible as I drove home.", explanation: "The traffic was not driving; make the phrase's subject clear." },
        { incorrect: "Having finish the work, he went home.", correct: "Having finished the work, he went home.", explanation: "Use a past participle after having." },
        { incorrect: "The car hit the wall, damaging by the crash.", correct: "The car hit the wall, damaging it. / The wall was damaged by the crash.", explanation: "Use an active -ing form for a result, or a full passive clause for what was affected." },
      ] },
      { type: "tip", title: "Check time and subject", body: "Decide whether the phrase shows a reason, same-time action, earlier action or result. Then check that its implied subject matches the person or thing in the main clause." },
    ],
    review: ["-ing can show cause or a simultaneous action; context tells which.", "Having + past participle shows an earlier completed action.", "Participle clauses must connect logically to the main clause subject."],
  },
};
