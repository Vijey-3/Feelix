import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function ResponseDelay() {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [completed, setCompleted] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(300);

  useEffect(() => {
    if (!started || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setStarted(false);
          setCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setStarted(true);
    setTimeLeft(selectedDuration);
  };

  if (completed) {
    return (
      <div className="text-center space-y-6">
        <CheckCircle className="w-24 h-24 mx-auto text-green-500" />
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Delay Complete!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          You've given yourself time to cool down. Now you can respond more thoughtfully.
        </p>
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Before You Respond, Consider:</h3>
          <div className="space-y-3 text-left text-gray-600 dark:text-gray-300">
            <div className="flex items-start">
              <span className="text-violet-600 dark:text-violet-400 mr-2">1.</span>
              <span>Do I still need to respond, or has the urgency passed?</span>
            </div>
            <div className="flex items-start">
              <span className="text-violet-600 dark:text-violet-400 mr-2">2.</span>
              <span>What outcome do I want from this conversation?</span>
            </div>
            <div className="flex items-start">
              <span className="text-violet-600 dark:text-violet-400 mr-2">3.</span>
              <span>Can I communicate this in a calm, clear way?</span>
            </div>
            <div className="flex items-start">
              <span className="text-violet-600 dark:text-violet-400 mr-2">4.</span>
              <span>Would my response make the situation better or worse?</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-semibold">
          The space between trigger and response is where your power lives.
        </p>
        <Button
          onClick={() => {
            setCompleted(false);
            setTimeLeft(selectedDuration);
          }}
          variant="outline"
        >
          Start Another Delay
        </Button>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Response Delay Technique
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          When you feel triggered, wait before responding. This prevents reactive messages you might regret.
        </p>
      </div>

      <div className="max-w-xl mx-auto space-y-8">
        <div className="text-6xl">⏸️</div>

        {!started && timeLeft === selectedDuration && (
          <div className="space-y-6">
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Why Wait?</h3>
              <div className="space-y-2 text-left text-gray-600 dark:text-gray-300">
                <p>✓ Emotional intensity decreases over time</p>
                <p>✓ You gain clarity and perspective</p>
                <p>✓ You respond thoughtfully instead of reactively</p>
                <p>✓ You avoid saying things you'll regret</p>
              </div>
            </div>

            <div>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">
                Choose your delay duration:
              </p>
              <div className="flex gap-3 justify-center">
                {[
                  { label: '2 min', value: 120 },
                  { label: '5 min', value: 300 },
                  { label: '10 min', value: 600 },
                  { label: '15 min', value: 900 },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedDuration(option.value)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      selectedDuration === option.value
                        ? 'bg-violet-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-200">
                <span className="font-semibold">The rule:</span> If you're still upset after the timer, 
                wait another round. Only respond when you've regained emotional balance.
              </p>
            </div>

            <Button
              onClick={startTimer}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12"
            >
              Start {formatTime(selectedDuration)} Delay
            </Button>
          </div>
        )}

        {started && (
          <div className="space-y-6">
            <motion.div
              className="w-56 h-56 mx-auto rounded-full bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center shadow-2xl"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="text-white text-center">
                <div className="text-6xl font-bold">{formatTime(timeLeft)}</div>
                <div className="text-lg mt-3">Cooling Down...</div>
              </div>
            </motion.div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-200 mb-3 font-semibold">
                While you wait, try this:
              </p>
              <div className="space-y-2 text-left text-gray-600 dark:text-gray-300">
                <p>• Take slow, deep breaths</p>
                <p>• Notice how the intensity is already decreasing</p>
                <p>• Think about what you actually want to communicate</p>
                <p>• Consider alternative interpretations of the situation</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              Notice how your emotional intensity changes as time passes...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
