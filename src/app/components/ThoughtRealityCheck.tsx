import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { CheckCircle } from 'lucide-react';

export function ThoughtRealityCheck() {
  const [situation, setSituation] = useState('');
  const [assumption, setAssumption] = useState('');
  const [facts, setFacts] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    if (situation.trim() && assumption.trim() && facts.trim()) {
      // Save to localStorage
      const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
      entries.push({
        emotion: 'Rejection Sensitivity - Reality Check',
        response: `Situation: ${situation}\n\nMy Assumption: ${assumption}\n\nActual Facts: ${facts}`,
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
          Reality Check Complete!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          You've separated facts from assumptions. This is a powerful skill for managing rejection sensitivity.
        </p>
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-lg p-6 max-w-2xl mx-auto text-left">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">The Situation:</h3>
              <p className="text-gray-600 dark:text-gray-300">{situation}</p>
            </div>
            <div className="border-t border-violet-200 dark:border-violet-700 pt-4">
              <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">What I Assumed:</h3>
              <p className="text-gray-600 dark:text-gray-300 italic">"{assumption}"</p>
            </div>
            <div className="border-t border-violet-200 dark:border-violet-700 pt-4">
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">The Actual Facts:</h3>
              <p className="text-gray-600 dark:text-gray-300">{facts}</p>
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Notice the difference? Facts are observable. Assumptions add meaning that may not be there.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Thought Reality Check
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          When you feel rejected, it's easy to jump to conclusions. Let's separate what actually happened from what you're assuming.
        </p>
      </div>

      <div className="max-w-2xl mx-auto text-left space-y-6">
        <div className="text-center text-6xl mb-4">🔍</div>

        <div>
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">
            What situation triggered your feelings?
          </label>
          <Textarea
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            placeholder="Describe what happened objectively (e.g., 'Friend didn't reply to my text for 2 days')"
            className="min-h-[100px] p-4 text-lg bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
          />
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">
            What are you assuming this means?
          </label>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            (Be honest about your fears and interpretations)
          </p>
          <Textarea
            value={assumption}
            onChange={(e) => setAssumption(e.target.value)}
            placeholder="e.g., 'They're mad at me' or 'They don't want to be my friend anymore'"
            className="min-h-[100px] p-4 text-lg bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
          />
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">
            What do you actually KNOW for certain?
          </label>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            (Only observable facts, no mind-reading)
          </p>
          <Textarea
            value={facts}
            onChange={(e) => setFacts(e.target.value)}
            placeholder="e.g., 'I sent a text. They haven't responded yet. That's all I know for sure.'"
            className="min-h-[100px] p-4 text-lg bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
          />
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Key insight:</span> Your assumptions feel real, but they're not facts. 
            There could be many other explanations (they're busy, forgot, phone died, etc.).
          </p>
        </div>

        <div className="flex justify-end pt-4">
          <Button
            onClick={handleComplete}
            disabled={!situation.trim() || !assumption.trim() || !facts.trim()}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
          >
            Complete Reality Check
          </Button>
        </div>
      </div>
    </div>
  );
}
