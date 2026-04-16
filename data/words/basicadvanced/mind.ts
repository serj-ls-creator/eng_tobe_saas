// ============================================================
// MIND — Basic → Advanced vocabulary
// Structure: 10 subcategories × 10 words
// Each word has: basic, advanced, transcription, wrong answers (4)
// Used in quiz: show basic word → pick correct advanced synonym
// ============================================================

export interface WordItem {
  basic: string
  advanced: string
  transcription: string
  wrong: [string, string, string, string]
}

export interface Subcategory {
  id: string
  name: string
  words: WordItem[]
}

export const MIND: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. LOGIC
  // ─────────────────────────────────────────
  {
    id: 'logic',
    name: 'Logic',
    words: [
      {
        basic: 'Makes sense',
        advanced: 'Coherent',
        transcription: '/kəʊˈhɪərənt/',
        wrong: ['Consistent', 'Compliant', 'Concurrent', 'Convergent'],
      },
      {
        basic: 'Does not make sense',
        advanced: 'Contradictory',
        transcription: '/ˌkɒntrəˈdɪktəri/',
        wrong: ['Compulsory', 'Conclusory', 'Compensatory', 'Contributory'],
      },
      {
        basic: 'Proof',
        advanced: 'Evidence',
        transcription: '/ˈevɪdəns/',
        wrong: ['Extension', 'Exception', 'Execution', 'Extraction'],
      },
      {
        basic: 'Main idea',
        advanced: 'Premise',
        transcription: '/ˈpremɪs/',
        wrong: ['Process', 'Protocol', 'Pattern', 'Pipeline'],
      },
      {
        basic: 'Conclusion',
        advanced: 'Inference',
        transcription: '/ˈɪnfərəns/',
        wrong: ['Instance', 'Interface', 'Iteration', 'Integration'],
      },
      {
        basic: 'Wrong thinking',
        advanced: 'Fallacy',
        transcription: '/ˈfæləsi/',
        wrong: ['Flexibility', 'Fluency', 'Frequency', 'Functionality'],
      },
      {
        basic: 'Step by step',
        advanced: 'Systematic',
        transcription: '/ˌsɪstəˈmætɪk/',
        wrong: ['Synchronised', 'Structured', 'Standardised', 'Sequential'],
      },
      {
        basic: 'Based on facts',
        advanced: 'Rational',
        transcription: '/ˈræʃənəl/',
        wrong: ['Reactive', 'Redundant', 'Repetitive', 'Restrictive'],
      },
      {
        basic: 'Not logical',
        advanced: 'Irrational',
        transcription: '/ɪˈræʃənəl/',
        wrong: ['Inefficient', 'Inconsistent', 'Incomplete', 'Inflexible'],
      },
      {
        basic: 'Clear thinking',
        advanced: 'Analytical',
        transcription: '/ˌænəˈlɪtɪkəl/',
        wrong: ['Automated', 'Aggregated', 'Allocated', 'Authenticated'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. LEARNING
  // ─────────────────────────────────────────
  {
    id: 'learning',
    name: 'Learning',
    words: [
      {
        basic: 'Learn',
        advanced: 'Acquire knowledge',
        transcription: '/əˈkwaɪər ˈnɒlɪdʒ/',
        wrong: ['Apply knowledge', 'Archive knowledge', 'Assess knowledge', 'Assign knowledge'],
      },
      {
        basic: 'Remember',
        advanced: 'Retain',
        transcription: '/rɪˈteɪn/',
        wrong: ['Redirect', 'Render', 'Replace', 'Restore'],
      },
      {
        basic: 'Practise',
        advanced: 'Reinforce',
        transcription: '/ˌriːɪnˈfɔːrs/',
        wrong: ['Redirect', 'Replicate', 'Restructure', 'Retrieve'],
      },
      {
        basic: 'Understand deeply',
        advanced: 'Internalise',
        transcription: '/ɪnˈtɜːrnəlaɪz/',
        wrong: ['Initialise', 'Integrate', 'Interpret', 'Iterate'],
      },
      {
        basic: 'Bad at something',
        advanced: 'Novice',
        transcription: '/ˈnɒvɪs/',
        wrong: ['Network', 'Node', 'Namespace', 'Notation'],
      },
      {
        basic: 'Good at something',
        advanced: 'Proficient',
        transcription: '/prəˈfɪʃənt/',
        wrong: ['Persistent', 'Prominent', 'Proactive', 'Progressive'],
      },
      {
        basic: 'Expert',
        advanced: 'Specialist',
        transcription: '/ˈspeʃəlɪst/',
        wrong: ['Supervisor', 'Subscriber', 'Supporter', 'Successor'],
      },
      {
        basic: 'Wrong answer',
        advanced: 'Misconception',
        transcription: '/ˌmɪskənˈsepʃən/',
        wrong: ['Mismatch', 'Miscalculation', 'Misalignment', 'Misallocation'],
      },
      {
        basic: 'Learn from mistake',
        advanced: 'Reflect',
        transcription: '/rɪˈflekt/',
        wrong: ['Redirect', 'Refresh', 'Reload', 'Render'],
      },
      {
        basic: 'Way of learning',
        advanced: 'Methodology',
        transcription: '/ˌmeθəˈdɒlədʒi/',
        wrong: ['Morphology', 'Modularity', 'Multiplicity', 'Mentality'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. PROBLEM SOLVING
  // ─────────────────────────────────────────
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    words: [
      {
        basic: 'Fix',
        advanced: 'Resolve',
        transcription: '/rɪˈzɒlv/',
        wrong: ['Restore', 'Restrict', 'Retrieve', 'Revert'],
      },
      {
        basic: 'Find the cause',
        advanced: 'Diagnose',
        transcription: '/ˌdaɪəɡˈnəʊz/',
        wrong: ['Distribute', 'Delegate', 'Decompose', 'Deactivate'],
      },
      {
        basic: 'Think of ideas',
        advanced: 'Brainstorm',
        transcription: '/ˈbreɪnstɔːrm/',
        wrong: ['Bootstrap', 'Bandwidth', 'Backend', 'Bytecode'],
      },
      {
        basic: 'Best answer',
        advanced: 'Optimal solution',
        transcription: '/ˈɒptɪməl səˈluːʃən/',
        wrong: ['Output solution', 'Original solution', 'Outlined solution', 'Organised solution'],
      },
      {
        basic: 'Work around',
        advanced: 'Alternative approach',
        transcription: '/ɔːlˈtɜːrnətɪv əˈprəʊtʃ/',
        wrong: ['Automated approach', 'Aggregated approach', 'Allocated approach', 'Accelerated approach'],
      },
      {
        basic: 'Test a solution',
        advanced: 'Validate',
        transcription: '/ˈvælɪdeɪt/',
        wrong: ['Visualise', 'Virtualise', 'Vectorise', 'Verify'],
      },
      {
        basic: 'Break into parts',
        advanced: 'Decompose',
        transcription: '/ˌdiːkəmˈpəʊz/',
        wrong: ['Decrypt', 'Decouple', 'Deploy', 'Debug'],
      },
      {
        basic: 'Make it simpler',
        advanced: 'Simplify',
        transcription: '/ˈsɪmplɪfaɪ/',
        wrong: ['Synchronise', 'Standardise', 'Streamline', 'Stabilise'],
      },
      {
        basic: 'Think ahead',
        advanced: 'Anticipate',
        transcription: '/ænˈtɪsɪpeɪt/',
        wrong: ['Authenticate', 'Automate', 'Aggregate', 'Allocate'],
      },
      {
        basic: 'Quick fix',
        advanced: 'Workaround',
        transcription: '/ˈwɜːrkəraʊnd/',
        wrong: ['Webhook', 'Workflow', 'Whiteboard', 'Wireframe'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. CREATIVITY
  // ─────────────────────────────────────────
  {
    id: 'creativity',
    name: 'Creativity',
    words: [
      {
        basic: 'New idea',
        advanced: 'Concept',
        transcription: '/ˈkɒnsept/',
        wrong: ['Context', 'Contract', 'Convert', 'Control'],
      },
      {
        basic: 'Original',
        advanced: 'Innovative',
        transcription: '/ˈɪnəveɪtɪv/',
        wrong: ['Integrated', 'Indexed', 'Injected', 'Isolated'],
      },
      {
        basic: 'Think differently',
        advanced: 'Think outside the box',
        transcription: '/θɪŋk ˌaʊtsaɪd ðə bɒks/',
        wrong: ['Think outside the build', 'Think outside the branch', 'Think outside the buffer', 'Think outside the bundle'],
      },
      {
        basic: 'Inspired',
        advanced: 'Motivated',
        transcription: '/ˈməʊtɪveɪtɪd/',
        wrong: ['Monitored', 'Modelled', 'Managed', 'Migrated'],
      },
      {
        basic: 'Copy someone',
        advanced: 'Imitate',
        transcription: '/ˈɪmɪteɪt/',
        wrong: ['Integrate', 'Initialise', 'Iterate', 'Inject'],
      },
      {
        basic: 'Make something new',
        advanced: 'Create',
        transcription: '/kriˈeɪt/',
        wrong: ['Cache', 'Clone', 'Compile', 'Configure'],
      },
      {
        basic: 'Artistic',
        advanced: 'Expressive',
        transcription: '/ɪkˈspresɪv/',
        wrong: ['Extensive', 'Exclusive', 'Expansive', 'Exhaustive'],
      },
      {
        basic: 'Big imagination',
        advanced: 'Visionary',
        transcription: '/ˈvɪʒəneri/',
        wrong: ['Voluntary', 'Vulnerable', 'Variable', 'Versatile'],
      },
      {
        basic: 'Rough version',
        advanced: 'Draft',
        transcription: '/drɑːft/',
        wrong: ['Debug', 'Deploy', 'Decrypt', 'Decouple'],
      },
      {
        basic: 'Make better',
        advanced: 'Refine',
        transcription: '/rɪˈfaɪn/',
        wrong: ['Redirect', 'Render', 'Refresh', 'Reload'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. FOCUS
  // ─────────────────────────────────────────
  {
    id: 'focus',
    name: 'Focus',
    words: [
      {
        basic: 'Pay attention',
        advanced: 'Concentrate',
        transcription: '/ˈkɒnsəntreɪt/',
        wrong: ['Configure', 'Compress', 'Compile', 'Convert'],
      },
      {
        basic: 'Distracted',
        advanced: 'Unfocused',
        transcription: '/ʌnˈfəʊkəst/',
        wrong: ['Unformatted', 'Unfiltered', 'Unfinished', 'Unlinked'],
      },
      {
        basic: 'Deep work',
        advanced: 'Immersed',
        transcription: '/ɪˈmɜːrst/',
        wrong: ['Improved', 'Included', 'Initiated', 'Integrated'],
      },
      {
        basic: 'Stay on task',
        advanced: 'Disciplined',
        transcription: '/ˈdɪsɪplɪnd/',
        wrong: ['Distributed', 'Displayed', 'Dispatched', 'Derived'],
      },
      {
        basic: 'Lose focus',
        advanced: 'Deviate',
        transcription: '/ˈdiːvieɪt/',
        wrong: ['Decrease', 'Delegate', 'Deploy', 'Discard'],
      },
      {
        basic: 'One thing at a time',
        advanced: 'Single-tasking',
        transcription: '/ˈsɪŋɡəl tɑːskɪŋ/',
        wrong: ['Single-threading', 'Single-sourcing', 'Single-tracking', 'Single-scripting'],
      },
      {
        basic: 'Hard to ignore',
        advanced: 'Compelling',
        transcription: '/kəmˈpelɪŋ/',
        wrong: ['Compiling', 'Configuring', 'Connecting', 'Converting'],
      },
      {
        basic: 'Block out noise',
        advanced: 'Filter distractions',
        transcription: '/ˈfɪltər dɪˈstrækʃənz/',
        wrong: ['Format distractions', 'Fetch distractions', 'Flag distractions', 'Fork distractions'],
      },
      {
        basic: 'Fully present',
        advanced: 'Mindful',
        transcription: '/ˈmaɪndfʊl/',
        wrong: ['Modular', 'Mapped', 'Managed', 'Merged'],
      },
      {
        basic: 'Flow state',
        advanced: 'Peak performance',
        transcription: '/piːk pəˈfɔːrməns/',
        wrong: ['Peak processing', 'Peak patching', 'Peak parsing', 'Peak proxying'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. PLANNING
  // ─────────────────────────────────────────
  {
    id: 'planning',
    name: 'Planning',
    words: [
      {
        basic: 'Plan',
        advanced: 'Strategy',
        transcription: '/ˈstrætədʒi/',
        wrong: ['Structure', 'Snapshot', 'Segment', 'Schema'],
      },
      {
        basic: 'Goal',
        advanced: 'Objective',
        transcription: '/əbˈdʒektɪv/',
        wrong: ['Override', 'Overlay', 'Overwrite', 'Overflow'],
      },
      {
        basic: 'Deadline',
        advanced: 'Milestone',
        transcription: '/ˈmaɪlstəʊn/',
        wrong: ['Middleware', 'Migration', 'Mapping', 'Metadata'],
      },
      {
        basic: 'Step',
        advanced: 'Phase',
        transcription: '/feɪz/',
        wrong: ['Patch', 'Plugin', 'Pointer', 'Proxy'],
      },
      {
        basic: 'Write down',
        advanced: 'Document',
        transcription: '/ˈdɒkjʊmənt/',
        wrong: ['Download', 'Decouple', 'Deploy', 'Debug'],
      },
      {
        basic: 'Check progress',
        advanced: 'Review',
        transcription: '/rɪˈvjuː/',
        wrong: ['Render', 'Reload', 'Redirect', 'Refresh'],
      },
      {
        basic: 'Change the plan',
        advanced: 'Adapt',
        transcription: '/əˈdæpt/',
        wrong: ['Archive', 'Automate', 'Aggregate', 'Allocate'],
      },
      {
        basic: 'Most important',
        advanced: 'Priority',
        transcription: '/praɪˈɒrɪti/',
        wrong: ['Prototype', 'Pipeline', 'Platform', 'Pattern'],
      },
      {
        basic: 'Long-term plan',
        advanced: 'Roadmap',
        transcription: '/ˈrəʊdmæp/',
        wrong: ['Rollback', 'Routing', 'Runtime', 'Registry'],
      },
      {
        basic: 'Backup plan',
        advanced: 'Contingency',
        transcription: '/kənˈtɪndʒənsi/',
        wrong: ['Consistency', 'Concurrency', 'Connectivity', 'Complexity'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 7. HABITS
  // ─────────────────────────────────────────
  {
    id: 'habits',
    name: 'Habits',
    words: [
      {
        basic: 'Daily habit',
        advanced: 'Routine',
        transcription: '/ruːˈtiːn/',
        wrong: ['Runtime', 'Rollback', 'Registry', 'Rendering'],
      },
      {
        basic: 'Bad habit',
        advanced: 'Detrimental pattern',
        transcription: '/ˌdetrɪˈmentəl ˈpætərn/',
        wrong: ['Deprecated pattern', 'Deployed pattern', 'Derived pattern', 'Defined pattern'],
      },
      {
        basic: 'Good habit',
        advanced: 'Constructive behaviour',
        transcription: '/kənˈstrʌktɪv bɪˈheɪvjər/',
        wrong: ['Connected behaviour', 'Compiled behaviour', 'Configured behaviour', 'Converted behaviour'],
      },
      {
        basic: 'Do it without thinking',
        advanced: 'Automatic response',
        transcription: '/ˌɔːtəˈmætɪk rɪˈspɒns/',
        wrong: ['Allocated response', 'Archived response', 'Audited response', 'Assigned response'],
      },
      {
        basic: 'Start a habit',
        advanced: 'Establish',
        transcription: '/ɪˈstæblɪʃ/',
        wrong: ['Execute', 'Evaluate', 'Extract', 'Export'],
      },
      {
        basic: 'Break a habit',
        advanced: 'Override',
        transcription: '/ˌəʊvərˈraɪd/',
        wrong: ['Overload', 'Overflow', 'Overwrite', 'Overlap'],
      },
      {
        basic: 'Do every day',
        advanced: 'Consistent',
        transcription: '/kənˈsɪstənt/',
        wrong: ['Concurrent', 'Compliant', 'Coherent', 'Convergent'],
      },
      {
        basic: 'Trigger for a habit',
        advanced: 'Cue',
        transcription: '/kjuː/',
        wrong: ['Cache', 'Call', 'Chunk', 'Cluster'],
      },
      {
        basic: 'Reward yourself',
        advanced: 'Positive reinforcement',
        transcription: '/ˈpɒzɪtɪv ˌriːɪnˈfɔːrsmənt/',
        wrong: ['Positive redirect', 'Positive render', 'Positive release', 'Positive reload'],
      },
      {
        basic: 'Track habits',
        advanced: 'Monitor progress',
        transcription: '/ˈmɒnɪtər ˈprəʊɡres/',
        wrong: ['Manage progress', 'Migrate progress', 'Map progress', 'Merge progress'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 8. GROWTH
  // ─────────────────────────────────────────
  {
    id: 'growth',
    name: 'Growth',
    words: [
      {
        basic: 'Get better',
        advanced: 'Evolve',
        transcription: '/ɪˈvɒlv/',
        wrong: ['Execute', 'Expand', 'Export', 'Extract'],
      },
      {
        basic: 'Level up',
        advanced: 'Elevate',
        transcription: '/ˈelɪveɪt/',
        wrong: ['Eliminate', 'Embed', 'Enable', 'Encode'],
      },
      {
        basic: 'Challenge yourself',
        advanced: 'Push boundaries',
        transcription: '/pʊʃ ˈbaʊndəriz/',
        wrong: ['Push builds', 'Push branches', 'Push buffers', 'Push bundles'],
      },
      {
        basic: 'Comfort zone',
        advanced: 'Familiar territory',
        transcription: '/fəˈmɪliər ˈterɪtəri/',
        wrong: ['Featured territory', 'Filtered territory', 'Fixed territory', 'Flagged territory'],
      },
      {
        basic: 'Learn from failure',
        advanced: 'Resilience',
        transcription: '/rɪˈzɪliəns/',
        wrong: ['Relevance', 'Reference', 'Redundance', 'Resistance'],
      },
      {
        basic: 'Open to change',
        advanced: 'Adaptable',
        transcription: '/əˈdæptəbəl/',
        wrong: ['Accessible', 'Accountable', 'Actionable', 'Achievable'],
      },
      {
        basic: 'Self-improvement',
        advanced: 'Personal development',
        transcription: '/ˈpɜːrsənəl dɪˈveləpmənt/',
        wrong: ['Personal deployment', 'Personal debugging', 'Personal decoding', 'Personal dispatching'],
      },
      {
        basic: 'Move forward',
        advanced: 'Progress',
        transcription: '/ˈprəʊɡres/',
        wrong: ['Process', 'Prototype', 'Pipeline', 'Platform'],
      },
      {
        basic: 'Know yourself',
        advanced: 'Self-awareness',
        transcription: '/self əˈweənəs/',
        wrong: ['Self-assignment', 'Self-archiving', 'Self-auditing', 'Self-allocation'],
      },
      {
        basic: 'Think big',
        advanced: 'Ambitious mindset',
        transcription: '/æmˈbɪʃəs ˈmaɪndset/',
        wrong: ['Automated mindset', 'Aggregated mindset', 'Allocated mindset', 'Authenticated mindset'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 9. LEADERSHIP
  // ─────────────────────────────────────────
  {
    id: 'leadership',
    name: 'Leadership',
    words: [
      {
        basic: 'Lead',
        advanced: 'Inspire',
        transcription: '/ɪnˈspaɪər/',
        wrong: ['Inject', 'Index', 'Initialise', 'Integrate'],
      },
      {
        basic: 'Give tasks',
        advanced: 'Delegate',
        transcription: '/ˈdelɪɡeɪt/',
        wrong: ['Deploy', 'Debug', 'Decrypt', 'Decouple'],
      },
      {
        basic: 'Make a decision',
        advanced: 'Executive decision',
        transcription: '/ɪɡˈzekjʊtɪv dɪˈsɪʒən/',
        wrong: ['Exported decision', 'Extended decision', 'Extracted decision', 'External decision'],
      },
      {
        basic: 'Motivate others',
        advanced: 'Empower',
        transcription: '/ɪmˈpaʊər/',
        wrong: ['Embed', 'Enable', 'Encode', 'Enforce'],
      },
      {
        basic: 'Take responsibility',
        advanced: 'Accountability',
        transcription: '/əˌkaʊntəˈbɪlɪti/',
        wrong: ['Accessibility', 'Adaptability', 'Availability', 'Agility'],
      },
      {
        basic: 'Work together',
        advanced: 'Collaborate',
        transcription: '/kəˈlæbəreɪt/',
        wrong: ['Calculate', 'Calibrate', 'Circulate', 'Communicate'],
      },
      {
        basic: 'Have a vision',
        advanced: 'Strategic thinker',
        transcription: '/strəˈtiːdʒɪk ˈθɪŋkər/',
        wrong: ['Structured thinker', 'Systematic thinker', 'Sequential thinker', 'Synchronised thinker'],
      },
      {
        basic: 'Trust the team',
        advanced: 'Empower others',
        transcription: '/ɪmˈpaʊər ˈʌðərz/',
        wrong: ['Embed others', 'Enable others', 'Encode others', 'Enforce others'],
      },
      {
        basic: 'Stay calm under pressure',
        advanced: 'Composed',
        transcription: '/kəmˈpəʊzd/',
        wrong: ['Compiled', 'Configured', 'Connected', 'Converted'],
      },
      {
        basic: 'Guide the team',
        advanced: 'Mentor',
        transcription: '/ˈmentɔːr/',
        wrong: ['Monitor', 'Manage', 'Migrate', 'Map'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 10. PHILOSOPHY
  // ─────────────────────────────────────────
  {
    id: 'philosophy',
    name: 'Philosophy',
    words: [
      {
        basic: 'Right and wrong',
        advanced: 'Ethics',
        transcription: '/ˈeθɪks/',
        wrong: ['Events', 'Endpoints', 'Entities', 'Exceptions'],
      },
      {
        basic: 'Meaning of life',
        advanced: 'Existential',
        transcription: '/ˌeɡzɪˈstenʃəl/',
        wrong: ['Exponential', 'Experimental', 'Extensional', 'Exceptional'],
      },
      {
        basic: 'Way of thinking',
        advanced: 'Mindset',
        transcription: '/ˈmaɪndset/',
        wrong: ['Module', 'Metadata', 'Middleware', 'Migration'],
      },
      {
        basic: 'Personal values',
        advanced: 'Principles',
        transcription: '/ˈprɪnsɪpəlz/',
        wrong: ['Processes', 'Protocols', 'Patterns', 'Pipelines'],
      },
      {
        basic: 'Life view',
        advanced: 'Worldview',
        transcription: '/ˈwɜːrldvjuː/',
        wrong: ['Workflow', 'Wireframe', 'Whiteboard', 'Webhook'],
      },
      {
        basic: 'Accept what is',
        advanced: 'Stoic',
        transcription: '/ˈstəʊɪk/',
        wrong: ['Static', 'Stateless', 'Streaming', 'Stacking'],
      },
      {
        basic: 'Question everything',
        advanced: 'Sceptical',
        transcription: '/ˈskeptɪkəl/',
        wrong: ['Sequential', 'Synchronised', 'Systematic', 'Structured'],
      },
      {
        basic: 'Live in the moment',
        advanced: 'Present-focused',
        transcription: '/ˈprezənt ˈfəʊkəst/',
        wrong: ['Process-focused', 'Protocol-focused', 'Pattern-focused', 'Pipeline-focused'],
      },
      {
        basic: 'Free will',
        advanced: 'Autonomy',
        transcription: '/ɔːˈtɒnəmi/',
        wrong: ['Automation', 'Authentication', 'Aggregation', 'Allocation'],
      },
      {
        basic: 'Inner peace',
        advanced: 'Equanimity',
        transcription: '/ˌekwəˈnɪmɪti/',
        wrong: ['Elasticity', 'Efficiency', 'Exclusivity', 'Extensibility'],
      },
    ],
  },
]
