import { useContext } from "react"
import { DarkModeContext } from "../contexts/DarkModeProvider"

import { BsFillMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';


export default function ToggleButton() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  console.log(darkMode);
  return (
    <button 
        onClick={toggleDarkMode}
    >
        { darkMode ? <BsFillSunFill size={20} color="yellow" /> : <BsFillMoonFill size={20} color="SteelBlue " />  }
    </button>
  )
}