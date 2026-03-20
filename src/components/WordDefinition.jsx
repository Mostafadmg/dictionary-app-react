import { useSearch } from "../context/SearchContext";
import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";

export default function Result() {
  const { status, currentWord } = useSearch();

  if (status === "idle") return <EmptyState />;
  if (status === "loading") return <LoadingState />;
  if (status === "error") return <ErrorState />;

  return (
    <div id="result">
      <section>
        <Pronounciation />
        <MeaningResult />
      </section>
    </div>
  );
}

function Pronounciation() {
  const { currentWord } = useSearch();

  return (
    <div className="pronounciationContainer">
      <div className="pronounciationText">
        <h1 className="word">{currentWord.word}</h1>
        <p className="pronounciation">
          {currentWord.phonetics?.[0]?.text ||
            currentWord.phonetic ||
            "pronunciation not available"}
        </p>
      </div>
    </div>
  );
}

function MeaningResult() {
  const { currentWord } = useSearch();

  return currentWord.meanings.map((meaning) => (
    <div key={meaning.partOfSpeech}>
      <div className="meaningContainer">
        <h2 className="meaningTitle">{meaning.partOfSpeech}</h2>
        <div className="line"></div>
      </div>
      <h3 className="meaningHeading">Meaning</h3>
      <MeaningList meaning={meaning} />
      <SynonymContainer meaning={meaning} />
    </div>
  ));
}

function MeaningList({ meaning }) {
  return (
    <ul>
      {meaning.definitions.map((definition, index) => (
        <MeaningItem key={index} definition={definition} />
      ))}
    </ul>
  );
}

function MeaningItem({ definition }) {
  return (
    <li className="meaning-li">
      <span className="dot">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5"
          height="5"
          viewBox="0 0 5 5"
          fill="none"
        >
          <circle cx="2.5" cy="2.5" r="2.5" fill="#8F19E8" />
        </svg>
      </span>
      <div>
        <p>{definition.definition}</p>
        {definition.example && (
          <p className="definition-example">"{definition.example}"</p>
        )}
      </div>
    </li>
  );
}

function SynonymContainer({ meaning }) {
  const { fetchWord } = useSearch();

  if (!meaning.synonyms || meaning.synonyms.length === 0) return null;

  return (
    <div className="synonyms-container">
      <span className="synonyms-label">Synonyms</span>
      <div className="synonyms-list">
        {meaning.synonyms.map((synonym) => (
          <a
            key={synonym}
            href="#"
            className="synonym-link"
            onClick={(e) => {
              e.preventDefault();
              fetchWord(synonym);
            }}
          >
            {synonym}
          </a>
        ))}
      </div>
    </div>
  );
}
