export interface Emotion {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  triggers: string[];
  symptoms: string[];
  copingStrategies: string[];
  breathingPattern?: {
    inhale: number;
    hold: number;
    exhale: number;
    cycles: number;
  };
}

export const emotions: Emotion[] = [
  {
    id: 'anger',
    name: 'Anger',
    description: 'Feeling overwhelmed by frustration or rage',
    color: 'from-red-400 to-orange-400',
    icon: '😤',
    triggers: [
      'Feeling disrespected or wronged',
      'Unmet expectations',
      'Injustice or unfair treatment',
      'Feeling powerless or out of control',
    ],
    symptoms: [
      'Increased heart rate and blood pressure',
      'Tense muscles',
      'Clenched jaw or fists',
      'Feeling hot or flushed',
      'Racing thoughts',
    ],
    copingStrategies: [
      'Practice controlled breathing to calm your nervous system',
      'Use physical grounding to release tension',
      'Express feelings through journaling',
      'Take a timeout from the triggering situation',
      'Engage in physical exercise to release energy',
    ],
    breathingPattern: {
      inhale: 4,
      hold: 4,
      exhale: 6,
      cycles: 6,
    },
  },
  {
    id: 'overthinking',
    name: 'Overthinking',
    description: 'Feeling overwhelmed by endless thoughts',
    color: 'from-blue-400 to-cyan-400',
    icon: '🤯',
    triggers: [
      'Uncertainty about the future',
      'Past mistakes or regrets',
      'Decision-making pressure',
      'Fear of judgment',
    ],
    symptoms: [
      'Mental exhaustion',
      'Difficulty concentrating',
      'Sleep problems',
      'Physical tension',
      'Feeling stuck or paralyzed',
    ],
    copingStrategies: [
      'Practice thought-interrupt breathing',
      'Use grounding exercises to return to the present',
      'Challenge negative thought patterns',
      'Set a "worry time" limit',
      'Take small, actionable steps instead of planning everything',
    ],
    breathingPattern: {
      inhale: 5,
      hold: 0,
      exhale: 7,
      cycles: 10,
    },
  },
  {
    id: 'smoking',
    name: 'Smoking Addiction',
    description: 'Dealing with cravings and urges to smoke',
    color: 'from-gray-400 to-slate-400',
    icon: '🚬',
    triggers: [
      'Stress or anxiety',
      'Social situations',
      'After meals or with coffee',
      'Boredom or idle time',
      'Environmental cues (seeing others smoke)',
    ],
    symptoms: [
      'Intense cravings',
      'Restlessness and irritability',
      'Difficulty concentrating',
      'Physical tension',
      'Preoccupation with smoking',
    ],
    copingStrategies: [
      'Practice urge surfing - observe cravings without acting',
      'Use the delay technique - wait 10 minutes',
      'Replace the habit with a healthier action',
      'Avoid triggers when possible',
      'Remember that cravings peak and pass like waves',
    ],
    breathingPattern: {
      inhale: 4,
      hold: 2,
      exhale: 6,
      cycles: 8,
    },
  },
  {
    id: 'procrastination',
    name: 'Procrastination',
    description: 'Repeated delay of important tasks despite knowing the consequences',
    color: 'from-yellow-400 to-amber-400',
    icon: '⏰',
    triggers: [
      'Fear of failure or imperfection',
      'Feeling overwhelmed by task size',
      'Lack of clear starting point',
      'Distractions in environment',
      'Low motivation or energy',
    ],
    symptoms: [
      'Guilt and self-criticism',
      'Increased stress as deadlines approach',
      'Last-minute rushing',
      'Avoidance behaviors',
      'Difficulty starting tasks',
    ],
    copingStrategies: [
      'Break tasks into tiny, manageable steps',
      'Use the 2-minute rule to overcome starting resistance',
      'Track progress visually to build momentum',
      'Remove distractions from your environment',
      'Focus on starting, not perfecting',
    ],
    breathingPattern: {
      inhale: 4,
      hold: 4,
      exhale: 4,
      cycles: 5,
    },
  },
  {
    id: 'shyness',
    name: 'Shyness',
    description: 'Discomfort or inhibition in social situations',
    color: 'from-pink-400 to-rose-400',
    icon: '😊',
    triggers: [
      'Meeting new people',
      'Being the center of attention',
      'Fear of judgment or embarrassment',
      'Unfamiliar social settings',
      'Speaking up in groups',
    ],
    symptoms: [
      'Self-consciousness',
      'Physical tension or blushing',
      'Avoidance of social situations',
      'Difficulty making eye contact',
      'Racing heart in social moments',
    ],
    copingStrategies: [
      'Practice gradual exposure in low-pressure situations',
      'Prepare conversation starters in advance',
      'Use posture and breathing to reduce physical anxiety',
      'Replace self-criticism with compassionate self-talk',
      'Remember that others are focused on themselves too',
    ],
    breathingPattern: {
      inhale: 4,
      hold: 2,
      exhale: 6,
      cycles: 6,
    },
  },
  {
    id: 'rejection',
    name: 'Rejection Sensitivity',
    description: 'Intense emotional reactions to perceived criticism or rejection',
    color: 'from-violet-400 to-purple-400',
    icon: '💔',
    triggers: [
      'Perceived criticism or negative feedback',
      'Ambiguous social cues',
      'Delayed responses to messages',
      'Changes in tone or behavior from others',
      'Past experiences of rejection',
    ],
    symptoms: [
      'Intense emotional reactions',
      'Overthinking interactions',
      'Fear of abandonment',
      'Defensive or withdrawn behavior',
      'Physical discomfort or anxiety',
    ],
    copingStrategies: [
      'Check the facts vs. assumptions',
      'Label emotions to reduce their intensity',
      'Delay responses when feeling triggered',
      'Reframe situations from alternative perspectives',
      'Practice self-validation independent of others',
    ],
    breathingPattern: {
      inhale: 5,
      hold: 3,
      exhale: 7,
      cycles: 7,
    },
  },
  {
    id: 'alcohol',
    name: 'Alcohol Addiction',
    description: 'Pattern of reliance on alcohol as a coping mechanism',
    color: 'from-emerald-400 to-teal-400',
    icon: '🍷',
    triggers: [
      'Stress or emotional pain',
      'Social pressure or celebrations',
      'Habitual routines (after work, weekends)',
      'Boredom or loneliness',
      'Environmental cues (bars, events)',
    ],
    symptoms: [
      'Strong cravings for alcohol',
      'Loss of control over drinking',
      'Physical dependence symptoms',
      'Neglecting responsibilities',
      'Using alcohol to cope with emotions',
    ],
    copingStrategies: [
      'Identify your specific triggers',
      'Practice urge surfing when cravings arise',
      'Replace drinking routines with healthier habits',
      'Set short-term achievable goals',
      'Build accountability and support systems',
    ],
    breathingPattern: {
      inhale: 4,
      hold: 4,
      exhale: 6,
      cycles: 8,
    },
  },
];