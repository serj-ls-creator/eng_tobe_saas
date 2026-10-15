import type { GrammarLesson } from "./types";

export const NOUN_LESSONS: Record<string, GrammarLesson> = {
  "common-proper-nouns": {
    intro: "Nouns name people, places, things and ideas. Common nouns name a general person or thing; proper nouns name a particular one and begin with a capital letter.",
    blocks: [
      { type: "table", title: "Common and proper nouns", headings: ["Type", "Meaning", "Examples"], rows: [
        ["Common", "a general person, place or thing", "teacher, city, river, book"], ["Proper", "a particular name", "Ms Green, London, the Thames, The Hobbit"],
      ] },
      { type: "text", title: "Capital letters", body: "Capitalize people's names, place names, countries, languages, nationalities, days, months, holidays and the first word in a sentence. Do not capitalize ordinary common nouns unless they begin a sentence or form part of an official name.", examples: [
        { text: "My cousin lives in Canada." }, { text: "We study English on Mondays." }, { text: "I bought a new phone. (phone is a common noun)" },
      ] },
      { type: "text", title: "Names with more than one word", body: "Capitalize the important words in many names and titles. In a person's title before a name, the title is capitalized; a general job title is usually lower-case. Exact title conventions can vary by style.", examples: [
        { text: "Dr Patel works at Green Street Clinic." }, { text: "My doctor works at a clinic." }, { text: "the Pacific Ocean; Central Park" },
      ] },
      { type: "text", title: "Days, months and languages", body: "English capitalizes days, months, languages and nationalities. Seasons are usually lower-case unless they begin a sentence or appear in a title.", examples: [
        { text: "Our course starts in September." }, { text: "He speaks Spanish and Arabic." }, { text: "I love spring." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I live in france.", correct: "I live in France.", explanation: "Capitalize country names." },
        { incorrect: "We have english on tuesday.", correct: "We have English on Tuesday.", explanation: "Capitalize languages and days of the week." },
        { incorrect: "My Sister is a doctor.", correct: "My sister is a doctor.", explanation: "Family words are common nouns unless used as a name or direct form of address." },
      ] },
      { type: "tip", title: "Ask if it is a name", body: "If the word names one specific person, place, language or named thing, use a capital. If it names a type in general, use a lower-case letter." },
    ],
    review: ["Common nouns name general types; proper nouns name specific people, places and things.", "Capitalize proper names, countries, languages, nationalities, days and months.", "Ordinary job and family words are usually lower-case."],
  },
  "countable-uncountable-nouns": {
    intro: "Countable nouns are things you can count as separate items. Uncountable nouns are treated as a whole, a substance or an idea, so they do not usually have a plural form.",
    blocks: [
      { type: "table", title: "Countable and uncountable", headings: ["Type", "Singular / plural", "Examples"], rows: [
        ["Countable", "a chair / three chairs", "apple, idea, ticket"], ["Uncountable", "some water (not waters in the general meaning)", "water, rice, information"],
      ] },
      { type: "text", title: "Articles and quantity words", body: "Use a/an with a singular countable noun. Use numbers with countable plural nouns. Do not use a/an or a number directly with an uncountable noun; use some, much, a little or a unit phrase instead.", examples: [
        { text: "an idea; two ideas" }, { text: "some advice; a piece of advice" }, { text: "a glass of water; three bottles of water" },
      ] },
      { type: "text", title: "Subject–verb agreement", body: "A singular countable noun takes a singular verb; its plural takes a plural verb. Uncountable nouns normally take a singular verb, even when they describe a large amount.", examples: [
        { text: "This chair is comfortable. These chairs are comfortable." }, { text: "The furniture is new." }, { text: "Your advice was helpful." },
      ] },
      { type: "text", title: "Some nouns change category", body: "A noun can be countable in one meaning and uncountable in another. Coffee is uncountable as a drink or substance, but a coffee can mean one cup or serving. Similar changes occur with paper, chicken and experience.", examples: [
        { text: "I don't drink much coffee." }, { text: "Two coffees, please. (two cups)" }, { text: "She has a lot of experience. / It was an interesting experience." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "Can you give me an advice?", correct: "Can you give me some advice? / Can you give me a piece of advice?", explanation: "Advice is uncountable in this meaning." },
        { incorrect: "The furnitures are expensive.", correct: "The furniture is expensive.", explanation: "Furniture is uncountable and takes a singular verb." },
        { incorrect: "I need three information.", correct: "I need three pieces of information.", explanation: "Use a countable unit such as piece with information." },
      ] },
      { type: "tip", title: "Learn the noun with its grammar", body: "Record uncountable nouns with a quantity phrase: a piece of advice, a loaf of bread, a bottle of water. Some nouns that are countable in other languages are uncountable in English." },
    ],
    review: ["Countable nouns have singular and plural forms; uncountable nouns usually do not.", "Use a/an and numbers with countable nouns; use a unit phrase for uncountable nouns.", "Uncountable nouns normally take a singular verb."],
  },
  "singular-plural-nouns": {
    intro: "A singular noun refers to one person or thing. A plural noun refers to more than one. Most English nouns add -s, but spelling depends on the final letters.",
    blocks: [
      { type: "table", title: "Regular plural spelling", headings: ["Ending", "Rule", "Example"], rows: [
        ["Most nouns", "add -s", "book → books; car → cars"], ["-s, -ss, -sh, -ch, -x, often -z", "add -es", "bus → buses; box → boxes"], ["consonant + y", "change y to -ies", "city → cities"], ["vowel + y", "add -s", "key → keys; boy → boys"], ["many -f / -fe nouns", "change to -ves", "leaf → leaves; wife → wives"],
      ] },
      { type: "text", title: "The -f and -fe pattern", body: "Many nouns ending in -f or -fe change to -ves, but not all do. Some add -s, and a few have more than one accepted plural. Learn the plural form with the noun when it is irregular.", examples: [
        { text: "knife → knives; shelf → shelves" }, { text: "roof → roofs; chief → chiefs" }, { text: "scarf → scarfs / scarves" },
      ] },
      { type: "text", title: "Nouns ending in -o", body: "Some nouns ending in -o add -es, while many others add only -s. There is no single rule that works for every word, so check unfamiliar plurals.", examples: [
        { text: "tomato → tomatoes; hero → heroes" }, { text: "photo → photos; piano → pianos" },
      ] },
      { type: "text", title: "Plural agreement and determiners", body: "Use a plural verb with plural nouns. Do not use a/an with a plural noun. Use these/those rather than this/that before a plural noun.", examples: [
        { text: "Those watches are expensive." }, { text: "I bought two sandwiches." }, { text: "This sandwich is fresh." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "three childs", correct: "three children", explanation: "Child has an irregular plural." },
        { incorrect: "two citys", correct: "two cities", explanation: "Change consonant + y to -ies." },
        { incorrect: "an apples", correct: "an apple / some apples", explanation: "Use a/an with a singular countable noun, not a plural." },
      ] },
      { type: "tip", title: "Check the whole noun phrase", body: "Look at both the noun and the words before it: one watch, a watch, two watches, these watches. The determiner and verb should agree with singular or plural." },
    ],
    review: ["Most plural nouns add -s; endings like -s, -sh, -ch and -x usually take -es.", "Consonant + y changes to -ies; vowel + y just adds -s.", "Some -f/-fe and -o plurals vary, so learn those individually."],
  },
  "irregular-plurals": {
    intro: "Irregular plural nouns do not follow the usual -s or -es pattern. Learn their plural forms as vocabulary and use them with plural verbs and determiners.",
    blocks: [
      { type: "table", title: "Common irregular plurals", headings: ["Singular", "Plural", "Example"], rows: [
        ["man", "men", "The men are waiting."], ["woman", "women", "Those women work here."], ["child", "children", "The children are outside."], ["person", "people", "Many people use this app."], ["tooth", "teeth", "Brush your teeth."], ["foot", "feet", "My feet are cold."], ["mouse", "mice", "We saw two mice."], ["goose", "geese", "The geese are near the lake."],
      ] },
      { type: "text", title: "Same form in singular and plural", body: "Some nouns have the same form for one or more than one. The number is clear from the determiner, number or verb. Common examples include sheep, deer and fish (though fishes can refer to different species).", examples: [
        { text: "One sheep is in the field." }, { text: "Five sheep are in the field." }, { text: "We caught two fish." },
      ] },
      { type: "text", title: "Nouns from Latin or Greek", body: "Some academic or scientific words have classical plural forms, such as analysis/analyses and criterion/criteria. In everyday English, some words also have regular plurals, but use the standard form expected for your context.", examples: [
        { text: "one analysis → two analyses" }, { text: "one criterion → several criteria" }, { text: "one phenomenon → many phenomena" },
      ] },
      { type: "text", title: "Compound nouns", body: "In many compound nouns, make the main noun plural. For example, the plural of mother-in-law is mothers-in-law. Some compounds have different patterns, so check a dictionary if unsure.", examples: [
        { text: "one bus driver → two bus drivers" }, { text: "one mother-in-law → two mothers-in-law" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "There are many childrens here.", correct: "There are many children here.", explanation: "Children is already plural; do not add -s." },
        { incorrect: "Two womans came in.", correct: "Two women came in.", explanation: "Woman has the irregular plural women." },
        { incorrect: "One sheep are missing.", correct: "One sheep is missing.", explanation: "A singular sheep takes a singular verb, even though its plural form is the same." },
      ] },
      { type: "tip", title: "Learn pairs", body: "Study irregular nouns as pairs and say them in a sentence: one tooth, two teeth; one person, several people. This also helps you remember agreement." },
    ],
    review: ["Irregular plurals must be learned individually.", "Some nouns, such as sheep and deer, have the same singular and plural form.", "Use a plural verb with a plural meaning, even when the noun form does not change."],
  },
  "possessive-nouns": {
    intro: "A possessive noun shows who owns something or what something is connected to. Use an apostrophe with -s for most singular nouns and an apostrophe after -s for regular plural nouns.",
    blocks: [
      { type: "table", title: "Form the possessive", headings: ["Noun", "Possessive", "Example"], rows: [
        ["singular noun", "add 's", "the girl's bag"], ["singular ending in -s", "usually add 's", "James's bike"], ["regular plural ending in -s", "add apostrophe only", "the students' books"], ["irregular plural not ending in -s", "add 's", "the children's room"],
      ] },
      { type: "text", title: "People and animals", body: "Use possessive forms with people, groups and often animals. The apostrophe comes after the owner noun, before the thing owned. The owner can be singular or plural.", examples: [
        { text: "my brother's room" }, { text: "the players' uniforms" }, { text: "the women's team" },
      ] },
      { type: "text", title: "Joint and separate ownership", body: "When two people share one thing, add possessive marking to the second name only. When each person has a separate thing, mark both names.", examples: [
        { text: "Anna and Ben's flat (one flat they share)" }, { text: "Anna's and Ben's bikes (each has a bike)" },
      ] },
      { type: "text", title: "Possessive or plural?", body: "A plural noun usually ends in -s without an apostrophe. A possessive needs an apostrophe. Do not confuse its (belonging to it) with it's (it is or it has).", examples: [
        { text: "The dogs are outside. (plural)" }, { text: "The dog's bowl is empty. (one dog owns the bowl)" }, { text: "The company changed its name. (possessive determiner)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "the girls room", correct: "the girl's room / the girls' room", explanation: "Add an apostrophe to show possession; its position depends on singular or plural owner." },
        { incorrect: "the childrens' books", correct: "the children's books", explanation: "Children is an irregular plural that does not end in -s, so add 's." },
        { incorrect: "The dog wagged it's tail.", correct: "The dog wagged its tail.", explanation: "Its is possessive; it's means it is or it has." },
      ] },
      { type: "tip", title: "Find the owner first", body: "Identify who owns or is connected to the thing. Then decide whether that owner noun is singular, a regular plural ending in -s, or an irregular plural." },
    ],
    review: ["Singular noun: 's; regular plural ending in -s: apostrophe after the s.", "Irregular plural: add 's (the children's toys).", "Its is possessive; it's means it is or it has."],
  },
  "compound-nouns": {
    intro: "A compound noun combines two or more words to name one person, place, thing or idea. Compounds may be written as one word, as separate words or with a hyphen.",
    blocks: [
      { type: "table", title: "Common written forms", headings: ["Form", "Examples", "Plural"], rows: [
        ["one word", "toothpaste, bedroom", "toothpastes, bedrooms"], ["two words", "bus stop, swimming pool", "bus stops, swimming pools"], ["hyphenated", "mother-in-law, check-in", "mothers-in-law, check-ins"],
      ] },
      { type: "text", title: "Compound patterns", body: "Compound nouns can combine noun + noun, adjective + noun, verb + particle or other word types. Often the final word is the main noun, while the first part tells us what kind it is.", examples: [
        { text: "coffee shop (a shop that sells coffee)" }, { text: "washing machine (a machine for washing)" }, { text: "check-in (the process of registering)" },
      ] },
      { type: "text", title: "Stress and meaning", body: "In many two-word compounds, the first word receives stronger stress. Stress can help distinguish a compound noun from an adjective + noun phrase, but spelling and stress patterns have exceptions.", examples: [
        { text: "a GREENhouse (a glass building for plants)" }, { text: "a green HOUSE (a house that is green)" }, { text: "a BUS stop (a place for buses)" },
      ] },
      { type: "text", title: "Plural forms", body: "Usually make the main noun plural. If the compound has a noun followed by a preposition or particle, the first noun is often pluralized. In many noun + noun compounds, the final noun takes -s.", examples: [
        { text: "one toothbrush → two toothbrushes" }, { text: "one passer-by → two passers-by" }, { text: "one school bus → three school buses" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "two mother-in-laws", correct: "two mothers-in-law", explanation: "In this compound, mother is the main noun and takes the plural ending." },
        { incorrect: "a busstop", correct: "a bus stop", explanation: "Bus stop is conventionally written as two words." },
        { incorrect: "three toothbrush", correct: "three toothbrushes", explanation: "The final noun tooth is part of the one-word compound and takes the plural ending." },
      ] },
      { type: "tip", title: "Check a dictionary", body: "Compound spelling is not fully predictable. When you learn a new compound noun, record its spelling and plural form together." },
    ],
    review: ["Compound nouns can be open, hyphenated or written as one word.", "The first part often describes the type; the last part is often the main noun.", "Pluralize the main noun and check unusual compounds individually."],
  },
  "collective-nouns": {
    intro: "A collective noun names a group as one unit, such as a team, family or class. In standard American English, collective nouns usually take a singular verb; British English sometimes uses a plural verb when focusing on the members.",
    blocks: [
      { type: "table", title: "Common collective nouns", headings: ["Group", "Collective noun", "Example"], rows: [
        ["people working together", "team, staff, crew", "The team is ready."], ["family members", "family", "My family lives nearby."], ["students", "class", "The class starts at nine."], ["musicians", "band, orchestra", "The band is playing tonight."], ["animals", "flock, herd, pack", "A flock of birds was flying overhead."],
      ] },
      { type: "text", title: "The group as one unit", body: "Use a singular verb when you think of the group as one whole doing one thing. This is the usual pattern in American English and is also common in British English.", examples: [
        { text: "The family is having dinner together." }, { text: "Our team has a new coach." }, { text: "The audience was quiet." },
      ] },
      { type: "text", title: "The members as individuals", body: "In British English, a plural verb can be used when the members act separately or disagree. Pronouns often follow the same idea: it for the group as a unit, they for individual members. In American English, the singular verb and it are more usual.", examples: [
        { text: "The team are wearing their new shirts. (common British usage: members)" }, { text: "The team is wearing its new uniform. (group as one unit)" },
      ] },
      { type: "text", title: "A group of + plural noun", body: "In a phrase such as a group of students, the head noun group is singular, so it usually takes a singular verb. Do not let the nearby plural noun students control the verb.", examples: [
        { text: "A group of students is waiting outside." }, { text: "A flock of geese was crossing the road." },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "The team are ready. (standard American English, group as one unit)", correct: "The team is ready.", explanation: "Use a singular verb when the group is treated as one unit, especially in American English." },
        { incorrect: "A group of people are waiting. (formal singular agreement)", correct: "A group of people is waiting.", explanation: "The head noun group is singular." },
        { incorrect: "The family is at home. They is watching TV.", correct: "The family is at home. They are watching TV. / It is watching TV. (group)", explanation: "Make the pronoun and verb agree; they takes are, while it takes is." },
      ] },
      { type: "tip", title: "Choose a variety and meaning", body: "For learner writing, a singular verb with team, family and class is a safe default. Use a plural in varieties such as British English when you clearly mean the members individually." },
    ],
    review: ["Collective nouns name groups.", "Use singular agreement when the group acts as one unit.", "British English may use plural agreement for individual members; American English generally uses singular agreement."],
  },
  "noun-formation": {
    intro: "Many nouns are formed from verbs and adjectives by adding a suffix. The spelling can change, and some words have more than one possible noun form.",
    blocks: [
      { type: "table", title: "Common noun suffixes", headings: ["Suffix", "Often forms", "Examples"], rows: [
        ["-er / -or", "a person who does something", "teach → teacher; act → actor"], ["-tion / -sion", "an action or result", "inform → information; decide → decision"], ["-ment", "an action or result", "develop → development; agree → agreement"], ["-ness", "a quality or state", "kind → kindness; dark → darkness"], ["-ity", "a quality or state", "active → activity; possible → possibility"], ["-ance / -ence", "a state or action", "perform → performance; differ → difference"],
      ] },
      { type: "text", title: "People and jobs", body: "The suffix -er or -or often names a person who does an action or a job. Some words use special spelling, and the ending is not always enough to predict the noun; check the word when unsure.", examples: [
        { text: "write → writer; paint → painter" }, { text: "visit → visitor; invent → inventor" }, { text: "drive → driver; run → runner" },
      ] },
      { type: "text", title: "Abstract nouns", body: "Suffixes such as -ness, -ity, -ment and -tion often make abstract nouns for qualities, processes or results. The spelling may change: happy → happiness, active → activity, explain → explanation.", examples: [
        { text: "kind → kindness" }, { text: "safe → safety" }, { text: "educate → education" },
      ] },
      { type: "text", title: "Use the noun in a sentence", body: "After forming a noun, check whether it is countable or uncountable, and use the right article and verb. Not every noun-forming suffix creates the same grammar pattern.", examples: [
        { text: "Her explanation was clear. (countable)" }, { text: "Information is important. (uncountable)" }, { text: "Their friendship lasted for years. (countable)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "The decide was difficult.", correct: "The decision was difficult.", explanation: "Use the noun decision, not the verb decide, after the." },
        { incorrect: "Hapiness is important.", correct: "Happiness is important.", explanation: "With many adjectives ending in consonant + y, change y to i before -ness." },
        { incorrect: "They gave me many informations.", correct: "They gave me a lot of information. / several pieces of information.", explanation: "Information is uncountable and does not take a plural -s." },
      ] },
      { type: "tip", title: "Build word families", body: "Learn related forms together: decide (verb), decision (noun), decisive (adjective). Notice both spelling changes and countability." },
    ],
    review: ["Suffixes such as -er, -or, -tion, -ment, -ness and -ity form many nouns.", "Spelling may change when a suffix is added.", "Check the noun's meaning, countability and sentence role."],
  },
  "noun-noun-structures": {
    intro: "In a noun + noun structure, one noun describes or classifies another. The last noun is usually the main noun; the first noun answers what kind, what for or what material.",
    blocks: [
      { type: "text", title: "The first noun modifies the second", body: "The first noun works like a description and is usually singular, even when the meaning is plural. The second noun is the main noun and normally takes the plural ending when there is more than one.", examples: [
        { text: "a shoe shop → two shoe shops" }, { text: "a bus ticket → several bus tickets" }, { text: "a bookcase → two bookcases" },
      ] },
      { type: "table", title: "Common relationships", headings: ["Relationship", "Compound", "Meaning"], rows: [
        ["purpose", "coffee cup", "a cup for coffee"], ["place", "school library", "a library at a school"], ["material", "stone wall", "a wall made of stone"], ["time", "summer holiday", "a holiday in summer"], ["type", "train station", "a station for trains"],
      ] },
      { type: "text", title: "Noun + noun or possessive?", body: "Use noun + noun to name a type or category: a car door is a kind of door. Use a possessive to show ownership or a personal connection: Emma's car is owned or used by Emma.", examples: [
        { text: "the kitchen window (the window in the kitchen)" }, { text: "the teacher's desk (the desk used by a particular teacher)" }, { text: "a children's book (a book for children)" },
      ] },
      { type: "text", title: "Stress and word order", body: "In many compound nouns, the first noun is stressed more strongly. The main noun usually comes last, so do not translate a compound word-for-word from another language if that reverses the English order.", examples: [
        { text: "a TOOTHbrush (a brush for teeth)" }, { text: "a bus DRIVER (a person who drives a bus)" }, { text: "a computer screen (the screen of a computer)" },
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "two shoes shops", correct: "two shoe shops", explanation: "The first noun in a noun + noun compound is usually singular." },
        { incorrect: "a ticket bus", correct: "a bus ticket", explanation: "The type or purpose noun comes before the main noun in English." },
        { incorrect: "the door car", correct: "the car door", explanation: "The main noun (door) comes last; car tells us what kind of door." },
      ] },
      { type: "tip", title: "Find the main noun", body: "Ask ‘What is it?’ in the compound. In a bus ticket, it is a ticket; bus tells you what kind. Make that final main noun plural: bus tickets." },
    ],
    review: ["The final noun is usually the main noun; the first noun classifies it.", "The first noun is usually singular: shoe shop, bus tickets.", "Use a possessive for ownership or personal connection, and noun + noun for a type or purpose."],
  },
};
