import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/icon-arrow-down.svg";
import { useState } from "react";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Dictionary" className="header__logo" />

      <RightContainer />
    </header>
  );
}

function RightContainer() {
  return (
    <div className="header__rightContainer">
      <FontSelector />

      <ThemeSelector />
    </div>
  );
}
function FontSelector({ font, setFont }) {
  const [fontSelectorIsOpen, setFontSelectorIsOpen] = useState(false);

  return (
    <div className="header__fontSelector" data-open="false">
      <button
        className="header__fontTrigger text-mono-bold-small"
        id="fontTrigger"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="false"
        onClick={() => setFontSelectorIsOpen((f) => !f)}
      >
        <span id="fontLabel">Sans Serif</span>
        <img
          src={arrow}
          alt=""
          className={`header__dropdownIcon ${fontSelectorIsOpen ? "header__dropdownIcon--open" : ""}`}
        />
      </button>

      {fontSelectorIsOpen && (
        <ul className="header__fontMenu" id="fontMenu" role="listbox">
          <li className="header__fontOption" role="option" data-font="sans">
            Sans Serif
          </li>
          <li className="header__fontOption" role="option" data-font="serif">
            Serif
          </li>
          <li className="header__fontOption" role="option" data-font="mono">
            Mono
          </li>
        </ul>
      )}
    </div>
  );
}

function ThemeSelector() {
  return (
    <div className="header__themeSelector">
      <div className="header__toggleContainer">
        <label htmlFor="toggle" className="header__toggle">
          <input type="checkbox" id="toggle" className="header__input" />
          <span className="header__toggleSlider"></span>
        </label>
      </div>

      <svg
        className="header__themeIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        role="img"
        aria-label="dark theme"
      >
        <g transform="translate(0 -0.6)">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </g>
      </svg>
    </div>
  );
}
