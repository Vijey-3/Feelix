import { Card, CardContent } from '../components/ui/card';
import { Heart, Shield, Target, Users } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Heart className="h-20 w-20 mx-auto mb-6 text-pink-500" />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          About Feelix
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A compassionate companion for your emotional wellbeing journey
        </p>
      </div>

      <div className="space-y-8">
        {/* Mission */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <Target className="h-12 w-12 text-purple-600 dark:text-purple-400 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  Feelix helps you regulate emotions before analyzing them. We believe in the power of immediate coping techniques 
                  to help you feel better in the moment, followed by understanding to prevent future distress.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Our approach is simple: <span className="font-semibold">Feel → Cope → Learn</span>. This way, you're never overwhelmed 
                  with information when you're already struggling. We meet you where you are.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What We Offer */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 text-center">
              What We Offer
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                  ✨ Guided Coping Exercises
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Step-by-step techniques to calm your mind and body, including breathing exercises and grounding activities.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                  📚 Emotion Education
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learn about emotions after you've calmed down, with information on triggers, symptoms, and healthy coping strategies.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                  🛠️ Wellness Tools
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access a breathing timer, emotion journal, mood tracker, and supportive chatbot anytime you need them.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                  🔒 Private & Secure
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your data stays on your device. We don't collect, store, or share any personal information.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Who It's For */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <Users className="h-12 w-12 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  Who Is Feelix For?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  Feelix is designed for young adults and students experiencing:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                    Stress from work, school, or relationships
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                    Anxiety about the future or daily situations
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                    Overthinking and rumination
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                    Anger management challenges
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                    Sadness or low mood
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                    Processing difficult life experiences
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <Shield className="h-12 w-12 text-amber-600 dark:text-amber-400 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  Important Information
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <span className="font-semibold">Feelix is a self-help tool, not a medical diagnosis or treatment.</span> We provide 
                    educational content and coping techniques based on evidence-based practices, but we are not a substitute for 
                    professional mental health care.
                  </p>
                  <p>
                    If you're experiencing a mental health crisis, please contact:
                  </p>
                  <ul className="space-y-2 pl-4">
                    <li>• <span className="font-semibold">988</span> - Suicide & Crisis Lifeline (US)</li>
                    <li>• <span className="font-semibold">Crisis Text Line</span> - Text HOME to 741741</li>
                    <li>• Your local emergency services or mental health crisis center</li>
                  </ul>
                  <p>
                    For ongoing mental health support, please consult with a licensed therapist, counselor, or psychiatrist.
                  </p>
                  <p className="text-sm italic">
                    Feelix is not intended for collecting Personally Identifiable Information (PII) or securing sensitive data.
                    All information is stored locally on your device.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-none shadow-lg">
          <CardContent className="p-8 text-center text-white">
            <h2 className="text-3xl font-semibold mb-4">
              Our Philosophy
            </h2>
            <p className="text-xl mb-6">
              "Emotions are not problems to be solved, but experiences to be felt and understood."
            </p>
            <p className="text-white/90 max-w-3xl mx-auto">
              At Feelix, we believe that everyone deserves access to emotional support tools. 
              Whether you're navigating everyday stress or working through bigger challenges, 
              we're here to provide a calm, supportive space for your journey toward emotional wellness.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
