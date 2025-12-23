import { Link } from 'react-router-dom';
import { ArrowRight, Heart, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { emotions } from '../data/emotions';

export function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
          Understand Your Emotions
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Heal Step by Step
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Feelix helps you understand and cope with your emotions through psychologically grounded techniques before showing educational content.
        </p>
        <Link to="/emotions">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg">
            How are you feeling today?
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      {/* Process Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100">
          The Feelix Process
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-3xl">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Select Emotion</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Choose how you're feeling right now from our emotion cards.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-3xl">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Guided Coping Steps</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Follow gentle exercises to calm your mind and body.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center text-3xl">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Reflection & Insights</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Learn about your emotion and discover healthy coping strategies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Emotion Cards Preview */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100">
          Common Emotions We Support
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {emotions.map((emotion) => (
            <Link key={emotion.id} to={`/emotion/${emotion.id}/flow`}>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`text-5xl w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${emotion.color}`}>
                      {emotion.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{emotion.name}</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{emotion.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-3xl shadow-lg p-8 mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100">
          Why Choose Feelix?
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Immediate Support</h4>
              <p className="text-gray-600 dark:text-gray-300">Get instant coping techniques when you need them most.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Evidence-Based</h4>
              <p className="text-gray-600 dark:text-gray-300">Techniques grounded in psychology and mindfulness.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Action First</h4>
              <p className="text-gray-600 dark:text-gray-300">Cope before you learn - regulate your emotions immediately.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Private & Secure</h4>
              <p className="text-gray-600 dark:text-gray-300">Your emotional journey stays with you - stored locally.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl shadow-lg p-12">
        <Heart className="h-16 w-16 text-white mx-auto mb-4" />
        <h3 className="text-3xl font-semibold text-white mb-4">
          You're Not Alone
        </h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
          Everyone experiences difficult emotions. Feelix is here to guide you through them with compassion and understanding.
        </p>
        <Link to="/emotions">
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
