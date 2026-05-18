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
  },
  {
    id: "travel-airport",
    name: "Travel & Airport",
    description: "Check-in, security, flight delays, gate information",
    subcategories: [
      {
        id: "check-in",
        name: "Check-in",
        description: "Flight registration process",
        dialogues: [
          {
            id: "ta-ci-1",
            prompt: "Could I change my seat to an exit row for some extra legroom?",
            positive: "Certainly, we have one exit row seat left on this flight, and I've assigned it to you.",
            negative: "I'm sorry, all the exit row seats are completely booked on today's flight.",
            question: "Would you prefer an aisle or a window seat in the exit row if one opens up?"
          },
          {
            id: "ta-ci-2",
            prompt: "Is it possible to check this bag all the way through to my final destination?",
            positive: "Yes, since your flights are under a single booking, your bags will go directly to your destination.",
            negative: "Unfortunately, you will need to collect your baggage and re-check it during your layover.",
            question: "Would you like me to print your baggage tags showing the full itinerary?"
          },
          {
            id: "ta-ci-3",
            prompt: "Can I bring this small backpack as my personal item in addition to my carry-on?",
            positive: "Yes, that fits our size guidelines and can be placed under the seat in front of you.",
            negative: "I'm afraid that bag is too large to qualify as a personal item and must be checked.",
            question: "Does your backpack contain any fragile items or laptops that you'd like to take out?"
          },
          {
            id: "ta-ci-4",
            prompt: "Could you print my boarding pass for the connecting flight as well?",
            positive: "Absolutely, here are the boarding passes for both legs of your journey.",
            negative: "I'm sorry, I can only print the ticket for your first leg; you'll get the second one at the transit desk.",
            question: "Would you prefer to have digital boarding passes sent directly to your phone?"
          },
          {
            id: "ta-ci-5",
            prompt: "Is my flight currently on schedule or has it been delayed?",
            positive: "Your flight is right on time and scheduled to depart from gate A4.",
            negative: "Unfortunately, your flight is delayed by forty minutes due to late incoming aircraft.",
            question: "Would you like me to check if there are any gate updates for your flight?"
          }
        ]
      },
      {
        id: "security",
        name: "Security",
        description: "Going through security screening",
        dialogues: [
          {
            id: "ta-sec-1",
            prompt: "Do I need to take my laptop and tablet out of my bag for the scanner?",
            positive: "Yes, please place all large electronic devices in a separate tray.",
            negative: "No, our modern scanners allow you to keep electronics inside your bag.",
            question: "Are there any external hard drives or cameras inside your bag as well?"
          },
          {
            id: "ta-sec-2",
            prompt: "Should I remove my light jacket and belt before walking through the metal detector?",
            positive: "Yes, please take off your jacket, belt, and any heavy jewelry and place them in the bin.",
            negative: "No, a light jacket is perfectly fine, but please remove your belt.",
            question: "Do you have any metal items or coins remaining in your pockets?"
          },
          {
            id: "ta-sec-3",
            prompt: "Am I allowed to bring this sealed bottle of water through the security checkpoint?",
            positive: "Yes, since you purchased it after the main ticketing area, it is allowed.",
            negative: "No, unfortunately, all liquids over one hundred milliliters must be discarded here.",
            question: "Would you like to drink it now or throw it in the bin?"
          },
          {
            id: "ta-sec-4",
            prompt: "Could you tell me why my carry-on bag has been flagged for manual inspection?",
            positive: "Certainly, we just need to verify the liquids container size inside your bag.",
            negative: "I cannot disclose details, but our officers will inspect the bag immediately.",
            question: "Do you have any sharp objects, sprays, or tools inside this bag?"
          },
          {
            id: "ta-sec-5",
            prompt: "Do I need to take off my shoes, or is that only for international flights?",
            positive: "Yes, everyone must remove their shoes and place them directly on the conveyor belt.",
            negative: "No, you can keep your shoes on unless the metal detector alarm goes off.",
            question: "Are you carrying any liquids or gels in your footwear or socks?"
          }
        ]
      },
      {
        id: "flight-delays",
        name: "Flight Delays",
        description: "Asking about delayed flights",
        dialogues: [
          {
            id: "ta-fd-1",
            prompt: "Will I still be able to make my connection in Chicago with this one-hour delay?",
            positive: "Yes, you have a three-hour layover, so you will still have plenty of time.",
            negative: "I'm afraid it will be very tight, and you might miss your connecting flight.",
            question: "Would you like me to check if we can book you on a later connection just in case?"
          },
          {
            id: "ta-fd-2",
            prompt: "Is the airline offering any meal vouchers or accommodation due to this overnight delay?",
            positive: "Yes, we will provide you with a hotel room voucher and a twenty-dollar dinner coupon.",
            negative: "No, because the delay is due to severe weather, the airline is not liable for hotels.",
            question: "Would you like me to print out the list of nearby hotels with discounted rates?"
          },
          {
            id: "ta-fd-3",
            prompt: "Could you rebook me on the next available flight to London if this one is canceled?",
            positive: "Absolutely, I've secured you a seat on our partner airline's flight leaving in two hours.",
            negative: "Unfortunately, all flights to London are fully booked for the rest of the day.",
            question: "Would you be open to a flight with a short layover in Paris instead?"
          },
          {
            id: "ta-fd-4",
            prompt: "How long is the boarding expected to be delayed due to the incoming aircraft?",
            positive: "The incoming plane has just landed, so boarding will begin in about twenty minutes.",
            negative: "I'm sorry, we don't have an exact boarding time yet as the plane is still undergoing maintenance.",
            question: "Would you like me to send an SMS alert to your phone once boarding begins?"
          },
          {
            id: "ta-fd-5",
            prompt: "Can I get a refund if I decide not to travel because of this massive delay?",
            positive: "Yes, since the delay exceeds five hours, you are entitled to a full refund to your original card.",
            negative: "No, your ticket is strictly non-refundable, but we can issue a travel voucher for future use.",
            question: "Would you prefer to rebook for tomorrow morning at no additional charge?"
          }
        ]
      },
      {
        id: "gate-info",
        name: "Gate Information",
        description: "Finding your departure gate",
        dialogues: [
          {
            id: "ta-gi-1",
            prompt: "Could you double-check if the departure gate for flight UA123 has changed?",
            positive: "Yes, the gate has changed from B12 to C24; please head there immediately.",
            negative: "No, the gate is still B12 as originally printed on your boarding pass.",
            question: "Would you like me to point you in the direction of the C gates?"
          },
          {
            id: "ta-gi-2",
            prompt: "Is boarding starting soon, or should I wait in the lounge a bit longer?",
            positive: "Boarding is starting right now; you should proceed to the gate immediately.",
            negative: "You have about forty minutes before boarding, so feel free to stay in the lounge.",
            question: "Which zone number is printed on your boarding pass?"
          },
          {
            id: "ta-gi-3",
            prompt: "Where can I find the nearest lounge or quiet area near Gate B12?",
            positive: "There is a premium lounge directly opposite gate B14, just a short walk away.",
            negative: "Unfortunately, there are no quiet lounges in terminal B; they are all located in terminal A.",
            question: "Do you have a lounge pass, or would you like to buy a one-day entry ticket?"
          },
          {
            id: "ta-gi-4",
            prompt: "Is it possible to upgrade my ticket to business class here at the gate?",
            positive: "Yes, we have two business class seats left, and I can process the upgrade for you.",
            negative: "I'm sorry, business class is fully booked on this flight, so no upgrades are possible.",
            question: "Would you like to pay for the upgrade using your frequent flyer miles?"
          },
          {
            id: "ta-gi-5",
            prompt: "How far is the international terminal from this domestic gate?",
            positive: "It is about a ten-minute ride on the terminal shuttle train.",
            negative: "It's quite far and requires walking for at least twenty-five minutes.",
            question: "Do you need a map of the airport terminals to find the shuttle station?"
          }
        ]
      }
    ]
  },
  {
    id: "shopping-prices",
    name: "Shopping & Prices",
    description: "Store conversations: sizes, prices, returns, discounts & promos",
    subcategories: [
      {
        id: "sizes",
        name: "Sizes",
        description: "Asking about clothing sizes",
        dialogues: [
          {
            id: "sp-sz-1",
            prompt: "Do you happen to have this woolen sweater in a medium size?",
            positive: "Yes, we have a few medium sweaters left in stock; I will fetch one for you.",
            negative: "I'm sorry, we are completely sold out of medium sizes for this sweater.",
            question: "Would you like to try the small size, as this design is quite oversized?"
          },
          {
            id: "sp-sz-2",
            prompt: "Does this jacket run true to size, or should I size up?",
            positive: "It runs exactly true to size, so your usual size should fit perfectly.",
            negative: "It actually runs quite small, so I would highly recommend sizing up.",
            question: "Would you like to take both a medium and a large to the fitting room?"
          },
          {
            id: "sp-sz-3",
            prompt: "Is there a larger size available in the changing rooms right now?",
            positive: "Yes, our assistant will bring a larger size to your changing room immediately.",
            negative: "Unfortunately, the size you currently have is the largest one we carry.",
            question: "Would you like to try a different style that has a looser fit?"
          },
          {
            id: "sp-sz-4",
            prompt: "Can you check if your other store has this dress in a size small?",
            positive: "Yes, our downtown branch has two of these dresses in size small.",
            negative: "I'm afraid this item is completely sold out across all our local branches.",
            question: "Would you like me to reserve the dress at our downtown branch for you to collect tomorrow?"
          },
          {
            id: "sp-sz-5",
            prompt: "Is this pair of jeans stretchable, or is it rigid denim?",
            positive: "Yes, it contains two percent elastane, making it very comfortable and stretchy.",
            negative: "No, this is a classic hundred percent cotton rigid denim with no stretch.",
            question: "Do you prefer a high-waisted fit or a mid-rise cut in jeans?"
          }
        ]
      },
      {
        id: "prices",
        name: "Prices",
        description: "Clarifying product prices",
        dialogues: [
          {
            id: "sp-pr-1",
            prompt: "Is there any discount on this coat, or is it full price?",
            positive: "Yes, this coat is currently thirty percent off as part of our seasonal sale.",
            negative: "Unfortunately, this item is from our new arrivals and is not discounted.",
            question: "Would you like to sign up for our store membership to get a ten percent discount?"
          },
          {
            id: "sp-pr-2",
            prompt: "Could you tell me if this item is included in the buy-one-get-one-free promo?",
            positive: "Yes, all items on this specific rack are part of the buy-one-get-one promotion.",
            negative: "No, that promotion only applies to selected shoes and accessories.",
            question: "Would you like me to show you where the promotional footwear is located?"
          },
          {
            id: "sp-pr-3",
            prompt: "Why does the price tag on the shelf differ from what rang up at the register?",
            positive: "I apologize, the shelf tag was out of date; I will adjust the price to match it.",
            negative: "The tag on the shelf is for a different product model; the register price is correct.",
            question: "Would you still like to purchase this item at the registered price?"
          },
          {
            id: "sp-pr-4",
            prompt: "Do you offer tax-free shopping forms for international tourists?",
            positive: "Yes, we can prepare the tax-free forms for you right now.",
            negative: "I'm sorry, our store is not registered for the tax-free program.",
            question: "Could I please see your passport to fill out the tax refund form?"
          },
          {
            id: "sp-pr-5",
            prompt: "Is it possible to price-match this item with your online store?",
            positive: "Certainly, we will gladly match the lower price advertised on our official website.",
            negative: "I'm afraid our retail stores operate independently and do not match online prices.",
            question: "Would you prefer to order it online and select free in-store collection?"
          }
        ]
      },
      {
        id: "returns",
        name: "Returns",
        description: "Return and exchange policies",
        dialogues: [
          {
            id: "sp-ret-1",
            prompt: "Can I return this pair of boots if I don't have the original receipt?",
            positive: "Yes, as long as the boots are unworn, we can offer an exchange or store credit.",
            negative: "I'm sorry, we cannot accept any returns or exchanges without a valid receipt.",
            question: "Did you purchase this item using our customer loyalty account?"
          },
          {
            id: "sp-ret-2",
            prompt: "Is it possible to get a full refund to my card, or only store credit?",
            positive: "Since you are within our thirty-day return window, we can issue a full refund to your card.",
            negative: "Because the return window has passed, we can only offer you store credit.",
            question: "Would you like me to process the refund to your original payment card?"
          },
          {
            id: "sp-ret-3",
            prompt: "How many days do I have to exchange this item if it doesn't fit?",
            positive: "You have exactly thirty days from the purchase date to make an exchange.",
            negative: "All clothing items must be exchanged within fourteen days of purchase.",
            question: "Are the original tags and labels still attached to the item?"
          },
          {
            id: "sp-ret-4",
            prompt: "Can I return an item that was purchased on final sale or clearance?",
            positive: "Yes, clearance items can be returned for store credit within seven days.",
            negative: "Unfortunately, all items marked as final sale or clearance are non-returnable.",
            question: "Is there a fault with the item, or is it just a change of mind?"
          },
          {
            id: "sp-ret-5",
            prompt: "Would you mind checking if I can return this online order at your physical store?",
            positive: "Absolutely, you can bring any online purchase to our physical store for a direct refund.",
            negative: "No, all online purchases must be shipped back to our central warehouse for returns.",
            question: "Do you have the online order confirmation email showing the order number?"
          }
        ]
      },
      {
        id: "discounts-promo",
        name: "Discounts & Promo",
        description: "How to clarify discount and promo details",
        dialogues: [
          {
            id: "sp-dp-1",
            prompt: "Could you tell me if there is a student discount available for this software subscription?",
            positive: "Yes, we offer a twenty percent discount for active students with a valid student ID card.",
            negative: "Unfortunately, we do not offer any student discounts on our digital products.",
            question: "Would you like me to check if there are any seasonal promo codes instead?"
          },
          {
            id: "sp-dp-2",
            prompt: "Is this buy-one-get-one-half-price offer applicable to items of different brands?",
            positive: "Yes, you can mix and match any two brands featured on this table.",
            negative: "No, the half-price deal only applies if both items are from the exact same brand.",
            question: "Would you like to see which brands are currently included in the offer?"
          },
          {
            id: "sp-dp-3",
            prompt: "Do you have a coupon code or promotional flyer that I can use for this transaction?",
            positive: "Yes, here is a ten percent off coupon from our latest weekly flyer.",
            negative: "No, unfortunately, we don't have any active coupons or flyers at the moment.",
            question: "Did you sign up for our email newsletter, which has a welcome coupon?"
          },
          {
            id: "sp-dp-4",
            prompt: "Can I combine this promotional voucher with the items that are already on sale?",
            positive: "Yes, you can stack the voucher on top of the existing clearance discounts.",
            negative: "I'm afraid promotional vouchers cannot be used on items that are already discounted.",
            question: "Would you prefer to use the voucher on a full-priced item instead?"
          },
          {
            id: "sp-dp-5",
            prompt: "Is there any special offer if I purchase three of these shirts instead of just one?",
            positive: "Yes, if you buy three shirts, you get the third one completely free.",
            negative: "No, the price remains identical regardless of the quantity purchased.",
            question: "Would you like to choose a third shirt to take advantage of the bundle discount?"
          }
        ]
      }
    ]
  },
  {
    id: "hotel-accommodation",
    name: "Hotel & Accommodation",
    description: "Check-in/out, room requests, complaints, services & amenities",
    subcategories: [
      {
        id: "checkin-out",
        name: "Check-in/out",
        description: "Hotel arrival and departure",
        dialogues: [
          {
            id: "ha-co-1",
            prompt: "Is it possible to request an early check-in as our flight landed at 7 AM?",
            positive: "Yes, your room is already prepared, and we can check you in right away.",
            negative: "Unfortunately, our checkout time is 11 AM, so no rooms are available yet.",
            question: "Would you like us to store your bags while you grab some breakfast?"
          },
          {
            id: "ha-co-2",
            prompt: "Could we arrange for a late check-out at 2 PM instead of 11 AM?",
            positive: "Certainly, we can extend your checkout to 2 PM free of charge.",
            negative: "I'm sorry, we are fully booked tonight and need the room for incoming guests.",
            question: "Would you like to pay a small fee to extend your checkout until 5 PM?"
          },
          {
            id: "ha-co-3",
            prompt: "Do you have a secure room where we can store our luggage until our evening departure?",
            positive: "Yes, we have a luggage room right next to the reception desk; here are your bag tags.",
            negative: "No, we don't have a dedicated storage room, but you can leave them in the lobby corner.",
            question: "At what time do you plan to collect your bags tonight?"
          },
          {
            id: "ha-co-4",
            prompt: "Can I pay the security deposit using a debit card instead of a credit card?",
            positive: "Yes, a debit card is perfectly fine, but the refund may take up to five business days.",
            negative: "Unfortunately, our policy strictly requires a credit card for the security hold.",
            question: "Do you have a credit card under the same name as the booking?"
          },
          {
            id: "ha-co-5",
            prompt: "Could you provide me with the Wi-Fi password and breakfast hours?",
            positive: "Of course, Wi-Fi is free and the password is 'guest2026'; breakfast is served from 7 to 10 AM.",
            negative: "I'm sorry, our system is currently down; I will write the info on a card for you.",
            question: "Would you like me to book a breakfast slot for you to avoid the busy times?"
          }
        ]
      },
      {
        id: "room-requests",
        name: "Room Requests",
        description: "Towel changes, extra amenities",
        dialogues: [
          {
            id: "ha-rr-1",
            prompt: "Could we have some extra towels and a couple of pillows sent up to room 405?",
            positive: "Certainly, housekeeping will deliver them to your room in a few minutes.",
            negative: "I'm sorry, we are currently out of extra pillows due to high occupancy.",
            question: "Would you like regular pillows or do you prefer our memory foam options?"
          },
          {
            id: "ha-rr-2",
            prompt: "Is it possible to switch to a room with a king-size bed instead of twin beds?",
            positive: "Yes, we have a king room available on the second floor and can move you now.",
            negative: "Unfortunately, all our king-size rooms are fully occupied for the weekend.",
            question: "Would you mind waiting until tomorrow afternoon to change your room?"
          },
          {
            id: "ha-rr-3",
            prompt: "Can we request a room on a higher floor away from the elevator noise?",
            positive: "Absolutely, I've relocated you to a quiet room on the top floor.",
            negative: "I'm afraid all our quiet rooms on higher floors are already taken.",
            question: "Would you prefer a room at the end of the corridor on the third floor?"
          },
          {
            id: "ha-rr-4",
            prompt: "Could you send a complimentary bottle of water and some coffee pods to our room?",
            positive: "Of course, I will have those sent up to you immediately.",
            negative: "Unfortunately, we only provide coffee pods upon check-in; extras carry a fee.",
            question: "Would you like decaf or regular coffee pods sent up?"
          },
          {
            id: "ha-rr-5",
            prompt: "Is there a way to get a room with a balcony facing the ocean?",
            positive: "Yes, we can upgrade you to an oceanfront room for a small nightly surcharge.",
            negative: "I'm sorry, all our ocean-facing rooms are completely sold out.",
            question: "Would a partial ocean view room suit your preferences?"
          }
        ]
      },
      {
        id: "complaints",
        name: "Complaints",
        description: "AC/Wi-Fi issues and room problems",
        dialogues: [
          {
            id: "ha-comp-1",
            prompt: "The air conditioning in our room is making a loud noise and not cooling properly.",
            positive: "I apologize for the inconvenience; our maintenance technician will head up immediately.",
            negative: "I'm sorry, our maintenance team is off-duty until tomorrow morning.",
            question: "Would you prefer to switch to another room with fully functioning AC right now?"
          },
          {
            id: "ha-comp-2",
            prompt: "The Wi-Fi signal in room 302 is extremely weak and keeps disconnecting.",
            positive: "I will restart our corridor router right away to boost your signal.",
            negative: "Unfortunately, that corner room has historically had poor signal coverage.",
            question: "Would you like me to give you a voucher for our high-speed premium Wi-Fi?"
          },
          {
            id: "ha-comp-3",
            prompt: "There is no hot water in our shower, and the pressure is very low.",
            positive: "I am very sorry; I will send our plumber to investigate the pipes immediately.",
            negative: "We are currently experiencing a boiler issue affecting the entire west wing.",
            question: "Would you like to use the shower facilities in our spa area in the meantime?"
          },
          {
            id: "ha-comp-4",
            prompt: "Our room hasn't been cleaned yet today, even though we had the sign out.",
            positive: "I apologize; I will instruct our housekeeping supervisor to clean your room right now.",
            negative: "Housekeeping service ended at 4 PM, so we can only offer fresh towels tonight.",
            question: "Would you like us to clean the room while you are out for dinner?"
          },
          {
            id: "ha-comp-5",
            prompt: "The guests in the next room are having a loud party; could you ask them to quiet down?",
            positive: "Absolutely, I will send our night security officer to deal with the noise immediately.",
            negative: "I'm sorry, we cannot interfere with other guests' rooms unless it's past midnight.",
            question: "Would you like me to move you to a quieter room on another floor?"
          }
        ]
      },
      {
        id: "amenities-services",
        name: "Amenities & Services",
        description: "Inquiring about breakfast, pool, or gym",
        dialogues: [
          {
            id: "ha-as-1",
            prompt: "Could you tell me if access to the rooftop pool and fitness center is included in our room rate?",
            positive: "Yes, both the pool and the gym are fully free of charge for all hotel guests.",
            negative: "No, rooftop pool access requires a separate resort fee of fifteen dollars per day.",
            question: "Would you like me to add pool and gym passes to your room key card?"
          },
          {
            id: "ha-as-2",
            prompt: "Is there a complimentary shuttle bus that goes directly from the hotel to the city center?",
            positive: "Yes, our shuttle departs every hour from the lobby entrance directly to the center.",
            negative: "Unfortunately, we do not offer shuttle service, but we can call a taxi for you.",
            question: "Would you like a copy of our daily shuttle timetable and route map?"
          },
          {
            id: "ha-as-3",
            prompt: "Could we book a slot for the couple's massage at the spa for tomorrow afternoon?",
            positive: "Certainly, I have booked a couple's massage slot for you at three PM tomorrow.",
            negative: "I'm sorry, the spa is fully booked for all massage slots tomorrow afternoon.",
            question: "Would you prefer an evening slot at seven PM, or something on Sunday morning?"
          },
          {
            id: "ha-as-4",
            prompt: "Is room service available twenty-four hours a day, or does the kitchen close at night?",
            positive: "Yes, our room service menu is available twenty-four hours a day for your convenience.",
            negative: "Our kitchen closes at eleven PM, but we have a selection of cold wraps overnight.",
            question: "Would you like me to place a breakfast room service order for tomorrow morning?"
          },
          {
            id: "ha-as-5",
            prompt: "Does the hotel offer laundry or dry-cleaning services for guests staying multiple nights?",
            positive: "Yes, we offer express laundry service with same-day return if submitted before nine AM.",
            negative: "Unfortunately, we do not have laundry service on-site, but there is a laundromat nearby.",
            question: "Would you like me to send a laundry bag and price list up to your room?"
          }
        ]
      }
    ]
  },
  {
    id: "directions-transport",
    name: "Directions & Transport",
    description: "Asking for directions, public transport, taxi, car rentals",
    subcategories: [
      {
        id: "asking-directions",
        name: "Asking Directions",
        description: "How to ask for directions",
        dialogues: [
          {
            id: "dt-ad-1",
            prompt: "Excuse me, could you tell me the best way to get to the national museum from here?",
            positive: "Certainly, the easiest way is to walk straight down this avenue and turn left at the lights.",
            negative: "I'm sorry, I'm not from around here and don't know the way to the museum.",
            question: "Would you like me to show you the route on a physical tourist map?"
          },
          {
            id: "dt-ad-2",
            prompt: "Is the central train station within walking distance, or should I take a bus?",
            positive: "It's only a five-minute walk, so walking is definitely your best option.",
            negative: "It's quite far from here; walking would take at least forty-five minutes.",
            question: "Would you like to know which bus line goes directly to the station?"
          },
          {
            id: "dt-ad-3",
            prompt: "Which way should I go to find the nearest subway station?",
            positive: "Walk straight ahead for two blocks, and you'll see the subway entrance on your right.",
            negative: "Subway stations are closed in this area; you must use the tram instead.",
            question: "Are you looking for a specific metro line, or just any subway station?"
          },
          {
            id: "dt-ad-4",
            prompt: "Am I heading in the right direction for the historic cathedral?",
            positive: "Yes, just keep walking straight and you will see its spires in a few minutes.",
            negative: "No, you are actually walking in the opposite direction; you need to turn back.",
            question: "Would you like to use my phone GPS to verify the cathedral's location?"
          },
          {
            id: "dt-ad-5",
            prompt: "Could you point me towards the main shopping street?",
            positive: "Sure, it is just around the corner behind that tall modern building.",
            negative: "I'm afraid there are no shopping streets nearby; the malls are outside the city.",
            question: "Are you looking for boutique shops or large department stores?"
          }
        ]
      },
      {
        id: "public-transport",
        name: "Public Transport",
        description: "Metro/bus tickets and routes",
        dialogues: [
          {
            id: "dt-pt-1",
            prompt: "Where can I purchase a 3-day travel card for the metro and buses?",
            positive: "You can buy it at any ticket machine inside the metro station or at the tourist office.",
            negative: "Unfortunately, 3-day travel cards are currently out of stock at all kiosks.",
            question: "Would you like to buy a standard single ticket for this trip instead?"
          },
          {
            id: "dt-pt-2",
            prompt: "Which line should I take to get to the international airport?",
            positive: "You should take the blue line directly to the terminal; it takes twenty minutes.",
            negative: "No train lines go to the airport; you must take a dedicated express bus.",
            question: "Are you traveling with a lot of heavy luggage today?"
          },
          {
            id: "dt-pt-3",
            prompt: "How often do the trains run on this line during the weekend?",
            positive: "They are very frequent, running every five minutes throughout the day.",
            negative: "During the weekend, trains only run once every thirty minutes on this line.",
            question: "Would you like me to print out the full weekend train schedule for you?"
          },
          {
            id: "dt-pt-4",
            prompt: "Do I need to tap my transport card both when entering and exiting the station?",
            positive: "Yes, tapping on entry and exit ensures you are charged the correct fare.",
            negative: "No, you only need to tap when entering the station; the gates open automatically on exit.",
            question: "Is your transport card pre-loaded with sufficient credit?"
          },
          {
            id: "dt-pt-5",
            prompt: "Is this bus heading directly to the city center, or does it make transfers?",
            positive: "Yes, this bus goes straight to the city center without any transfers.",
            negative: "No, you will need to transfer to the subway at the third stop.",
            question: "Would you like me to tell you when we reach the transfer station?"
          }
        ]
      },
      {
        id: "taxi",
        name: "Taxi",
        description: "Calling a taxi and trip costs",
        dialogues: [
          {
            id: "dt-tx-1",
            prompt: "Could you call a taxi for me to take me to the conference hall?",
            positive: "Certainly, I have called a cab and it will arrive at the entrance in five minutes.",
            negative: "I'm sorry, because of the heavy rain, all taxi services are fully booked right now.",
            question: "Would you prefer me to book a premium ride-share vehicle for you instead?"
          },
          {
            id: "dt-tx-2",
            prompt: "How much is the approximate fare from here to the airport?",
            positive: "It is generally a flat rate of forty-five dollars, including tolls.",
            negative: "Fares vary wildly depending on traffic; there is no fixed rate.",
            question: "Would you like me to ask the driver for a price quote before you get in?"
          },
          {
            id: "dt-tx-3",
            prompt: "Do you accept credit cards, or do I need to pay the fare in cash?",
            positive: "Yes, my taxi is equipped with a card terminal that accepts all major cards.",
            negative: "No, unfortunately, my terminal is broken today, so I can only accept cash.",
            question: "Would you like to stop at an ATM along the way to withdraw cash?"
          },
          {
            id: "dt-tx-4",
            prompt: "Could you pull over near the subway entrance, please?",
            positive: "Sure thing, I will pull over safely just past the subway signs.",
            negative: "I can't stop there due to strict bus lane restrictions; I'll drop you off at the corner.",
            question: "Would you like me to help you with your bags from the trunk?"
          },
          {
            id: "dt-tx-5",
            prompt: "Is there an extra surcharge for luggage or airport drop-off?",
            positive: "Yes, there is a standard three-dollar surcharge for airport trips.",
            negative: "No, there are no hidden fees or extra charges for baggage.",
            question: "How many bags do you need to place in the trunk today?"
          }
        ]
      },
      {
        id: "car-rental",
        name: "Car Rental",
        description: "Renting a vehicle and selecting insurance",
        dialogues: [
          {
            id: "dt-cr-1",
            prompt: "What is the daily rate for renting a compact economy car with unlimited mileage?",
            positive: "Our current rate for an economy car is thirty-five dollars per day, including unlimited miles.",
            negative: "Unfortunately, we have no economy cars available today; only SUVs are in stock.",
            question: "Would you like to add comprehensive collision damage insurance to your rental?"
          },
          {
            id: "dt-cr-2",
            prompt: "Do I need to return the rental car with a full tank of gas, or can I pay for fuel later?",
            positive: "Yes, please return it with a full tank to avoid our refueling service charge.",
            negative: "No, you have pre-paid for the fuel, so you can return it empty.",
            question: "Would you prefer to pre-purchase a full tank at our discounted fuel rate now?"
          },
          {
            id: "dt-cr-3",
            prompt: "Is my domestic driver's license sufficient, or do you require an international driving permit?",
            positive: "Your domestic license is perfectly sufficient as it is printed in English.",
            negative: "I'm afraid we strictly require an international permit alongside your domestic license.",
            question: "Could you tell me which country issued your driver's license?"
          },
          {
            id: "dt-cr-4",
            prompt: "Can I add an additional driver to the rental agreement, and is there an extra fee?",
            positive: "Yes, you can add another driver for a small fee of five dollars per day.",
            negative: "No, only the primary renter is legally authorized to drive the vehicle.",
            question: "Could you provide the driver's license of the second driver for registration?"
          },
          {
            id: "dt-cr-5",
            prompt: "What should I do if the rental vehicle breaks down or gets a flat tire on the highway?",
            positive: "Please call our twenty-four-hour roadside assistance number printed on the key fob.",
            negative: "You will need to arrange for a local towing service and pay them directly.",
            question: "Would you like me to verify if your insurance covers roadside assistance?"
          }
        ]
      }
    ]
  },
  {
    id: "health-pharmacy",
    name: "Health & Pharmacy",
    description: "Describing symptoms, buying medicine, doctor visits, first aid",
    subcategories: [
      {
        id: "symptoms",
        name: "Symptoms",
        description: "Describing headache or cold symptoms",
        dialogues: [
          {
            id: "hp-sy-1",
            prompt: "I've had a severe headache and a dry cough since yesterday morning.",
            positive: "That sounds like a classic seasonal bug; you should get plenty of rest.",
            negative: "A dry cough is not typical for a standard headache; you should see a doctor.",
            question: "Have you developed a fever or any body aches as well?"
          },
          {
            id: "hp-sy-2",
            prompt: "I feel quite dizzy and my stomach has been upset all day.",
            positive: "You might be suffering from mild dehydration or food poisoning; drink some water.",
            negative: "Dizziness and stomach upset are highly unusual symptoms together.",
            question: "Would you like me to call our hotel's on-call doctor for you?"
          },
          {
            id: "hp-sy-3",
            prompt: "I think I sprained my ankle; it's swollen and I can't put weight on it.",
            positive: "Oh dear, please sit down and I will get some ice to reduce the swelling.",
            negative: "If it's not painful, it's probably just a minor strain; keep walking.",
            question: "Would you like me to accompany you to the nearest urgent care clinic?"
          },
          {
            id: "hp-sy-4",
            prompt: "My throat is extremely sore and it hurts whenever I swallow.",
            positive: "You should try gargling with warm salt water and drinking hot herbal tea.",
            negative: "That doesn't sound serious; you don't need any medicine for throat pain.",
            question: "Do you have a sore throat often, or did this start suddenly?"
          },
          {
            id: "hp-sy-5",
            prompt: "I have a high fever and feel completely exhausted; could it be the flu?",
            positive: "Yes, those are classic symptoms of the flu; please stay warm and rest.",
            negative: "No, a high fever is rarely associated with the seasonal flu.",
            question: "How many days have you been experiencing this high temperature?"
          }
        ]
      },
      {
        id: "pharmacy",
        name: "Pharmacy",
        description: "Buying medicine without prescription",
        dialogues: [
          {
            id: "hp-ph-1",
            prompt: "Do you have anything over-the-counter for a blocked nose and sinus pressure?",
            positive: "Yes, this nasal spray is highly effective for reducing sinus congestion quickly.",
            negative: "I'm sorry, we don't have any decongestants available without a prescription.",
            question: "Would you prefer a non-drowsy tablet or a fast-acting spray?"
          },
          {
            id: "hp-ph-2",
            prompt: "Can I buy this allergy medication without a prescription from a doctor?",
            positive: "Yes, this specific brand is fully approved for over-the-counter sales.",
            negative: "No, this medication is very strong and strictly requires a doctor's prescription.",
            question: "Would you like to try our generic over-the-counter antihistamine instead?"
          },
          {
            id: "hp-ph-3",
            prompt: "How many times a day should I take these pain relievers?",
            positive: "You should take one tablet every four to six hours as needed, with food.",
            negative: "There are no dosing instructions; you can take as many as you want.",
            question: "Are you taking any other medications that might interact with this?"
          },
          {
            id: "hp-ph-4",
            prompt: "Are there any side effects, like drowsiness, associated with these pills?",
            positive: "Yes, they can cause significant drowsiness, so please avoid driving.",
            negative: "No, these are completely natural and have zero known side effects.",
            question: "Would you prefer a non-drowsy alternative to take during the daytime?"
          },
          {
            id: "hp-ph-5",
            prompt: "Do you have a milder cough syrup suitable for young children?",
            positive: "Yes, we have a pediatric herbal honey syrup that is very gentle and safe.",
            negative: "No, all our cough medicines are formulated exclusively for adults.",
            question: "How old is your child so I can verify the correct dosage?"
          }
        ]
      },
      {
        id: "doctor-appointment",
        name: "Doctor's Appointment",
        description: "Booking a visit and confirming coverage",
        dialogues: [
          {
            id: "hp-da-1",
            prompt: "Could I schedule an appointment with a general practitioner for tomorrow morning?",
            positive: "Yes, I have scheduled an appointment for you at nine-thirty tomorrow morning.",
            negative: "I'm sorry, our doctor is fully booked tomorrow; the earliest slot is on Thursday.",
            question: "Would you prefer to see a male or a female doctor for your consultation?"
          },
          {
            id: "hp-da-2",
            prompt: "Does your medical clinic accept international travel insurance for direct billing?",
            positive: "Yes, we partner with major international insurers for direct cashless billing.",
            negative: "No, you will need to pay upfront and claim the reimbursement from your insurer.",
            question: "Could you show me your insurance card so I can verify the coverage details?"
          },
          {
            id: "hp-da-3",
            prompt: "Is it possible to consult with a doctor online via video call instead of visiting the clinic?",
            positive: "Yes, we can arrange a virtual tele-health consultation within the next hour.",
            negative: "Unfortunately, a physical examination is required for your specific symptoms.",
            question: "Would you like me to send you the link to download our telehealth application?"
          },
          {
            id: "hp-da-4",
            prompt: "Could you tell me how much a standard consultation fee is without any insurance?",
            positive: "A standard consultation with a general practitioner is eighty dollars flat.",
            negative: "Consultation fees vary depending on the tests needed; we cannot give a flat rate.",
            question: "Would you like to pay by credit card or cash at the reception desk?"
          },
          {
            id: "hp-da-5",
            prompt: "Do I need to bring my medical records or previous prescriptions to the appointment?",
            positive: "Yes, please bring any relevant records and your current medications with you.",
            negative: "No, that is not necessary; our doctor will conduct a fresh evaluation.",
            question: "Have you ever visited our medical clinic before?"
          }
        ]
      },
      {
        id: "first-aid",
        name: "First Aid",
        description: "Requesting urgent care or medical kits",
        dialogues: [
          {
            id: "hp-fa-1",
            prompt: "Excuse me, where is the nearest first-aid kit or medical room in this shopping mall?",
            positive: "The first-aid room is on the ground floor, right next to the security office.",
            negative: "We do not have a dedicated first-aid kit available for public use here.",
            question: "Do you need me to call the mall's paramedic team to assist you immediately?"
          },
          {
            id: "hp-fa-2",
            prompt: "My friend cut her hand on some glass; do you have any antiseptic wipes and bandages?",
            positive: "Yes, here is a sterile bandage and some antiseptic wipes from our first-aid box.",
            negative: "No, unfortunately, we are out of bandages and wipes in our office kit today.",
            question: "Is the cut bleeding heavily, or is it a relatively minor scratch?"
          },
          {
            id: "hp-fa-3",
            prompt: "Could you help me clean and dress this burn on my arm, or should I go to urgent care?",
            positive: "I can apply a soothing burn gel and wrap it in a sterile gauze for you right now.",
            negative: "I'm not trained in first aid; I highly recommend visiting the urgent care clinic down the street.",
            question: "Did the burn occur from hot liquid or a direct chemical contact?"
          },
          {
            id: "hp-fa-4",
            prompt: "Is there a first-aid officer on duty at the hotel who can check this allergic reaction?",
            positive: "Yes, our duty manager is certified in advanced first aid and will come up to your room.",
            negative: "No, we don't have a first-aid officer, but we can direct you to the nearest pharmacy.",
            question: "Are you experiencing any difficulty breathing or swelling around your throat?"
          },
          {
            id: "hp-fa-5",
            prompt: "Do you have any instant cold packs to put on a bruised wrist?",
            positive: "Yes, I will crack an instant ice pack and bring it to you right away.",
            negative: "No, we don't have any cold packs, but I can fetch some ice cubes in a plastic bag.",
            question: "Can you move your fingers easily, or does it cause severe pain?"
          }
        ]
      }
    ]
  },
  {
    id: "socializing-smalltalk",
    name: "Socializing & Small Talk",
    description: "Conversation starters, small talk, plans & invites, hobbies",
    subcategories: [
      {
        id: "conversation-starters",
        name: "Conversation Starters",
        description: "Polite phrases to begin talking",
        dialogues: [
          {
            id: "ss-cs-1",
            prompt: "Excuse me, is anyone sitting here, or is this chair free?",
            positive: "No, go right ahead, the chair is completely free.",
            negative: "Actually, my colleague is using that chair; he will be back shortly.",
            question: "Would you like me to help you carry it over to your table?"
          },
          {
            id: "ss-cs-2",
            prompt: "That's a lovely watch you have; mind if I ask where you got it?",
            positive: "Thank you! It was actually a gift from my grandfather.",
            negative: "I'd prefer not to say, as it's a very personal item.",
            question: "Are you a collector of vintage watches yourself?"
          },
          {
            id: "ss-cs-3",
            prompt: "Hi there, have you attended this conference before, or is it your first time?",
            positive: "It's my first time here, and I must say the sessions are fascinating.",
            negative: "No, I've attended this conference every single year since it started.",
            question: "Which of today's presentations are you looking forward to the most?"
          },
          {
            id: "ss-cs-4",
            prompt: "What a spectacular view from this balcony! Isn't it wonderful?",
            positive: "It really is! The skyline looks stunning as the sun goes down.",
            negative: "Honestly, the height makes me a bit dizzy, so I don't enjoy it.",
            question: "Would you like to take a photo together with the city in the background?"
          },
          {
            id: "ss-cs-5",
            prompt: "It's getting quite crowded in here, isn't it?",
            positive: "Yes, it really is; it's almost impossible to move around.",
            negative: "No, I think this is a very comfortable crowd size for the lobby.",
            question: "Would you like to step outside on the terrace for some fresh air?"
          }
        ]
      },
      {
        id: "small-talk",
        name: "Small Talk",
        description: "Weather, hobbies, and work topics",
        dialogues: [
          {
            id: "ss-st-1",
            prompt: "The weather has been absolutely gorgeous this week, hasn't it?",
            positive: "Yes, it's been so sunny and warm, perfect for outdoor walks.",
            negative: "Actually, I think it's been way too hot and humid for this time of year.",
            question: "Do you have any plans to enjoy the sunshine over the weekend?"
          },
          {
            id: "ss-st-2",
            prompt: "What do you like to do in your free time when you're not working?",
            positive: "I'm a big fan of hiking and playing acoustic guitar in the evenings.",
            negative: "I don't have much free time at all, so I mostly just sleep.",
            question: "Do you prefer outdoor sports or creative hobbies inside?"
          },
          {
            id: "ss-st-3",
            prompt: "Are you planning to go anywhere nice for your summer holiday this year?",
            positive: "Yes, we are planning a two-week road trip along the coast of Spain.",
            negative: "No, I have too much work and will be staying home this summer.",
            question: "Have you ever visited the Spanish coast before?"
          },
          {
            id: "ss-st-4",
            prompt: "How long have you been working in the tech industry?",
            positive: "I've been in tech for about seven years now, mostly in software design.",
            negative: "Actually, I just joined the industry last month, so I'm very new.",
            question: "What major changes have you noticed in the tech scene recently?"
          },
          {
            id: "ss-st-5",
            prompt: "Have you tried any of the local restaurants around the hotel?",
            positive: "Yes, the Italian bistro down the street serves the most amazing pasta.",
            negative: "No, I've been eating all my meals in the hotel dining room.",
            question: "What kind of food are you in the mood for tonight?"
          }
        ]
      },
      {
        id: "invitations-plans",
        name: "Plans & Invites",
        description: "Suggesting coffee, accepting or refusing",
        dialogues: [
          {
            id: "ss-ip-1",
            prompt: "Would you be interested in grabbing a cup of coffee tomorrow afternoon to catch up?",
            positive: "I'd love to! Tomorrow afternoon works perfectly for me; let's meet at Starbucks.",
            negative: "I'd really like to, but I'm completely booked with work meetings all day tomorrow.",
            question: "Would you prefer to meet at three PM, or is four PM better for your schedule?"
          },
          {
            id: "ss-ip-2",
            prompt: "We are having a small dinner party at our place on Saturday; would you like to join us?",
            positive: "That sounds wonderful! Thank you so much for the invitation; I'd love to come.",
            negative: "Thank you for inviting me, but I've already made plans to visit my parents this weekend.",
            question: "Can I bring anything along with me, like a dessert or a bottle of wine?"
          },
          {
            id: "ss-ip-3",
            prompt: "Would you mind if we rescheduled our weekend hike to next Sunday instead?",
            positive: "Not at all, next Sunday actually suits me much better anyway.",
            negative: "I'm afraid next Sunday doesn't work for me as I'll be traveling out of town.",
            question: "Is the weather forecast looking bad for this coming weekend?"
          },
          {
            id: "ss-ip-4",
            prompt: "Are you free to join us for a drink after work this Friday evening?",
            positive: "Absolutely, a Friday night drink sounds like the perfect way to start the weekend.",
            negative: "Unfortunately, I have to pick up my kids early this Friday and can't make it.",
            question: "Where are you planning to go for drinks after we wrap up at the office?"
          },
          {
            id: "ss-ip-5",
            prompt: "Would you like to come with me to the modern art exhibition at the museum this Saturday?",
            positive: "That sounds highly intriguing! I've been meaning to check out that exhibition.",
            negative: "Thanks, but modern art isn't really my cup of tea; I think I'll pass this time.",
            question: "Do we need to purchase the entry tickets online in advance?"
          }
        ]
      },
      {
        id: "hobbies-interests",
        name: "Hobbies & Interests",
        description: "Sharing passions, books, and movies",
        dialogues: [
          {
            id: "ss-hi-1",
            prompt: "What kind of books do you enjoy reading when you have some quiet time?",
            positive: "I'm absolutely obsessed with historical fiction and biographical novels.",
            negative: "Honestly, I rarely read books; I prefer listening to podcasts instead.",
            question: "Have you read any good mystery novels recently that you would recommend?"
          },
          {
            id: "ss-hi-2",
            prompt: "Do you play any musical instruments, or have you ever taken lessons?",
            positive: "Yes, I've been playing the acoustic guitar for about five years now.",
            negative: "No, unfortunately, I'm completely unmusical and have never played an instrument.",
            question: "Would you be interested in learning how to play the piano or the violin?"
          },
          {
            id: "ss-hi-3",
            prompt: "Are you into outdoor activities like hiking and camping, or do you prefer staying indoors?",
            positive: "I absolutely love hiking! I try to go camping in the mountains every summer.",
            negative: "I am definitely an indoor person; I prefer cozy cafes and museum visits.",
            question: "Have you ever hiked the trails in the national park near the border?"
          },
          {
            id: "ss-hi-4",
            prompt: "How often do you go to the cinema, or do you prefer streaming movies at home?",
            positive: "I love the cinema experience and try to go at least once a month for new releases.",
            negative: "I almost never go to the theater; streaming on my couch is much more comfortable.",
            question: "What was the last movie you watched that made a really strong impression on you?"
          },
          {
            id: "ss-hi-5",
            prompt: "Do you enjoy cooking new recipes, or do you prefer dining out and ordering in?",
            positive: "I find cooking extremely therapeutic and love experimenting with Asian cuisine.",
            negative: "I absolutely detest washing dishes, so I order takeout almost every single night.",
            question: "Would you like to try making homemade fresh pasta together sometime?"
          }
        ]
      }
    ]
  },
  {
    id: "bank-money",
    name: "At the Bank & Money",
    description: "Cash withdrawal, currency exchange, card issues, opening accounts",
    subcategories: [
      {
        id: "cash-withdrawal",
        name: "Cash Withdrawal",
        description: "Getting cash from ATM/bank",
        dialogues: [
          {
            id: "bm-cw-1",
            prompt: "I'd like to withdraw five hundred dollars from my savings account, please.",
            positive: "Certainly, please insert your card and enter your PIN on the pad.",
            negative: "I'm afraid your account has insufficient funds to complete this withdrawal.",
            question: "Would you like me to check your current savings account balance first?"
          },
          {
            id: "bm-cw-2",
            prompt: "Is there a daily limit on cash withdrawals at the ATM outside?",
            positive: "Yes, the daily withdrawal limit at our external ATMs is one thousand dollars.",
            negative: "No, you can withdraw as much cash as your account balance allows.",
            question: "Do you need to withdraw a larger amount inside the branch today?"
          },
          {
            id: "bm-cw-3",
            prompt: "Could you give me the cash in fifty-dollar bills instead of hundreds?",
            positive: "Of course, I will count out ten fifty-dollar bills for you.",
            negative: "I'm sorry, we are currently out of fifty-dollar bills at this teller desk.",
            question: "Would you mind if I gave you twenty-dollar bills instead?"
          },
          {
            id: "bm-cw-4",
            prompt: "Are there any fees for withdrawing cash using an international card?",
            positive: "Yes, international cards carry a standard transaction fee of five dollars.",
            negative: "No, our bank does not charge any fees for international card withdrawals.",
            question: "Would you like me to explain our currency conversion options?"
          },
          {
            id: "bm-cw-5",
            prompt: "Why did the ATM decline my cash withdrawal transaction just now?",
            positive: "It looks like your home bank has blocked the card for security reasons.",
            negative: "Our ATM system is down, which is why your card was declined.",
            question: "Did you enter the correct four-digit PIN code at the machine?"
          }
        ]
      },
      {
        id: "currency-exchange",
        name: "Currency Exchange",
        description: "Exchanging money",
        dialogues: [
          {
            id: "bm-ce-1",
            prompt: "What is the current exchange rate for euros to US dollars today?",
            positive: "Today's exchange rate is one point zero eight dollars for one euro.",
            negative: "Our exchange rates are changing rapidly, and I cannot give an exact quote.",
            question: "How many euros would you like to convert into dollars today?"
          },
          {
            id: "bm-ce-2",
            prompt: "Is there a commission fee for exchanging these British pounds?",
            positive: "Yes, we charge a flat one percent commission fee on all cash exchanges.",
            negative: "No, we offer completely commission-free currency exchange today.",
            question: "Would you like me to calculate the final payout after fees?"
          },
          {
            id: "bm-ce-3",
            prompt: "Could I exchange these bills for smaller denominations or coins?",
            positive: "Certainly, I can break this hundred-dollar bill into smaller changes.",
            negative: "I'm sorry, I don't have enough small bills or coins in my drawer right now.",
            question: "Would you prefer to get five-dollar bills or ten-dollar bills?"
          },
          {
            id: "bm-ce-4",
            prompt: "Do you accept older versions of the hundred-dollar bill for exchange?",
            positive: "Yes, we accept all valid older bills as long as they are not damaged.",
            negative: "No, we can only accept modern hundred-dollar bills with security strips.",
            question: "Would you mind if I inspected the serial number on your bill?"
          },
          {
            id: "bm-ce-5",
            prompt: "Do I need to show my passport to complete this currency exchange?",
            positive: "Yes, we strictly require a valid physical passport for all currency transactions.",
            negative: "No, for amounts under one thousand dollars, a simple ID card is sufficient.",
            question: "Do you have a digital copy of your passport on your phone?"
          }
        ]
      },
      {
        id: "card-issues",
        name: "Card Issues",
        description: "Blocked card and transaction problems",
        dialogues: [
          {
            id: "bm-ci-1",
            prompt: "My credit card has been blocked, and I can't make any online payments.",
            positive: "I will verify your details and unblock the card for you right now.",
            negative: "I'm sorry, your card has been permanently blocked due to suspicious activity.",
            question: "Have you recently tried using the card in a foreign country?"
          },
          {
            id: "bm-ci-2",
            prompt: "I think the ATM outside has swallowed my card; what should I do?",
            positive: "Don't worry, I will lock the swallowed card and order a new one for you.",
            negative: "I cannot access the ATM machine to retrieve your card today.",
            question: "Did the ATM screen show an error message before swallowing your card?"
          },
          {
            id: "bm-ci-3",
            prompt: "I noticed a suspicious charge on my bank statement that I didn't authorize.",
            positive: "Let's file a dispute claim and block your card to prevent further charges.",
            negative: "That transaction looks fully valid, so we cannot dispute it.",
            question: "Do you recognize the name of the merchant listed on this charge?"
          },
          {
            id: "bm-ci-4",
            prompt: "Could you tell me how long it takes to issue a replacement debit card?",
            positive: "It takes about three to five business days to deliver the new card to your home.",
            negative: "Card production is delayed; it will take at least three weeks to arrive.",
            question: "Would you like me to issue a temporary virtual card to your phone?"
          },
          {
            id: "bm-ci-5",
            prompt: "How can I activate my new card for international travel transactions?",
            positive: "You can easily enable international travel in our mobile banking app under card settings.",
            negative: "International transactions are disabled on this basic card model.",
            question: "Which countries do you plan to visit during your trip?"
          }
        ]
      },
      {
        id: "opening-account",
        name: "Opening an Account",
        description: "Applying for debit/savings accounts",
        dialogues: [
          {
            id: "bm-oa-1",
            prompt: "I'd like to open a checking and a savings account; what documents do I need to provide?",
            positive: "We can open both accounts for you today; I just need your passport and proof of address.",
            negative: "I'm sorry, because you are on a tourist visa, you cannot open a bank account here.",
            question: "Would you like to link a contactless debit card to your new checking account?"
          },
          {
            id: "bm-oa-2",
            prompt: "Is there a minimum initial deposit required to open a premium savings account?",
            positive: "Yes, our premium savings account requires an initial deposit of five hundred dollars.",
            negative: "No, there is absolutely no minimum deposit required to open an account with us.",
            question: "Would you like to transfer the initial deposit from your international card?"
          },
          {
            id: "bm-oa-3",
            prompt: "Does this student checking account carry any monthly maintenance fees?",
            positive: "No, our student accounts are completely free of monthly maintenance charges.",
            negative: "Yes, there is a small fee of three dollars per month unless you maintain a minimum balance.",
            question: "Are you currently enrolled in a full-time university program?"
          },
          {
            id: "bm-oa-4",
            prompt: "How long does it take for my new account to become fully active for transfers?",
            positive: "Your account is active immediately, and you can start transferring funds right away.",
            negative: "It will take up to twenty-four hours for our security team to verify and activate the account.",
            question: "Would you like to set up online banking access on your phone now?"
          },
          {
            id: "bm-oa-5",
            prompt: "Can I open a joint bank account with my spouse, and does she need to be present?",
            positive: "Yes, you can open a joint account, but both of you must be physically present to sign.",
            negative: "Unfortunately, our branch does not support joint accounts; we only offer individual ones.",
            question: "Would you like to schedule an appointment for both of you later this week?"
          }
        ]
      }
    ]
  },
  {
    id: "work-office",
    name: "Work & Office",
    description: "Meetings, requests, deadlines, interviews & pitching",
    subcategories: [
      {
        id: "meetings",
        name: "Meetings",
        description: "Scheduling and arranging meetings",
        dialogues: [
          {
            id: "wo-mt-1",
            prompt: "Could we reschedule our weekly team meeting to Thursday afternoon?",
            positive: "Sure, I will update the calendar invite and send it out to everyone.",
            negative: "Unfortunately, Thursday afternoon is packed with client reviews.",
            question: "Would Friday morning at 10 AM work for your schedule instead?"
          },
          {
            id: "wo-mt-2",
            prompt: "Is everyone available for a brief sync-up at 10 AM tomorrow?",
            positive: "Yes, the team is fully available, and I've booked the slot.",
            negative: "No, several developers have an urgent deployment at that time.",
            question: "Could we push the sync-up to 2 PM instead?"
          },
          {
            id: "wo-mt-3",
            prompt: "Should I book a conference room for the client presentation, or is it online?",
            positive: "Please book the large conference room; the client will be visiting in person.",
            negative: "No need, the presentation will be fully remote via Microsoft Teams.",
            question: "Do you need me to set up the projector and audio system in the room?"
          },
          {
            id: "wo-mt-4",
            prompt: "Could you send over the agenda before the meeting starts?",
            positive: "Certainly, I will email the detailed meeting agenda in a few minutes.",
            negative: "I haven't prepared the agenda yet; we will brainstorm during the call.",
            question: "Is there any specific topic you would like me to add to the agenda?"
          },
          {
            id: "wo-mt-5",
            prompt: "Would you mind if we recorded this session for team members who are absent?",
            positive: "Not at all, recording the session is a great idea for documentation.",
            negative: "Actually, because we are discussing confidential HR matters, please do not record.",
            question: "Should I upload the recording to our shared folder once it's processed?"
          }
        ]
      },
      {
        id: "requests",
        name: "Requests",
        description: "Polite requests for help or files",
        dialogues: [
          {
            id: "wo-rq-1",
            prompt: "Would you be able to help me proofread this proposal before I submit it?",
            positive: "Absolutely, I will review it and send you my feedback by lunchtime.",
            negative: "I'm swamped with coding tasks today and won't have time to look at it.",
            question: "When is the absolute deadline for submitting this proposal?"
          },
          {
            id: "wo-rq-2",
            prompt: "Could you grant me access to the shared project folder on Google Drive?",
            positive: "Of course, I've just updated the permissions; check your email for the link.",
            negative: "I'm sorry, only the project manager can authorize access to that folder.",
            question: "Do you need editing permissions or just read-only access?"
          },
          {
            id: "wo-rq-3",
            prompt: "Is it okay if I borrow your adapter for the presentation this morning?",
            positive: "Sure, it's right here on my desk; just bring it back when you're done.",
            negative: "Unfortunately, I'm using it to run my second monitor right now.",
            question: "Do you need the HDMI-to-USB-C adapter, or the standard VGA one?"
          },
          {
            id: "wo-rq-4",
            prompt: "Could you explain how to set up the printer for wireless printing?",
            positive: "Definitely, it's very simple; just connect to our office Wi-Fi and add the device.",
            negative: "I'm not sure how to do it; our IT support team handles all printer issues.",
            question: "Are you trying to print from a Mac or a Windows laptop?"
          },
          {
            id: "wo-rq-5",
            prompt: "Would you mind taking over this client call while I finish the report?",
            positive: "No problem at all, I am familiar with their project and can handle the call.",
            negative: "I'm sorry, I have a conflicting meeting starting in exactly five minutes.",
            question: "Is there any specific update I should deliver to the client?"
          }
        ]
      },
      {
        id: "deadlines",
        name: "Deadlines",
        description: "Clarifying project deadlines and schedules",
        dialogues: [
          {
            id: "wo-dl-1",
            prompt: "Is there any flexibility with the deadline for the marketing campaign?",
            positive: "Yes, we can push the launch date back by three days to polish the copy.",
            negative: "Unfortunately, no; the ad space is pre-booked, so we must deliver on time.",
            question: "Are you experiencing any major bottlenecks with the campaign designs?"
          },
          {
            id: "wo-dl-2",
            prompt: "When do you need the final draft of the budget proposal?",
            positive: "Please submit the final draft by Friday afternoon at the latest.",
            negative: "We actually need it immediately; please stop other tasks and finish it.",
            question: "Would you like me to review your initial numbers before you draft the final version?"
          },
          {
            id: "wo-dl-3",
            prompt: "I'm running a bit behind on the project; can I get a two-day extension?",
            positive: "Don't worry, a two-day extension is perfectly fine; just keep me updated.",
            negative: "I'm afraid a delay will disrupt the entire development timeline.",
            question: "Which specific features are causing the delay on your end?"
          },
          {
            id: "wo-dl-4",
            prompt: "Could you clarify which tasks are the highest priority for this week's sprint?",
            positive: "Certainly, fixing the payment gateway bugs is our absolute top priority.",
            negative: "All sprint tasks carry equal priority and must be completed together.",
            question: "Do you have any questions about the user stories in our Jira board?"
          },
          {
            id: "wo-dl-5",
            prompt: "Will we be able to deliver the software release on schedule by Friday?",
            positive: "Yes, all key features are tested and ready for deployment on Friday.",
            negative: "No, we have too many unresolved critical bugs to deploy this week.",
            question: "Would you recommend a partial release containing only the stable updates?"
          }
        ]
      },
      {
        id: "interviews-pitching",
        name: "Interviews & Pitching",
        description: "Describing qualifications and salary",
        dialogues: [
          {
            id: "wo-ip-1",
            prompt: "Could you tell me why you think you are the most qualified candidate for this senior role?",
            positive: "I have over eight years of experience leading software teams and a proven track record of successful launches.",
            negative: "Honestly, I might not be the most qualified, but I am very willing to learn quickly.",
            question: "Would you like me to walk you through some specific projects I managed in my previous job?"
          },
          {
            id: "wo-ip-2",
            prompt: "What are your salary expectations for this software developer position?",
            positive: "Based on my experience and market research, I am looking for around ninety thousand dollars annually.",
            negative: "I don't have any specific expectations; I am open to whatever offer you make.",
            question: "Is there a standard salary range allocated for this role within your company?"
          },
          {
            id: "wo-ip-3",
            prompt: "How do you handle tight deadlines and high-pressure situations in your work?",
            positive: "I prioritize tasks using the Eisenhower matrix and communicate early with stakeholders to manage expectations.",
            negative: "I usually get quite stressed and work overtime until the task is somehow finished.",
            question: "Could you share an example of a high-pressure project that you successfully delivered?"
          },
          {
            id: "wo-ip-4",
            prompt: "Are you willing to relocate or travel frequently for client meetings if required?",
            positive: "Yes, I am fully open to relocation and enjoy traveling to meet clients in person.",
            negative: "Unfortunately, due to family commitments, I am strictly looking for a remote or local role.",
            question: "How often do you estimate travel would be required for this position?"
          },
          {
            id: "wo-ip-5",
            prompt: "What is your biggest professional weakness, and how are you working to improve it?",
            positive: "I sometimes struggle with public speaking, so I have joined a local Toastmasters club to practice.",
            negative: "I don't really have any weaknesses; I am extremely good at everything I do.",
            question: "Would you like to know how I managed to overcome a recent challenge in my team?"
          }
        ]
      }
    ]
  },
  {
    id: "emergency-situations",
    name: "Emergency Situations",
    description: "Calling for help, reporting theft, emergency services, lost & found",
    subcategories: [
      {
        id: "calling-help",
        name: "Calling for Help",
        description: "How to call for urgent assistance",
        dialogues: [
          {
            id: "em-ch-1",
            prompt: "Help! There's been a bad accident and someone is seriously hurt!",
            positive: "Oh my god! I will call an ambulance and look for a first-aid kit immediately.",
            negative: "I don't see any accident; please stop shouting.",
            question: "Where exactly did the accident occur so I can direct the emergency services?"
          },
          {
            id: "em-ch-2",
            prompt: "Fire! The kitchen downstairs is filling up with thick black smoke!",
            positive: "Quickly! Everyone pull the fire alarm and head towards the nearest emergency exit!",
            negative: "It's just some burnt toast; there's no need to panic.",
            question: "Has anyone called the fire department yet?"
          },
          {
            id: "em-ch-3",
            prompt: "Watch out! That loose sign is about to fall down onto the pavement!",
            positive: "Watch out! Thank you, I almost walked right under it!",
            negative: "The sign is perfectly secure; you are worrying over nothing.",
            question: "Should we block off this section of the street to keep pedestrians safe?"
          },
          {
            id: "em-ch-4",
            prompt: "Could you help me? I've lost my young daughter in this crowded market!",
            positive: "Stay calm, please describe what she is wearing and we will search the market.",
            negative: "I'm sorry, I'm in a rush and cannot help you look for anyone.",
            question: "Could we go to the market security office to make an announcement?"
          },
          {
            id: "em-ch-5",
            prompt: "Help! That man just collapsed on the floor and isn't breathing!",
            positive: "I will start CPR immediately; please run and find an automated defibrillator!",
            negative: "He is probably just resting; let's leave him alone.",
            question: "Does anyone here have professional medical or first-aid training?"
          }
        ]
      },
      {
        id: "reporting-theft",
        name: "Reporting Theft",
        description: "Reporting stolen passport or bags",
        dialogues: [
          {
            id: "em-rt-1",
            prompt: "Someone has stolen my backpack containing my passport and wallet!",
            positive: "Oh no! Let's go to the tourist police office immediately to file a report.",
            negative: "You probably just misplaced it somewhere; check your hotel room again.",
            question: "Do you have digital copies of your passport stored online?"
          },
          {
            id: "em-rt-2",
            prompt: "My hotel room was broken into, and my laptop is missing!",
            positive: "This is terrible; I will contact the hotel manager and call the police right now.",
            negative: "The hotel is not responsible for any personal items left in rooms.",
            question: "Was your laptop locked inside the room's security safe?"
          },
          {
            id: "em-rt-3",
            prompt: "I've just been pickpocketed on the subway; they took my phone!",
            positive: "Let's block your SIM card and track the device using your account immediately.",
            negative: "Pickpocketing is common on this line; there's nothing we can do.",
            question: "Do you remember seeing anyone standing suspicious or close to you?"
          },
          {
            id: "em-rt-4",
            prompt: "Where is the nearest police station so I can file a theft report?",
            positive: "The central police station is just three blocks away next to the post office.",
            negative: "There are no police stations in this district; you must file it online.",
            question: "Would you like me to walk with you to the police station?"
          },
          {
            id: "em-rt-5",
            prompt: "Could you block my credit cards? They were stolen from my bag.",
            positive: "Yes, I will call our bank's emergency line to block your cards immediately.",
            negative: "No, only the cardholder can call the bank to freeze transactions.",
            question: "Which bank issued the credit cards that were stolen?"
          }
        ]
      },
      {
        id: "emergency-services",
        name: "Emergency Services",
        description: "Calling police or medical dispatch",
        dialogues: [
          {
            id: "em-es-1",
            prompt: "Please call an ambulance immediately; this is a medical emergency!",
            positive: "I've dialed the emergency services; they say an ambulance is on its way.",
            negative: "Please call them yourself; I don't have credit on my phone.",
            question: "Is the patient conscious and able to speak?"
          },
          {
            id: "em-es-2",
            prompt: "We need the fire department right away; the building next door is on fire!",
            positive: "I've just spoken to the dispatcher; the fire engines are coming now.",
            negative: "It's just a small grill in the garden; there's no danger of fire.",
            question: "Are there any people trapped inside the burning building?"
          },
          {
            id: "em-es-3",
            prompt: "I need to report a break-in that occurred at my apartment while I was out.",
            positive: "I am sending a police patrol unit to your address to take your statement.",
            negative: "We don't send police for old incidents; please visit the station tomorrow.",
            question: "Do you think the intruder is still inside the apartment?"
          },
          {
            id: "em-es-4",
            prompt: "Could you connect me to the police department dispatcher, please?",
            positive: "Certainly, transferring your call to the emergency dispatcher right now.",
            negative: "I cannot transfer calls; you must hang up and dial nine-one-one.",
            question: "What is the nature of the incident you want to report?"
          },
          {
            id: "em-es-5",
            prompt: "Is there a doctor or first-aid kit available in this building?",
            positive: "Yes, we have a fully equipped medical station on the ground floor next to the reception.",
            negative: "No, we don't have any medical supplies or doctors on-site.",
            question: "Do you need me to call an emergency doctor to the building?"
          }
        ]
      },
      {
        id: "lost-found",
        name: "Lost & Found",
        description: "Inquiring about lost items or luggage",
        dialogues: [
          {
            id: "em-lf-1",
            prompt: "Excuse me, I've left my black leather wallet on the seat of the train; has anyone turned it in?",
            positive: "Yes, a passenger handed in a black leather wallet about thirty minutes ago; let's verify.",
            negative: "I'm sorry, no wallets matching that description have been reported to our lost and found office.",
            question: "Could you tell me what specific cards or documents were inside the wallet?"
          },
          {
            id: "em-lf-2",
            prompt: "Where should I go to report lost luggage that didn't arrive on the baggage carousel?",
            positive: "Please head to the baggage service desk located right next to carousel number four.",
            negative: "There is no physical desk; you must file a lost baggage claim on our website.",
            question: "Do you have your baggage claim tags and the boarding pass with you?"
          },
          {
            id: "em-lf-3",
            prompt: "I think I dropped my house keys near the reception desk; could you check if they are there?",
            positive: "Yes, our receptionist found a set of keys on the counter earlier; here they are.",
            negative: "No, we have searched the entire reception area and found no keys today.",
            question: "Did your keychain have a specific tag or a colorful ring attached to it?"
          },
          {
            id: "em-lf-4",
            prompt: "Is there a lost and found department at the museum where I can check for my lost camera?",
            positive: "Yes, the lost and found office is located near the main entrance cloakroom.",
            negative: "No, we don't have a dedicated department; found items are handed to security.",
            question: "When exactly did you notice that your camera was missing during your visit?"
          },
          {
            id: "em-lf-5",
            prompt: "Can I leave my contact details in case my stolen backpack is recovered by police?",
            positive: "Certainly, please fill out this form with your name, phone number, and email address.",
            negative: "Unfortunately, we do not keep records of lost items once they are sent to the central station.",
            question: "Would you like me to give you the phone number of the central police lost property office?"
          }
        ]
      }
    ]
  }
];
