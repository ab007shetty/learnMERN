import React from 'react';
import { Code2, BookOpen, ExternalLink, MessageCircleQuestion, Play, FileText } from 'lucide-react';

const Introduction = () => {
  return (
    <div className="w-full min-h-screen md:min-h-0 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 overflow-y-auto md:overflow-y-visible">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Hero Section */}
        <div className="text-center mb-6 lg:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome to React Basics
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Master React concepts through examples and interactive playground.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-200 dark:border-gray-600">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Getting Started
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* ...your cards as before... */}
            {/* New to React Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl inline-flex mb-4">
                <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">New to React?</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3 text-sm sm:text-base">
                Goto Questions tab to Start with the basics of js and fundamental React concepts.
              </p>
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-sm">
                <BookOpen className="w-4 h-4" />
                <span>Basic Theory</span>
              </button>
            </div>
            {/* Practice Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl inline-flex mb-4">
                <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Want to Practice?</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3 text-sm sm:text-base">
                Goto JS Playground section for code snippets and live coding experience.
              </p>
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-sm">
                <Play className="w-4 h-4" />
                <span>JS Playground</span>
              </button>
            </div>
            {/* Interview Questions Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl inline-flex mb-4">
                <MessageCircleQuestion className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Interview Ready?</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3 text-sm sm:text-base">
                Practice with comprehensive React interview questions and coding challenges.
              </p>
              <a
                href="https://github.com/sudheerj/reactjs-interview-questions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
              >
                <MessageCircleQuestion className="w-4 h-4" />
                <span>Interview Prep</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            {/* React Docs Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl inline-flex mb-4">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Need Reference?</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3 text-sm sm:text-base">
                Access the official React documentation for comprehensive guides and API references.
              </p>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
              >
                <FileText className="w-4 h-4" />
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