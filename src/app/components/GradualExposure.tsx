import { useState } from 'react';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

const exposureLevels = [
  {
    level: 1,
    title: 'Very Low Pressure',
    examples: [
      'Make eye contact with a cashier',
      'Say "thank you" to a stranger',
      'Smile at someone passing by',
    ],
  },
  {
    level: 2,
    title: 'Low Pressure',
    examples: [
      'Ask a store employee for help',
      'Make small talk about the weather',
      'Compliment someone on something small',
    ],
  },
  {
    level: 3,
    title: 'Medium Pressure',
    examples: [
      'Introduce yourself to someone new',
      'Join a conversation in a group',
      'Share your opinion in a low-stakes discussion',
    ],
  },
  {
    level: 4,
    title: 'Higher Pressure',
    examples: [
      'Start a conversation with someone you admire',
      'Speak up in a meeting or class',
      'Attend a social event alone',
    ],
  },
];

export function GradualExposure() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [selectedAction, setSelectedAction] = useState<string>('');
  const [committed, setCommitted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleSelectAction = (level: number, action: string) => {
    setSelectedLevel(level);
    setSelectedAction(action);
  };

  const handleCommit = () => {
    if (selectedAction) {
      setCommitted(true);
    }
  };

  const handleComplete = () => {
    if (selectedAction) {
      // Save to localStorage
      const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
      entries.push({
        emotion: 'Shyness - Gradual Exposure',
        response: `Challenge Level: ${selectedLevel}\nAction Committed: ${selectedAction}`,
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
          Challenge Accepted!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          You've chosen your first gradual exposure challenge. Remember: it's about progress, not perfection.
        </p>
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Your Challenge:</h3>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">{selectedAction}</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Level {selectedLevel} - {exposureLevels[selectedLevel! - 1].title}</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Tips for Success:</h3>
          <div className="space-y-2 text-left text-gray-600 dark:text-gray-300">
            <p>✓ Do it within the next 24 hours while you have momentum</p>
            <p>✓ It's okay if it feels awkward - that means you're growing</p>
            <p>✓ Celebrate afterward, even if it didn't go perfectly</p>
            <p>✓ Repeat similar challenges until they feel easier</p>
          </div>
        </div>
      </div>
    );
  }

  if (committed) {
    return (
      <div className="text-center space-y-6">
        <div className="text-6xl">💪</div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Ready to Take the Challenge?
        </h2>
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Your Chosen Challenge:</h3>
          <p className="text-xl text-gray-700 dark:text-gray-200">{selectedAction}</p>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Remember: The goal isn't to be perfect. The goal is to practice feeling comfortable with discomfort.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => setCommitted(false)}
            variant="outline"
          >
            Choose Different Challenge
          </Button>
          <Button
            onClick={handleComplete}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
          >
            I'm Ready to Try This
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Gradual Exposure Practice
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Build confidence by starting with small, low-pressure social interactions and gradually increasing difficulty.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-6xl mb-4">🎯</div>

        <p className="text-md text-gray-600 dark:text-gray-400">
          Choose ONE challenge that feels slightly uncomfortable but doable:
        </p>

        <div className="grid gap-4">
          {exposureLevels.map((level) => (
            <div
              key={level.level}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 text-white font-bold">
                  {level.level}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {level.title}
                </h3>
              </div>
              <div className="space-y-2">
                {level.examples.map((example, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectAction(level.level, example)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedAction === example
                        ? 'bg-pink-100 dark:bg-pink-900/30 border-2 border-pink-400 dark:border-pink-500'
                        : 'bg-gray-50 dark:bg-gray-700 hover:bg-pink-50 dark:hover:bg-pink-900/20 border-2 border-transparent'
                    }`}
                  >
                    <p className="text-gray-700 dark:text-gray-200">{example}</p>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">How it works:</span> Start at a level that feels manageable. 
            As you succeed, your confidence grows and harder challenges become easier. This is how social anxiety decreases naturally.
          </p>
        </div>

        {selectedAction && (
          <Button
            onClick={handleCommit}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12"
          >
            Commit to This Challenge
          </Button>
        )}
      </div>
    </div>
  );
}
