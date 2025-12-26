import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { emotions } from '../data/emotions';
import { AlertCircle, Heart, Lightbulb, ArrowLeft } from 'lucide-react';

export function EmotionOverview() {
  const { emotionId } = useParams();
  const emotion = emotions.find(e => e.id === emotionId);

  if (!emotion) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/emotions" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Emotions
      </Link>

      <div className="text-center mb-12">
        <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${emotion.color} flex items-center justify-center text-6xl shadow-xl`}>
          {emotion.icon}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Understanding {emotion.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Now that you've completed the coping exercises, let's learn more about {emotion.name.toLowerCase()} and how to manage it.
        </p>
      </div>

      <div className="space-y-8">
        {/* What is this emotion */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Heart className="h-8 w-8 text-pink-500 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  What is {emotion.name}?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {emotion.name} is a natural human emotion that everyone experiences. It's your mind and body's way of responding to certain situations.
                  Understanding it helps you respond to it more effectively.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Triggers */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-8 w-8 text-amber-500 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  Common Triggers
                </h2>
                <ul className="space-y-2">
                  {emotion.triggers.map((trigger, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{trigger}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Physical & Mental Symptoms */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Physical & Mental Signs
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When experiencing {emotion.name.toLowerCase()}, you might notice:
            </p>
            <ul className="space-y-2">
              {emotion.symptoms.map((symptom, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-300">{symptom}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Healthy Coping Strategies */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <Lightbulb className="h-8 w-8 text-yellow-500 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  Healthy Coping Strategies
                </h2>
                <ul className="space-y-2">
                  {emotion.copingStrategies.map((strategy, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{strategy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* You're not alone */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-none shadow-lg">
          <CardContent className="p-8 text-center">
            <Heart className="h-16 w-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-semibold mb-4 text-white">
              You're Not Alone
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
              Remember, experiencing {emotion.name.toLowerCase()} is a normal part of being human.
              If these feelings persist or become overwhelming, consider reaching out to a mental health professional.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={`/emotion/${emotion.id}/flow`}>
                <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Practice Coping Again
                </Button>
              </Link>
              <Link to="/tools">
                <Button variant="outline" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Explore Tools
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
