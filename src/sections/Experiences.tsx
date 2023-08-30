import React, { useState } from 'react';
import carlogo from '../assets/carLogo.svg';
import brainlogo from '../assets/brainLogo.svg';
import computerlogo from '../assets/computerLogo.svg';

import { MdSchool } from 'react-icons/md';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';

import dataButton from '../data/experiencesData';
import dataContent from '../data/experienceContent';
import ExperienceButton from '../components/ExperienceButton';
import ExperienceContent from '../components/ExperienceContent';


function Experiences ({ gradientToBl }: { gradientToBl: boolean }) {
  const [activeButton, setActiveButton] = useState('PhD Student');

  let sectionContent;

  if (activeButton === 'PhD Student') {
    sectionContent = (
      <ExperienceContent 
        title={dataContent.phdStudent.title}
        location={dataContent.phdStudent.location}
        description={dataContent.phdStudent.description}
        moreDescription={dataContent.phdStudent.moreDescription}
        srcImg={dataContent.phdStudent.srcImg}
        altImg={dataContent.phdStudent.altImg}
      />
    );
  } 
  
  else if (activeButton === 'Post Doc') {
    sectionContent = (
      <ExperienceContent 
        title={dataContent.postDoc.title}
        location={dataContent.postDoc.location}
        description={dataContent.postDoc.description}
        moreDescription={dataContent.postDoc.moreDescription}
        srcImg={dataContent.postDoc.srcImg}
        altImg={dataContent.postDoc.altImg}
      />
    );
  } else if (activeButton === 'Web Dev') {
    sectionContent = (
      <ExperienceContent 
        title={dataContent.webDev.title}
        location={dataContent.webDev.location}
        description={dataContent.webDev.description}
        moreDescription={dataContent.webDev.moreDescription}
        srcImg={dataContent.webDev.srcImg}
        altImg={dataContent.webDev.altImg}
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
        {dataButton.map((value) => {
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
      <section className="p-4 md:p-8  w-full text-center mt-8 xl:mt-32 xl:w-4/5 lg:mx-auto lg:flex">
        {sectionContent}
      </section>
    </Section>
  );
}

export default Experiences;
