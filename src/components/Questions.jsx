import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle, Search, X } from 'lucide-react';
import questions from '../data/questions';

// Helper to highlight search matches in text
function highlightText(text, searchTerm) {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? <mark key={i} className="bg-yellow-200 px-1 rounded">{part}</mark> : part
  );
}

const Questions = ({ icon: Icon = HelpCircle, name = "Questions" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredIndexes, setFilteredIndexes] = useState([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

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

  // Search filtering and match detection
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredIndexes([]);
      setCurrentMatchIndex(0);
    } else {
      const term = searchTerm.toLowerCase();
      const indexes = questions
        .map((q, i) => {
          const inQuestion = q.question.toLowerCase().includes(term);
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
    // eslint-disable-next-line
  }, [searchTerm]);

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
    // eslint-disable-next-line
  }, [currentIndex, filteredIndexes, isMobile]);

  // Which questions to show (filtered or all)
  const activeIndexes = filteredIndexes.length > 0 ? filteredIndexes : questions.map((_, i) => i);
  const activeCurrentIdx = activeIndexes.indexOf(currentIndex);
  const totalQuestions = activeIndexes.length;
  const currentQuestion = questions[currentIndex];

  if (!currentQuestion || totalQuestions === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-red-600 font-bold text-xl">
        No question found.
      </div>
    );
  }

  // Navigation functions
  const nextQuestion = () => {
    if (activeCurrentIdx < totalQuestions - 1) {
      setCurrentIndex(activeIndexes[activeCurrentIdx + 1]);
    }
  };

  const prevQuestion = () => {
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
          className={`flex items-center p-1 rounded hover:bg-gray-300 transition-all ${
            currentMatchIndex === 0 ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-xs text-gray-700 font-medium px-1 min-w-[32px] text-center">
          {currentMatchIndex + 1}/{filteredIndexes.length}
        </span>
        <button
          onClick={nextSearchMatch}
          disabled={currentMatchIndex === filteredIndexes.length - 1}
          title="Next search result"
          className={`flex items-center p-1 rounded hover:bg-gray-300 transition-all ${
            currentMatchIndex === filteredIndexes.length - 1 ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    ) : null;

  return (
    <div className="w-full h-full flex flex-col p-4 overflow-hidden bg-gray-100 transition-all duration-300 mt-2">
      {/* Header: All controls */}
      <div className="w-full flex flex-col gap-2 mb-4">
        <div className="flex items-center w-full gap-2">
          {/* Icon & Q&A Heading */}
          <div className="flex items-center gap-2 flex-shrink-0 mr-2">
            <Icon className="w-7 h-7 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900 whitespace-nowrap">Q&amp;A</h1>
          </div>
          {/* Desktop search bar & match nav */}
          {!isMobile && (
            <div className="flex items-center gap-2 flex-shrink-0 min-w-[230px] max-w-[350px] w-full">
              <div className="flex items-center bg-white rounded-lg border border-gray-300 px-2 py-1 shadow-sm w-full">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  className="bg-transparent outline-none w-full text-sm"
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
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>
              {/* Search match nav beside search bar on desktop */}
              <SearchMatchNav />
            </div>
          )}
          {/* Progress bar: FULL width */}
          {!isMobile && (
            <div className="flex-1 min-w-0 mx-2">
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
                  {totalQuestions > 0
                    ? <>Question {activeCurrentIdx + 1} of {totalQuestions}</>
                    : 'No questions'}
                </span>
                {/* Hide percent complete on mobile */}
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {totalQuestions > 0
                    ? `${Math.round(((activeCurrentIdx + 1) / totalQuestions) * 100)}% Complete`
                    : ''}
                </span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-1.5">
                <div
                  className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: totalQuestions > 0
                      ? `${((activeCurrentIdx + 1) / totalQuestions) * 100}%`
                      : '0%'
                  }}
                ></div>
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
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-300 hover:bg-gray-400 text-gray-700 hover:shadow-md'
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
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md'
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
              <Search className="w-6 h-6 text-gray-600" />
            </button>
          )}
        </div>
        {/* Mobile search bar and match nav in one row, full width, compact */}
        {isMobile && showMobileSearch && (
          <div className="flex items-center w-full mt-1 relative z-20 gap-2">
            <div className="flex items-center bg-white rounded-lg border border-gray-300 px-2 py-1 shadow-sm flex-1 min-w-0">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                autoFocus
                className="bg-transparent outline-none w-full text-sm"
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
                  className={`flex items-center p-1 rounded hover:bg-gray-300 transition-all ${
                    currentMatchIndex === 0 ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-gray-700 font-medium px-1 min-w-[32px] text-center">
                  {currentMatchIndex + 1}/{filteredIndexes.length}
                </span>
                <button
                  onClick={nextSearchMatch}
                  disabled={currentMatchIndex === filteredIndexes.length - 1}
                  title="Next search result"
                  className={`flex items-center p-1 rounded hover:bg-gray-300 transition-all ${
                    currentMatchIndex === filteredIndexes.length - 1 ? 'text-gray-300' : 'text-gray-700'
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
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        )}
      </div>
      {/* Main Card */}
      <div className="flex-1 flex flex-col min-h-0 items-stretch justify-center transition-all duration-300 mt-2">
        <div
          className="bg-white rounded-2xl border border-gray-200 shadow-2xl flex flex-col w-full h-full min-h-[400px] overflow-auto transition-all duration-300"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Question */}
          <div className="mb-4 px-8 pt-4">
            <h2 className="text-lg md:text-xl font-bold text-blue-800 mb-2">
              Q{currentQuestion.id}: {questionHighlighted}
            </h2>
          </div>
          {/* Answer */}
          <div className="mb-8 px-8">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Answer</h3>
            <div className="space-y-4 text-lg text-green-900 leading-relaxed">
              {answerHighlighted}
            </div>
          </div>
          {/* Example (if present) */}
          {currentQuestion.example && currentQuestion.example.length > 0 && (
            <div className="mb-8 px-8">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">Example</h3>
              <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-base text-gray-100">
                <code>
                  {currentQuestion.example.map((line, idx) => (
                    <div key={idx} className={line.trim().startsWith('//') ? 'text-green-400' : ''}>
                      {line}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          )}
          {/* Key Terms (if present) */}
          {currentQuestion.keyterms && currentQuestion.keyterms.length > 0 && (
            <div className="mb-2 px-8 pb-4">
              <h3 className="text-lg font-semibold text-yellow-700 mb-2">Key Terms</h3>
              <ul className="list-disc ml-6 space-y-1 text-base text-yellow-900">
                {currentQuestion.keyterms.map((term, idx) => (
                  <li key={idx}>{term}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Mobile swipe hint */}
        <div className="md:hidden mt-3 text-center text-sm text-gray-500 select-none">
          Swipe left/right to navigate
        </div>
      </div>
    </div>
  );
};

export default Questions;