import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { CheckCircle } from 'lucide-react';

export function ReframingPractice() {
  const [situation, setSituation] = useState('');
  const [initialInterpretation, setInitialInterpretation] = useState('');
  const [alternativeInterpretations, setAlternativeInterpretations] = useState(['', '', '']);
  const [completed, setCompleted] = useState(false);

  const updateAlternative = (index: number, value: string) => {
    const newAlternatives = [...alternativeInterpretations];
    newAlternatives[index] = value;
    setAlternativeInterpretations(newAlternatives);
  };

  const handleComplete = () => {
    if (situation.trim() && initialInterpretation.trim() && alternativeInterpretations.some(a => a.trim())) {
      // Save to localStorage
      const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
      entries.push({
        emotion: 'Rejection Sensitivity - Reframing Practice',
        response: `Situation: ${situation}\n\nInitial Interpretation: ${initialInterpretation}\n\nAlternative Views:\n${alternativeInterpretations.filter(a => a.trim()).map((a, i) => `${i + 1}. ${a}`).join('\n')}`,
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
          Reframing Complete!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          You've practiced seeing the situation from multiple perspectives. This flexibility is key to resilience.
        </p>
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-lg p-6 max-w-2xl mx-auto text-left">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">The Situation:</h3>
              <p className="text-gray-600 dark:text-gray-300">{situation}</p>
            </div>
            <div className="border-t border-violet-200 dark:border-violet-700 pt-4">
              <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">Your First Interpretation:</h3>
              <p className="text-gray-600 dark:text-gray-300 italic">"{initialInterpretation}"</p>
            </div>
            <div className="border-t border-violet-200 dark:border-violet-700 pt-4">
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Alternative Perspectives:</h3>
              <div className="space-y-2">
                {alternativeInterpretations.filter(a => a.trim()).map((alt, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">{index + 1}.</span>
                    <span className="text-gray-600 dark:text-gray-300">{alt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Remember: Your first interpretation is just ONE way to see it, not THE way. Truth often lies somewhere in the middle.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Reframing Practice
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          When rejection sensitivity kicks in, we see situations through a negative lens. Let's practice seeing other possibilities.
        </p>
      </div>

      <div className="max-w-2xl mx-auto text-left space-y-6">
        <div className="text-center text-6xl mb-4">🔄</div>

        <div>
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">
            What situation are you interpreting negatively?
          </label>
          <Textarea
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            placeholder="Describe what happened (e.g., 'My boss gave feedback on my work')"
            className="min-h-[100px] p-4 text-lg bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
          />
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">
            What's your automatic interpretation?
          </label>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            (Your first, most negative take on the situation)
          </p>
          <Textarea
            value={initialInterpretation}
            onChange={(e) => setInitialInterpretation(e.target.value)}
            placeholder="e.g., 'They think I'm incompetent and want to fire me'"
            className="min-h-[80px] p-4 text-lg bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
          />
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">
            What are 3 other ways to interpret this?
          </label>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            (Think: What would a friend say? What's the most neutral view? What's the most positive view?)
          </p>
          <div className="space-y-3">
            {alternativeInterpretations.map((alt, index) => (
              <div key={index}>
                <Textarea
                  value={alt}
                  onChange={(e) => updateAlternative(index, e.target.value)}
                  placeholder={
                    index === 0
                      ? "Alternative 1 (e.g., 'They're trying to help me improve')"
                      : index === 1
                      ? "Alternative 2 (e.g., 'This is normal feedback, not personal')"
                      : "Alternative 3 (e.g., 'They trust me enough to invest time in my growth')"
                  }
                  className="min-h-[80px] p-4 bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">The goal isn't to be overly positive.</span> It's to recognize 
            that your first interpretation might not be the most accurate one. Other perspectives exist.
          </p>
        </div>

        <div className="flex justify-end pt-4">
          <Button
            onClick={handleComplete}
            disabled={!situation.trim() || !initialInterpretation.trim() || !alternativeInterpretations.some(a => a.trim())}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
          >
            Complete Reframing
          </Button>
        </div>
      </div>
    </div>
  );
}
