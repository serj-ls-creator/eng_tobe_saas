import type { GrammarLesson, LessonBlock } from "./types";
import { GRAMMAR_SECTIONS } from "@/constants/grammar";

const overview = (highlightCells: string[] = []): LessonBlock => ({
  type: "table",
  title: "English tense overview",
  intro: "This is a simple map of common verb patterns across past, present and future time. It is a guide, not a list of every sentence form.",
  headings: ["Form", "Past", "Present", "Future"],
  rows: [
    ["Simple", "did", "do / does", "will do"],
    ["Continuous", "was / were doing", "am / is / are doing", "will be doing"],
    ["Perfect", "had done", "have / has done", "will have done"],
    ["Perfect Continuous", "had been doing", "have / has been doing", "will have been doing"],
  ],
  highlightCells,
});

const lesson = (intro: string, highlightCells: string[], blocks: LessonBlock[], review: string[], includeOverview = false): GrammarLesson => ({
  intro,
  blocks: [...(includeOverview ? [overview(highlightCells)] : []), ...blocks],
  review,
});

const text = (title: string, body: string, examples: { text: string; highlight?: string; note?: string }[]): LessonBlock => ({ type: "text", title, body, examples });
const table = (title: string, headings: string[], rows: string[][], intro?: string): LessonBlock => ({ type: "table", title, headings, rows, intro });
const mistakes = (items: { incorrect: string; correct: string; explanation: string }[]): LessonBlock => ({ type: "mistakes", title: "Common mistakes", items });
const tip = (body: string): LessonBlock => ({ type: "tip", title: "Remember", body });

