import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { CheckCircle } from 'lucide-react';

const replacementActions = [
  {
    id: 'water',
    name: 'Drink Cold Water',
    icon: '💧',
    description: 'Fill a glass with cold water and drink it slowly, focusing on the sensation.',
  },
  {
    id: 'gum',
    name: 'Chew Gum',
    icon: '🍬',
    description: 'Keep your mouth busy with sugar-free gum or mints.',
  },
  {
    id: 'walk',
    name: 'Walk or Stretch',
    icon: '🚶',
    description: 'Take a short walk or do some simple stretches to shift your focus.',
  },
  {
    id: 'movement',
    name: 'Light Physical Movement',
    icon: '🤸',
    description: 'Do jumping jacks, push-ups, or any movement that gets your body active.',
  },
];

export function ReplacementAction() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [reflection, setReflection] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    if (selectedAction && reflection.trim()) {
      // Save to localStorage
      const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
      entries.push({
        emotion: 'Smoking - Replacement Action',
        response: `Action chosen: ${replacementActions.find(a => a.id === selectedAction)?.name}\n\nReflection: ${reflection}`,
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
          Replacement Action Complete
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Excellent! You've replaced the urge with a healthier action. This is how you rewire your habits.
        </p>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Your Chosen Action:</h3>
          <div className="text-4xl mb-2">
            {replacementActions.find(a => a.id === selectedAction)?.icon}
          </div>
          <div className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
            {replacementActions.find(a => a.id === selectedAction)?.name}
          </div>
          <div className="text-left text-gray-600 dark:text-gray-300">
            <p className="font-medium mb-2">What you were trying to escape:</p>
            <p className="italic">"{reflection}"</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Each time you choose a replacement action instead of smoking, you're building new neural pathways. 
          It gets easier with practice.
        </p>
      </div>
    );
  }

  if (!selectedAction) {
    return (
      <div className="text-center space-y-8">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Choose a Replacement Action
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Instead of smoking, replace the habit with a healthier action. Choose what feels right for you right now.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {replacementActions.map((action) => (
            <button
              key={action.id}
              onClick={() => setSelectedAction(action.id)}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-400 transition-all hover:shadow-lg text-left"
            >
              <div className="text-5xl mb-3">{action.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {action.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {action.description}
              </p>
            </button>
          ))}
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">💡 Tip:</span> The key is to interrupt the automatic habit pattern. 
            Any healthy action works - the goal is to do something different.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Reflection Time
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          You've chosen: <span className="font-semibold">{replacementActions.find(a => a.id === selectedAction)?.name}</span>
        </p>
      </div>

      <div className="max-w-2xl mx-auto text-left space-y-6">
        <div className="text-center text-6xl mb-4">
          {replacementActions.find(a => a.id === selectedAction)?.icon}
        </div>

        <div>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">
            What urge am I trying to escape right now?
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            (e.g., stress, boredom, anxiety, social pressure, habit...)
          </p>
          <Textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="Write your thoughts here... Be honest with yourself."
            className="min-h-[150px] p-4 text-lg bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
          />
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
          <p className="text-gray-700 dark:text-gray-200">
            Understanding what triggers your smoking helps you address the root cause, not just the symptom.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <Button
            onClick={() => setSelectedAction(null)}
            variant="outline"
          >
            Choose Different Action
          </Button>
          <Button
            onClick={handleComplete}
            disabled={reflection.trim().length === 0}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
          >
            Complete Exercise
          </Button>
        </div>
      </div>
    </div>
  );
}
