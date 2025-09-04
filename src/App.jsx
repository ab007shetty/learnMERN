import React, { useState, useEffect, Suspense } from "react";
import Navbar, { ThemeProvider } from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Introduction from "./components/Introduction";
import programs from "./data/programs";
import { programRegistry } from "./data/programRegistry";

const QUESTIONS_KEY = "questions";
const PUZZLES_KEY = "puzzles";
const INTRO = "INTRO";
const SIDEBAR_WIDTH = 288; // 72 * 4 = 288px (w-72 in Tailwind)

// Lazy load non-critical components
const Questions = React.lazy(() => import("./components/Questions"));
const Puzzles = React.lazy(() => import("./components/Puzzles"));
const ProgramLoader = React.lazy(() => import("./components/ProgramLoader"));

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default to open
  const [selected, setSelected] = useState(INTRO);
  const [isAppSettled, setIsAppSettled] = useState(false);

  const selectedProgram = programs.find((p) => p.id === selected);

  // Simulate app settling after initial render and trigger preloading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppSettled(true);
    }, 2000); // Delay loading of all programs and data after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  // Preload htmlCssQuestions.js when Questions is selected
  useEffect(() => {
    if (selected === QUESTIONS_KEY) {
      import('./data/questions/htmlCssQuestions.js')
        .then(() => {
          console.log('Preloaded data file: ./data/questions/htmlCssQuestions.js');
        })
        .catch((err) => {
          console.error('Failed to preload htmlCssQuestions:', err);
        });
    }
  }, [selected]);

  // Preload all programs and question data files when app is settled
  useEffect(() => {
    if (isAppSettled) {
      // Preload all programs from programRegistry
      Object.keys(programRegistry).forEach((programId) => {
        programRegistry[programId]()
          .then(() => {
            console.log(`Preloaded program: ${programId}`);
          })
          .catch((err) => {
            console.error(`Failed to preload program ${programId}:`, err);
          });
      });

      // Preload all question data files explicitly
      Promise.all([
        import('./data/questions/htmlCssQuestions.js').then(() => {
          console.log('Preloaded data file: ./data/questions/htmlCssQuestions.js');
        }),
        import('./data/questions/coreJsQuestions.js').then(() => {
          console.log('Preloaded data file: ./data/questions/coreJsQuestions.js');
        }),
        import('./data/questions/reactQuestions.js').then(() => {
          console.log('Preloaded data file: ./data/questions/reactQuestions.js');
        }),
        import('./data/questions/nodeJsQuestions.js').then(() => {
          console.log('Preloaded data file: ./data/questions/nodeJsQuestions.js');
        }),
        import('./data/questions/databaseQuestions.js').then(() => {
          console.log('Preloaded data file: ./data/questions/databaseQuestions.js');
        }),
        import('./data/questions/systemDesignQuestions.js').then(() => {
          console.log('Preloaded data file: ./data/questions/systemDesignQuestions.js');
        }),
        import('./data/questions/otherQuestions.js').then(() => {
          console.log('Preloaded data file: ./data/questions/otherQuestions.js');
        }),
      ]).catch((err) => {
        console.error('Failed to preload question data files:', err);
      });
    }
  }, [isAppSettled]);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar
          sidebarOpen={sidebarOpen}
          onSidebarToggle={() => setSidebarOpen((prev) => !prev)}
          setSelected={setSelected}
          INTRO={INTRO}
        />

        <Sidebar
          sidebarOpen={sidebarOpen}
          onSidebarToggle={() => setSidebarOpen((prev) => !prev)}
          selected={selected}
          setSelected={setSelected}
          programs={programs}
          QUESTIONS_KEY={QUESTIONS_KEY}
          PUZZLES_KEY={PUZZLES_KEY}
          SIDEBAR_WIDTH={SIDEBAR_WIDTH}
        />

        <main
          className={`pt-16 px-4 transition-all duration-300 ${
            sidebarOpen ? "md:ml-72" : "md:ml-0"
          }`}
          style={{
            marginLeft:
              sidebarOpen &&
              typeof window !== "undefined" &&
              window.innerWidth >= 768
                ? SIDEBAR_WIDTH
                : 0,
            maxWidth: "100vw",
          }}
        >
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-gray-600 dark:text-gray-300">
                  Loading...
                </span>
              </div>
            }
          >
            {selected === INTRO && <Introduction totalTopics={programs.length} />}

            {selected === QUESTIONS_KEY && (
              <Questions
                name="Q&A Practice"
                description="Test your knowledge with interactive question cards"
              />
            )}

            {selected === PUZZLES_KEY && (
              <Puzzles
                name="JS Puzzles"
                description="Challenge yourself with tricky JavaScript code snippets"
              />
            )}

            {selectedProgram &&
              selected !== INTRO &&
              selected !== QUESTIONS_KEY &&
              selected !== PUZZLES_KEY && (
                <ProgramLoader
                  programId={selected}
                  programProps={selectedProgram}
                />
              )}
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;