export const TENSE_LESSONS: Record<string, GrammarLesson> = {
  "present-simple": lesson(
    "Use the present simple for habits, routines, facts and states. It can also describe future times in schedules. The form changes with he, she and it.",
    ["do / does"],
    [
      table("Form the present simple", ["Sentence", "I / you / we / they", "he / she / it"], [
        ["Positive", "work", "works"], ["Negative", "don't work", "doesn't work"], ["Yes / no question", "Do you work?", "Does she work?"], ["Short answer", "Yes, I do. / No, I don't.", "Yes, she does. / No, she doesn't."],
      ], "In ordinary positive sentences with most verbs, use the main verb, not do/does: I work; she works. Do and does are helping verbs for questions and negatives. Be is different: I am not late. Is he ready?"),
      text("Habits and repeated actions", "Use this form for things that happen regularly. Frequency words such as always, usually, often, sometimes and never normally come before the main verb, but after be. Time phrases often come at the end of the sentence.", [
        { text: "I usually walk to work." }, { text: "She often calls her parents after dinner." }, { text: "We play football every Saturday." }, { text: "Tom is always busy on Mondays." },
      ]),
      text("Facts, states and timetables", "Use the present simple for facts, general truths, feelings, opinions and other states. Stative verbs such as know, like, need and belong are not usually continuous. Use the present simple for official schedules, even when the event is in the future.", [
        { text: "Water boils at 100°C." }, { text: "I know the answer." }, { text: "The train leaves at 8:15 tomorrow." }, { text: "Our English class starts next week." },
      ]),
      text("Spelling and questions", "Add -s to most verbs for he, she and it. Add -es after -s, -sh, -ch, -x and often -o: watches, goes. Change consonant + y to -ies: study → studies. In questions, put do/does before the subject and use the base verb after it.", [
        { text: "Maya studies English." }, { text: "Does Maya study every evening?" }, { text: "Where do your friends live?" },
      ]),
      mistakes([
        { incorrect: "He work in a bank.", correct: "He works in a bank.", explanation: "Add -s to the present simple verb with he, she or it." },
        { incorrect: "Does she likes tea?", correct: "Does she like tea?", explanation: "Does already marks the subject. Use the base verb after it." },
        { incorrect: "I am knowing her.", correct: "I know her.", explanation: "Know describes a state and is not normally used in a continuous form." },
      ]),
      tip("In the overview, do / does represents the simple form in questions and negatives. Positive sentences usually use the main verb directly: They work; he works."),
    ],
    ["Use the present simple for habits, facts and states.", "Add -s or -es with he, she and it in positive sentences.", "Use do/does + base verb for most questions and negatives.", "The overview's do/does is a question and negative pattern, not the usual positive form."],
  ),
  "present-continuous": lesson(
    "Use the present continuous for actions happening now, temporary situations and changes. Its form is be + a verb ending in -ing.",
    ["am / is / are doing"],
    [
      table("Form the present continuous", ["Sentence", "Pattern", "Example"], [
        ["Positive", "subject + am/is/are + -ing", "I am reading."], ["Negative", "subject + am/is/are + not + -ing", "She isn't working."], ["Question", "Am/Is/Are + subject + -ing?", "Are they coming?"], ["Short answer", "Yes/No + subject + be", "Yes, they are. / No, they aren't."],
      ]),
      text("Actions now and temporary situations", "Use this form for an action in progress at the time of speaking. You can also use it for a temporary situation around now, even if the action is not happening at this exact moment. Use be that matches the subject: am with I, is with he/she/it, and are with you/we/they.", [
        { text: "Please be quiet. The baby is sleeping." }, { text: "I am reading a good book this week." }, { text: "They are staying with friends while their flat is repaired." }, { text: "Are you listening to me?" },
      ]),
      text("Changes and future arrangements", "The present continuous can describe something changing or developing. It can also describe a future arrangement that is already planned, often with a time phrase. Do not use it for every future event: will and going to have other uses.", [
        { text: "The days are getting longer." }, { text: "More people are working from home." }, { text: "I am meeting Sam at six." }, { text: "We are flying to Rome on Friday." },
      ]),
      text("Make the -ing form", "Usually add -ing: read → reading. Drop a final silent e: make → making. For a short verb with one vowel and one final consonant, double the consonant: sit → sitting. Some verbs ending in -ie change it to -y: lie → lying. Stative verbs such as believe, own and understand are not usually continuous.", [
        { text: "She is making dinner." }, { text: "The dog is sitting by the door." }, { text: "I believe you." },
      ]),
      mistakes([
        { incorrect: "He working now.", correct: "He is working now.", explanation: "A present continuous verb needs am, is or are." },
        { incorrect: "They are play tennis.", correct: "They are playing tennis.", explanation: "Use the -ing form after be." },
        { incorrect: "I am understanding the lesson.", correct: "I understand the lesson.", explanation: "Understand is usually a stative verb." },
      ]),
      tip("Use the present simple for a regular habit (I walk to work) and the present continuous for an action now or a temporary situation (I am walking to work this week)."),
    ],
    ["Form: am/is/are + verb-ing.", "Use it for actions now, temporary situations, changes and planned arrangements.", "Use the correct be form and remember the -ing spelling rules.", "Stative verbs are usually simple, not continuous."],
  ),
  "present-perfect": lesson(
    "Use the present perfect to connect a past event or experience with the present. Form it with have or has and a past participle.",
    ["have / has done"],
    [
      table("Form the present perfect", ["Sentence", "Pattern", "Example"], [
        ["Positive", "subject + have/has + participle", "They have arrived."], ["Negative", "subject + haven't/hasn't + participle", "He hasn't finished."], ["Question", "Have/Has + subject + participle?", "Have you eaten?"], ["Short answer", "Yes/No + have/has", "Yes, I have. / No, she hasn't."],
      ], "Use has with he, she and it, and have with I, you, we and they. The past participle may end in -ed (worked), but many common verbs are irregular (go → gone, see → seen)."),
      text("Life experience", "Use the present perfect to talk about experience up to now when the exact time is not important or not said. Ever is common in questions; never means at no time. If you say exactly when a finished event happened, use the past simple.", [
        { text: "Have you ever tried sushi?" }, { text: "I have never ridden a horse." }, { text: "We have visited Paris twice." }, { text: "I visited Paris in 2022. (finished time: past simple)" },
      ]),
      text("Recent events and present results", "Use it for a recent action when its result matters now. Just often means a short time ago. Already means sooner than expected. Put these words between have/has and the past participle. Put yet at the end of questions and negative sentences.", [
        { text: "I have just sent the email." }, { text: "She has already booked the tickets." }, { text: "Have they arrived yet?" }, { text: "We haven't had lunch yet." },
      ]),
      text("Unfinished time and duration", "Use the present perfect with a time period that is still open, such as today or this week. Use for + a length of time and since + the starting point when a state or situation continues until now. Some action verbs can also use the present perfect continuous to stress the activity.", [
        { text: "I have had three lessons this week. (the week is not over)" }, { text: "She has lived here for five years." }, { text: "We have known each other since 2020." },
      ]),
      mistakes([
        { incorrect: "I have seen him yesterday.", correct: "I saw him yesterday.", explanation: "Yesterday is a finished past time, so use the past simple." },
        { incorrect: "She has went home.", correct: "She has gone home.", explanation: "Use the past participle after have/has." },
        { incorrect: "Have you ever ate Thai food?", correct: "Have you ever eaten Thai food?", explanation: "Eat is irregular: eat, ate, eaten." },
      ]),
      tip("Ask whether the past time is finished and named. If it is (yesterday, in 2020), use the past simple. If the time is open or the result matters now, the present perfect may fit."),
    ],
    ["Form: have/has + past participle.", "Use it for experience, recent results and unfinished time periods.", "Use for with a duration and since with a starting point.", "Use the past simple with a finished, named past time."],
  ),
  "present-perfect-continuous": lesson(
    "Use the present perfect continuous to show an activity that started in the past and continues now, or has a result that we can see now. Form it with have/has been + verb-ing.",
    ["have / has been doing"],
    [
      table("Form the present perfect continuous", ["Sentence", "Pattern", "Example"], [
        ["Positive", "subject + have/has been + -ing", "I have been waiting."], ["Negative", "subject + haven't/hasn't been + -ing", "She hasn't been sleeping."], ["Question", "Have/Has + subject + been + -ing?", "Have they been studying?"], ["Short answer", "Yes/No + have/has", "Yes, they have. / No, I haven't."],
      ]),
      text("An activity continues until now", "Use this form when an activity began earlier and is still happening, or has only just stopped. For asks about the length of the activity. Since gives its starting point. The action verb is usually a verb that can show an activity, such as work, wait, rain or learn.", [
        { text: "I have been learning English for two years." }, { text: "How long has she been working here?" }, { text: "It has been raining since breakfast." }, { text: "We have been waiting for the bus for twenty minutes." },
      ]),
      text("A recent activity with a result now", "The activity may have just ended, but its result is clear now. This form tells us about the activity or its duration. The present perfect simple often focuses more on a completed result or amount.", [
        { text: "Your hands are dirty. Have you been painting?" }, { text: "He is tired because he has been running." }, { text: "I have been cleaning the kitchen, so it smells fresh." }, { text: "I have cleaned the kitchen. (focus on the completed result)" },
      ]),
      text("Choose simple or continuous", "Some verbs that describe states, such as know, own and believe, are not usually used in continuous forms. With other verbs, both forms are possible but the focus can differ: the simple form often tells how much is finished; the continuous form stresses the activity or time spent.", [
        { text: "She has written three pages. (completed amount)" }, { text: "She has been writing all morning. (activity and duration)" }, { text: "I have known Alex for years. (not: have been knowing)" },
      ]),
      mistakes([
        { incorrect: "They have been wait for an hour.", correct: "They have been waiting for an hour.", explanation: "Use the -ing form after have/has been." },
        { incorrect: "I am living here since May.", correct: "I have been living here since May.", explanation: "Use the present perfect continuous for an activity continuing from the past until now." },
        { incorrect: "She has been knowing him for years.", correct: "She has known him for years.", explanation: "Know is a stative verb and is normally used in a simple form." },
      ]),
      tip("Use for + a duration (for two hours) and since + a starting point (since 9 o'clock). The time words help, but the meaning of the sentence is the main guide."),
    ],
    ["Form: have/has been + verb-ing.", "Use it for an activity continuing until now or with a visible present result.", "For tells how long; since tells when it started.", "Use simple forms with most stative verbs."],
  ),
  "past-simple": lesson(
    "Use the past simple for actions and states that began and finished in the past. The time is often clear from the context or a finished time expression.",
    ["did"],
    [
      table("Form the past simple", ["Sentence", "Ordinary verbs", "Be"], [
        ["Positive", "worked / went", "was / were"], ["Negative", "didn't + work/go", "wasn't / weren't"], ["Question", "Did + subject + work/go?", "Was/Were + subject...?"], ["Short answer", "Yes, I did. / No, I didn't.", "Yes, she was. / No, they weren't."],
      ], "The red did in the overview is the helping verb used in most past simple questions and negatives. In an ordinary positive sentence, use the past form of the main verb: I worked; she went. After did or didn't, use the base verb."),
      text("Finished past events", "Use this tense for a completed event at a finished time. It is common in stories, biographies and reports of what happened. Regular verbs usually add -ed; irregular verbs have special forms that you must learn. The past simple of be is was or were and does not use did.", [
        { text: "We watched a film last night." }, { text: "He bought a new phone two days ago." }, { text: "The shop was closed, so we went home." }, { text: "Where were you after class?" },
      ]),
      text("Negatives and questions with did", "For most main verbs, use did not (didn't) + base verb in negative sentences. For questions, put Did before the subject and use the base verb. Did carries the past meaning, so do not put the main verb in its past form too. Make questions with was/were by moving be before the subject.", [
        { text: "I didn't see the message." }, { text: "Did Maya call you? Yes, she did." }, { text: "What did they eat?" }, { text: "Was the museum open?" },
      ]),
      text("Spelling and time expressions", "Most regular verbs add -ed. Add only -d after a final e (live → lived). Change consonant + y to -ied (study → studied). Some short verbs double the final consonant (stop → stopped). Common time phrases include yesterday, last week, in 2019, an hour ago and when I was a child. These expressions are clues; context also matters.", [
        { text: "She studied in London in 2019." }, { text: "We stopped at a café on the way home." }, { text: "I met him when I was at university." },
      ]),
      mistakes([
        { incorrect: "Did you went to work?", correct: "Did you go to work?", explanation: "After did, use the base form. Did already marks the past." },
        { incorrect: "She didn't called me.", correct: "She didn't call me.", explanation: "Use the base verb after didn't." },
        { incorrect: "They didn't be at home.", correct: "They weren't at home.", explanation: "Be makes its own past negative with was/were + not." },
      ]),
      tip("In the overview, did is a simplified pattern for questions and negatives: Did you work? I didn't work. Positive sentences normally use worked, went, saw, and so on."),
    ],
    ["Use the past simple for finished past events and states.", "Positive ordinary verbs use a past form: worked, went.", "Use did/didn't + base verb for questions and negatives.", "Was and were make their own questions and negatives."],
  ),
  "past-continuous": lesson(
    "Use the past continuous for an action that was in progress at a particular time in the past. Form it with was or were + verb-ing.",
    ["was / were doing"],
    [
      table("Form the past continuous", ["Sentence", "Pattern", "Example"], [
        ["Positive", "subject + was/were + -ing", "I was cooking."], ["Negative", "subject + wasn't/weren't + -ing", "They weren't listening."], ["Question", "Was/Were + subject + -ing?", "Were you waiting?"], ["Short answer", "Yes/No + was/were", "Yes, I was. / No, they weren't."],
      ], "Use was with I/he/she/it and were with you/we/they. Add -ing to the main verb."),
      text("An action in progress at a past time", "Use the past continuous to show what was happening at a certain moment. The action started before that moment and was still in progress then. It does not say when the action began or ended.", [
        { text: "At 8 p.m., I was doing my homework." }, { text: "She was driving home at midnight." }, { text: "What were you doing when I called?" }, { text: "They were having dinner at that time." },
      ]),
      text("Background and interrupted actions", "Use the past continuous for a longer background action and the past simple for a shorter event that happened during it. When often introduces the shorter event. While often introduces the longer action. The order can change, and a comma is usual when the while-clause comes first.", [
        { text: "I was walking to work when it started to rain." }, { text: "While we were waiting, the bus arrived." }, { text: "She fell while she was running in the park." }, { text: "The lights went out while I was cooking." },
      ]),
      text("Two actions at the same time", "Use the past continuous for two activities happening together. Some verbs describe states, not activities, so they are usually used in the past simple even when they were true at that time.", [
        { text: "I was reading while my brother was playing a game." }, { text: "They were talking and laughing." }, { text: "I knew the answer. (not usually: was knowing)" },
      ]),
      mistakes([
        { incorrect: "We was watching TV.", correct: "We were watching TV.", explanation: "Use were with we, you and they." },
        { incorrect: "I was cook when she arrived.", correct: "I was cooking when she arrived.", explanation: "Use the -ing form after was/were." },
        { incorrect: "When I was seeing him, I waved.", correct: "When I saw him, I waved.", explanation: "See is normally a state verb in this meaning, so use the past simple." },
      ]),
      tip("Past continuous = the scene or activity in progress. Past simple = a completed event. Compare: I was having a shower when the phone rang."),
    ],
    ["Form: was/were + verb-ing.", "Use it for an action in progress at a past time or as background.", "Combine it with the past simple for a shorter event that interrupts or happens during it.", "Use was with I/he/she/it and were with you/we/they."],
  ),
  "past-perfect": lesson(
    "Use the past perfect for an event that happened before another past event or past time. Form it with had + a past participle.",
    ["had done"],
    [
      table("Form the past perfect", ["Sentence", "Pattern", "Example"], [
        ["Positive", "subject + had + participle", "She had left."], ["Negative", "subject + hadn't + participle", "We hadn't eaten."], ["Question", "Had + subject + participle?", "Had they arrived?"], ["Short answer", "Yes/No + had", "Yes, they had. / No, they hadn't."],
      ], "Had is the same for all subjects. Use the past participle: regular verbs usually end in -ed; irregular verbs have forms such as gone, seen and eaten."),
      text("Show which past event came first", "When two events happened in the past, use the past perfect for the earlier event and the past simple for the later event. This makes the order clear. Words such as before, after and by the time can also help show the order, so the past perfect is not needed in every sentence with two past events.", [
        { text: "The film had started when we arrived." }, { text: "She had locked the door before she left." }, { text: "By the time I got to the station, the train had gone." }, { text: "After they had eaten, they went for a walk." },
      ]),
      text("Use it for a past result or experience", "The past perfect can explain why something was true at a past moment or what experience a person had before then. It is often used with never, already, just and yet, placed between had and the participle.", [
        { text: "He was tired because he had worked all night." }, { text: "I had never flown before that trip." }, { text: "They had already booked a hotel when we offered to help." },
      ]),
      text("Compare it with the past simple", "Use the past simple when events are told in their natural order and the order is clear. Use the past perfect when you need to move back to an earlier event. Do not use had for every past action in a story.", [
        { text: "I got home, made dinner and watched a film. (events in order)" }, { text: "I watched the film that my friend had recommended. (the recommendation came first)" },
      ]),
      mistakes([
        { incorrect: "When we arrived, the show already started.", correct: "When we arrived, the show had already started.", explanation: "The show started before we arrived." },
        { incorrect: "She had went home.", correct: "She had gone home.", explanation: "Use the past participle after had." },
        { incorrect: "I had finished work and went home the next day.", correct: "I finished work and went home the next day.", explanation: "The actions happen in order; the past simple is clear and natural." },
      ]),
      tip("Use had + participle for the earlier of two past events when the order needs to be clear. Use the past simple for the later event."),
    ],
    ["Form: had + past participle for every subject.", "Use it for an event before another past event or time.", "Use the past simple for the later event.", "Do not use past perfect automatically when the order is already clear."],
  ),
  "past-perfect-continuous": lesson(
    "Use the past perfect continuous for an activity that continued for some time before a past moment or event. Form it with had been + verb-ing.",
    ["had been doing"],
    [
      table("Form the past perfect continuous", ["Sentence", "Pattern", "Example"], [
        ["Positive", "subject + had been + -ing", "I had been studying."], ["Negative", "subject + hadn't been + -ing", "He hadn't been sleeping."], ["Question", "Had + subject + been + -ing?", "Had they been waiting?"], ["Short answer", "Yes/No + had", "Yes, they had. / No, they hadn't."],
      ], "Had been is the same with every subject. The main verb takes -ing."),
      text("Duration before a past time", "This form looks back from a past moment and tells how long an activity had continued up to then. Use for with a length of time and since with a starting point. The activity may have stopped at that moment or continued after it; the sentence gives the context.", [
        { text: "At noon, I had been working for four hours." }, { text: "They had been living in York since 2021 when they moved again." }, { text: "How long had you been waiting before the bus came?" }, { text: "She had been studying all evening before the lights went out." },
      ]),
      text("Explain a past result", "Use it to explain a condition or result at a past time. The focus is on the activity or its duration, not only on a finished amount. The past perfect simple often focuses more on how much was completed.", [
        { text: "His clothes were wet because he had been walking in the rain." }, { text: "I was tired because I had been driving for hours." }, { text: "She had written five emails before lunch. (completed number)" }, { text: "She had been writing emails all morning. (activity and time)" },
      ]),
      text("Use stative verbs carefully", "Stative verbs such as know, believe and own are not usually continuous. Use the past perfect simple for these meanings. The past perfect continuous is mainly for activities that can continue over time.", [
        { text: "I had known him for years before we worked together." }, { text: "They had been playing tennis before it started to rain." },
      ]),
      mistakes([
        { incorrect: "We had been wait for an hour.", correct: "We had been waiting for an hour.", explanation: "Use the -ing form after had been." },
        { incorrect: "She had been knowing the answer.", correct: "She had known the answer.", explanation: "Know is usually stative, so use the past perfect simple." },
        { incorrect: "He had been finishing three reports.", correct: "He had finished three reports.", explanation: "Use the simple form when you want to focus on a completed number or result." },
      ]),
      tip("Past perfect continuous looks back from a past time and stresses the activity or its duration: had been doing something for a while."),
    ],
    ["Form: had been + verb-ing.", "Use it for an activity continuing before a past time or event.", "Use for + duration and since + starting point.", "Use the simple form for a completed amount or with most stative verbs."],
  ),
  "future-simple": lesson(
    "Use will + the base verb for decisions made now, offers, promises and predictions. It is one common way to talk about the future, but it is not the only one.",
    ["will do"],
    [
      table("Form with will", ["Sentence", "Pattern", "Example"], [
        ["Positive", "subject + will + base verb", "I will call."], ["Negative", "subject + will not / won't + base", "She won't forget."], ["Question", "Will + subject + base verb?", "Will they join us?"], ["Short answer", "Yes/No + will", "Yes, I will. / No, I won't."],
      ], "Will is the same for all subjects. The verb after will stays in the base form, without -s or to."),
      text("Decisions, offers and promises", "Use will when you decide at the moment of speaking, or when you offer help or make a promise. In everyday speech, will is often shortened to 'll and will not becomes won't.", [
        { text: "The phone is ringing. I'll answer it." }, { text: "I'll carry that bag for you." }, { text: "I promise I will be on time." }, { text: "Don't worry. We won't tell anyone." },
      ]),
      text("Predictions and future facts", "Use will for predictions, often with think, expect, hope or probably. The speaker is giving an opinion or belief. Use time expressions such as tomorrow, next month, soon and in a few years when they help make the time clear.", [
        { text: "I think our team will win." }, { text: "It will probably rain later." }, { text: "People will use more electric cars in the future." }, { text: "Will you be at home tonight?" },
      ]),
      text("Questions and the main verb", "Put will before the subject in questions. Use a question word before will for information questions. The main verb does not change: no -s for he/she/it, no past form, and no to.", [
        { text: "Will your sister come with us?" }, { text: "Where will you stay?" }, { text: "He will help us. (not: will helps / will to help)" },
      ]),
      text("Will and other future forms", "Use be going to for a plan already made or a prediction based on something you can see. Use the present continuous for a fixed arrangement with people or a time. Use the present simple for a timetable. The overview shows will do as a simple future pattern, not as the only way to express future meaning.", [
        { text: "I will call her now. (decision now)" }, { text: "I am going to call her tonight. (plan)" }, { text: "I am meeting her at seven. (arrangement)" }, { text: "The train leaves at seven. (schedule)" },
      ]),
      mistakes([
        { incorrect: "She will goes home.", correct: "She will go home.", explanation: "Use the base verb after will." },
        { incorrect: "Will you to help me?", correct: "Will you help me?", explanation: "Do not use to after will." },
        { incorrect: "I will to call you later.", correct: "I will call you later.", explanation: "Will is followed directly by the base verb." },
      ]),
      tip("The table's will do is a useful pattern. Choose between will, going to, present continuous and present simple by asking whether you mean a decision, plan, arrangement or schedule."),
    ],
    ["Form: will + base verb for every subject.", "Use will for decisions now, offers, promises and predictions.", "Use won't for negatives and put will before the subject in questions.", "Future meaning can also use going to, the present continuous or the present simple."],
  ),
  "future-continuous": lesson(
    "Use the future continuous for an action that will be in progress at a particular future time. Form it with will be + verb-ing.",
    ["will be doing"],
    [
      table("Form the future continuous", ["Sentence", "Pattern", "Example"], [
        ["Positive", "subject + will be + -ing", "I will be travelling."], ["Negative", "subject + won't be + -ing", "She won't be working."], ["Question", "Will + subject + be + -ing?", "Will they be staying?"], ["Short answer", "Yes/No + will", "Yes, they will. / No, they won't."],
      ], "The form is the same for every subject. Keep be after will and use the -ing form for the main verb."),
      text("An action in progress at a future time", "Use this tense to look ahead to a time and say what will be happening then. Time expressions such as at this time tomorrow, at 9 o'clock, this time next week and when you arrive can give the future point.", [
        { text: "At 10 tomorrow, I will be taking my exam." }, { text: "This time next week, we will be lying on the beach." }, { text: "She will be driving home when you call." }, { text: "What will you be doing at the weekend?" },
      ]),
      text("Expected activities and polite questions", "The future continuous can describe an activity expected as part of a normal plan or routine. Questions with will you be…? can sound less direct than asking someone to make a decision or promise.", [
        { text: "I'll be working late, so please leave the key for me." }, { text: "Will you be using the car tonight?" }, { text: "Will you be joining us for lunch?" },
      ]),
      text("Compare it with will and going to", "Use will + base verb for a decision, offer, promise or prediction. Use be going to for a plan or evidence-based prediction. Use will be + -ing to put an activity in progress at a future time. These meanings can overlap, so context matters.", [
        { text: "I will call you now. (decision)" }, { text: "I am going to visit my aunt this weekend. (plan)" }, { text: "I will be visiting my aunt at this time on Saturday. (activity in progress then)" },
      ]),
      mistakes([
        { incorrect: "At six, I will work on the report all evening.", correct: "At six, I will be working on the report.", explanation: "Use will be + -ing for an activity in progress at a future time." },
        { incorrect: "They will being waiting.", correct: "They will be waiting.", explanation: "Use the base form be after will." },
        { incorrect: "Will she be wait for us?", correct: "Will she be waiting for us?", explanation: "Use the -ing form after will be." },
      ]),
      tip("Picture a point in the future. If you want to describe the activity happening around that point, use will be + verb-ing."),
    ],
    ["Form: will be + verb-ing.", "Use it for an activity in progress at a future time.", "Use it for expected activities and some polite questions.", "Do not confuse it with will + base verb for a decision or simple prediction."],
  ),
  "future-perfect": lesson(
    "Use the future perfect for an action that will be complete before a future time or event. Form it with will have + a past participle.",
    ["will have done"],
    [
      table("Form the future perfect", ["Sentence", "Pattern", "Example"], [
        ["Positive", "subject + will have + participle", "We will have finished."], ["Negative", "subject + won't have + participle", "He won't have arrived."], ["Question", "Will + subject + have + participle?", "Will they have left?"], ["Short answer", "Yes/No + will", "Yes, they will. / No, they won't."],
      ], "Will have is the same for every subject. Use the past participle after have: finished, gone, seen, eaten."),
      text("Complete before a future point", "Use this form when you look forward from now to a later time and think about what will already be finished by then. By introduces the deadline or future point. Before can introduce another future event.", [
        { text: "I will have finished this book by Friday." }, { text: "By the time you arrive, we will have cooked dinner." }, { text: "She will have saved enough money by next summer." }, { text: "Will they have built the new bridge before winter?" },
      ]),
      text("Focus on completion, not the process", "The future perfect says that a result will be ready before a future time. If you want to describe an activity in progress at a future point, use the future continuous. If you want to say how long an activity will have continued, the future perfect continuous may fit.", [
        { text: "At six, I will have written the report. (it will be complete)" }, { text: "At six, I will be writing the report. (it will be in progress)" }, { text: "By six, I will have been writing for three hours. (duration)" },
      ]),
      text("Questions and negatives", "Put will before the subject in a question. Place not after will to make a negative. The main verb stays in its past participle form. This tense often appears with by + a future time, but the time may be clear from context.", [
        { text: "Will you have completed the course by June?" }, { text: "They won't have landed by midnight." }, { text: "How many pages will you have read by tomorrow?" },
      ]),
      mistakes([
        { incorrect: "I will have finish by noon.", correct: "I will have finished by noon.", explanation: "Use a past participle after will have." },
        { incorrect: "She will has left by then.", correct: "She will have left by then.", explanation: "Use have after will for every subject." },
        { incorrect: "By Friday, I will finished the task.", correct: "By Friday, I will have finished the task.", explanation: "Use will have + participle to show completion before a future point." },
      ]),
      tip("Use the future perfect when the question is “Will it be finished by that future time?”"),
    ],
    ["Form: will have + past participle.", "Use it for something complete before a future point or event.", "By often introduces the deadline.", "Use future continuous for an action in progress, not a completed result."],
  ),
  "future-perfect-continuous": lesson(
    "Use the future perfect continuous to show how long an activity will have continued by a future time. Form it with will have been + verb-ing.",
    ["will have been doing"],
    [
      table("Form the future perfect continuous", ["Sentence", "Pattern", "Example"], [
        ["Positive", "subject + will have been + -ing", "I will have been working."], ["Negative", "subject + won't have been + -ing", "She won't have been living there."], ["Question", "Will + subject + have been + -ing?", "Will they have been waiting?"], ["Short answer", "Yes/No + will", "Yes, they will. / No, they won't."],
      ], "The form is the same for every subject. Use an -ing verb after will have been."),
      text("Duration up to a future time", "This form looks forward to a future point and measures an activity from an earlier time up to that point. Use for + a duration. A phrase with by helps show the future point. This tense is less common than the simple or continuous forms, but it is useful when duration matters.", [
        { text: "By July, I will have been working here for ten years." }, { text: "At noon, she will have been travelling for six hours." }, { text: "Next month, we will have been living in this flat for a year." }, { text: "How long will you have been studying English by December?" },
      ]),
      text("An activity and its future result", "The form can explain a future condition or result caused by an activity that continues over time. The focus is on the time spent doing it. Use the future perfect simple when the important idea is the completed result or amount.", [
        { text: "He will be tired because he will have been driving all night." }, { text: "By the end of the day, they will have been painting for eight hours." }, { text: "By Friday, she will have written ten pages. (completed amount)" },
      ]),
      text("Use suitable verbs", "This form is most natural with activities that can continue, such as work, wait, travel, study and rain. Stative verbs such as know, own and believe are not usually used in continuous forms. Use a simple form with these verbs.", [
        { text: "By then, I will have known him for five years." }, { text: "By then, I will have been teaching for five years." },
      ]),
      mistakes([
        { incorrect: "By May, I will have been work here for a year.", correct: "By May, I will have been working here for a year.", explanation: "Use the -ing form after will have been." },
        { incorrect: "She will has been studying all day.", correct: "She will have been studying all day.", explanation: "Use have after will, for every subject." },
        { incorrect: "I will have been knowing her for years.", correct: "I will have known her for years.", explanation: "Know is usually stative, so use a simple form." },
      ]),
      tip("Use this form to answer “How long?” at a future point. Use the future perfect simple to answer “How much will be finished?”"),
    ],
    ["Form: will have been + verb-ing.", "Use it for the duration of an activity up to a future time.", "For gives the duration; by points to the future time.", "Use the simple form with most stative verbs."],
  ),
  "future-forms": lesson(
    "English uses several forms to talk about the future. Choose a form by thinking about whether you are making a decision, talking about a plan, describing an arrangement or giving a schedule.",
    [],
    [
      text("Will: decisions, offers and predictions", "Use will + base verb for a decision made while speaking, an offer, a promise or a prediction based on what you think. Will does not change with the subject. The main verb stays in the base form.", [
        { text: "The phone is ringing. I'll get it. (decision now)" }, { text: "I'll help you with those bags. (offer)" }, { text: "I think the new café will be popular. (prediction)" },
      ]),
      text("Be going to: plans and evidence", "Use am/is/are going to + base verb for a plan or intention you already have. It is also common for a prediction based on something you can see now. Change be to match the subject; use not after be for a negative.", [
        { text: "We are going to paint the kitchen this weekend. (plan)" }, { text: "Look at those clouds! It is going to rain. (evidence)" }, { text: "Is she going to apply for the job?" },
      ]),
      text("Present continuous: arrangements", "Use the present continuous for a future arrangement that has been made, often with a place or time. It commonly involves another person or a fixed plan. A future time phrase helps make the meaning clear.", [
        { text: "I am seeing the dentist at 3 p.m." }, { text: "They are having dinner with friends on Friday." }, { text: "We aren't travelling next week." },
      ]),
      text("Present simple: timetables", "Use the present simple for fixed schedules and official programmes. This is common for transport, classes, opening times and events. The time is in the future, even though the verb is present simple.", [
        { text: "The bus leaves at 6:40 tomorrow morning." }, { text: "The film starts at eight." }, { text: "When does your course finish?" },
      ]),
      table("Choose by meaning", ["Form", "Typical meaning", "Example"], [
        ["will + base", "decision now, offer, promise, opinion", "I'll call a taxi."], ["be going to + base", "plan or evidence-based prediction", "We're going to move."], ["present continuous", "arranged future event", "I'm meeting Jo at six."], ["present simple", "timetable or schedule", "The train arrives at nine."],
      ], "These uses are common, not fixed rules for every sentence. More than one form can sometimes be possible with a change in focus."),
      mistakes([
        { incorrect: "I am going call him tonight.", correct: "I am going to call him tonight.", explanation: "Use to after going to and before the base verb." },
        { incorrect: "The train will leaves at six.", correct: "The train leaves at six.", explanation: "Use the present simple for a timetable; after will, use the base form." },
        { incorrect: "Look at the glass! It will fall!", correct: "Look at the glass! It is going to fall!", explanation: "A prediction based on visible evidence commonly uses going to." },
      ]),
      tip("Do not choose only by the word tomorrow or next week. Ask what the speaker means: decision, plan, arrangement or timetable."),
    ],
    ["Will often expresses decisions now, offers, promises and opinions.", "Going to often expresses plans and predictions based on evidence.", "Present continuous often describes arrangements; present simple describes schedules.", "Future time words do not decide the form by themselves."],
  ),
  "choosing-a-tense": lesson(
    "To choose a tense, first decide when the event happens. Then ask whether it is a habit, in progress, complete, or connected to another time.",
    [],
    [
      text("Step 1: Find the time", "Decide whether you are talking about the past, present or future. A time expression can help, but it is not a rule by itself. Yesterday usually points to a finished past event; tomorrow points to a future meaning, but several future forms are possible.", [
        { text: "I saw Jo yesterday. (finished past)" }, { text: "I am seeing Jo tomorrow. (arrangement)" }, { text: "The shop opens at nine tomorrow. (schedule)" },
      ]),
      text("Step 2: Choose the kind of meaning", "For a habit or fact, choose a simple form. For an action in progress at a particular time, choose a continuous form. For a completed action before another point, choose a perfect form. For an activity continuing over a period up to another point, choose a perfect continuous form.", [
        { text: "I walk to work every day. (habit)" }, { text: "I am walking to work now. (in progress)" }, { text: "I have walked five kilometres today. (completed amount, time still open)" }, { text: "I have been walking for an hour. (duration)" },
      ]),
      text("Step 3: Check what time you are looking from", "Perfect forms connect two times. Present perfect connects a past event to now. Past perfect looks back from a past time to an earlier event. Future perfect looks from now to a future time and says what will be complete before it.", [
        { text: "I have finished my homework, so I can relax now." }, { text: "I had finished my homework before my friends arrived." }, { text: "I will have finished my homework by eight." },
      ]),
      text("Use time expressions as clues, not commands", "Words such as already, yet, since and for often appear with perfect forms, while now often appears with the present continuous. But meaning and context are more important than memorising a word-to-tense list. Some words can appear with more than one tense and change the meaning.", [
        { text: "I have lived here for five years. (I still live here)" }, { text: "I lived there for five years. (that time is finished)" }, { text: "We are leaving tomorrow. (arrangement)" }, { text: "We leave tomorrow at 7:00. (schedule)" },
      ]),
      table("A quick choice guide", ["Meaning", "Ask yourself", "Common form"], [
        ["habit / fact", "Does it happen regularly or stay true?", "simple"], ["action in progress", "Was it happening at that time?", "continuous"], ["finished before a point", "Was it complete by then?", "perfect"], ["duration up to a point", "How long had it continued?", "perfect continuous"],
      ]),
      mistakes([
        { incorrect: "I am going to work every day.", correct: "I go to work every day.", explanation: "Use the present simple for a regular habit." },
        { incorrect: "I have seen him last night.", correct: "I saw him last night.", explanation: "Last night is a finished past time." },
        { incorrect: "At 8 yesterday, I cooked dinner. (meaning: the action was in progress)", correct: "At 8 yesterday, I was cooking dinner.", explanation: "Use the past continuous for an action in progress at a past time." },
      ]),
      tip("Say the sentence with its context. Ask “When?”, “Is it a habit?”, “Is it in progress?” and “Is it complete by another time?” before selecting the form."),
    ],
    ["Use the time and meaning together to choose a tense.", "Simple forms often describe habits and facts; continuous forms show actions in progress.", "Perfect forms connect times; perfect continuous forms stress duration.", "Time expressions are clues, not automatic tense rules."],
  ),
  "comparing-tenses": lesson(
    "Tenses can describe the same event from different points of view. Compare the time, the result and whether the speaker focuses on a habit, a finished action or an activity in progress.",
    [],
    [
      table("Compare common forms", ["Form", "Example", "Main idea"], [
        ["Present simple", "I work at home.", "habit or usual situation"], ["Present continuous", "I am working at home today.", "temporary situation now"], ["Past simple", "I worked at home yesterday.", "finished past event"], ["Present perfect", "I have worked at home this week.", "past action in an unfinished time / connected to now"],
      ]),
      text("Present simple and present continuous", "Use the present simple for something regular or generally true. Use the present continuous for something happening now or temporarily. Some state verbs, such as like and know, are normally simple.", [
        { text: "Leo works in a hotel. (his regular job)" }, { text: "Leo is working at a café this week. (temporary)" }, { text: "I usually cook, but today we are ordering food." },
      ]),
      text("Past simple and present perfect", "Use the past simple with a finished time such as yesterday, last year or in 2021. Use the present perfect when the exact past time is not given or when a time period is still open and connected to now. The present perfect does not usually go with a finished-time expression.", [
        { text: "I lost my keys yesterday. (finished time)" }, { text: "I have lost my keys. (I cannot find them now)" }, { text: "She has read two books this month. (the month is still open)" },
      ]),
      text("Past simple and past continuous", "Use the past simple for a finished event. Use the past continuous for an action in progress around a past time. Together, the continuous form often gives the background and the simple form gives the shorter event.", [
        { text: "I cooked dinner at seven. (completed event)" }, { text: "I was cooking dinner at seven. (in progress at seven)" }, { text: "I was cooking when the doorbell rang." },
      ]),
      text("Perfect and perfect continuous", "The perfect simple often focuses on completion, a result or an amount. The perfect continuous focuses on the activity and how long it continued. With stative verbs, use the simple form in most cases.", [
        { text: "She has painted the room. (the room is finished)" }, { text: "She has been painting the room. (focus on the activity; it may not be finished)" }, { text: "We have known each other for years. (not usually: have been knowing)" },
      ]),
      text("Future forms", "Will often expresses a decision now or an opinion. Going to often expresses a plan or a prediction based on evidence. The present continuous describes arrangements, and the present simple describes schedules. The meanings can overlap, so use the surrounding context.", [
        { text: "I'll answer the phone. (decision now)" }, { text: "I'm going to learn to drive. (plan)" }, { text: "I'm meeting my teacher at five. (arrangement)" }, { text: "The lesson starts at five. (schedule)" },
      ]),
      mistakes([
        { incorrect: "I have finished school in 2020.", correct: "I finished school in 2020.", explanation: "Use the past simple with a finished, named time." },
        { incorrect: "She works now. (meaning: at this moment)", correct: "She is working now.", explanation: "Use the present continuous for an action in progress now." },
        { incorrect: "I have been reading three books this week. (meaning: all three are complete)", correct: "I have read three books this week.", explanation: "Use the present perfect simple to focus on a completed number." },
      ]),
      tip("When two forms seem possible, decide what you want to emphasise: a routine, an action in progress, a finished time, a present result or the length of an activity."),
    ],
    ["Present simple is usual; present continuous is temporary or in progress.", "Past simple goes with finished past times; present perfect connects the past to now.", "Past continuous gives a past background; past simple tells the completed event.", "Simple perfect forms focus on results or amounts; continuous perfect forms focus on activity and duration."],
  ),
};

