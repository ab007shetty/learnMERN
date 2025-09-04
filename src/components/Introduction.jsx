import React from 'react';
import { Code2, BookOpen, ExternalLink, MessageCircleQuestion, Play, FileText, Database, Globe, Layers, Zap, Terminal, Rocket } from 'lucide-react';

const Introduction = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-y-auto">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-full px-6 py-2 mb-6">
            <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 font-medium text-sm">Full Stack Development</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent leading-tight">
            Learn MERN
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-full px-4 py-2">
              <Database className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-green-700 dark:text-green-300 font-medium text-sm">MongoDB</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2">
              <Globe className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">Express.js</span>
            </div>
            <div className="flex items-center gap-2 bg-cyan-100 dark:bg-cyan-900 border border-cyan-200 dark:border-cyan-700 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-cyan-700 dark:text-cyan-300 font-medium text-sm">React</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900 border border-emerald-200 dark:border-emerald-700 rounded-full px-4 py-2">
              <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-700 dark:text-emerald-300 font-medium text-sm">Node.js</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Learning Path */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Learning Path
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {/* MongoDB Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-2xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                    <Database className="w-7 h-7 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">MongoDB</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  NoSQL database for modern applications with flexible document storage and powerful querying.
                </p>
                <a
                  href="https://docs.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold group-hover:gap-3 transition-all"
                >
                  <span>MongoDB Docs</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Express.js Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                    <Globe className="w-7 h-7 text-gray-600 dark:text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Express.js</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Fast, minimal web framework for Node.js backend development with robust routing and middleware.
                </p>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-semibold group-hover:gap-3 transition-all"
                >
                  <span>Express Docs</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* React Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-2xl border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-600 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900 rounded-xl group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800 transition-colors">
                    <Zap className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">React</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Build dynamic user interfaces with component-based architecture and modern hooks.
                </p>
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all"
                >
                  <span>React Docs</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Node.js Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-2xl border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-xl group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
                    <Terminal className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Node.js</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  JavaScript runtime for building scalable server-side applications and APIs.
                </p>
                <a
                  href="https://nodejs.org/en/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold group-hover:gap-3 transition-all"
                >
                  <span>Node.js Docs</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Start</h2>
            
            <div className="space-y-4">
              {/* Beginner Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-xl p-6 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-bold text-gray-900 dark:text-white">New to MERN?</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  Start with the fundamentals and build your first full-stack application step by step.
                </p>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-3 rounded-lg transition-all font-semibold text-sm shadow-md hover:shadow-lg">
                  Begin Tutorial
                </button>
              </div>

              {/* Practice Card */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl p-6 border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <h3 className="font-bold text-gray-900 dark:text-white">Code Playground</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  Experiment with MERN components in an interactive coding environment.
                </p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-3 rounded-lg transition-all font-semibold text-sm shadow-md hover:shadow-lg">
                  Open Playground
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interview Preparation Resources */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-3">
            <MessageCircleQuestion className="w-7 h-7 text-orange-600 dark:text-orange-400" />
            Interview Preparation
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Comprehensive collection of interview questions and coding challenges for MERN stack technologies
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://github.com/sudheerj/javascript-interview-questions"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-600 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-xl group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800 transition-colors mb-4">
                <Code2 className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-center mb-2">JavaScript</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-3">500+ Interview Questions</p>
              <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-medium text-sm">
                <span>View Questions</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            <a
              href="https://github.com/sudheerj/reactjs-interview-questions"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-600 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="p-4 bg-cyan-100 dark:bg-cyan-900 rounded-xl group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800 transition-colors mb-4">
                <Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-center mb-2">React</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-3">500+ Interview Questions</p>
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium text-sm">
                <span>View Questions</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            <a
              href="https://github.com/sudheerj/nodejs-interview-questions"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="p-4 bg-emerald-100 dark:bg-emerald-900 rounded-xl group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors mb-4">
                <Terminal className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-center mb-2">Node.js</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-3">200+ Interview Questions</p>
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                <span>View Questions</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            <a
              href="https://github.com/donnemartin/system-design-primer"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-xl group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors mb-4">
                <Layers className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-center mb-2">System Design</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-3">Architecture & Scalability</p>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium text-sm">
                <span>Learn Design</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;