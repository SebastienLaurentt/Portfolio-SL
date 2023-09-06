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
  const [activeButton, setActiveButton] = useState('PhD Student');

  let sectionContent;

  const context = useContext(EnglishLanguageContext);

  const { englishLanguage } = context;

  const dataButtonLanguage = englishLanguage ? dataButton.english : dataButton.french;

  const dataContentLanguage = englishLanguage ? dataContent.english : dataContent.french;

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
      <MdSchool size={52} className="mx-auto text-rose-700" />
      <SectionHeader
        sectionTitle="Experiences"
        sectionDescription="Let's see how I went from cognitive research to web development !"
      />
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
      <section className="">
        {sectionContent}
      </section>
    </Section>
  );
}

export default Experiences;
