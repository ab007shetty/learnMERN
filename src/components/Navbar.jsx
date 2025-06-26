import React, { createContext, useContext, useState, useEffect } from "react";
import { Code2, Menu, X, Sun, Moon } from "lucide-react";

// Theme Context
export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (typeof window !== 'undefined') {
      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  };

  // Initialize theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      const shouldBeDark = saved === 'dark';
      
      setIsDark(shouldBeDark);
      
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Navbar = ({ sidebarOpen, onSidebarToggle }) => {
  const { isDark, toggleTheme } = useTheme();
  
  const handleThemeToggle = () => {
    console.log('Theme toggle clicked, current isDark:', isDark);
    toggleTheme();
  };
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 h-16 flex items-center px-6 transition-colors duration-200">
      {/* Sidebar toggle button */}
      <button
        onClick={onSidebarToggle}
        className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 mr-3 transition-all duration-200"
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      <div className="flex items-center gap-3 flex-1">
        <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
          <Code2 className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">React Basics</h1>
      </div>
      
      {/* Dark theme toggle */}
      <button
        onClick={handleThemeToggle}
        className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
        aria-label="Toggle dark mode"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </nav>
  );
};

export default Navbar;