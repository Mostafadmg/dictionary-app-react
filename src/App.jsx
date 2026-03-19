import { createContext, useState, useEffect } from "react";
import Header from "./components/Header";
import { FontProvider } from "./context/FontContext";
import { ThemeProvider } from "./context/ThemeContext";
import Form from "./components/SearchBar";
import Result from "./components/WordDefinition";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <ThemeProvider>
      <FontProvider>
        <SearchProvider>
          <div className="app" id="app">
            <Header />

            <main>
              <div id="searchContainer">
                <Form />
                <Result />
              </div>
            </main>
          </div>
        </SearchProvider>
      </FontProvider>
    </ThemeProvider>
  );
}

export default App;
