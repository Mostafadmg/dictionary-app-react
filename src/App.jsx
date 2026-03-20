import Header from "./components/Header";
import { FontProvider } from "./context/FontContext";
import { ThemeProvider } from "./context/ThemeContext";
import { SearchProvider } from "./context/SearchContext";
import SearchBar from "./components/SearchBar";
import Result from "./components/WordDefinition";

function App() {
  return (
    <ThemeProvider>
      <FontProvider>
        <SearchProvider>
          <div className="app" id="app">
            <Header />
            <main>
              <SearchBar />
              <Result />
            </main>
          </div>
        </SearchProvider>
      </FontProvider>
    </ThemeProvider>
  );
}

export default App;
