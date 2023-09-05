import { createContext, useState, useEffect } from "react";

interface LanguageContextType {
    language: boolean;
    toggleLanguage: () => void;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default function LanguageProvider ({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage ? JSON.parse(storedLanguage) : true;
  });

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

  function toggleLanguage() {
    setLanguage(!language);
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
