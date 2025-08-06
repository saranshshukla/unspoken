import { useState, useEffect } from "react";
import ScenarioLibrary from "./features/scenarioLibrary/ScenarioLibrary";
import CustomBuilder from "./features/customBuilder/CustomBuilder";
import PuzzleEngine from "./features/puzzles/PuzzleEngine";
import AIFeedback from "./features/aiFeedback/AIFeedback";
import Community from "./features/community/Community";
import PrivacyCenter from "./features/privacy/PrivacyCenter";
import { theme } from "./theme";

function App() {
  const [aiInput, setAIInput] = useState("");
  const [section, setSection] = useState("scenarios");

useEffect(() => {
  const titles = {
    scenarios: "Scenarios",
    custom: "Custom Builder",
    puzzles: "Puzzles",
    ai: "AI Feedback",
    community: "Community",
    privacy: "Privacy",
};
 document.title = titles[section] || "Unspoken";
}, [section]); 
  
  return (
    <div
      style={{
        background: theme.colors.background,
        minHeight: "100vh",
        fontFamily: theme.fontFamily,
      }}
    >
      <nav
        style={{
          display: "flex",
          gap: 16,
          padding: 16,
          background: theme.colors.card,
          borderBottom: "1px solid #eee",
        }}
      >
        <button onClick={() => setSection("scenarios")}>Scenarios</button>
        <button onClick={() => setSection("custom")}>Custom Builder</button>
        <button onClick={() => setSection("puzzles")}>Puzzles</button>
        <button onClick={() => setSection("ai")}>AI Feedback</button>
        <button onClick={() => setSection("community")}>Community</button>
        <button onClick={() => setSection("privacy")}>Privacy</button>
      </nav>
      <div
        style={{
          maxWidth: 600,
          margin: "32px auto",
          background: theme.colors.card,
          borderRadius: 12,
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          padding: 24,
        }}
      >
        <h1
          style={{
            color: theme.colors.primary,
            textAlign: "center",
          }}
        >
          Unspoken Puzzle Game App
        </h1>
        {section === "scenarios" && (
          <ScenarioLibrary onSelectScenario={setAIInput} />
        )}
        {section === "custom" && (
          <CustomBuilder onCreateScenario={setAIInput} />
        )}
        {section === "puzzles" && (
          <PuzzleEngine onPuzzleComplete={setAIInput} />
        )}
        {section === "ai" && <AIFeedback initialInput={aiInput} />}
        {section === "community" && <Community />}
        {section === "privacy" && <PrivacyCenter />}
      </div>
    </div>
  );
}

export default App;
