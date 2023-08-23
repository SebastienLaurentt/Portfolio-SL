import Header from '../components/Header';

import CvFile from '../assets/CV.pdf'
import deskLogo from '../assets/deskLogo.svg';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import Section from '../components/Section';




function Home() {
  return (
    
    <Section heightScreen={true} gradientToBl={true}>
      <Header />
      <div className="p-4 md:p-8 lg:px-16 lg:w-4/5 lg:mx-auto lg:flex lg:items-center">
        {/* Hero  */}
        <div className=" w-full lg:w-1/2 text-center lg:text-left mt-16 mb-12 md:mb-20">
          <span className="text-4xl md:text-5xl text-white mb-0"> Welcome ! </span>
          <h2 className="mb-4 lg:text-left"> I'm Sébastien </h2>
          <p className="mb-8">
            {' '}
            A <strong>cognitive researcher</strong>  who wants to use brain knowledge to make the web more <strong>accessible</strong> {' '}
          </p>
          <a
            className="text-white bg-cyan-700 text-md md:text-lg p-4 rounded-full"
            href={CvFile}
            download ="SébastienLaurent_CV.pdf"
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Home logo */}
        <div className='lg:w-2/3 lg:flex lg:justify-end'>
          <img src={deskLogo} alt="" className="h-60 mx-auto lg:mx-0 md:h-96 lg:h-[32rem]" />
        </div>
      </div>
      {/* Scroll bottom */}
      <div className="text-white text-center mt-4 md:mt-12 animate-bounce">
        <span className=""> Scroll </span>
        <div className="flex flex-row justify-center">
          <MdKeyboardDoubleArrowDown size={28} />
        </div>
      </div>
    </Section>
  );
}
export default Home;
