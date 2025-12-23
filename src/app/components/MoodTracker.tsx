import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { format, subDays } from 'date-fns';

interface MoodEntry {
  date: string;
  mood: number;
  note?: string;
}

const moodEmojis = ['😢', '😞', '😐', '🙂', '😊'];
const moodLabels = ['Very Bad', 'Bad', 'Okay', 'Good', 'Great'];

export function MoodTracker() {
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [todayEntry, setTodayEntry] = useState<MoodEntry | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('moodEntries');
    if (stored) {
      const parsed = JSON.parse(stored);
      setEntries(parsed);
      
      const today = format(new Date(), 'yyyy-MM-dd');
      const todayMood = parsed.find((e: MoodEntry) => e.date === today);
      setTodayEntry(todayMood || null);
    }
  }, []);

  const saveMood = (mood: number) => {
    const today = format(new Date(), 'yyyy-MM-dd');
    const newEntry: MoodEntry = {
      date: today,
      mood,
    };

    const filtered = entries.filter(e => e.date !== today);
    const updated = [newEntry, ...filtered];
    
    setEntries(updated);
    setTodayEntry(newEntry);
    localStorage.setItem('moodEntries', JSON.stringify(updated));
    setSelectedMood(null);
  };

  const getLast7Days = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = subDays(new Date(), i);
      const dateStr = format(date, 'yyyy-MM-dd');
      const entry = entries.find(e => e.date === dateStr);
      days.push({
        date: dateStr,
        dayName: format(date, 'EEE'),
        mood: entry?.mood,
      });
    }
    return days;
  };

  const getAverageMood = () => {
    const last7 = getLast7Days().filter(d => d.mood !== undefined);
    if (last7.length === 0) return null;
    const sum = last7.reduce((acc, d) => acc + (d.mood || 0), 0);
    return Math.round(sum / last7.length);
  };

  const avgMood = getAverageMood();
  const last7Days = getLast7Days();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Mood Tracker
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Track your daily mood to identify patterns and see your progress over time.
        </p>
      </div>

      {/* Today's Mood */}
      <Card className="p-8 bg-white dark:bg-gray-700 border-none shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
          How are you feeling today?
        </h3>

        {todayEntry ? (
          <div className="text-center space-y-4">
            <div className="text-7xl">{moodEmojis[todayEntry.mood]}</div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              You recorded feeling: <span className="font-semibold">{moodLabels[todayEntry.mood]}</span>
            </p>
            <Button
              onClick={() => setTodayEntry(null)}
              variant="outline"
              className="mt-4"
            >
              Update Today's Mood
            </Button>
          </div>
        ) : (
          <div className="flex justify-center gap-4">
            {moodEmojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => saveMood(index)}
                onMouseEnter={() => setSelectedMood(index)}
                onMouseLeave={() => setSelectedMood(null)}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all hover:scale-110"
              >
                <div className="text-5xl mb-2">{emoji}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
                  {moodLabels[index]}
                </div>
              </button>
            ))}
          </div>
        )}
      </Card>

      {/* Weekly Overview */}
      <Card className="p-8 bg-white dark:bg-gray-700 border-none shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Last 7 Days
        </h3>

        <div className="flex justify-around items-end h-40 mb-4">
          {last7Days.map((day) => (
            <div key={day.date} className="flex flex-col items-center">
              <div
                className={`w-12 rounded-t-lg ${
                  day.mood !== undefined 
                    ? 'bg-gradient-to-t from-purple-400 to-pink-400' 
                    : 'bg-gray-200 dark:bg-gray-600'
                }`}
                style={{
                  height: day.mood !== undefined ? `${(day.mood + 1) * 20}%` : '10%',
                }}
              />
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {day.dayName}
              </div>
              {day.mood !== undefined && (
                <div className="text-2xl">{moodEmojis[day.mood]}</div>
              )}
            </div>
          ))}
        </div>

        {avgMood !== null && (
          <div className="text-center mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <p className="text-gray-700 dark:text-gray-200">
              Your average mood this week: <span className="text-3xl mx-2">{moodEmojis[avgMood]}</span>
              <span className="font-semibold">{moodLabels[avgMood]}</span>
            </p>
          </div>
        )}

        {entries.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 py-8">
            Start tracking your mood to see patterns emerge over time.
          </div>
        )}
      </Card>

      {/* Insights */}
      {entries.length >= 3 && (
        <Card className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 border-none shadow-lg text-white">
          <h3 className="text-xl font-semibold mb-4 text-center">💡 Insight</h3>
          <p className="text-center">
            You've been tracking your mood for {entries.length} days. Keep it up! 
            Regular mood tracking helps you understand your emotional patterns and identify what affects your wellbeing.
          </p>
        </Card>
      )}
    </div>
  );
}
