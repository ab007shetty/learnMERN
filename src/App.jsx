import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Introduction from "./components/Introduction";
import Questions from "./components/Questions";
import programs from "./data/programs";

const QUESTIONS_KEY = "questions";
const INTRO = "INTRO";
const SIDEBAR_WIDTH = 250;

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selected, setSelected] = useState(INTRO);

  const selectedProgram = programs.find((p) => p.id === selected);

  return (
    <div className="relative min-h-screen bg-gray-50">
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
        SIDEBAR_WIDTH={SIDEBAR_WIDTH}
      />

      <main
        className={`
          pt-16 px-4 transition-all duration-300
          ${sidebarOpen ? "md:ml-72" : "md:ml-0"}
        `}
        style={{
          marginLeft: sidebarOpen && window.innerWidth >= 768 ? SIDEBAR_WIDTH : 0,
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
        {selectedProgram &&
          selectedProgram.component &&
          selected !== INTRO &&
          selected !== QUESTIONS_KEY && (
            <selectedProgram.component {...selectedProgram} />
          )}
      </main>
    </div>
  );
};

export default App;