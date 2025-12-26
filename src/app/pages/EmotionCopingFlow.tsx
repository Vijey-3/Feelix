import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { emotions } from '../data/emotions';
import { ArrowRight, Heart } from 'lucide-react';
import { BreathingExercise } from '../components/BreathingExercise';
import { GroundingExercise } from '../components/GroundingExercise';
import { PhysicalGrounding } from '../components/PhysicalGrounding';
import { JournalingPrompt } from '../components/JournalingPrompt';
import { UrgeSurfing } from '../components/UrgeSurfing';
import { ReplacementAction } from '../components/ReplacementAction';
import { TaskChunking } from '../components/TaskChunking';
import { TwoMinuteRule } from '../components/TwoMinuteRule';
import { VisualProgress } from '../components/VisualProgress';
import { GradualExposure } from '../components/GradualExposure';
import { SocialScripts } from '../components/SocialScripts';
import { PostureBreathing } from '../components/PostureBreathing';
import { SelfCompassion } from '../components/SelfCompassion';
import { ThoughtRealityCheck } from '../components/ThoughtRealityCheck';
import { EmotionLabeling } from '../components/EmotionLabeling';
import { ResponseDelay } from '../components/ResponseDelay';
import { ReframingPractice } from '../components/ReframingPractice';
import { TriggerIdentification } from '../components/TriggerIdentification';
import { SubstitutionHabits } from '../components/SubstitutionHabits';

