import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle, 
  Search, 
  X, 
  Layout, 
  Code, 
  Atom, 
  Server, 
  Database, 
  Network, 
  Globe,
  Loader2,
  ChevronDown,
  Filter
} from 'lucide-react';

// Lazy load question modules for performance
const loadQuestions = async (category) => {
  switch (category) {
    case 'htmlcss':
      return (await import('../data/questions/htmlCssQuestions.js')).default;
    case 'corejs':
      return (await import('../data/questions/coreJsQuestions.js')).default;
    case 'react':
      return (await import('../data/questions/reactQuestions.js')).default;
    case 'nodejs':
      return (await import('../data/questions/nodeJsQuestions.js')).default;
    case 'database':
      return (await import('../data/questions/databaseQuestions.js')).default;
    case 'systemdesign':
      return (await import('../data/questions/systemDesignQuestions.js')).default;
    case 'other':
      return (await import('../data/questions/otherQuestions.js')).default;
    default:
      return [];
  }
};

// Helper to highlight search matches in text
function highlightText(text, searchTerm) {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? <mark key={i} className="bg-yellow-200 dark:bg-yellow-600 px-1 rounded">{part}</mark> : part
  );
}

// Enhanced categories with question counts that will be loaded dynamically
const categories = [
  { 
    id: 'htmlcss', 
    name: 'HTML & CSS', 
    icon: Layout, 
    color: 'from-orange-500 to-red-500',
    iconColor: 'text-orange-500',
    bgGradient: 'from-orange-100 via-red-50 to-pink-100 dark:from-orange-900/30 dark:via-red-900/20 dark:to-pink-900/30',
    description: 'Markup, styling, and layout fundamentals'
  },
  { 
    id: 'corejs', 
    name: 'Core JavaScript', 
    icon: Code, 
    color: 'from-yellow-500 to-orange-500',
    iconColor: 'text-yellow-500',
    bgGradient: 'from-yellow-100 via-amber-50 to-orange-100 dark:from-yellow-900/30 dark:via-amber-900/20 dark:to-orange-900/30',
    description: 'JavaScript language concepts and APIs'
  },
  { 
    id: 'react', 
    name: 'React', 
    icon: Atom, 
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-500',
    bgGradient: 'from-blue-100 via-sky-50 to-cyan-100 dark:from-blue-900/30 dark:via-sky-900/20 dark:to-cyan-900/30',
    description: 'Components, hooks, and React ecosystem'
  },
  { 
    id: 'nodejs', 
    name: 'Node.js', 
    icon: Server, 
    color: 'from-green-500 to-emerald-500',
    iconColor: 'text-green-500',
    bgGradient: 'from-green-100 via-emerald-50 to-teal-100 dark:from-green-900/30 dark:via-emerald-900/20 dark:to-teal-900/30',
    description: 'Server-side JavaScript and APIs'
  },
  { 
    id: 'database', 
    name: 'Database', 
    icon: Database, 
    color: 'from-indigo-500 to-purple-500',
    iconColor: 'text-indigo-500',
    bgGradient: 'from-indigo-100 via-purple-50 to-violet-100 dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-violet-900/30',
    description: 'SQL, NoSQL, and data modeling'
  },
  { 
    id: 'systemdesign', 
    name: 'System Design', 
    icon: Network, 
    color: 'from-slate-500 to-gray-500',
    iconColor: 'text-slate-500',
    bgGradient: 'from-slate-100 via-gray-50 to-zinc-100 dark:from-slate-900/30 dark:via-gray-900/20 dark:to-zinc-900/30',
    description: 'Scalability, architecture, and patterns'
  },
  { 
    id: 'other', 
    name: 'Other Topics', 
    icon: Globe, 
    color: 'from-teal-500 to-cyan-500',
    iconColor: 'text-teal-500',
    bgGradient: 'from-teal-100 via-cyan-50 to-blue-100 dark:from-teal-900/30 dark:via-cyan-900/20 dark:to-blue-900/30',
    description: 'General programming and tech concepts'
  },
];

const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
    <span className="ml-2 text-gray-600 dark:text-gray-400">Loading questions...</span>
  </div>
);

