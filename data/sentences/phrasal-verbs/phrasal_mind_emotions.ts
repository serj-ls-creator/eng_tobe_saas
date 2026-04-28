// ============================================================
// PHRASAL VERBS — Mind & Emotions
// Structure: 6 subcategories × 10 phrasal verbs
// Game: show phrasal verb → pick correct meaning from 5 options
// ============================================================

import { PhrasalVerb, Subcategory } from './types';

export const MIND_EMOTIONS: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. FEELING GOOD
  // ─────────────────────────────────────────
  {
    id: 'feeling_good',
    name: 'Feeling Good',
    verbs: [
      {
        basic: 'cheer up',
        advanced: 'to become or make someone feel happier',
        wrong: [
          'to encourage someone before a big event',
          'to celebrate a success with friends',
          'to pretend to feel happy when you are not',
          'to distract yourself from negative thoughts',
        ],
      },
      {
        basic: 'lighten up',
        advanced: 'to become less serious or more relaxed',
        wrong: [
          'to feel physically lighter after losing weight',
          'to see a situation from a more positive angle',
          'to reduce the amount of work you are doing',
          'to switch off your phone to reduce stress',
        ],
      },
      {
        basic: 'perk up',
        advanced: 'to suddenly feel more energetic or positive',
        wrong: [
          'to drink coffee to help you wake up',
          'to improve your appearance before going out',
          'to become more alert after a short rest',
          'to receive good news after a difficult period',
        ],
      },
      {
        basic: 'look forward to',
        advanced: 'to feel excited and happy about something coming',
        wrong: [
          'to plan ahead for an important future event',
          'to think positively about an uncertain situation',
          'to imagine how something will turn out',
          'to remind yourself of good things in your life',
        ],
      },
      {
        basic: 'open up',
        advanced: 'to become more willing to share your feelings',
        wrong: [
          'to start feeling better after a tough period',
          'to let new experiences into your life',
          'to become more socially confident over time',
          'to be honest about what makes you happy',
        ],
      },
      {
        basic: 'wind down',
        advanced: 'to relax after a period of stress or activity',
        wrong: [
          'to reduce your commitments to feel less busy',
          'to slow down physically when you feel tired',
          'to finish the last task of a busy day',
          'to take a holiday after a stressful period',
        ],
      },
      {
        basic: 'bounce back',
        advanced: 'to recover quickly after something difficult',
        wrong: [
          'to feel happy again after a short rest',
          'to return to your normal routine after a break',
          'to gain energy from doing physical exercise',
          'to feel better after talking to a friend',
        ],
      },
      {
        basic: 'lift someone up',
        advanced: 'to make someone feel better emotionally',
        wrong: [
          'to physically help someone get off the ground',
          'to promote someone to a better position',
          'to praise someone in front of other people',
          'to give someone a compliment about their work',
        ],
      },
      {
        basic: 'feel up to',
        advanced: 'to have enough energy or desire to do something',
        wrong: [
          'to be physically strong enough for a task',
          'to be confident you can handle a challenge',
          'to be in the mood for something specific',
          'to feel well enough to leave the house',
        ],
      },
      {
        basic: 'warm to',
        advanced: 'to start feeling more positive about something',
        wrong: [
          'to become physically comfortable in a warm place',
          'to feel accepted in a new environment',
          'to begin to enjoy something you were unsure about',
          'to appreciate someone more after spending time with them',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. FEELING BAD
  // ─────────────────────────────────────────
  {
    id: 'feeling_bad',
    name: 'Feeling Bad',
    verbs: [
      {
        basic: 'break down',
        advanced: 'to lose emotional control and cry or collapse',
        wrong: [
          'to feel exhausted after working too hard',
          'to become sick due to stress or overwork',
          'to suddenly feel very angry without reason',
          'to shut yourself off from people around you',
        ],
      },
      {
        basic: 'bottle up',
        advanced: 'to keep your feelings hidden instead of expressing them',
        wrong: [
          'to store memories of painful experiences',
          'to avoid talking about your problems openly',
          'to suppress your reactions in a calm way',
          'to hold back tears in a social situation',
        ],
      },
      {
        basic: 'bring down',
        advanced: 'to make someone feel sad or depressed',
        wrong: [
          'to deliver bad news in a gentle way',
          'to lower someone\'s expectations gradually',
          'to reduce someone\'s confidence in themselves',
          'to criticise someone in front of others',
        ],
      },
      {
        basic: 'wear down',
        advanced: 'to gradually make someone feel exhausted or weak',
        wrong: [
          'to use something until it becomes old and broken',
          'to slowly persuade someone to change their mind',
          'to feel physically tired after a long day',
          'to reduce someone\'s patience through repetition',
        ],
      },
      {
        basic: 'close off',
        advanced: 'to stop sharing your emotions with others',
        wrong: [
          'to end a conversation before it becomes emotional',
          'to avoid situations that cause you stress',
          'to decide not to talk about a specific topic',
          'to become less sociable after a difficult event',
        ],
      },
      {
        basic: 'dwell on',
        advanced: 'to keep thinking about something negative for too long',
        wrong: [
          'to spend time reflecting on past experiences',
          'to focus too much on things you cannot change',
          'to analyse a problem from every possible angle',
          'to remember painful moments in great detail',
        ],
      },
      {
        basic: 'fall apart',
        advanced: 'to be unable to cope emotionally',
        wrong: [
          'to lose interest in things you used to enjoy',
          'to feel completely alone during a hard time',
          'to stop functioning properly due to stress',
          'to give up on your goals after a setback',
        ],
      },
      {
        basic: 'give in',
        advanced: 'to stop resisting and accept a negative feeling',
        wrong: [
          'to admit you were wrong after a long argument',
          'to stop fighting a habit that is hard to break',
          'to accept a compromise you are not happy with',
          'to agree to do something you do not want to do',
        ],
      },
      {
        basic: 'shut down',
        advanced: 'to emotionally detach and stop responding',
        wrong: [
          'to end a conversation that is going nowhere',
          'to stop working due to overwhelming pressure',
          'to become very quiet when feeling overwhelmed',
          'to refuse to continue a difficult discussion',
        ],
      },
      {
        basic: 'take it out on',
        advanced: 'to express negative feelings by being unkind to someone else',
        wrong: [
          'to blame someone else for your own problems',
          'to release stress through physical exercise',
          'to be short-tempered because you are exhausted',
          'to punish someone for causing you to feel bad',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. THINKING
  // ─────────────────────────────────────────
  {
    id: 'thinking',
    name: 'Thinking',
    verbs: [
      {
        basic: 'think over',
        advanced: 'to carefully consider something before deciding',
        wrong: [
          'to repeat a thought in your head many times',
          'to overthink a simple decision unnecessarily',
          'to discuss an idea with someone else first',
          'to change your mind after considering something',
        ],
      },
      {
        basic: 'figure out',
        advanced: 'to find the answer to something by thinking hard',
        wrong: [
          'to calculate a number using logic and math',
          'to understand something after being explained',
          'to make a guess when you are not sure',
          'to ask someone for help solving a problem',
        ],
      },
      {
        basic: 'mull over',
        advanced: 'to think about something slowly and carefully',
        wrong: [
          'to worry about something you cannot control',
          'to consider an idea without reaching a conclusion',
          'to discuss an option with someone you trust',
          'to delay making a decision for too long',
        ],
      },
      {
        basic: 'dwell on',
        advanced: 'to spend too much time thinking about one thing',
        wrong: [
          'to analyse a problem from every possible angle',
          'to keep returning to a thought that bothers you',
          'to focus deeply on a topic you find interesting',
          'to reflect on a past experience to learn from it',
        ],
      },
      {
        basic: 'come up with',
        advanced: 'to produce or think of a new idea or solution',
        wrong: [
          'to unexpectedly discover something useful',
          'to borrow an idea from someone else',
          'to develop a plan after researching thoroughly',
          'to find a solution after working with others',
        ],
      },
      {
        basic: 'zone out',
        advanced: 'to stop paying attention and lose focus',
        wrong: [
          'to take a short break to rest your mind',
          'to feel bored during a long presentation',
          'to daydream about something completely unrelated',
          'to lose track of time while doing something',
        ],
      },
      {
        basic: 'work out',
        advanced: 'to solve a problem by thinking it through',
        wrong: [
          'to practise a skill until you become good at it',
          'to calculate the cost of something carefully',
          'to reach a solution through trial and error',
          'to find the answer by asking someone else',
        ],
      },
      {
        basic: 'weigh up',
        advanced: 'to carefully compare options before making a choice',
        wrong: [
          'to measure the importance of different factors',
          'to consider the risks of a decision carefully',
          'to list the advantages and disadvantages',
          'to ask others for their opinion before deciding',
        ],
      },
      {
        basic: 'face up to',
        advanced: 'to accept a difficult truth and deal with it',
        wrong: [
          'to confront someone who has treated you badly',
          'to overcome a fear by forcing yourself to act',
          'to acknowledge that you made a mistake',
          'to stop avoiding a conversation you dread',
        ],
      },
      {
        basic: 'snap out of',
        advanced: 'to force yourself to stop a negative mental state',
        wrong: [
          'to suddenly feel better without any effort',
          'to take a break from negative thoughts',
          'to distract yourself from how you are feeling',
          'to stop a bad habit quickly and permanently',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. DECISION MAKING
  // ─────────────────────────────────────────
  {
    id: 'decision_making',
    name: 'Decision Making',
    verbs: [
      {
        basic: 'make up your mind',
        advanced: 'to reach a final decision after considering options',
        wrong: [
          'to change your opinion based on new information',
          'to take your time before committing to something',
          'to agree with someone else\'s recommendation',
          'to decide quickly without thinking it through',
        ],
      },
      {
        basic: 'opt for',
        advanced: 'to choose one option over another',
        wrong: [
          'to prefer something without actively choosing it',
          'to select the most popular available option',
          'to go with the first idea that comes to mind',
          'to agree to something after being persuaded',
        ],
      },
      {
        basic: 'rule out',
        advanced: 'to decide that something is not possible or suitable',
        wrong: [
          'to remove an option that was never realistic',
          'to reject an idea after testing it briefly',
          'to eliminate the worst option on a list',
          'to say no to something without explaining why',
        ],
      },
      {
        basic: 'go ahead',
        advanced: 'to proceed with a plan or decision',
        wrong: [
          'to agree with someone\'s suggestion enthusiastically',
          'to start something before you are fully ready',
          'to approve a plan made by someone else',
          'to move forward despite someone\'s objection',
        ],
      },
      {
        basic: 'back out',
        advanced: 'to withdraw from a decision or commitment',
        wrong: [
          'to change your mind after a short time',
          'to refuse to take part in something planned',
          'to exit a situation without telling anyone',
          'to abandon a plan when things get difficult',
        ],
      },
      {
        basic: 'settle on',
        advanced: 'to finally agree on one option after considering many',
        wrong: [
          'to choose something because it is good enough',
          'to stop looking for alternatives and commit',
          'to accept a compromise you are satisfied with',
          'to pick something quickly to stop overthinking',
        ],
      },
      {
        basic: 'talk yourself into',
        advanced: 'to persuade yourself to do something despite doubt',
        wrong: [
          'to convince someone else to make a decision',
          'to repeat positive affirmations to feel confident',
          'to overthink a situation until you act',
          'to justify a bad decision after making it',
        ],
      },
      {
        basic: 'sleep on it',
        advanced: 'to wait until the next day before making a decision',
        wrong: [
          'to take a break before continuing to think',
          'to avoid making a decision by putting it off',
          'to feel tired because a decision is stressful',
          'to decide something in a dream or subconsciously',
        ],
      },
      {
        basic: 'stick with',
        advanced: 'to continue with a decision already made',
        wrong: [
          'to support a choice made by someone you trust',
          'to refuse to consider any other options',
          'to stay loyal to a brand or product you like',
          'to repeat the same mistake without learning',
        ],
      },
      {
        basic: 'go back on',
        advanced: 'to break a promise or change a decision already made',
        wrong: [
          'to reconsider a decision after new information',
          'to return to a previous way of doing things',
          'to change your opinion after sleeping on it',
          'to undo something that has already been done',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. STRESS
  // ─────────────────────────────────────────
  {
    id: 'stress',
    name: 'Stress',
    verbs: [
      {
        basic: 'burn out',
        advanced: 'to become exhausted from too much work or pressure',
        wrong: [
          'to lose motivation after working on one thing too long',
          'to feel overwhelmed by too many responsibilities',
          'to stop caring about your work or performance',
          'to become irritable due to lack of sleep',
        ],
      },
      {
        basic: 'pile up',
        advanced: 'to accumulate until the amount becomes overwhelming',
        wrong: [
          'to stack tasks in order of priority',
          'to feel pressure from many sources at once',
          'to receive too many messages at the same time',
          'to add more responsibilities to an already busy schedule',
        ],
      },
      {
        basic: 'crack under',
        advanced: 'to fail to cope when pressure becomes too great',
        wrong: [
          'to feel frustrated when things do not go as planned',
          'to break down physically from overworking',
          'to make a mistake because you are under pressure',
          'to snap at someone when you are feeling stressed',
        ],
      },
      {
        basic: 'lash out',
        advanced: 'to react angrily or aggressively when stressed',
        wrong: [
          'to express frustration in a controlled way',
          'to push people away when feeling overwhelmed',
          'to say something hurtful you later regret',
          'to release stress through physical exercise',
        ],
      },
      {
        basic: 'shut off',
        advanced: 'to disconnect mentally to protect yourself from stress',
        wrong: [
          'to stop working and take a complete break',
          'to turn off all devices to avoid distractions',
          'to close yourself off from social interactions',
          'to stop responding to messages when overwhelmed',
        ],
      },
      {
        basic: 'take on too much',
        advanced: 'to accept more responsibilities than you can handle',
        wrong: [
          'to feel overwhelmed by unexpected new tasks',
          'to agree to help others when you are already busy',
          'to underestimate how long a task will take',
          'to fail to prioritise your most important tasks',
        ],
      },
      {
        basic: 'let go',
        advanced: 'to stop holding onto stress or negative emotions',
        wrong: [
          'to forgive someone who caused you stress',
          'to accept a situation you cannot change',
          'to release control over an outcome',
          'to move on from a stressful experience',
        ],
      },
      {
        basic: 'step back',
        advanced: 'to distance yourself mentally from a stressful situation',
        wrong: [
          'to take a physical break from your workspace',
          'to reduce your involvement in a stressful project',
          'to ask someone else to handle a problem',
          'to take time off work to recover from stress',
        ],
      },
      {
        basic: 'calm down',
        advanced: 'to return to a relaxed state after feeling stressed',
        wrong: [
          'to suppress your emotions in a stressful moment',
          'to breathe deeply to avoid a panic attack',
          'to avoid reacting to something that upsets you',
          'to talk yourself through a stressful situation',
        ],
      },
      {
        basic: 'ease up',
        advanced: 'to reduce pressure or effort gradually',
        wrong: [
          'to stop working completely when feeling burned out',
          'to ask others to take some of your workload',
          'to lower your standards to feel less pressure',
          'to slow your pace so you do not make mistakes',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. MOTIVATION
  // ─────────────────────────────────────────
  {
    id: 'motivation',
    name: 'Motivation',
    verbs: [
      {
        basic: 'push yourself',
        advanced: 'to make yourself work harder than feels comfortable',
        wrong: [
          'to force yourself to complete a task you hate',
          'to motivate yourself by thinking of the reward',
          'to compete with others to improve your results',
          'to challenge a limit you previously set for yourself',
        ],
      },
      {
        basic: 'drive yourself',
        advanced: 'to motivate yourself through inner determination',
        wrong: [
          'to transport yourself to work by car',
          'to find external rewards to keep yourself going',
          'to set goals so you have something to aim for',
          'to compete against others to stay motivated',
        ],
      },
      {
        basic: 'keep going',
        advanced: 'to continue even when it feels hard',
        wrong: [
          'to repeat the same routine without changing it',
          'to stay on the same path without exploring alternatives',
          'to maintain your current pace without slowing down',
          'to avoid giving up even when results are slow',
        ],
      },
      {
        basic: 'pick yourself up',
        advanced: 'to recover and continue after a failure or setback',
        wrong: [
          'to reward yourself after achieving something difficult',
          'to find the energy to start something new',
          'to stop feeling sorry for yourself and take action',
          'to ask for help when you feel demotivated',
        ],
      },
      {
        basic: 'press on',
        advanced: 'to continue working despite difficulty or resistance',
        wrong: [
          'to apply extra effort in the final stages of a task',
          'to accelerate your progress at a critical moment',
          'to refuse to take breaks during a long task',
          'to push harder when you are almost finished',
        ],
      },
      {
        basic: 'gear up',
        advanced: 'to prepare yourself mentally for a challenge',
        wrong: [
          'to become excited about something you are doing',
          'to get physically ready before exercising',
          'to plan carefully before starting a big task',
          'to read about a topic before diving into it',
        ],
      },
      {
        basic: 'fire up',
        advanced: 'to become or make someone feel very enthusiastic',
        wrong: [
          'to start an argument that energises a group',
          'to push yourself harder than you normally would',
          'to boost someone\'s confidence before a big moment',
          'to make a team feel competitive and ready to win',
        ],
      },
      {
        basic: 'follow through',
        advanced: 'to complete what you started with full commitment',
        wrong: [
          'to repeat a process until you get the result you want',
          'to check in regularly to make sure you are on track',
          'to push yourself to finish at the last moment',
          'to stay consistent even when motivation fades',
        ],
      },
      {
        basic: 'set out',
        advanced: 'to begin a task or journey with a clear intention',
        wrong: [
          'to write a list of goals before starting something',
          'to announce your intentions to others publicly',
          'to prepare everything before beginning a project',
          'to define success before you start working',
        ],
      },
      {
        basic: 'push through',
        advanced: 'to continue despite discomfort, resistance or tiredness',
        wrong: [
          'to force your ideas on others who disagree',
          'to complete a task faster by ignoring quality',
          'to rush through work to meet a tight deadline',
          'to skip important steps to get to the result faster',
        ],
      },
    ],
  },
]
