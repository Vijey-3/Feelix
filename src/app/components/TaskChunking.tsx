import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { CheckCircle, Plus, X } from 'lucide-react';

export function TaskChunking() {
  const [mainTask, setMainTask] = useState('');
  const [chunks, setChunks] = useState<string[]>(['', '', '']);
  const [completed, setCompleted] = useState(false);

  const addChunk = () => {
    setChunks([...chunks, '']);
  };

  const removeChunk = (index: number) => {
    if (chunks.length > 1) {
      setChunks(chunks.filter((_, i) => i !== index));
    }
  };

  const updateChunk = (index: number, value: string) => {
    const newChunks = [...chunks];
    newChunks[index] = value;
    setChunks(newChunks);
  };

  const handleComplete = () => {
    if (mainTask.trim() && chunks.some(c => c.trim())) {
      // Save to localStorage
      const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
      entries.push({
        emotion: 'Procrastination - Task Chunking',
        response: `Main Task: ${mainTask}\n\nBroken Down Into:\n${chunks.filter(c => c.trim()).map((c, i) => `${i + 1}. ${c}`).join('\n')}`,
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
          Task Successfully Chunked!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          You've broken down an overwhelming task into manageable pieces. This makes starting so much easier.
        </p>
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg p-6 max-w-2xl mx-auto text-left">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Your Main Task:</h3>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">{mainTask}</p>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Broken Into Steps:</h3>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            {chunks.filter(c => c.trim()).map((chunk, index) => (
              <div key={index} className="flex items-start">
                <span className="text-yellow-600 dark:text-yellow-400 mr-2">✓</span>
                <span>{chunk}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-semibold">
          💡 Tip: Focus on completing just the first step. That's all you need to do right now.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Task Chunking
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Big tasks feel overwhelming. Let's break yours into tiny, non-intimidating steps.
        </p>
      </div>

      <div className="max-w-2xl mx-auto text-left space-y-6">
        <div className="text-center text-6xl mb-4">🧩</div>

        <div>
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">
            What task are you avoiding?
          </label>
          <Input
            type="text"
            value={mainTask}
            onChange={(e) => setMainTask(e.target.value)}
            placeholder="e.g., Write research paper, Clean my room, Start a project..."
            className="text-lg p-4 bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
              Break it into tiny steps:
            </label>
            <Button
              onClick={addChunk}
              size="sm"
              variant="outline"
              className="flex items-center gap-1"
            >
              <Plus className="h-4 w-4" />
              Add Step
            </Button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Make each step ridiculously small. "Open document" is better than "Write paper."
          </p>
          <div className="space-y-3">
            {chunks.map((chunk, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-gray-500 dark:text-gray-400 font-medium min-w-[24px]">
                  {index + 1}.
                </span>
                <Input
                  type="text"
                  value={chunk}
                  onChange={(e) => updateChunk(index, e.target.value)}
                  placeholder={`Step ${index + 1} - Keep it small and specific`}
                  className="flex-1 p-3 bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
                />
                {chunks.length > 1 && (
                  <Button
                    onClick={() => removeChunk(index)}
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Why this works:</span> Your brain resists big, vague tasks. 
            Small, concrete steps eliminate the feeling of overwhelm and make it easy to just start.
          </p>
        </div>

        <div className="flex justify-end pt-4">
          <Button
            onClick={handleComplete}
            disabled={!mainTask.trim() || !chunks.some(c => c.trim())}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
          >
            Save My Plan
          </Button>
        </div>
      </div>
    </div>
  );
}
