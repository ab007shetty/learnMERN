import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Introduction from "./components/Introduction";
import topics from "./components/topics";

const INTRO = "INTRO";
const SIDEBAR_WIDTH = 288; // px, for w-72

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(INTRO);

  const filteredTopics = topics.filter(
    (topic) =>
      topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const selectedTopic = topics.find((t) => t.id === selected);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar sidebarOpen={sidebarOpen} onSidebarToggle={() => setSidebarOpen((prev) => !prev)} />

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        onSidebarToggle={() => setSidebarOpen((prev) => !prev)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selected={selected}
        setSelected={setSelected}
        filteredTopics={filteredTopics}
        INTRO={INTRO}
        SIDEBAR_WIDTH={SIDEBAR_WIDTH}
      />

      {/* Overlay for mobile when sidebar is open */}
      {/* Only shows on small screens */}
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
        {selected === INTRO ? (
          <Introduction totalTopics={topics.length} />
        ) : selectedTopic && selectedTopic.component ? (
          <selectedTopic.component
            icon={selectedTopic.icon}
            name={selectedTopic.name}
            description={selectedTopic.description}
          />
        ) : null}
      </main>
    </div>
  );
};

export default App;