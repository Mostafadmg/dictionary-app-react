import { useSearch } from "../context/SearchContext";

export default function ErrorState() {
  const { error } = useSearch();

  if (!error) return null;

  return (
    <div className="error-state">
      <div className="errorStateIconBox">
        <svg
          className="errorState-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      <h1 className="errorState-title">{error.title}</h1>
      {error.searchedWord && (
        <p className="errorState-word">
          The word "<strong>{error.searchedWord}</strong>" is not in our dictionary.
        </p>
      )}
      <p className="errorState-text">
        {error.message} {error.resolution}
      </p>
    </div>
  );
}
