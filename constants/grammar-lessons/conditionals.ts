import type { GrammarLesson } from "./types";

export const CONDITIONAL_LESSONS: Record<string, GrammarLesson> = {
  "zero-conditional": {
    intro: "Use the zero conditional for facts, rules and results that are generally or regularly true. The condition is not a single imagined event; it describes what happens whenever the condition is met.",
    blocks: [
      { type: "text", title: "The basic pattern", body: "Use if + present simple in the condition and present simple in the result. You can usually use when instead of if when you mean that the result happens every time.", examples: [
        { text: "If you heat ice, it melts.", highlight: "If you heat ice" },
        { text: "Plants die if they do not get water." },
        { text: "When I drink coffee at night, I cannot sleep." },
      ] },
      { type: "table", title: "Build the two clauses", headings: ["Condition", "Result", "Full sentence"], rows: [
        ["if + present simple", "present simple", "If water reaches 100°C, it boils."],
        ["if + do/does not + base verb", "present simple", "If people do not eat, they feel hungry."],
        ["if + be", "present simple", "If the room is cold, the heater turns on."],
      ] },
      { type: "text", title: "Clause order and commas", body: "The if-clause can come first or second. Put a comma after it when it begins the sentence. Do not use will in the if-clause for a general fact.", examples: [
        { text: "If you press this button, the screen turns on." },
        { text: "The screen turns on if you press this button." },
        { text: "If you will press this button, the screen turns on. (incorrect for this meaning)" },
      ] },
      { type: "text", title: "More than scientific facts", body: "The zero conditional also works for habits, instructions and personal routines. The result can be an imperative when it tells someone what to do.", examples: [
        { text: "If I feel stressed, I go for a walk." },
        { text: "If the alarm rings, leave the building." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "If you will mix blue and yellow, you get green.", correct: "If you mix blue and yellow, you get green.", explanation: "Use the present simple in both clauses for a general fact." },
        { incorrect: "If water boil, it turns to steam.", correct: "If water boils, it turns to steam.", explanation: "Water is third-person singular, so the verb takes -s." },
        { incorrect: "If I am tired. I go to bed early.", correct: "If I am tired, I go to bed early.", explanation: "The if-clause and result clause form one sentence; use a comma, not a full stop." },
      ] },
      { type: "tip", title: "If or when?", body: "Use if when the condition may or may not happen. Use when when you expect it or describe a repeated result: If it rains tomorrow, we will stay home; When it rains, this road gets wet." },
    ],
    review: ["Form: if + present simple, present simple.", "Use it for facts, rules and repeated results.", "Use a comma when the if-clause comes first; do not normally put will after if."],
  },
  "first-conditional": {
    intro: "Use the first conditional to talk about a real future possibility and its likely result. The condition is possible, but the result depends on it.",
    blocks: [
      { type: "text", title: "The basic pattern", body: "Use if + present simple for the condition and will + base verb for the future result. The present form after if refers to the future; it does not mean the condition happens now.", examples: [
        { text: "If it rains, we will take a taxi." },
        { text: "I will call you if I arrive before six." },
        { text: "If she studies tonight, she will feel ready tomorrow." },
      ] },
      { type: "table", title: "Useful result forms", headings: ["Result form", "Example", "Use"], rows: [
        ["will + base verb", "If we leave now, we will catch the bus.", "prediction or expected result"],
        ["may / might / could + base verb", "If you ask, they might help.", "possible result"],
        ["imperative", "If you see Sam, tell him to call me.", "instruction"],
        ["can + base verb", "If you finish early, you can go home.", "permission or ability"],
      ] },
      { type: "text", title: "Negative clauses and questions", body: "Make a negative condition with do not / does not, or a negative result with will not / won't. The if-clause can also appear after the result. In a question, put will before the subject in the result clause.", examples: [
        { text: "If you do not hurry, you will miss the start." },
        { text: "We will not go if the weather is bad." },
        { text: "What will you do if the shop is closed?" },
      ] },
      { type: "text", title: "Other future time words", body: "After if, use the present simple with future meaning. The same pattern is common after when, before, after, until and as soon as when they introduce a future time clause.", examples: [
        { text: "I will text you when I get home." },
        { text: "We will wait until the rain stops." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "If it will rain, we will stay inside.", correct: "If it rains, we will stay inside.", explanation: "Use the present simple in the if-clause, even when it refers to the future." },
        { incorrect: "If she comes, I tell her.", correct: "If she comes, I will tell her.", explanation: "Use a future form in the result when you mean a particular future event." },
        { incorrect: "If he don't call, I will leave.", correct: "If he does not call, I will leave.", explanation: "Use does not with he, she or it, followed by the base verb." },
      ] },
      { type: "tip", title: "A useful check", body: "Ask: Is this a real possibility in the future? If yes, the first conditional is often right. Keep will in the result clause, not usually in the if-clause." },
    ],
    review: ["Form: if + present simple, will + base verb.", "The if-clause can come first or last; use a comma when it comes first.", "May, might, can and imperatives can also appear in the result clause."],
  },
  "second-conditional": {
    intro: "Use the second conditional for an unreal, imagined or unlikely present or future situation. It helps you imagine a different situation and its result.",
    blocks: [
      { type: "text", title: "The basic pattern", body: "Use if + past simple for the imagined condition and would + base verb for the result. Although the verb looks past, the meaning is usually present or future, not past.", examples: [
        { text: "If I had more free time, I would learn Italian." },
        { text: "She would travel more if she had a bigger budget." },
        { text: "If we lived by the sea, we could swim every day." },
      ] },
      { type: "table", title: "Result modals", headings: ["Form", "Meaning", "Example"], rows: [
        ["would + base verb", "imagined result", "I would buy a bike."],
        ["could + base verb", "ability or possibility", "We could walk there."],
        ["might + base verb", "uncertain result", "He might come with us."],
      ] },
      { type: "text", title: "Using were", body: "In careful or formal English, were is often used for all subjects in the phrase If I were you. In everyday conversation, many speakers also use was with I, he, she and it. The advice phrase If I were you is the standard form learners should use.", examples: [
        { text: "If I were you, I would ask the teacher." },
        { text: "If she were here, she would know what to do." },
      ] },
      { type: "text", title: "Questions and negatives", body: "Put would before the subject to ask about the imagined result. Use did not / didn't in a negative past-simple condition; use would not / wouldn't in the result.", examples: [
        { text: "What would you do if you found a wallet?" },
        { text: "If I did not have work tomorrow, I would stay longer." },
        { text: "They would not need a car if they lived near the station." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "If I would have more time, I would exercise.", correct: "If I had more time, I would exercise.", explanation: "Use the past simple in the if-clause, not would." },
        { incorrect: "If I knew the answer, I will tell you.", correct: "If I knew the answer, I would tell you.", explanation: "Keep the imagined result with would (or could/might)." },
        { incorrect: "If I was you, I will apologise.", correct: "If I were you, I would apologise.", explanation: "Use the standard advice phrase If I were you and would in the result." },
      ] },
      { type: "tip", title: "How likely is it?", body: "The second conditional presents the situation as more distant or less likely than the first conditional. Compare: If I see her, I will tell her (real possibility); If I saw her, I would tell her (imagined or less likely)." },
    ],
    review: ["Form: if + past simple, would + base verb.", "The meaning is usually about now or the future.", "Do not normally use would in the if-clause; If I were you is a useful advice pattern."],
  },
  "third-conditional": {
    intro: "Use the third conditional to imagine a different past and its result. The condition did not happen, so the imagined result did not happen either.",
    blocks: [
      { type: "text", title: "The basic pattern", body: "Use if + past perfect (had + past participle) for the unreal past condition. Use would have + past participle for the imagined result.", examples: [
        { text: "If I had set an alarm, I would have woken up on time." },
        { text: "They would have caught the train if they had left earlier." },
        { text: "If we had booked a table, we would have had dinner there." },
      ] },
      { type: "table", title: "Build each part", headings: ["Part", "Form", "Example"], rows: [
        ["Condition", "if + had + past participle", "If she had checked the address..."],
        ["Result", "would have + past participle", "...she would have found the office."],
        ["Alternative result", "could/might have + past participle", "...she might have arrived earlier."],
      ] },
      { type: "text", title: "Contractions and negatives", body: "Had not is often shortened to hadn't, and would have is often shortened to would've in speech. Make the negative in the clause where the meaning is negative. Use the past participle after had and after would have.", examples: [
        { text: "If he hadn't forgotten his keys, he would have got inside." },
        { text: "I would have called if I had known your number." },
        { text: "They could have won if they had played better." },
      ] },
      { type: "text", title: "Clause order", body: "You can put the if-clause first or second. Add a comma after an opening if-clause. The meaning stays the same when you change the order.", examples: [
        { text: "If we had taken a map, we would not have got lost." },
        { text: "We would not have got lost if we had taken a map." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "If I would have known, I would have helped.", correct: "If I had known, I would have helped.", explanation: "Use past perfect in the if-clause." },
        { incorrect: "If she had went earlier, she would have arrived on time.", correct: "If she had gone earlier, she would have arrived on time.", explanation: "Use the past participle after had; go → went → gone." },
        { incorrect: "If they had left, they would arrive on time. (unreal past result)", correct: "If they had left, they would have arrived on time.", explanation: "Use would have + past participle for a result in the imagined past." },
      ] },
      { type: "tip", title: "Past regret", body: "Third conditionals often explain regret or a missed opportunity: If I had saved more, I could have bought the laptop. The sentence describes an unreal past, not a plan for the future." },
    ],
    review: ["Form: if + past perfect, would have + past participle.", "Use it for an unreal past condition and imagined past result.", "Could have and might have express possible alternative results."],
  },
  "mixed-conditionals": {
    intro: "Mixed conditionals connect different times. A common pattern links an unreal past event to a result that is true now.",
    blocks: [
      { type: "text", title: "Past condition, present result", body: "Use if + past perfect for an unreal past condition and would + base verb for its imagined result now. The past event did not happen, and the present situation is different because of it.", examples: [
        { text: "If I had studied medicine, I would be a doctor now." },
        { text: "She would feel less tired now if she had gone to bed earlier." },
        { text: "If we had bought that house, we would live near the park." },
      ] },
      { type: "table", title: "Recognise the time", headings: ["Condition time", "Result time", "Pattern", "Example"], rows: [
        ["Past", "Present", "if + past perfect; would + base verb", "If I had taken the job, I would live in Paris now."],
        ["Present situation", "Past result", "if + past simple; would have + past participle", "If he were more careful, he would not have broken it."],
      ] },
      { type: "text", title: "Present condition, past result", body: "Less commonly, an ongoing or general present situation can explain an imagined past result. Use the second conditional form in the if-clause and would have + past participle in the result.", examples: [
        { text: "If I were more organised, I would not have missed the appointment." },
        { text: "If she knew how to drive, she could have taken us yesterday." },
      ] },
      { type: "text", title: "Make the timeline clear", body: "Before choosing the verb forms, decide when the condition belongs and when the result belongs. Time words such as now, yesterday and last year can help. Do not use a mixed pattern if both parts refer to the same time; use the regular second or third conditional instead.", examples: [
        { text: "If I had slept well last night, I would feel better now." },
        { text: "If I had slept well last night, I would have felt better this morning." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "If I studied harder at school, I would have a better job now. (intended past cause)", correct: "If I had studied harder at school, I would have a better job now.", explanation: "Use past perfect for the unreal past condition." },
        { incorrect: "If she had left earlier, she would be arrived now.", correct: "If she had left earlier, she would have arrived by now.", explanation: "For an imagined completed result, use would have + past participle." },
        { incorrect: "If he were taller, he would play basketball yesterday.", correct: "If he were taller, he would have played basketball yesterday.", explanation: "The condition is present, but the imagined result is past." },
      ] },
      { type: "tip", title: "Draw two time points", body: "Write PAST above the if-clause and NOW or PAST above the result. This makes it easier to see why the two clauses use different conditional forms." },
    ],
    review: ["A common mixed pattern is past perfect condition + would + base verb for a present result.", "Another pattern is a present condition + would have + past participle for a past result.", "Choose forms by the time of each idea, not only by the word if."],
  },
  "unless-provided-as-long-as": {
    intro: "Unless, provided (that) and as long as introduce conditions. They do not all work in the same way, so check whether the sentence means ‘if not’ or ‘only if this is true.’",
    blocks: [
      { type: "text", title: "Unless means if not", body: "Unless introduces a negative condition. It often has the same meaning as if + subject + not. Do not usually add another not after unless because that would create a double negative.", examples: [
        { text: "Unless you hurry, you will miss the bus." },
        { text: "You will miss the bus if you do not hurry." },
        { text: "I will not go unless Maya comes." },
      ] },
      { type: "text", title: "Provided (that) and as long as", body: "Provided (that) and as long as mean ‘only if’ or ‘on the condition that.’ They introduce a condition that must be true for the result to happen. As long as can also mean ‘for the whole time,’ depending on context.", examples: [
        { text: "You can borrow my bike as long as you bring it back tonight." },
        { text: "We will go hiking provided that the weather is safe." },
        { text: "You may stay as long as you like." },
      ] },
      { type: "table", title: "Compare the meaning", headings: ["Expression", "Meaning", "Example"], rows: [
        ["unless", "if not", "Unless it stops raining, we will stay here."],
        ["provided (that)", "only if this condition is met", "You can join provided that you register."],
        ["as long as", "only if; or for the whole time", "I will help as long as you ask politely."],
      ] },
      { type: "text", title: "Future conditions", body: "For a real future condition, use the present simple after unless, provided (that) and as long as. Put will in the result clause. A comma is used when the condition comes first.", examples: [
        { text: "Unless the train is delayed, we will arrive at six." },
        { text: "You can use the room provided that you leave it clean." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Unless you don't study, you will fail.", correct: "Unless you study, you will fail. / If you do not study, you will fail.", explanation: "Unless already means if not, so do not add another not." },
        { incorrect: "Unless it will rain, we will play outside.", correct: "Unless it rains, we will play outside.", explanation: "Use the present simple after unless for a future condition." },
        { incorrect: "You can go provided you will call me.", correct: "You can go provided you call me.", explanation: "Use the present simple in this future condition clause." },
      ] },
      { type: "tip", title: "Check the meaning", body: "Replace unless with if ... not. If the meaning stays the same, the condition is negative. Replace provided/as long as with only if to check that the condition is necessary." },
    ],
    review: ["Unless means if not; avoid another not in the same condition.", "Provided (that) and as long as mean only if.", "Use the present simple for future condition clauses."],
  },
  "in-case-even-if": {
    intro: "In case and even if both introduce situations, but they express different ideas. In case describes preparation for a possibility; even if says the result will stay the same despite it.",
    blocks: [
      { type: "text", title: "In case: prepare for a possibility", body: "Use in case when you do something now because a situation may happen later. It does not simply mean if. The main action is a precaution.", examples: [
        { text: "Take an umbrella in case it rains." },
        { text: "I saved the address in case I forgot it." },
        { text: "We will bring snacks in case the café is closed." },
      ] },
      { type: "text", title: "Even if: the result does not change", body: "Use even if to say that a result stays true whether the condition happens or not. It adds emphasis: the condition will not change the decision or outcome.", examples: [
        { text: "I will go for a walk even if it rains." },
        { text: "Even if the task is difficult, we can finish it together." },
        { text: "She will not buy it even if it is on sale." },
      ] },
      { type: "table", title: "In case or if?", headings: ["Expression", "Main idea", "Example"], rows: [
        ["in case", "Prepare now for a possible event", "Take a map in case we get lost."],
        ["if", "Do something only when the condition happens", "If we get lost, we will ask for help."],
        ["even if", "The result stays the same in either situation", "We will continue even if we get lost."],
      ] },
      { type: "text", title: "Verb forms", body: "For a future possibility, the verb after in case and even if is usually present simple. The future meaning is clear from the main clause or context. With a past main clause, in case can refer to a possibility at that time.", examples: [
        { text: "I will write it down in case I forget." },
        { text: "Even if she arrives late, we will save her a seat." },
        { text: "He took a jacket in case it got cold." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Take an umbrella if it rains. (intended: take it now as a precaution)", correct: "Take an umbrella in case it rains.", explanation: "In case describes preparation before you know whether it will rain." },
        { incorrect: "I will go even it rains.", correct: "I will go even if it rains.", explanation: "Use the complete linking phrase even if." },
        { incorrect: "I will call you in case I will be late.", correct: "I will call you in case I am late.", explanation: "Use present simple after in case for a future possibility." },
      ] },
      { type: "tip", title: "Two quick questions", body: "Are you taking a precaution before something happens? Use in case. Will the result stay the same whatever happens? Use even if." },
    ],
    review: ["In case = prepare for a possible event.", "Even if = the condition does not change the result.", "Use the present simple after these expressions for future possibilities."],
  },
  "wish-if-only": {
    intro: "Wish and if only express a desire for a different situation or regret. The verb form after them shows whether you want to change the present, complain about something, or regret the past.",
    blocks: [
      { type: "table", title: "Choose the time", headings: ["Meaning", "Pattern", "Example"], rows: [
        ["Present situation you want to change", "wish / if only + past simple", "I wish I had more time."],
        ["Annoying repeated action", "wish + would + base verb", "I wish the neighbours would be quieter."],
        ["Past regret", "wish / if only + past perfect", "If only I had studied harder."],
      ] },
      { type: "text", title: "Wish about the present", body: "Use a past simple form after wish to say that the present situation is different from what you want. The past form does not refer to past time here. Use could when you want the ability or possibility to change.", examples: [
        { text: "I wish I lived closer to my friends." },
        { text: "She wishes she could speak Japanese." },
        { text: "If only it were warmer today!" },
      ] },
      { type: "text", title: "Wish + would", body: "Use wish + would when you want someone or something to change, often because you are annoyed. It is not normally used to talk about a change you control yourself; use the past simple for that.", examples: [
        { text: "I wish you would put your phone away." },
        { text: "He wishes the bus would come soon." },
        { text: "I wish I would study more. (usually not natural for a change I control)" },
      ] },
      { type: "text", title: "Wish about the past", body: "Use the past perfect (had + past participle) to regret something that happened or did not happen. If only is more emphatic than wish and often expresses a stronger feeling.", examples: [
        { text: "I wish I had brought a coat." },
        { text: "They wish they had not sold their old car." },
        { text: "If only we had booked our tickets earlier!" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I wish I have a bigger room.", correct: "I wish I had a bigger room.", explanation: "Use the past simple for a present situation you want to change." },
        { incorrect: "She wishes she would know the answer.", correct: "She wishes she knew the answer.", explanation: "Use the past simple for a state or knowledge you want to be different." },
        { incorrect: "If only I would have listened!", correct: "If only I had listened!", explanation: "Use the past perfect to express regret about the past." },
      ] },
      { type: "tip", title: "Wish or hope?", body: "Use wish + past form for a situation you want to be different: I wish I had more time. Use hope for a possible future: I hope I have time tomorrow." },
    ],
    review: ["wish + past simple: a different present situation.", "wish + would: you want someone or something to change.", "wish + past perfect: regret about the past; if only makes the feeling stronger."],
  },
};