const Questions = ({ icon: Icon = HelpCircle, name = "Questions" }) => {
  // All hooks must be called in the same order every render
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredIndexes, setFilteredIndexes] = useState([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [categoryCounts, setCategoryCounts] = useState({});
  const [loadingCounts, setLoadingCounts] = useState(false);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const [open, setOpen] = useState(false);
const dropdownRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  // Load category question counts
  useEffect(() => {
    const loadCategoryCounts = async () => {
      setLoadingCounts(true);
      try {
        const counts = {};
        for (const category of categories) {
          try {
            const questions = await loadQuestions(category.id);
            counts[category.id] = questions?.length || 0;
          } catch (err) {
            console.error(`Failed to load questions for ${category.id}:`, err);
            counts[category.id] = 0;
          }
        }
        setCategoryCounts(counts);
      } catch (err) {
        console.error('Failed to load category counts:', err);
        setError('Failed to load category counts. Some categories may show zero questions.');
      } finally {
        setLoadingCounts(false);
      }
    };

    // Only load counts if not already loaded
    if (Object.keys(categoryCounts).length === 0) {
      loadCategoryCounts();
    }
  }, [categoryCounts]);

  // Responsive: detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load questions when category is selected
  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      setError(null);
      loadQuestions(selectedCategory.id)
        .then(loadedQuestions => {
          setQuestions(loadedQuestions || []);
          setCurrentIndex(0);
          setLoading(false);
        })
        .catch(err => {
          console.error('Failed to load questions:', err);
          setError('Failed to load questions. Please try again.');
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  // Search filtering and match detection
  useEffect(() => {
    if (!questions.length) return;
    
    if (searchTerm.trim() === '') {
      setFilteredIndexes([]);
      setCurrentMatchIndex(0);
    } else {
      const term = searchTerm.toLowerCase();
      const indexes = questions
        .map((q, i) => {
          const inQuestion = q.question?.toLowerCase().includes(term);
          const inAnswer = q.answer?.some(a => a.toLowerCase().includes(term));
          return inQuestion || inAnswer ? i : -1;
        })
        .filter(i => i !== -1);

      setFilteredIndexes(indexes);
      // If currentIndex not in filtered, jump to first match
      if (indexes.length > 0 && !indexes.includes(currentIndex)) {
        setCurrentIndex(indexes[0]);
        setCurrentMatchIndex(0);
      } else if (indexes.length > 0) {
        setCurrentMatchIndex(indexes.indexOf(currentIndex));
      } else {
        setCurrentMatchIndex(0);
      }
    }
  }, [searchTerm, questions, currentIndex]);

  useEffect(() => {
    // On question change, update match index in filtered
    if (filteredIndexes.length > 0) {
      const idx = filteredIndexes.indexOf(currentIndex);
      setCurrentMatchIndex(idx === -1 ? 0 : idx);
    } else {
      setCurrentMatchIndex(0);
    }
  }, [currentIndex, filteredIndexes]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Don't navigate if focus is on input (search bar)
      if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevQuestion();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextQuestion();
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Navigation functions
  const nextQuestion = () => {
    const activeIndexes = filteredIndexes.length > 0 ? filteredIndexes : questions.map((_, i) => i);
    const activeCurrentIdx = activeIndexes.indexOf(currentIndex);
    if (activeCurrentIdx < activeIndexes.length - 1) {
      setCurrentIndex(activeIndexes[activeCurrentIdx + 1]);
    }
  };

  const prevQuestion = () => {
    const activeIndexes = filteredIndexes.length > 0 ? filteredIndexes : questions.map((_, i) => i);
    const activeCurrentIdx = activeIndexes.indexOf(currentIndex);
    if (activeCurrentIdx > 0) {
      setCurrentIndex(activeIndexes[activeCurrentIdx - 1]);
    }
  };

  // For moving to next/prev search match (in filtered)
  const nextSearchMatch = () => {
    if (filteredIndexes.length > 0 && currentMatchIndex < filteredIndexes.length - 1) {
      setCurrentIndex(filteredIndexes[currentMatchIndex + 1]);
    }
  };
  const prevSearchMatch = () => {
    if (filteredIndexes.length > 0 && currentMatchIndex > 0) {
      setCurrentIndex(filteredIndexes[currentMatchIndex - 1]);
    }
  };

  // Touch/swipe handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    const threshold = 60;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > threshold) {
        if (diff > 0) nextQuestion();
        else prevQuestion();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Category selection view - Enhanced design without outer card
  if (!selectedCategory) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30 p-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Interview Q&A
              </h1>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              const count = categoryCounts[cat.id] || 0;
              
              return (
                <div
                  key={cat.id}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${cat.bgGradient} backdrop-blur-sm border border-white/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon with animated animated background */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                        <IconComponent className={`w-8 h-8 ${cat.iconColor} group-hover:scale-110 transition-transform duration-500`} />
                      </div>
                    </div>
                    
                    {/* Category name */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {cat.name}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                      {cat.description}
                    </p>
                    
                    {/* Question count and arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {loadingCounts ? (
                          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin text-gray-400" />
                        ) : (
                          <div className="flex items-center gap-1">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                              {count}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              questions
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Animated arrow */}
                      <div className="flex items-center text-blue-500 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle pattern overlay */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 dark:opacity-10">
                    <IconComponent className="w-full h-full transform rotate-12 translate-x-8 -translate-y-8" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="w-full h-full flex flex-col p-4 rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 mt-4">
        <div className="flex items-center gap-2 mb-6">
          <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            {selectedCategory.name} Questions
          </h1>
        </div>
        <LoadingSpinner />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full h-full flex flex-col p-4 rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 mt-4">
        <div className="flex items-center gap-2 mb-6">
          <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Error</h1>
        </div>
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="text-red-500 mb-4">⚠️</div>
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={() => setSelectedCategory(null)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Which questions to show (filtered or all)
  const activeIndexes = filteredIndexes.length > 0 ? filteredIndexes : questions.map((_, i) => i);
  const activeCurrentIdx = activeIndexes.indexOf(currentIndex);
  const totalQuestions = activeIndexes.length;
  const currentQuestion = questions[currentIndex];

  if (!currentQuestion || totalQuestions === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-xl">
        No question found.
      </div>
    );
  }

  // Highlighted Q&A rendering
  const questionHighlighted = searchTerm
    ? highlightText(currentQuestion.question, searchTerm)
    : currentQuestion.question;
  const answerHighlighted = currentQuestion.answer
    ? currentQuestion.answer.map((a, i) =>
        <p key={i}>{searchTerm ? highlightText(a, searchTerm) : a}</p>)
    : [];

  // Show match navigation if searching and more than 1 match
  const showMatchNav = filteredIndexes.length > 0 && filteredIndexes.length > 1;

  // Search match nav for desktop, fits inline next to search bar
  const SearchMatchNav = () =>
    showMatchNav ? (
      <div className="flex gap-1 items-center ml-2">
        <button
          onClick={prevSearchMatch}
          disabled={currentMatchIndex === 0}
          title="Previous search result"
          className={`flex items-center p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-all ${
            currentMatchIndex === 0 ? 'text-gray-300 dark:text-gray-600' : 'text-gray-700 dark:text-gray-300'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-xs text-gray-700 dark:text-gray-300 font-medium px-1 min-w-[32px] text-center">
          {currentMatchIndex + 1}/{filteredIndexes.length}
        </span>
        <button
          onClick={nextSearchMatch}
          disabled={currentMatchIndex === filteredIndexes.length - 1}
          title="Next search result"
          className={`flex items-center p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-all ${
            currentMatchIndex === filteredIndexes.length - 1 ? 'text-gray-300 dark:text-gray-600' : 'text-gray-700 dark:text-gray-300'
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    ) : null;

  return (
    <div className="w-full h-full flex flex-col p-4 rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 mt-4">
      {/* Header: All controls */}
      <div className="w-full flex flex-col gap-2 mb-4">
        <div className="flex items-center w-full gap-2">
          {/* Icon & Q&A Heading */}
          <div className="flex items-center gap-2 flex-shrink-0 mr-2">
            <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />

            <div className="relative flex items-center gap-2" ref={dropdownRef}>
              {/* Heading - bold title, no count */}
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {selectedCategory?.name || "All Categories"}
              </h2>

              {/* Filter Icon */}
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>

              {/* Dropdown aligned to right of filter button */}
              {open && (
                <div className="absolute top-0 left-full ml-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 z-50">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setOpen(false);
                      }}
                      className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium ${
                        selectedCategory?.id === cat.id
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="ml-2 rounded-full bg-gray-200 dark:bg-gray-700 px-2 py-0.5 text-xs text-gray-700 dark:text-gray-300">
                        {categoryCounts[cat.id] || 0}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Desktop search bar & match nav */}
          {!isMobile && (
            <div className="flex items-center gap-2 flex-shrink-0 min-w-[230px] max-w-[350px] w-full">
              <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 px-2 py-1 shadow-sm w-full">
                <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2" />
                <input
                  type="text"
                  className="bg-transparent outline-none w-full text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Search questions…"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  spellCheck={false}
                />
                {searchTerm && (
                  <button
                    className="ml-2 p-1"
                    onClick={() => setSearchTerm('')}
                    aria-label="Clear"
                  >
                    <X className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </button>
                )}
              </div>
              {/* Search match nav beside search bar on desktop */}
              <SearchMatchNav />
            </div>
          )}
          {/* Progress bar: FULL width with clickable functionality */}
          {!isMobile && (
            <div className="flex-1 min-w-0 mx-2">
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  {totalQuestions > 0
                    ? <>Question {activeCurrentIdx + 1} of {totalQuestions}</>
                    : 'No questions'}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {totalQuestions > 0
                    ? `${Math.round(((activeCurrentIdx + 1) / totalQuestions) * 100)}% Complete`
                    : ''}
                </span>
              </div>
              <div 
                className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-1.5 cursor-pointer relative overflow-hidden"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const percentage = x / rect.width;
                  const targetIndex = Math.floor(percentage * totalQuestions);
                  const clampedIndex = Math.max(0, Math.min(targetIndex, totalQuestions - 1));
                  setCurrentIndex(activeIndexes[clampedIndex]);
                }}
                title="Click to jump to a specific question"
              >
                <div
                  className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: totalQuestions > 0
                      ? `${((activeCurrentIdx + 1) / totalQuestions) * 100}%`
                      : '0%'
                  }}
                ></div>
                {totalQuestions > 0 && Array.from({ length: totalQuestions }, (_, i) => (
                  <div
                    key={i}
                    className="absolute top-0 h-full hover:bg-blue-400 hover:bg-opacity-20 transition-colors duration-150"
                    style={{
                      left: `${(i / totalQuestions) * 100}%`,
                      width: `${(1 / totalQuestions) * 100}%`
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(activeIndexes[i]);
                    }}
                    title={`Jump to question ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
          {/* Desktop navigation buttons */}
          {!isMobile && (
            <div className="flex gap-2 flex-shrink-0 ml-2">
              <button
                onClick={prevQuestion}
                disabled={activeCurrentIdx === 0}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md font-medium text-sm transition-all duration-200 ${
                  activeCurrentIdx === 0
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 hover:shadow-md'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>
              <button
                onClick={nextQuestion}
                disabled={activeCurrentIdx === totalQuestions - 1}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md font-medium text-sm transition-all duration-200 ${
                  activeCurrentIdx === totalQuestions - 1
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white hover:shadow-md'
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
          {/* Mobile: just a search icon */}
          {isMobile && (
            <button
              className="ml-auto flex items-center px-2 py-2"
              onClick={() => setShowMobileSearch(true)}
              aria-label="Search"
            >
              <Search className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          )}
        </div>
        {/* Mobile search bar and match nav in one row, full width, compact */}
        {isMobile && showMobileSearch && (
          <div className="flex items-center w-full mt-1 relative z-20 gap-2">
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 px-2 py-1 shadow-sm flex-1 min-w-0">
              <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2" />
              <input
                type="text"
                autoFocus
                className="bg-transparent outline-none w-full text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Search questions…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                spellCheck={false}
                style={{ minWidth: 0 }}
              />
            </div>
            {showMatchNav && (
              <div className="flex gap-1 items-center flex-shrink-0">
                <button
                  onClick={prevSearchMatch}
                  disabled={currentMatchIndex === 0}
                  title="Previous search result"
                  className={`flex items-center p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-all ${
                    currentMatchIndex === 0 ? 'text-gray-300 dark:text-gray-600' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-gray-700 dark:text-gray-300 font-medium px-1 min-w-[32px] text-center">
                  {currentMatchIndex + 1}/{filteredIndexes.length}
                </span>
                <button
                  onClick={nextSearchMatch}
                  disabled={currentMatchIndex === filteredIndexes.length - 1}
                  title="Next search result"
                  className={`flex items-center p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-all ${
                    currentMatchIndex === filteredIndexes.length - 1 ? 'text-gray-300 dark:text-gray-600' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
            {/* Only X to close */}
            <button
              className="ml-1 flex items-center px-2 py-2"
              onClick={() => setShowMobileSearch(false)}
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        )}
      </div>
      {/* Main Card */}
      <div className="flex-1 flex flex-col min-h-0 items-stretch justify-center transition-all duration-300 mt-2 rounded-2xl overflow-hidden">
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col w-full h-full min-h-[400px] overflow-auto transition-all duration-300"
          style={{ backgroundColor: 'inherit' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Question */}
          <div className="mb-4 px-8 pt-4">
            <h2 className="text-lg md:text-xl font-bold text-blue-800 dark:text-blue-300 mb-2">
              Q{currentQuestion.id}: {questionHighlighted}
            </h2>
          </div>
          {/* Body */}
          <div className="flex-1 overflow-y-auto">
            {isMobile ? (
              <>
                {/* Mobile: Stacked as original */}
                <div className="mb-8 px-8">
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">Answer</h3>
                  <div className="space-y-4 text-lg text-green-900 dark:text-green-200 leading-relaxed">
                    {answerHighlighted}
                  </div>
                </div>
                {currentQuestion.example && currentQuestion.example.length > 0 && (
                  <div className="mb-8 px-8">
                    <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-2">Example</h3>
                    <pre className="bg-gray-900 dark:bg-gray-950 p-4 rounded-lg overflow-x-auto text-base text-gray-100 dark:text-gray-200">
                      <code>
                        {currentQuestion.example.map((line, idx) => (
                          <div key={idx} className={line.trim().startsWith('//') ? 'text-green-400 dark:text-green-300' : ''}>
                            {line}
                          </div>
                        ))}
                      </code>
                    </pre>
                  </div>
                )}
                {currentQuestion.keyterms && currentQuestion.keyterms.length > 0 && (
                  <div className="mb-2 px-8 pb-4">
                    <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Key Terms</h3>
                    <ul className="list-disc ml-6 space-y-1 text-base text-yellow-900 dark:text-yellow-200">
                      {currentQuestion.keyterms.map((term, idx) => (
                        <li key={idx}>{term}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              /* Desktop: Two columns if example exists */
              <div className={`px-8 pb-8 flex ${currentQuestion.example && currentQuestion.example.length > 0 ? 'flex-row gap-8' : 'flex-col'}`}>
                <div className={`${currentQuestion.example && currentQuestion.example.length > 0 ? 'w-[50%] pr-8' : 'w-full'}`}>
                  {/* Answer */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">Answer</h3>
                    <div className="space-y-4 text-lg text-green-900 dark:text-green-200 leading-relaxed">
                      {answerHighlighted}
                    </div>
                  </div>
                  {/* Key Terms */}
                  {currentQuestion.keyterms && currentQuestion.keyterms.length > 0 && (
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Key Terms</h3>
                      <ul className="list-disc ml-6 space-y-1 text-base text-yellow-900 dark:text-yellow-200">
                        {currentQuestion.keyterms.map((term, idx) => (
                          <li key={idx}>{term}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {currentQuestion.example && currentQuestion.example.length > 0 && (
                  <div className="w-[50%] border-l border-gray-200 dark:border-gray-700 pl-8">
                    <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-2">Example</h3>
                    <pre className="bg-gray-900 dark:bg-gray-950 p-4 rounded-lg overflow-x-auto text-base text-gray-100 dark:text-gray-200">
                      <code>
                        {currentQuestion.example.map((line, idx) => (
                          <div key={idx} className={line.trim().startsWith('//') ? 'text-green-400 dark:text-green-300' : ''}>
                            {line}
                          </div>
                        ))}
                      </code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {/* Mobile swipe hint */}
        {isMobile && (
          <div className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400 select-none">
            Swipe left/right to navigate • {activeCurrentIdx + 1}/{totalQuestions}
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;