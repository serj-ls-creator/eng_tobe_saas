import type { GrammarLesson } from "./types";

export const PASSIVE_VOICE_LESSONS: Record<string, GrammarLesson> = {
  "passive-basics": {
    intro: "The passive voice focuses on an action or the person or thing affected by it. Use it when the agent is unknown, unimportant or already clear.",
    blocks: [
      { type: "text", title: "Form the passive", body: "Use the correct form of be + the past participle. The object of an active sentence usually becomes the subject of the passive sentence. The tense is shown by be; the main verb is a past participle.", examples: [
        { text: "Active: Workers clean the office every evening." }, { text: "Passive: The office is cleaned every evening." }, { text: "Active: Someone stole my bike." }, { text: "Passive: My bike was stolen." },
      ] },
      { type: "table", title: "Active to passive", headings: ["Active", "Passive", "What changes"], rows: [
        ["The chef cooks the meal.", "The meal is cooked by the chef.", "object → subject; add be + participle"],
        ["They repaired the bridge.", "The bridge was repaired.", "past tense moves to was"],
        ["Someone has opened the door.", "The door has been opened.", "keep have; add been + participle"],
      ] },
      { type: "text", title: "When to use it", body: "Use the passive when you do not know who did something, when the action is more important than the doer, or when the doer is obvious. News, instructions and descriptions of processes often use passive forms.", examples: [
        { text: "My wallet was found near the station. (the finder is unknown)" }, { text: "The patient is being examined. (the action is the focus)" }, { text: "The building was designed in 1920." },
      ] },
      { type: "text", title: "Only verbs with an object", body: "Most passive sentences come from verbs that take an object. A verb without an object, such as arrive, sleep or happen, normally cannot form a passive in this way.", examples: [
        { text: "They built a new library. → A new library was built." }, { text: "The guests arrived at noon. (no direct object, so no passive)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "The room cleaned every day.", correct: "The room is cleaned every day.", explanation: "A passive sentence needs a form of be before the past participle." },
        { incorrect: "The email was send yesterday.", correct: "The email was sent yesterday.", explanation: "Use the past participle: send → sent." },
        { incorrect: "The accident was happened at night.", correct: "The accident happened at night.", explanation: "Happen has no object here and does not take a passive form." },
      ] },
      { type: "tip", title: "Choose the focus", body: "If the doer matters, use an active sentence or add by + agent. If the action or receiver matters more, put the receiver first and use the passive." },
    ],
    review: ["Form: be + past participle.", "The passive focuses on the action or its receiver; the agent can be left out.", "A passive usually needs a verb that can take an object."],
  },
  "passive-verb-forms": {
    intro: "To make a passive in different tenses, change the form of be and keep the main verb as a past participle. The tense and aspect are carried by the be/have combination.",
    blocks: [
      { type: "table", title: "Common passive tenses", headings: ["Tense", "Passive form", "Example"], rows: [
        ["Present simple", "am/is/are + past participle", "The rooms are cleaned daily."], ["Past simple", "was/were + past participle", "The bridge was built in 1998."], ["Present continuous", "am/is/are being + past participle", "The road is being repaired."], ["Past continuous", "was/were being + past participle", "The car was being checked."], ["Present perfect", "has/have been + past participle", "The package has been delivered."], ["Past perfect", "had been + past participle", "The tickets had been sold."], ["Future with will", "will be + past participle", "The results will be announced."],
      ] },
      { type: "text", title: "Keep the tense", body: "When changing an active sentence to passive, keep its tense. Move the object to the subject position, then put the same tense on be. Do not change the past participle to the past simple form if they are different.", examples: [
        { text: "They are painting the kitchen. → The kitchen is being painted." }, { text: "They had closed the shop. → The shop had been closed." }, { text: "They will invite us. → We will be invited." },
      ] },
      { type: "text", title: "Questions and negatives", body: "Make a negative by putting not after the first auxiliary. In questions, move the first auxiliary before the subject. Keep the rest of the passive form together.", examples: [
        { text: "The form was not signed." }, { text: "Has the parcel been sent?" }, { text: "Why is the road being closed?" },
      ] },
      { type: "text", title: "Continuous and perfect forms", body: "Continuous passive forms use be + being + past participle. Perfect passive forms use have + been + past participle. Although these forms can be long, keep each helper verb in order.", examples: [
        { text: "The house is being painted this week." }, { text: "The house has been painted already." }, { text: "The house had been being painted... (grammatical but very uncommon; rewrite for clarity)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "The windows are cleaned right now.", correct: "The windows are being cleaned right now.", explanation: "Use the present continuous passive for an action happening now." },
        { incorrect: "The report has wrote.", correct: "The report has been written.", explanation: "A present perfect passive needs has/have been + past participle." },
        { incorrect: "Will the invitations sent tomorrow?", correct: "Will the invitations be sent tomorrow?", explanation: "Use be after will in the future passive." },
      ] },
      { type: "tip", title: "Find the helper verb", body: "First identify the tense in the active sentence. Then choose its passive be form: is/are, was/were, being, been or will be. Finish with the past participle." },
    ],
    review: ["Change be to show the tense; keep the main verb as a past participle.", "Continuous passive: be + being + participle; perfect passive: have + been + participle.", "Questions move the first auxiliary before the subject."],
  },
  "passive-modal-verbs": {
    intro: "Use a modal passive to talk about what can, must, should or might be done. The pattern is modal + be + past participle.",
    blocks: [
      { type: "table", title: "Modal passive forms", headings: ["Meaning", "Form", "Example"], rows: [
        ["ability / possibility", "can be + participle", "This file can be opened on a phone."], ["obligation", "must be + participle", "Seat belts must be worn."], ["advice", "should be + participle", "The instructions should be read first."], ["possibility", "might be + participle", "The meeting might be cancelled."], ["necessity", "have to be + participle", "The form has to be signed."],
      ] },
      { type: "text", title: "Build the form", body: "Use the modal followed by be (not is, are or been), then the past participle. The modal does not change for he, she or it. For have to, use the correct form of have before to be.", examples: [
        { text: "You can solve this problem. → This problem can be solved." }, { text: "They should check the address. → The address should be checked." }, { text: "The manager has to approve it. → It has to be approved." },
      ] },
      { type: "text", title: "Negatives and questions", body: "Put not after the modal to make a negative. To form a question, put the modal before the subject. With have to, use do/does/did to make questions and negatives.", examples: [
        { text: "Food must not be taken into the room." }, { text: "Can the parcel be delivered today?" }, { text: "Does the form have to be completed online?" },
      ] },
      { type: "text", title: "Modal passive in instructions", body: "Modal passives are useful for rules and instructions because they focus on what needs to happen rather than who must do it.", examples: [
        { text: "Passwords should be changed regularly." }, { text: "All equipment must be switched off." }, { text: "The tickets can be collected at the desk." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "The files should checked today.", correct: "The files should be checked today.", explanation: "Add be between the modal and past participle." },
        { incorrect: "This must is done now.", correct: "This must be done now.", explanation: "Use the base form be after a modal." },
        { incorrect: "Can be this fixed?", correct: "Can this be fixed?", explanation: "Put the modal before the subject; the passive phrase follows it." },
      ] },
      { type: "tip", title: "Three-part pattern", body: "Remember modal + be + past participle: might + be + delayed; should + be + checked; can + be + repaired." },
    ],
    review: ["Form: modal + be + past participle.", "Use the base form be after the modal.", "Put not after the modal and move the modal before the subject in a question."],
  },
  "passive-two-objects": {
    intro: "Some verbs take two objects: a person who receives something and a thing that is given, sent or shown. Either object can often become the subject of a passive sentence.",
    blocks: [
      { type: "text", title: "Two active patterns", body: "The same active meaning can use a person object directly or use to/for before the person. The indirect object is the receiver; the direct object is the thing received.", examples: [
        { text: "They gave Maya a key." }, { text: "They gave a key to Maya." }, { text: "Dad bought us lunch. / Dad bought lunch for us." },
      ] },
      { type: "table", title: "Two passive choices", headings: ["Active", "Passive with receiver", "Passive with thing"], rows: [
        ["They sent me an invitation.", "I was sent an invitation.", "An invitation was sent to me."], ["Someone taught us French.", "We were taught French.", "French was taught to us."], ["She bought Leo a notebook.", "Leo was bought a notebook. (less usual)", "A notebook was bought for Leo."],
      ] },
      { type: "text", title: "Which passive sounds natural?", body: "The receiver is often the subject when the sentence is about a person. The thing is often the subject when it is the main topic. With verbs such as buy, make and cook, a passive with the thing as subject and for + receiver is usually more natural.", examples: [
        { text: "I was offered a job." }, { text: "A job was offered to me." }, { text: "A cake was made for the children." },
      ] },
      { type: "text", title: "Keep to and for", body: "When the thing becomes the passive subject, keep to or for before the receiver when the verb pattern needs it. Do not add both prepositions or omit one that the construction requires.", examples: [
        { text: "The prize was given to the winner." }, { text: "A seat was saved for my friend." }, { text: "The plan was explained to us." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I was given to a present.", correct: "I was given a present. / A present was given to me.", explanation: "Do not use to after the receiver-subject pattern." },
        { incorrect: "A present was given me. (standard learner pattern)", correct: "A present was given to me.", explanation: "Use to before the receiver when the thing is the passive subject." },
        { incorrect: "A new bike was bought my sister.", correct: "A new bike was bought for my sister.", explanation: "Use for to identify the person the bike was bought for." },
      ] },
      { type: "tip", title: "Start with what matters", body: "If the receiver is the topic, make the person the passive subject. If the thing is the topic, make the thing the subject and keep to or for before the receiver." },
    ],
    review: ["Verbs like give, send, show and teach can take a receiver and a thing.", "Either object can often become the passive subject.", "Keep to/for before the receiver when the thing is the passive subject."],
  },
  "by-agent": {
    intro: "In a passive sentence, by + agent names the person or thing that performs the action. Include it only when the agent adds useful information.",
    blocks: [
      { type: "text", title: "Form and position", body: "Put by + agent after the past participle or at the end of the passive phrase. The agent can be a person, group or force. Do not confuse by (who did it) with with (the tool used).", examples: [
        { text: "The novel was written by Toni Morrison." }, { text: "The window was broken by the storm." }, { text: "The lock was opened with a key." },
      ] },
      { type: "table", title: "When to include the agent", headings: ["Situation", "Example", "Why"], rows: [
        ["Agent is important", "The mural was painted by local students.", "The people who did it matter."], ["Agent is unknown", "My bike was stolen.", "No agent is known."], ["Agent is obvious", "The suspect was arrested.", "The police are understood."], ["Focus on the result", "The road was closed.", "The action/result is the focus."],
      ] },
      { type: "text", title: "By or with", body: "Use by for the agent that performs the action. Use with for an instrument, material or tool used to do it. The tool is not the agent.", examples: [
        { text: "The picture was painted by Ana with a small brush." }, { text: "The message was sent by my manager." },
      ] },
      { type: "text", title: "Avoid unnecessary agents", body: "Do not add by people or by someone when the agent is unknown or unimportant. It makes the sentence longer without adding useful information. Add a specific agent when it helps identify responsibility or authorship.", examples: [
        { text: "The parcel was delivered this morning." }, { text: "The first computer was developed by a team of engineers." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "The cake was made with my aunt.", correct: "The cake was made by my aunt.", explanation: "Use by for the person who made the cake." },
        { incorrect: "The cake was cut by a sharp knife.", correct: "The cake was cut with a sharp knife.", explanation: "A knife is the instrument, so use with." },
        { incorrect: "The homework was checked by someone.", correct: "The homework was checked.", explanation: "Omit a vague agent when it adds no useful information." },
      ] },
      { type: "tip", title: "Ask ‘who?’ or ‘what tool?’", body: "Ask ‘Who or what performed the action?’ → by. Ask ‘What instrument did they use?’ → with." },
    ],
    review: ["By + agent says who or what performs the action.", "Use with for an instrument or tool.", "Leave the agent out when it is unknown, obvious or unimportant."],
  },
  "get-passive": {
    intro: "The get-passive uses get + past participle. It is common in informal English, especially for events or changes that affect someone or something.",
    blocks: [
      { type: "text", title: "Form", body: "Use the correct form of get + past participle. Change get to gets, got or will get to show the tense. The subject receives or experiences the action.", examples: [
        { text: "He got hurt during the game." }, { text: "My phone got damaged in my bag." }, { text: "They get paid every Friday." },
      ] },
      { type: "table", title: "Be-passive and get-passive", headings: ["Be-passive", "Get-passive", "Typical focus"], rows: [
        ["The door was locked at ten.", "The door got locked at ten.", "be: neutral state or event; get: event/change"], ["She was promoted last year.", "She got promoted last year.", "get often sounds more conversational"], ["The window was broken by a ball.", "The window got broken by a ball.", "get can highlight an unexpected event"],
      ] },
      { type: "text", title: "Common expressions", body: "Get-passives often describe experiences or changes, including accidents, problems and life events. Many expressions are familiar fixed combinations, such as get married or get dressed.", examples: [
        { text: "We got stuck in traffic." }, { text: "He got dressed quickly." }, { text: "They got married in June." },
      ] },
      { type: "text", title: "Use it carefully", body: "The be-passive is more neutral and works in formal writing and descriptions of processes. The get-passive is usually more informal and often suggests a change, event or personal involvement. Not every passive sentence sounds natural with get.", examples: [
        { text: "The results were published on the website. (neutral/formal)" }, { text: "I got caught in the rain. (personal experience)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "He got hurted at work.", correct: "He got hurt at work.", explanation: "Use the past participle after get; hurt is irregular and has the same form." },
        { incorrect: "The new law got introduced by Parliament. (formal report)", correct: "The new law was introduced by Parliament.", explanation: "Prefer the be-passive in formal reporting and official writing." },
        { incorrect: "She got arrive late.", correct: "She arrived late. / She got delayed.", explanation: "A get-passive needs a past participle; arrive does not take a passive in this meaning." },
      ] },
      { type: "tip", title: "Event or state?", body: "Choose get when you want a conversational tone and highlight an event or change. Choose be for a neutral or formal passive." },
    ],
    review: ["Form: get + past participle.", "It is common in informal English for events and changes affecting the subject.", "Use the be-passive for neutral, formal or process-focused writing."],
  },
  "passive-reporting": {
    intro: "Passive reporting structures let us report general beliefs, opinions or information when the speaker or source is not important. Two common patterns begin with It is said... and He is said to...",
    blocks: [
      { type: "table", title: "Two reporting patterns", headings: ["Pattern", "Example", "Meaning"], rows: [
        ["It + be + past participle + that-clause", "It is said that the building is haunted.", "People say this about the building."], ["subject + be + past participle + to-infinitive", "The building is said to be haunted.", "Same report, building as subject"],
      ] },
      { type: "text", title: "It is said that...", body: "Use It + be + reporting participle + that + clause. Common reporting participles include said, believed, thought, reported, known and expected. The that can sometimes be omitted in everyday English.", examples: [
        { text: "It is believed that the painting is genuine." }, { text: "It was reported that nobody was hurt." }, { text: "It is expected that prices will rise." },
      ] },
      { type: "text", title: "Subject + is said to...", body: "Make the person or thing from the that-clause the subject, then use be + reporting participle + to-infinitive. Use to be + adjective/noun, or to + base verb for an action.", examples: [
        { text: "People say that Leo is very rich. → Leo is said to be very rich." }, { text: "People believe that she lives abroad. → She is believed to live abroad." }, { text: "They reported that he left early. → He was reported to have left early. (earlier action)" },
      ] },
      { type: "text", title: "Same time or earlier time", body: "Use a simple to-infinitive when the reported situation is true at the same time as the reporting. Use to have + past participle when the reported action happened earlier. For A2 writing, the It is said that... pattern is often easier.", examples: [
        { text: "The singer is said to live in London. (current situation)" }, { text: "The singer is said to have moved to London last year. (earlier action)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "It is said the building to be old.", correct: "It is said that the building is old. / The building is said to be old.", explanation: "Choose one complete reporting pattern; do not mix their structures." },
        { incorrect: "He is believed that he is honest.", correct: "It is believed that he is honest. / He is believed to be honest.", explanation: "Use It as the subject of the that-clause pattern, or make the person the subject of the infinitive pattern." },
        { incorrect: "She is thought to lives nearby.", correct: "She is thought to live nearby.", explanation: "Use the base verb after to." },
      ] },
      { type: "tip", title: "Choose a pattern", body: "Keep a full that-clause after It is said/believed, or make the reported person/thing the subject and use to + verb. Do not combine the two patterns." },
    ],
    review: ["Pattern 1: It + passive reporting verb + (that) clause.", "Pattern 2: subject + passive reporting verb + to-infinitive.", "Use to have + past participle when the reported action happened earlier."],
  },
  "have-get-something-done": {
    intro: "Use have/get + object + past participle when you arrange for another person to do a service or task for you. The subject arranges it; the subject does not usually perform the action themselves.",
    blocks: [
      { type: "text", title: "The basic pattern", body: "Use have + object + past participle, or get + object + past participle. The object is the thing that receives the service. Get is more informal; have is neutral and slightly more formal.", examples: [
        { text: "I had my hair cut yesterday. (a hairdresser cut it)" }, { text: "We are getting the kitchen painted." }, { text: "She has her car serviced every year." },
      ] },
      { type: "table", title: "Change the tense on have/get", headings: ["Time", "Form", "Example"], rows: [
        ["Present routine", "have/has + object + participle", "He has his eyes tested every year."], ["Past", "had/got + object + participle", "They had the locks changed."], ["Future", "will have + object + participle", "I will have the package delivered."], ["Present continuous", "am/is/are having + object + participle", "We are having the roof repaired."],
      ] },
      { type: "text", title: "Compare with doing it yourself", body: "Without have/get something done, the subject is normally understood to perform the verb. With the causative pattern, another person does it, often as a service or arrangement.", examples: [
        { text: "I cut my hair. (I did the cutting.)" }, { text: "I had my hair cut. (someone cut it for me.)" }, { text: "They are painting the house. (they are doing it) / They are having the house painted. (a painter is doing it)" },
      ] },
      { type: "text", title: "Questions and unexpected events", body: "Use do/does/did with have to form questions and negatives in simple tenses. This pattern can also describe an unpleasant event that happens to someone, not something they arranged: have something stolen.", examples: [
        { text: "Did you have your phone repaired?" }, { text: "I didn't get the report printed." }, { text: "She had her bag stolen on the train. (an unwanted event)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I had cut my hair yesterday. (intended: a hairdresser did it)", correct: "I had my hair cut yesterday.", explanation: "Put the object between have and the past participle." },
        { incorrect: "We got the kitchen to paint.", correct: "We got the kitchen painted.", explanation: "Use get + object + past participle for an arranged service." },
        { incorrect: "She has her car service every year.", correct: "She has her car serviced every year.", explanation: "Use the past participle after the object." },
      ] },
      { type: "tip", title: "Who does the action?", body: "Ask whether the subject does the work. If another person does it by arrangement, use have/get + object + past participle." },
    ],
    review: ["Form: have/get + object + past participle.", "Use it for services arranged by the subject; get is more informal.", "It can also describe an unpleasant event: have your wallet stolen."],
  },
};
