import { useContext } from "react";
import About from '../sections/About';
import Contact from '../sections/Contact';
import Experiences from '../sections/Experiences';
import Home from '../sections/Home';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';

import { DarkModeContext } from "../contexts/DarkModeProvider";

function App() {

  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={`App ${darkMode && 'dark-theme'}`}>
      <Home gradientToBl={true} />
      <About gradientToBl={false}/>
      <Experiences gradientToBl={true}/>
      <Projects gradientToBl={false}/>
      <Skills gradientToBl={true}/>
      <Contact gradientToBl={false}/>
    </div>
  );
}

export default App;