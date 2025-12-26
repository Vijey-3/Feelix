import { useState } from 'react';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

const criticalThoughts = [
  {
    critical: "I'm so awkward. Everyone thinks I'm weird.",
    compassionate: "I'm learning to be more comfortable in social situations. Everyone feels awkward sometimes.",
  },
  {
    critical: "I always say the wrong thing. I'm terrible at conversations.",
    compassionate: "I'm still developing my social skills. It's okay to make mistakes - that's how I learn.",
  },
  {
    critical: "People probably don't want to talk to me.",
    compassionate: "I deserve connection just like anyone else. Some people will enjoy talking to me.",
  },
  {
    critical: "I should be more confident by now. What's wrong with me?",
    compassionate: "Building confidence takes time. I'm making progress at my own pace.",
  },
  {
    critical: "Everyone else finds socializing so easy. I'm the only one struggling.",
    compassionate: "Many people struggle with shyness - I'm not alone. Everyone has different strengths.",
  },
];

export function SelfCompassion() {
  const [selectedPairs, setSelectedPairs] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  const togglePair = (index: number) => {
    if (selectedPairs.includes(index)) {
      setSelectedPairs(selectedPairs.filter(i => i !== index));
    } else {
      setSelectedPairs([...selectedPairs, index]);
    }
  };

  const handleComplete = () => {
    if (selectedPairs.length > 0) {
      // Save to localStorage
      const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
      entries.push({
        emotion: 'Shyness - Self-Compassion Practice',
        response: `Practiced Reframing:\n${selectedPairs.map(i => 
          `From: "${criticalThoughts[i].critical}"\nTo: "${criticalThoughts[i].compassionate}"`
        ).join('\n\n')}`,
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
          Self-Compassion Practiced!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          You've practiced replacing self-criticism with compassionate self-talk. This is a powerful skill for building confidence.
        </p>
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-6 max-w-2xl mx-auto text-left">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Your Compassionate Reframes:</h3>
          <div className="space-y-4">
            {selectedPairs.map((index) => (
              <div key={index} className="border-l-4 border-pink-400 dark:border-pink-500 pl-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm line-through mb-2">
                  {criticalThoughts[index].critical}
                </p>
                <p className="text-gray-700 dark:text-gray-200 font-medium">
                  {criticalThoughts[index].compassionate}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Practice daily:</span> When you notice self-critical thoughts, 
            pause and ask: "What would I say to a friend in this situation?"
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Self-Compassion Exercise
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Self-criticism increases anxiety. Let's replace harsh self-talk with compassionate, realistic thoughts.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-6xl">💝</div>

        <p className="text-md text-gray-600 dark:text-gray-400">
          Select the reframes that resonate with you:
        </p>

        <div className="space-y-4">
          {criticalThoughts.map((thought, index) => (
            <button
              key={index}
              onClick={() => togglePair(index)}
              className={`w-full text-left p-6 rounded-lg transition-all ${
                selectedPairs.includes(index)
                  ? 'bg-pink-100 dark:bg-pink-900/30 border-2 border-pink-400 dark:border-pink-500'
                  : 'bg-white dark:bg-gray-800 hover:bg-pink-50 dark:hover:bg-pink-900/20 border-2 border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-red-500 dark:text-red-400 mb-1">
                    ❌ Self-Critical:
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 line-through italic">
                    "{thought.critical}"
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">
                    ✓ Self-Compassionate:
                  </p>
                  <p className="text-gray-800 dark:text-gray-100 font-medium">
                    "{thought.compassionate}"
                  </p>
                </div>
              </div>
              {selectedPairs.includes(index) && (
                <div className="mt-4 flex items-center justify-end">
                  <CheckCircle className="h-5 w-5 text-pink-500" />
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Why this works:</span> Self-compassion doesn't mean lowering standards. 
            It means treating yourself with the same kindness you'd offer a good friend, which actually increases confidence.
          </p>
        </div>

        {selectedPairs.length > 0 && (
          <div className="flex flex-col items-center gap-3">
            <p className="text-gray-600 dark:text-gray-400">
              {selectedPairs.length} reframe{selectedPairs.length !== 1 ? 's' : ''} selected
            </p>
            <Button
              onClick={handleComplete}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
            >
              Save My Reframes
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
