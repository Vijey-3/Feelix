import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export function UrgeSurfing() {
  const [step, setStep] = useState(0);
  const [cravingLevel, setCravingLevel] = useState(5);
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathCount, setBreathCount] = useState(90);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!isBreathing || breathCount === 0) return;

    const timer = setInterval(() => {
      setBreathCount((prev) => {
        if (prev <= 1) {
          setIsBreathing(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isBreathing, breathCount]);

  const startBreathing = () => {
    setIsBreathing(true);
    setBreathCount(90);
  };

  if (completed) {
    return (
      <div className="text-center space-y-6">
        <CheckCircle className="w-24 h-24 mx-auto text-green-500" />
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Urge Surfing Complete
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          You've successfully surfed the urge! Cravings rise and fall like waves - you just proved you can ride them out.
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">What You Did:</h3>
          <div className="space-y-3 text-left text-gray-600 dark:text-gray-300">
            <div className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
              <span>Noticed the craving without acting on it</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
              <span>Observed it was at level {cravingLevel}/10</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
              <span>Breathed slowly for 90 seconds without judgment</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-semibold">
          Remember: Most cravings peak at 3-5 minutes and then decrease. You're stronger than the urge.
        </p>
      </div>
    );
  }

  if (step === 0) {
    return (
      <div className="text-center space-y-8">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Urge Surfing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Notice the craving without judgment. Don't fight it or give in to it - just observe it like a wave.
          </p>
        </div>

        <div className="max-w-xl mx-auto space-y-8">
          <div className="text-6xl">🌊</div>
          
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
              How strong is your craving right now?
            </p>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Mild</span>
              <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">{cravingLevel}/10</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Intense</span>
            </div>
            <Slider
              value={[cravingLevel]}
              onValueChange={(value) => setCravingLevel(value[0])}
              min={1}
              max={10}
              step={1}
              className="w-full"
            />
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-200">
              <span className="font-semibold">Remember:</span> This craving will peak and then fall, just like a wave. 
              You don't have to act on it - you can simply observe it.
            </p>
          </div>

          <Button
            onClick={() => setStep(1)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
          >
            I've Noticed the Craving
          </Button>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="text-center space-y-8">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Breathe Through the Wave
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Now breathe slowly for 90 seconds. Watch the craving without acting on it.
          </p>
        </div>

        <div className="max-w-xl mx-auto space-y-8">
          {!isBreathing && breathCount === 90 && (
            <div className="space-y-6">
              <div className="text-6xl">🫁</div>
              <p className="text-gray-600 dark:text-gray-300">
                Focus on your breath. In and out, slow and steady. The urge is just a temporary sensation.
              </p>
              <Button
                onClick={startBreathing}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
              >
                Start 90-Second Breathing
              </Button>
            </div>
          )}

          {isBreathing && (
            <div className="space-y-6">
              <motion.div
                className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="text-white text-4xl font-bold">
                  {breathCount}s
                </div>
              </motion.div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Breathe slowly... The craving is a wave passing through you.
              </p>
            </div>
          )}

          {!isBreathing && breathCount === 0 && (
            <div className="space-y-6">
              <div className="text-6xl">✨</div>
              <div className="text-green-600 dark:text-green-400 text-xl font-semibold">
                90 seconds complete!
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                You've surfed the wave. Notice: the craving might still be there, but you didn't act on it. That's strength.
              </p>
              <Button
                onClick={() => setCompleted(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
              >
                Continue
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
