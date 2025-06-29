import React, { useState } from 'react';
import { Search, X, HelpCircle, Hash, BookOpen } from 'lucide-react';
import questions from '../data/questions';

const MAX_NAME_LENGTH = 20;

function truncateName(name) {
  return name.length > MAX_NAME_LENGTH ? name.slice(0, MAX_NAME_LENGTH - 3) + '...' : name;
}

const Sidebar = ({
  sidebarOpen,
  onSidebarToggle,
  selected,
  setSelected,
  programs,
  INTRO,
  QUESTIONS_KEY,
  SIDEBAR_WIDTH,
  questionsCount
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Calculate questions count from imported questions if not provided
  const actualQuestionsCount = questionsCount !== undefined ? questionsCount : questions.length;

  // Find playground program (by id) and remove it from the programs list
  const playgroundProgram = programs.find(prog => prog.id === "playground");
  const otherPrograms = programs.filter(prog => prog.id !== "playground");

  const filteredPrograms = otherPrograms.filter(prog =>
    prog.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-2xl border-r border-gray-200 dark:border-gray-700 transition-all duration-300
          ${sidebarOpen ? "translate-x-0 z-40" : "-translate-x-full z-30"}
          md:translate-x-0 md:z-30
          ${sidebarOpen ? "" : "md:-ml-72"}
        `}
        style={{
          width: SIDEBAR_WIDTH,
          minWidth: sidebarOpen ? SIDEBAR_WIDTH : 0,
          transform:
            sidebarOpen || (typeof window !== 'undefined' && window.innerWidth >= 768)
              ? "translateX(0)"
              : `translateX(-${SIDEBAR_WIDTH}px)`,
        }}
      >
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
          <span className="text-lg font-bold text-gray-900 dark:text-white">Navigation</span>
          <button
            onClick={onSidebarToggle}
            className="p-1.5 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200"
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="p-6 flex flex-col h-full bg-white dark:bg-gray-900">
          {/* Top: Introduction and Questions */}
          <nav className="flex flex-col gap-2">
            <button
              onClick={() => setSelected(INTRO)}
              className={`flex items-center px-3 py-2.5 rounded-xl text-left transition-all duration-200 gap-3 group ${
                selected === INTRO
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-[1.02]'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:transform hover:scale-[1.01]'
              }`}
            >
              <div className={`p-1 rounded-lg ${selected === INTRO ? 'bg-white/20' : 'bg-blue-100 dark:bg-blue-900/30'}`}>
                <BookOpen className={`w-4 h-4 ${selected === INTRO ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
              </div>
              <span className="font-medium">Introduction</span>
            </button>
            
            <button
              onClick={() => setSelected(QUESTIONS_KEY)}
              className={`flex items-center px-3 py-2.5 rounded-xl text-left transition-all duration-200 gap-3 w-full relative group ${
                selected === QUESTIONS_KEY
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-[1.02]'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:transform hover:scale-[1.01]'
              }`}
            >
              <div className={`p-1 rounded-lg ${selected === QUESTIONS_KEY ? 'bg-white/20' : 'bg-blue-100 dark:bg-blue-900/30'}`}>
                <HelpCircle className={`w-4 h-4 ${selected === QUESTIONS_KEY ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
              </div>
              <span className="font-medium">Questions</span>
              <span className={`absolute right-3 px-1.5 py-0.5 rounded-full text-xs font-bold ${
                selected === QUESTIONS_KEY 
                  ? 'bg-white/20 text-white' 
                  : 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
              }`}>
                {actualQuestionsCount}
              </span>
            </button>
          </nav>
          
          {/* JS Playground Button */}
          {playgroundProgram && (
            <div className="mt-4">
              <button
                onClick={() => setSelected(playgroundProgram.id)}
                className={`flex items-center px-3 py-2.5 rounded-xl w-full text-left transition-all duration-200 gap-3 group ${
                  selected === playgroundProgram.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg transform scale-[1.02]'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:transform hover:scale-[1.01] border-2 border-dashed border-gray-300 dark:border-gray-600'
                }`}
              >
                <div className={`p-1 rounded-lg ${selected === playgroundProgram.id ? 'bg-white/20' : 'bg-emerald-100 dark:bg-emerald-900/30'}`}>
                  {playgroundProgram.icon ? (
                    <playgroundProgram.icon className={`w-4 h-4 ${selected === playgroundProgram.id ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}`} />
                  ) : (
                    <Hash className={`w-4 h-4 ${selected === playgroundProgram.id ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}`} />
                  )}
                </div>
                <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-full font-medium">
                  {truncateName(playgroundProgram.name)}
                </span>
              </button>
            </div>
          )}
          
          <div className="my-6 border-t border-gray-200 dark:border-gray-700" />
          
          {/* Programs Section */}
          <div className="flex flex-col flex-1 min-h-0">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                Programs
              </span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-bold">
                {otherPrograms.length}
              </span>
            </div>
            
            {/* Search for programs */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
              />
            </div>
            
            {/* Scrollable Programs List */}
            <div
              className="flex flex-col gap-2 overflow-y-auto overflow-x-hidden flex-1 min-h-0 scrollbar-hide"
              style={{ maxHeight: "100%" }}
            >
              <nav className="flex flex-col gap-2 mx-2">
              {filteredPrograms.map(prog => (
                <button
                  key={prog.id}
                  onClick={() => setSelected(prog.id)}
                  className={`flex items-center px-3 py-2.5 rounded-xl text-left transition-all duration-200 gap-3 group w-full flex-shrink-0 ${
                    selected === prog.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg transform scale-[1.02]'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:transform hover:scale-[1.01]'
                  }`}
                >
                  <div className={`p-1 rounded-lg ${selected === prog.id ? 'bg-white/20' : 'bg-purple-100 dark:bg-purple-900/30'}`}>
                    {prog.icon ? (
                      <prog.icon className={`w-4 h-4 ${selected === prog.id ? 'text-white' : 'text-purple-600 dark:text-purple-400'}`} />
                    ) : (
                      <Hash className={`w-4 h-4 ${selected === prog.id ? 'text-white' : 'text-purple-600 dark:text-purple-400'}`} />
                    )}
                  </div>
                  <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-full font-medium">
                    {truncateName(prog.name)}
                  </span>
                </button>
              ))}
              {filteredPrograms.length === 0 && (
                <div className="flex flex-col items-center justify-center py-8 text-gray-500 dark:text-gray-400">
                  <Search className="w-6 h-6 mb-2 opacity-50" />
                  <span className="text-sm">No programs found</span>
                </div>
              )}
              </nav>
              <div className="mb-16" />
            </div>
          </div>
        </div>
      </aside>
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden backdrop-blur-sm"
          onClick={onSidebarToggle}
        />
      )}
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
};

export default Sidebar;