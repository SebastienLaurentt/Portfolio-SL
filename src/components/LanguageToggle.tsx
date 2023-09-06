
import { useContext } from "react";
import { EnglishLanguageContext } from "../contexts/LanguageProvider"; 

import FrFlag from '../assets/FrFlag.svg';
import UkFlag from '../assets/UkFlag.svg';

export default function ToggleButton() {
  const context = useContext(EnglishLanguageContext);

  if (!context) {
    throw new Error("EnglishLanguageContext is not available.");
  }

  const { englishLanguage, toggleEnglishLanguage } = context;
  console.log(englishLanguage);

  return (
    <button onClick={toggleEnglishLanguage}>
      {englishLanguage ? 
      <img src={FrFlag} alt="" className="h-6 w-6" /> : 
      <img src={UkFlag} alt="" className="h-6 w-6" />}
    </button>
  )
}