const neutralOverview = ["What Are Tenses?", "Present, Past and Future", "Simple, Continuous, Perfect and Perfect Continuous", "Verb Forms: Base, Past Simple and Past Participle", "Regular and Irregular Verbs", "How to Build Positive, Negative and Question Forms", "Auxiliary Verbs: Be, Do and Have"];

const basics: Record<string, GrammarLesson> = {
  "what-are-tenses": lesson("A tense is a verb form that helps show when something happens. English also uses verb forms to show whether an action is usual, in progress, complete or continuing over time.", [], [
    text("Time and viewpoint", "Time answers when: past, present or future. The form also gives a viewpoint. A simple form can describe a habit or event; a continuous form shows an activity in progress; a perfect form connects two times; a perfect continuous form stresses duration.", [{ text: "I walk to work. (a habit)" }, { text: "I am walking to work. (now)" }, { text: "I have walked five kilometres. (a result up to now)" }, { text: "I have been walking for an hour. (duration)" }]),
    text("Tense and context", "A time word can help, but it does not choose the tense by itself. The speaker's meaning and the situation matter too. For example, tomorrow can appear with will, going to, the present continuous or the present simple.", [{ text: "I'll call you tomorrow. (decision or promise)" }, { text: "I'm meeting Jo tomorrow. (arrangement)" }, { text: "The train leaves tomorrow at six. (schedule)" }]),
    tip("First ask when the event happens. Then ask whether it is a habit, in progress, complete or continuing for a period."),
  ], ["Tense forms help show time and viewpoint.", "Simple, continuous and perfect forms give different information about an action.", "Use context as well as time expressions to choose a form."], true),
  "present-past-future": lesson("English sentences can refer to present, past or future time. Verb forms and time expressions work together to make the time clear.", [], [
    table("A simple time map", ["Time", "Common form", "Example"], [["Present", "present simple / continuous / perfect", "I work. / I am working. / I have worked."], ["Past", "past simple / continuous / perfect", "I worked. / I was working. / I had worked."], ["Future", "will / going to / other forms", "I will work. / I am going to work."]]),
    text("Present time", "Use present forms for things true now, habits, activities happening around now, or past events connected to the present. The present simple is common for routines; the present continuous is common for actions in progress.", [{ text: "I take the bus every day." }, { text: "I am taking the bus today because my car is at the garage." }, { text: "I have taken the bus three times this week." }]),
    text("Past and future time", "Use past forms for events before now. Use different future forms for decisions, plans, arrangements and schedules. English does not use one future form for every future meaning.", [{ text: "We moved here last year." }, { text: "I will help you." }, { text: "We are visiting our cousins on Sunday." }, { text: "The shop opens at ten tomorrow." }]),
  ], ["Present time includes habits and actions around now.", "Past forms describe events before now.", "Future meanings use several forms; choose by meaning and context."]),
  "tense-aspects": lesson("Simple, continuous, perfect and perfect continuous forms show different ways to view an action. They can be used with past, present and future time.", [], [
    table("Four ways to view an action", ["Form", "Main idea", "Example"], [["Simple", "habit, fact or whole event", "She works / worked."], ["Continuous", "activity in progress", "She is / was working."], ["Perfect", "completed before or connected to a time", "She has / had worked."], ["Perfect Continuous", "activity and its duration", "She has / had been working."]]),
    text("Choose the viewpoint", "The simple form does not usually show an action in progress. The continuous form puts attention on the activity at a time. The perfect form looks back from a later time. The perfect continuous form also looks back but gives more attention to how long the activity continued.", [{ text: "At 8, I read the report. (a whole event)" }, { text: "At 8, I was reading the report. (in progress then)" }, { text: "I had read it before the meeting. (complete before then)" }, { text: "I had been reading for an hour. (duration before then)" }]),
    tip("Not every verb naturally uses a continuous form. State verbs such as know and own are usually simple."),
  ], ["Simple gives a general or whole-event view.", "Continuous shows an activity in progress.", "Perfect forms look back from another time; perfect continuous forms stress duration."]),
  "verb-forms-tense-basics": lesson("English tenses use a small number of verb forms. Learn the base form, the past simple and the past participle so you can build many different sentences.", [], [
    table("Three important forms", ["Name", "Regular example", "Irregular example"], [["Base", "work", "go"], ["Past simple", "worked", "went"], ["Past participle", "worked", "gone"]]),
    text("Where the forms appear", "Use the base form after do/does/did in questions and negatives, after modal verbs, and after to. Use the past form in positive past simple sentences. Use the past participle after have in perfect forms and after be in many passive forms.", [{ text: "Does she work here?" }, { text: "She worked yesterday." }, { text: "She has worked here for years." }, { text: "The job was finished." }, { text: "He wants to work abroad." }]),
    mistakes([{ incorrect: "Did she went?", correct: "Did she go?", explanation: "Use the base form after did." }, { incorrect: "She has went.", correct: "She has gone.", explanation: "Use the past participle after has." }]),
  ], ["Learn the base, past simple and past participle forms.", "Do-support and modals take the base form.", "Have and passive be take a past participle."]),
  "regular-irregular-verbs-tenses": lesson("Regular verbs usually add -ed for the past simple and past participle. Irregular verbs change in different ways, so learn their forms one by one.", [], [
    table("Regular and irregular forms", ["Base", "Past simple", "Past participle"], [["play", "played", "played"], ["study", "studied", "studied"], ["go", "went", "gone"], ["take", "took", "taken"]]),
    text("Regular spelling", "Most verbs add -ed. Add only -d after a final e. Change consonant + y to -ied, and double some final consonants in short verbs: stop → stopped. The past simple and participle are normally the same for regular verbs.", [{ text: "We played tennis." }, { text: "She studied for the test." }, { text: "They stopped at the shop." }]),
    text("Irregular forms", "Irregular verbs do not follow the -ed rule. Some have the same form twice, and some have three different forms. Use the past simple for finished past events and the participle after have or in passive forms.", [{ text: "I saw him yesterday. (past simple)" }, { text: "I have seen him before. (participle)" }, { text: "The letter was written by Ana. (participle)" }]),
    tip("Write irregular verbs as three forms together: go–went–gone; take–took–taken."),
  ], ["Regular verbs normally add -ed.", "Irregular verbs need to be learned.", "Past simple and past participle do different jobs."]),
  "positive-negative-question-forms": lesson("English statements, negatives and questions often use different word orders. Auxiliary verbs help make these forms.", [], [
    table("Basic sentence patterns", ["Type", "Pattern", "Example"], [["Positive", "subject + verb", "She works."], ["Negative", "subject + auxiliary + not + verb", "She doesn't work."], ["Question", "auxiliary + subject + verb?", "Does she work?"], ["Short answer", "Yes/No + subject + auxiliary", "Yes, she does. / No, she doesn't."]]),
    text("Use the auxiliary", "If a sentence already has an auxiliary, put it before the subject in a question and after the subject in a negative. In present and past simple sentences with ordinary verbs, add do, does or did. Keep the main verb in the form that follows the auxiliary.", [{ text: "They are ready. → Are they ready? / They aren't ready." }, { text: "He works here. → Does he work here? / He doesn't work here." }, { text: "You called. → Did you call? / You didn't call." }]),
    mistakes([{ incorrect: "Does he works?", correct: "Does he work?", explanation: "The main verb is base form after does." }, { incorrect: "They not are ready.", correct: "They aren't ready.", explanation: "Put not after the auxiliary be." }]),
  ], ["Positive sentences usually put the subject before the verb.", "Negatives use an auxiliary + not.", "Questions often put the auxiliary before the subject." ]),
  "auxiliary-verbs-be-do-have": lesson("Be, do and have are important auxiliary verbs. They help make continuous and passive forms, simple questions and negatives, and perfect forms.", [], [
    table("Three helping verbs", ["Auxiliary", "Main uses", "Example"], [["be", "continuous and passive", "She is cooking. / It was made."], ["do", "simple questions and negatives", "Do you know? / He doesn't know."], ["have", "perfect forms", "We have finished."]]),
    text("Use be", "Be changes to am, is, are, was or were. Use be + -ing for an action in progress. Use be + past participle in a passive sentence. Be can also be a main verb with a noun or adjective.", [{ text: "I am waiting outside." }, { text: "The windows were cleaned yesterday." }, { text: "She is a doctor." }]),
    text("Use do and have", "Do/does/did help form questions and negatives when there is no other auxiliary. Have/has/had come before a past participle in perfect forms. Do not add do when be, have as a perfect auxiliary, or a modal is already helping the verb.", [{ text: "Did you call? I didn't call." }, { text: "They have arrived." }, { text: "Can you swim? (not: Do you can swim?)" }]),
    tip("In a question, move the first auxiliary before the subject: She has finished. → Has she finished?"),
  ], ["Be helps form continuous and passive structures.", "Do helps with simple present and past questions and negatives.", "Have helps form perfect tenses." ]),
};

