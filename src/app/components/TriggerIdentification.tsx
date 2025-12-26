import { useState } from 'react';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

const triggerCategories = [
  {
    category: 'Emotional Triggers',
    triggers: [
      { name: 'Stress or Pressure', icon: '😰' },
      { name: 'Loneliness or Boredom', icon: '😔' },
      { name: 'Anxiety or Fear', icon: '😨' },
      { name: 'Anger or Frustration', icon: '😠' },
      { name: 'Sadness or Depression', icon: '😢' },
      { name: 'Celebrating or Feeling Happy', icon: '🎉' },
    ],
  },
  {
    category: 'Situational Triggers',
    triggers: [
      { name: 'After Work / End of Day', icon: '🕐' },
      { name: 'Social Events or Parties', icon: '🎊' },
      { name: 'Being at Bars or Restaurants', icon: '🍺' },
      { name: 'Weekends or Free Time', icon: '📅' },
      { name: 'Seeing Others Drink', icon: '👥' },
      { name: 'Specific Locations (home, etc.)', icon: '🏠' },
    ],
  },
];

export function TriggerIdentification() {
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  const toggleTrigger = (trigger: string) => {
    if (selectedTriggers.includes(trigger)) {
      setSelectedTriggers(selectedTriggers.filter(t => t !== trigger));
    } else {
      setSelectedTriggers([...selectedTriggers, trigger]);
    }
  };

  const handleComplete = () => {
    if (selectedTriggers.length > 0) {
      // Save to localStorage
      const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
      entries.push({
        emotion: 'Alcohol Addiction - Trigger Identification',
        response: `Identified Triggers:\n${selectedTriggers.map((t, i) => `${i + 1}. ${t}`).join('\n')}`,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('journalEntries', JSON.stringify(entries));
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <div className="text-center space-y-6">
        <CheckCircle className="w-24 h-24 mx-auto text-green-500" />
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Triggers Identified!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Awareness is the first step. Now that you know your triggers, you can prepare strategies for them.
        </p>
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-6 max-w-2xl mx-auto text-left">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Your Identified Triggers:</h3>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            {selectedTriggers.map((trigger, index) => (
              <div key={index} className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                <span>{trigger}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">What to Do With This Information:</h3>
          <div className="space-y-2 text-left text-gray-600 dark:text-gray-300">
            <p>✓ Plan ahead: If you know the trigger is coming, prepare an alternative</p>
            <p>✓ Avoid when possible: Remove yourself from triggering situations early on</p>
            <p>✓ Have a backup plan: Know what you'll do instead of drinking</p>
            <p>✓ Tell someone: Share your triggers with a trusted person for accountability</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Trigger Identification
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Understanding what triggers your drinking is essential for change. Select all that apply to you.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-6xl">🎯</div>

        {triggerCategories.map((category) => (
          <div
            key={category.category}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              {category.category}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {category.triggers.map((trigger) => (
                <button
                  key={trigger.name}
                  onClick={() => toggleTrigger(trigger.name)}
                  className={`flex items-center gap-3 p-4 rounded-lg transition-all text-left ${
                    selectedTriggers.includes(trigger.name)
                      ? 'bg-emerald-100 dark:bg-emerald-900/30 border-2 border-emerald-400 dark:border-emerald-500'
                      : 'bg-gray-50 dark:bg-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 border-2 border-transparent'
                  }`}
                >
                  <span className="text-3xl">{trigger.icon}</span>
                  <span className="text-gray-700 dark:text-gray-200 flex-1">{trigger.name}</span>
                  {selectedTriggers.includes(trigger.name) && (
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Important:</span> Triggers aren't excuses - they're information. 
            The more you understand what drives your drinking, the better you can prepare alternative responses.
          </p>
        </div>

        {selectedTriggers.length > 0 && (
          <div className="flex flex-col items-center gap-3">
            <p className="text-gray-600 dark:text-gray-400">
              {selectedTriggers.length} trigger{selectedTriggers.length !== 1 ? 's' : ''} identified
            </p>
            <Button
              onClick={handleComplete}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
            >
              Save My Triggers
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
