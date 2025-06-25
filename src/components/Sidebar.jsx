import React, { useState } from 'react';
import { Search, X, HelpCircle, Hash, BookOpen } from 'lucide-react';
import questions from '../data/questions';

const MAX_NAME_LENGTH = 17;

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
}) => {
  const [searchTerm, setSearchTerm] = useState("");

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
        <div className="flex items-center justify-between px-6 py-2 border-b">
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
            <button
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
            <button
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
          {/* JS Playground Button (separate, always visible, right below Questions) */}
          {playgroundProgram && (
            <button
              onClick={() => setSelected(playgroundProgram.id)}
              className={`flex items-center px-4 py-2 rounded-md mt-1 text-left transition-colors gap-3 ${
                selected === playgroundProgram.id
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {playgroundProgram.icon ? (
                <playgroundProgram.icon className="w-5 h-5 text-blue-600" />
              ) : (
                <Hash className="w-5 h-5 text-blue-600" />
              )}
              <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-full">
                {truncateName(playgroundProgram.name)}
              </span>
            </button>
          )}
          <div className="my-4" />
          {/* Programs Section with Count and Scrollable List */}
          <div className="flex flex-col flex-1 min-h-0">
            <div className="flex items-center px-4 text-xs text-blue-700 font-bold uppercase tracking-wide opacity-75 relative mb-2">
              <span>Programs</span>
              <span className="absolute right-4 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-[11px] font-bold">
                {otherPrograms.length}
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
            {/* Scrollable, scrollbar-hidden Programs List, with margin at bottom */}
            <nav
              className="flex flex-col gap-1 overflow-y-auto flex-1 min-h-0 scrollbar-hide pr-1"
              style={{ maxHeight: "100%" }}
            >
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
                  <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-full">
                    {truncateName(prog.name)}
                  </span>
                </button>
              ))}
              {filteredPrograms.length === 0 && (
                <span className="px-4 py-2 text-gray-400 text-sm">No programs found</span>
              )}
              {/* Margin at the end for easier scroll-to-end */}
              <div className="mb-16" />
            </nav>
          </div>
        </div>
      </aside>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={onSidebarToggle}
        />
      )}
      {/* Hide scrollbar CSS for all browsers */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
};

export default Sidebar;