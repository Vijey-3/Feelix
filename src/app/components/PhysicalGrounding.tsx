import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { CheckCircle } from 'lucide-react';

export function PhysicalGrounding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [sensations, setSensations] = useState<string[]>(['', '', '']);
  const [completed, setCompleted] = useState(false);
  const [feetGrounded, setFeetGrounded] = useState(false);
  const [fistsReleased, setFistsReleased] = useState(false);

  const steps = [
    {
      title: 'Ground Your Feet',
      instruction: 'Press your feet firmly into the ground',
      detail: 'Stand up if you can, or sit with feet flat on the floor. Press down firmly and feel the solid support beneath you.',
      action: (
        <div className="text-center space-y-6">
          <div className="text-6xl">🦶</div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Take a moment to really feel the ground beneath your feet. Notice the stability and support.
          </p>
          <Button
            onClick={() => {
              setFeetGrounded(true);
              setCurrentStep(1);
            }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
            disabled={feetGrounded}
          >
            {feetGrounded ? 'Done ✓' : 'I Feel Grounded'}
          </Button>
        </div>
      ),
    },
    {
      title: 'Release Physical Tension',
      instruction: 'Clench your fists for 5 seconds, then release',
      detail: 'Make tight fists, hold for 5 seconds, then open your hands and shake them out. Feel the tension leaving your body.',
      action: (
        <div className="text-center space-y-6">
          <div className="text-6xl">✊ → 🖐️</div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Clench your fists as tight as you can. Hold... 5, 4, 3, 2, 1... Now release and shake your hands.
          </p>
          <Button
            onClick={() => {
              setFistsReleased(true);
              setCurrentStep(2);
            }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
            disabled={fistsReleased}
          >
            {fistsReleased ? 'Done ✓' : 'Tension Released'}
          </Button>
        </div>
      ),
    },
    {
      title: 'Notice Physical Sensations',
      instruction: 'Name 3 physical sensations you notice right now',
      detail: 'What do you feel in your body? Temperature, texture, pressure, movement?',
      action: (
        <div className="space-y-6 max-w-xl mx-auto">
          <div className="text-center text-6xl mb-4">🧘</div>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-6">
            Notice 3 physical sensations in your body right now:
          </p>
          {[0, 1, 2].map((index) => (
            <Input
              key={index}
              type="text"
              placeholder={`${index + 1}. What do you feel? (e.g., warmth, tension, coolness...)`}
              value={sensations[index]}
              onChange={(e) => {
                const newSensations = [...sensations];
                newSensations[index] = e.target.value;
                setSensations(newSensations);
              }}
              className="text-lg p-4 bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
            />
          ))}
          <div className="text-center mt-6">
            <Button
              onClick={() => setCompleted(true)}
              disabled={sensations.some(s => s.trim().length === 0)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
            >
              Complete Exercise
            </Button>
          </div>
        </div>
      ),
    },
  ];

  if (completed) {
    return (
      <div className="text-center space-y-6">
        <CheckCircle className="w-24 h-24 mx-auto text-green-500" />
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Physical Grounding Complete
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Excellent work! You've released physical tension and reconnected with your body's sensations.
        </p>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Your Physical Sensations:</h3>
          <div className="space-y-2 text-left text-gray-600 dark:text-gray-300">
            {sensations.map((sensation, index) => (
              <div key={index}>
                <span className="font-medium">{index + 1}.</span> {sensation}
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          When anger builds up in your body, these physical grounding techniques help release it safely.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Physical Grounding Exercise
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Anger creates tension in your body. Let's release it through physical grounding.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            {steps[currentStep].title}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            {steps[currentStep].detail}
          </p>
        </div>

        {steps[currentStep].action}

        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Step {currentStep + 1} of {steps.length}
        </div>
      </div>
    </div>
  );
}
