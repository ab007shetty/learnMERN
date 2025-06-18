import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Introduction from "./components/Introduction";
import Questions from "./components/Questions";
import programs from "./data/programs";
import questions from "./data/questions";

// Constants
const QUESTIONS_KEY = "questions"; // Must match Sidebar
const INTRO = "INTRO";
const SIDEBAR_WIDTH = 288; // px, for w-72

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(INTRO);

  const selectedProgram = programs.find((p) => p.id === selected);

  // Function to render main content based on selection
  const renderMainContent = () => {
    if (selected === INTRO) {
      return <Introduction totalTopics={programs.length} />;
    } else if (selected === QUESTIONS_KEY) {
      return (
        <Questions 
          name="Q&A Practice"
          description="Test your knowledge with interactive question cards"
        />
      );
    } else if (selectedProgram && selectedProgram.component) {
      return (
        <selectedProgram.component
          icon={selectedProgram.icon}
          name={selectedProgram.name}
          description={selectedProgram.description}
        />
      );
    }
    return null;
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar 
        sidebarOpen={sidebarOpen} 
        onSidebarToggle={() => setSidebarOpen((prev) => !prev)} 
      />

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        onSidebarToggle={() => setSidebarOpen((prev) => !prev)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selected={selected}
        setSelected={setSelected}
        programs={programs} // pass all programs to Sidebar
        INTRO={INTRO}
        SIDEBAR_WIDTH={SIDEBAR_WIDTH}
      />

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main
        className={`
          pt-16 px-4 transition-all duration-300
          ${sidebarOpen ? "md:ml-72" : "md:ml-0"}
        `}
        style={{
          // For smooth transition of margin-left on desktop, no margin on mobile
          marginLeft: sidebarOpen && window.innerWidth >= 768 ? SIDEBAR_WIDTH : 0,
          maxWidth: "100vw",
        }}
      >
        {renderMainContent()}
      </main>
    </div>
  );
};

export default App;