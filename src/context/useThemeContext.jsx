import { createContext, useContext, useState } from "react";

const themeContext = createContext();

export function ThemeProvider({ children }) {
  const [isThemeLight, setIsThemeLight] = useState(false);
  return (
    <themeContext.Provider value={{ isThemeLight, setIsThemeLight }}>
      {children}
    </themeContext.Provider>
  );
}

export function useTheme() {
  return useContext(themeContext);
}
 