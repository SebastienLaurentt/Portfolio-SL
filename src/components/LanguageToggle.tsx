
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageProvider"; 

import FrFlag from '../assets/FrFlag.svg';
import UkFlag from '../assets/UkFlag.svg';

export default function ToggleButton() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("DarkModeContext is not available.");
  }

  const { language, toggleLanguage } = context;
  console.log(language);

  return (
    <button onClick={toggleLanguage}>
      {language ? 
      <img src={FrFlag} alt="" className="h-6 w-6" /> : 
      <img src={UkFlag} alt="" className="h-6 w-6" />}
    </button>
  )
}
