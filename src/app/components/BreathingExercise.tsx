import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Emotion } from '../data/emotions';

interface BreathingExerciseProps {
  emotion: Emotion;
}

export function BreathingExercise({ emotion }: BreathingExerciseProps) {
  const pattern = emotion.breathingPattern || { inhale: 4, hold: 4, exhale: 4, cycles: 3 };
  
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [count, setCount] = useState(pattern.inhale);
  const [isActive, setIsActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 1) {
          return prevCount - 1;
        } else {
          // Move to next phase
          if (phase === 'inhale') {
            if (pattern.hold > 0) {
              setPhase('hold');
              return pattern.hold;
            } else {
              setPhase('exhale');
              return pattern.exhale;
            }
          } else if (phase === 'hold') {
            setPhase('exhale');
            return pattern.exhale;
          } else {
            const newCycles = cycles + 1;
            setCycles(newCycles);
            if (newCycles >= pattern.cycles) {
              setIsActive(false);
              setCompleted(true);
              return 0;
            }
            setPhase('inhale');
            return pattern.inhale;
          }
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, phase, cycles, count, pattern]);

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale':
        return emotion.id === 'overthinking' ? 'Inhale Through Nose' : 'Breathe In';
      case 'hold':
        return 'Hold';
      case 'exhale':
        return emotion.id === 'overthinking' ? 'Exhale Through Mouth' : 'Breathe Out';
    }
  };

  const getCircleSize = () => {
    switch (phase) {
      case 'inhale':
        return 200;
      case 'hold':
        return 200;
      case 'exhale':
        return 100;
    }
  };

  const getInstructions = () => {
    switch (emotion.id) {
      case 'anger':
        return `Controlled breathing to release anger. Inhale for ${pattern.inhale} seconds, hold for ${pattern.hold} seconds, exhale for ${pattern.exhale} seconds. We'll do ${pattern.cycles} cycles.`;
      case 'overthinking':
        return `Thought-interrupt breathing. Inhale through your nose for ${pattern.inhale} seconds, then exhale through your mouth for ${pattern.exhale} seconds. Focus on counting each breath. We'll do ${pattern.cycles} cycles (about 2 minutes).`;
      case 'smoking':
        return `Breathing + Delay technique. Slow, controlled breathing for 1 minute. After this, you'll decide in 10 minutes whether you still need to smoke. We'll do ${pattern.cycles} cycles.`;
      default:
        return `Deep breathing helps calm your nervous system and brings you back to the present moment. Let's do ${pattern.cycles} cycles of mindful breathing together.`;
    }
  };

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          {emotion.id === 'anger' && 'Breathing to Release Anger'}
          {emotion.id === 'overthinking' && 'Thought-Interrupt Breathing'}
          {emotion.id === 'smoking' && 'Breathing + Delay Technique'}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {getInstructions()}
        </p>
        {emotion.id === 'smoking' && !completed && (
          <p className="text-md text-purple-600 dark:text-purple-400 max-w-2xl mx-auto mt-4 font-semibold">
            Remember: "I will decide after 10 minutes"
          </p>
        )}
      </div>

      <div className="flex flex-col items-center justify-center space-y-8 py-8">
        <motion.div
          className={`rounded-full bg-gradient-to-br ${emotion.color} flex items-center justify-center shadow-2xl`}
          animate={{
            width: getCircleSize(),
            height: getCircleSize(),
          }}
          transition={{
            duration: phase === 'hold' ? pattern.hold : (phase === 'inhale' ? pattern.inhale : pattern.exhale),
            ease: 'easeInOut',
          }}
        >
          <div className="text-white">
            {isActive && (
              <div className="text-center">
                <div className="text-5xl font-bold">{count}</div>
                <div className="text-xl mt-2">{getPhaseText()}</div>
              </div>
            )}
          </div>
        </motion.div>

        {!isActive && !completed && (
          <button
            onClick={() => {
              setIsActive(true);
              setPhase('inhale');
              setCount(pattern.inhale);
              setCycles(0);
            }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all hover:scale-105"
          >
            Start Breathing Exercise
          </button>
        )}

        {completed && (
          <div className="text-center space-y-4">
            <div className="text-green-600 dark:text-green-400 text-2xl font-semibold">
              ✓ Exercise Complete
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {emotion.id === 'anger' && `You've completed ${pattern.cycles} breathing cycles. Notice how your body feels now - more relaxed and in control.`}
              {emotion.id === 'overthinking' && `You've focused on ${pattern.cycles} breath cycles, interrupting the thought spiral. Your mind should feel clearer.`}
              {emotion.id === 'smoking' && `You've delayed for 1 minute. Remember: wait 10 minutes before making your decision. The craving will likely pass.`}
            </p>
            <button
              onClick={() => {
                setCompleted(false);
                setIsActive(true);
                setPhase('inhale');
                setCount(pattern.inhale);
                setCycles(0);
              }}
              className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
            >
              Practice again
            </button>
          </div>
        )}

        {isActive && (
          <div className="text-gray-600 dark:text-gray-400">
            Cycle {cycles + 1} of {pattern.cycles}
          </div>
        )}
      </div>
    </div>
  );
}
