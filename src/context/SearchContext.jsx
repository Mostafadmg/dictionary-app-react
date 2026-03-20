import { createContext, useState, useContext } from "react";

const API_BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [status, setStatus] = useState("idle");
  const [currentWord, setCurrentWord] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(""); // ← moved here from SearchBar

  async function fetchWord(word) {
    setQuery(word); // ← update input value automatically
    setStatus("loading");
    setCurrentWord(null);
    setError(null);

    try {
      const response = await fetch(API_BASE_URL + word);

      if (!response.ok) {
        const errorData = await response.json();
        console.log("This is the error:", errorData);
        setStatus("error");
        setError({
          title: errorData.title || "No Definitions Found",
          message: errorData.message || "Word not found",
          resolution:
            errorData.resolution || "Please try searching for another word.",
          searchedWord: word,
        });
        // console.log(error);
        return;
      }
      const data = await response.json();
      setCurrentWord(data[0]);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError({
        title: "No Definitions Found",
        message: "Something went wrong. Please try again.",
        resolution: "Check your internet connection or try a different word.",
        searchedWord: word,
      });
    }
  }

  return (
    <SearchContext.Provider
      value={{
        status,
        currentWord,
        error,
        fetchWord,
        query,
        setQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
