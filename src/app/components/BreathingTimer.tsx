import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function BreathingTimer() {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [count, setCount] = useState(4);
  const [isActive, setIsActive] = useState(false);
  const [duration, setDuration] = useState(4);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 1) {
          return prevCount - 1;
        } else {
          if (phase === 'inhale') {
            setPhase('hold');
            return duration;
          } else if (phase === 'hold') {
            setPhase('exhale');
            return duration;
          } else {
            setCyclesCompleted(prev => prev + 1);
            setPhase('inhale');
            return duration;
          }
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, phase, duration, count]);

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale':
        return 'Breathe In';
      case 'hold':
        return 'Hold';
      case 'exhale':
        return 'Breathe Out';
    }
  };

  const getCircleSize = () => {
    switch (phase) {
      case 'inhale':
        return 240;
      case 'hold':
        return 240;
      case 'exhale':
        return 120;
    }
  };

  const reset = () => {
    setIsActive(false);
    setPhase('inhale');
    setCount(duration);
    setCyclesCompleted(0);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Breathing Timer
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Practice mindful breathing at your own pace. Choose your preferred duration and start when you're ready.
        </p>
      </div>

      <div className="flex justify-center items-center space-x-4 mb-8">
        <label className="text-gray-700 dark:text-gray-200 font-medium">
          Duration:
        </label>
        <Select
          value={duration.toString()}
          onValueChange={(value) => {
            const newDuration = parseInt(value);
            setDuration(newDuration);
            setCount(newDuration);
            setIsActive(false);
            setPhase('inhale');
          }}
        >
          <SelectTrigger className="w-32 bg-white dark:bg-gray-700">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3">3 seconds</SelectItem>
            <SelectItem value="4">4 seconds</SelectItem>
            <SelectItem value="5">5 seconds</SelectItem>
            <SelectItem value="6">6 seconds</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col items-center justify-center space-y-8 py-8">
        <motion.div
          className="rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-2xl"
          animate={{
            width: getCircleSize(),
            height: getCircleSize(),
          }}
          transition={{
            duration: duration,
            ease: 'easeInOut',
          }}
        >
          {isActive && (
            <div className="text-center text-white">
              <div className="text-6xl font-bold">{count}</div>
              <div className="text-2xl mt-2">{getPhaseText()}</div>
            </div>
          )}
          {!isActive && (
            <div className="text-6xl">🫁</div>
          )}
        </motion.div>

        <div className="flex gap-4">
          {!isActive ? (
            <Button
              onClick={() => {
                setIsActive(true);
                setPhase('inhale');
                setCount(duration);
              }}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
            >
              Start
            </Button>
          ) : (
            <>
              <Button
                onClick={() => setIsActive(false)}
                size="lg"
                variant="outline"
                className="px-8"
              >
                Pause
              </Button>
              <Button
                onClick={reset}
                size="lg"
                variant="outline"
                className="px-8"
              >
                Reset
              </Button>
            </>
          )}
        </div>

        <div className="text-center text-gray-600 dark:text-gray-400">
          <div>Cycles Completed: {cyclesCompleted}</div>
          {cyclesCompleted > 0 && (
            <div className="text-sm mt-2">Great work! Keep breathing mindfully.</div>
          )}
        </div>
      </div>
    </div>
  );
}
