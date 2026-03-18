import { useState, useEffect, createContext } from "react";

export const FontContext = createContext();

export function FontProvider({ children }) {
  const [font, setFont] = useState("sans");

  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
}
