import React, { useState } from 'react';
import carlogo from '../assets/carLogo.svg';
import brainlogo from '../assets/brainLogo.svg';
import computerlogo from '../assets/computerLogo.svg';

import { MdSchool } from 'react-icons/md';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';


function Experiences() {
  const [activeButton, setActiveButton] = useState('PhD Student');

  const handleButtonClick = (buttonTitle: string) => {
    setActiveButton(buttonTitle);
  };

  let sectionContent;

  if (activeButton === 'PhD Student') {
    sectionContent = (
      <div className="">
        <h3 className="mb-0">PhD Student</h3>
        <h4 className="">Gustave Eiffel University</h4>
        <p className="">
        The aim of this thesis was to <strong className='text-emerald-500'>adapt</strong>  the Highway Code learning aid for deaf people to <strong className='text-emerald-500'>suit</strong> their <strong className='text-emerald-500'>cognitive profile</strong>.
        </p>
        <p className="">
        Experiments were carried out to collect behavioral and physiological <strong className='text-emerald-500'>data</strong> using <strong className='text-emerald-500'>oculometry</strong>, as well as <strong className='text-emerald-500'>brain</strong> activity.
        </p>


        <img src={brainlogo} alt="An illustration of researchers doing brain research. (Copyright @ https://fr.freepik.com/vecteurs-libre/illustration-concept-chimie-du-cerveau_29654747.htm#&position=2&from_view=user)" className="mt-4 md:mt-8 h-48 md:h-80 mx-auto" />
      </div>
    );
  } else if (activeButton === 'Post Doc') {
    sectionContent = (
      <>
        <h3 className="mb-0">Post Doc</h3>
        <h4 className="">Gustave Eiffel University</h4>
        <p className="">
        This post-doctorate was linked to a <strong className='text-emerald-500'>European</strong> project to assess the <strong className='text-emerald-500'>acceptability</strong> of <strong className='text-emerald-500'>autonomous</strong> vehicles for young and elderly people.
        </p>
        <p className="">
        A <strong className='text-emerald-500'>driving</strong> simulator was used to immerse participants in various <strong className='text-emerald-500'>scenarios</strong> to gather their <strong className='text-emerald-500'>impressions</strong>. 
        </p>


        
        <img src={carlogo} alt="An illustration of an individual in a car without a steering wheel because it is an autonomous vehicle. (Copyright @ https://fr.freepik.com/vecteurs-libre/illustration-concept-voiture-autonome_19184615.htm#&position=1&from_view=user)" className="mt-4 md:mt-8 h-48 md:h-80 mx-auto" />
      </>
    );
  } else if (activeButton === 'Web Dev') {
    sectionContent = (
      <>
        <h3 className="mb-0">Web Dev</h3>
        <h4 className="">O'Clock Company</h4>
        <p className="">
        The goal of this training was to provide the necessary <strong className='text-emerald-500'>foundations</strong> for website development, teaching programming languages such as <strong className='text-emerald-500'>JavaScript</strong> or <strong className='text-emerald-500'>PHP</strong>.
        </p>
        <p className="">
        A final project (<i>refer to <strong className='text-emerald-500'>Codit</strong>, see below</i>) was carried out over a duration of <strong className='text-emerald-500'>1 month</strong> to consolidate the knowledge acquired during the previous month.
        </p>
        <img src={computerlogo} alt="An illustration of a laptop used for programming. (Copyright @ https://fr.freepik.com/vecteurs-libre/illustration-concept-codage-main_21864184.htm#&position=0&from_view=user) " className="mt-4 md:mt-12 h-48 md:h-80 mx-auto" />
      </>
    );
  }

  return (
    <Section id ="experiences" heightScreen={true} gradientToBl={false}>
      <MdSchool size={52} className="mx-auto text-rose-700" />
      <SectionHeader
        sectionTitle="Experience"
        sectionDescription="Let's see how I went from cognitive research to web development !"
      />
      <div className="flex flex-row justify-center gap-x-2 md:gap-x-6 md:px-4">
        <button
          className={`${
            activeButton === 'PhD Student'
              ? 'bg-cyan-700 text-white'
              : 'bg-white text-black'
          } flex flex-col p-2 rounded-lg items-center`}
          onClick={() => handleButtonClick('PhD Student')}
        >
          <span>PhD Student</span>
          <span>2017 - 2021</span>
        </button>
        <button
          className={`${
            activeButton === 'Post Doc'
              ? 'bg-cyan-700 text-white'
              : 'bg-white text-black'
          } flex flex-col p-2 rounded-lg items-center`}
          onClick={() => handleButtonClick('Post Doc')}
        >
          <span>Post Doc</span>
          <span>2021 - 2022</span>
        </button>
        <button
          className={`${
            activeButton === 'Web Dev'
              ? 'bg-cyan-700 text-white'
              : 'bg-white text-black'
          } flex flex-col p-2 rounded-lg items-center`}
          onClick={() => handleButtonClick('Web Dev')}
        >
          <span>Web Dev</span>
          <span>2022 - 2023</span>
        </button>
      </div>
      <section className="p-4 md:p-8  w-full text-center mt-4 flex flex-col">
        {sectionContent}
      </section>
    </Section>
  );
}

export default Experiences;