Object.assign(TENSE_LESSONS, basics);

const SOURCE_BY_GROUP: Record<string, string> = {
  "present-simple-group": "present-simple", "present-continuous-group": "present-continuous", "present-perfect-group": "present-perfect", "present-perfect-continuous-group": "present-perfect-continuous",
  "past-simple-group": "past-simple", "past-continuous-group": "past-continuous", "past-perfect-group": "past-perfect", "past-perfect-continuous-group": "past-perfect-continuous",
  "future-will-group": "future-simple", "be-going-to-group": "future-forms", "present-continuous-future-group": "present-continuous", "present-simple-future-group": "present-simple",
  "future-continuous-group": "future-continuous", "future-perfect-group": "future-perfect", "future-perfect-continuous-group": "future-perfect-continuous",
};

const SOURCE_BY_SPECIAL_TOPIC: Record<string, string> = {
  "compare-past-simple-present-perfect": "present-perfect", "compare-present-perfect-simple-continuous": "present-perfect-continuous", "compare-past-simple-continuous": "past-continuous",
  "compare-past-simple-perfect": "past-perfect", "compare-past-perfect-continuous": "past-perfect-continuous", "compare-will-present-continuous-future": "future-simple", "comparing-will-vs-going-to": "future-simple",
  "compare-present-simple-continuous-future": "present-simple", "compare-future-simple-continuous": "future-continuous", "compare-future-perfect-continuous": "future-perfect",
  "time-expressions-present": "present-simple", "time-expressions-past": "past-simple", "time-expressions-future": "future-forms", "time-expressions-for-since": "present-perfect-continuous",
  "time-expressions-already-yet-just": "present-perfect", "time-expressions-ever-never": "present-perfect", "time-expressions-still-no-longer": "present-perfect",
  "time-expressions-ago-before-earlier": "past-simple", "time-expressions-by-until-by-time": "future-perfect", "time-expressions-when-while-as": "past-continuous",
  "mistakes-present-simple-continuous": "present-simple", "mistakes-past-simple-forms": "past-simple", "mistakes-do-does-did": "past-simple", "mistakes-was-were-did": "past-continuous",
  "mistakes-present-perfect-past-simple": "present-perfect", "mistakes-for-since": "present-perfect-continuous", "mistakes-will-going-to": "future-simple",
  "mistakes-stative-continuous": "present-continuous", "mistakes-wrong-verb-form": "past-simple", "mistakes-everyday-english": "comparing-tenses",
};

