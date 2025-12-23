import { useState, useEffect } from 'react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Trash2, Plus, BookOpen } from 'lucide-react';
import { format } from 'date-fns';

interface JournalEntry {
  id: string;
  emotion?: string;
  response: string;
  timestamp: string;
}

export function EmotionJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('journalEntries');
    if (stored) {
      setEntries(JSON.parse(stored));
    }
  }, []);

  const addEntry = () => {
    if (newEntry.trim()) {
      const entry: JournalEntry = {
        id: Date.now().toString(),
        response: newEntry,
        timestamp: new Date().toISOString(),
      };
      const updated = [entry, ...entries];
      setEntries(updated);
      localStorage.setItem('journalEntries', JSON.stringify(updated));
      setNewEntry('');
      setIsAdding(false);
    }
  };

  const deleteEntry = (id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem('journalEntries', JSON.stringify(updated));
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Emotion Journal
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Keep track of your thoughts and feelings. Writing helps process emotions and gain insights over time.
        </p>
      </div>

      {!isAdding ? (
        <Button
          onClick={() => setIsAdding(true)}
          size="lg"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Journal Entry
        </Button>
      ) : (
        <Card className="p-6 bg-white dark:bg-gray-700 border-none shadow-lg">
          <Textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="How are you feeling today? What's on your mind?"
            className="min-h-[150px] mb-4 bg-white/50 dark:bg-gray-600/50"
          />
          <div className="flex gap-2">
            <Button onClick={addEntry} className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Save Entry
            </Button>
            <Button onClick={() => {
              setIsAdding(false);
              setNewEntry('');
            }} variant="outline">
              Cancel
            </Button>
          </div>
        </Card>
      )}

      <div className="space-y-4">
        {entries.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p>No journal entries yet. Start writing to track your emotional journey.</p>
          </div>
        ) : (
          entries.map((entry) => (
            <Card key={entry.id} className="p-6 bg-white dark:bg-gray-700 border-none shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  {entry.emotion && (
                    <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-2">
                      {entry.emotion}
                    </span>
                  )}
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {format(new Date(entry.timestamp), 'MMMM d, yyyy • h:mm a')}
                  </div>
                </div>
                <button
                  onClick={() => deleteEntry(entry.id)}
                  className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              <p className="text-gray-700 dark:text-gray-200 whitespace-pre-wrap">
                {entry.response}
              </p>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}