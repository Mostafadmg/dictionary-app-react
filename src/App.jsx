import { createContext, useState, useEffect } from "react";
import Header from "./components/Header";
import { FontProvider } from "./context/FontContext";

function App() {
  const [font, setFont] = useState("");
  return (
    <FontProvider>
      <div className="app" id="app">
        <Header />
      </div>
    </FontProvider>
  );
}

export default App;
