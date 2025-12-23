import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { EmotionsPage } from './pages/EmotionsPage';
import { EmotionCopingFlow } from './pages/EmotionCopingFlow';
import { EmotionOverview } from './pages/EmotionOverview';
import { ToolsPage } from './pages/ToolsPage';
import { AboutPage } from './pages/AboutPage';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/emotions" element={<EmotionsPage />} />
          <Route path="/emotion/:emotionId/flow" element={<EmotionCopingFlow />} />
          <Route path="/emotion/:emotionId/overview" element={<EmotionOverview />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}
