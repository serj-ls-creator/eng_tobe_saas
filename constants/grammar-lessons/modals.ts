import type { GrammarLesson } from "./types";

export const MODAL_LESSONS: Record<string, GrammarLesson> = {
  "can-could": {
    intro: "Can and could are modal verbs. They are used for ability, permission, requests and possibility. The verb after them stays in its base form.",
    blocks: [
      { type: "table", title: "Main uses", headings: ["Modal", "Use", "Example"], rows: [
        ["can", "present ability", "I can swim."], ["could", "general past ability", "She could read at four."], ["can", "informal permission", "Can I sit here?"], ["could", "polite request", "Could you open the window?"], ["could", "possible suggestion", "We could take a taxi."],
      ] },
      { type: "text", title: "Form", body: "Use can/could + base verb without to. Add not to make a negative, and put can/could before the subject in a question. The modal form does not change with he, she or it.", examples: [
        { text: "He can drive, but he cannot (can't) park well." }, { text: "Could they come tomorrow?" }, { text: "I could not (couldn't) hear the announcement." },
      ] },
      { type: "text", title: "Ability in the past", body: "Could describes general ability in the past. For one successful action on a particular past occasion, use was/were able to or managed to. Could not can describe inability on one occasion.", examples: [
        { text: "When I was young, I could run very fast." }, { text: "After several attempts, we were able to open the door." }, { text: "I couldn't find my keys yesterday." },
      ] },
      { type: "text", title: "Permission and requests", body: "Can I...? is common for asking permission. Could you...? is a polite request for someone to do something; it does not refer to past time. May I...? is more formal for permission.", examples: [
        { text: "Can I borrow your charger?" }, { text: "Could you speak more slowly, please?" }, { text: "Could I leave a little early today?" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She can to play the piano.", correct: "She can play the piano.", explanation: "Use the base verb without to after can." },
        { incorrect: "Does he can drive?", correct: "Can he drive?", explanation: "Make a modal question by putting can before the subject; do not add do/does." },
        { incorrect: "I could to swim when I was six.", correct: "I could swim when I was six.", explanation: "Could is followed directly by the base verb." },
      ] },
      { type: "tip", title: "Could is not always past", body: "Could is past for general ability, but it is also used now for polite requests and possible suggestions: Could you help me? We could eat outside." },
    ],
    review: ["Can/could + base verb; no to, and no do/does in questions.", "Could describes general past ability and makes requests more polite.", "Use was/were able to for a particular successful past action."],
  },
  "may-might": {
    intro: "May and might express possibility. May is also used to ask for or give permission, especially in more formal situations.",
    blocks: [
      { type: "text", title: "Possibility", body: "Use may or might + base verb when something is possible but not certain. Might often sounds a little less certain, but in everyday English the difference is small and depends on the speaker.", examples: [
        { text: "It may rain this afternoon." }, { text: "We might visit my aunt this weekend." }, { text: "He may not know the answer." },
      ] },
      { type: "table", title: "Form and meaning", headings: ["Pattern", "Example", "Meaning"], rows: [
        ["may + base verb", "She may come later.", "possible"], ["might + base verb", "They might be at home.", "possible, perhaps less certain"], ["may/might not + base verb", "I might not have time.", "possible negative"], ["May I + base verb?", "May I ask a question?", "formal permission request"],
      ] },
      { type: "text", title: "Permission", body: "May I...? is a polite, somewhat formal way to ask permission. You can give permission with You may..., though can is more common in conversation. Do not use may not to mean ‘you do not have to’; it usually means ‘you are not allowed’ or ‘perhaps not’.", examples: [
        { text: "May I use your phone?" }, { text: "You may leave when you are ready." }, { text: "Visitors may not take photographs here." },
      ] },
      { type: "text", title: "May be and maybe", body: "May be is a modal plus the verb be: It may be true. Maybe is one adverb meaning perhaps: Maybe it is true. Their positions and grammar are different.", examples: [
        { text: "The keys may be in the car." }, { text: "Maybe the keys are in the car." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She might to be late.", correct: "She might be late.", explanation: "Use the base verb without to after might." },
        { incorrect: "Maybe he may comes later.", correct: "Maybe he may come later. / Maybe he will come later.", explanation: "Use the base verb after may; maybe itself already means perhaps." },
        { incorrect: "You may not bring food. (intended: it is not necessary)", correct: "You do not have to bring food.", explanation: "May not usually expresses prohibition or possibility, not lack of obligation." },
      ] },
      { type: "tip", title: "Possibility, not permission", body: "In ‘It may rain’, may expresses possibility. In ‘May I come in?’, it asks for permission. The subject and context make the use clear." },
    ],
    review: ["May and might + base verb express possibility.", "May I...? is a polite permission question.", "Maybe is one word meaning perhaps; may be is a verb phrase."],
  },
  "must-have-to": {
    intro: "Must and have to express obligation, but their negative forms have very different meanings. Mustn't means something is forbidden; don't have to means it is not necessary.",
    blocks: [
      { type: "table", title: "Obligation and necessity", headings: ["Form", "Meaning", "Example"], rows: [
        ["must + base verb", "strong obligation; often the speaker's rule", "I must remember to call Mum."], ["have/has to + base verb", "necessity or an outside rule", "She has to wear a uniform at work."], ["had to + base verb", "past obligation", "We had to wait an hour."], ["will have to + base verb", "future obligation", "You will have to show your ticket."],
      ] },
      { type: "text", title: "Mustn't or don't have to?", body: "Must not / mustn't means do not do it; it is prohibited. Do not have to means the action is optional or unnecessary. Use this contrast carefully because the meanings are not interchangeable.", examples: [
        { text: "You mustn't feed the animals. (It is not allowed.)" }, { text: "You don't have to bring food. (It is optional.)" }, { text: "I mustn't forget my passport. (strong personal reminder)" },
      ] },
      { type: "text", title: "Questions and past forms", body: "Use do/does/did with have to in questions and negatives. Must has no ordinary past form; use had to for past obligation. Must is not usually used for a past obligation that is already finished.", examples: [
        { text: "Do we have to book in advance?" }, { text: "He doesn't have to work on Sunday." }, { text: "Did you have to pay for parking?" },
      ] },
      { type: "text", title: "Must for a strong conclusion", body: "Must can also express a logical conclusion: you believe something is true because of the evidence. The negative conclusion is usually can't, not mustn't.", examples: [
        { text: "The lights are on, so they must be home." }, { text: "That can't be our bus; ours is blue." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "You mustn't come early. (intended: it is optional)", correct: "You don't have to come early.", explanation: "Mustn't means it is forbidden; don't have to means it is not necessary." },
        { incorrect: "Did she must leave?", correct: "Did she have to leave?", explanation: "Use did + have to to ask about a past obligation." },
        { incorrect: "He mustn't be at home; his car is outside. (intended: impossible conclusion)", correct: "He can't be at home; his car is outside.", explanation: "Use can't for a negative deduction; mustn't usually expresses prohibition." },
      ] },
      { type: "tip", title: "Past and future", body: "Must is mainly used for present or future obligations. Use had to for the past and will have to for a future obligation." },
    ],
    review: ["Must/have to express obligation; have to changes form with tense and subject.", "Mustn't = prohibited; don't have to = not necessary.", "Use had to for past obligation and can't for a negative deduction."],
  },
  "should-ought-to": {
    intro: "Should and ought to give advice, make recommendations and express what you expect. They are similar in meaning, but should is more common in everyday English.",
    blocks: [
      { type: "table", title: "Common uses", headings: ["Use", "Pattern", "Example"], rows: [
        ["Advice", "should + base verb", "You should get some rest."], ["Negative advice", "shouldn't + base verb", "You shouldn't skip breakfast."], ["Expectation", "should + base verb", "The parcel should arrive today."], ["Ought to", "ought to + base verb", "We ought to leave soon."],
      ] },
      { type: "text", title: "Form and questions", body: "Should is followed by the base verb without to. Ought is followed by to + base verb. Make a question by putting should before the subject; do not use do/does.", examples: [
        { text: "Should I tell him the news?" }, { text: "What should we bring?" }, { text: "You ought to check the time." },
      ] },
      { type: "text", title: "Shouldn't and ought not", body: "Use shouldn't for negative advice. Ought not to is also possible but less common and more formal. Do not confuse shouldn't (bad idea) with mustn't (not allowed).", examples: [
        { text: "You shouldn't drive when you are tired. (advice)" }, { text: "You mustn't park in front of this gate. (prohibition)" }, { text: "He ought not to spend all his savings." },
      ] },
      { type: "text", title: "Advice with a that-clause", body: "You can say I think you should... or use recommend/suggest + that-clause. In everyday English, the that-clause uses a normal present verb in many varieties: I suggest that he takes a break. The pattern suggest + gerund is also common.", examples: [
        { text: "I think you should speak to your manager." }, { text: "The doctor recommended that she rest." }, { text: "I suggest taking the earlier train." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "You should to see a doctor.", correct: "You should see a doctor.", explanation: "Should is followed by the base verb without to." },
        { incorrect: "Do I should call them?", correct: "Should I call them?", explanation: "Form a question by moving should before the subject." },
        { incorrect: "You shouldn't to worry.", correct: "You shouldn't worry.", explanation: "Use the base form after shouldn't." },
      ] },
      { type: "tip", title: "Strength of advice", body: "Should gives advice without making it a strict rule. Must or have to expresses a stronger obligation; mustn't states a prohibition." },
    ],
    review: ["Should + base verb; ought to + base verb.", "Use them for advice and expectations.", "Shouldn't is advice against an action; mustn't is prohibition."],
  },
  "will-would": {
    intro: "Will and would help express the future, decisions, offers, requests, habits and imagined situations. Their meaning depends on the structure and context.",
    blocks: [
      { type: "table", title: "Common uses", headings: ["Form", "Use", "Example"], rows: [
        ["will + base verb", "prediction or decision", "I think it will snow. / I'll answer the door."], ["will + base verb", "offer or promise", "I'll help you with that."], ["would + base verb", "polite request", "Would you pass the salt?"], ["would + base verb", "imagined result", "I would travel more if I had time."], ["would + base verb", "repeated past habit", "We would visit my grandparents every summer."],
      ] },
      { type: "text", title: "Will for the future", body: "Use will + base verb for predictions, promises, offers and decisions made at the moment of speaking. Make a negative with will not / won't and a question by putting will before the subject.", examples: [
        { text: "I think you will enjoy the film." }, { text: "The phone is ringing. I'll get it." }, { text: "Will you help me carry this?" },
      ] },
      { type: "text", title: "Would for polite language", body: "Would makes requests and offers more polite. Would you like...? offers something or invites someone. Would you...? asks someone to do something.", examples: [
        { text: "Would you like some tea?" }, { text: "Would you like to come with us?" }, { text: "Would you wait here for a moment, please?" },
      ] },
      { type: "text", title: "Would in imagined situations", body: "Use would + base verb in the result part of many imagined situations. It is also used for repeated past actions, often with a past-time phrase. It does not normally describe a past state; used to is better for states.", examples: [
        { text: "If I lived near the sea, I would swim every day." }, { text: "On Sundays, Dad would make pancakes." }, { text: "We used to live in a small village. (not usually: would live)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She will to call you.", correct: "She will call you.", explanation: "Will is followed by the base verb without to." },
        { incorrect: "Would you like having some tea?", correct: "Would you like to have some tea?", explanation: "Would like is followed by a to-infinitive." },
        { incorrect: "When I was a child, I would be shy. (intended: a past state)", correct: "When I was a child, I used to be shy.", explanation: "Used to describes past states; would is mainly for repeated past actions." },
      ] },
      { type: "tip", title: "Would like", body: "Would like means want in a polite way: I'd like a coffee (a thing) / I'd like to sit down (an action)." },
    ],
    review: ["Will expresses predictions, decisions, offers and promises.", "Would can make requests polite or describe imagined results.", "Would often describes repeated past actions, while used to also describes past states."],
  },
  "need-neednt": {
    intro: "Need expresses necessity. It can work as an ordinary verb with do/does/did, or as a modal in the negative needn't. Needn't means an action is not necessary.",
    blocks: [
      { type: "table", title: "Two patterns with need", headings: ["Pattern", "Meaning", "Example"], rows: [
        ["need to + verb", "necessity", "I need to charge my phone."], ["don't/doesn't need to + verb", "no necessity", "You don't need to bring anything."], ["needn't + base verb", "no necessity", "You needn't wait for me."], ["Do/Does + subject + need to...?", "question about necessity", "Do we need to book?"],
      ] },
      { type: "text", title: "Need as an ordinary verb", body: "In most positive present sentences, use need + to-infinitive. Add -s with he, she or it. Use do/does to make questions and negatives; after does, write need without -s.", examples: [
        { text: "He needs to leave at six." }, { text: "Do you need to print the form?" }, { text: "She doesn't need to work tomorrow." },
      ] },
      { type: "text", title: "Needn't and don't need to", body: "Needn't is a modal form: use it with the base verb, without to or do. Don't need to is an ordinary verb pattern. Both say something is unnecessary; neither means it is forbidden.", examples: [
        { text: "You needn't pay now." }, { text: "You don't need to pay now." }, { text: "You mustn't pay here. (It is not allowed.)" },
      ] },
      { type: "text", title: "Past lack of necessity", body: "Didn't need to says something was not necessary; it does not tell us clearly whether the person did it. Needn't have + past participle means the person did it, but it was unnecessary.", examples: [
        { text: "I didn't need to cook, so we ordered food. (it was not necessary; likely I did not cook)" }, { text: "I needn't have cooked; there was plenty of food. (I cooked, but it was unnecessary)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She needn't to come early.", correct: "She needn't come early.", explanation: "Needn't is modal and takes the base verb without to." },
        { incorrect: "Does he needs to leave?", correct: "Does he need to leave?", explanation: "After does, use the base form need." },
        { incorrect: "You needn't bring a coat. (intended: it is forbidden)", correct: "You mustn't bring a coat into the lab.", explanation: "Needn't means unnecessary; mustn't means not allowed." },
      ] },
      { type: "tip", title: "Check whether it happened", body: "For a past situation, distinguish ‘it wasn't necessary’ from ‘I did it, but it wasn't necessary’. Use didn't need to for the first idea and needn't have done for the second." },
    ],
    review: ["Need to is an ordinary verb; use do/does in questions and negatives.", "Needn't + base verb means not necessary; mustn't means prohibited.", "Needn't have done means the action happened but was unnecessary."],
  },
  "permission-requests-offers": {
    intro: "Modal verbs make it possible to ask permission, make requests and offer help. The choice of modal changes how formal or polite the sentence sounds.",
    blocks: [
      { type: "table", title: "Permission", headings: ["Question", "Tone", "Example"], rows: [
        ["Can I...?", "common, informal", "Can I use your pen?"], ["Could I...?", "polite", "Could I leave a little early?"], ["May I...?", "formal / very polite", "May I come in?"], ["Would it be OK if...?", "polite and indirect", "Would it be OK if I opened the window?"],
      ] },
      { type: "text", title: "Making requests", body: "Use Can you...? for a direct everyday request, Could you...? or Would you...? for a more polite request, and Would you mind + -ing? for a very polite request. The response to Would you mind...? can be confusing: No, not at all means ‘I am happy to do it.’", examples: [
        { text: "Could you help me with this box?" }, { text: "Would you turn the music down, please?" }, { text: "Would you mind closing the door? — No, not at all." },
      ] },
      { type: "text", title: "Offers and invitations", body: "Use Can I...? or Shall I...? to offer to do something. Would you like...? offers something or invites another person. Use I'll... for an offer or decision made at the moment.", examples: [
        { text: "Shall I carry that for you?" }, { text: "Can I get you a glass of water?" }, { text: "Would you like to join us for lunch?" }, { text: "The phone is ringing. I'll answer it." },
      ] },
      { type: "text", title: "Giving or refusing permission", body: "You can give permission with You can... or You may.... For a prohibition, use can't or mustn't. Don't have to means there is no obligation, not that permission is refused.", examples: [
        { text: "You can use my laptop." }, { text: "You mustn't take photos here." }, { text: "You don't have to stay if you are busy." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Would you mind to wait?", correct: "Would you mind waiting?", explanation: "Mind is followed by a gerund." },
        { incorrect: "May you help me? (intended: a polite request)", correct: "Could you help me?", explanation: "May I...? asks for permission; could you...? asks someone to do something." },
        { incorrect: "Would you like a coffee? — Yes, I like.", correct: "Would you like a coffee? — Yes, please.", explanation: "Accept an offer with Yes, please; like is not the short answer to would you like." },
      ] },
      { type: "tip", title: "Politeness", body: "A longer, indirect question is often more polite: Could you...? / Would you mind...? Add please when it sounds natural." },
    ],
    review: ["Can I / Could I / May I ask permission; could you / would you make requests.", "Shall I...? and Can I...? can offer help; Would you like...? offers or invites.", "Would you mind is followed by -ing; No, not at all accepts the request."],
  },
  "possibility-probability": {
    intro: "Modal verbs show how certain you think something is. May, might and could describe possibility; must and can't express strong conclusions based on evidence.",
    blocks: [
      { type: "table", title: "How certain is it?", headings: ["Meaning", "Modal", "Example"], rows: [
        ["possible", "may / might / could", "It might snow tonight."], ["strong positive conclusion", "must", "The lights are on; they must be home."], ["strong negative conclusion", "can't", "That can't be the right answer."], ["uncertain prediction", "will probably", "She will probably arrive soon."],
      ] },
      { type: "text", title: "May, might and could", body: "Use may, might or could + base verb when you think something is possible but are not certain. In many contexts, the three have similar meanings. Might can sound more tentative, but it is not a fixed rule that it is always less likely.", examples: [
        { text: "We may go to the beach tomorrow." }, { text: "He could be on the bus." }, { text: "I might not have enough time." },
      ] },
      { type: "text", title: "Must and can't for deductions", body: "Use must when the evidence makes you think something is almost certainly true. Use can't when you think it is almost certainly impossible. In this use, mustn't usually means ‘not allowed’, not ‘probably not’.", examples: [
        { text: "She knows everyone's name; she must work here." }, { text: "He can't be asleep; I can hear him talking." }, { text: "You mustn't use a phone during the exam. (prohibition)" },
      ] },
      { type: "text", title: "Perhaps and probably", body: "Maybe/perhaps are adverbs and can begin a sentence or come before the main verb. Probably often goes after will or before a main verb. These words do not follow exactly the same structure as modal verbs.", examples: [
        { text: "Maybe we will see them later." }, { text: "She will probably call tonight." }, { text: "They are probably at home." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "It might to be cold outside.", correct: "It might be cold outside.", explanation: "Use the base verb after a modal." },
        { incorrect: "He mustn't be at work; his car is here. (intended: strong conclusion)", correct: "He can't be at work; his car is here.", explanation: "Use can't for a negative deduction; mustn't is usually a prohibition." },
        { incorrect: "She maybe is busy.", correct: "Maybe she is busy. / She may be busy.", explanation: "Maybe is an adverb; may be is a modal verb phrase." },
      ] },
      { type: "tip", title: "Evidence or rule?", body: "If you are making a conclusion from clues, use must or can't. If you are giving a rule about what someone may do, use mustn't or can't." },
    ],
    review: ["May/might/could show possibility; their certainty can overlap.", "Must expresses a strong positive deduction; can't a strong negative one.", "Mustn't usually expresses prohibition, not negative probability."],
  },
  "modal-perfects": {
    intro: "A modal perfect looks back at a past event. Form it with a modal + have + past participle. The modal tells us whether the speaker is making a deduction, describing a possibility or expressing regret.",
    blocks: [
      { type: "table", title: "Common modal perfects", headings: ["Form", "Use", "Example"], rows: [
        ["must have + past participle", "strong conclusion about the past", "They must have missed the bus."], ["might/may/could have + past participle", "possible past event", "She might have left already."], ["should have + past participle", "past advice or regret", "I should have brought a coat."], ["shouldn't have + past participle", "regret about a bad action", "You shouldn't have paid twice."],
      ] },
      { type: "text", title: "Deductions and possibilities", body: "Must have means you are almost sure something happened. Might/may/could have means it is possible, but you do not know. Use the past participle after have.", examples: [
        { text: "The ground is wet. It must have rained." }, { text: "I cannot find my wallet. I may have left it at work." }, { text: "He could have taken the earlier train." },
      ] },
      { type: "text", title: "Should have: advice and regret", body: "Should have + past participle says the action was a good idea, but it did not happen, or you think someone made a mistake. Shouldn't have says the action happened but was a bad idea.", examples: [
        { text: "We should have booked a table. (We did not book one.)" }, { text: "I shouldn't have stayed up so late. (I stayed up.)" },
      ] },
      { type: "text", title: "Negative forms", body: "Put not after the modal: might not have, may not have, couldn't have, shouldn't have. Must not have can express a negative deduction in some contexts, but can't have is the clearer and more common learner pattern for ‘it was impossible that’.", examples: [
        { text: "She might not have seen your message." }, { text: "They can't have finished already; they only started ten minutes ago." }, { text: "You shouldn't have told him the surprise." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She might has forgotten.", correct: "She might have forgotten.", explanation: "Use have, not has, after a modal." },
        { incorrect: "He must have went home.", correct: "He must have gone home.", explanation: "Use the past participle after have: go → gone." },
        { incorrect: "I should have call you.", correct: "I should have called you.", explanation: "The structure is modal + have + past participle." },
      ] },
      { type: "tip", title: "Build it in three parts", body: "Say the modal, then have, then the past participle: might + have + forgotten; should + have + called. Do not change have to has after he/she/it." },
    ],
    review: ["Form: modal + have + past participle.", "Must have = strong past deduction; might/may/could have = past possibility.", "Should have / shouldn't have often express regret or criticism."],
  },
  "modals-passive": {
    intro: "Use a modal passive when the action or receiver matters more than the person doing it. Combine a modal with be + past participle.",
    blocks: [
      { type: "text", title: "The basic form", body: "Form a modal passive with modal + be + past participle. The modal does not change, and be stays in its base form. The object of an active sentence usually becomes the subject of the passive sentence.", examples: [
        { text: "Active: You must wear a helmet." }, { text: "Passive: A helmet must be worn." }, { text: "Active: They can repair the road." }, { text: "Passive: The road can be repaired." },
      ] },
      { type: "table", title: "Common modal passive forms", headings: ["Modal", "Passive pattern", "Example"], rows: [
        ["can", "can be + past participle", "The form can be downloaded."], ["must", "must be + past participle", "Tickets must be shown."], ["should", "should be + past participle", "The door should be locked."], ["might", "might be + past participle", "The event might be cancelled."], ["have to", "has/have to be + past participle", "The work has to be finished today."],
      ] },
      { type: "text", title: "Negative and question forms", body: "Put not after the modal to make a negative. In questions, put the modal before the subject. For have to, use do/does in questions and negatives, then keep be + past participle.", examples: [
        { text: "Mobile phones must not be used here." }, { text: "Can this problem be fixed?" }, { text: "Does the report have to be submitted today?" },
      ] },
      { type: "text", title: "When to include the agent", body: "Add by + person when it is important to say who performs the action. If the person is unknown, obvious or unimportant, leave the agent out.", examples: [
        { text: "The song can be played on a guitar." }, { text: "The winning goal was scored by our captain." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "The room must cleaned today.", correct: "The room must be cleaned today.", explanation: "A modal passive needs be before the past participle." },
        { incorrect: "The forms can be fill online.", correct: "The forms can be filled in online.", explanation: "Use the past participle after be." },
        { incorrect: "Can be the road repaired?", correct: "Can the road be repaired?", explanation: "Put the modal before the subject; keep be + participle after it." },
      ] },
      { type: "tip", title: "Check the two verbs", body: "After the modal, look for be. After be, use the past participle: should be checked, can be seen, must be done." },
    ],
    review: ["Form: modal + be + past participle.", "Use it to focus on the action or receiver instead of the agent.", "Put not after the modal; put the modal before the subject in a question."],
  },
};