export function EmotionCopingFlow() {
  const { emotionId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  
  const emotion = emotions.find(e => e.id === emotionId);
  
  if (!emotion) {
    navigate('/emotions');
    return null;
  }

  // Define different step flows based on emotion
  const getStepsForEmotion = () => {
    switch (emotion.id) {
      case 'anger':
        return [
          {
            title: 'Acknowledgement',
            component: (
              <div className="text-center space-y-6">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${emotion.color} flex items-center justify-center text-6xl shadow-xl`}>
                  {emotion.icon}
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  It's okay to feel angry
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Anger is a natural emotion that tells us something matters to us. Let's work through this together.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Take a deep breath. You're taking the first step toward feeling better.
                </p>
              </div>
            ),
          },
          {
            title: 'Breathing to Release Anger',
            component: <BreathingExercise emotion={emotion} />,
          },
          {
            title: 'Physical Grounding',
            component: <PhysicalGrounding />,
          },
          {
            title: 'Anger Journaling',
            component: <JournalingPrompt emotion={emotion} />,
          },
          {
            title: 'Complete',
            component: (
              <div className="text-center space-y-6">
                <Heart className="w-24 h-24 mx-auto text-pink-500" />
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  Well Done!
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  You've completed the coping exercises. How are you feeling now?
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Remember, these exercises are always here when you need them. Now, let's learn more about anger and discover additional strategies.
                </p>
              </div>
            ),
          },
        ];

      case 'overthinking':
        return [
          {
            title: 'Acknowledgement',
            component: (
              <div className="text-center space-y-6">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${emotion.color} flex items-center justify-center text-6xl shadow-xl`}>
                  {emotion.icon}
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  Your mind is working overtime
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Overthinking is your mind trying to solve problems, but sometimes we need to pause and reset.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Let's interrupt those racing thoughts and bring you back to the present.
                </p>
              </div>
            ),
          },
          {
            title: 'Thought-Interrupt Breathing',
            component: <BreathingExercise emotion={emotion} />,
          },
          {
            title: '5-4-3-2-1 Grounding',
            component: <GroundingExercise />,
          },
          {
            title: 'Thought Dump Journaling',
            component: <JournalingPrompt emotion={emotion} />,
          },
          {
            title: 'Complete',
            component: (
              <div className="text-center space-y-6">
                <Heart className="w-24 h-24 mx-auto text-pink-500" />
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  Well Done!
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  You've successfully interrupted the overthinking cycle. Notice how your mind feels now.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  These grounding techniques help you break free from rumination. Let's explore more strategies.
                </p>
              </div>
            ),
          },
        ];

      case 'smoking':
        return [
          {
            title: 'Acknowledgement',
            component: (
              <div className="text-center space-y-6">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${emotion.color} flex items-center justify-center text-6xl shadow-xl`}>
                  {emotion.icon}
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  You're experiencing a craving
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Cravings are temporary. They rise like waves and will fall. You have the strength to ride this out.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Let's use proven techniques to help this urge pass.
                </p>
              </div>
            ),
          },
          {
            title: 'Urge Surfing',
            component: <UrgeSurfing />,
          },
          {
            title: 'Breathing + Delay',
            component: <BreathingExercise emotion={emotion} />,
          },
          {
            title: 'Replacement Action',
            component: <ReplacementAction />,
          },
          {
            title: 'Complete',
            component: (
              <div className="text-center space-y-6">
                <Heart className="w-24 h-24 mx-auto text-pink-500" />
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  You Did It!
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  You've successfully navigated through a craving. That takes real strength.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Each time you resist, you're rewiring your brain. Let's learn more about managing cravings.
                </p>
              </div>
            ),
          },
        ];

      case 'procrastination':
        return [
          {
            title: 'Acknowledgement',
            component: (
              <div className="text-center space-y-6">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${emotion.color} flex items-center justify-center text-6xl shadow-xl`}>
                  {emotion.icon}
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  You're stuck in procrastination
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Procrastination isn't laziness - it's often fear, overwhelm, or perfectionism in disguise.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Let's break through the resistance together with practical strategies.
                </p>
              </div>
            ),
          },
          {
            title: 'Task Chunking',
            component: <TaskChunking />,
          },
          {
            title: '2-Minute Rule',
            component: <TwoMinuteRule />,
          },
          {
            title: 'Visual Progress',
            component: <VisualProgress />,
          },
          {
            title: 'Complete',
            component: (
              <div className="text-center space-y-6">
                <Heart className="w-24 h-24 mx-auto text-pink-500" />
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  You're Ready to Start!
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  You've learned practical strategies to overcome procrastination. Remember: starting is the hardest part.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Use these techniques whenever you feel stuck. Let's explore more ways to build momentum.
                </p>
              </div>
            ),
          },
        ];

      case 'shyness':
        return [
          {
            title: 'Acknowledgement',
            component: (
              <div className="text-center space-y-6">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${emotion.color} flex items-center justify-center text-6xl shadow-xl`}>
                  {emotion.icon}
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  Feeling shy is completely normal
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Shyness is your mind trying to protect you, but it doesn't have to control your social life.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Let's build your confidence step by step with gentle, proven techniques.
                </p>
              </div>
            ),
          },
          {
            title: 'Gradual Exposure',
            component: <GradualExposure />,
          },
          {
            title: 'Social Scripts',
            component: <SocialScripts />,
          },
          {
            title: 'Posture & Breathing',
            component: <PostureBreathing emotion={emotion} />,
          },
          {
            title: 'Self-Compassion',
            component: <SelfCompassion />,
          },
          {
            title: 'Complete',
            component: (
              <div className="text-center space-y-6">
                <Heart className="w-24 h-24 mx-auto text-pink-500" />
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  You're Building Confidence!
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  You've learned practical tools to navigate social situations with more ease and confidence.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Remember: small steps lead to big changes. Let's discover more strategies for social comfort.
                </p>
              </div>
            ),
          },
        ];

      case 'rejection':
        return [
          {
            title: 'Acknowledgement',
            component: (
              <div className="text-center space-y-6">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${emotion.color} flex items-center justify-center text-6xl shadow-xl`}>
                  {emotion.icon}
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  You're feeling rejected or criticized
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Rejection sensitivity makes small moments feel overwhelming, but you can learn to see them clearly.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Let's separate facts from fears and find a balanced perspective.
                </p>
              </div>
            ),
          },
          {
            title: 'Reality Check',
            component: <ThoughtRealityCheck />,
          },
          {
            title: 'Emotion Labeling',
            component: <EmotionLabeling />,
          },
          {
            title: 'Response Delay',
            component: <ResponseDelay />,
          },
          {
            title: 'Reframing',
            component: <ReframingPractice />,
          },
          {
            title: 'Complete',
            component: (
              <div className="text-center space-y-6">
                <Heart className="w-24 h-24 mx-auto text-pink-500" />
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  You've Gained Perspective!
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  You've practiced seeing situations more clearly and responding with balance instead of reaction.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  These skills help you navigate relationships with more security. Let's explore more strategies.
                </p>
              </div>
            ),
          },
        ];

      case 'alcohol':
        return [
          {
            title: 'Acknowledgement',
            component: (
              <div className="text-center space-y-6">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${emotion.color} flex items-center justify-center text-6xl shadow-xl`}>
                  {emotion.icon}
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  You're facing an alcohol craving
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Recognizing the pattern is the first step toward change. You have the strength to make different choices.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Let's work through this craving together with evidence-based techniques.
                </p>
              </div>
            ),
          },
          {
            title: 'Trigger Identification',
            component: <TriggerIdentification />,
          },
          {
            title: 'Urge Surfing',
            component: <UrgeSurfing emotion="alcohol" />,
          },
          {
            title: 'Breathing Exercise',
            component: <BreathingExercise emotion={emotion} />,
          },
          {
            title: 'Substitution Habits',
            component: <SubstitutionHabits />,
          },
          {
            title: 'Complete',
            component: (
              <div className="text-center space-y-6">
                <Heart className="w-24 h-24 mx-auto text-pink-500" />
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  You're Taking Control!
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  You've navigated through the craving and identified healthier alternatives. That's real progress.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Each time you make this choice, you're building new patterns. Let's learn more about recovery.
                </p>
              </div>
            ),
          },
        ];

      default:
        return [];
    }
  };

  const steps = getStepsForEmotion();
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate(`/emotion/${emotionId}/overview`);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <Card className="max-w-4xl w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur border-none shadow-2xl">
        <CardContent className="p-8 sm:p-12">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="mb-8">
            {steps[currentStep].component}
          </div>

          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-6"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
            >
              {currentStep === steps.length - 1 ? 'Learn More' : 'Next Step'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}