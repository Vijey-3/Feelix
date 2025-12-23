import { useState } from 'react';
import { Textarea } from './ui/textarea';
import { CheckCircle } from 'lucide-react';
import { Emotion } from '../data/emotions';

interface JournalingPromptProps {
  emotion: Emotion;
}

export function JournalingPrompt({ emotion }: JournalingPromptProps) {
  const [responses, setResponses] = useState<{ [key: string]: string }>({});
  const [completed, setCompleted] = useState(false);

  const promptsConfig = {
    anger: {
      title: 'Anger Journaling',
      description: 'Take time to explore what\'s behind your anger. There\'s no right or wrong answer.',
      prompts: [
        {
          key: 'trigger',
          question: 'What triggered my anger?',
          placeholder: 'What happened or what did someone say/do?',
        },
        {
          key: 'wish',
          question: 'What do I wish I could say?',
          placeholder: 'If you could express yourself freely, what would you say?',
        },
        {
          key: 'response',
          question: 'What response would help me calm down?',
          placeholder: 'What do you need to feel heard and validated?',
        },
      ],
    },
    overthinking: {
      title: 'Thought Dump Journaling',
      description: 'Get those racing thoughts out of your head and onto paper.',
      prompts: [
        {
          key: 'stuck',
          question: 'What am I stuck thinking about?',
          placeholder: 'What thoughts keep cycling through your mind?',
        },
        {
          key: 'control',
          question: 'Is this in my control right now?',
          placeholder: 'What parts can you influence and what parts are beyond your control?',
        },
        {
          key: 'action',
          question: 'What is one small action I can take today?',
          placeholder: 'What\'s one tiny step you could take instead of thinking?',
        },
      ],
    },
    smoking: {
      title: 'Craving Reflection',
      description: 'Understanding your triggers helps you prepare for next time.',
      prompts: [
        {
          key: 'context',
          question: 'What was happening when the craving started?',
          placeholder: 'Where were you? What were you doing? Who were you with?',
        },
        {
          key: 'feeling',
          question: 'What emotion was I feeling before the craving?',
          placeholder: 'Stressed? Bored? Anxious? Celebrating?',
        },
        {
          key: 'next',
          question: 'What will I do differently next time this happens?',
          placeholder: 'How can you prepare for this trigger in the future?',
        },
      ],
    },
  };

  const config = promptsConfig[emotion.id as keyof typeof promptsConfig];
  const allAnswered = config.prompts.every(p => responses[p.key]?.trim().length > 0);

  const handleComplete = () => {
    if (allAnswered) {
      // Combine all responses into one entry
      const fullResponse = config.prompts
        .map(p => `${p.question}\n${responses[p.key]}`)
        .join('\n\n');

      const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
      entries.push({
        emotion: emotion.name,
        response: fullResponse,
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
          Reflection Complete
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Thank you for taking the time to reflect. Writing about your {emotion.name.toLowerCase()} helps you process it and gain clarity.
        </p>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Your Reflections:</h3>
          <div className="space-y-4 text-left text-gray-600 dark:text-gray-300">
            {config.prompts.map((prompt) => (
              <div key={prompt.key}>
                <p className="font-medium text-gray-700 dark:text-gray-200 mb-1">
                  {prompt.question}
                </p>
                <p className="italic">"{responses[prompt.key]}"</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Your entry has been saved privately to your journal. You can review it anytime in the Tools section.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          {config.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {config.description}
        </p>
      </div>

      <div className="max-w-2xl mx-auto text-left space-y-6">
        {config.prompts.map((prompt, index) => (
          <div key={prompt.key}>
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
              {index + 1}. {prompt.question}
            </label>
            <Textarea
              value={responses[prompt.key] || ''}
              onChange={(e) => setResponses({ ...responses, [prompt.key]: e.target.value })}
              placeholder={prompt.placeholder}
              className="min-h-[120px] p-4 text-lg bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
            />
          </div>
        ))}

        <div className="flex justify-between items-center pt-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            All questions answered: {allAnswered ? '✓' : `${Object.keys(responses).filter(k => responses[k]?.trim()).length}/${config.prompts.length}`}
          </div>
          <button
            onClick={handleComplete}
            disabled={!allAnswered}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              !allAnswered
                ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:scale-105'
            }`}
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
