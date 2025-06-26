import React from 'react';
import { Code2, BookOpen, ExternalLink } from 'lucide-react';

const Introduction = () => {
  return (
    <div className="w-full lg:h-[650px] lg:max-h-[650px] h-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-200 lg:overflow-hidden">
      <div className="max-w-6xl mx-auto p-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome to React Basics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Master React concepts, hooks, and practical examples through interactive learning experiences
          </p>
        </div>

        {/* Feature Cards */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 mb-8 border border-blue-200 dark:border-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Getting Started</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl inline-flex mb-4">
                <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">New to React?</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Start with the basics like useState and useEffect hooks to understand fundamental React concepts.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl inline-flex mb-4">
                <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Want to Practice?</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Each topic includes practical examples and code snippets you can experiment with.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 md:col-span-2 lg:col-span-1">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl inline-flex mb-4">
                <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Need Reference?</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Access the official React documentation for comprehensive guides and API references.
              </p>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>React Docs</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;