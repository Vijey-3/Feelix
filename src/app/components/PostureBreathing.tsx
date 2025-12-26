import { useState } from 'react';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';
import { Emotion } from '../data/emotions';
import { BreathingExercise } from './BreathingExercise';

interface PostureBreathingProps {
  emotion: Emotion;
}

export function PostureBreathing({ emotion }: PostureBreathingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const steps = [
    {
      title: 'Open Posture Check',
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl">🧍</div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Adjust Your Body Language
          </h3>
          <div className="max-w-2xl mx-auto text-left space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your posture affects how you feel AND how others perceive you. Let's practice confident body language:
            </p>
            <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-pink-600 dark:text-pink-400 text-xl">✓</span>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">Shoulders back and relaxed</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Not hunched forward, but naturally down</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 dark:text-pink-400 text-xl">✓</span>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">Head up, not looking down</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">This opens your chest and helps breathing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 dark:text-pink-400 text-xl">✓</span>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">Feet shoulder-width apart</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Creates a stable, grounded feeling</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 dark:text-pink-400 text-xl">✓</span>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">Hands visible (not in pockets)</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Shows openness and approachability</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your posture right now. Notice how it changes how you feel.
            </p>
          </div>
          <Button
            onClick={() => setCurrentStep(1)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
          >
            Posture Adjusted
          </Button>
        </div>
      ),
    },
    {
      title: 'Calming Breath',
      content: <BreathingExercise emotion={emotion} />,
    },
  ];

  if (completed) {
    return (
      <div className="text-center space-y-6">
        <CheckCircle className="w-24 h-24 mx-auto text-green-500" />
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Body and Mind Aligned!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          You've practiced confident posture and calming breathing. This combination reduces physical anxiety.
        </p>
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Remember This Before Social Situations:</h3>
          <div className="space-y-2 text-left text-gray-600 dark:text-gray-300">
            <p>1. Check your posture - shoulders back, head up</p>
            <p>2. Take 3-5 slow, deep breaths</p>
            <p>3. Remind yourself: "I'm allowed to take up space"</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-semibold">
          Confident body language literally changes your brain chemistry, reducing anxiety hormones.
        </p>
      </div>
    );
  }

  if (currentStep === 1) {
    return (
      <div>
        {steps[1].content}
        <div className="text-center mt-6">
          <Button
            onClick={() => setCompleted(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
          >
            Complete Exercise
          </Button>
        </div>
      </div>
    );
  }

  return steps[currentStep].content;
}
