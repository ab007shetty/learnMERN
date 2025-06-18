import React from 'react';
import { Search, X, HelpCircle, Hash, BookOpen } from 'lucide-react';
import questions from '../data/questions';

const QUESTIONS_KEY = "questions";

const Sidebar = ({
  sidebarOpen,
  onSidebarToggle,
  searchTerm,
  setSearchTerm,
  selected,
  setSelected,
  programs, // <-- now passed in as a prop
  INTRO,
  SIDEBAR_WIDTH,
}) => {
  // Rename useState to Counter if desired
  const allPrograms = programs.map(prog => ({
    ...prog,
    displayName: prog.name.trim().toLowerCase() === "usestate" ? "Counter" : prog.name
  }));

  const filteredPrograms = allPrograms.filter(prog =>
    prog.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside
      className={`
        fixed top-0 left-0 z-40 h-full bg-white shadow-lg transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        ${sidebarOpen ? "" : "md:-ml-72"}
      `}
      style={{
        width: SIDEBAR_WIDTH,
        minWidth: sidebarOpen ? SIDEBAR_WIDTH : 0,
        transform:
          sidebarOpen || window.innerWidth >= 768
            ? "translateX(0)"
            : `translateX(-${SIDEBAR_WIDTH}px)`,
      }}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <span className="text-lg font-bold text-gray-900">Menu</span>
        <button
          onClick={onSidebarToggle}
          className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="p-6 flex flex-col h-full">
        {/* Top: Introduction and Questions */}
        <nav className="flex flex-col gap-1">
          {/* Introduction */}
          <button
            key={INTRO}
            onClick={() => setSelected(INTRO)}
            className={`flex items-center px-4 py-2 rounded-md text-left transition-colors gap-3 ${
              selected === INTRO
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <BookOpen className="w-5 h-5 text-blue-600" />
            Introduction
          </button>
          {/* Questions Section with Count */}
          <button
            key={QUESTIONS_KEY}
            onClick={() => setSelected(QUESTIONS_KEY)}
            className={`flex items-center px-4 py-2 rounded-md text-left transition-colors gap-3 w-full relative ${
              selected === QUESTIONS_KEY
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <HelpCircle className="w-5 h-5 text-blue-600" />
            Questions
            <span className="absolute right-4 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-[11px] font-bold">
              {questions.length}
            </span>
          </button>
        </nav>
        {/* Gap between Questions and Programs */}
        <div className="my-4" />
        {/* Programs Section with Count */}
        <div>
          <div className="flex items-center px-4 text-xs text-blue-700 font-bold uppercase tracking-wide opacity-75 relative mb-2">
            <span>Programs</span>
            <span className="absolute right-4 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-[11px] font-bold">
              {allPrograms.length}
            </span>
          </div>
          {/* Search for programs */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search programs..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          {/* Main program topics: Counter, ToDo, PropsDemo, etc. */}
          <nav className="flex flex-col gap-1 overflow-y-auto flex-1">
            {filteredPrograms.map(prog => (
              <button
                key={prog.id}
                onClick={() => setSelected(prog.id)}
                className={`flex items-center px-4 py-2 rounded-md text-left transition-colors gap-3 ${
                  selected === prog.id
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {prog.icon ? (
                  <prog.icon className="w-5 h-5 text-blue-600" />
                ) : (
                  <Hash className="w-5 h-5 text-blue-600" />
                )}
                {prog.displayName}
              </button>
            ))}
            {filteredPrograms.length === 0 && (
              <span className="px-4 py-2 text-gray-400 text-sm">No programs found</span>
            )}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;