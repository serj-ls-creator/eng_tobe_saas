// ============================================================
// PHRASAL VERBS — Relationships & Social
// Structure: 6 subcategories × 10 phrasal verbs
// Game: show phrasal verb → pick correct meaning from 5 options
// ============================================================

import { PhrasalVerb, Subcategory } from './types';

export const RELATIONSHIPS_SOCIAL: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. MEETING PEOPLE
  // ─────────────────────────────────────────
  {
    id: 'meeting_people',
    name: 'Meeting People',
    verbs: [
      {
        basic: 'run into',
        advanced: 'to meet someone by chance',
        wrong: [
          'to crash into someone while walking fast',
          'to arrange a meeting with an old friend',
          'to introduce yourself to a group of strangers',
          'to bump into an obstacle on the street',
        ],
      },
      {
        basic: 'come across',
        advanced: 'to meet or find someone unexpectedly',
        wrong: [
          'to cross a busy road to reach someone',
          'to appear rude or unfriendly to new people',
          'to walk towards someone you recognise',
          'to travel a long distance to visit someone',
        ],
      },
      {
        basic: 'hit it off',
        advanced: 'to immediately like someone and get along well',
        wrong: [
          'to start a fight with someone you just met',
          'to feel nervous when meeting new people',
          'to impress someone with your skills or looks',
          'to recognise someone from a previous meeting',
        ],
      },
      {
        basic: 'warm up to',
        advanced: 'to gradually start to like someone',
        wrong: [
          'to comfort someone who is feeling cold',
          'to prepare yourself before meeting strangers',
          'to invite someone to a social event',
          'to be immediately comfortable with a new person',
        ],
      },
      {
        basic: 'get to know',
        advanced: 'to slowly learn more about someone',
        wrong: [
          'to find out personal information about someone',
          'to research someone before meeting them',
          'to understand someone after a single conversation',
          'to become famous in a new social circle',
        ],
      },
      {
        basic: 'open up',
        advanced: 'to start sharing personal thoughts and feelings',
        wrong: [
          'to invite someone into your home',
          'to begin a new friendship from scratch',
          'to become more outgoing in social situations',
          'to make the first move in a new relationship',
        ],
      },
      {
        basic: 'look up',
        advanced: 'to contact someone you have not seen for a while',
        wrong: [
          'to search for someone\'s social media profile',
          'to admire someone for their achievements',
          'to find out information about a new acquaintance',
          'to reconnect with someone immediately after meeting',
        ],
      },
      {
        basic: 'reach out',
        advanced: 'to make contact with someone to offer help or start communication',
        wrong: [
          'to extend your hand when greeting someone',
          'to ask for help from a close friend',
          'to make a phone call to an old colleague',
          'to wave at someone you recognise across the room',
        ],
      },
      {
        basic: 'bond with',
        advanced: 'to form a close connection with someone',
        wrong: [
          'to sign a formal agreement with a partner',
          'to share a meal with a new acquaintance',
          'to spend time with someone out of obligation',
          'to make plans with someone you just met',
        ],
      },
      {
        basic: 'get along with',
        advanced: 'to have a good friendly relationship with someone',
        wrong: [
          'to spend time with someone despite differences',
          'to travel together with a group of friends',
          'to tolerate someone you do not particularly like',
          'to manage a difficult social situation smoothly',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. FRIENDSHIP
  // ─────────────────────────────────────────
  {
    id: 'friendship',
    name: 'Friendship',
    verbs: [
      {
        basic: 'hang out',
        advanced: 'to spend time with friends in a relaxed way',
        wrong: [
          'to wait for someone who is running late',
          'to stay at home instead of going out',
          'to attend a formal social event together',
          'to celebrate a special occasion with family',
        ],
      },
      {
        basic: 'catch up',
        advanced: 'to talk with a friend after not seeing them for a while',
        wrong: [
          'to run faster to reach a friend ahead of you',
          'to share news on social media with friends',
          'to update your friend on your daily routine',
          'to finish a conversation that was interrupted',
        ],
      },
      {
        basic: 'count on',
        advanced: 'to depend on someone because you trust them',
        wrong: [
          'to ask a friend to help you count something',
          'to keep track of how many times you meet',
          'to rely on someone without telling them',
          'to check whether a friend will attend an event',
        ],
      },
      {
        basic: 'look out for',
        advanced: 'to take care of and protect someone',
        wrong: [
          'to watch for someone arriving from a distance',
          'to be suspicious of a friend\'s behaviour',
          'to keep an eye on someone\'s social media',
          'to check on a friend who lives far away',
        ],
      },
      {
        basic: 'stand by',
        advanced: 'to support someone during a difficult time',
        wrong: [
          'to wait near someone without helping them',
          'to agree with everything your friend says',
          'to stay close to someone at a busy event',
          'to defend a friend even when they are wrong',
        ],
      },
      {
        basic: 'drift apart',
        advanced: 'to slowly lose touch with someone over time',
        wrong: [
          'to have a sudden argument with a close friend',
          'to move to a different city away from friends',
          'to lose interest in shared hobbies together',
          'to become very different people from each other',
        ],
      },
      {
        basic: 'make up',
        advanced: 'to reconcile after an argument',
        wrong: [
          'to invent a story to tell your friends',
          'to create a plan for a social event together',
          'to apologise for being late to meet someone',
          'to prepare yourself before seeing a friend',
        ],
      },
      {
        basic: 'fall out',
        advanced: 'to have a serious argument and stop being friends',
        wrong: [
          'to accidentally drop something in front of a friend',
          'to lose contact because of a busy schedule',
          'to disagree on a minor topic and move on',
          'to feel left out of a friend group',
        ],
      },
      {
        basic: 'be there for',
        advanced: 'to support someone emotionally when they need help',
        wrong: [
          'to physically be present at a friend\'s event',
          'to arrive on time when you said you would',
          'to attend a party because a friend invited you',
          'to agree to help a friend move to a new place',
        ],
      },
      {
        basic: 'grow apart',
        advanced: 'to become less close to someone as time passes',
        wrong: [
          'to become more mature alongside a close friend',
          'to develop different interests at the same time',
          'to stop sharing things in common gradually',
          'to argue more frequently as a friendship gets older',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. CONFLICT
  // ─────────────────────────────────────────
  {
    id: 'conflict',
    name: 'Conflict',
    verbs: [
      {
        basic: 'fall out with',
        advanced: 'to have a serious disagreement with someone',
        wrong: [
          'to accidentally offend someone without meaning to',
          'to lose contact with someone gradually',
          'to feel disappointed by someone\'s behaviour',
          'to argue about a small unimportant matter',
        ],
      },
      {
        basic: 'blow up',
        advanced: 'to suddenly become very angry',
        wrong: [
          'to exaggerate the seriousness of a conflict',
          'to end a relationship in a dramatic way',
          'to start an argument over a small issue',
          'to lose your temper after being very patient',
        ],
      },
      {
        basic: 'calm down',
        advanced: 'to become less upset or angry',
        wrong: [
          'to avoid a conflict by staying quiet',
          'to pretend you are not angry about something',
          'to ask someone to stop being dramatic',
          'to take a deep breath before speaking',
        ],
      },
      {
        basic: 'talk back',
        advanced: 'to reply rudely or disrespectfully',
        wrong: [
          'to respond to a message after a long delay',
          'to defend yourself in a calm and polite way',
          'to repeat what someone said to confirm you heard',
          'to give a quick reply without thinking it through',
        ],
      },
      {
        basic: 'bring up',
        advanced: 'to mention something from the past during an argument',
        wrong: [
          'to start an argument about a current problem',
          'to remind someone of a promise they made',
          'to raise an old issue without any context',
          'to introduce a new complaint during a fight',
        ],
      },
      {
        basic: 'back down',
        advanced: 'to stop arguing and accept the other person\'s view',
        wrong: [
          'to retreat physically from a dangerous situation',
          'to support someone during a conflict',
          'to agree with someone only to end an argument',
          'to refuse to apologise after an argument',
        ],
      },
      {
        basic: 'patch things up',
        advanced: 'to repair a relationship after a disagreement',
        wrong: [
          'to pretend an argument never happened',
          'to fix a small issue without fully resolving it',
          'to apologise without meaning it sincerely',
          'to avoid the person you had a conflict with',
        ],
      },
      {
        basic: 'take out on',
        advanced: 'to treat someone badly because you are upset about something else',
        wrong: [
          'to blame someone directly for causing a problem',
          'to punish someone for breaking a rule',
          'to express your frustration loudly and openly',
          'to confront someone about their bad behaviour',
        ],
      },
      {
        basic: 'work things out',
        advanced: 'to find a solution to a disagreement together',
        wrong: [
          'to complete tasks efficiently as a team',
          'to resolve a conflict by avoiding each other',
          'to exercise together to relieve stress after fighting',
          'to hire a third party to settle a dispute',
        ],
      },
      {
        basic: 'stand up to',
        advanced: 'to resist or confront someone who is treating you badly',
        wrong: [
          'to support someone during a tough situation',
          'to defend a friend who is being criticised',
          'to get up and speak in front of a group',
          'to refuse to sit down during a confrontation',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. ROMANCE
  // ─────────────────────────────────────────
  {
    id: 'romance',
    name: 'Romance',
    verbs: [
      {
        basic: 'ask out',
        advanced: 'to invite someone on a romantic date',
        wrong: [
          'to request someone leaves a social event',
          'to invite a friend to a group gathering',
          'to ask someone for their contact details',
          'to question someone about their intentions',
        ],
      },
      {
        basic: 'fall for',
        advanced: 'to develop strong romantic feelings for someone',
        wrong: [
          'to be tricked by someone you trust',
          'to become very close friends with someone',
          'to agree with someone\'s opinion completely',
          'to be impressed by someone\'s personality',
        ],
      },
      {
        basic: 'go out with',
        advanced: 'to be in a romantic relationship with someone',
        wrong: [
          'to attend a social event with a friend',
          'to spend time with someone platonically',
          'to meet someone casually without commitment',
          'to go on a single date with no follow-up',
        ],
      },
      {
        basic: 'split up',
        advanced: 'to end a romantic relationship',
        wrong: [
          'to spend time apart to think about things',
          'to divide shared belongings after moving out',
          'to take a break from a relationship temporarily',
          'to argue so badly that you need space',
        ],
      },
      {
        basic: 'make up',
        advanced: 'to reconcile with a partner after an argument',
        wrong: [
          'to plan a romantic surprise for your partner',
          'to pretend everything is fine after a fight',
          'to create an excuse for forgetting an anniversary',
          'to do something nice to impress a new partner',
        ],
      },
      {
        basic: 'settle down',
        advanced: 'to start a stable life with a long-term partner',
        wrong: [
          'to agree to stop arguing with your partner',
          'to move in with someone after dating briefly',
          'to become less exciting as a relationship matures',
          'to stop dating and focus on your career',
        ],
      },
      {
        basic: 'grow on',
        advanced: 'to become more liked or attractive over time',
        wrong: [
          'to develop feelings suddenly and unexpectedly',
          'to become more dependent on a partner',
          'to gradually take over someone\'s personal space',
          'to become more physically attractive as you age',
        ],
      },
      {
        basic: 'stand someone up',
        advanced: 'to fail to meet someone as arranged without telling them',
        wrong: [
          'to support your partner when they feel insecure',
          'to cancel a date at the very last minute',
          'to arrive very late to a planned meeting',
          'to choose to end a date earlier than planned',
        ],
      },
      {
        basic: 'drift apart',
        advanced: 'to gradually become emotionally distant in a relationship',
        wrong: [
          'to take time apart to improve your relationship',
          'to argue more as a relationship gets longer',
          'to lose shared interests at the same moment',
          'to decide mutually to end a relationship',
        ],
      },
      {
        basic: 'open up to',
        advanced: 'to share your feelings honestly with a partner',
        wrong: [
          'to invite your partner to meet your family',
          'to become more physically affectionate over time',
          'to agree to try new things with your partner',
          'to start being more flexible in a relationship',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. FAMILY
  // ─────────────────────────────────────────
  {
    id: 'family',
    name: 'Family',
    verbs: [
      {
        basic: 'grow up',
        advanced: 'to develop from a child into an adult',
        wrong: [
          'to become more mature after a difficult experience',
          'to get taller during teenage years',
          'to leave your family home for the first time',
          'to stop behaving in a childish way',
        ],
      },
      {
        basic: 'take after',
        advanced: 'to look or behave like a parent or relative',
        wrong: [
          'to follow in a family member\'s footsteps',
          'to inherit money from a relative',
          'to look after a younger family member',
          'to admire someone in your family greatly',
        ],
      },
      {
        basic: 'bring up',
        advanced: 'to raise and care for a child',
        wrong: [
          'to remind a child of something they forgot',
          'to mention a sensitive topic at the dinner table',
          'to introduce a child to a new family member',
          'to carry a small child up the stairs',
        ],
      },
      {
        basic: 'look up to',
        advanced: 'to admire and respect someone older or more experienced',
        wrong: [
          'to check on an elderly family member regularly',
          'to ask for advice from a parent or grandparent',
          'to search for information about your family history',
          'to watch out for a younger sibling in public',
        ],
      },
      {
        basic: 'move out',
        advanced: 'to leave the family home and live independently',
        wrong: [
          'to relocate the entire family to a new city',
          'to ask a family member to leave the home',
          'to sell the family house and downsize',
          'to travel abroad for an extended period of time',
        ],
      },
      {
        basic: 'pass down',
        advanced: 'to give traditions or possessions to younger generations',
        wrong: [
          'to hand an object to someone standing below you',
          'to transfer ownership of a family business',
          'to share family stories during a gathering',
          'to leave money in a will to your children',
        ],
      },
      {
        basic: 'fall out with',
        advanced: 'to have a serious disagreement with a family member',
        wrong: [
          'to lose contact with relatives who live far away',
          'to argue about a minor issue and forget it',
          'to feel left out at a family gathering',
          'to disagree about family traditions or values',
        ],
      },
      {
        basic: 'get on with',
        advanced: 'to have a good relationship with a family member',
        wrong: [
          'to tolerate a family member you find difficult',
          'to continue doing something without stopping',
          'to manage family responsibilities alongside work',
          'to spend holidays together without conflict',
        ],
      },
      {
        basic: 'care for',
        advanced: 'to look after someone who needs help or support',
        wrong: [
          'to feel affection towards a family member',
          'to pay for a relative\'s medical expenses',
          'to visit an elderly relative on weekends',
          'to hire someone to help a sick family member',
        ],
      },
      {
        basic: 'name after',
        advanced: 'to give someone the same name as a relative',
        wrong: [
          'to nickname a family member based on personality',
          'to call a child by their middle name instead',
          'to rename a family tradition or celebration',
          'to refer to a relative by a title rather than name',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. COMMUNITY
  // ─────────────────────────────────────────
  {
    id: 'community',
    name: 'Community',
    verbs: [
      {
        basic: 'join in',
        advanced: 'to participate in an activity with others',
        wrong: [
          'to become a member of a formal organisation',
          'to enter a community space for the first time',
          'to sign up for a community volunteering programme',
          'to attend a local event without participating',
        ],
      },
      {
        basic: 'give back',
        advanced: 'to contribute something to the community that helped you',
        wrong: [
          'to return a borrowed item to its owner',
          'to refund someone who helped you financially',
          'to donate money to a charity anonymously',
          'to volunteer in exchange for payment',
        ],
      },
      {
        basic: 'reach out',
        advanced: 'to contact or offer help to people in a community',
        wrong: [
          'to extend your network on social media',
          'to ask the community for help with a problem',
          'to advertise a local event to neighbours',
          'to connect with influencers in your area',
        ],
      },
      {
        basic: 'bring together',
        advanced: 'to unite people for a shared purpose',
        wrong: [
          'to organise a social event for friends',
          'to introduce two people who do not know each other',
          'to combine resources from different organisations',
          'to encourage people to stop arguing and cooperate',
        ],
      },
      {
        basic: 'stand up for',
        advanced: 'to defend a person or cause publicly',
        wrong: [
          'to represent your community at a formal event',
          'to rise from your seat to show respect',
          'to volunteer for a leadership position',
          'to speak on behalf of someone who is absent',
        ],
      },
      {
        basic: 'pull together',
        advanced: 'to work as a team during a difficult time',
        wrong: [
          'to combine funds from different community members',
          'to hold a community meeting at short notice',
          'to physically move something heavy as a group',
          'to ask everyone to contribute equally to a project',
        ],
      },
      {
        basic: 'look out for',
        advanced: 'to watch over and protect others in the community',
        wrong: [
          'to search for new members to join a group',
          'to monitor suspicious activity in your area',
          'to be cautious of people you do not know',
          'to wait for something to happen in the community',
        ],
      },
      {
        basic: 'get involved',
        advanced: 'to actively take part in community activities',
        wrong: [
          'to join a political movement in your area',
          'to attend a community meeting as an observer',
          'to sign a petition for a local cause',
          'to donate money to support a local project',
        ],
      },
      {
        basic: 'set up',
        advanced: 'to establish a new group or initiative in the community',
        wrong: [
          'to prepare a community space for an event',
          'to register a non-profit organisation officially',
          'to arrange chairs and tables for a meeting',
          'to introduce a community leader to new members',
        ],
      },
      {
        basic: 'come together',
        advanced: 'to unite as a group for a common goal',
        wrong: [
          'to meet in the same physical location',
          'to agree on a shared set of community rules',
          'to combine different community organisations',
          'to resolve differences and start cooperating',
        ],
      },
    ],
  },
]
