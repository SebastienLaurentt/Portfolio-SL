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

  // ENGLISH MODE 
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
      className='min-h-screen'
    >
      <Header />

      {/* HOME CONTENT */}
      <div className="p-4 md:p-8 xl:px-16 xl:w-4/5 xl:mx-auto xl:flex xl:items-center 2xl:w-2/3 2xl:mt-12">
        {/* HERO  */}
        <div className=" w-full xl:w-2/3 text-center xl:text-left mb-12 md:mb-20">
          <h1 className=""> 
           {dataLanguage.opening}
          </h1>
          <h2 className="mb-2 xl:text-left"> 
            {dataLanguage.presentation}
          </h2>
          {/* SOCIAL ICON */}
          <ul className='mb-4 flex gap-x-4 justify-center xl:justify-start'>
            <li className=''>
              <a href="https://github.com/SebastienLaurentt" aria-label="See my GitHub profile" target="blank_">
                <AiFillGithub   className='md:hover:fill-sky-700 h-8 w-8 md:h-10 md:w-10 2xl:h-12 2xl:w-12'/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Seb_webdev" aria-label="See my Twitter profile" target="blank_">
                <AiOutlineTwitter  className='md:hover:fill-sky-700 h-8 w-8 md:h-10 md:w-10 2xl:h-12 2xl:w-12' />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/s%C3%A9bastien-laurent-3a007328a/" aria-label="See my Linkedin profile" target="blank_">
                <AiFillLinkedin className='md:hover:fill-sky-700 h-8 w-8 md:h-10 md:w-10 2xl:h-12 2xl:w-12'/>
              </a>
            </li>
          </ul>
          <p 
            className="text-lg md:text-xl 2xl:text-2xl mb-8" 
            dangerouslySetInnerHTML={{ __html: dataLanguage.description }} 
          />
          {/* CV DOWNLOAD */}
          <a
            className="text-white bg-sky-900 md:hover:bg-sky-700 text-md md:text-lg 2xl:text-xl p-4 rounded-full"
            href={CvFile}
            download ="SébastienLaurent_CV.pdf"
          >
            {dataLanguage.cv}
          </a>
        </div>

        {/* HOME LOGO */}
        <div className=''>
          <img src={deskLogo} alt="" className=" md:w-4/5 xl:w-4/5 mx-auto" />
        </div>
      </div>
      {/* SCROLL BOTTOM */}
      <div className="text-center md:mt-4 xl:mt-12 2xl:mt-32 animate-bounce">
        <span className=""> Scroll </span>
        <div className="flex flex-row justify-center">
          <MdKeyboardDoubleArrowDown size={28} />
        </div>
      </div>
    </Section>
  );
}
export default Home;
