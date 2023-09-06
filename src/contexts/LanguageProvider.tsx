import { createContext, useState, useEffect } from "react";

interface LanguageContextType {
    englishLanguage: boolean;
    toggleEnglishLanguage: () => void;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const EnglishLanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default function LanguageProvider ({ children }: LanguageProviderProps) {
  const [englishLanguage, setEnglishLanguage] = useState(() => {
    const storedEnglishLanguage = localStorage.getItem("englishLanguage");
    return storedEnglishLanguage ? JSON.parse(storedEnglishLanguage) : true;
  });

  useEffect(() => {
    localStorage.setItem("englishLanguage", JSON.stringify(englishLanguage));
  }, [englishLanguage]);

  function toggleEnglishLanguage() {
    setEnglishLanguage(!englishLanguage);
  }

  return (
    <EnglishLanguageContext.Provider value={{ englishLanguage, toggleEnglishLanguage }}>
      {children}
    </EnglishLanguageContext.Provider>
  );
}
