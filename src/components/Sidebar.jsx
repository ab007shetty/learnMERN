import React, { useState, useEffect } from 'react';
import { Search, X, HelpCircle, Hash, Code2, Filter } from 'lucide-react';
import puzzles from '../data/puzzles';

const MAX_NAME_LENGTH = 20;

function truncateName(name) {
  return name.length > MAX_NAME_LENGTH ? name.slice(0, MAX_NAME_LENGTH - 3) + '...' : name;
}

const FILTER_OPTIONS = [
  { id: 'all', label: 'All' },
  { id: 'react', label: 'React' },
  { id: 'algo', label: 'Algo' },
  { id: 'arrays', label: 'Arrays' },
  { id: 'strings', label: 'Strings' },
  { id: 'corejs', label: 'Core JS' },
];

const FilterDropdown = ({ isOpen, onClose, selectedFilter, onFilterChange }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0"
        style={{ zIndex: 999 }}
        onClick={onClose}
      />
      <div 
        className="absolute left-full top-0 ml-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 w-24"
        style={{ zIndex: 1000 }}
      >
        {FILTER_OPTIONS.map((option) => (
          <button
            key={option.id}
            onClick={() => {
              onFilterChange(option.id);
              onClose();
            }}
            className={`w-full px-3 py-2 text-left text-sm transition-all duration-200 ${
              selectedFilter === option.id
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </>
  );
};

const Sidebar = ({
  sidebarOpen,
  onSidebarToggle,
  selected,
  setSelected,
  programs,
  INTRO,
  QUESTIONS_KEY,
  PUZZLES_KEY,
  SIDEBAR_WIDTH
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [totalQuestionsCount, setTotalQuestionsCount] = useState(null);
  const [loadingQuestionCount, setLoadingQuestionCount] = useState(false);

  const puzzlesCount = puzzles.length;

  const loadQuestionCounts = async () => {
    setLoadingQuestionCount(true);
    try {
      const questionModules = await Promise.all([
        import('../data/questions/htmlCssQuestions.js').catch(() => ({ default: [] })),
        import('../data/questions/coreJsQuestions.js').catch(() => ({ default: [] })),
        import('../data/questions/reactQuestions.js').catch(() => ({ default: [] })),
        import('../data/questions/nodeJsQuestions.js').catch(() => ({ default: [] })),
        import('../data/questions/databaseQuestions.js').catch(() => ({ default: [] })),
        import('../data/questions/systemDesignQuestions.js').catch(() => ({ default: [] })),
        import('../data/questions/otherQuestions.js').catch(() => ({ default: [] })),
      ]);

      const totalCount = questionModules.reduce((sum, module) => {
        return sum + (module.default?.length || 0);
      }, 0);

      setTotalQuestionsCount(totalCount);
    } catch (error) {
      console.error('Error loading question counts:', error);
      setTotalQuestionsCount(0);
    } finally {
      setLoadingQuestionCount(false);
    }
  };

  useEffect(() => {
    if (sidebarOpen && totalQuestionsCount === null) {
      loadQuestionCounts();
    }
  }, [sidebarOpen, totalQuestionsCount]);

  const playgroundProgram = programs.find(prog => prog.id === "playground");
  const otherPrograms = programs.filter(prog => prog.id !== "playground");

  const filteredPrograms = otherPrograms.filter(prog => {
    const matchesSearch = prog.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = 
      selectedFilter === "all"
        ? true
        : prog.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getFilterLabel = () => {
    const found = FILTER_OPTIONS.find(opt => opt.id === selectedFilter);
    return found ? found.label : 'All';
  };

  const getFilterColor = () => {
    switch (selectedFilter) {
      case 'react': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'algo': return 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400';
      case 'arrays': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'strings': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'corejs': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getFilterIconColor = () => {
    switch (selectedFilter) {
      case 'react': return 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/20';
      case 'algo': return 'text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-900/20';
      case 'arrays': return 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/20';
      case 'strings': return 'text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/20';
      case 'corejs': return 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/20';
      default: return 'text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700';
    }
  };

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
        
        <div className="p-6 flex flex-col h-full bg-white dark:bg-gray-900 overflow-hidden">
          {/* Top: Questions and JS Puzzles */}
          <nav className="flex flex-col gap-2 flex-shrink-0">
            <button
              onClick={() => {
                setSelected(QUESTIONS_KEY);
                if (totalQuestionsCount === null && !loadingQuestionCount) {
                  loadQuestionCounts();
                }
              }}
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
                {loadingQuestionCount ? (
                  <div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                  totalQuestionsCount || '...'
                )}
              </span>
            </button>

            <button
              onClick={() => setSelected(PUZZLES_KEY)}
              className={`flex items-center px-3 py-2.5 rounded-xl text-left transition-all duration-200 gap-3 w-full relative group ${
                selected === PUZZLES_KEY
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg transform scale-[1.02]'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:transform hover:scale-[1.01]'
              }`}
            >
              <div className={`p-1 rounded-lg ${selected === PUZZLES_KEY ? 'bg-white/20' : 'bg-purple-100 dark:bg-purple-900/30'}`}>
                <Code2 className={`w-4 h-4 ${selected === PUZZLES_KEY ? 'text-white' : 'text-purple-600 dark:text-purple-400'}`} />
              </div>
              <span className="font-medium">Puzzles</span>
              <span className={`absolute right-3 px-1.5 py-0.5 rounded-full text-xs font-bold ${
                selected === PUZZLES_KEY 
                  ? 'bg-white/20 text-white' 
                  : 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
              }`}>
                {puzzlesCount}
              </span>
            </button>
          </nav>
          
          {playgroundProgram && (
            <div className="mt-4 flex-shrink-0">
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
          
          <div className="my-6 border-t border-gray-200 dark:border-gray-700 flex-shrink-0" />
          
          <div className="flex flex-col flex-1 min-h-0">
            <div className="flex items-center justify-between mb-4 flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Programs
                </span>
                <div className="relative">
                  <button
                    onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                    className={`p-1 rounded-lg transition-all duration-200 ${getFilterIconColor()}`}
                    title="Filter programs"
                  >
                    <Filter className="w-4 h-4" />
                  </button>
                  <FilterDropdown
                    isOpen={isFilterDropdownOpen}
                    onClose={() => setIsFilterDropdownOpen(false)}
                    selectedFilter={selectedFilter}
                    onFilterChange={setSelectedFilter}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFilterColor()}`}>
                  {getFilterLabel()}
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-bold">
                  {filteredPrograms.length}
                </span>
              </div>
            </div>
            
            <div className="relative mb-4 flex-shrink-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
              />
            </div>
            
            <div 
              className="flex-1 min-h-0 overflow-y-auto scroll-smooth"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitScrollbar: { display: 'none' }
              }}
            >
              <style jsx="true">{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <nav className="flex flex-col gap-2 mx-2 mb-12">
                {filteredPrograms.map(prog => (
                  <button
                    key={prog.id}
                    onClick={() => setSelected(prog.id)}
                    className={`flex items-center px-3 py-2.5 rounded-xl text-left transition-all duration-200 gap-3 group w-full ${
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
                    {selectedFilter !== "all" && (
                      <button
                        onClick={() => setSelectedFilter("all")}
                        className="mt-2 text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Show all programs
                      </button>
                    )}
                  </div>
                )}
              </nav>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;