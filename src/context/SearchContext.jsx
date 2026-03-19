import { createContext, useState, useContext } from "react";

const API_BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [status, setStatus] = useState("idle");
  const [currentWord, setCurrentWord] = useState(null);
  const [error, setError] = useState(null);

  async function fetchWord(word) {
    setStatus("loading");
    setCurrentWord(null);
    setError(null);

    try {
      const response = await fetch(API_BASE_URL + word);

      if (!response.ok) {
        const errorData = await response.json();
        setStatus("error");
        setError({
          title: errorData.title || "No Definitions Found",
          message: errorData.message || "Word not found",
          resolution:
            errorData.resolution || "Please try searching for another word.",
          searchedWord: word,
        });
        return;
      }
      const data = await response.json();
      console.log(data[0]);
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
