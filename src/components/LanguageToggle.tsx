
import { useContext } from "react";
import { EnglishLanguageContext } from "../contexts/LanguageProvider"; 

import FrFlag from '../assets/FrFlag.svg';
import UkFlag from '../assets/UkFlag.svg';

import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function ToggleButton() {
  const context = useContext(EnglishLanguageContext);

  if (!context) {
    throw new Error("EnglishLanguageContext is not available.");
  }

  const { englishLanguage, toggleEnglishLanguage } = context;
  console.log(englishLanguage);

  return (
    <button aria-label="Set French/English language" onClick={toggleEnglishLanguage}>
      {englishLanguage ? 
      <span className="fi fi-fr"></span> : 
      <span className="fi fi-gb"></span>}
    </button>
  )
}

{/* <img src={UkFlag} alt="" className="h-6 w-6 2xl:h-12 2xl:w-12" /> */}