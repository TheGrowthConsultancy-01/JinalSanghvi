import pic1 from '../assets/pic1.jpeg';
import pic2 from '../assets/pic2.jpeg';
import pic3 from '../assets/pic3.jpeg';
import pic5 from '../assets/pic5.jpeg';
import pic7 from '../assets/pic7.jpeg';
import pic8 from '../assets/pic8.jpeg';

export interface BlogArticle {
  id: string;
  order: number;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  readTime: string;
  publishedDate: string;
  image: string;
  keyFramework?: {
    name: string;
    description: string;
    stages?: string[];
    points?: { title: string; desc: string }[];
  };
  intro: string[];
  sections: {
    heading: string;
    subheading?: string;
    content: string[];
    listItems?: string[];
    quote?: string;
    callout?: {
      title: string;
      text: string;
      type?: 'info' | 'reflection' | 'action';
    };
  }[];
  conclusion: string[];
  ctaText?: string;
  ctaLink?: string;
}

export const AUTHOR_INFO = {
  name: 'Jinal Sanghavi',
  role: 'Manifestation & Human Potential Expert',
  avatar: pic2,
  bio: "Jinal Sanghavi is a Manifestation & Human Potential Expert and an experienced relationship counsellor and trainer. Her approach to manifestation goes beyond visualisation and focuses on goal clarity, beliefs, emotional awareness, body/nervous-system awareness and intentional action.",
  links: [
    { label: 'About Jinal', href: '/#about' },
    { label: 'Manifestation Training', href: '/manifestation-training' },
    { label: 'Relationship Counselling', href: '/relationship-counselling' },
    { label: 'Contact', href: '/#book-session' }
  ]
};

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: '1',
    order: 1,
    slug: 'manifestation-is-more-than-visualisation',
    title: 'Manifestation Is More Than Visualisation',
    subtitle: 'Why meaningful change requires moving from passive wishing to clarity, emotional alignment, and intentional action.',
    excerpt: 'Many people think manifestation means closing your eyes, visualising the life you want and waiting for it to appear. But visualisation is only one part of a grounded six-stage transformational process.',
    category: 'Foundational Principle',
    categorySlug: 'manifestation',
    readTime: '4 min read',
    publishedDate: 'March 2025',
    image: pic1,
    keyFramework: {
      name: 'The 6-Stage Manifestation Pathway',
      description: 'A grounded sequence that shifts manifestation from daydreaming into conscious, embodied transformation:',
      stages: [
        '1. Goal Clarity',
        '2. Beliefs Examination',
        '3. Emotional Awareness',
        '4. Body / Nervous System',
        '5. Intentional Action',
        '6. Review & Recalibrate'
      ]
    },
    intro: [
      "Many people think manifestation means closing your eyes, visualising the life you want and waiting for it to appear. I see manifestation differently.",
      "Visualisation can be useful, but it is only one part of the process. If you want meaningful change, you first need clarity about what you are actually trying to create. Then you need to understand the beliefs, emotions and behaviours connected to that goal."
    ],
    sections: [
      {
        heading: 'Start With the Goal',
        content: [
          'Before asking, "How do I manifest this?", ask, "Do I genuinely want this?" Some goals are inherited from family expectations, comparison, social media or the belief that a particular achievement will finally make us feel worthy. A goal can look impressive and still not be personally meaningful.',
          'A useful goal is specific enough to guide action and meaningful enough to sustain your commitment.'
        ],
        callout: {
          title: 'Core Inquiry',
          text: 'Does this goal reflect what matters to your authentic self, or is it an inherited script of what society says success should look like?',
          type: 'reflection'
        }
      },
      {
        heading: 'Notice What Happens Inside You',
        content: [
          'Once you imagine the future you want, notice your emotional response. Do you feel excitement, resistance, fear, pressure or uncertainty? None of these reactions automatically means that your goal is wrong. They are information worth exploring.',
          'Your body can sometimes give you an early signal that a goal feels unfamiliar, threatening, unrealistic or simply not aligned with what you truly want. The useful question is not, "How do I force myself to feel positive?" It is, "What is this response telling me?"'
        ],
        quote: 'The useful question is never "How do I force myself to feel positive?" It is "What is this bodily response telling me?"'
      },
      {
        heading: 'Turn Intention Into Action',
        content: [
          'A goal becomes more useful when it is translated into behaviour. Psychological research on implementation intentions has found that specific if-then plans can help people move reliably from broad intentions to goal-directed action.',
          'For example: "If it is 10 a.m. on Monday, I will spend 30 minutes contacting potential clients." That is fundamentally different from simply saying, "I want more clients."'
        ],
        callout: {
          title: 'Implementation Formula',
          text: 'If [Time / Cue / Situation occurs], then I will [Specific Observable Behaviour].',
          type: 'action'
        }
      },
      {
        heading: 'My View',
        content: [
          'For me, manifestation is not passive wishing. It is a process of becoming clear about what you want, understanding yourself more deeply and then walking in the direction of that goal with intention.',
          'Visualise. Feel. Understand. Act. Review. Repeat.'
        ]
      }
    ],
    conclusion: [
      'If you want to learn this approach in a structured, compassionate environment, explore my dedicated coaching and workshops.'
    ],
    ctaText: 'Explore Manifestation Training',
    ctaLink: '/manifestation-training'
  },
  {
    id: '2',
    order: 2,
    slug: 'why-visualisation-alone-may-not-be-enough',
    title: 'Why Visualisation Alone May Not Be Enough',
    subtitle: 'The crucial distinction between imagining an outcome and building a grounded pathway toward it.',
    excerpt: 'Spending ten minutes every day picturing success feels motivating, but it doesn’t answer what to do when obstacles arrive. Discover why pairing mental contrasting with implementation plans creates real progress.',
    category: 'Goal Clarity & Action',
    categorySlug: 'goal-clarity',
    readTime: '5 min read',
    publishedDate: 'March 2025',
    image: pic3,
    intro: [
      'Visualisation is one of the most popular manifestation practices. But there is an important distinction between imagining an outcome and building a pathway toward it.',
      'Imagine saying, "I want to become financially successful," and spending ten minutes every day picturing a luxurious lifestyle. The image may feel motivating, but it does not answer the questions that determine what you do next.'
    ],
    sections: [
      {
        heading: 'Ask These Four Questions',
        content: [
          'To move beyond passive daydreams, anchor your aspiration into practical self-examination by working through these four questions:'
        ],
        listItems: [
          'What exactly do I want? (Define the outcome in specific, concrete terms)',
          'Why do I want it? (Identify the deeper value, feeling, or need driving it)',
          'What could get in my way? (Acknowledge internal doubts, time constraints, or external realities)',
          'What will I do when that obstacle appears? (Prepare an explicit action response in advance)'
        ],
        callout: {
          title: 'Mental Contrasting in Psychological Research',
          text: 'Research on mental contrasting combined with implementation intentions suggests that uniting a desired future with honest attention to obstacles and predetermined responses effectively supports goal attainment, without relying on false guarantees.',
          type: 'info'
        }
      },
      {
        heading: 'Visualise the Future — Then Come Back to Today',
        content: [
          'Use visualisation to clarify the direction. Then come back to the present moment and identify one behaviour that moves you closer.',
          'If your goal is to grow your business, the action might be making a sales call. If your goal is to improve your relationship, it might be having one difficult but honest conversation. If your goal is better health, it might be creating a realistic routine.',
          'The question I want you to ask is simple: "What does my desired future require me to do today?"'
        ],
        quote: 'What does my desired future require me to do today?'
      },
      {
        heading: 'Manifestation Needs Participation',
        content: [
          'I do not teach manifestation as a promise that the universe will deliver a particular outcome simply because you visualised it. I teach it as an intentional process in which your goals, beliefs, emotions and actions need to be examined together.',
          'Your future is not created by a vision board alone. It is shaped by the decisions you repeatedly make.'
        ]
      }
    ],
    conclusion: [
      'When you take responsibility for both the inner vision and the outer follow-through, manifestation becomes a practical craft rather than a fragile hope.'
    ],
    ctaText: 'Book a Personal Discovery Session',
    ctaLink: '/#book-session'
  },
  {
    id: '3',
    order: 3,
    slug: 'is-this-really-your-dream',
    title: 'Is This Really Your Dream?',
    subtitle: 'Uncovering the difference between authentic personal desire and conditioned societal expectations.',
    excerpt: 'We often set goals because they sound impressive to others. Explore four self-inquiry questions to determine whether your goals truly belong to you or to external conditioning.',
    category: 'Mindset & Self-Inquiry',
    categorySlug: 'mindset',
    readTime: '4 min read',
    publishedDate: 'March 2025',
    image: pic7,
    intro: [
      'One of the most important manifestation questions is also one of the simplest: "Is this actually my dream?"',
      'We often set goals because they sound successful. A bigger house. A particular income. A prestigious career. A perfect relationship. More followers. A certain lifestyle.',
      'But sometimes the goal belongs more to our conditioning than to us.'
    ],
    sections: [
      {
        heading: 'The Difference Between Wanting and Should-Wanting',
        content: [
          'There is a difference between "I want this" and "I think I should want this." The second can sound convincing because it may have been repeated by family, friends, society or social media for years.',
          'Before investing enormous emotional and physical energy into a goal, pause and ask yourself:'
        ],
        listItems: [
          'Would I still want this if nobody knew I achieved it?',
          'What do I believe this achievement will make me feel?',
          'Am I moving toward something meaningful or away from something uncomfortable?',
          'What part of this goal genuinely excites me?'
        ],
        callout: {
          title: 'The "Invisible" Test',
          text: 'If you could never post about it, boast about it, or tell anyone, would you still dedicate your years to building it?',
          type: 'reflection'
        }
      },
      {
        heading: 'Pay Attention to Your Response',
        content: [
          'When you imagine your desired future, notice what happens emotionally and physically. A sense of excitement, tension, fear or resistance does not provide a magical answer. But it can give you useful information to explore.',
          'You may discover that you do want the goal, but the path feels unfamiliar. Or you may discover that the goal itself was never truly yours.'
        ]
      },
      {
        heading: 'A Better Manifestation Practice',
        content: [
          'Instead of beginning with "What can I manifest?", begin with "What do I genuinely want to create?"',
          'Clarity changes everything. Once the goal is genuinely yours, you can build the beliefs, behaviours and action plans required to move toward it.',
          'Your dream should not only look good on paper. It should make sense to the person you are becoming.'
        ],
        quote: 'Your dream should not only look good on paper. It should make sense to the person you are becoming.'
      }
    ],
    conclusion: [
      'When your goals originate from genuine inner truth, motivation ceases to be a daily struggle and becomes a natural extension of who you are.'
    ],
    ctaText: 'Discover 1-on-1 Guidance',
    ctaLink: '/#counselling'
  },
  {
    id: '4',
    order: 4,
    slug: 'when-your-dream-feels-uncomfortable',
    title: 'When Your Dream Feels Uncomfortable',
    subtitle: "Why nervousness and resistance don't mean you are 'blocking' your desires, and how to build nervous system capacity.",
    excerpt: 'Achieving something you deeply want can often bring up unexpected fear, vulnerability, or resistance. Learn why this happens and how to take grounded micro-steps toward your vision.',
    category: 'Emotions & Body Awareness',
    categorySlug: 'emotions',
    readTime: '5 min read',
    publishedDate: 'March 2025',
    image: pic5,
    intro: [
      'Have you ever imagined achieving something you deeply want and then felt strangely uncomfortable?',
      'You may want the promotion, but imagining yourself in the role makes you nervous. You may want to become more visible, but the thought of being seen creates fear. You may want a healthier relationship, but emotional closeness feels unfamiliar.',
      'This does not automatically mean that you are "blocking your manifestation." It may simply mean that the future you are imagining is unfamiliar and brings up thoughts, emotions or physiological responses that deserve attention.'
    ],
    sections: [
      {
        heading: "Don't Fight the Response Immediately",
        content: [
          'Instead of saying, "I must think positive," become curious about your resistance. Ask yourself:'
        ],
        listItems: [
          'What exactly feels uncomfortable?',
          'What am I afraid might happen?',
          'What belief is being activated?',
          'What would make the next step feel manageable?'
        ],
        callout: {
          title: 'Shift From Force to Understanding',
          text: 'This approach shifts the objective from forcing yourself into artificial positivity to understanding your nervous system and choosing a practical, grounded next step.',
          type: 'reflection'
        }
      },
      {
        heading: 'Create Capacity, Then Take Action',
        content: [
          'If a goal feels overwhelming, make the next step smaller. You do not need to mentally live your entire future today. You need to identify the next behaviour that is realistic and meaningful.',
          'For example, someone who wants to become a confident public speaker does not need to start with a 1,000-person stage. The first step could be recording a two-minute video, speaking in a small group or practising one presentation.',
          'Intentional action creates evidence that you can move safely toward the future you imagine.'
        ],
        quote: 'Intentional action creates evidence that you can safely move toward the future you imagine.'
      },
      {
        heading: 'The Question I Prefer',
        content: [
          'Instead of asking, "Why can\'t I manifest this?", ask: "What would help me feel capable of taking the next step?"',
          'That question brings manifestation back into the real world—where goals become decisions, decisions become actions, and actions create learning.'
        ]
      }
    ],
    conclusion: [
      'Transformation does not require reckless leaps; it thrives on consistent, nervous-system-safe steps that expand your capacity over time.'
    ],
    ctaText: 'Explore Manifestation Training',
    ctaLink: '/manifestation-training'
  },
  {
    id: '5',
    order: 5,
    slug: 'manifestation-emotions-and-action-a-practical-framework',
    title: 'Manifestation, Emotions and Action: A Practical Framework',
    subtitle: 'A step-by-step roadmap for harmonizing emotional awareness, cognitive beliefs, and structured implementation intentions into everyday progress.',
    excerpt: "Emotions aren't obstacles that always need to be eliminated. Discover a grounded 7-step process that uses emotional data to clarify goals, design if-then plans, and take consistent intentional action.",
    category: 'Practical Framework',
    categorySlug: 'frameworks',
    readTime: '6 min read',
    publishedDate: 'March 2025',
    image: pic8,
    keyFramework: {
      name: 'The 7-Step Practical Framework',
      description: 'The step-by-step methodology taught by Jinal Sanghavi for conscious transformation:',
      points: [
        { title: 'Step 1: Define the Goal', desc: 'Write the goal in clear, observable terms. Avoid vague statements such as "I want a better life." Ask what "better" actually means in daily reality.' },
        { title: 'Step 2: Understand the Meaning', desc: 'Why is this goal important? What will achieving it mean to you? What need, value or aspiration sits underneath it?' },
        { title: 'Step 3: Notice the Emotional Response', desc: 'Imagine moving toward the goal. What emotions appear? Excitement? Fear? Doubt? Pressure? Curiosity? Don\'t judge the response. Observe it.' },
        { title: 'Step 4: Identify the Internal Pattern', desc: 'Ask what belief or assumption may be connected to the emotion. For example: "If I become successful, people will judge me," or "If I become visible, I will be criticised."' },
        { title: 'Step 5: Create an If-Then Plan', desc: 'Turn intention into a specific response: "If X happens, then I will do Y." Implementation-intention research supports this planning method to bridge intent and execution.' },
        { title: 'Step 6: Take the Next Action', desc: 'Do not wait until you feel completely ready. Choose an action that is challenging enough to move you forward and realistic enough that you will actually do it.' },
        { title: 'Step 7: Review and Recalibrate', desc: 'Ask what worked, what did not and what you learned. Manifestation should not be treated as a rigid formula. Your goal may become clearer as you act.' }
      ]
    },
    intro: [
      'Your emotions are not obstacles that always need to be eliminated. They can provide information about what matters to you, what you perceive as threatening and what may require attention. Research on emotion and goal pursuit supports the broader idea that emotions can influence goal-directed behaviour, although different emotions can have different effects depending on the situation.',
      'This is why I include emotional awareness in my approach to manifestation.'
    ],
    sections: [
      {
        heading: 'The 7-Step Manifestation Framework',
        content: [
          'Follow this sequence whenever you set a new aspiration or find yourself feeling stuck in your current journey:'
        ],
        listItems: [
          'Step 1: Define the Goal — Write the goal in clear, observable terms. Avoid vague statements such as "I want a better life." Ask what "better" actually means.',
          'Step 2: Understand the Meaning — Why is this goal important? What will achieving it mean to you? What need, value or aspiration sits underneath it?',
          'Step 3: Notice the Emotional Response — Imagine moving toward the goal. What emotions appear? Excitement? Fear? Doubt? Pressure? Curiosity? Don\'t judge the response. Observe it.',
          'Step 4: Identify the Internal Pattern — Ask what belief or assumption may be connected to the emotion. For example: "If I become successful, people will judge me," or "If I become visible, I will be criticised." These beliefs influence behaviour and deserve examination.',
          'Step 5: Create an If-Then Plan — Turn intention into a specific response: "If X happens, then I will do Y." Implementation-intention research has repeatedly examined this kind of planning as a way to support goal-directed action.',
          'Step 6: Take the Next Action — Do not wait until you feel completely ready. Choose an action that is challenging enough to move you forward and realistic enough that you will actually do it.',
          'Step 7: Review and Recalibrate — Ask what worked, what did not and what you learned. Manifestation should not be treated as a rigid formula. Your goal may become clearer as you act.'
        ],
        callout: {
          title: 'Evidence-Informed Goal Pursuit',
          text: 'Goal-setting and implementation-intention research supports the value of translating goals into specific action plans, but it does not establish that visualisation or manifestation can guarantee external outcomes.',
          type: 'info'
        }
      },
      {
        heading: 'My Manifestation Philosophy',
        content: [
          'Manifestation, for me, is not about sitting back and waiting for life to change. It is about becoming conscious of what you want, understanding what happens within you when you move toward it, and taking intentional steps in that direction.',
          'The future may not unfold exactly as you imagined. But your clarity, choices and actions can change the direction in which your life is moving.'
        ],
        quote: 'The future may not unfold exactly as you imagined. But your clarity, choices and actions can change the direction in which your life is moving.'
      }
    ],
    conclusion: [
      'Begin by choosing one goal today, noticing your emotional signals, and designing one specific If-Then response to take your first intentional step.'
    ],
    ctaText: 'Start Manifestation Training Today',
    ctaLink: '/manifestation-training'
  }
];

