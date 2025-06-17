import React from 'react';
import { Search, X } from 'lucide-react';

const Sidebar = ({
  sidebarOpen,
  onSidebarToggle,
  searchTerm,
  setSearchTerm,
  selected,
  setSelected,
  filteredTopics,
  INTRO,
  SIDEBAR_WIDTH,
}) => (
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
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search topics..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      {/* Sidebar Nav */}
      <nav className="flex flex-col gap-1 overflow-y-auto flex-1">
        <button
          key={INTRO}
          onClick={() => setSelected(INTRO)}
          className={`flex items-center px-4 py-2 rounded-md text-left transition-colors gap-3 ${
            selected === INTRO
              ? 'bg-blue-100 text-blue-700 font-semibold'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Introduction
        </button>
        <div className="mt-3 mb-1 px-4 text-xs text-blue-700 font-bold uppercase tracking-wide opacity-75">
          Topics
        </div>
        {filteredTopics.map(topic => (
          <button
            key={topic.id}
            onClick={() => setSelected(topic.id)}
            className={`flex items-center px-4 py-2 rounded-md text-left transition-colors gap-3 ${
              selected === topic.id
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <topic.icon className="w-5 h-5 text-blue-600" />
            {topic.name}
          </button>
        ))}
        {filteredTopics.length === 0 && (
          <span className="px-4 py-2 text-gray-400 text-sm">No topics found</span>
        )}
      </nav>
    </div>
  </aside>
);

export default Sidebar;