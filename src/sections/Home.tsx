import Header from '../components/Header';

import deskLogo from '../assets/deskLogo.svg';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

MdKeyboardDoubleArrowDown;

function Home() {
  return (
    <section className="bg-gradient-to-bl from-slate-900 to-gray-700 min-h-screen p-8">
      <Header />
      <section className="p-4">
        <div className=" text-white w-full text-center mt-20 mb-8">
          <span className="block text-3xl"> Welcome ! </span>
          <span className=" block text-emerald-500  text-4xl mb-4">
            {' '}
            I'm Sébastien
          </span>
          <p className="text-lg mb-4">
            {' '}
            A cognitive researcher who wants to use brain knowledge to build an
            accessible web{' '}
          </p>
          <button className="bg-gradient-to-r from-teal-700 to-cyan-400 text-md p-4 rounded-full">
            DOWNLOAD CV
          </button>
        </div>
        <img src={deskLogo} alt="" className="" />
      </section>
      <div className="text-white text-center mt-4 animate-bounce">
        <span> Scroll</span>
        <div className="flex flex-row justify-center">
          <MdKeyboardDoubleArrowDown size={24} />
        </div>
      </div>
    </section>
  );
}
export default Home;
