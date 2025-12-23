import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: "Hello! I'm here to provide supportive guidance. I'm not a replacement for professional help, but I can offer a listening ear and suggest coping strategies. How can I support you today?",
    },
  ]);
  const [input, setInput] = useState('');

  const responses: { [key: string]: string } = {
    stress: "It sounds like you're feeling stressed. That's completely understandable. Have you tried the breathing exercises in our tools section? Taking slow, deep breaths can help calm your nervous system. Is there a specific situation causing stress?",
    anxious: "Anxiety can feel overwhelming. Remember, it's your body trying to protect you, even if it feels uncomfortable. Try grounding yourself in the present moment - notice 5 things you can see right now. Would you like to try our grounding exercise?",
    sad: "I hear that you're feeling sad. It's okay to feel this way - your emotions are valid. Sometimes just acknowledging our feelings helps. Is there something specific that's weighing on you?",
    angry: "Anger is a natural emotion that tells us something matters to us. Before we react, let's pause. Try taking some slow breaths. What's behind this anger - is it hurt, frustration, or feeling unheard?",
    lonely: "Feeling lonely can be really painful. You're not alone in feeling alone. Connection is a basic human need. Have you considered reaching out to someone you trust, or perhaps joining a community or activity that interests you?",
    overwhelm: "When everything feels like too much, remember you don't have to do it all at once. What's one small thing you could do right now to feel a bit better? Breaking things down into smaller steps can help.",
    tired: "Physical and emotional exhaustion are real. Your body might be telling you it needs rest. Have you been able to take breaks? Sometimes self-care means simply resting without guilt.",
    help: "I'm here to listen and provide support. I can help you explore your feelings, suggest coping strategies, and point you toward helpful resources. Remember, if you're in crisis, please reach out to a mental health professional or crisis helpline.",
    default: "Thank you for sharing. I'm here to listen. Can you tell me more about how you're feeling? Or would you like me to suggest some coping techniques?",
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    for (const [keyword, response] of Object.entries(responses)) {
      if (input.includes(keyword)) {
        return response;
      }
    }

    if (input.includes('thank')) {
      return "You're welcome! Remember, taking steps to understand and manage your emotions is a sign of strength. I'm here whenever you need support.";
    }

    if (input.includes('better')) {
      return "I'm glad to hear you're feeling better! Keep practicing the techniques that work for you. Self-care is an ongoing journey, not a destination.";
    }

    return responses.default;
  };

  const sendMessage = () => {
    if (input.trim()) {
      const userMessage: Message = {
        role: 'user',
        content: input,
      };

      const botMessage: Message = {
        role: 'bot',
        content: getBotResponse(input),
      };

      setMessages([...messages, userMessage, botMessage]);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Support Chat
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A supportive companion to help you process your feelings. Remember, this is not a substitute for professional mental health care.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 h-[500px] flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-100'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            className="flex-1 bg-white/50 dark:bg-gray-600/50"
          />
          <Button
            onClick={sendMessage}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          💡 For immediate crisis support, please call 988 (Suicide & Crisis Lifeline)
        </div>
      </div>
    </div>
  );
}
