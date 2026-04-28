// ============================================================
// PHRASAL VERBS — Work & Career
// Structure: 6 subcategories × 10 phrasal verbs
// Game: show phrasal verb → pick correct meaning from 5 options
// ============================================================

export interface PhrasalVerb {
  basic: string       // phrasal verb shown to player
  advanced: string    // correct meaning
  wrong: [string, string, string, string]  // 4 wrong options
}

export interface Subcategory {
  id: string
  name: string
  verbs: PhrasalVerb[]
}

export const WORK_CAREER: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. GETTING STARTED
  // ─────────────────────────────────────────
  {
    id: 'getting_started',
    name: 'Getting Started',
    verbs: [
      {
        basic: 'set up',
        advanced: 'to prepare or organise something before starting',
        wrong: [
          'to finish a project and hand it over',
          'to cancel plans that were already made',
          'to review work that has been completed',
          'to delay a task until a later time',
        ],
      },
      {
        basic: 'start out',
        advanced: 'to begin your career or a new activity',
        wrong: [
          'to leave a job after many years',
          'to return to work after a long break',
          'to take on extra responsibilities at work',
          'to finish the final stage of a project',
        ],
      },
      {
        basic: 'take on',
        advanced: 'to accept a new responsibility or challenge',
        wrong: [
          'to refuse a task that was assigned to you',
          'to pass your work to a colleague',
          'to complete a long-term assignment early',
          'to reduce your workload significantly',
        ],
      },
      {
        basic: 'sign up',
        advanced: 'to register or enrol for something',
        wrong: [
          'to resign from a position officially',
          'to approve a document with your signature',
          'to reject an offer that was made to you',
          'to confirm a meeting has been cancelled',
        ],
      },
      {
        basic: 'draw up',
        advanced: 'to prepare a formal document or plan',
        wrong: [
          'to sketch a rough idea on a whiteboard',
          'to delete an outdated file from the system',
          'to postpone writing a report until later',
          'to review a contract someone else created',
        ],
      },
      {
        basic: 'kick off',
        advanced: 'to begin a project or meeting officially',
        wrong: [
          'to end a meeting ahead of schedule',
          'to remove someone from a team',
          'to celebrate finishing a project',
          'to reject a proposal at the last moment',
        ],
      },
      {
        basic: 'bring in',
        advanced: 'to introduce someone or something new to a situation',
        wrong: [
          'to remove an underperforming team member',
          'to transfer a project to another department',
          'to present final results to management',
          'to reduce the number of people on a team',
        ],
      },
      {
        basic: 'gear up',
        advanced: 'to prepare yourself for something important',
        wrong: [
          'to slow down your work pace deliberately',
          'to hand in your notice at work',
          'to step back from a leadership role',
          'to wrap up a long-running project',
        ],
      },
      {
        basic: 'look into',
        advanced: 'to investigate or research something',
        wrong: [
          'to ignore a problem and move on',
          'to approve a report without checking it',
          'to copy information from another source',
          'to schedule a meeting for a later date',
        ],
      },
      {
        basic: 'map out',
        advanced: 'to plan something in detail before doing it',
        wrong: [
          'to cancel a plan at the last minute',
          'to follow someone else\'s instructions exactly',
          'to track your location during business travel',
          'to summarise the results of a completed project',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. DAILY TASKS
  // ─────────────────────────────────────────
  {
    id: 'daily_tasks',
    name: 'Daily Tasks',
    verbs: [
      {
        basic: 'carry out',
        advanced: 'to complete a task or instruction',
        wrong: [
          'to transport documents to another office',
          'to abandon a task halfway through',
          'to delegate work to a junior colleague',
          'to postpone completing an assignment',
        ],
      },
      {
        basic: 'follow up',
        advanced: 'to check on something after initial contact',
        wrong: [
          'to copy a colleague on an email thread',
          'to cancel a meeting that was already booked',
          'to agree with feedback given by a manager',
          'to repeat a task that was done incorrectly',
        ],
      },
      {
        basic: 'fill in',
        advanced: 'to complete a form or replace someone temporarily',
        wrong: [
          'to add extra budget to a project plan',
          'to permanently replace a senior employee',
          'to explain a complex topic in a meeting',
          'to reject a form that was submitted late',
        ],
      },
      {
        basic: 'catch up',
        advanced: 'to reach the same level as others after falling behind',
        wrong: [
          'to finish ahead of the rest of the team',
          'to have a quick informal meeting',
          'to take a break after working hard',
          'to overtake a competitor in the market',
        ],
      },
      {
        basic: 'hand in',
        advanced: 'to submit work or a document officially',
        wrong: [
          'to return borrowed equipment to a colleague',
          'to pass your work to someone for review',
          'to refuse an assignment from your manager',
          'to receive feedback on a submitted report',
        ],
      },
      {
        basic: 'sort out',
        advanced: 'to deal with a problem or organise something',
        wrong: [
          'to divide work equally among team members',
          'to file documents in alphabetical order',
          'to ignore a minor issue in the workplace',
          'to rearrange a meeting to a different time',
        ],
      },
      {
        basic: 'check in',
        advanced: 'to make contact to give or get an update',
        wrong: [
          'to arrive at the office for the first time',
          'to confirm your attendance at an event',
          'to review a colleague\'s work for errors',
          'to register for a work conference',
        ],
      },
      {
        basic: 'back up',
        advanced: 'to save a copy of data or support someone',
        wrong: [
          'to return to a previous version of a plan',
          'to delay a deadline by requesting more time',
          'to move a project to a different platform',
          'to slow down progress on a task deliberately',
        ],
      },
      {
        basic: 'pencil in',
        advanced: 'to schedule something tentatively',
        wrong: [
          'to confirm a meeting time with all parties',
          'to write detailed notes during a presentation',
          'to cancel a plan that was already confirmed',
          'to book a venue for a company event',
        ],
      },
      {
        basic: 'wrap up',
        advanced: 'to finish or bring something to an end',
        wrong: [
          'to package a product for delivery',
          'to summarise a presentation before it begins',
          'to postpone the end of a project',
          'to hand work over to a different team',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. COMMUNICATION
  // ─────────────────────────────────────────
  {
    id: 'communication',
    name: 'Communication',
    verbs: [
      {
        basic: 'bring up',
        advanced: 'to mention or introduce a topic in conversation',
        wrong: [
          'to end a discussion that is getting heated',
          'to avoid mentioning a sensitive topic',
          'to raise your voice during a disagreement',
          'to promote a colleague to a higher position',
        ],
      },
      {
        basic: 'point out',
        advanced: 'to direct attention to a fact or detail',
        wrong: [
          'to criticise someone harshly in public',
          'to ignore an obvious mistake in a report',
          'to give directions to a new team member',
          'to highlight the best part of a presentation',
        ],
      },
      {
        basic: 'speak up',
        advanced: 'to say something more loudly or express your opinion',
        wrong: [
          'to stay silent when asked for your view',
          'to interrupt a colleague during a meeting',
          'to give a formal speech to the entire team',
          'to repeat what someone else already said',
        ],
      },
      {
        basic: 'put across',
        advanced: 'to communicate an idea clearly and effectively',
        wrong: [
          'to translate a message into another language',
          'to forward an email to the wrong recipient',
          'to misunderstand feedback from a manager',
          'to send a proposal without proofreading it',
        ],
      },
      {
        basic: 'get back to',
        advanced: 'to contact someone again with an answer later',
        wrong: [
          'to return to work after being absent',
          'to respond immediately to an urgent message',
          'to repeat information already shared earlier',
          'to copy a colleague into an email thread',
        ],
      },
      {
        basic: 'talk over',
        advanced: 'to discuss something thoroughly with someone',
        wrong: [
          'to speak loudly so others cannot be heard',
          'to end a conversation before it is finished',
          'to disagree openly with a manager\'s decision',
          'to send a voice message instead of a text',
        ],
      },
      {
        basic: 'go over',
        advanced: 'to review or explain something in detail',
        wrong: [
          'to exceed the time limit of a presentation',
          'to transfer a project to another team',
          'to skip a section of a report entirely',
          'to move past a difficult topic quickly',
        ],
      },
      {
        basic: 'run by',
        advanced: 'to tell someone about an idea to get their opinion',
        wrong: [
          'to quickly mention something in passing',
          'to present a completed project to the board',
          'to dismiss a colleague\'s suggestion politely',
          'to organise a meeting without notice',
        ],
      },
      {
        basic: 'follow through',
        advanced: 'to complete what you promised or started',
        wrong: [
          'to copy the approach used by a competitor',
          'to approve a plan without reviewing it fully',
          'to abandon a commitment when it gets difficult',
          'to pass a task on to a more senior person',
        ],
      },
      {
        basic: 'lay out',
        advanced: 'to explain or present information clearly',
        wrong: [
          'to rearrange the furniture in a meeting room',
          'to remove unnecessary data from a report',
          'to dismiss an idea during a brainstorm session',
          'to design a new template for presentations',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. PROBLEMS
  // ─────────────────────────────────────────
  {
    id: 'problems',
    name: 'Problems',
    verbs: [
      {
        basic: 'run into',
        advanced: 'to encounter a problem unexpectedly',
        wrong: [
          'to meet a colleague by coincidence outside work',
          'to exceed a project budget significantly',
          'to rush through a task without checking it',
          'to compete directly with a rival company',
        ],
      },
      {
        basic: 'fall behind',
        advanced: 'to make less progress than expected',
        wrong: [
          'to lose your position in a company hierarchy',
          'to support a colleague who is struggling',
          'to miss an important meeting without notice',
          'to disagree with a decision made by management',
        ],
      },
      {
        basic: 'break down',
        advanced: 'to stop working or to become overwhelmed',
        wrong: [
          'to reduce a complex task into smaller steps',
          'to end a partnership or business agreement',
          'to lose data due to a system error',
          'to fall behind on a project timeline',
        ],
      },
      {
        basic: 'fall through',
        advanced: 'to fail to happen as planned',
        wrong: [
          'to drop below the minimum standard required',
          'to leave a company without giving notice',
          'to miss a deadline by a significant amount',
          'to lose funding for an approved project',
        ],
      },
      {
        basic: 'deal with',
        advanced: 'to handle or manage a difficult situation',
        wrong: [
          'to negotiate a contract with a new client',
          'to avoid a problem by reassigning it',
          'to close a business deal successfully',
          'to report a colleague\'s behaviour to management',
        ],
      },
      {
        basic: 'cover up',
        advanced: 'to hide a mistake or bad situation',
        wrong: [
          'to protect a colleague from criticism',
          'to find a temporary solution to a problem',
          'to take responsibility for someone else\'s error',
          'to remove sensitive data from a document',
        ],
      },
      {
        basic: 'own up',
        advanced: 'to admit that you made a mistake',
        wrong: [
          'to take credit for a successful project',
          'to claim ownership of a new idea',
          'to purchase a stake in the company',
          'to accept a promotion with new responsibilities',
        ],
      },
      {
        basic: 'iron out',
        advanced: 'to resolve small problems or disagreements',
        wrong: [
          'to reject a proposal due to too many issues',
          'to smooth over differences using formal language',
          'to postpone resolving a conflict until later',
          'to remove wrinkles from the company policy',
        ],
      },
      {
        basic: 'fire back',
        advanced: 'to respond quickly and often aggressively',
        wrong: [
          'to dismiss an employee for poor performance',
          'to send an urgent reply to an email',
          'to reject a complaint made by a client',
          'to report bad behaviour to a supervisor',
        ],
      },
      {
        basic: 'work around',
        advanced: 'to find a way to avoid or bypass a problem',
        wrong: [
          'to collaborate with colleagues on a solution',
          'to schedule extra hours to meet a deadline',
          'to move your workspace to another location',
          'to revisit a problem after taking a break',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. PROGRESS
  // ─────────────────────────────────────────
  {
    id: 'progress',
    name: 'Progress',
    verbs: [
      {
        basic: 'move up',
        advanced: 'to advance to a higher position or level',
        wrong: [
          'to relocate to a different office or city',
          'to increase the budget for a project',
          'to transfer to a different department',
          'to improve the quality of your daily output',
        ],
      },
      {
        basic: 'build up',
        advanced: 'to develop or increase something over time',
        wrong: [
          'to construct a new office from scratch',
          'to strengthen a damaged work relationship',
          'to accumulate unpaid overtime hours',
          'to create a presentation from a template',
        ],
      },
      {
        basic: 'push forward',
        advanced: 'to continue making progress despite difficulties',
        wrong: [
          'to delay a project to allow more preparation',
          'to promote a team member ahead of schedule',
          'to move a deadline to an earlier date',
          'to prioritise one task over all others',
        ],
      },
      {
        basic: 'step up',
        advanced: 'to take on more responsibility or improve performance',
        wrong: [
          'to move to a physically higher floor in the office',
          'to increase the number of steps in a process',
          'to take a break after a period of hard work',
          'to climb the corporate ladder through networking',
        ],
      },
      {
        basic: 'pick up',
        advanced: 'to improve or increase in speed or quantity',
        wrong: [
          'to collect a document from a colleague',
          'to learn a new skill by attending a course',
          'to restart a project after a pause',
          'to take over someone else\'s responsibilities',
        ],
      },
      {
        basic: 'gain ground',
        advanced: 'to make progress and become more successful',
        wrong: [
          'to expand the company\'s physical workspace',
          'to acquire new office space in another city',
          'to recover from a significant business loss',
          'to increase market share through advertising',
        ],
      },
      {
        basic: 'power through',
        advanced: 'to continue working hard despite feeling tired',
        wrong: [
          'to use authority to get something done faster',
          'to rush through a task without being careful',
          'to motivate your team during a difficult period',
          'to increase energy by taking a short break',
        ],
      },
      {
        basic: 'scale up',
        advanced: 'to increase the size or scope of something',
        wrong: [
          'to reduce the complexity of a large project',
          'to measure the success of a completed task',
          'to divide a large project into smaller parts',
          'to review performance against set targets',
        ],
      },
      {
        basic: 'move on',
        advanced: 'to stop focusing on something and progress further',
        wrong: [
          'to change your career path entirely',
          'to transfer to a new office location',
          'to leave a meeting before it has ended',
          'to forget about a mistake and repeat it',
        ],
      },
      {
        basic: 'forge ahead',
        advanced: 'to continue confidently despite obstacles',
        wrong: [
          'to create a new strategy from scratch',
          'to build strong relationships with clients',
          'to rush a project without proper planning',
          'to take the lead in a competitive situation',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. LEAVING
  // ─────────────────────────────────────────
  {
    id: 'leaving',
    name: 'Leaving',
    verbs: [
      {
        basic: 'hand in your notice',
        advanced: 'to formally tell your employer you are leaving',
        wrong: [
          'to request a leave of absence from work',
          'to report a problem to your line manager',
          'to submit a complaint about the workplace',
          'to apply for a promotion within the company',
        ],
      },
      {
        basic: 'step down',
        advanced: 'to resign from a position of authority',
        wrong: [
          'to take a lower salary to keep your job',
          'to reduce your working hours voluntarily',
          'to move to a junior role within the company',
          'to pass leadership temporarily to a colleague',
        ],
      },
      {
        basic: 'move on',
        advanced: 'to leave a job and start something new',
        wrong: [
          'to return to a previous employer',
          'to accept a lateral transfer within the company',
          'to take extended leave for personal reasons',
          'to change your role without changing your employer',
        ],
      },
      {
        basic: 'wind down',
        advanced: 'to gradually reduce activity before stopping',
        wrong: [
          'to take a short break before a busy period',
          'to slow down your pace due to burnout',
          'to reduce team size at the end of a project',
          'to close the office early on a Friday',
        ],
      },
      {
        basic: 'clear out',
        advanced: 'to remove your belongings when leaving a place',
        wrong: [
          'to organise the office storage room',
          'to delete old files from a shared drive',
          'to cancel all upcoming meetings before leaving',
          'to clean a shared workspace after use',
        ],
      },
      {
        basic: 'sign off',
        advanced: 'to formally finish work or give final approval',
        wrong: [
          'to add your signature to a new contract',
          'to end a project without completing it',
          'to log out of all company systems',
          'to approve a document on behalf of someone else',
        ],
      },
      {
        basic: 'bow out',
        advanced: 'to leave a role or situation gracefully',
        wrong: [
          'to resign abruptly without giving notice',
          'to retire after reaching the age limit',
          'to lose your position due to poor performance',
          'to leave a project halfway through completion',
        ],
      },
      {
        basic: 'pass on',
        advanced: 'to transfer knowledge or responsibilities to someone else',
        wrong: [
          'to decline an offer or opportunity',
          'to share company news with your colleagues',
          'to forward an email to the entire team',
          'to reject a task that is outside your role',
        ],
      },
      {
        basic: 'clock out',
        advanced: 'to officially finish your working hours for the day',
        wrong: [
          'to leave a meeting before it has ended',
          'to take an unplanned break during work hours',
          'to record the time spent on a specific task',
          'to submit your timesheet at the end of the week',
        ],
      },
      {
        basic: 'phase out',
        advanced: 'to gradually stop using or doing something',
        wrong: [
          'to remove a team member from a project',
          'to introduce a new system step by step',
          'to reduce the number of meetings per week',
          'to retire a product from the market suddenly',
        ],
      },
    ],
  },
]
