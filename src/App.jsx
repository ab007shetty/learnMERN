import React, { useState } from "react";
import Navbar, { ThemeProvider } from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Introduction from "./components/Introduction";
import Questions from "./components/Questions";
import Puzzles from "./components/Puzzles"; // Add this import
import programs from "./data/programs";

const QUESTIONS_KEY = "questions";
const PUZZLES_KEY = "puzzles"; // Add this constant
const INTRO = "INTRO";
const SIDEBAR_WIDTH = 288; // 72 * 4 = 288px (w-72 in Tailwind)

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default to open
  const [selected, setSelected] = useState(INTRO);

  const selectedProgram = programs.find((p) => p.id === selected);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar
          sidebarOpen={sidebarOpen}
          onSidebarToggle={() => setSidebarOpen((prev) => !prev)}
        />

        <Sidebar
          sidebarOpen={sidebarOpen}
          onSidebarToggle={() => setSidebarOpen((prev) => !prev)}
          selected={selected}
          setSelected={setSelected}
          programs={programs}
          INTRO={INTRO}
          QUESTIONS_KEY={QUESTIONS_KEY}
          PUZZLES_KEY={PUZZLES_KEY} // Add this prop
          SIDEBAR_WIDTH={SIDEBAR_WIDTH}
        />

        <main
          className={`
            pt-16 px-4 transition-all duration-300
            ${sidebarOpen ? "md:ml-72" : "md:ml-0"}
          `}
          style={{
            marginLeft: sidebarOpen && typeof window !== 'undefined' && window.innerWidth >= 768 ? SIDEBAR_WIDTH : 0,
            maxWidth: "100vw",
          }}
        >
          {selected === INTRO && <Introduction totalTopics={programs.length} />}
          
          {selected === QUESTIONS_KEY && (
            <Questions
              name="Q&A Practice"
              description="Test your knowledge with interactive question cards"
            />
          )}
          
          {/* Add JS Puzzles section */}
          {selected === PUZZLES_KEY && (
            <Puzzles
              name="JS Puzzles"
              description="Challenge yourself with tricky JavaScript code snippets"
            />
          )}
          
          {selectedProgram &&
            selectedProgram.component &&
            selected !== INTRO &&
            selected !== QUESTIONS_KEY &&
            selected !== PUZZLES_KEY && ( // Add this condition
              <selectedProgram.component {...selectedProgram} />
            )}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;