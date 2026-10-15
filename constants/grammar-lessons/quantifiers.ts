import type { GrammarLesson } from "./types";

export const QUANTIFIER_LESSONS: Record<string, GrammarLesson> = {
  "some-any": {
    intro: "Some and any describe an amount or number that is not exact. The noun after them can be plural and countable or uncountable.",
    blocks: [
      { type: "table", title: "Typical use", headings: ["Word", "Common use", "Example"], rows: [
        ["some", "positive statements", "We bought some apples."], ["some", "offers and requests", "Would you like some tea?"], ["any", "questions", "Do you have any questions?"], ["any", "negative statements", "There isn't any milk."],
      ] },
      { type: "text", title: "Use with countable and uncountable nouns", body: "Use some/any with plural countable nouns and uncountable nouns. They can also be used alone when the noun is clear from context.", examples: [
        { text: "There are some letters for you." }, { text: "I need some information." }, { text: "We don't have any. (the missing noun is understood)" },
      ] },
      { type: "text", title: "Some in questions", body: "Use some in a question when you expect a positive answer, make an offer or ask for something politely. Use any in a neutral question when you do not know if something is available.", examples: [
        { text: "Would you like some biscuits? (offer)" }, { text: "Could I have some water, please? (request)" }, { text: "Is there any bread left? (neutral question)" },
      ] },
      { type: "text", title: "Any can mean ‘it does not matter which’", body: "In positive statements, any can mean ‘whichever’ or ‘no matter which’. It often appears with a singular countable noun in this meaning.", examples: [
        { text: "You can choose any seat." }, { text: "Call me any time." }, { text: "Any student can join the club." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I don't have some questions.", correct: "I don't have any questions.", explanation: "Use any in most negative statements." },
        { incorrect: "Would you like any tea? (ordinary offer)", correct: "Would you like some tea?", explanation: "Offers commonly use some because a positive answer is expected." },
        { incorrect: "There is some apples on the table.", correct: "There are some apples on the table.", explanation: "Use a plural verb with plural countable apples." },
      ] },
      { type: "tip", title: "Check the speaker's purpose", body: "A neutral question usually uses any. An offer or polite request often uses some. In an affirmative sentence, any can also mean ‘whichever one’." },
    ],
    review: ["Some is common in positive statements, offers and requests.", "Any is common in questions and negatives.", "Any in a positive statement can mean ‘whichever/no matter which’."],
  },
  "much-many": {
    intro: "Much and many mean a large amount or number. Choose them according to whether the noun is uncountable or plural and countable.",
    blocks: [
      { type: "table", title: "Choose much or many", headings: ["Quantifier", "Noun type", "Example"], rows: [
        ["many", "plural countable", "many books; many people"], ["much", "uncountable", "much time; much water"], ["how many", "plural countable question", "How many emails did you get?"], ["how much", "uncountable question / price", "How much sugar do we need? / How much is it?"],
      ] },
      { type: "text", title: "Questions and negatives", body: "Much and many are especially common in questions and negative statements. In positive everyday statements, a lot of is often more natural, especially with much.", examples: [
        { text: "Do you have many cousins?" }, { text: "We don't have much time." }, { text: "She has a lot of work today. (more natural than much work in many conversations)" },
      ] },
      { type: "text", title: "Much and many with other words", body: "Put much or many before the noun, or after too, so, how and as. Much can also modify a comparative adjective or adverb: much better, much more slowly.", examples: [
        { text: "There are too many cars on this street." }, { text: "We have so much to do." }, { text: "This one is much cheaper." },
      ] },
      { type: "text", title: "Count the noun, not the idea", body: "Some nouns that are countable in other languages are uncountable in English, such as advice, information, furniture and homework. Use much with these nouns, or use a countable unit like a piece of.", examples: [
        { text: "How much information do you need?" }, { text: "She gave me two pieces of advice." }, { text: "There isn't much furniture in the room." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "How much students are there?", correct: "How many students are there?", explanation: "Students are plural countable nouns." },
        { incorrect: "There are many traffic today.", correct: "There is a lot of traffic today. / There isn't much traffic today.", explanation: "Traffic is uncountable and takes a singular verb." },
        { incorrect: "I have much friends.", correct: "I have many friends. / I have a lot of friends.", explanation: "Use many with plural countable friends." },
      ] },
      { type: "tip", title: "Ask ‘Can I count it?’", body: "If the noun has a plural form and you can count individual items, use many. If it is an uncountable mass or idea, use much." },
    ],
    review: ["Many + plural countable noun; much + uncountable noun.", "Much/many are common in questions and negatives; a lot of is common in positive speech.", "How much can also ask about price."],
  },
  "few-little": {
    intro: "Few and little describe a small quantity. Adding a changes the meaning: a few and a little usually mean there is some, while few and little emphasize that the amount is not enough or is surprisingly small.",
    blocks: [
      { type: "table", title: "Choose the form", headings: ["Form", "Noun type", "Typical meaning"], rows: [
        ["few", "plural countable", "not many; often too small an amount"], ["a few", "plural countable", "some; a small number"], ["little", "uncountable", "not much; often too small an amount"], ["a little", "uncountable", "some; a small amount"],
      ] },
      { type: "text", title: "A small number or amount", body: "Use few/a few before plural countable nouns and little/a little before uncountable nouns. A few and a little have a more positive meaning: at least some is available.", examples: [
        { text: "We have a few chairs, so everyone can sit." }, { text: "I have a little time before the meeting." }, { text: "Few people understood the instructions." },
      ] },
      { type: "text", title: "Meaning changes with a", body: "Without a, few and little often suggest ‘not enough’ or ‘almost none’. With a, the speaker presents a small quantity as available or useful. Context and intonation can affect the feeling.", examples: [
        { text: "There is little hope of finding the lost ring. (almost no hope)" }, { text: "There is a little hope, so let's keep looking. (some hope)" }, { text: "Few guests arrived. (not many)" }, { text: "A few guests arrived. (some guests did)" },
      ] },
      { type: "text", title: "With very and only", body: "Very few and very little strengthen the idea that the amount is small. Only a few and only a little emphasize a limit. Use the noun type to choose the form.", examples: [
        { text: "Very few buses run after midnight." }, { text: "Only a little milk is left." }, { text: "We have only a few minutes." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I have a few money.", correct: "I have a little money.", explanation: "Money is uncountable, so use little/a little." },
        { incorrect: "Few water is left.", correct: "Little water is left. / A little water is left.", explanation: "Water is uncountable." },
        { incorrect: "We have little chairs for everyone. (intended: some chairs)", correct: "We have a few chairs for everyone.", explanation: "A few means some plural countable items." },
      ] },
      { type: "tip", title: "Remember the ‘a’", body: "A few / a little = some. Few / little = not many or not much, often less than needed." },
    ],
    review: ["Few/a few + plural countable noun; little/a little + uncountable noun.", "The article a often changes the tone from negative to more positive.", "Very strengthens few/little; only emphasizes the limited amount."],
  },
  "a-lot-lots-plenty": {
    intro: "A lot of, lots of and plenty of express a large quantity. They can be used with plural countable nouns and uncountable nouns.",
    blocks: [
      { type: "table", title: "Use with both noun types", headings: ["Expression", "Countable example", "Uncountable example"], rows: [
        ["a lot of", "a lot of books", "a lot of time"], ["lots of", "lots of friends", "lots of work"], ["plenty of", "plenty of chairs", "plenty of food"],
      ] },
      { type: "text", title: "Verb agreement", body: "The verb agrees with the noun after of. Use a plural verb with a lot/lots of + plural countable noun, and a singular verb with a lot/lots of + uncountable noun.", examples: [
        { text: "A lot of people are waiting." }, { text: "Lots of homework is due tomorrow." }, { text: "There is plenty of room." },
      ] },
      { type: "text", title: "A lot, lots and plenty alone", body: "A lot and lots can be used without of as adverbs meaning ‘very much’ after many verbs. Plenty can stand alone less often, or be followed by of + noun to mean more than enough.", examples: [
        { text: "Thanks a lot." }, { text: "She travels a lot." }, { text: "We have plenty of time, so there is no need to hurry." },
      ] },
      { type: "text", title: "Register", body: "A lot of and lots of are common in conversation. Plenty of often suggests that the amount is enough or more than enough. In formal writing, many/much or a more exact quantity may be preferred.", examples: [
        { text: "There are lots of cafés near here. (informal)" }, { text: "We have plenty of seats for everyone. (more than enough)" }, { text: "The survey collected a large amount of data. (more formal)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "A lot of people is here.", correct: "A lot of people are here.", explanation: "People is plural, so use are." },
        { incorrect: "Lots of information are available.", correct: "Lots of information is available.", explanation: "Information is uncountable and takes a singular verb." },
        { incorrect: "We have plenty time.", correct: "We have plenty of time.", explanation: "Use of before the noun after plenty." },
      ] },
      { type: "tip", title: "Find the noun after of", body: "The quantifier does not decide the verb form by itself. Look at the noun after of: people are, information is." },
    ],
    review: ["A lot of/lots of/plenty of work with plural countable and uncountable nouns.", "The following noun controls subject–verb agreement.", "Plenty of often means more than enough."],
  },
  "enough-too-much-many": {
    intro: "Enough means the amount or degree is sufficient. Too much and too many mean an excessive amount or number, often more than is wanted or useful.",
    blocks: [
      { type: "table", title: "Position and noun type", headings: ["Expression", "Position", "Example"], rows: [
        ["enough + noun", "before a noun", "We have enough chairs."], ["adjective + enough", "after an adjective", "The room is warm enough."], ["too much + noun", "before uncountable noun", "There is too much noise."], ["too many + noun", "before plural countable noun", "There are too many cars."],
      ] },
      { type: "text", title: "Enough with adjectives and adverbs", body: "Put enough after an adjective or adverb. It can be followed by a to-infinitive to show what is possible: adjective/adverb + enough + to + verb.", examples: [
        { text: "The soup is cool enough to eat." }, { text: "He didn't run quickly enough to catch the bus." }, { text: "Are you old enough to vote?" },
      ] },
      { type: "text", title: "Too much and too many", body: "Use too much with an uncountable noun and too many with a plural countable noun. Too means more than is wanted, needed or acceptable; it often introduces a consequence with for or to.", examples: [
        { text: "There is too much sugar in this tea." }, { text: "We invited too many people for the small room." }, { text: "The bag is too heavy to carry." },
      ] },
      { type: "text", title: "Too many, too much and so many/much", body: "Too many/much usually describes an excessive quantity. So many/much emphasizes a large quantity and is often used before a result clause with that.", examples: [
        { text: "There were so many people that we could not get in." }, { text: "I have so much work that I cannot go out." }, { text: "We bought too many snacks; some are left over." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "There are too much cars.", correct: "There are too many cars.", explanation: "Cars are plural countable, so use many." },
        { incorrect: "The coffee is enough hot.", correct: "The coffee is hot enough.", explanation: "Enough follows an adjective." },
        { incorrect: "We have chairs enough.", correct: "We have enough chairs.", explanation: "Enough comes before a noun." },
      ] },
      { type: "tip", title: "Too or enough?", body: "Too often describes a problem: too cold to swim. Enough describes the required amount: warm enough to swim." },
    ],
    review: ["Enough comes before nouns but after adjectives and adverbs.", "Too much + uncountable noun; too many + plural countable noun.", "Too means excessive; enough means sufficient."],
  },
  "all-both-half": {
    intro: "All, both and half describe a complete group or part of it. Use both for two items, all for a whole group, and half for one of two equal parts.",
    blocks: [
      { type: "table", title: "Core meanings", headings: ["Word", "Use", "Example"], rows: [
        ["both", "the two people or things", "Both answers are correct."], ["all", "the whole of three or more, or an amount", "All the students are ready. / All the water is gone."], ["half", "one of two equal parts", "Half the cake is left."],
      ] },
      { type: "text", title: "Position with determiners", body: "All, both and half often come before the, my, these and other determiners: all the books, both my sisters, half this cake. With all and half, of can be used before a pronoun or determiner; with both, both of is common before pronouns.", examples: [
        { text: "All (of) the children were singing." }, { text: "Both of my parents work." }, { text: "Half of it is yours." },
      ] },
      { type: "text", title: "Verb agreement", body: "The verb agrees with the noun or pronoun after all, both or half. Both + plural noun takes a plural verb. All/half can be singular or plural depending on whether the noun is uncountable or plural countable.", examples: [
        { text: "Both books are useful." }, { text: "All the milk is gone." }, { text: "All the tickets were sold." }, { text: "Half of the cake was eaten." },
      ] },
      { type: "text", title: "All of us / both of them", body: "Before object pronouns, use of: all of us, both of them, half of you. These phrases can be the subject or object of a sentence.", examples: [
        { text: "All of us enjoyed the film." }, { text: "The teacher spoke to both of them." }, { text: "Half of you can start now." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Both student are here.", correct: "Both students are here.", explanation: "Both refers to two and is followed by a plural noun." },
        { incorrect: "All of the milk are cold.", correct: "All of the milk is cold.", explanation: "Milk is uncountable, so use a singular verb." },
        { incorrect: "Half the students is absent.", correct: "Half the students are absent.", explanation: "The verb agrees with the plural noun students." },
      ] },
      { type: "tip", title: "Check the noun after of", body: "With all and half, look at the noun after of to choose the verb: half of the cake is; half of the students are." },
    ],
    review: ["Both = two; all = the whole group or amount; half = one of two equal parts.", "All/half can go before a determiner; use of before pronouns.", "The verb agrees with the noun or pronoun after the quantifier."],
  },
  "each-every": {
    intro: "Each and every refer to members of a group one at a time, but each emphasizes individuals and every sees the members as a complete group. Both are followed by a singular countable noun and singular verb.",
    blocks: [
      { type: "table", title: "Each and every", headings: ["Word", "Focus", "Pattern"], rows: [
        ["each", "individual members", "each + singular noun + singular verb"], ["every", "all members in a group", "every + singular noun + singular verb"], ["each of", "one member at a time from a group", "each of + determiner/pronoun + plural noun + singular verb"], ["every one of", "all the members considered individually", "every one of + determiner/pronoun + plural noun + singular verb"],
      ] },
      { type: "text", title: "Each + singular noun", body: "Use each before a singular countable noun or after the noun/pronoun it refers to. The verb is singular. Each of is followed by a determiner or pronoun plus a plural noun, but the verb remains singular in standard grammar.", examples: [
        { text: "Each student has a workbook." }, { text: "The students each have a workbook. (each refers to students; plural subject)" }, { text: "Each of the students has a workbook." },
      ] },
      { type: "text", title: "Every + singular noun", body: "Every comes before a singular countable noun and a singular verb. Use every one of before a determiner and plural noun. Every cannot normally be used alone without one or a noun.", examples: [
        { text: "Every room has a window." }, { text: "Every one of these rooms has a window." }, { text: "I have read every one. (one replaces a noun)" },
      ] },
      { type: "text", title: "Each of or every?", body: "Each of can refer to two or more members and highlights them individually. Every generally refers to a group of three or more and emphasizes that the statement applies to all members. Each can also be used alone as a pronoun.", examples: [
        { text: "Each of the twins has a different room." }, { text: "I visit my grandparents every summer." }, { text: "There are three gifts; each is wrapped." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Every students have a card.", correct: "Every student has a card.", explanation: "Every is followed by a singular noun and singular verb." },
        { incorrect: "Each of the players are ready.", correct: "Each of the players is ready.", explanation: "The subject is each, so use a singular verb in standard English." },
        { incorrect: "Every of my friends came.", correct: "Every one of my friends came. / All of my friends came.", explanation: "Use every one of, not every of." },
      ] },
      { type: "tip", title: "Watch the subject", body: "In ‘Each of the students has’, the subject is each, not students. In ‘The students each have’, the subject is plural students, so use have." },
    ],
    review: ["Each/every + singular countable noun + singular verb.", "Each of/every one of + determiner + plural noun + singular verb.", "Every cannot normally stand alone; use everyone/everything, every one or a following noun."],
  },
  "either-neither": {
    intro: "Either and neither are used mainly when talking about two people or things. Either means one or the other; neither means not one and not the other.",
    blocks: [
      { type: "table", title: "Basic meanings", headings: ["Word", "Meaning", "Example"], rows: [
        ["either", "one or the other of two", "You can take either road."], ["neither", "not one and not the other", "Neither answer is correct."], ["either ... or", "one choice or the other", "We can travel either by bus or by train."], ["neither ... nor", "not this and not that", "Neither Sam nor Jo was at home."],
      ] },
      { type: "text", title: "Pronouns and determiners", body: "Use either/neither before a singular countable noun, or use either of/neither of before a determiner or pronoun and plural noun. In careful standard English, the verb after either of/neither of is singular.", examples: [
        { text: "Either option is fine." }, { text: "Neither of my brothers drives." }, { text: "I like neither of them." },
      ] },
      { type: "text", title: "Either ... or / neither ... nor", body: "These pairs connect two alternatives. Keep the connected parts parallel (noun with noun, phrase with phrase). With neither...nor and either...or as the subject, a singular verb is standard when both subjects are singular; with different numbers, agreement can vary, so rephrasing is often clearest.", examples: [
        { text: "You can have either soup or salad." }, { text: "Neither the manager nor the assistant is available." }, { text: "Neither the assistant nor the managers are available. (verb agrees with the nearer subject in common usage)" },
      ] },
      { type: "text", title: "Either as ‘also’ in negatives", body: "At the end of a negative sentence, either means ‘also not’. It is not a choice between two things in this pattern.", examples: [
        { text: "I don't like coffee, and I don't like tea either." }, { text: "She hasn't called, and he hasn't called either." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Neither of the answers are right. (formal standard agreement)", correct: "Neither of the answers is right.", explanation: "In standard formal grammar, neither of takes a singular verb." },
        { incorrect: "I don't like neither option.", correct: "I like neither option. / I don't like either option.", explanation: "Avoid a double negative in standard English." },
        { incorrect: "You can either take the bus or the train. (uneven structure in some contexts)", correct: "You can travel either by bus or by train.", explanation: "Keep the two parts parallel: by bus / by train." },
      ] },
      { type: "tip", title: "Two choices", body: "Use either for one of two choices and neither for zero of two. For more than two choices, use another expression such as any or none." },
    ],
    review: ["Either = one of two; neither = not one and not the other.", "Use either...or and neither...nor to connect parallel alternatives.", "Either at the end of a negative sentence means ‘also not’."],
  },
  "no-none": {
    intro: "No and none both express zero quantity, but they have different positions. No comes before a noun; none is a pronoun and stands in place of a noun phrase.",
    blocks: [
      { type: "table", title: "No or none?", headings: ["Form", "Position", "Example"], rows: [
        ["no + noun", "before singular or plural/uncountable noun", "There is no bus today. / We have no tickets."], ["none", "alone as a pronoun", "How many tickets are left? None."], ["none of + determiner/pronoun", "before a plural or uncountable noun phrase", "None of the tickets are left."],
      ] },
      { type: "text", title: "No before a noun", body: "Use no directly before a noun to mean not any or not a/an. The verb agrees with the noun that follows: singular with a singular or uncountable noun and plural with a plural countable noun.", examples: [
        { text: "There is no milk in the fridge." }, { text: "There are no clean cups." }, { text: "She has no idea where he went." },
      ] },
      { type: "text", title: "None and none of", body: "Use none when the noun is understood or use none of + the/these/my/us/them. With none of + plural countable noun, both singular and plural verbs occur; plural is common when thinking of the members, while singular is more formal. With an uncountable noun, use a singular verb.", examples: [
        { text: "How much bread is left? None." }, { text: "None of the students are ready. (common)" }, { text: "None of the water is safe to drink." },
      ] },
      { type: "text", title: "Avoid double negatives", body: "No, none, nobody and nothing already make a sentence negative. In standard English, do not add not to the same clause. Use any/anyone/anything after not instead.", examples: [
        { text: "Nobody called." }, { text: "I didn't see anybody." }, { text: "There is nothing in the box." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "None people came.", correct: "No people came. / None of the people came.", explanation: "Use no before a noun, or none of before a noun phrase." },
        { incorrect: "I don't have no money.", correct: "I don't have any money. / I have no money.", explanation: "Avoid a double negative in standard English." },
        { incorrect: "None of the advice are useful.", correct: "None of the advice is useful.", explanation: "Advice is uncountable, so use a singular verb." },
      ] },
      { type: "tip", title: "Is a noun written after it?", body: "If a noun follows, use no: no time, no people. If the noun is omitted or introduced by of, use none: none, none of the time." },
    ],
    review: ["No comes directly before a noun; none replaces a noun or appears in none of.", "The verb agrees with the noun after no/of; none of can take singular or plural with plural nouns.", "Use one negative form in standard English."],
  },
  "quantifiers-countable-uncountable": {
    intro: "The noun's countability determines which quantifiers you can use. Countable nouns have individual items and plural forms; uncountable nouns are treated as a whole or mass.",
    blocks: [
      { type: "table", title: "Quantifiers by noun type", headings: ["Countable plural", "Uncountable", "Both"], rows: [
        ["many, (a) few, several", "much, (a) little", "some, any, a lot of, lots of, enough, no"], ["many books", "much water", "some books / some water"], ["a few apples", "a little sugar", "a lot of apples / a lot of sugar"],
      ] },
      { type: "text", title: "Check the noun form", body: "Countable nouns can follow a number and have singular/plural forms: one chair, two chairs. Uncountable nouns do not normally take a plural ending or a/an; use a unit phrase to count them.", examples: [
        { text: "three suggestions; many suggestions" }, { text: "some luggage; two pieces of luggage" }, { text: "a loaf of bread; two loaves of bread" },
      ] },
      { type: "text", title: "Quantifier and verb agreement", body: "The verb usually agrees with the noun phrase that follows the quantifier. Countable plural nouns take plural verbs; uncountable nouns take singular verbs. Each/every + singular noun takes a singular verb.", examples: [
        { text: "Many students are absent." }, { text: "Much of the furniture is old." }, { text: "Every chair has a number." },
      ] },
      { type: "text", title: "Some nouns have more than one use", body: "Countability can change with meaning. A chicken can be an animal (countable) or meat (uncountable). A paper can mean a newspaper or document; paper can mean the material. Learn the noun with the meaning you need.", examples: [
        { text: "There are three chickens in the yard." }, { text: "Would you like some chicken?" }, { text: "I bought a paper. / We need some paper." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "There are much cars on the road.", correct: "There are many cars on the road.", explanation: "Cars are plural countable nouns." },
        { incorrect: "We need a few advice.", correct: "We need a little advice. / We need a few suggestions.", explanation: "Advice is uncountable; suggestions are countable." },
        { incorrect: "The luggage are heavy.", correct: "The luggage is heavy.", explanation: "Luggage is uncountable and takes a singular verb." },
      ] },
      { type: "tip", title: "Make a noun note", body: "When a noun is new, note whether it is countable and learn one useful quantifier with it: many questions, much information, a piece of advice." },
    ],
    review: ["Countable nouns can be counted and have plural forms; uncountable nouns usually do not.", "Many/few go with plural countable nouns; much/little go with uncountable nouns.", "The noun after the quantifier usually controls verb agreement."],
  },
};
