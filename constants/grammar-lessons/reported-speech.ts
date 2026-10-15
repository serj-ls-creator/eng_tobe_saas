import type { GrammarLesson } from "./types";

export const REPORTED_SPEECH_LESSONS: Record<string, GrammarLesson> = {
  "reported-statements": {
    intro: "Reported speech tells someone what another person said without repeating the exact words. Change pronouns and verb forms when the speaker, time or point of view has changed.",
    blocks: [
      { type: "text", title: "The basic pattern", body: "Use a reporting verb such as said or told, followed by a that-clause. That is often omitted in everyday speech. Use tell with a person object; use say without a person object directly after it.", examples: [
        { text: "Direct: ‘I am tired.’ → She said (that) she was tired." }, { text: "Direct: ‘We live nearby.’ → They told me (that) they lived nearby." }, { text: "He said me he was busy. (incorrect) → He told me he was busy. / He said he was busy." },
      ] },
      { type: "table", title: "Common tense changes", headings: ["Direct speech", "Reported speech", "Example"], rows: [
        ["present simple", "past simple", "‘I work.’ → He said he worked."], ["present continuous", "past continuous", "‘I am waiting.’ → She said she was waiting."], ["past simple", "past perfect (often)", "‘I lost it.’ → He said he had lost it."], ["present perfect", "past perfect", "‘I have finished.’ → She said she had finished."], ["will", "would", "‘I will call.’ → He said he would call."],
      ] },
      { type: "text", title: "When do we change the tense?", body: "When the reporting verb is in the past, speakers often move the original verb one step into the past. This is called backshift. Backshift is not always necessary if the information is still true, the situation has not changed or the reporting verb is present.", examples: [
        { text: "Mia said she was hungry. (usual backshift)" }, { text: "The teacher said the Earth goes around the Sun. (general fact stays present)" }, { text: "Mia says she is hungry. (reporting verb is present)" },
      ] },
      { type: "text", title: "Keep the statement order", body: "A reported statement is a clause, not a direct question. Use subject + verb order, even when the original words have a different structure. Change pronouns to fit who said the words and who is reporting them.", examples: [
        { text: "‘I like your idea,’ Anna said to me. → Anna told me she liked my idea." }, { text: "‘We are ready,’ they said. → They said they were ready." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "He said me that he was tired.", correct: "He told me that he was tired. / He said that he was tired.", explanation: "Use tell + person; say does not take the listener directly as an object." },
        { incorrect: "She said that was busy.", correct: "She said that she was busy.", explanation: "Include the subject of the reported clause." },
        { incorrect: "He asked me where did I live. (reported statement/question word order)", correct: "He asked me where I lived.", explanation: "Use statement word order in a reported clause." },
      ] },
      { type: "tip", title: "Check four things", body: "When reporting, check the reporting verb, the tense, the pronouns and time/place words. Change only the details that need to match the new situation." },
    ],
    review: ["Use said (that) + clause or told + person + (that) clause.", "Past reporting verbs often cause backshift, but facts and still-true information may stay present.", "Use statement word order and update pronouns/reference words as needed."],
  },
  "reported-questions": {
    intro: "Reported questions tell someone what another person asked. The question becomes a statement-order clause, so it has no subject–auxiliary inversion and normally no question mark inside.",
    blocks: [
      { type: "table", title: "Two question patterns", headings: ["Direct question", "Reported question", "Connector"], rows: [
        ["‘Are you ready?’", "He asked if I was ready.", "if / whether"], ["‘Where do you live?’", "She asked where I lived.", "keep the question word"], ["‘Did they call?’", "I asked whether they had called.", "if / whether"],
      ] },
      { type: "text", title: "Yes/no questions", body: "Use ask + if or whether for a question that can be answered yes or no. Then use statement word order and make any necessary tense and pronoun changes.", examples: [
        { text: "‘Is the shop open?’ → He asked if the shop was open." }, { text: "‘Can you help?’ → She asked whether I could help." }, { text: "‘Did Sam leave?’ → They asked if Sam had left." },
      ] },
      { type: "text", title: "Wh- questions", body: "Keep the original question word (who, what, where, when, why, how) and put the subject before the verb. Do not add do/does/did in the reported clause.", examples: [
        { text: "‘Where is the station?’ → He asked where the station was." }, { text: "‘What do you need?’ → She asked what I needed." }, { text: "‘When will they arrive?’ → I asked when they would arrive." },
      ] },
      { type: "text", title: "Ask + person", body: "Use ask + listener when you name the person being asked: ask me, ask them, ask the teacher. The reported question follows the person, or follows ask directly when the listener is not named.", examples: [
        { text: "He asked me if I was okay." }, { text: "I asked where the nearest ATM was." }, { text: "She asked the driver when the bus would leave." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "He asked where was the station.", correct: "He asked where the station was.", explanation: "Use statement word order after the question word." },
        { incorrect: "I asked her did she like it.", correct: "I asked her if she liked it. / I asked her whether she liked it.", explanation: "Use if/whether, not do-support, for a reported yes/no question." },
        { incorrect: "She asked me where I lived? (as part of a statement)", correct: "She asked me where I lived.", explanation: "The embedded reported question is not itself a direct question; the whole sentence takes a full stop." },
      ] },
      { type: "tip", title: "Turn it into a clause", body: "First keep the question word or add if/whether. Then change the inside to subject + verb: ‘Where do you work?’ → where I work." },
    ],
    review: ["Use ask + if/whether for yes/no questions; keep wh- words for information questions.", "Use statement word order in both patterns.", "Do not use do/does/did or a question mark inside a reported question."],
  },
  "reported-commands-requests": {
    intro: "Report a command or request with a reporting verb, the person addressed and a to-infinitive. Use not to for a negative command or request.",
    blocks: [
      { type: "table", title: "Form", headings: ["Type", "Pattern", "Example"], rows: [
        ["command", "tell + person + to + verb", "‘Wait here.’ → He told us to wait there."], ["request", "ask + person + to + verb", "‘Please help me.’ → She asked me to help her."], ["negative command", "tell + person + not to + verb", "‘Don't touch it.’ → They told him not to touch it."],
      ] },
      { type: "text", title: "Use the listener as an object", body: "Commands and requests are directed at someone, so name that person after tell or ask. Then use to + base verb. If the person is not important or is unknown, choose a reporting structure that fits the context.", examples: [
        { text: "‘Open your books,’ the teacher said to us. → The teacher told us to open our books." }, { text: "‘Please call me,’ Nina said to Dan. → Nina asked Dan to call her." },
      ] },
      { type: "text", title: "Negative commands and requests", body: "Put not before the to-infinitive: told me not to go, asked us not to make noise. Do not use don't after the reporting verb in this structure.", examples: [
        { text: "‘Don't be late.’ → My dad told me not to be late." }, { text: "‘Please don't park here.’ → She asked them not to park there." },
      ] },
      { type: "text", title: "Other useful reporting verbs", body: "Some reporting verbs express the type of command or request more precisely. Remind + person + to is used for a reminder; warn + person + not to can express danger; invite + person + to is used for an invitation.", examples: [
        { text: "‘Remember to lock the door.’ → She reminded me to lock the door." }, { text: "‘Don't go near the edge.’ → He warned us not to go near the edge." }, { text: "‘Come to dinner.’ → They invited us to come to dinner." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "He told to me wait.", correct: "He told me to wait.", explanation: "Use tell + person + to-infinitive." },
        { incorrect: "She asked me don't worry.", correct: "She asked me not to worry.", explanation: "Use not to for a reported negative request." },
        { incorrect: "They said us to sit down.", correct: "They told us to sit down. / They asked us to sit down.", explanation: "Use told/asked + person; say does not use this object + infinitive pattern." },
      ] },
      { type: "tip", title: "Who was addressed?", body: "Identify the listener and put them after tell/ask: told her to wait, asked us to listen. Then choose to or not to + base verb." },
    ],
    review: ["Use tell/ask + person + to + base verb for commands and requests.", "Use not to + verb for a negative.", "Remind, warn and invite can report more specific intentions."],
  },
  "reporting-verbs": {
    intro: "Reporting verbs explain how someone communicates an idea, such as saying, asking, promising or suggesting. Different reporting verbs use different grammar patterns.",
    blocks: [
      { type: "table", title: "Common reporting patterns", headings: ["Verb", "Pattern", "Example"], rows: [
        ["say", "say (that) + clause", "He said (that) he was busy."], ["tell", "tell + person + (that) clause", "She told me (that) she was busy."], ["ask", "ask + if/wh-clause; ask + person + to", "They asked if we were ready."], ["promise", "promise + to-infinitive", "He promised to help."], ["suggest", "suggest + gerund / that-clause", "She suggested taking a taxi."], ["offer", "offer + to-infinitive", "I offered to carry the bag."],
      ] },
      { type: "text", title: "Reporting with a that-clause", body: "Say, explain, admit and promise can introduce a reported statement with a that-clause. With tell, include the person who receives the information. The word that is often optional after say/tell/explain.", examples: [
        { text: "He explained (that) the road was closed." }, { text: "She admitted (that) she had made a mistake." }, { text: "I told my brother (that) I was leaving." },
      ] },
      { type: "text", title: "Reporting with an infinitive", body: "Some verbs are followed by a to-infinitive, sometimes with a person object. Common patterns include promise to do, offer to do, agree to do, and advise/tell/ask someone to do.", examples: [
        { text: "They agreed to meet us at six." }, { text: "The doctor advised me to rest." }, { text: "He offered to drive us home." },
      ] },
      { type: "text", title: "Reporting suggestions", body: "Use suggest + gerund or suggest + that-clause. Do not normally use suggest + person + to-infinitive. Recommend has similar patterns: recommend doing or recommend that someone do/does something.", examples: [
        { text: "She suggested going by train." }, { text: "He suggested that we take a break." }, { text: "The guide recommended visiting the museum." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She suggested me to take a taxi.", correct: "She suggested taking a taxi. / She suggested that I take a taxi.", explanation: "Suggest is followed by a gerund or a that-clause, not person + to-infinitive." },
        { incorrect: "He explained me the problem.", correct: "He explained the problem to me.", explanation: "Use explain something to someone, not explain someone something." },
        { incorrect: "They promised helping us.", correct: "They promised to help us.", explanation: "Promise is commonly followed by a to-infinitive." },
      ] },
      { type: "tip", title: "Learn the pattern with the verb", body: "Write the reporting verb and its structure together: promise to do, suggest doing, tell someone to do, explain something to someone." },
    ],
    review: ["Reporting verbs have different patterns: that-clause, to-infinitive, object + infinitive or gerund.", "Include the listener after tell; say does not take the listener directly.", "Suggest takes a gerund or that-clause, not suggest someone to do."],
  },
  "pronoun-reference-changes": {
    intro: "When you report someone's words, pronouns may need to change so they still refer to the correct speaker, listener or person. The change depends on who is reporting and who is being addressed.",
    blocks: [
      { type: "table", title: "Check each reference", headings: ["Direct words", "Who is speaking now?", "Reported version"], rows: [
        ["‘I am tired,’ Maya said.", "Maya is the speaker.", "Maya said she was tired."], ["‘We can help you,’ they told me.", "they = the speakers; you = me", "They told me they could help me."], ["‘He is our teacher,’ Sam said to Jo.", "he = a third person; our = Sam and group", "Sam told Jo he was their teacher."],
      ] },
      { type: "text", title: "Change the speaker's I and we", body: "I and we refer to the original speaker(s). In a report, replace them with the name or pronoun that identifies those speakers. You changes to the person who heard the original words.", examples: [
        { text: "‘I like your idea,’ Eva said to me. → Eva told me she liked my idea." }, { text: "‘We are ready,’ the players said. → The players said they were ready." },
      ] },
      { type: "text", title: "Possessives and reflexives", body: "Update my, our, your and reflexive pronouns in the same way as personal pronouns. Follow the real people in the conversation rather than changing every word mechanically.", examples: [
        { text: "‘This is my coat,’ Leo said. → Leo said it was his coat." }, { text: "‘You should help yourselves,’ she told the children. → She told the children they should help themselves." },
      ] },
      { type: "text", title: "Pronouns may stay the same", body: "A pronoun does not always change. If the reporter and original listener are the same person, you may stay you. A name can also replace a pronoun when it makes the reference clearer.", examples: [
        { text: "I told you, ‘You are doing well.’ → I told you that you were doing well." }, { text: "‘I will call Alex,’ Mia said. → Mia said she would call Alex." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Maya said I was tired. (original: ‘I am tired,’ said Maya)", correct: "Maya said she was tired.", explanation: "I in the direct words refers to Maya, so use she when reporting." },
        { incorrect: "Tom told me he could help you. (original: ‘I can help you,’ said Tom to me)", correct: "Tom told me he could help me.", explanation: "The original you referred to the listener, me." },
        { incorrect: "They said your bags were ready. (the staff said ‘Your bags are ready’ to us; I am reporting it)", correct: "They said our bags were ready.", explanation: "The original your referred to the listeners, so it becomes our when those listeners report the words." },
      ] },
      { type: "tip", title: "Label the people first", body: "Before changing pronouns, write who ‘I’, ‘you’ and ‘we’ mean in the original conversation. Then retell the sentence from the new speaker's point of view." },
    ],
    review: ["I/we refer to the original speaker(s); you refers to the original listener(s).", "Change personal, possessive and reflexive pronouns only when their reference changes.", "Follow the people in the conversation rather than changing pronouns automatically."],
  },
  "time-place-expressions": {
    intro: "Words such as today, tomorrow, here and this can change when you report speech from a different time or place. Change them only when the reference point has changed.",
    blocks: [
      { type: "table", title: "Common reference changes", headings: ["Direct speech", "Possible reported form", "Change when..."], rows: [
        ["today", "that day", "the reporting is on a different day"], ["tomorrow", "the next day / the following day", "the event is now one day later"], ["yesterday", "the day before / the previous day", "the reporter is speaking later"], ["here", "there", "the reporter is somewhere else"], ["this / these", "that / those", "the things are farther away or the viewpoint changed"], ["now", "then / at that time", "the reporting time is different"],
      ] },
      { type: "text", title: "Change the viewpoint", body: "Reported speech moves the words into a new situation. If today is still today, it can remain today. If the speaker and reporter are in the same place, here may stay here. Choose the expression that is true from the current point of view.", examples: [
        { text: "On Tuesday: ‘I will call you tomorrow.’ → She said she would call me the next day." }, { text: "Immediately after: ‘I am busy now.’ → He said he was busy now. (still the same moment)" }, { text: "Later: He said he had been busy then." },
      ] },
      { type: "text", title: "This and these", body: "This/these can change to that/those when the object or time is no longer near the original speaker. They can remain unchanged if the thing is still near or the reference is still clear.", examples: [
        { text: "‘I like this song,’ she said. → She said she liked that song." }, { text: "‘These are my keys,’ he said. → He said those were his keys." },
      ] },
      { type: "text", title: "Place and direction words", body: "Words such as come, bring and take can also depend on the speaker's viewpoint. In a report from a different place, come here may become go there, but keep the original expression if the viewpoint has not changed.", examples: [
        { text: "‘Come here,’ the teacher said. → The teacher told us to go there." }, { text: "‘Bring it to me,’ Dad said. → Dad asked me to take it to him." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She said she would visit me tomorrow. (reported the next day)", correct: "She said she would visit me the next day. (if the viewpoint changed)", explanation: "Update tomorrow when the reporting time is later; it can stay if it is still tomorrow." },
        { incorrect: "He said he lived there. (original ‘I live here’; reporter is still in the same place)", correct: "He said he lived here. (if the place is still the same)", explanation: "Here/there depends on the reporter's location." },
        { incorrect: "Maya said those are her keys. (original ‘These are my keys’; backshifted context)", correct: "Maya said those were her keys. (if the reference point changed)", explanation: "Update both demonstrative and verb when the time/place viewpoint requires it." },
      ] },
      { type: "tip", title: "Don't change mechanically", body: "Ask when and where the report is being made. Time and place expressions change only if their real-world reference has changed." },
    ],
    review: ["Today/now/here/this may shift when time or place changes.", "Use forms such as that day, then, there, the next day and those when appropriate.", "Keep the original expression if it is still true from the reporter's viewpoint."],
  },
  "reporting-modals": {
    intro: "When a modal verb appears in reported speech, some modals often change to a past form. Others usually stay the same. The choice depends on the original modal and the reporting context.",
    blocks: [
      { type: "table", title: "Common modal changes", headings: ["Direct speech", "Reported speech", "Example"], rows: [
        ["will", "would", "‘I will call.’ → She said she would call."], ["can", "could", "‘I can swim.’ → He said he could swim."], ["may", "might", "‘It may rain.’ → They said it might rain."], ["shall", "would / should (by meaning)", "‘I shall return.’ → He said he would return."], ["must", "must / had to (by meaning)", "‘I must leave.’ → She said she had to leave."],
      ] },
      { type: "text", title: "Will, can and may", body: "With a past reporting verb, will commonly changes to would, can to could, and may to might. Pronouns and time words may also need to change.", examples: [
        { text: "‘We will help you.’ → They said they would help me." }, { text: "‘I can finish today.’ → He said he could finish that day." }, { text: "‘It may be late.’ → She said it might be late." },
      ] },
      { type: "text", title: "Must and have to", body: "Must for an obligation can stay must or change to had to, especially when reporting a past obligation. Must for a strong conclusion often stays must. Use the meaning to choose the form.", examples: [
        { text: "‘I must go now.’ → She said she had to go then." }, { text: "‘You must wear a seat belt.’ → He said we must wear a seat belt." }, { text: "‘He must be tired.’ → She said he must be tired. (deduction)" },
      ] },
      { type: "text", title: "Modals that often stay the same", body: "Could, would, should and might usually do not change further in reported speech. Needn't can stay needn't; mustn't usually remains mustn't when it expresses a prohibition.", examples: [
        { text: "‘You should rest.’ → The doctor said I should rest." }, { text: "‘I might be late.’ → He said he might be late." }, { text: "‘You mustn't touch it.’ → She said we mustn't touch it." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "He said he will help me. (usual backshift after a past reporting verb)", correct: "He said he would help me.", explanation: "Will commonly changes to would when reported later." },
        { incorrect: "She said she could to swim.", correct: "She said she could swim.", explanation: "A modal is followed by the base verb without to." },
        { incorrect: "They said we musted leave.", correct: "They said we had to leave. / They said we must leave.", explanation: "Must has no -ed form; use had to for past obligation or keep must when appropriate." },
      ] },
      { type: "tip", title: "Look at the modal's meaning", body: "For must, first decide whether it expresses an obligation, a rule or a logical conclusion. That meaning helps you decide whether to keep must or use had to." },
    ],
    review: ["Will → would, can → could and may → might are common backshifts.", "Could/would/should/might often stay the same.", "Must can stay or become had to, depending on its meaning and context."],
  },
  "say-tell-ask": {
    intro: "Say, tell and ask are common reporting verbs, but their grammar patterns differ. Choose the verb and include a listener only in the patterns that need one.",
    blocks: [
      { type: "table", title: "Basic patterns", headings: ["Verb", "Pattern", "Example"], rows: [
        ["say", "say + (that) clause", "She said (that) she was ready."], ["say", "say something to someone", "She said hello to me."], ["tell", "tell + person + (that) clause", "She told me (that) she was ready."], ["ask", "ask + person + question / if-clause", "He asked me where I lived."], ["ask", "ask + person + to-infinitive", "He asked me to wait."],
      ] },
      { type: "text", title: "Say", body: "Use say to report the words or message. If you name the listener, use to after the message: say something to someone. Do not put the listener directly after say in this pattern.", examples: [
        { text: "He said he was hungry." }, { text: "She said goodbye to her friends." }, { text: "‘Be careful,’ I said to him." },
      ] },
      { type: "text", title: "Tell", body: "Use tell + person when you name the listener. It can introduce a that-clause, a fact or a to-infinitive. Some fixed expressions do not name a listener, such as tell the truth, tell a story and tell a joke.", examples: [
        { text: "I told my sister that I was moving." }, { text: "Tell us your name." }, { text: "They told us to sit down." }, { text: "He told a funny story." },
      ] },
      { type: "text", title: "Ask", body: "Use ask + person for a question or request. For a reported yes/no question, use if/whether; for information, keep the question word. For a request, use ask + person + to-infinitive.", examples: [
        { text: "She asked me if I was okay." }, { text: "He asked where the station was." }, { text: "They asked us to speak quietly." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She said me she was busy.", correct: "She told me she was busy. / She said she was busy.", explanation: "Use tell + person, or say without a direct listener object." },
        { incorrect: "He told that he was late.", correct: "He said that he was late. / He told us that he was late.", explanation: "Tell normally needs a person object in this pattern." },
        { incorrect: "I asked her where did she live.", correct: "I asked her where she lived.", explanation: "Use statement order in a reported question." },
      ] },
      { type: "tip", title: "Quick choice", body: "Say words. Tell a person. Ask a question or make a request. Remember the full patterns: say something to someone; tell someone something; ask someone a question/to do something." },
    ],
    review: ["Say + message; say something to someone.", "Tell + person + message/information/instruction.", "Ask + person + question or to-infinitive request; reported questions use statement word order."],
  },
};
