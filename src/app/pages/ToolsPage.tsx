import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Wind, BookOpen, MessageCircle, BarChart3 } from 'lucide-react';
import { BreathingTimer } from '../components/BreathingTimer';
import { EmotionJournal } from '../components/EmotionJournal';
import { Chatbot } from '../components/Chatbot';
import { MoodTracker } from '../components/MoodTracker';

export function ToolsPage() {
  const [activeTab, setActiveTab] = useState('breathing');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Wellness Tools
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore our collection of tools to support your emotional wellbeing anytime you need them.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur p-2 rounded-lg">
          <TabsTrigger value="breathing" className="flex items-center space-x-2">
            <Wind className="h-4 w-4" />
            <span className="hidden sm:inline">Breathing Timer</span>
            <span className="sm:hidden">Breathe</span>
          </TabsTrigger>
          <TabsTrigger value="journal" className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Emotion Journal</span>
            <span className="sm:hidden">Journal</span>
          </TabsTrigger>
          <TabsTrigger value="chatbot" className="flex items-center space-x-2">
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Support Chat</span>
            <span className="sm:hidden">Chat</span>
          </TabsTrigger>
          <TabsTrigger value="mood" className="flex items-center space-x-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Mood Tracker</span>
            <span className="sm:hidden">Tracker</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="breathing">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
            <CardContent className="p-8">
              <BreathingTimer />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="journal">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
            <CardContent className="p-8">
              <EmotionJournal />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chatbot">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
            <CardContent className="p-8">
              <Chatbot />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mood">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-none shadow-lg">
            <CardContent className="p-8">
              <MoodTracker />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
