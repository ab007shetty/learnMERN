import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import questions from '../data/questions';

const Questions = ({ icon: Icon = HelpCircle, name = "Questions" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
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
  }, [currentIndex]);

  const currentQuestion = questions[currentIndex];

  if (!currentQuestion) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-red-600 font-bold text-xl">
        No question found.
      </div>
    );
  }

  const totalQuestions = questions.length;

  // Navigation functions
  const nextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
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
    const threshold = 60; // min distance for swipe
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          // swipe left (next)
          nextQuestion();
        } else {
          // swipe right (prev)
          prevQuestion();
        }
      }
    }
    // Reset refs
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full h-full flex flex-col p-4 overflow-hidden bg-gray-100 transition-all duration-300 mt-2">
      {/* Header with Progress Bar and Navigation */}
      <div className="flex items-center mb-4 flex-shrink-0">
        <div className="flex items-center gap-3 flex-shrink-0">
          <Icon className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
        </div>
        <div className="flex items-center flex-1 min-w-0 ml-8">
          <div className="flex-1 max-w-full">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                Question {currentIndex + 1} of {totalQuestions}
              </span>
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {Math.round(((currentIndex + 1) / totalQuestions) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              ></div>
            </div>
          </div>
          {/* Desktop navigation buttons */}
          <div className="hidden md:flex gap-2 ml-4 flex-shrink-0">
            <button
              onClick={prevQuestion}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentIndex === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-300 hover:bg-gray-400 text-gray-700 hover:shadow-md'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>
            <button
              onClick={nextQuestion}
              disabled={currentIndex === totalQuestions - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentIndex === totalQuestions - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md'
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Card: Full Width/Fit to Window, shadow added, top margin */}
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
              Q{currentQuestion.id}: {currentQuestion.question}
            </h2>
          </div>
          {/* Answer */}
          <div className="mb-8 px-8">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Answer</h3>
            <div className="space-y-4 text-lg text-green-900 leading-relaxed">
              {currentQuestion.answer &&
                currentQuestion.answer.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
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