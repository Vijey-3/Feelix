import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { CheckCircle, Play } from 'lucide-react';
import { motion } from 'motion/react';

export function TwoMinuteRule() {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [completed, setCompleted] = useState(false);

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
    setTimeLeft(120);
  };

  if (completed) {
    return (
      <div className="text-center space-y-6">
        <CheckCircle className="w-24 h-24 mx-auto text-green-500" />
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          2 Minutes Complete!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Great job! You've overcome the hardest part - starting. Now you have momentum.
        </p>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">What Happens Now?</h3>
          <div className="space-y-3 text-left text-gray-600 dark:text-gray-300">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">1.</span>
              <span>You've broken through the initial resistance</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">2.</span>
              <span>Your brain is now in "doing mode" instead of "avoiding mode"</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">3.</span>
              <span>You can either keep going or take a break - you've already won</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-semibold">
          Starting is the hardest part. You just proved you can do it.
        </p>
        <Button
          onClick={() => {
            setCompleted(false);
            setTimeLeft(120);
          }}
          variant="outline"
        >
          Do Another 2 Minutes
        </Button>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          The 2-Minute Rule
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Commit to working on your task for just 2 minutes. That's it. No pressure to finish.
        </p>
      </div>

      <div className="max-w-xl mx-auto space-y-8">
        <div className="text-6xl">⏱️</div>

        {!started && timeLeft === 120 && (
          <div className="space-y-6">
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">How It Works:</h3>
              <div className="space-y-2 text-left text-gray-600 dark:text-gray-300">
                <p>✓ Start your timer for 2 minutes</p>
                <p>✓ Work on just one small step from your task</p>
                <p>✓ When time's up, you can stop guilt-free</p>
                <p>✓ Often, you'll find you want to keep going</p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-200">
                <span className="font-semibold">The secret:</span> Starting is the hardest part. 
                Once you begin, momentum builds naturally. 2 minutes removes the pressure and tricks your brain into action.
              </p>
            </div>

            <Button
              onClick={startTimer}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12"
            >
              <Play className="mr-2 h-5 w-5" />
              Start 2-Minute Timer
            </Button>
          </div>
        )}

        {started && (
          <div className="space-y-6">
            <motion.div
              className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-amber-400 flex items-center justify-center shadow-2xl"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="text-white text-center">
                <div className="text-5xl font-bold">{formatTime(timeLeft)}</div>
                <div className="text-lg mt-2">Keep Going!</div>
              </div>
            </motion.div>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              You're doing it! Just {timeLeft} more seconds...
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <p className="text-gray-700 dark:text-gray-200">
                💪 You've already overcome the resistance. Keep your focus on the task.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
