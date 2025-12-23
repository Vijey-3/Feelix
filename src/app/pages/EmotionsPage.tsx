import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { emotions } from '../data/emotions';

export function EmotionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          How are you feeling?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Choose the emotion that best describes how you're feeling right now. We'll guide you through coping exercises.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {emotions.map((emotion) => (
          <Link key={emotion.id} to={`/emotion/${emotion.id}/flow`}>
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer h-full">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`text-6xl w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br ${emotion.color} shadow-lg`}>
                    {emotion.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    {emotion.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {emotion.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Can't find what you're looking for?
        </p>
        <Link 
          to="/tools" 
          className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
        >
          Try our general wellness tools →
        </Link>
      </div>
    </div>
  );
}
