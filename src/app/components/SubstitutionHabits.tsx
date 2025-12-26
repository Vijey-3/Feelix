import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { CheckCircle } from 'lucide-react';

const substitutionOptions = [
  {
    category: 'Physical Alternatives',
    options: [
      { name: 'Go for a walk or run', icon: '🏃' },
      { name: 'Do a workout or yoga', icon: '🧘' },
      { name: 'Take a cold shower', icon: '🚿' },
      { name: 'Drink sparkling water or tea', icon: '🥤' },
    ],
  },
  {
    category: 'Social Alternatives',
    options: [
      { name: 'Call a supportive friend', icon: '📞' },
      { name: 'Attend an AA/support meeting', icon: '👥' },
      { name: 'Join a hobby or interest group', icon: '🎨' },
      { name: 'Volunteer or help someone', icon: '🤝' },
    ],
  },
  {
    category: 'Relaxation Alternatives',
    options: [
      { name: 'Practice meditation or breathing', icon: '🧘' },
      { name: 'Listen to calming music', icon: '🎵' },
      { name: 'Take a bath', icon: '🛁' },
      { name: 'Read a book or watch something', icon: '📚' },
    ],
  },
  {
    category: 'Distraction Alternatives',
    options: [
      { name: 'Play a game or puzzle', icon: '🎮' },
      { name: 'Clean or organize something', icon: '🧹' },
      { name: 'Work on a project or hobby', icon: '🔨' },
      { name: 'Cook a healthy meal', icon: '👨‍🍳' },
    ],
  },
];

export function SubstitutionHabits() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [personalPlan, setPersonalPlan] = useState('');
  const [completed, setCompleted] = useState(false);

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(o => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleComplete = () => {
    if (selectedOptions.length > 0 || personalPlan.trim()) {
      // Save to localStorage
      const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
      entries.push({
        emotion: 'Alcohol Addiction - Substitution Habits',
        response: `Chosen Alternatives:\n${selectedOptions.map((o, i) => `${i + 1}. ${o}`).join('\n')}\n\nPersonal Plan:\n${personalPlan || 'None added'}`,
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
          Substitution Plan Created!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          You've built a toolkit of healthy alternatives. When a craving hits, you now have options.
        </p>
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-6 max-w-2xl mx-auto text-left">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Your Substitution Toolkit:</h3>
          <div className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
            {selectedOptions.map((option, index) => (
              <div key={index} className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2">✓</span>
                <span>{option}</span>
              </div>
            ))}
          </div>
          {personalPlan && (
            <div className="border-t border-emerald-200 dark:border-emerald-700 pt-4">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Your Personal Plan:</h3>
              <p className="text-gray-600 dark:text-gray-300 italic">{personalPlan}</p>
            </div>
          )}
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Making It Work:</h3>
          <div className="space-y-2 text-left text-gray-600 dark:text-gray-300">
            <p>✓ Keep this list where you can see it (phone, fridge, etc.)</p>
            <p>✓ Try the first alternative immediately when a craving hits</p>
            <p>✓ If one doesn't work, try another - don't give up</p>
            <p>✓ Notice which alternatives work best for different triggers</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Substitution Habits
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Replace the drinking habit with healthier alternatives. Select activities you can do instead.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-6xl">🔄</div>

        {substitutionOptions.map((category) => (
          <div
            key={category.category}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              {category.category}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {category.options.map((option) => (
                <button
                  key={option.name}
                  onClick={() => toggleOption(option.name)}
                  className={`flex items-center gap-3 p-4 rounded-lg transition-all text-left ${
                    selectedOptions.includes(option.name)
                      ? 'bg-emerald-100 dark:bg-emerald-900/30 border-2 border-emerald-400 dark:border-emerald-500'
                      : 'bg-gray-50 dark:bg-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 border-2 border-transparent'
                  }`}
                >
                  <span className="text-3xl">{option.icon}</span>
                  <span className="text-gray-700 dark:text-gray-200 flex-1">{option.name}</span>
                  {selectedOptions.includes(option.name) && (
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">
            Add Your Own Substitution Plan (Optional)
          </label>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            What specific action will you take when you feel the urge to drink?
          </p>
          <Textarea
            value={personalPlan}
            onChange={(e) => setPersonalPlan(e.target.value)}
            placeholder="e.g., 'I'll call my sponsor, then go to the gym' or 'I'll make herbal tea and journal for 10 minutes'"
            className="min-h-[100px] p-4 text-lg bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
          />
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Why substitution works:</span> Your brain wants the reward alcohol provides 
            (stress relief, relaxation, etc.). These alternatives provide healthier rewards without the harm.
          </p>
        </div>

        {(selectedOptions.length > 0 || personalPlan.trim()) && (
          <div className="flex flex-col items-center gap-3">
            <p className="text-gray-600 dark:text-gray-400">
              {selectedOptions.length} alternative{selectedOptions.length !== 1 ? 's' : ''} selected
            </p>
            <Button
              onClick={handleComplete}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
            >
              Save My Plan
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
