import Header from '../components/Header';

import CvFile from '../assets/CV.pdf'
import deskLogo from '../assets/deskLogo.svg';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import Section from '../components/Section';

import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

import { EnglishLanguageContext } from "../contexts/LanguageProvider";
import { useContext } from 'react';

import data from '../data/homeData'


function Home ({ gradientToBl }: { gradientToBl: boolean }) {

  const context = useContext(EnglishLanguageContext);

  if (!context) {
    throw new Error("EnglishLanguageContext is not available.");
  }

  const { englishLanguage } = context;

  const dataLanguage = englishLanguage ? data.english : data.french;

  return (
    
    <Section 
      gradientToBl={gradientToBl}
      paddingBottom={true}
    >
      <Header />
      <div className="p-4 md:p-8 lg:px-16 xl:w-4/5 lg:mx-auto lg:flex lg:items-center ">
        {/* Hero  */}
        <div className=" w-full lg:w-1/2 text-center lg:text-left md:mt-8  mb-12 md:mb-20">
          <span className="text-4xl md:text-5xl mb-0"> 
           {dataLanguage.opening}
          </span>
          <h2 className="mb-2 lg:text-left"> 
            {dataLanguage.presentation}
          </h2>
          <ul className='mb-4 flex gap-x-4 justify-center lg:justify-start'>
            <li className=''>
              <a href="https://github.com/SebastienLaurentt" aria-label="See my GitHub profile" target="blank_">
                <AiFillGithub size={28}  className='md:hover:fill-cyan-500'/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Seb_webdev" aria-label="See my Twitter profile" target="blank_">
                <AiOutlineTwitter size={28}  className='md:hover:fill-cyan-500' />
              </a>
            </li>
            <li>
              <a href="www.linkedin.com/in/sébastien-laurent-3a007328a" aria-label="See my Linkedin profile" target="blank_">
                <AiFillLinkedin size={28} className='md:hover:fill-cyan-500'/>
              </a>
            </li>
          </ul>
          <p 
            className="text-lg md:text-xl mb-8" 
            dangerouslySetInnerHTML={{ __html: dataLanguage.description }} 
          />
          <a
            className="text-white bg-cyan-800 md:hover:bg-cyan-500 text-md md:text-lg p-4 rounded-full"
            href={CvFile}
            download ="SébastienLaurent_CV.pdf"
          >
            {dataLanguage.cv}
          </a>
        </div>
        {/* Home logo */}
        <div className='lg:w-2/3 lg:flex lg:justify-end'>
          <img src={deskLogo} alt="" className="h-60 mx-auto lg:mx-0 md:h-96 lg:h-[32rem]" />
        </div>
      </div>
      {/* Scroll bottom */}
      <div className="text-center  md:mt-12 animate-bounce">
        <span className=""> Scroll </span>
        <div className="flex flex-row justify-center">
          <MdKeyboardDoubleArrowDown size={28} />
        </div>
      </div>
    </Section>
  );
}
export default Home;
