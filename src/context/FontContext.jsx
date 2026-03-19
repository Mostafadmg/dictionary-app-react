import { useState, useEffect, createContext } from "react";

export const FontContext = createContext();

export function FontProvider({ children }) {
  const [font, setFont] = useState("sans");

  useEffect(() => {
    document.documentElement.classList.remove(
      "font-sans",
      "font-serif",
      "font-mono",
    );
    document.documentElement.classList.add(`font-${font}`);
  }, [font]);

  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
}
