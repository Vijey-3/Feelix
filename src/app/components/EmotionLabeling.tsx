import { useState } from 'react';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';
import { Slider } from './ui/slider';

const emotionOptions = [
  { name: 'Hurt', color: 'text-red-500', description: 'Feeling wounded or pained by the situation' },
  { name: 'Angry', color: 'text-orange-500', description: 'Frustrated or resentful about what happened' },
  { name: 'Anxious', color: 'text-yellow-500', description: 'Worried about what this means for the future' },
  { name: 'Sad', color: 'text-blue-500', description: 'Feeling down or disappointed' },
  { name: 'Ashamed', color: 'text-purple-500', description: 'Feeling embarrassed or less-than' },
  { name: 'Scared', color: 'text-pink-500', description: 'Afraid of loss or abandonment' },
];

export function EmotionLabeling() {
  const [selectedEmotions, setSelectedEmotions] = useState<{ name: string; intensity: number }[]>([]);
  const [completed, setCompleted] = useState(false);

  const toggleEmotion = (name: string) => {
    const exists = selectedEmotions.find(e => e.name === name);
    if (exists) {
      setSelectedEmotions(selectedEmotions.filter(e => e.name !== name));
    } else {
      setSelectedEmotions([...selectedEmotions, { name, intensity: 5 }]);
    }
  };

  const updateIntensity = (name: string, intensity: number) => {
    setSelectedEmotions(
      selectedEmotions.map(e => e.name === name ? { ...e, intensity } : e)
    );
  };

  const handleComplete = () => {
    if (selectedEmotions.length > 0) {
      // Save to localStorage
      const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
      entries.push({
        emotion: 'Rejection Sensitivity - Emotion Labeling',
        response: `Identified Emotions:\n${selectedEmotions.map(e => `${e.name}: ${e.intensity}/10`).join('\n')}`,
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
          Emotions Identified!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          By naming your emotions, you've already reduced their intensity. This is the power of emotional awareness.
        </p>
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Your Emotional Experience:</h3>
          <div className="space-y-4">
            {selectedEmotions.map((emotion) => {
              const emotionInfo = emotionOptions.find(e => e.name === emotion.name);
              return (
                <div key={emotion.name} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-semibold ${emotionInfo?.color}`}>
                      {emotion.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {emotion.intensity}/10
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-violet-400 to-purple-500 h-2 rounded-full"
                      style={{ width: `${emotion.intensity * 10}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Research shows that simply labeling emotions reduces their intensity and helps you respond more effectively.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Emotion Labeling
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Naming your emotions reduces their power over you. Let's identify what you're really feeling.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-6xl">🎭</div>

        <p className="text-md text-gray-600 dark:text-gray-400">
          Select all emotions you're experiencing (you can feel multiple at once):
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {emotionOptions.map((emotion) => {
            const isSelected = selectedEmotions.find(e => e.name === emotion.name);
            return (
              <button
                key={emotion.name}
                onClick={() => toggleEmotion(emotion.name)}
                className={`p-6 rounded-lg transition-all text-left ${
                  isSelected
                    ? 'bg-violet-100 dark:bg-violet-900/30 border-2 border-violet-400 dark:border-violet-500'
                    : 'bg-white dark:bg-gray-800 hover:bg-violet-50 dark:hover:bg-violet-900/20 border-2 border-gray-200 dark:border-gray-700'
                }`}
              >
                <h3 className={`text-xl font-semibold mb-2 ${emotion.color}`}>
                  {emotion.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {emotion.description}
                </p>
                {isSelected && (
                  <CheckCircle className="mt-3 h-5 w-5 text-violet-500" />
                )}
              </button>
            );
          })}
        </div>

        {selectedEmotions.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Rate the intensity of each emotion (1-10):
            </h3>
            <div className="space-y-6">
              {selectedEmotions.map((emotion) => {
                const emotionInfo = emotionOptions.find(e => e.name === emotion.name);
                return (
                  <div key={emotion.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-medium ${emotionInfo?.color}`}>
                        {emotion.name}
                      </span>
                      <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        {emotion.intensity}
                      </span>
                    </div>
                    <Slider
                      value={[emotion.intensity]}
                      onValueChange={(value) => updateIntensity(emotion.name, value[0])}
                      min={1}
                      max={10}
                      step={1}
                      className="w-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Why this works:</span> When you can name what you're feeling, 
            you gain distance from it. "I AM angry" becomes "I FEEL angry" - a temporary state, not your identity.
          </p>
        </div>

        {selectedEmotions.length > 0 && (
          <Button
            onClick={handleComplete}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
          >
            Save My Emotions
          </Button>
        )}
      </div>
    </div>
  );
}
