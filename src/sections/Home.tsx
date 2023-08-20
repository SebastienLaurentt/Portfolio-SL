import Header from '../components/Header';

import deskLogo from '../assets/deskLogo.svg';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';



function Home() {
  return (
    <section className="bg-gradient-to-bl from-slate-900 to-gray-700 min-h-screen p-8">
      <Header />
      <div className="p-4 md:p-8">
        <div className=" w-full text-center mt-20 mb-8 md:mb-16">
          <span className="text-4xl md:text-5xl text-white mb-0"> Welcome ! </span>
          <h2 className="mb-4"> I'm Sébastien </h2>
          <p className="">
            {' '}
            A cognitive researcher who wants to use brain knowledge to build an
            accessible web{' '}
          </p>
          <button className="text-white bg-cyan-700 text-md md:text-lg p-4 rounded-full">
            DOWNLOAD CV
          </button>
        </div>
        <div>
          <img src={deskLogo} alt="" className="h-60 md:h-96 mx-auto" />
        </div>
        
      </div>
      <div className="text-white text-center mt-4 md:mt-12 animate-bounce">
        <span className=""> Scroll</span>
        <div className="flex flex-row justify-center">
          <MdKeyboardDoubleArrowDown size={28} />
        </div>
      </div>
    </section>
  );
}
export default Home;
