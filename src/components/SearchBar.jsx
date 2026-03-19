import searchIcon from "../assets/images/icon-search.svg?url";
import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";

export default function Form() {
  const { fetchWord } = useContext(SearchContext);
  const [query, setQuery] = useState("");

  return (
    <form
      className="search-form"
      id="searchForm"
      onSubmit={(e) => {
        e.preventDefault();
        if (query.trim() === "") return;
        fetchWord(query);
      }}
    >
      <input
        type="text"
        id="searchInput"
        className="searchInput"
        placeholder="Search for any word..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button type="submit">
        <img src={searchIcon} alt="Search" />
      </button>
    </form>
  );
}
