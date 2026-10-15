import type { GrammarLesson } from "./types";

export const PREPOSITION_LESSONS: Record<string, GrammarLesson> = {
  "prepositions-time": {
    intro: "Prepositions of time show when something happens or how long it lasts. At, on and in are especially common, and several time expressions have no preposition.",
    blocks: [
      { type: "table", title: "At, on and in for time", headings: ["Preposition", "Use", "Examples"], rows: [
        ["at", "clock times and exact points", "at 7:30; at noon; at midnight"], ["on", "days and dates", "on Monday; on 12 May; on my birthday"], ["in", "months, years, seasons and longer periods", "in July; in 2025; in winter; in the morning"],
      ] },
      { type: "text", title: "Other common time prepositions", body: "Use since for the starting point of a period and for for its duration. Use by to mean ‘not later than’; use until to say an action continues up to a time. During means within a period or event.", examples: [
        { text: "I have lived here since 2020." }, { text: "We waited for an hour." }, { text: "Please finish it by Friday." }, { text: "The shop is open until six." }, { text: "I fell asleep during the film." },
      ] },
      { type: "text", title: "Ago, before and after", body: "Ago describes time back from now and follows a time expression. Before and after show that one event is earlier or later than another time or event.", examples: [
        { text: "She moved here two years ago." }, { text: "Please arrive before 9:00." }, { text: "We went for coffee after the lesson." },
      ] },
      { type: "text", title: "No preposition with some expressions", body: "Do not use at, on or in before this, last, next or every with time words. We also say today, tomorrow, yesterday and tonight without a preposition.", examples: [
        { text: "I saw him last week." }, { text: "We meet every Friday." }, { text: "They are leaving tomorrow." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I will see you in Monday.", correct: "I will see you on Monday.", explanation: "Use on with days." },
        { incorrect: "She has worked here since five years.", correct: "She has worked here for five years.", explanation: "Use for with a duration and since with a starting point." },
        { incorrect: "We went there in last summer.", correct: "We went there last summer.", explanation: "Do not use a preposition before last + time period." },
      ] },
      { type: "tip", title: "Think from exact to broad", body: "A helpful guide is at for a point on the clock, on for a day on the calendar, and in for a longer period. Fixed expressions still need to be learned." },
    ],
    review: ["At: clock times; on: days and dates; in: months, years and longer periods.", "For + duration; since + starting point; by = deadline; until = continuing endpoint.", "No preposition before last, next, every, today or tomorrow."],
  },
  "prepositions-place": {
    intro: "Prepositions of place tell us where someone or something is. At, in and on describe location in different ways, while other prepositions explain position and relationships.",
    blocks: [
      { type: "table", title: "At, in and on for place", headings: ["Preposition", "Typical idea", "Example"], rows: [
        ["at", "a point, activity or meeting place", "at the door; at school; at a party"], ["in", "inside an area or enclosed space", "in the room; in a box; in France"], ["on", "a surface or a line", "on the table; on the wall; on the coast"],
      ] },
      { type: "text", title: "Position words", body: "Use words such as under, above, below, behind, in front of, next to, between and opposite to describe a relationship between two places or things. Between is commonly used for two items; among is used within a group.", examples: [
        { text: "The cat is under the chair." }, { text: "The bank is opposite the supermarket." }, { text: "The café is between the bank and the library." }, { text: "She was sitting among her friends." },
      ] },
      { type: "text", title: "Addresses and places", body: "Some choices depend on the kind of place and the idea you want. At often treats a place as a point or activity; in focuses on being inside it. Common expressions include at home, at work, in bed and on a bus.", examples: [
        { text: "I'll meet you at the station. (meeting point)" }, { text: "The passengers are in the station. (inside the building)" }, { text: "He is on the bus." },
      ] },
      { type: "text", title: "Buildings and events", body: "Use at with many institutions and events when you mean the activity or location generally. Use in when you emphasize being physically inside a building or enclosed space.", examples: [
        { text: "The children are at school." }, { text: "The parents are in the school for a meeting." }, { text: "We met at a concert." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "The keys are in the table. (intended: on its surface)", correct: "The keys are on the table.", explanation: "Use on for a surface." },
        { incorrect: "She is on home.", correct: "She is at home.", explanation: "At home is a fixed expression." },
        { incorrect: "The picture is in the wall. (intended: attached to its surface)", correct: "The picture is on the wall.", explanation: "Use on for something attached to the wall's surface." },
      ] },
      { type: "tip", title: "Choose the picture", body: "Ask whether you imagine a point (at), an inside area (in) or a surface/line (on). Then check if the expression is a common fixed phrase." },
    ],
    review: ["At treats a place as a point or activity; in focuses on inside; on describes a surface or line.", "Position prepositions show where something is in relation to something else.", "Some place phrases are fixed, such as at home, at work and on a bus."],
  },
  "prepositions-movement": {
    intro: "Movement prepositions describe direction, destination or the path that someone or something follows. The choice depends on where movement starts and ends.",
    blocks: [
      { type: "table", title: "Direction and path", headings: ["Preposition", "Meaning", "Example"], rows: [
        ["to", "destination", "We walked to the station."], ["into", "movement from outside to inside", "She went into the room."], ["onto", "movement to a surface", "The cat jumped onto the table."], ["through", "from one side/part to another inside", "They drove through the tunnel."], ["across", "from one side to the other over an open area", "We walked across the bridge."], ["along", "following a line or route", "Walk along this street."],
      ] },
      { type: "text", title: "To, into and onto", body: "Use to for a destination in general. Use into when the movement ends inside something and onto when it ends on a surface. In and on describe location and do not, by themselves, show movement.", examples: [
        { text: "He went to the kitchen." }, { text: "He walked into the kitchen." }, { text: "Put the book onto the shelf." }, { text: "The book is on the shelf." },
      ] },
      { type: "text", title: "Through, across and over", body: "Through describes movement inside a space from one side to another. Across describes movement from one side of a surface or area to the other. Over means above something, often from one side to another or across its top.", examples: [
        { text: "The path goes through the forest." }, { text: "They swam across the river." }, { text: "The plane flew over the mountains." },
      ] },
      { type: "text", title: "From and out of", body: "Use from to name a starting point. Use out of for movement from inside to outside. Off describes movement away from a surface; past means by and beyond a place.", examples: [
        { text: "The train came from Warsaw." }, { text: "She ran out of the house." }, { text: "He stepped off the bus and walked past the shop." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She walked in the room. (intended: movement from outside to inside)", correct: "She walked into the room.", explanation: "Use into to show movement across the boundary into a place." },
        { incorrect: "We drove across the tunnel.", correct: "We drove through the tunnel.", explanation: "Use through for movement inside a tunnel." },
        { incorrect: "He jumped in the table. (intended: movement to the surface)", correct: "He jumped onto the table.", explanation: "Use onto for movement ending on a surface." },
      ] },
      { type: "tip", title: "Location or movement?", body: "Use in/on for a location: in the room, on the roof. Use into/onto when the action shows movement to that position." },
    ],
    review: ["To gives a destination; into/onto show movement inside or onto a surface.", "Through is inside a space; across is from one side of an area to another.", "From, out of, off and past describe starting point or direction away."],
  },
  "at-in-on": {
    intro: "At, in and on are used for both time and place. Their basic ideas can help, but many expressions are fixed and should be learned as phrases.",
    blocks: [
      { type: "table", title: "Time", headings: ["At", "On", "In"], rows: [
        ["at 8:00; at night; at the weekend (BrE)", "on Tuesday; on 4 May; on my birthday", "in July; in 2026; in winter; in the morning"],
      ] },
      { type: "table", title: "Place", headings: ["At", "On", "In"], rows: [
        ["at the bus stop; at the entrance; at home", "on the floor; on the left; on the coast", "in a room; in a city; in a country"],
      ] },
      { type: "text", title: "The basic picture", body: "At often treats a time or place as a point. On often refers to a day or a surface. In often refers to a longer period or an enclosed area. Use this as a guide, not an absolute rule.", examples: [
        { text: "Meet me at the café at six." }, { text: "The notice is on the door." }, { text: "We arrived in the evening." },
      ] },
      { type: "text", title: "Common contrasts", body: "Some phrases change with the meaning: at school means attending or being at the school as an activity; in the school emphasizes inside the building. At the corner can mean a meeting point; on the corner describes a building's position.", examples: [
        { text: "My son is at school." }, { text: "I left my umbrella in the school." }, { text: "The shop is on the corner." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "My birthday is in Friday.", correct: "My birthday is on Friday.", explanation: "Use on with days." },
        { incorrect: "The meeting begins on 10:30.", correct: "The meeting begins at 10:30.", explanation: "Use at with a clock time." },
        { incorrect: "She lives at Spain.", correct: "She lives in Spain.", explanation: "Use in with countries and cities." },
      ] },
      { type: "tip", title: "Learn fixed phrases", body: "Memorize useful chunks such as at night, in the morning, on Monday, at home and on the bus. The general picture helps, but fixed expressions are common." },
    ],
    review: ["Time: at a clock time, on a day/date, in a month/year/longer period.", "Place: at a point, on a surface, in an enclosed area.", "Some choices depend on meaning or a fixed expression."],
  },
  "prepositions-after-verbs": {
    intro: "Some verbs are normally followed by a particular preposition before their object. These combinations are often fixed, so learn the verb and preposition together.",
    blocks: [
      { type: "table", title: "Common verb + preposition pairs", headings: ["Verb phrase", "Example"], rows: [
        ["listen to", "I listen to podcasts on the bus."], ["wait for", "We are waiting for the next train."], ["depend on", "It depends on the weather."], ["belong to", "This bag belongs to my sister."], ["look at", "Look at the first picture."], ["talk about", "They talked about their holiday."], ["agree with", "I agree with your idea."], ["pay for", "He paid for lunch."],
      ] },
      { type: "text", title: "Keep the preposition", body: "The preposition stays after the verb, even when the object is a pronoun. Do not remove it just because a similar verb in another language does not use one.", examples: [
        { text: "I agree with them." }, { text: "She is looking at it." }, { text: "We waited for him." },
      ] },
      { type: "text", title: "Verb + object + preposition", body: "Some verbs take an object before a second preposition: remind someone of something, invite someone to an event, or provide someone with something. Learn the full pattern.", examples: [
        { text: "This song reminds me of my childhood." }, { text: "They invited us to the wedding." }, { text: "The hotel provided guests with towels." },
      ] },
      { type: "text", title: "A verb can take different prepositions", body: "The preposition may change the meaning or the relationship. For example, talk to someone focuses on the person you speak with; talk about something names the topic.", examples: [
        { text: "I talked to my manager about the schedule." }, { text: "She apologised to him for the delay." }, { text: "They argued with their neighbour about the fence." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "We discussed about the plan.", correct: "We discussed the plan. / We talked about the plan.", explanation: "Discuss takes a direct object without about; talk uses about for a topic." },
        { incorrect: "I am waiting the bus.", correct: "I am waiting for the bus.", explanation: "Wait is followed by for before the thing or person expected." },
        { incorrect: "This depends of the price.", correct: "This depends on the price.", explanation: "The fixed combination is depend on." },
      ] },
      { type: "tip", title: "Write the whole pattern", body: "When learning a verb, note its preposition and the next structure: listen to music; remind someone of something; provide someone with something." },
    ],
    review: ["Many verbs take a fixed preposition before an object.", "Keep the preposition before pronouns too: listen to it, agree with them.", "Learn full patterns; a different preposition or no preposition can change the grammar."],
  },
  "prepositions-after-adjectives": {
    intro: "Many adjectives are followed by a particular preposition before a noun, pronoun or gerund. The combination is often fixed and is best learned as a phrase.",
    blocks: [
      { type: "table", title: "Common adjective + preposition pairs", headings: ["Adjective + preposition", "Example"], rows: [
        ["afraid of", "He is afraid of spiders."], ["good at", "She is good at drawing."], ["interested in", "I am interested in history."], ["proud of", "They are proud of their daughter."], ["worried about", "We are worried about the exam."], ["different from", "This version is different from mine."], ["kind to", "Please be kind to the new student."], ["responsible for", "She is responsible for the budget."],
      ] },
      { type: "text", title: "A noun, pronoun or -ing form", body: "After the preposition, use a noun or object pronoun. If you need another verb, use its -ing form because it follows a preposition.", examples: [
        { text: "I'm excited about the trip." }, { text: "She's angry with me." }, { text: "He's interested in learning French." },
      ] },
      { type: "text", title: "People and things", body: "Some adjectives use different prepositions depending on whether the object is a person or a thing. For example, angry with someone/about something and pleased with a result/for someone.", examples: [
        { text: "I am angry with my brother about the mess." }, { text: "We are pleased with the result." }, { text: "I am pleased for you." },
      ] },
      { type: "text", title: "Adjective plus to-infinitive", body: "Do not use a preposition when the adjective is followed directly by a to-infinitive in a pattern such as happy to help or easy to use. Compare interested in helping, where in is a preposition.", examples: [
        { text: "I'm happy to help." }, { text: "This app is easy to use." }, { text: "I'm interested in helping." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She is good in maths.", correct: "She is good at maths.", explanation: "The usual combination for skill is good at." },
        { incorrect: "I am interested to learn more. (intended: interested in the activity)", correct: "I am interested in learning more.", explanation: "Use in + gerund after interested when naming an activity." },
        { incorrect: "He is married with a doctor.", correct: "He is married to a doctor.", explanation: "The standard phrase is married to someone." },
      ] },
      { type: "tip", title: "Learn adjective phrases", body: "Keep the adjective and preposition together in your notes: proud of, worried about, good at. Add an example with a noun and one with -ing if possible." },
    ],
    review: ["Many adjectives take a fixed preposition.", "Use a noun, pronoun or gerund after the preposition.", "Some adjective patterns take a to-infinitive directly and have no preposition."],
  },
  "prepositions-after-nouns": {
    intro: "Some nouns are commonly followed by a particular preposition. The preposition introduces more information about the noun, such as its cause, topic or connection.",
    blocks: [
      { type: "table", title: "Common noun + preposition pairs", headings: ["Noun phrase", "Example"], rows: [
        ["reason for", "What's the reason for the delay?"], ["solution to", "We found a solution to the problem."], ["interest in", "Her interest in science began at school."], ["need for", "There is a need for more space."], ["answer to", "Do you know the answer to this question?"], ["invitation to", "Thanks for the invitation to your party."], ["difference between", "Can you explain the difference between these words?"], ["increase/decrease in", "There was an increase in sales."],
      ] },
      { type: "text", title: "Add a noun or gerund", body: "A noun after the preposition can be followed by another noun phrase. If you want to use a verb after the preposition, use the gerund form.", examples: [
        { text: "The reason for the change is unclear." }, { text: "There is no excuse for arriving late." }, { text: "They discussed the possibility of moving abroad." },
      ] },
      { type: "text", title: "Noun patterns with to", body: "Some nouns are followed by to, but the grammar after to depends on its role. As a preposition it takes a noun or gerund (the solution to a problem; the key to learning). In a to-infinitive, it takes a base verb (a chance to learn).", examples: [
        { text: "the key to success" }, { text: "the key to understanding the topic" }, { text: "a chance to understand the topic" },
      ] },
      { type: "text", title: "Learn the whole phrase", body: "A noun may take a different preposition from a related verb or adjective. Learn the noun phrase itself rather than guessing from a translation.", examples: [
        { text: "to depend on something → dependence on something" }, { text: "to be interested in → an interest in" }, { text: "to explain something to someone → an explanation of something" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "the reason of the problem", correct: "the reason for the problem", explanation: "The usual phrase is reason for." },
        { incorrect: "a solution of the issue", correct: "a solution to the issue", explanation: "The common combination is solution to." },
        { incorrect: "the key to understand this", correct: "the key to understanding this", explanation: "Here to is a preposition after key, so use a gerund." },
      ] },
      { type: "tip", title: "Notice ‘to’", body: "After a noun, ask whether to is a preposition or the start of an infinitive. A preposition takes a noun or -ing; an infinitive takes the base verb." },
    ],
    review: ["Nouns can take fixed prepositions such as reason for and solution to.", "Use a gerund after a preposition: a reason for leaving.", "To can be a preposition or an infinitive marker; check the word pattern."],
  },
  "sentence-final-prepositions": {
    intro: "In natural English, a preposition can appear at the end of a question or relative clause when its object comes earlier in the sentence. This is common in conversation and is not a grammar error.",
    blocks: [
      { type: "text", title: "Questions", body: "When a question word is the object of a preposition, the preposition often stays at the end. This is the usual conversational pattern. A more formal structure can put the preposition before whom or which.", examples: [
        { text: "Who are you talking to? (common and natural)" }, { text: "What are you looking at?" }, { text: "To whom are you speaking? (formal)" },
      ] },
      { type: "text", title: "Relative clauses", body: "In a relative clause, the object can move to the beginning with who/which/that, leaving the preposition at the end. In formal writing, the preposition can come before whom or which; that is not used after a fronted preposition.", examples: [
        { text: "The person who I spoke to was helpful." }, { text: "The person to whom I spoke was helpful. (formal)" }, { text: "The chair that she sat on is broken." },
      ] },
      { type: "text", title: "Phrasal verbs and fixed patterns", body: "Some verbs and phrasal verbs naturally end with a particle or preposition when the object is a question word or relative pronoun. Keep the particle as part of the expression.", examples: [
        { text: "Which hotel did you stay at?" }, { text: "That is the topic we talked about." }, { text: "What are you waiting for?" },
      ] },
      { type: "text", title: "Avoid unnecessary movement", body: "Do not move a preposition to the beginning just to sound formal if the result is awkward. The end position is standard in ordinary conversation and much everyday writing.", examples: [
        { text: "Who did you send the email to? (natural)" }, { text: "To whom did you send the email? (formal)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Who are you waiting?", correct: "Who are you waiting for?", explanation: "Wait needs the preposition for before its object." },
        { incorrect: "To who did you speak? (formal style)", correct: "To whom did you speak?", explanation: "After a preposition in formal English, use whom for a person." },
        { incorrect: "The topic about which we talked about was interesting.", correct: "The topic about which we talked was interesting. / The topic we talked about was interesting.", explanation: "Use the preposition once, either before which or at the end." },
      ] },
      { type: "tip", title: "Choose the register", body: "For everyday English, a final preposition is usually the clearest choice. Put it before whom or which for a formal style, and remove the duplicate at the end." },
    ],
    review: ["A preposition at the end of a question or relative clause is natural English.", "The formal alternative places it before whom or which.", "Use the preposition once; avoid duplicating it."],
  },
  "prepositional-phrases": {
    intro: "A prepositional phrase begins with a preposition and includes its object. It can show place, time, direction, manner or a relationship, and it can give extra information about a noun or verb.",
    blocks: [
      { type: "text", title: "Parts of the phrase", body: "A prepositional phrase contains a preposition and its object, which is usually a noun phrase or pronoun. The object can have words before it, such as an article and adjective.", examples: [
        { text: "under the old bridge (preposition + noun phrase)" }, { text: "with her (preposition + pronoun)" }, { text: "after eating lunch (preposition + gerund phrase)" },
      ] },
      { type: "table", title: "What prepositional phrases can show", headings: ["Meaning", "Phrase", "Example"], rows: [
        ["Place", "near the window", "The chair is near the window."], ["Time", "after lunch", "We can meet after lunch."], ["Direction", "towards the station", "They walked towards the station."], ["Manner / means", "by hand", "The card was made by hand."], ["Relationship", "of my friend", "That is a photo of my friend."],
      ] },
      { type: "text", title: "Modify a noun or a verb", body: "A prepositional phrase after a noun often tells us which person or thing we mean. A phrase connected to a verb often gives information about place, time or other circumstances.", examples: [
        { text: "The book on the desk is mine. (which book?)" }, { text: "We had lunch in the garden. (where?)" }, { text: "The woman with curly hair is our teacher. (which woman?)" },
      ] },
      { type: "text", title: "More than one phrase", body: "A sentence can contain several prepositional phrases. Put them where their relationship is clear, and avoid adding so many that the main idea becomes difficult to follow.", examples: [
        { text: "We met at the café after class." }, { text: "The keys in the drawer by the door are yours." }, { text: "She walked from her office to the station before sunset." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She is interested on art.", correct: "She is interested in art.", explanation: "The preposition is part of the phrase interested in." },
        { incorrect: "We discussed about the new plan.", correct: "We discussed the new plan.", explanation: "Discuss is a verb with a direct object, not a prepositional phrase in this pattern." },
        { incorrect: "I enjoy to walk after the lunch.", correct: "I enjoy walking after lunch.", explanation: "Use a gerund after a preposition and normally omit the before meals in a general sense." },
      ] },
      { type: "tip", title: "Find the object", body: "To identify a prepositional phrase, locate the preposition and ask ‘what?’ or ‘whom?’ after it: under what? the bridge; with whom? her." },
    ],
    review: ["A prepositional phrase is a preposition plus its object and related words.", "It can show place, time, direction, manner or relationships.", "It can modify a noun or add details to a verb or sentence."],
  },
};
