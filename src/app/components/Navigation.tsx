import { Link, useLocation } from 'react-router-dom';
import { Heart, Home, Sparkles, Wrench, Info } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-0">
            <img src="Logo.jpg" className="h-32 w-32 pt-10" />
            <span className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Feelix
            </span>
          </Link>
          
          <div className="flex items-center space-x-1">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            
            <Link
              to="/emotions"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive('/emotions') 
                  ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">Emotions</span>
            </Link>
            
            <Link
              to="/tools"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive('/tools') 
                  ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Wrench className="h-4 w-4" />
              <span className="hidden sm:inline">Tools</span>
            </Link>
            
            <Link
              to="/about"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive('/about') 
                  ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Info className="h-4 w-4" />
              <span className="hidden sm:inline">About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
