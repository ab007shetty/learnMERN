import React, { useState } from "react";
import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

console.log('Hello, World!');
`.trim();

const STORAGE_KEY = 'empty-playground-code';

export default function JsPlayground(props) {
  // Remove concept and conceptDescription from props to give more space for console
  const { concept, conceptDescription, ...otherProps } = props;
  
  // State for managing saved code
  const [savedCode, setSavedCode] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null && saved.trim() !== '') {
        return saved;
      }
      return DEFAULT_BODY;
    } catch (error) {
      console.warn('Failed to load from localStorage:', error);
      return DEFAULT_BODY;
    }
  });
  
  const [currentCode, setCurrentCode] = useState(savedCode);
  const [lastSaveTime, setLastSaveTime] = useState(null);
  const [showSaveIndicator, setShowSaveIndicator] = useState(false);
  const [resetKey, setResetKey] = useState(0); // Add reset key to force re-render
  
  // Manual save function
  const saveCode = (code) => {
    try {
      localStorage.setItem(STORAGE_KEY, code);
      setSavedCode(code);
      setLastSaveTime(new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      }));
      setShowSaveIndicator(true);
      setTimeout(() => setShowSaveIndicator(false), 2000);
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  };

  // Manual save handler
  const handleManualSave = () => {
    saveCode(currentCode);
  };

  // Reset and clear saved code
  const handleReset = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setCurrentCode(DEFAULT_BODY);
      setSavedCode(DEFAULT_BODY);
      setLastSaveTime(null);
      setShowSaveIndicator(false);
      setResetKey(prev => prev + 1); // Force component re-render
    } catch (error) {
      console.warn('Failed to clear saved code:', error);
    }
  };

  // Handle code changes (no auto-save)
  const handleCodeChange = (newCode) => {
    setCurrentCode(newCode);
  };

  return (
    <div>
      <PlaygroundWrapper
        {...otherProps}
        key={resetKey} // Force re-mount on reset
        title="JavaScript Playground"
        description="You can write React components, JSX, or pure JS. No imports."
        defaultCode={currentCode}
        onCodeChange={handleCodeChange}
        onReset={handleReset}
        customHeaderControls={
          <div className="flex items-center space-x-2 text-sm">
            {/* Save indicator */}
            <div className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full transition-colors ${
                showSaveIndicator ? 'bg-green-400 animate-pulse' : 'bg-gray-500'
              }`}></div>
              {showSaveIndicator && (
                <span className="text-green-400 text-xs">Saved!</span>
              )}
            </div>
            
            {/* Last save time */}
            {lastSaveTime && (
              <span className="text-gray-400 text-xs">
                Last: {lastSaveTime}
              </span>
            )}
            
            {/* Manual save button */}
            <button
              onClick={handleManualSave}
              className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-colors"
              title="Save code to localStorage"
            >
              Save
            </button>
          </div>
        }
      />
    </div>
  );
}