
import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeProvider"; 

import { BsFillMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';

export default function ToggleButton() {
  
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("DarkModeContext is not available.");
  }

  const { darkMode, toggleDarkMode } = context;

  return (
    <button aria-label="Set Light/Dark mode" onClick={toggleDarkMode}>
      {darkMode ? <BsFillSunFill size={20} color="yellow" /> : <BsFillMoonFill size={20} color="SteelBlue" />}
    </button>
  )
}
