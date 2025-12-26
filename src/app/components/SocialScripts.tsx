import { useState } from 'react';
import { Button } from './ui/button';
import { CheckCircle, Copy, Check } from 'lucide-react';

const scriptCategories = [
  {
    category: 'Conversation Starters',
    scripts: [
      "Hi! How's your day going?",
      "Nice weather today, isn't it?",
      "I like your [item]. Where did you get it?",
      "Have you been here before?",
    ],
  },
  {
    category: 'Small Talk',
    scripts: [
      "What do you do for work/study?",
      "Any plans for the weekend?",
      "Have you seen [recent movie/show]?",
      "How do you know [mutual connection]?",
    ],
  },
  {
    category: 'Leaving Conversations',
    scripts: [
      "It was nice talking to you! I should get going.",
      "I need to catch up with someone, but great chatting!",
      "Excuse me, I'm going to grab a drink. See you around!",
      "I'll let you go, but it was lovely meeting you!",
    ],
  },
  {
    category: 'Handling Awkwardness',
    scripts: [
      "Sorry, what was that? I didn't catch it.",
      "That's interesting! Tell me more about that.",
      "I'm not sure what to say to that, but...",
      "Can I think about that and get back to you?",
    ],
  },
];

export function SocialScripts() {
  const [selectedScripts, setSelectedScripts] = useState<string[]>([]);
  const [copiedScript, setCopiedScript] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);

  const toggleScript = (script: string) => {
    if (selectedScripts.includes(script)) {
      setSelectedScripts(selectedScripts.filter(s => s !== script));
    } else {
      setSelectedScripts([...selectedScripts, script]);
    }
  };

  const copyScript = (script: string) => {
    navigator.clipboard.writeText(script);
    setCopiedScript(script);
    setTimeout(() => setCopiedScript(null), 2000);
  };

  const handleComplete = () => {
    if (selectedScripts.length > 0) {
      // Save to localStorage
      const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
      entries.push({
        emotion: 'Shyness - Social Scripts',
        response: `Practiced Scripts:\n${selectedScripts.map((s, i) => `${i + 1}. ${s}`).join('\n')}`,
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
          Scripts Ready!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          You've prepared your social scripts. Having these ready reduces anxiety and makes conversations easier.
        </p>
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-6 max-w-2xl mx-auto text-left">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Your Selected Scripts:</h3>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            {selectedScripts.map((script, index) => (
              <div key={index} className="flex items-start">
                <span className="text-pink-600 dark:text-pink-400 mr-2">•</span>
                <span>"{script}"</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Practice tip:</span> Say these out loud a few times before social situations. 
            When the moment comes, they'll flow more naturally.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Prepared Social Scripts
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Having conversation starters ready removes the pressure of thinking on the spot. Select scripts you want to practice.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-6xl">💬</div>

        <div className="space-y-6">
          {scriptCategories.map((category) => (
            <div
              key={category.category}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.scripts.map((script, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer ${
                      selectedScripts.includes(script)
                        ? 'bg-pink-100 dark:bg-pink-900/30 border-2 border-pink-400 dark:border-pink-500'
                        : 'bg-gray-50 dark:bg-gray-700 hover:bg-pink-50 dark:hover:bg-pink-900/20 border-2 border-transparent'
                    }`}
                    onClick={() => toggleScript(script)}
                  >
                    <p className="text-gray-700 dark:text-gray-200 flex-1 text-left">"{script}"</p>
                    <div className="flex items-center gap-2">
                      {selectedScripts.includes(script) && (
                        <CheckCircle className="h-5 w-5 text-pink-500" />
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyScript(script);
                        }}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                      >
                        {copiedScript === script ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Why this works:</span> Knowing what to say in advance frees up mental energy 
            to focus on listening and connecting, rather than panicking about what to say next.
          </p>
        </div>

        {selectedScripts.length > 0 && (
          <div className="flex flex-col items-center gap-3">
            <p className="text-gray-600 dark:text-gray-400">
              {selectedScripts.length} script{selectedScripts.length !== 1 ? 's' : ''} selected
            </p>
            <Button
              onClick={handleComplete}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
            >
              Save My Scripts
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
