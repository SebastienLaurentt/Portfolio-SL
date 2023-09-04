import { createContext, useState } from "react"

interface DarkModeProviderProps {
  children: React.ReactNode;
}

export const DarkModeContext = createContext();

export default function DarkModeProvider({
  children,
  }: DarkModeProviderProps)  {
 


  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <DarkModeContext.Provider
    value={ {darkMode, toggleDarkMode} }>
      {children}
    </DarkModeContext.Provider>
  )
}