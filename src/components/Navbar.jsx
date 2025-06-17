import React from "react";
import { Code2, Menu, X, ExternalLink } from "lucide-react";

const Navbar = ({ sidebarOpen, onSidebarToggle }) => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-200 h-16 flex items-center px-4">
    {/* Sidebar toggle button (always visible) */}
    <button
      onClick={onSidebarToggle}
      className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 mr-2"
      aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
    >
      {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
    <div className="flex items-center gap-2 flex-1">
      <Code2 className="w-8 h-8 text-blue-600" />
      <h1 className="text-xl font-bold text-gray-900">React Basics</h1>
    </div>
    <a
      href="https://react.dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      <span>React Docs</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  </nav>
);

export default Navbar;