import { createContext, useState } from "react";


interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface DarkModeProviderProps {
  children: React.ReactNode;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export default function DarkModeProvider({
  children,
}: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