const OVERVIEW_FOR_SOURCE: Record<string, string[]> = {
  "present-simple": ["do / does"], "present-continuous": ["am / is / are doing"], "present-perfect": ["have / has done"], "present-perfect-continuous": ["have / has been doing"],
  "past-simple": ["did"], "past-continuous": ["was / were doing"], "past-perfect": ["had done"], "past-perfect-continuous": ["had been doing"],
  "future-simple": ["will do"], "future-continuous": ["will be doing"], "future-perfect": ["will have done"], "future-perfect-continuous": ["will have been doing"],
};

const COMPARISON_HIGHLIGHTS: Record<string, string[]> = {
  "comparing-tenses": ["do / does", "am / is / are doing"],
  "compare-past-simple-present-perfect": ["did", "have / has done"],
  "compare-present-perfect-simple-continuous": ["have / has done", "have / has been doing"],
  "compare-past-simple-continuous": ["did", "was / were doing"],
  "compare-past-simple-perfect": ["did", "had done"],
  "compare-past-perfect-continuous": ["had done", "had been doing"],
  "compare-will-present-continuous-future": ["will do", "am / is / are doing"],
  "compare-present-simple-continuous-future": ["do / does", "am / is / are doing"],
  "compare-future-simple-continuous": ["will do", "will be doing"],
  "compare-future-perfect-continuous": ["will have done", "will have been doing"],
  "comparing-will-vs-going-to": [],
};

