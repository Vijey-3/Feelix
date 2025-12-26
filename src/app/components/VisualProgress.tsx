import { useState } from 'react';
import { Button } from './ui/button';
import { CheckCircle, Square, CheckSquare } from 'lucide-react';
import { Input } from './ui/input';

export function VisualProgress() {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([
    { text: '', completed: false },
    { text: '', completed: false },
    { text: '', completed: false },
  ]);
  const [completed, setCompleted] = useState(false);

  const updateTask = (index: number, text: string) => {
    const newTasks = [...tasks];
    newTasks[index].text = text;
    setTasks(newTasks);
  };

  const toggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const addTask = () => {
    setTasks([...tasks, { text: '', completed: false }]);
  };

  const handleComplete = () => {
    if (tasks.some(t => t.text.trim())) {
      // Save to localStorage
      const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
      entries.push({
        emotion: 'Procrastination - Visual Progress Tracker',
        response: `Task List:\n${tasks.filter(t => t.text.trim()).map((t, i) => `${t.completed ? '✓' : '○'} ${t.text}`).join('\n')}`,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('journalEntries', JSON.stringify(entries));
      setCompleted(true);
    }
  };

  const completedCount = tasks.filter(t => t.text.trim() && t.completed).length;
  const totalCount = tasks.filter(t => t.text.trim()).length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  if (completed) {
    return (
      <div className="text-center space-y-6">
        <CheckCircle className="w-24 h-24 mx-auto text-green-500" />
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Progress Tracker Created!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          You've set up your visual progress system. Checking off tasks releases dopamine and builds momentum!
        </p>
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Progress: {completedCount} of {totalCount} completed
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-yellow-400 to-amber-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          <div className="space-y-3 text-left">
            {tasks.filter(t => t.text.trim()).map((task, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg"
              >
                {task.completed ? (
                  <CheckSquare className="h-5 w-5 text-green-500 flex-shrink-0" />
                ) : (
                  <Square className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
                <span className={task.completed ? 'line-through text-gray-400' : 'text-gray-700 dark:text-gray-200'}>
                  {task.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-semibold">
          Your tracker has been saved. Check items off as you complete them!
        </p>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Visual Progress Tracking
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Seeing your progress visually builds momentum and motivation. Let's create your tracker.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-6xl">📊</div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Your Progress
              </span>
              <span className="text-lg font-bold text-gray-800 dark:text-gray-100">
                {completedCount}/{totalCount}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-yellow-400 to-amber-500 h-4 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <div className="space-y-3 text-left">
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">
              Add tasks you want to complete:
            </label>
            {tasks.map((task, index) => (
              <div key={index} className="flex items-center gap-3">
                <button
                  onClick={() => task.text.trim() && toggleTask(index)}
                  className="flex-shrink-0"
                  disabled={!task.text.trim()}
                >
                  {task.completed ? (
                    <CheckSquare className="h-6 w-6 text-green-500 hover:text-green-600 transition-colors" />
                  ) : (
                    <Square className="h-6 w-6 text-gray-400 hover:text-gray-600 transition-colors" />
                  )}
                </button>
                <Input
                  type="text"
                  value={task.text}
                  onChange={(e) => updateTask(index, e.target.value)}
                  placeholder={`Task ${index + 1}`}
                  className={`flex-1 p-3 bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 ${
                    task.completed ? 'line-through text-gray-400' : ''
                  }`}
                />
              </div>
            ))}
            <Button
              onClick={addTask}
              variant="outline"
              size="sm"
              className="w-full"
            >
              + Add Another Task
            </Button>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Why this works:</span> Visual progress activates your brain's reward system. 
            Each checkmark gives you a small dopamine hit, making you want to complete more tasks.
          </p>
        </div>

        <div className="flex justify-end pt-4">
          <Button
            onClick={handleComplete}
            disabled={!tasks.some(t => t.text.trim())}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
          >
            Save Progress Tracker
          </Button>
        </div>
      </div>
    </div>
  );
}
