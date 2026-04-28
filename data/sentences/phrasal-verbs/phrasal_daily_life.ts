// ============================================================
// PHRASAL VERBS — Daily Life
// Structure: 6 subcategories × 10 phrasal verbs
// Game: show phrasal verb → pick correct meaning from 5 options
// ============================================================

import { PhrasalVerb, Subcategory } from './types';

export const DAILY_LIFE: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. MORNING ROUTINE
  // ─────────────────────────────────────────
  {
    id: 'morning_routine',
    name: 'Morning Routine',
    verbs: [
      {
        basic: 'wake up',
        advanced: 'to stop sleeping and become conscious',
        wrong: [
          'to get out of bed after your alarm goes off',
          'to feel fully alert and ready to start the day',
          'to open your eyes after a long deep sleep',
          'to rise earlier than your usual time',
        ],
      },
      {
        basic: 'get up',
        advanced: 'to physically rise from bed and start your day',
        wrong: [
          'to feel motivated at the start of the morning',
          'to prepare yourself mentally for a busy day',
          'to wake up without an alarm clock',
          'to leave your bedroom before others in the house',
        ],
      },
      {
        basic: 'rush around',
        advanced: 'to move quickly in many directions because you are late',
        wrong: [
          'to feel anxious during a hectic morning',
          'to forget something important before leaving home',
          'to do several things at once to save time',
          'to leave the house without having breakfast',
        ],
      },
      {
        basic: 'get ready',
        advanced: 'to prepare yourself before going somewhere',
        wrong: [
          'to pack your bag for the day ahead',
          'to choose your outfit the night before',
          'to shower and dress before leaving home',
          'to plan your schedule for the morning',
        ],
      },
      {
        basic: 'set off',
        advanced: 'to begin a journey or leave a place',
        wrong: [
          'to prepare everything before leaving home',
          'to start your morning routine early',
          'to decide which route to take to work',
          'to leave slightly earlier than usual',
        ],
      },
      {
        basic: 'grab something',
        advanced: 'to take something quickly because you are in a hurry',
        wrong: [
          'to buy a quick breakfast on the way to work',
          'to eat without sitting down properly',
          'to take something without asking first',
          'to pick up the first thing you see',
        ],
      },
      {
        basic: 'skip breakfast',
        advanced: 'to miss your morning meal and go without eating',
        wrong: [
          'to eat a smaller meal than usual in the morning',
          'to delay eating until later in the day',
          'to decide not to eat because you are not hungry',
          'to choose a lighter option for your morning meal',
        ],
      },
      {
        basic: 'turn off',
        advanced: 'to stop a device or alarm from making noise',
        wrong: [
          'to silence your phone before a meeting',
          'to put your alarm on snooze for a few minutes',
          'to disconnect a device to save battery',
          'to switch a device to a different mode',
        ],
      },
      {
        basic: 'run late',
        advanced: 'to be behind schedule and at risk of being late',
        wrong: [
          'to move quickly so you do not miss something',
          'to arrive slightly after the agreed time',
          'to underestimate how long something will take',
          'to leave home later than you had planned',
        ],
      },
      {
        basic: 'check in on',
        advanced: 'to quickly look at something to see how it is going',
        wrong: [
          'to confirm your attendance at an event',
          'to look at your phone first thing in the morning',
          'to review your calendar before starting work',
          'to see if someone is awake before disturbing them',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. MONEY
  // ─────────────────────────────────────────
  {
    id: 'money',
    name: 'Money',
    verbs: [
      {
        basic: 'save up',
        advanced: 'to gradually accumulate money for a specific purpose',
        wrong: [
          'to spend less money than you usually do',
          'to put money aside without a specific goal',
          'to avoid wasting money on unnecessary things',
          'to keep money in a savings account at a bank',
        ],
      },
      {
        basic: 'splash out',
        advanced: 'to spend a lot of money on something special',
        wrong: [
          'to buy something you cannot really afford',
          'to treat yourself to something you rarely buy',
          'to overspend your budget on a shopping trip',
          'to buy an expensive item without thinking it through',
        ],
      },
      {
        basic: 'cut back on',
        advanced: 'to reduce the amount you spend on something',
        wrong: [
          'to stop buying something completely',
          'to find a cheaper version of something you buy',
          'to compare prices before making a purchase',
          'to cancel a subscription to save money',
        ],
      },
      {
        basic: 'run out of',
        advanced: 'to have nothing left of something you need',
        wrong: [
          'to spend all your money in one go',
          'to reach the end of your monthly budget',
          'to realise you have less money than you thought',
          'to withdraw more cash than you intended',
        ],
      },
      {
        basic: 'pay off',
        advanced: 'to finish paying a debt completely',
        wrong: [
          'to make a large payment towards what you owe',
          'to pay for something in instalments over time',
          'to settle a bill before the due date',
          'to transfer money to a creditor',
        ],
      },
      {
        basic: 'put aside',
        advanced: 'to save a portion of money regularly for future use',
        wrong: [
          'to hide money somewhere safe at home',
          'to refuse to spend money on something',
          'to delay a purchase until you have saved enough',
          'to open a new account to separate your savings',
        ],
      },
      {
        basic: 'chip in',
        advanced: 'to contribute money as part of a group',
        wrong: [
          'to lend money to a friend who needs help',
          'to pay more than your fair share of a bill',
          'to offer to pay for the whole group',
          'to suggest splitting a bill equally',
        ],
      },
      {
        basic: 'go over budget',
        advanced: 'to spend more money than you had planned',
        wrong: [
          'to check how much you have spent so far',
          'to realise you need to adjust your budget',
          'to exceed the limit set by someone else',
          'to spend money on something unplanned',
        ],
      },
      {
        basic: 'rip off',
        advanced: 'to charge someone too much money unfairly',
        wrong: [
          'to sell a product at a very high profit',
          'to convince someone to buy something they do not need',
          'to advertise a product at a false discounted price',
          'to sell a fake product as though it is genuine',
        ],
      },
      {
        basic: 'fork out',
        advanced: 'to pay a large amount of money reluctantly',
        wrong: [
          'to spend money on something you find too expensive',
          'to pay for something that was not in your budget',
          'to pay in cash instead of using a card',
          'to pay someone back money you owe them',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. TRAVEL
  // ─────────────────────────────────────────
  {
    id: 'travel',
    name: 'Travel',
    verbs: [
      {
        basic: 'set off',
        advanced: 'to begin a trip or journey',
        wrong: [
          'to pack your bags and prepare to leave',
          'to arrive at the airport ahead of schedule',
          'to leave earlier than planned to avoid traffic',
          'to confirm your travel plans before departing',
        ],
      },
      {
        basic: 'check in',
        advanced: 'to register your arrival at a hotel or airport',
        wrong: [
          'to confirm your flight booking online',
          'to arrive at your destination on time',
          'to pay for your accommodation upon arrival',
          'to present your passport at border control',
        ],
      },
      {
        basic: 'check out',
        advanced: 'to officially leave a hotel after your stay',
        wrong: [
          'to explore a new place out of curiosity',
          'to pay your hotel bill before leaving',
          'to pack your bags and prepare to leave a hotel',
          'to return your hotel room key at reception',
        ],
      },
      {
        basic: 'get around',
        advanced: 'to travel from place to place within an area',
        wrong: [
          'to avoid a restricted or dangerous area',
          'to navigate your way through a new city',
          'to use public transport to move around',
          'to find alternative routes when roads are blocked',
        ],
      },
      {
        basic: 'touch down',
        advanced: 'to land after a flight',
        wrong: [
          'to feel the plane begin to descend',
          'to arrive at your destination safely',
          'to disembark from the plane after landing',
          'to hear the announcement that landing has begun',
        ],
      },
      {
        basic: 'stop over',
        advanced: 'to break a long journey by staying somewhere temporarily',
        wrong: [
          'to cancel a connecting flight and rebook',
          'to take a short rest during a long drive',
          'to visit an extra destination during your trip',
          'to extend your holiday by a few extra days',
        ],
      },
      {
        basic: 'head off',
        advanced: 'to leave for a destination',
        wrong: [
          'to plan the route before starting your journey',
          'to say goodbye before departing on a trip',
          'to prepare everything you need before leaving',
          'to drive away from your home or office',
        ],
      },
      {
        basic: 'get lost',
        advanced: 'to not know where you are or how to reach your destination',
        wrong: [
          'to take a wrong turn and need to find a new route',
          'to feel confused in an unfamiliar environment',
          'to miss your stop on public transport',
          'to arrive at the wrong location by mistake',
        ],
      },
      {
        basic: 'drop off',
        advanced: 'to take someone to a place and leave them there',
        wrong: [
          'to pick someone up from an agreed location',
          'to park outside a destination briefly',
          'to leave luggage at a storage facility',
          'to deliver something to someone at their address',
        ],
      },
      {
        basic: 'pick up',
        advanced: 'to collect someone and take them somewhere by vehicle',
        wrong: [
          'to arrive at an airport or station to meet someone',
          'to offer someone a lift to their destination',
          'to wait for someone who is running late',
          'to drive someone to the airport as a favour',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. HEALTH
  // ─────────────────────────────────────────
  {
    id: 'health',
    name: 'Health',
    verbs: [
      {
        basic: 'come down with',
        advanced: 'to start feeling ill with a particular illness',
        wrong: [
          'to feel slightly unwell without knowing why',
          'to catch an illness from someone around you',
          'to experience the first signs of being sick',
          'to suddenly feel worse during the day',
        ],
      },
      {
        basic: 'fight off',
        advanced: 'to successfully resist or recover from an illness',
        wrong: [
          'to treat a serious illness with medication',
          'to avoid catching an illness by being careful',
          'to feel better after taking medicine for a few days',
          'to recover slowly after a long period of illness',
        ],
      },
      {
        basic: 'wear off',
        advanced: 'to gradually stop having an effect',
        wrong: [
          'to stop taking medication because you feel better',
          'to reduce the dosage of medication over time',
          'to feel the medication starting to work',
          'to experience side effects from medication',
        ],
      },
      {
        basic: 'cut out',
        advanced: 'to stop eating or consuming something for health reasons',
        wrong: [
          'to reduce the amount of something you consume',
          'to replace an unhealthy habit with a better one',
          'to follow a restricted diet temporarily',
          'to avoid a food that causes an allergic reaction',
        ],
      },
      {
        basic: 'work out',
        advanced: 'to exercise in order to improve fitness',
        wrong: [
          'to stretch after a physical activity',
          'to follow a strict diet alongside your fitness plan',
          'to warm up before starting physical exercise',
          'to track your progress during a fitness routine',
        ],
      },
      {
        basic: 'pass out',
        advanced: 'to lose consciousness briefly',
        wrong: [
          'to feel very faint and need to sit down',
          'to feel nauseous during a long period of standing',
          'to feel dizzy after getting up too quickly',
          'to fall asleep unexpectedly due to exhaustion',
        ],
      },
      {
        basic: 'build up',
        advanced: 'to gradually increase strength or immunity over time',
        wrong: [
          'to follow a strict training plan to get fit',
          'to strengthen a specific part of the body',
          'to take supplements to support your health',
          'to recover after an injury by exercising carefully',
        ],
      },
      {
        basic: 'check up on',
        advanced: 'to monitor someone\'s health or recovery',
        wrong: [
          'to visit a doctor for a routine health check',
          'to research symptoms of an illness online',
          'to make sure a friend is taking their medication',
          'to follow up with a doctor after a diagnosis',
        ],
      },
      {
        basic: 'run down',
        advanced: 'to feel physically weak and lacking energy',
        wrong: [
          'to feel slightly ill without a clear reason',
          'to become exhausted after a long illness',
          'to feel demotivated due to health problems',
          'to experience symptoms of an oncoming illness',
        ],
      },
      {
        basic: 'keep up with',
        advanced: 'to maintain a health routine consistently',
        wrong: [
          'to follow the latest health trends and advice',
          'to match the fitness level of those around you',
          'to increase your exercise intensity gradually',
          'to stay informed about your health condition',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. HOME
  // ─────────────────────────────────────────
  {
    id: 'home',
    name: 'Home',
    verbs: [
      {
        basic: 'tidy up',
        advanced: 'to make a space neat and organised',
        wrong: [
          'to deep clean a room from top to bottom',
          'to reorganise furniture in a room',
          'to remove clutter before guests arrive',
          'to clean surfaces and floors thoroughly',
        ],
      },
      {
        basic: 'clear out',
        advanced: 'to remove unwanted items from a space',
        wrong: [
          'to clean a space quickly before someone visits',
          'to organise your belongings into storage boxes',
          'to donate clothes and items you no longer need',
          'to make space in a room for new furniture',
        ],
      },
      {
        basic: 'sort out',
        advanced: 'to organise things that are in a mess',
        wrong: [
          'to separate recyclable items from general waste',
          'to arrange items by category or colour',
          'to declutter a space that has become disorganised',
          'to find what you need in a messy cupboard',
        ],
      },
      {
        basic: 'do up',
        advanced: 'to renovate or redecorate a home or room',
        wrong: [
          'to clean a room before moving into a new home',
          'to add new furniture to update the look of a room',
          'to paint walls a different colour',
          'to repair something that is broken at home',
        ],
      },
      {
        basic: 'fix up',
        advanced: 'to repair and improve something in the home',
        wrong: [
          'to hire a professional to repair something',
          'to repaint the walls of a room',
          'to buy new appliances for the kitchen',
          'to replace something that is old or worn out',
        ],
      },
      {
        basic: 'lock up',
        advanced: 'to secure a building by locking all doors and windows',
        wrong: [
          'to check all the windows before going to bed',
          'to turn off all the lights before leaving',
          'to arm the alarm system before going out',
          'to close the curtains before leaving home',
        ],
      },
      {
        basic: 'move in',
        advanced: 'to begin living in a new home',
        wrong: [
          'to unpack your belongings after arriving somewhere new',
          'to settle into a new neighbourhood',
          'to start renting a new apartment',
          'to sign a lease agreement for a new home',
        ],
      },
      {
        basic: 'move out',
        advanced: 'to leave a home and stop living there',
        wrong: [
          'to pack up your belongings before a move',
          'to end a tenancy agreement with your landlord',
          'to hand back the keys to your landlord',
          'to find a new place to live after leaving',
        ],
      },
      {
        basic: 'hang up',
        advanced: 'to put something on a hook or hanger',
        wrong: [
          'to display something on the wall as decoration',
          'to put a picture frame up on the wall',
          'to attach something to the ceiling',
          'to put curtains up on a window rail',
        ],
      },
      {
        basic: 'put away',
        advanced: 'to return something to its correct place after use',
        wrong: [
          'to throw something away that you no longer need',
          'to pack something into a box for storage',
          'to hide something so it is out of sight',
          'to store something in a different room',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. TECHNOLOGY
  // ─────────────────────────────────────────
  {
    id: 'technology',
    name: 'Technology',
    verbs: [
      {
        basic: 'log in',
        advanced: 'to enter your credentials to access a system or account',
        wrong: [
          'to create a new account on a platform',
          'to verify your identity using a code',
          'to open an application on your device',
          'to connect your device to the internet',
        ],
      },
      {
        basic: 'log out',
        advanced: 'to sign out of an account or system',
        wrong: [
          'to close an application on your device',
          'to turn off your device at the end of the day',
          'to disconnect from a website you are browsing',
          'to clear your browsing history and cookies',
        ],
      },
      {
        basic: 'back up',
        advanced: 'to create a copy of data to prevent losing it',
        wrong: [
          'to store files in an organised folder system',
          'to move files from one device to another',
          'to upload files to a cloud storage service',
          'to compress files to free up storage space',
        ],
      },
      {
        basic: 'scroll through',
        advanced: 'to move through content on a screen continuously',
        wrong: [
          'to search for specific content on social media',
          'to swipe left or right on a touchscreen',
          'to browse the internet without a clear goal',
          'to look for something specific in a feed',
        ],
      },
      {
        basic: 'charge up',
        advanced: 'to fill a device\'s battery with power',
        wrong: [
          'to connect your device to a power source',
          'to buy a new cable to replace a broken one',
          'to check the battery level of your device',
          'to turn off your device to save battery',
        ],
      },
      {
        basic: 'set up',
        advanced: 'to install and configure a device or system for use',
        wrong: [
          'to connect a device to the internet for the first time',
          'to transfer data from an old device to a new one',
          'to download the latest software update',
          'to install a new application on your phone',
        ],
      },
      {
        basic: 'switch off',
        advanced: 'to turn off a device completely',
        wrong: [
          'to put your device on silent mode',
          'to put your phone into aeroplane mode',
          'to lock your screen without turning it off',
          'to close all open applications on your device',
        ],
      },
      {
        basic: 'update to',
        advanced: 'to install the latest version of software',
        wrong: [
          'to download an app you have not used before',
          'to restart your device after a software change',
          'to change your settings to improve performance',
          'to delete old files to make room for new software',
        ],
      },
      {
        basic: 'plug in',
        advanced: 'to connect a device to a power source or another device',
        wrong: [
          'to turn on a device using its power button',
          'to connect wirelessly to a Bluetooth device',
          'to insert a SIM card into a new phone',
          'to attach a cable to transfer files between devices',
        ],
      },
      {
        basic: 'cut out',
        advanced: 'to suddenly stop working or lose connection',
        wrong: [
          'to experience a slow internet connection',
          'to freeze or crash unexpectedly',
          'to go offline because of low battery',
          'to lose audio during a video call',
        ],
      },
    ],
  },
]
