import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Code2, Search, X, Eye, EyeOff, Lightbulb } from 'lucide-react';
import puzzles from '../data/puzzles';

// Helper to highlight search matches in text
function highlightText(text, searchTerm) {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? <mark key={i} className="bg-yellow-200 dark:bg-yellow-600 px-1 rounded">{part}</mark> : part
  );
}

const Puzzles = ({ icon: Icon = Code2, name = "JS Puzzles" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredIndexes, setFilteredIndexes] = useState([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Responsive: detect mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset answer/explanation when question changes
  useEffect(() => {
    setShowAnswer(false);
    setShowExplanation(false);
  }, [currentIndex]);

  // Search filtering and match detection
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredIndexes([]);
      setCurrentMatchIndex(0);
    } else {
      const term = searchTerm.toLowerCase();
      const indexes = puzzles
        .map((p, i) => {
          const inQuestion = p.question.toLowerCase().includes(term);
          const inExplanation = p.explanation?.some(e => e.toLowerCase().includes(term));
          return inQuestion || inExplanation ? i : -1;
        })
        .filter(i => i !== -1);

      setFilteredIndexes(indexes);
      if (indexes.length > 0 && !indexes.includes(currentIndex)) {
        setCurrentIndex(indexes[0]);
        setCurrentMatchIndex(0);
      } else if (indexes.length > 0) {
        setCurrentMatchIndex(indexes.indexOf(currentIndex));
      } else {
        setCurrentMatchIndex(0);
      }
    }
  }, [searchTerm]);

  useEffect(() => {
    if (filteredIndexes.length > 0) {
      const idx = filteredIndexes.indexOf(currentIndex);
      setCurrentMatchIndex(idx === -1 ? 0 : idx);
    } else {
      setCurrentMatchIndex(0);
    }
  }, [currentIndex, filteredIndexes]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevPuzzle();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextPuzzle();
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, filteredIndexes]);

  const activeIndexes = filteredIndexes.length > 0 ? filteredIndexes : puzzles.map((_, i) => i);
  const activeCurrentIdx = activeIndexes.indexOf(currentIndex);
  const totalPuzzles = activeIndexes.length;
  const currentPuzzle = puzzles[currentIndex];

  if (!currentPuzzle || totalPuzzles === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-xl">
        No puzzle found.
      </div>
    );
  }

  const nextPuzzle = () => {
    if (activeCurrentIdx < totalPuzzles - 1) {
      setCurrentIndex(activeIndexes[activeCurrentIdx + 1]);
    }
  };

  const prevPuzzle = () => {
    if (activeCurrentIdx > 0) {
      setCurrentIndex(activeIndexes[activeCurrentIdx - 1]);
    }
  };

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
        if (diff > 0) nextPuzzle();
        else prevPuzzle();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const showMatchNav = filteredIndexes.length > 0 && filteredIndexes.length > 1;

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
      {/* Header */}
      <div className="w-full flex flex-col gap-2 mb-4">
        <div className="flex items-center w-full gap-2">
          <div className="flex items-center gap-2 flex-shrink-0 mr-2">
            <Icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">JS Puzzles</h1>
          </div>

          {!isMobile && (
            <div className="flex items-center gap-2 flex-shrink-0 min-w-[230px] max-w-[350px] w-full">
              <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 px-2 py-1 shadow-sm w-full">
                <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2" />
                <input
                  type="text"
                  className="bg-transparent outline-none w-full text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Search puzzles…"
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
              <SearchMatchNav />
            </div>
          )}

          {!isMobile && (
            <div className="flex-1 min-w-0 mx-2">
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  {totalPuzzles > 0
                    ? <>Puzzle {activeCurrentIdx + 1} of {totalPuzzles}</>
                    : 'No puzzles'}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {totalPuzzles > 0
                    ? `${Math.round(((activeCurrentIdx + 1) / totalPuzzles) * 100)}% Complete`
                    : ''}
                </span>
              </div>
              <div 
                className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-1.5 cursor-pointer relative overflow-hidden"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const percentage = x / rect.width;
                  const targetIndex = Math.floor(percentage * totalPuzzles);
                  const clampedIndex = Math.max(0, Math.min(targetIndex, totalPuzzles - 1));
                  setCurrentIndex(activeIndexes[clampedIndex]);
                }}
                title="Click to jump to a specific puzzle"
              >
                <div
                  className="bg-purple-600 dark:bg-purple-500 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: totalPuzzles > 0
                      ? `${((activeCurrentIdx + 1) / totalPuzzles) * 100}%`
                      : '0%'
                  }}
                ></div>
                {/* Invisible clickable segments for better UX */}
                {totalPuzzles > 0 && Array.from({ length: totalPuzzles }, (_, i) => (
                  <div
                    key={i}
                    className="absolute top-0 h-full hover:bg-purple-400 hover:bg-opacity-20 transition-colors duration-150"
                    style={{
                      left: `${(i / totalPuzzles) * 100}%`,
                      width: `${(1 / totalPuzzles) * 100}%`
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(activeIndexes[i]);
                    }}
                    title={`Jump to puzzle ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {!isMobile && (
            <div className="flex gap-2 flex-shrink-0 ml-2">
              <button
                onClick={prevPuzzle}
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
                onClick={nextPuzzle}
                disabled={activeCurrentIdx === totalPuzzles - 1}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md font-medium text-sm transition-all duration-200 ${
                  activeCurrentIdx === totalPuzzles - 1
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-400 text-white hover:shadow-md'
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

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

        {isMobile && showMobileSearch && (
          <div className="flex items-center w-full mt-1 relative z-20 gap-2">
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 px-2 py-1 shadow-sm flex-1 min-w-0">
              <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2" />
              <input
                type="text"
                autoFocus
                className="bg-transparent outline-none w-full text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Search puzzles…"
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
                  className={`flex items-center p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-all ${
                    currentMatchIndex === filteredIndexes.length - 1 ? 'text-gray-300 dark:text-gray-600' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
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

      {/* Main Card - Two Column Layout */}
      <div className="flex-1 flex flex-col min-h-0 items-stretch justify-center transition-all duration-300 mt-2 rounded-2xl overflow-hidden">
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col lg:flex-row w-full h-full min-h-[500px] overflow-hidden transition-all duration-300"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Side - Code Question */}
          <div className="lg:w-1/2 flex flex-col border-r border-gray-200 dark:border-gray-700">
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-lg md:text-xl font-bold text-purple-800 dark:text-purple-300 mb-4">
                Puzzle #{currentPuzzle.id}: What will this code output?
              </h2>
              <div className="flex-1 flex flex-col">
                <pre className="bg-gray-900 dark:bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm text-gray-100 dark:text-gray-200 border flex-1 min-h-0">
                  <code className="block">{searchTerm ? highlightText(currentPuzzle.question, searchTerm) : currentPuzzle.question}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Right Side - Action Buttons and Content */}
          <div className="lg:w-1/2 flex flex-col overflow-y-auto">
            {/* Action Buttons at the top of right side */}
            <div className="p-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-3 mb-4">
                <button
                  onClick={() => {
                    setShowAnswer(!showAnswer);
                    if (!showAnswer) setShowExplanation(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    showAnswer
                      ? 'bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600'
                      : 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800'
                  }`}
                >
                  {showAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {showAnswer ? 'Hide Answer' : 'Show Answer'}
                </button>
                <button
                  onClick={() => {
                    setShowExplanation(!showExplanation);
                    if (!showExplanation) setShowAnswer(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    showExplanation
                      ? 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600'
                      : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800'
                  }`}
                >
                  {showExplanation ? <EyeOff className="w-4 h-4" /> : <Lightbulb className="w-4 h-4" />}
                  {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
                </button>
              </div>
            </div>

            {/* Default state when nothing is shown */}
            {!showAnswer && !showExplanation && (
              <div className="flex-1 flex items-center justify-center p-6">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <Code2 className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-lg font-medium mb-2">Ready to see the answer?</p>
                  <p className="text-sm">Click the buttons above to reveal the output and explanation.</p>
                </div>
              </div>
            )}

            {/* Answer Section */}
            {showAnswer && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Output
                </h3>
                <pre className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-lg text-sm text-green-900 dark:text-green-200">
                  <code>{currentPuzzle.answer}</code>
                </pre>
              </div>
            )}

            {/* Explanation Section */}
            {showExplanation && (
              <div className="p-6 flex-1">
                <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Explanation
                </h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg space-y-3">
                  {currentPuzzle.explanation.map((line, idx) => (
                    <p key={idx} className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
                      {searchTerm ? highlightText(line, searchTerm) : line}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile swipe hint */}
        <div className="lg:hidden mt-3 text-center text-sm text-gray-500 dark:text-gray-400 select-none">
          Swipe left/right to navigate
        </div>
      </div>
    </div>
  );
};

export default Puzzles;