function lessonHash(value: string): number {
  return [...value].reduce((hash, character) => hash + character.charCodeAt(0), 0);
}

function futureTopicTable(topicId: string): LessonBlock | undefined {
  const tables: Record<string, LessonBlock> = {
    "be-going-to-basics": table("Be going to: form and meaning", ["Use", "Form", "Example"], [
      ["Plan or intention", "subject + am/is/are + going to + base verb", "I'm going to study tonight."],
      ["Prediction from evidence", "subject + am/is/are + going to + base verb", "Look at the clouds. It's going to rain."],
      ["Negative", "subject + am/is/are + not + going to + base verb", "She isn't going to drive."],
      ["Question", "Am/Is/Are + subject + going to + base verb?", "Are they going to move?"],
    ], "Use going to for a plan made before speaking or a prediction based on what you can see or know now."),
    "be-going-to-forms": table("Be going to sentence forms", ["Type", "Pattern", "Example"], [
      ["Positive", "subject + am/is/are + going to + base verb", "He is going to call."],
      ["Negative", "subject + am/is/are + not + going to + base verb", "He isn't going to call."],
      ["Question", "Am/Is/Are + subject + going to + base verb?", "Is he going to call?"],
      ["Short answer", "Yes/No + subject + be", "Yes, he is. / No, he isn't."],
    ]),
    "be-going-to-plans": table("Plans and intentions", ["Meaning", "Example", "Why going to?"], [
      ["A plan made before speaking", "We're going to visit our aunt on Sunday.", "The decision already exists."],
      ["An intention", "I'm going to save money for a bike.", "It is something I intend to do."],
      ["Decision made now", "I'll open the window.", "Use will for a new decision or offer."],
    ]),
    "be-going-to-evidence": table("Predictions from present evidence", ["What you see or know now", "Prediction"], [
      ["The sky is very dark.", "It is going to rain."],
      ["The child is running towards the road.", "He's going to fall."],
      ["I think our team will win.", "Will gives an opinion, not a visible clue."],
    ]),
    "will-vs-going-to": table("Will or going to?", ["Form", "Common use", "Example"], [
      ["will + base verb", "Decision now, offer, promise or opinion", "The phone is ringing. I'll answer."],
      ["am/is/are going to + base verb", "Earlier plan or prediction from present evidence", "We are going to move next month."],
      ["am/is/are going to + base verb", "Prediction from something visible", "Look out! You're going to drop it."],
    ]),
    "future-present-continuous-arrangements": table("Present continuous for arrangements", ["Pattern", "Use", "Example"], [
      ["subject + am/is/are + verb-ing", "A fixed personal arrangement", "I'm meeting Ana at six."],
      ["subject + am/is/are + not + verb-ing", "A plan that is not happening", "We aren't travelling tomorrow."],
      ["Am/Is/Are + subject + verb-ing?", "Ask about an arrangement", "Are you seeing the doctor today?"],
    ], "A future time phrase often makes the future meaning clear."),
    "present-continuous-vs-going-to": table("Arrangement or intention?", ["Form", "Focus", "Example"], [
      ["Present continuous", "A fixed arrangement, often with a time or another person", "I'm having lunch with Mia at one."],
      ["Going to", "A plan or intention; details may not be fixed", "I'm going to have more lunches at home."],
    ]),
    "future-arrangement-time-expressions": table("Time expressions for arrangements", ["Expression", "Example"], [
      ["at + time", "I'm meeting Lee at 5:30."], ["on + day/date", "We're leaving on Friday."], ["this / next + time period", "She's visiting us next week."],
    ], "Use a clear future time expression when the context does not already show when the arrangement happens."),
    "present-simple-timetables": table("Present simple for timetables", ["Subject", "Example"], [
      ["Transport", "The train leaves at 8:10 tomorrow."], ["Classes and events", "The lesson starts next Monday."], ["Questions about a schedule", "What time does the bus arrive?"],
    ], "Use the present simple for fixed schedules, even when the time is in the future."),
    "present-simple-fixed-events": table("Fixed events and programmes", ["Fixed event", "Example"], [
      ["A programme", "The concert begins at 7 p.m."], ["A course", "Our course ends in June."], ["A public schedule", "The museum opens at ten tomorrow."],
    ]),
    "present-simple-vs-continuous-future": table("Schedule or personal arrangement?", ["Form", "Use", "Example"], [
      ["Present simple", "An official timetable or fixed programme", "The bus leaves at nine."],
      ["Present continuous", "A personal arrangement", "I'm taking the bus with Sam at nine."],
    ]),
    "future-will-predictions-opinions": table("Will for predictions and opinions", ["Pattern", "Example"], [
      ["think / expect / hope + will + base verb", "I think our team will win."],
      ["will probably + base verb", "It will probably rain later."],
      ["will not / won't + base verb", "I don't think the shop will open today."],
    ]),
    "future-will-decisions": table("Will for a decision now", ["Situation now", "Offer or decision"], [
      ["The phone is ringing.", "I'll answer it."], ["This box is heavy.", "I'll help you."], ["I forgot to call Sam.", "I'll call him now."],
    ], "Use will when you decide at the moment of speaking."),
    "future-will-promises-offers-requests": table("Will, offers and requests", ["Purpose", "Example"], [
      ["Offer help", "I'll carry that for you."], ["Make a promise", "I will call you tonight."], ["Ask someone to do something", "Will you open the window, please?"],
    ]),
    "future-continuous-in-progress": table("Future continuous at a future time", ["Future point", "Action in progress"], [
      ["At 8 tonight", "I will be studying."], ["This time tomorrow", "They will be flying to Rome."], ["When you arrive", "We will be waiting outside."],
    ], "Use will be + verb-ing to show what will be happening around that time."),
    "future-continuous-vs-simple": table("Future continuous or will?", ["Form", "Focus", "Example"], [
      ["will + base verb", "Decision, offer, promise or prediction", "I'll call the taxi now."],
      ["will be + verb-ing", "An activity in progress at a future time", "At six, I'll be travelling home."],
    ]),
    "future-perfect-completed": table("Complete before a future point", ["Future deadline", "Completed action"], [
      ["by Friday", "I will have finished the report by Friday."], ["before the guests arrive", "We will have cooked dinner before the guests arrive."], ["by next year", "She will have saved enough by next year."],
    ]),
    "future-perfect-by-time": table("By, by the time and until", ["Expression", "Meaning", "Example"], [
      ["by + time", "No later than a deadline", "I'll have finished by six."],
      ["by the time + event", "Before another event happens", "They'll have left by the time we arrive."],
      ["until + time", "An action continues up to a time", "I'll wait until six."],
    ]),
    "future-perfect-vs-simple": table("Future perfect or will?", ["Form", "Focus", "Example"], [
      ["will + base verb", "A future event or decision", "She will finish the report tomorrow."],
      ["will have + past participle", "An action complete before a future point", "She will have finished by tomorrow."],
    ]),
    "future-perfect-continuous-duration": table("Duration up to a future point", ["Form", "Question", "Example"], [
      ["will have been + verb-ing", "How long?", "By June, I will have been working here for a year."],
      ["will have + past participle", "How much / what result?", "By June, I will have finished the course."],
    ]),
    "future-perfect-simple-vs-continuous": table("Future perfect: result or duration?", ["Form", "Focus", "Example"], [
      ["will have + past participle", "A completed result or amount", "By six, I will have written ten pages."],
      ["will have been + verb-ing", "The time spent on an activity", "By six, I will have been writing for three hours."],
    ]),
    "compare-past-simple-present-perfect": table("Past simple or present perfect?", ["Form", "Use", "Example"], [
      ["Past simple", "Finished, named past time", "I saw her yesterday."],
      ["Present perfect", "Experience or a connection to now", "I have seen her before."],
    ]),
    "compare-present-perfect-simple-continuous": table("Present perfect: result or activity?", ["Form", "Focus", "Example"], [
      ["have/has + past participle", "Completed result or amount", "She has painted two rooms."],
      ["have/has been + verb-ing", "Activity or duration", "She has been painting all morning."],
    ]),
    "compare-past-simple-continuous": table("Past simple or past continuous?", ["Form", "Use", "Example"], [
      ["Past simple", "A finished event", "The phone rang."],
      ["Past continuous", "An action in progress then", "I was cooking when the phone rang."],
    ]),
    "compare-past-simple-perfect": table("Past simple or past perfect?", ["Form", "Time order", "Example"], [
      ["Past simple", "The later past event", "The train left at six."],
      ["Past perfect", "An earlier event before another past time", "The train had left before we arrived."],
    ]),
    "compare-past-perfect-continuous": table("Past perfect: completion or duration?", ["Form", "Focus", "Example"], [
      ["had + past participle", "A completed result before a past time", "She had finished before lunch."],
      ["had been + verb-ing", "An activity and its duration before a past time", "She had been working for hours."],
    ]),
    "comparing-will-vs-going-to": table("Will or going to?", ["Form", "Common use", "Example"], [
      ["will + base verb", "Decision now or opinion", "I'll answer the phone."],
      ["be going to + base verb", "Earlier plan or evidence-based prediction", "It's going to rain."],
    ]),
    "compare-will-present-continuous-future": table("Will or present continuous?", ["Form", "Common use", "Example"], [
      ["will + base verb", "Decision now, offer, promise or opinion", "I'll meet you at the station."],
      ["present continuous", "An arrangement already made", "I'm meeting Jo at the station at six."],
    ]),
    "compare-present-simple-continuous-future": table("Present simple or continuous for the future?", ["Form", "Common use", "Example"], [
      ["Present simple", "Timetable or fixed programme", "The train leaves at nine."],
      ["Present continuous", "Personal arrangement", "I'm leaving with Sam at nine."],
    ]),
    "compare-future-simple-continuous": table("Will or future continuous?", ["Form", "Focus", "Example"], [
      ["will + base verb", "Decision, offer or prediction", "I'll work late tonight."],
      ["will be + verb-ing", "Activity in progress at a future time", "At eight, I'll be working."],
    ]),
    "compare-future-perfect-continuous": table("Future perfect: result or duration?", ["Form", "Focus", "Example"], [
      ["will have + past participle", "Completion before a future point", "By noon, she will have finished."],
      ["will have been + verb-ing", "Duration up to a future point", "By noon, she will have been working for four hours."],
    ]),
  };

  return tables[topicId];
}

