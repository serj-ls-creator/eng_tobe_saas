export interface DialogueItem {
  id: string;
  prompt: string;               // B1-C1 question or statement
  positive: string;             // Positive response
  negative: string;             // Negative response
  question: string;             // Interrogative response (question reply)
}

export interface EverydaySubcategory {
  id: string;
  name: string;
  description: string;
  dialogues: DialogueItem[];
}

export interface EverydayTopic {
  id: string;
  name: string;
  description: string;
  subcategories: EverydaySubcategory[];
}

export const EVERYDAY_SITUATIONS: EverydayTopic[] = [
  {
    id: "dining-out",
    name: "Dining Out",
    description: "Restaurant phrases: table requests, allergies, separate bills, ordering & recommendations",
    subcategories: [
      {
        id: "table-requests",
        name: "Table Requests",
        description: "How to ask for a table by the window, quiet booths, or spacious seating",
        dialogues: [
          {
            id: "tr-1",
            prompt: "Would it be possible to get a table by the window with a view of the skyline?",
            positive: "Certainly, we have a lovely table available by the window right now.",
            negative: "Unfortunately, all our window tables are currently occupied or reserved.",
            question: "Could you wait about fifteen minutes while we clear a window table for you?"
          },
          {
            id: "tr-2",
            prompt: "Do we need a reservation for outdoor patio seating tonight?",
            positive: "Yes, outdoor seating is highly popular and requires booking in advance.",
            negative: "No, we operate patio seating on a first-come, first-served basis.",
            question: "Would you prefer a covered patio table or one in the open air?"
          },
          {
            id: "tr-3",
            prompt: "Could you accommodate a party of six instead of four, if we don't mind waiting?",
            positive: "Absolutely, we can merge two tables together for your group shortly.",
            negative: "I'm afraid we cannot expand the table capacity in this section tonight.",
            question: "Would you be willing to sit at the high-top tables near the bar area instead?"
          },
          {
            id: "tr-4",
            prompt: "Is there a quiet booth available away from the bustling main kitchen entrance?",
            positive: "Yes, we can seat you in our quieter corner booths immediately.",
            negative: "I'm sorry, but all our secluded booths are fully booked for the evening.",
            question: "Would a table in the private dining room upstairs suit your needs?"
          },
          {
            id: "tr-5",
            prompt: "Can we request a table that has a bit more legroom for our tall guests?",
            positive: "Of course, I will seat you at one of our spacious freestanding tables.",
            negative: "Regrettably, all our standard tables tonight have identical spacing.",
            question: "Would you mind sitting at a larger table intended for five people?"
          },
          {
            id: "tr-6",
            prompt: "Would you mind if we moved to that empty corner table over there?",
            positive: "Not at all, feel free to relocate to that table whenever you like.",
            negative: "I'm afraid that specific table is already reserved for a party arriving soon.",
            question: "Would you like me to transfer your drinks and coats over to that table?"
          },
          {
            id: "tr-7",
            prompt: "Is it possible to secure a high chair or a booster seat for our toddler?",
            positive: "Yes, I will bring a sanitized high chair over to your table right away.",
            negative: "I'm sorry, but all our high chairs are currently in use by other guests.",
            question: "Would a booster seat placed on a standard chair work just as well?"
          },
          {
            id: "tr-8",
            prompt: "Do you have any tables available near a power outlet so I can charge my phone?",
            positive: "Yes, we have a few tables along the wall equipped with convenient outlets.",
            negative: "Unfortunately, none of our dining tables have access to electrical outlets.",
            question: "Could I charge your device behind the bar counter for you instead?"
          },
          {
            id: "tr-9",
            prompt: "Can we be seated in a smoke-free zone on the terrace?",
            positive: "Definitely, our entire terrace is strictly a non-smoking area.",
            negative: "Unfortunately, the terrace is our designated smoking section tonight.",
            question: "Would you prefer to be seated indoors where smoking is strictly prohibited?"
          },
          {
            id: "tr-10",
            prompt: "Could we have a table with a bit more privacy for a confidential business lunch?",
            positive: "Certainly, I can escort you to our semi-private alcove in the back.",
            negative: "I'm sorry, our dining room has an open layout with very limited privacy.",
            question: "Would you like to reserve our fully private executive room for a small fee?"
          }
        ]
      },
      {
        id: "allergies",
        name: "Allergies",
        description: "How to communicate nut, gluten, dairy, egg, and shellfish allergies safely",
        dialogues: [
          {
            id: "al-1",
            prompt: "I have a severe peanut allergy; is there any risk of cross-contamination in the kitchen?",
            positive: "We take allergies very seriously and prepare such meals in a designated nut-free zone.",
            negative: "Unfortunately, we cannot guarantee zero cross-contamination as nuts are used frequently.",
            question: "Would you like our chef to walk you through our allergen safety protocols?"
          },
          {
            id: "al-2",
            prompt: "Does this creamy seafood chowder contain any gluten or flour as a thickener?",
            positive: "No, the soup is thickened entirely with potatoes and is completely gluten-free.",
            negative: "Yes, we use a traditional flour roux to thicken this particular chowder.",
            question: "Would you like me to ask if we can prepare a gluten-free broth for you instead?"
          },
          {
            id: "al-3",
            prompt: "Can this dish be prepared entirely without garlic, or is it already pre-marinated?",
            positive: "Absolutely, we can cook a fresh portion for you without adding any garlic.",
            negative: "I'm afraid the chicken is pre-marinated overnight, so we cannot remove the garlic.",
            question: "Would you prefer to look at our freshly made pasta options which are garlic-free?"
          },
          {
            id: "al-4",
            prompt: "I'm highly lactose intolerant; could you substitute the butter with olive oil?",
            positive: "Of course, we will gladly sauté your vegetables in extra virgin olive oil.",
            negative: "Regrettably, the sauce is pre-whipped with butter and cannot be modified.",
            question: "Would you like to know which of our entrees are naturally dairy-free?"
          },
          {
            id: "al-5",
            prompt: "Are there any hidden egg products in the Caesar dressing?",
            positive: "No, our house Caesar dressing is completely vegan and egg-free.",
            negative: "Yes, our traditional recipe contains raw egg yolks to create the emulsion.",
            question: "Would you like to substitute it with our egg-free vinaigrette instead?"
          },
          {
            id: "al-6",
            prompt: "Is the kitchen able to accommodate a severe shellfish allergy safely?",
            positive: "Yes, we will use fresh utensils and sterilized pans to prepare your meal safely.",
            negative: "No, due to the high volume of shellfish cooked here, we advise against ordering it.",
            question: "Could you tell me if your allergy is triggered by airborne particles as well?"
          },
          {
            id: "al-7",
            prompt: "Does your veggie burger contain soy, or is it made primarily from beans and mushrooms?",
            positive: "It is entirely soy-free, crafted solely from black beans, oats, and portobello mushrooms.",
            negative: "Yes, the patty contains textured soy protein as one of its main ingredients.",
            question: "Would you like to check the full ingredient list printed on our allergen menu?"
          },
          {
            id: "al-8",
            prompt: "Could you double-check if the chef uses MSG in any of the marinades?",
            positive: "I have checked with the kitchen, and we do not use MSG in any of our marinades.",
            negative: "Yes, our signature house marinade contains a small amount of MSG for umami flavor.",
            question: "Would you like to order the grilled fish, which is seasoned only with sea salt and herbs?"
          },
          {
            id: "al-9",
            prompt: "Is this dessert sweetened with honey, or is it safe for a strict vegan?",
            positive: "It is safe for vegans, sweetened exclusively with organic maple syrup.",
            negative: "Yes, we glaze this tart with wildflower honey before serving.",
            question: "Would you prefer our dairy-free fruit sorbet, which contains no animal products?"
          },
          {
            id: "al-10",
            prompt: "I have a mild sensitivity to spicy food; can we tone down the chili in the curry?",
            positive: "Yes, we can prepare a mild version of the curry especially for you.",
            negative: "I'm afraid the curry paste is pre-made and is inherently quite spicy.",
            question: "Would you like me to recommend a milder dish from our signature mains?"
          }
        ]
      },
      {
        id: "separate-bills",
        name: "Separate Bills",
        description: "How to ask for separate checks, splitting equally, or card/cash combinations",
        dialogues: [
          {
            id: "sb-1",
            prompt: "Could we possibly split the total bill evenly among the four of us?",
            positive: "Certainly, I can run four equal transactions on your cards.",
            negative: "I'm sorry, our system only allows a maximum of two payments per table.",
            question: "Would you like me to print out four separate receipts for your records?"
          },
          {
            id: "sb-2",
            prompt: "Is it okay if we pay for our own drinks and meals separately, rather than splitting it evenly?",
            positive: "Of course, just let me know who had which dish, and I will separate them.",
            negative: "I'm afraid we can only split the final bill by equal percentages tonight.",
            question: "Could you help me match each item with the correct guest at the table?"
          },
          {
            id: "sb-3",
            prompt: "Can I pay my share in cash and have the rest charged to my colleague's credit card?",
            positive: "Absolutely, I will deduct the cash amount first and charge the remainder to the card.",
            negative: "I'm sorry, but we cannot combine cash and card payments for a single bill.",
            question: "How much cash would you like to put towards the total balance?"
          },
          {
            id: "sb-4",
            prompt: "Would you mind itemizing the bill so we can verify who ordered the expensive steak?",
            positive: "Certainly, here is the fully itemized receipt showing every dish ordered.",
            negative: "Unfortunately, our register can only print a consolidated summary right now.",
            question: "Would you like me to explain any of the specific charges listed here?"
          },
          {
            id: "sb-5",
            prompt: "Can we charge the shared appetizers to one card and split the entrees separately?",
            positive: "Yes, I can manually allocate the appetizers to the first card and split the rest.",
            negative: "I'm sorry, splitting shared items onto separate bills is too complex for our system.",
            question: "Which credit card should I put the shared appetizers on?"
          },
          {
            id: "sb-6",
            prompt: "Is it possible to pay for the wine bottle separately while splitting the food bills?",
            positive: "Definitely, I will create a separate bill for the wine and split the food evenly.",
            negative: "Unfortunately, we cannot separate individual beverage items from the main food bill.",
            question: "Who will be taking care of the separate wine bill tonight?"
          },
          {
            id: "sb-7",
            prompt: "Do you accept international credit cards for separate payments?",
            positive: "Yes, we accept all major international cards, including Visa, Mastercard, and Amex.",
            negative: "No, our card terminal is currently restricted to local debit and credit cards.",
            question: "Would you prefer to pay in local currency to avoid extra transaction fees?"
          },
          {
            id: "sb-8",
            prompt: "Can we split the bill five ways, with each person paying exactly twenty dollars?",
            positive: "Certainly, I will charge twenty dollars to each of the five cards.",
            negative: "I'm afraid that doesn't cover the total bill, which includes a service charge.",
            question: "Would you like me to add a standard fifteen percent gratuity to each share?"
          },
          {
            id: "sb-9",
            prompt: "Could you bring us the separate bills at the very end of our meal, or do you need to know now?",
            positive: "No rush at all, I can easily sort and split the bill whenever you are ready.",
            negative: "It would be highly appreciated if we could settle the split arrangements right now.",
            question: "Would you like me to start tracking your individual orders from this point onward?"
          },
          {
            id: "sb-10",
            prompt: "Is there a service fee or extra charge for splitting the bill multiple ways?",
            positive: "No, we do not charge any additional fees for splitting the check.",
            negative: "Yes, there is a small administrative surcharge for splits of more than four cards.",
            question: "Would you prefer to make a single payment to avoid the splitting surcharge?"
          }
        ]
      },
      {
        id: "ordering-recommendations",
        name: "Ordering & Recommendations",
        description: "How to ask for chef recommendations, food substitutions, or portion sizes",
        dialogues: [
          {
            id: "or-1",
            prompt: "What would you recommend as a signature dish for someone trying your restaurant for the first time?",
            positive: "I highly recommend our slow-roasted lamb shank; it's a customer favorite.",
            negative: "We don't have a single signature dish, as our menu changes every week.",
            question: "Are you in the mood for something hearty like meat, or would you prefer seafood?"
          },
          {
            id: "or-2",
            prompt: "Is the spicy tuna tartare mild enough for someone who doesn't eat much chili?",
            positive: "Yes, it has just a touch of spice that is very subtle and easy to handle.",
            negative: "No, it features a fiery sriracha dressing and is actually quite hot.",
            question: "Would you like the chef to put the spicy sauce on the side for you?"
          },
          {
            id: "or-3",
            prompt: "Which wine would pair best with the pan-seared sea bass?",
            positive: "Our chilled Sauvignon Blanc pairs beautifully with the delicate flavors of the bass.",
            negative: "We don't carry any white wines that match well with that fish right now.",
            question: "Do you generally prefer dry white wines or something a bit sweeter?"
          },
          {
            id: "or-4",
            prompt: "Could you tell me if the ribeye steak is large enough for two people to share?",
            positive: "Yes, it's a generous twenty-ounce cut that is perfect for sharing.",
            negative: "No, it is a single-serving portion and might not satisfy two hungry guests.",
            question: "Would you like us to slice it in the kitchen and serve it on two separate plates?"
          },
          {
            id: "or-5",
            prompt: "Are your ingredients sourced locally, or do you import most of them?",
            positive: "Yes, we partner with local organic farms for all our seasonal vegetables and meats.",
            negative: "No, we import the majority of our specialty ingredients directly from Italy.",
            question: "Would you like to hear about our featured local specials for this evening?"
          },
          {
            id: "or-6",
            prompt: "Can we order a half-portion of the truffle pasta as an appetizer?",
            positive: "Certainly, we can prepare a smaller starter portion of that pasta for you.",
            negative: "I'm sorry, our kitchen only prepares standard full-size pasta entrees.",
            question: "Would you prefer to share a full portion among the table instead?"
          },
          {
            id: "or-7",
            prompt: "What is the soup of the day, and does it contain any dairy?",
            positive: "Today we have a roasted tomato basil soup, and it is completely dairy-free.",
            negative: "It's a creamy potato leek soup, which contains heavy cream and butter.",
            question: "Would you like to try our clear vegetable broth as a dairy-free alternative?"
          },
          {
            id: "or-8",
            prompt: "How is the duck breast prepared, and is it served medium-rare?",
            positive: "It is pan-seared to medium-rare with a crispy skin and a cherry glaze.",
            negative: "It is slow-braised for hours, so it is served fully tender and well-done.",
            question: "Would you prefer the chef to cook the duck to a different level of doneness?"
          },
          {
            id: "or-9",
            prompt: "Are there any vegetarian options that are particularly hearty and filling?",
            positive: "Our wild mushroom risotto is exceptionally rich, creamy, and satisfying.",
            negative: "Our vegetarian selections are mostly light side salads and simple soups.",
            question: "Would you like to add grilled tofu or avocado to make your meal more filling?"
          },
          {
            id: "or-10",
            prompt: "Is it possible to replace the french fries with a side salad?",
            positive: "Absolutely, you can substitute the fries with a fresh house salad at no extra cost.",
            negative: "I'm afraid all our entrees come with pre-determined sides that cannot be swapped.",
            question: "Would you prefer a mixed green salad or a traditional Caesar salad as your side?"
          }
        ]
      }
    ]
  }
];
