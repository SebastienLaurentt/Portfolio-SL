import About from '../sections/About';
import Contact from '../sections/Contact';
import Experiences from '../sections/Experiences';
import Home from '../sections/Home';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';

function App() {
  return (
    <div className="App">
      <Home gradientToBl={true} />
      <About gradientToBl={false}/>
      <Experiences gradientToBl={true}  />
      <Projects gradientToBl={false} />
      <Skills gradientToBl={true} />
      <Contact gradientToBl={false} />
    </div>
  );
}

export default App;