function makeFocusedLesson(topicId: string, title: string, summary: string, sourceId: string, path: string[]): GrammarLesson {
  const source = TENSE_LESSONS[sourceId];
  const titleWords = `${title} ${summary}`.toLowerCase().split(/[^a-z]+/).filter((word) => word.length > 3);
  const detailBlocks = source.blocks.filter((block): block is Extract<LessonBlock, { type: "text" }> => block.type === "text" && Boolean(block.examples?.length));
  const detail = detailBlocks
    .map((block) => ({ block, score: titleWords.reduce((score, word) => score + (block.title.toLowerCase().includes(word) ? 3 : block.body.toLowerCase().includes(word) ? 1 : 0), 0) }))
    .sort((left, right) => right.score - left.score)[0]?.block ?? detailBlocks[lessonHash(topicId) % Math.max(1, detailBlocks.length)];
  const examples = detail?.examples ?? [];
  const start = examples.length ? lessonHash(topicId) % examples.length : 0;
  const chosenExamples = examples.length ? Array.from({ length: Math.min(4, examples.length) }, (_, index) => examples[(start + index) % examples.length]) : [];
  const sourceMistakes = source.blocks.find((block) => block.type === "mistakes");
  const sourceTip = source.blocks.find((block) => block.type === "tip");
  const body = topicId === "be-going-to-basics"
    ? "Use be going to + the base verb for plans and intentions you already have. Use it also for a prediction based on evidence you can see or know now. Choose am, is or are to match the subject. For a negative, put not after be. For a question, put be before the subject."
    : `${summary} ${source.intro} For this point, first decide what time you are talking about, then check whether the action is usual, in progress, complete or continuing. Keep the subject and auxiliary together in the correct order. The examples show how the form works in everyday situations. A time expression can help, but meaning and context are the main guide.`;
  const highlights = COMPARISON_HIGHLIGHTS[topicId] ?? OVERVIEW_FOR_SOURCE[sourceId] ?? [];
  const contextBlocks: LessonBlock[] = [];
  const formation = source.blocks.find((block, index) => index > 0 && block.type === "table" && block.title.toLowerCase().includes("form"));
  const topicTable = futureTopicTable(topicId);
  if (topicTable) contextBlocks.push(topicTable);
  else if (/form|positive|negative|question|spelling|third-person|auxiliary|verb form/i.test(title) && formation) contextBlocks.push(formation);
  if (detail && detail.title !== title) contextBlocks.push(detail);
  if (topicId === "be-going-to-basics") contextBlocks.push(text("Going to and will", "Use will for a decision made now, an offer or a prediction based on what you think. Use going to for an earlier plan or a prediction based on present evidence.", [
    { text: "The phone is ringing. I'll answer it. (decision now)" },
    { text: "I'm going to call Sam tonight. (plan made earlier)" },
    { text: "Look at those clouds. It's going to rain. (evidence now)" },
  ]));
  const mistakeBlock: LessonBlock = sourceMistakes ?? mistakes([{ incorrect: "She have finished.", correct: "She has finished.", explanation: "Match the auxiliary to the subject and use the correct verb form." }]);
  const review = [summary, ...source.review.slice(0, 2)];
  return lesson(body, highlights, [
    text(`How ${title} works`, body, chosenExamples),
    ...contextBlocks,
    mistakeBlock,
    sourceTip ?? tip("Check the time, the subject and the verb form before you choose."),
  ], review);
}

