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
];
