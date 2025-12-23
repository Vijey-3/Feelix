import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { CheckCircle } from 'lucide-react';

export function GroundingExercise() {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<string[]>(['', '', '', '', '']);

  const steps = [
    {
      sense: 'See',
      prompt: 'Name 5 things you can see around you',
      count: 5,
      icon: '👁️',
    },
    {
      sense: 'Touch',
      prompt: 'Name 4 things you can touch or feel',
      count: 4,
      icon: '✋',
    },
    {
      sense: 'Hear',
      prompt: 'Name 3 sounds you can hear',
      count: 3,
      icon: '👂',
    },
    {
      sense: 'Smell',
      prompt: 'Name 2 things you can smell',
      count: 2,
      icon: '👃',
    },
    {
      sense: 'Taste',
      prompt: 'Name 1 thing you can taste',
      count: 1,
      icon: '👅',
    },
  ];

  const [stepInputs, setStepInputs] = useState<string[]>(
    Array(steps[currentStep]?.count || 0).fill('')
  );
  const [completed, setCompleted] = useState(false);

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...stepInputs];
    newInputs[index] = value;
    setStepInputs(newInputs);
  };

  const handleNext = () => {
    const newResponses = [...responses];
    newResponses[currentStep] = stepInputs.join(', ');
    setResponses(newResponses);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setStepInputs(Array(steps[currentStep + 1].count).fill(''));
    } else {
      setCompleted(true);
    }
  };

  const canProceed = stepInputs.every(input => input.trim().length > 0);

  if (completed) {
    return (
      <div className="text-center space-y-6">
        <CheckCircle className="w-24 h-24 mx-auto text-green-500" />
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Grounding Complete
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Great work! By focusing on your senses, you've brought yourself back to the present moment.
          This is a powerful tool you can use anytime you feel overwhelmed.
        </p>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Your Responses:</h3>
          <div className="space-y-2 text-left text-gray-600 dark:text-gray-300">
            {steps.map((step, index) => (
              <div key={index}>
                <span className="font-medium">{step.icon} {step.sense}:</span> {responses[index]}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          5-4-3-2-1 Grounding Exercise
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          This exercise helps you reconnect with the present moment by engaging your five senses.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="mb-8">
          <div className="text-6xl mb-4">{steps[currentStep].icon}</div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            {steps[currentStep].prompt}
          </h3>
        </div>

        <div className="space-y-4">
          {Array.from({ length: steps[currentStep].count }).map((_, index) => (
            <Input
              key={index}
              type="text"
              placeholder={`${index + 1}. Type here...`}
              value={stepInputs[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="text-lg p-4 bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
            />
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Step {currentStep + 1} of {steps.length}
          </div>
          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6"
          >
            {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}