const seenTopicIds = new Set<string>();
const leafLessonIds = new Set<string>();

function addFocusedLessons(topics: GrammarSectionTopic[], path: string[] = []): void {
  for (const topic of topics) {
    if (seenTopicIds.has(topic.id)) throw new Error(`Duplicate Tenses topic id: ${topic.id}`);
    seenTopicIds.add(topic.id);
    if (topic.topics?.length) {
      addFocusedLessons(topic.topics, [...path, topic.id]);
      continue;
    }
    leafLessonIds.add(topic.id);
    if (TENSE_LESSONS[topic.id]) continue;
    const sourceId = SOURCE_BY_GROUP[path[path.length - 1] ?? ""] ?? SOURCE_BY_SPECIAL_TOPIC[topic.id] ?? "present-simple";
    TENSE_LESSONS[topic.id] = makeFocusedLesson(topic.id, topic.name, topic.rule, sourceId, path);
  }
}

type GrammarSectionTopic = NonNullable<import("@/constants/grammar").GrammarSection["topics"]>[number];
const tensesSection = GRAMMAR_SECTIONS.find((section) => section.id === "tenses");
if (tensesSection?.topics) addFocusedLessons(tensesSection.topics);
const missingLessonIds = [...leafLessonIds].filter((topicId) => !TENSE_LESSONS[topicId]);
if (missingLessonIds.length) throw new Error(`Tenses lessons are missing: ${missingLessonIds.join(", ")}`);
