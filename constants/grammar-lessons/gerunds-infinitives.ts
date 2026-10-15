import type { GrammarLesson } from "./types";

export const GERUND_INFINITIVE_LESSONS: Record<string, GrammarLesson> = {
  "gerunds-verb-ing": {
    intro: "A gerund is the -ing form of a verb used like a noun. It can name an activity, act as the subject or object of a sentence, and follow some verbs and prepositions.",
    blocks: [
      { type: "text", title: "Form the -ing form", body: "Usually add -ing to the base verb. Drop a silent final e (write → writing), change -ie to y (lie → lying), and double a final consonant in some short stressed verbs (sit → sitting). These spelling changes do not change the meaning of the verb.", examples: [
        { text: "read → reading; play → playing" }, { text: "make → making; dance → dancing" }, { text: "lie → lying; run → running" },
      ] },
      { type: "text", title: "Gerunds as subjects and objects", body: "A gerund phrase can be the subject of a sentence. A gerund can also be the object of a verb that allows an -ing form. When an activity is the subject, it usually takes a singular verb.", examples: [
        { text: "Learning a language takes time." }, { text: "I enjoy cooking for my friends." }, { text: "They finished packing their bags." },
      ] },
      { type: "table", title: "Common uses", headings: ["Use", "Pattern", "Example"], rows: [
        ["Subject", "Gerund phrase + verb", "Cycling is good exercise."],
        ["After certain verbs", "verb + gerund", "We avoid driving at night."],
        ["After a preposition", "preposition + gerund", "She is interested in painting."],
        ["After a phrasal verb", "phrasal verb + gerund", "He gave up smoking."],
      ] },
      { type: "text", title: "Gerund or continuous verb?", body: "The -ing form is not always a gerund. In a continuous verb form, be + -ing describes an action in progress. In a gerund phrase, the -ing form names an activity.", examples: [
        { text: "Swimming is relaxing.", note: "Swimming names an activity; it is the subject." },
        { text: "They are swimming now.", note: "are swimming is a present continuous verb." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I enjoy to cook.", correct: "I enjoy cooking.", explanation: "Enjoy is followed by a gerund." },
        { incorrect: "To learn English take time.", correct: "Learning English takes time.", explanation: "A gerund phrase as the subject takes a singular verb." },
        { incorrect: "She is good at to draw.", correct: "She is good at drawing.", explanation: "Use a gerund after the preposition at." },
      ] },
      { type: "tip", title: "Learn the pattern", body: "The spelling -ing does not tell you which form to choose after a verb. Learn useful combinations together: enjoy doing, want to do, be good at doing." },
    ],
    review: ["A gerund is an -ing verb form used like a noun.", "It can be a subject or follow certain verbs and prepositions.", "Be + -ing can instead form a continuous tense."],
  },
  "infinitives-to-verb": {
    intro: "A to-infinitive is to + the base form of a verb. It commonly follows certain verbs, explains a purpose, or completes an adjective expression.",
    blocks: [
      { type: "text", title: "Form", body: "Use to + base verb. Do not add -s or -ed to the verb after to. To stays before the verb even when the subject changes.", examples: [
        { text: "I hope to visit Rome." }, { text: "She wants to learn Spanish." }, { text: "They decided to leave early." },
      ] },
      { type: "table", title: "Common uses", headings: ["Use", "Pattern", "Example"], rows: [
        ["After certain verbs", "verb + to-infinitive", "He plans to study tonight."],
        ["Purpose (why?)", "to + base verb", "We went out to buy bread."],
        ["After an adjective", "adjective + to-infinitive", "I am happy to help."],
        ["After question words", "what/how/where + to-infinitive", "She knows how to use the app."],
      ] },
      { type: "text", title: "Infinitives with an object", body: "Some verbs can take an object before the to-infinitive. The object is the person who will do the infinitive action. Common patterns include want someone to do something and ask someone to do something.", examples: [
        { text: "I want you to meet my sister." }, { text: "The teacher asked us to open our books." }, { text: "They told him not to worry." },
      ] },
      { type: "text", title: "Negative form", body: "Put not before the to-infinitive to make it negative. In a purpose phrase, not to means ‘in order not to’.", examples: [
        { text: "She promised not to tell anyone." }, { text: "I left early not to miss the train." }, { text: "We took a taxi in order not to be late." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "He decided going home.", correct: "He decided to go home.", explanation: "Decide is followed by a to-infinitive." },
        { incorrect: "She wants to studies medicine.", correct: "She wants to study medicine.", explanation: "Use the base verb after to." },
        { incorrect: "I went to the shop for buy milk.", correct: "I went to the shop to buy milk.", explanation: "Use a to-infinitive to explain the purpose of an action." },
      ] },
      { type: "tip", title: "Purpose or destination?", body: "In ‘I went to the shop to buy milk’, the first to is a preposition of direction and the second to begins an infinitive of purpose." },
    ],
    review: ["Form: to + base verb.", "Use it after verbs such as want, hope and decide, and to explain purpose.", "Put an object before it in patterns like ask someone to do something."],
  },
  "bare-infinitives": {
    intro: "A bare infinitive is the base verb without to. It follows modal verbs and appears in several common verb patterns.",
    blocks: [
      { type: "table", title: "Where to use the bare infinitive", headings: ["Pattern", "Example", "Note"], rows: [
        ["modal + base verb", "You can swim.", "No to after can, should, must, will, etc."],
        ["let + object + base verb", "Let me help.", "The object does the action."],
        ["make + object + base verb", "The joke made us laugh.", "In the active voice."],
        ["help + (object) + base or to-infinitive", "She helped me (to) carry it.", "Both forms are common."],
        ["would rather + base verb", "I would rather stay home.", "No to after would rather."],
      ] },
      { type: "text", title: "After modal verbs", body: "Use the base form directly after a modal auxiliary. This rule applies to questions and negatives too. Do not add -s for he/she/it after a modal.", examples: [
        { text: "He can drive." }, { text: "Should we wait here?" }, { text: "It might not work." },
      ] },
      { type: "text", title: "Make and let", body: "In active sentences, make and let are followed by an object and a bare infinitive. In the passive, make is followed by to + verb. Let is usually changed to be allowed to in the passive.", examples: [
        { text: "The film made me cry." }, { text: "I was made to apologise." }, { text: "They let us use the kitchen." }, { text: "We were allowed to use the kitchen." },
      ] },
      { type: "text", title: "Why, but not why not", body: "A question with why normally uses do/does/did + subject + base verb. In the suggestion Why not ...?, there is no auxiliary and the base verb follows not.", examples: [
        { text: "Why did you leave?" }, { text: "Why not take a short break?" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She can to speak French.", correct: "She can speak French.", explanation: "Do not use to after a modal." },
        { incorrect: "He made me to wait.", correct: "He made me wait.", explanation: "Active make + object takes a bare infinitive." },
        { incorrect: "My parents let me to stay out.", correct: "My parents let me stay out.", explanation: "Let + object is followed by the base verb without to." },
      ] },
      { type: "tip", title: "One useful contrast", body: "Say ‘She made me wait’ in the active voice, but ‘I was made to wait’ in the passive. The infinitive gains to in the passive pattern." },
    ],
    review: ["Use the bare infinitive after modal verbs.", "Use make/let + object + base verb in active sentences.", "Make takes to in the passive: was made to do."],
  },
  "verbs-followed-gerunds": {
    intro: "Some verbs are normally followed by a gerund, not a to-infinitive. The gerund names the activity that the first verb refers to.",
    blocks: [
      { type: "table", title: "Common verbs followed by -ing", headings: ["Verb", "Pattern", "Example"], rows: [
        ["enjoy", "enjoy + gerund", "I enjoy reading."], ["avoid", "avoid + gerund", "He avoids driving at night."], ["finish", "finish + gerund", "We finished cleaning."], ["mind", "mind + gerund", "Do you mind waiting?"], ["suggest", "suggest + gerund", "She suggested taking a taxi."], ["keep", "keep + gerund", "Keep practising."], ["practise", "practise + gerund", "They practise speaking English."],
      ] },
      { type: "text", title: "The gerund can have an object", body: "The whole gerund phrase can include an object or other details. The -ing form does not change for different subjects.", examples: [
        { text: "He enjoys cooking Italian food." }, { text: "They avoided talking about the problem." }, { text: "Mina finished writing her report." },
      ] },
      { type: "text", title: "Negative gerund", body: "Put not before the gerund to make the activity negative. After suggest, a that-clause is also possible: suggest that someone do something. Do not use suggest + person + to-infinitive.", examples: [
        { text: "She admitted not knowing the answer." }, { text: "I suggest taking the earlier train." }, { text: "I suggest that we take the earlier train." },
      ] },
      { type: "text", title: "Phrasal verbs and expressions", body: "Some multi-word verbs and fixed expressions also take a gerund. Keep the preposition as part of the expression and put the -ing form after it.", examples: [
        { text: "He gave up eating sweets." }, { text: "We look forward to seeing you." }, { text: "She is busy preparing dinner." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "They suggested to take a taxi.", correct: "They suggested taking a taxi.", explanation: "Suggest is followed by a gerund or a that-clause, not a to-infinitive." },
        { incorrect: "Would you mind to close the window?", correct: "Would you mind closing the window?", explanation: "Mind is followed by a gerund." },
        { incorrect: "She looks forward to meet you.", correct: "She looks forward to meeting you.", explanation: "Here to is a preposition, so it takes a gerund." },
      ] },
      { type: "tip", title: "Make a verb list", body: "Keep a short list of verbs you meet with their pattern: enjoy doing, avoid doing, decide to do. The meaning alone does not always predict the form." },
    ],
    review: ["Enjoy, avoid, finish, mind and suggest are followed by gerunds.", "The gerund phrase may include its own object.", "In look forward to, to is a preposition and is followed by -ing."],
  },
  "verbs-followed-infinitives": {
    intro: "Some verbs are normally followed by a to-infinitive. This pattern often describes a plan, decision, hope or intention.",
    blocks: [
      { type: "table", title: "Common verbs followed by to + verb", headings: ["Verb", "Pattern", "Example"], rows: [
        ["want", "want + to-infinitive", "I want to learn to cook."], ["hope", "hope + to-infinitive", "We hope to see you soon."], ["decide", "decide + to-infinitive", "She decided to stay."], ["plan", "plan + to-infinitive", "They plan to move."], ["promise", "promise + to-infinitive", "He promised to call."], ["need", "need + to-infinitive", "You need to rest."], ["learn", "learn + to-infinitive", "I am learning to drive."],
      ] },
      { type: "text", title: "Verb + object + infinitive", body: "Some verbs place a person or thing between the main verb and the to-infinitive. The object is the person who will do the second action. Common verbs include ask, tell, invite, remind and would like.", examples: [
        { text: "Please remind me to send the email." }, { text: "They invited us to have dinner." }, { text: "I would like you to meet Alex." },
      ] },
      { type: "text", title: "Purpose", body: "A to-infinitive can explain why someone does something. In more formal writing, in order to or so as to can make the purpose especially clear.", examples: [
        { text: "She went online to find the opening hours." }, { text: "We left early in order to avoid traffic." },
      ] },
      { type: "text", title: "Negative infinitives", body: "Put not before to to make an infinitive negative. With an object, the structure is verb + object + not to + base verb.", examples: [
        { text: "He chose not to answer." }, { text: "The doctor advised me not to run for a week." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "We hope seeing you soon.", correct: "We hope to see you soon.", explanation: "Hope is followed by a to-infinitive." },
        { incorrect: "She told to me wait.", correct: "She told me to wait.", explanation: "Use tell + person + to-infinitive." },
        { incorrect: "I went to the library for study.", correct: "I went to the library to study.", explanation: "Use a to-infinitive to explain the purpose of going." },
      ] },
      { type: "tip", title: "Remember the object", body: "Compare ‘I want to leave’ (I will leave) with ‘I want you to leave’ (you will leave). The person before the infinitive controls who does that action." },
    ],
    review: ["Many verbs of plans and intentions take a to-infinitive.", "Some verbs use the pattern verb + person + to-infinitive.", "Use to + base verb to explain purpose; put not before to for a negative."],
  },
  "verbs-both-forms": {
    intro: "Some verbs can be followed by either a gerund or a to-infinitive with little or no change in meaning. A few verbs allow both forms but change meaning, so learn those separately.",
    blocks: [
      { type: "table", title: "Both forms with a similar meaning", headings: ["Verb", "Gerund example", "Infinitive example"], rows: [
        ["start", "It started raining.", "It started to rain."], ["begin", "She began working.", "She began to work."], ["continue", "He continued talking.", "He continued to talk."], ["like", "I like walking here.", "I like to walk here."], ["love", "They love travelling.", "They love to travel."], ["hate", "I hate waiting.", "I hate to wait."],
      ] },
      { type: "text", title: "Start, begin and continue", body: "After start, begin and continue, both forms are usually possible without an important change in meaning. Speakers may prefer a to-infinitive with some verbs or in some situations, but both patterns are standard.", examples: [
        { text: "The children started laughing." }, { text: "The children started to laugh." }, { text: "She continued to explain the plan." },
      ] },
      { type: "text", title: "Like, love and hate", body: "Like, love and hate can take both forms. A gerund often presents an activity in general; a to-infinitive can describe a choice, habit or situation. In many everyday sentences, the difference is small, and the context matters.", examples: [
        { text: "I like swimming. (I enjoy the activity.)" }, { text: "I like to check my work before I submit it. (a habit or preference)" }, { text: "She hates getting up early." },
      ] },
      { type: "text", title: "Would like is different", body: "Use would like + to-infinitive for a specific wish or polite request. Do not use a gerund after would like.", examples: [
        { text: "I would like to order a tea." }, { text: "Would you like to join us?" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "It started rain.", correct: "It started raining. / It started to rain.", explanation: "Start takes a gerund or a to-infinitive." },
        { incorrect: "I would like going home now.", correct: "I would like to go home now.", explanation: "Would like is followed by a to-infinitive." },
        { incorrect: "He continued to talking.", correct: "He continued talking. / He continued to talk.", explanation: "Use either -ing or to + base verb, not both together." },
      ] },
      { type: "tip", title: "Check the complete phrase", body: "Write the whole pattern when you learn it: continue working / continue to work; would like to work. This prevents mixing the two forms." },
    ],
    review: ["Start, begin and continue take either form with little change in meaning.", "Like/love/hate can take both; context may affect the focus.", "Would like takes a to-infinitive."],
  },
  "different-gerund-infinitive-meanings": {
    intro: "After some verbs, a gerund and a to-infinitive are both possible but have different meanings. Stop, remember, forget and try are especially useful to compare.",
    blocks: [
      { type: "table", title: "Compare the meaning", headings: ["Verb", "Verb + gerund", "Verb + to-infinitive"], rows: [
        ["stop", "finish or quit the activity: He stopped smoking.", "pause one activity in order to do another: He stopped to smoke."],
        ["remember", "have a memory of a past activity: I remember meeting her.", "not forget a task you need to do: Remember to call her."],
        ["forget", "not remember a past activity: I will never forget visiting Rome.", "fail to do a task: I forgot to lock the door."],
        ["try", "experiment with a possible solution: Try restarting the phone.", "make an effort to do something difficult: I tried to lift the box."],
      ] },
      { type: "text", title: "Stop doing or stop to do", body: "Stop + gerund means the activity ends. Stop + to-infinitive means stop what you are doing so that you can do another action. The infinitive expresses purpose.", examples: [
        { text: "She stopped talking. (She became quiet.)" }, { text: "She stopped to talk to her neighbour. (She paused another activity.)" },
      ] },
      { type: "text", title: "Remember and forget", body: "A gerund looks back at an activity or experience. A to-infinitive points to a task that should happen before or at a particular time.", examples: [
        { text: "I remember locking the door. (I have the memory.)" }, { text: "Remember to lock the door. (Do not forget this task.)" }, { text: "He forgot meeting us before. (He did not remember the meeting.)" },
      ] },
      { type: "text", title: "Try doing or try to do", body: "Try + gerund means test a method and see if it helps. Try + to-infinitive means make an effort, often when something is difficult.", examples: [
        { text: "If the screen freezes, try restarting the computer." }, { text: "I tried to open the jar, but it was too tight." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I stopped to eat sweets. (intended: I quit the habit)", correct: "I stopped eating sweets.", explanation: "Stop + gerund means quit that activity." },
        { incorrect: "Remember locking your passport. (intended: a reminder for later)", correct: "Remember to lock your suitcase.", explanation: "Use remember + to-infinitive for a task that must be done." },
        { incorrect: "Try to restart the router; it may fix the problem. (intended: test this method)", correct: "Try restarting the router; it may fix the problem.", explanation: "Use try + gerund to suggest an experiment or possible solution." },
      ] },
      { type: "tip", title: "Ask when the action happens", body: "Is it an activity or memory you look back on? A gerund is likely. Is it a task or action you plan or attempt? A to-infinitive is likely. With try, ask whether you mean ‘test a method’ or ‘make an effort’." },
    ],
    review: ["Stop doing = end an activity; stop to do = pause for another purpose.", "Remember/forget doing refer to memory; to do refers to a task.", "Try doing tests a method; try to do makes an effort."],
  },
  "gerunds-after-prepositions": {
    intro: "When a verb comes directly after a preposition, use its -ing form. This includes verbs after adjective + preposition, noun + preposition and common expressions.",
    blocks: [
      { type: "text", title: "The basic pattern", body: "A preposition can be followed by a noun, pronoun or gerund phrase. If you need a verb after the preposition, use the gerund. Do not use a to-infinitive after a preposition in this pattern.", examples: [
        { text: "She left without saying goodbye." }, { text: "He is interested in learning Korean." }, { text: "We talked about moving to a new flat." },
      ] },
      { type: "table", title: "Common combinations", headings: ["Expression", "Example"], rows: [
        ["good at", "Rita is good at solving puzzles."], ["interested in", "I am interested in studying art."], ["afraid of", "He is afraid of flying."], ["before / after", "Wash your hands before eating."], ["without", "She left without locking the door."], ["think about", "We are thinking about buying a car."],
      ] },
      { type: "text", title: "To can be a preposition", body: "In expressions such as look forward to, be used to and object to, to is a preposition, not the infinitive marker. Follow it with a noun, pronoun or gerund.", examples: [
        { text: "I look forward to seeing you." }, { text: "She is used to getting up early." }, { text: "They objected to paying extra." },
      ] },
      { type: "text", title: "Purpose: to + verb", body: "Do not confuse a preposition followed by a gerund with to + base verb used to explain purpose. In ‘I went out to buy milk’, to introduces an infinitive, not a preposition + gerund.", examples: [
        { text: "He went to the shop to buy bread.", note: "purpose: to + base verb" },
        { text: "He is interested in buying fresh bread.", note: "preposition in + gerund" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She is interested in to learn French.", correct: "She is interested in learning French.", explanation: "The verb follows the preposition in, so use -ing." },
        { incorrect: "I look forward to meet you.", correct: "I look forward to meeting you.", explanation: "In look forward to, to is a preposition." },
        { incorrect: "He left without to say goodbye.", correct: "He left without saying goodbye.", explanation: "Without is a preposition and is followed by a gerund here." },
      ] },
      { type: "tip", title: "Find the preposition", body: "Underline the preposition first. If the next word is a verb, use its -ing form: good at drawing, before leaving, look forward to hearing." },
    ],
    review: ["Use a gerund after a preposition.", "This includes adjective + preposition and phrasal expressions.", "In look forward to, to is a preposition; in want to go, to begins an infinitive."],
  },
};
