import type { GrammarLesson } from "./types";

export const ADJECTIVE_LESSONS: Record<string, GrammarLesson> = {
  "adjective-basics": {
    intro: "Adjectives give information about people, places and things. They help you describe what something looks, feels or seems like.",
    blocks: [
      { type: "text", title: "1. Put adjectives before nouns", body: "An adjective usually comes directly before the noun it describes. It does not change for one or many people or things.", examples: [
        { text: "I bought a comfortable chair.", highlight: "comfortable", note: "The adjective comes before the noun chair." },
        { text: "They live in two small apartments.", highlight: "small", note: "The adjective stays the same before the plural noun." },
        { text: "We need clean glasses.", highlight: "clean" }
      ] },
      { type: "text", title: "2. Use adjectives after linking verbs", body: "Some verbs connect the subject to a description. The most common linking verb is be. Other common linking verbs are look, feel, sound, smell, taste and seem. Put the adjective after the verb.", examples: [
        { text: "The room is quiet.", highlight: "quiet" },
        { text: "You look tired today.", highlight: "tired" },
        { text: "This soup tastes delicious.", highlight: "delicious" }
      ] },
      { type: "table", title: "3. Adjectives or adverbs?", intro: "An adjective describes a person or thing. An adverb often tells us how someone does something.", headings: ["What are you describing?", "Use", "Example"], rows: [
        ["A noun", "Adjective", "She is a careful driver."],
        ["An action", "Adverb", "She drives carefully."],
        ["A linking verb + subject", "Adjective", "The music sounds loud."]
      ] },
      { type: "text", title: "4. Adjectives do not change", body: "English adjectives do not have a plural form. Do not add -s to an adjective when the noun is plural. Use an adjective after be to describe a person or thing.", examples: [
        { text: "The bags are heavy.", highlight: "heavy" },
        { text: "Not: The bags are heavies." }
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She has a car red.", correct: "She has a red car.", explanation: "Put the adjective before the noun." },
        { incorrect: "The flowers are beautifuls.", correct: "The flowers are beautiful.", explanation: "Adjectives do not take a plural -s." },
        { incorrect: "He speaks very quiet.", correct: "He speaks very quietly.", explanation: "Quiet describes a noun; quietly describes how he speaks." }
      ] },
      { type: "tip", title: "Tip", body: "Ask “What is it like?” to find an adjective: a friendly neighbour, a busy street, a warm day." }
    ],
    review: ["Put an adjective before a noun or after a linking verb.", "Adjectives do not change for plural nouns.", "Use an adverb, not an adjective, to describe most actions."]
  },
  "comparative-adjectives": {
    intro: "Comparative adjectives help you compare two people, places or things. Use them to talk about size, age, price, quality and many other differences.",
    blocks: [
      { type: "text", title: "1. Short adjectives: add -er", body: "For most short adjectives, add -er. Put than before the second person or thing. Than is often optional when the other person or thing is already clear.", examples: [
        { text: "My new phone is cheaper than my old one.", highlight: "cheaper" },
        { text: "Today is colder than yesterday.", highlight: "colder" },
        { text: "This road is wider.", highlight: "wider" }
      ] },
      { type: "table", title: "2. Spelling changes", intro: "Check the end of the adjective before you add -er.", headings: ["Adjective", "Change", "Comparative"], rows: [
        ["small", "Add -er", "smaller"], ["nice", "Add -r after final e", "nicer"],
        ["happy", "Change y to i, add -er", "happier"], ["big", "Double the last consonant", "bigger"],
        ["quiet", "Often use more with two syllables", "more quiet / quieter"]
      ] },
      { type: "text", title: "3. Longer adjectives: use more", body: "For most adjectives with two or more syllables, put more before the adjective. Do not add -er as well. Some two-syllable adjectives can use either form; learn the common form you hear.", examples: [
        { text: "The train is more comfortable than the bus.", highlight: "more comfortable" },
        { text: "This exercise is more difficult.", highlight: "more difficult" },
        { text: "Her second idea was more useful.", highlight: "more useful" }
      ] },
      { type: "table", title: "4. Irregular comparatives", intro: "These common forms do not follow the spelling rules above.", headings: ["Adjective", "Comparative", "Example"], rows: [
        ["good", "better", "This café is better than the one near work."],
        ["bad", "worse", "The weather is worse today."],
        ["far", "farther / further", "Their house is farther from town."],
        ["little", "less", "I have less free time this week."]
      ] },
      { type: "text", title: "5. Equal and lower comparisons", body: "Use as + adjective + as when two things are equal. Use not as + adjective + as to say that one is lower. Use less + adjective + than for a lower degree.", examples: [
        { text: "This bag is as light as my backpack.", highlight: "as light as" },
        { text: "The blue room is not as bright as the white room.", highlight: "not as bright as" },
        { text: "This film is less exciting than the first one.", highlight: "less exciting than" }
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "This test is more easier.", correct: "This test is easier.", explanation: "Use -er or more, but not both." },
        { incorrect: "My room is bigger that yours.", correct: "My room is bigger than yours.", explanation: "Use than to introduce the second comparison." },
        { incorrect: "She is more happier now.", correct: "She is happier now.", explanation: "Happy changes to happier. Do not add more." }
      ] },
      { type: "tip", title: "Tip", body: "For a comparison, find the adjective first. Use -er for most short adjectives and more for most long adjectives." }
    ],
    review: ["Use than after a comparative when you name the second person or thing.", "Use more OR -er, never both together.", "Use as ... as for equal comparisons and learn irregular forms such as better and worse."]
  },
  "superlative-adjectives": {
    intro: "A superlative shows that one person or thing has the highest or lowest degree of a quality in a group. It often answers the question “Which one is number one?”",
    blocks: [
      { type: "text", title: "1. Short adjectives: add -est", body: "For most short adjectives, add -est and put the before the adjective. Use in with a place or group and of before a plural group or number.", examples: [
        { text: "Maya is the tallest person in her family.", highlight: "the tallest" },
        { text: "It was the coldest day of the year.", highlight: "the coldest" },
        { text: "This is the smallest room in the hotel.", highlight: "the smallest" }
      ] },
      { type: "table", title: "2. Spelling changes", headings: ["Adjective", "Change", "Superlative"], rows: [
        ["short", "Add -est", "shortest"], ["large", "Add -st after final e", "largest"],
        ["happy", "Change y to i, add -est", "happiest"], ["hot", "Double the last consonant", "hottest"]
      ] },
      { type: "text", title: "3. Longer adjectives: use most", body: "For most adjectives with two or more syllables, use the most before the adjective. Do not add -est too.", examples: [
        { text: "That was the most interesting lesson today.", highlight: "the most interesting" },
        { text: "This is the most comfortable chair in the shop.", highlight: "the most comfortable" },
        { text: "It is one of the most popular cafés in town.", highlight: "the most popular" }
      ] },
      { type: "table", title: "4. Irregular forms", headings: ["Adjective", "Superlative", "Example"], rows: [
        ["good", "the best", "This is the best answer."], ["bad", "the worst", "Monday was the worst day."],
        ["far", "the farthest / furthest", "That is the furthest stop."], ["much / many", "the most", "She has the most books."]
      ] },
      { type: "text", title: "5. Say which group you mean", body: "A superlative compares one thing with a group. Use in before a place or singular group and of before a plural group or a time period.", examples: [
        { text: "He is the fastest runner in the class.", highlight: "in the class" },
        { text: "It is the most expensive of the three.", highlight: "of the three" }
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "She is tallest in her team.", correct: "She is the tallest in her team.", explanation: "A superlative usually uses the." },
        { incorrect: "This is the most cheapest shop.", correct: "This is the cheapest shop.", explanation: "Do not use most and -est together." },
        { incorrect: "He is the better player in the team.", correct: "He is the best player in the team.", explanation: "Better compares two; best is for a group." }
      ] },
      { type: "tip", title: "Tip", body: "Ask “Which one is number one in this group?” If you answer one, use a superlative." }
    ],
    review: ["Use the -est for most short adjectives and the most for most long adjectives.", "Use the before a superlative adjective.", "Use a comparative for two; use a superlative for one in a group."]
  },
  "ed-ing-adjectives": {
    intro: "Many adjectives come from verbs and end in -ed or -ing. The ending tells you whether you are describing a person's feeling or the thing that causes the feeling.",
    blocks: [
      { type: "table", title: "1. Feeling or cause?", intro: "The -ed form usually describes how a person feels. The -ing form describes the person or thing that creates that feeling.", headings: ["Cause (-ing)", "Feeling (-ed)"], rows: [
        ["The film is boring.", "I am bored."], ["The news is surprising.", "We are surprised."],
        ["The trip is tiring.", "They are tired."], ["The game is exciting.", "The children are excited."]
      ] },
      { type: "text", title: "2. Choose the form from the meaning", body: "Ask: “Does this word describe a feeling?” If yes, the -ed form is usually right. Ask: “Does it describe the thing or person that causes the feeling?” Use -ing.", examples: [
        { text: "I felt embarrassed when I forgot her name.", highlight: "embarrassed", note: "The person has the feeling." },
        { text: "It was an embarrassing moment.", highlight: "embarrassing", note: "The moment caused the feeling." },
        { text: "The instructions are confusing, so I am confused.", highlight: "confusing" },
        { text: "The instructions are confusing, so I am confused.", highlight: "confused" }
      ] },
      { type: "text", title: "3. Use the adjective in a sentence", body: "Both forms can come before a noun or after a linking verb. Remember that a person can sometimes be an -ing adjective if that person causes the feeling.", examples: [
        { text: "We watched an exciting match.", highlight: "exciting" },
        { text: "The match was exciting.", highlight: "exciting" },
        { text: "The children were excited about the match.", highlight: "excited" },
        { text: "Our teacher is very interesting.", highlight: "interesting", note: "The teacher makes people interested." }
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I am boring in this lesson.", correct: "I am bored in this lesson.", explanation: "Bored describes how I feel. Boring means I make other people feel bored." },
        { incorrect: "The news was very excited.", correct: "The news was very exciting.", explanation: "The news causes the feeling, so use -ing." },
        { incorrect: "She is interesting in art.", correct: "She is interested in art.", explanation: "Use interested to describe her feeling." }
      ] },
      { type: "tip", title: "Tip", body: "Think: -ed = the feeling inside a person; -ing = the thing that gives someone that feeling." }
    ],
    review: ["Use -ed for a person's feeling: I am tired.", "Use -ing for the cause: The work is tiring.", "The same person can be -ing when they cause a feeling: He is amusing."]
  },
  "gradable-non-gradable": {
    intro: "Some adjectives describe a quality that can be stronger or weaker. Other adjectives describe an extreme or complete state. The adjective type helps you choose words such as very, a little or absolutely.",
    blocks: [
      { type: "text", title: "1. Gradable adjectives", body: "A gradable adjective can have different levels. A room can be a little cold, very cold or extremely cold. These adjectives can also have comparative and superlative forms.", examples: [
        { text: "The water is quite warm.", highlight: "quite warm" },
        { text: "The water is warmer than the air.", highlight: "warmer" },
        { text: "It is the warmest day this week.", highlight: "the warmest" }
      ] },
      { type: "table", title: "2. Choose an intensifier", intro: "An intensifier is a word that makes an adjective stronger or weaker.", headings: ["Word", "Use", "Example"], rows: [
        ["a little / a bit", "A small degree", "The tea is a bit hot."],
        ["quite / fairly", "A medium degree", "The test was quite difficult."],
        ["very / really", "A high degree", "The view is really beautiful."],
        ["extremely", "A very high degree", "It is extremely important."]
      ] },
      { type: "text", title: "3. Non-gradable adjectives", body: "A non-gradable adjective usually describes an extreme or complete state. It is not natural to make this meaning a little stronger. Use absolutely or completely with many of these adjectives.", examples: [
        { text: "The answer is absolutely correct.", highlight: "absolutely correct" },
        { text: "The glass is completely empty.", highlight: "completely empty" },
        { text: "The concert was absolutely fantastic.", highlight: "absolutely fantastic" }
      ] },
      { type: "text", title: "4. Some adjectives can have two meanings", body: "A few adjectives can be gradable in one meaning and extreme in another. For example, dead can mean “not alive” or, informally, “very tired”. The adjective's meaning changes which intensifier sounds natural.", examples: [
        { text: "The battery is completely dead.", highlight: "completely dead", note: "It has no power." },
        { text: "I am very tired after work.", highlight: "very tired" }
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "The room is absolutely cold.", correct: "The room is very cold.", explanation: "Cold can change in degree, so very is the usual choice." },
        { incorrect: "The answer is very correct.", correct: "The answer is absolutely correct.", explanation: "Correct usually describes a complete state." },
        { incorrect: "I am completely hungry.", correct: "I am very hungry.", explanation: "Hungry is normally gradable." }
      ] },
      { type: "tip", title: "Tip", body: "Ask if the quality can be “a little” or “very”. If yes, use a gradable intensifier. If the adjective means complete or extreme, try absolutely or completely." }
    ],
    review: ["Gradable adjectives can have stronger and weaker forms.", "Use a little, quite, very or extremely with gradable adjectives.", "Use absolutely or completely with many extreme adjectives."]
  },
  "adjective-preposition": {
    intro: "Many English adjectives are followed by a particular preposition. The preposition connects the adjective to the person or thing it describes. These pairs are best learned together.",
    blocks: [
      { type: "table", title: "1. Common adjective + preposition pairs", intro: "Learn the adjective and preposition as one phrase. The word after the preposition is its object.", headings: ["Adjective", "Preposition", "Example"], rows: [
        ["afraid", "of", "He is afraid of dogs."], ["interested", "in", "I am interested in history."],
        ["good / bad", "at", "She is good at tennis."], ["different", "from", "This bag is different from mine."],
        ["worried", "about", "We are worried about the exam."], ["proud", "of", "They are proud of their daughter."],
        ["kind", "to", "Please be kind to the new student."], ["ready", "for", "Are you ready for the trip?"]
      ] },
      { type: "text", title: "2. Use the same pair in questions and negatives", body: "Keep the preposition when you change the sentence. It does not disappear in a question or negative sentence.", examples: [
        { text: "She is interested in science.", highlight: "interested in" },
        { text: "Is she interested in science?", highlight: "interested in" },
        { text: "She is not interested in science.", highlight: "interested in" }
      ] },
      { type: "text", title: "3. A verb after a preposition", body: "When a verb comes directly after a preposition, use the -ing form. This rule also applies when the adjective phrase ends in a preposition.", examples: [
        { text: "I am good at remembering names.", highlight: "remembering" },
        { text: "He is interested in learning French.", highlight: "learning" },
        { text: "She is afraid of flying.", highlight: "flying" }
      ] },
      { type: "text", title: "4. The preposition can change the meaning", body: "Some adjectives use different prepositions for different ideas. Learn each meaning with an example instead of choosing a preposition by translation.", examples: [
        { text: "This cup is full of tea.", highlight: "full of", note: "The cup contains tea." },
        { text: "I am full after dinner.", highlight: "full after", note: "I have eaten enough." },
        { text: "She is good at maths.", highlight: "good at", note: "She can do maths well." },
        { text: "This fruit is good for you.", highlight: "good for", note: "It is healthy for you." }
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "I am interested on music.", correct: "I am interested in music.", explanation: "The fixed phrase is interested in." },
        { incorrect: "He is good in cooking.", correct: "He is good at cooking.", explanation: "Use good at for a skill." },
        { incorrect: "She is afraid of to fly.", correct: "She is afraid of flying.", explanation: "Use an -ing verb after a preposition." }
      ] },
      { type: "tip", title: "Tip", body: "Write new vocabulary as a phrase: proud of, worried about, ready for. Learn the preposition with the adjective." }
    ],
    review: ["Many adjective + preposition pairs are fixed.", "Keep the preposition in statements, questions and negatives.", "Use -ing after a preposition when a verb follows."]
  },
  "too-enough": {
    intro: "Too and enough help you say if something is more than you need or if it is sufficient. Their position in the sentence is different, so notice the word that comes next.",
    blocks: [
      { type: "table", title: "1. Too + adjective or adverb", intro: "Too means “more than is good, right or possible”. It often gives a negative result.", headings: ["Pattern", "Example", "Meaning"], rows: [
        ["too + adjective", "The coffee is too hot.", "I cannot drink it now."],
        ["too + adverb", "He drives too quickly.", "His speed is not safe."],
        ["too much + uncountable noun", "There is too much noise.", "The amount is a problem."],
        ["too many + plural noun", "There are too many cars.", "The number is a problem."]
      ] },
      { type: "table", title: "2. Enough + noun / adjective + enough", intro: "Enough means “as much or as many as needed”. Its position changes with the next word.", headings: ["Pattern", "Example"], rows: [
        ["enough + noun", "We have enough time."], ["adjective + enough", "The room is warm enough."],
        ["adverb + enough", "She speaks clearly enough."], ["enough + plural noun", "There are enough chairs for everyone."]
      ] },
      { type: "text", title: "3. Add a result with to + verb", body: "You can add to + verb after too or enough to explain what can or cannot happen. Put for + person before the infinitive when you name who does the action.", examples: [
        { text: "The bag is too heavy to carry.", highlight: "too heavy to carry" },
        { text: "The child is old enough to travel alone.", highlight: "old enough to travel" },
        { text: "The question is too difficult for me to answer.", highlight: "for me to answer" }
      ] },
      { type: "text", title: "4. Not enough", body: "Use not enough when the amount or quality is below what is needed. Put enough before a noun. With an adjective, put not before the adjective and enough after it: is not warm enough.", examples: [
        { text: "We do not have enough chairs.", highlight: "not have enough" },
        { text: "The soup is not warm enough.", highlight: "not warm enough" },
        { text: "He did not run fast enough to win.", highlight: "not run fast enough" }
      ] },
      { type: "mistakes", title: "Common mistakes", items: [
        { incorrect: "The room is enough big.", correct: "The room is big enough.", explanation: "Enough comes after an adjective." },
        { incorrect: "We have chairs enough.", correct: "We have enough chairs.", explanation: "Enough comes before a noun." },
        { incorrect: "There are too much people.", correct: "There are too many people.", explanation: "Use many with plural countable nouns." }
      ] },
      { type: "tip", title: "Tip", body: "Look at the next word: before a noun, use enough; after an adjective or adverb, use enough. Put too before an adjective or adverb." }
    ],
    review: ["Too comes before an adjective or adverb and means more than is wanted.", "Enough comes before a noun but after an adjective or adverb.", "Use too much with uncountable nouns and too many with plural countable nouns."]
  }
};
