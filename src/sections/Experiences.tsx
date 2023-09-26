import { useState } from 'react';


import { MdSchool } from 'react-icons/md';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';

import dataButton from '../data/experienceButtonData';
import dataContent from '../data/experienceContentData';
import ExperienceButton from '../components/ExperienceButton';
import ExperienceContent from '../components/ExperienceContent';

import { EnglishLanguageContext } from "../contexts/LanguageProvider";
import { useContext } from 'react';


function Experiences ({ gradientToBl }: { gradientToBl: boolean }) {

  // ENGLISH MODE
  const context = useContext(EnglishLanguageContext);

  if (!context) {
    throw new Error("EnglishLanguageContext is not available.");
  }

  const { englishLanguage } = context;

  const dataButtonLanguage = englishLanguage ? dataButton.english : dataButton.french;

  const dataContentLanguage = englishLanguage ? dataContent.english : dataContent.french;

 // EXPERIENCE BUTTON STATE
  const [activeButton, setActiveButton] = useState('PhD Student');

  
  let sectionContent;

  if (activeButton === 'PhD Student' || activeButton === 'Doctorat') {
    sectionContent = (
      <ExperienceContent 
        title={dataContentLanguage.phdStudent.title}
        location={dataContentLanguage.phdStudent.location}
        description={dataContentLanguage.phdStudent.description}
        moreDescription={dataContentLanguage.phdStudent.moreDescription}
        srcImg={dataContentLanguage.phdStudent.srcImg}
        altImg={dataContentLanguage.phdStudent.altImg}
      />
    );
  } 
  
  else if (activeButton === 'Post Doc') {
    sectionContent = (
      <ExperienceContent 
        title={dataContentLanguage.postDoc.title}
        location={dataContentLanguage.postDoc.location}
        description={dataContentLanguage.postDoc.description}
        moreDescription={dataContentLanguage.postDoc.moreDescription}
        srcImg={dataContentLanguage.postDoc.srcImg}
        altImg={dataContentLanguage.postDoc.altImg}
      />
    );
  } else if (activeButton === 'Web Dev') {
    sectionContent = (
      <ExperienceContent 
        title={dataContentLanguage.webDev.title}
        location={dataContentLanguage.webDev.location}
        description={dataContentLanguage.webDev.description}
        moreDescription={dataContentLanguage.webDev.moreDescription}
        srcImg={dataContentLanguage.webDev.srcImg}
        altImg={dataContentLanguage.webDev.altImg}
      />
    );
  }

  return (
    <Section id ="experiences" 
      gradientToBl={gradientToBl}
      paddingBottom={true}
    >
      <MdSchool className="mx-auto text-rose-700 w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24" />
      { englishLanguage ? 
        <SectionHeader
          sectionTitle="Experiences"
          sectionDescription="Let's see how I went from cognitive research to web development !"
        />

        :

        <SectionHeader
          sectionTitle="Expériences"
          sectionDescription="Regardons comment je suis passé de la recherche au développement web !"
        />
      }
      
      <div className='2xl:w-2/3 mx-auto'>
      {/* EXPERIENCE BUTTON */}
        <div className="flex flex-row justify-center gap-x-2 md:gap-x-6 md:px-4">
          {dataButtonLanguage.map((value) => {
            return (
              <ExperienceButton
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                key={value.id}
                experienceTitle={value.experienceTitle}
                experienceDate= {value.experienceDate}
              
              />
            );
          })}
        </div>
        {/* EXPERIENCE CONTENT */}
        <section className="">
          {sectionContent}
        </section>
      </div>

    </Section>
  );
}

export default Experiences;
