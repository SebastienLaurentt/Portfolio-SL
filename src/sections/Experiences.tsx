import React, { useState } from 'react';
import carlogo from '../assets/carLogo.svg';
import brainlogo from '../assets/brainLogo.svg';
import computerlogo from '../assets/computerLogo.svg';


function Experiences() {
  const [activeButton, setActiveButton] = useState('PhD Student');

  const handleButtonClick = (buttonTitle) => {
    setActiveButton(buttonTitle);
  };

  let sectionContent;

  if (activeButton === 'PhD Student') {
    sectionContent = (
      <div className="">
        <h3 className="mb-0">PhD Student</h3>
        <h4 className="">Gustave Eiffel University</h4>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis sunt nobis earum id a dolor eos? Eius odit necessitatibus ab earum error aperiam, maxime ea eveniet sequi et voluptatem ipsa adipisci illo consectetur iusto, cupiditate alias nemo nihil ipsam.
        </p>
        <img src={brainlogo} alt="" className="mt-4 md:mt-8 h-52 md:h-80 mx-auto" />
      </div>
    );
  } else if (activeButton === 'Post Doc') {
    sectionContent = (
      <>
        <h3 className="mb-0">Post Doc</h3>
        <h4 className="">Gustave Eiffel University</h4>
        <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis sunt nobis earum id a dolor eos? Eius odit necessitatibus ab earum error aperiam, maxime ea eveniet sequi et voluptatem ipsa adipisci illo consectetur iusto, cupiditate alias nemo nihil ipsam.
        </p>
        <img src={carlogo} alt="" className="mt-4 md:mt-8 h-52 md:h-80 mx-auto" />
      </>
    );
  } else if (activeButton === 'Web Dev') {
    sectionContent = (
      <>
        <h3 className="mb-0">Web Dev</h3>
        <h4 className="">O'Clock Company</h4>
        <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis sunt nobis earum id a dolor eos? Eius odit necessitatibus ab earum error aperiam, maxime ea eveniet sequi et voluptatem ipsa adipisci illo consectetur iusto, cupiditate alias nemo nihil ipsam.
        </p>
        <img src={computerlogo} alt="" className="mt-4 md:mt-12 h-52 md:h-80 mx-auto" />
      </>
    );
  }

  return (
    <section className="bg-gradient-to-tl from-slate-900 to-gray-700 min-h-screen p-8">
      <h2>Experiences</h2>
      <div className="flex flex-row justify-around mt-4 p-4">
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
      <section className="p-4 md:p-8  w-full text-center mt-8 flex flex-col">
        {sectionContent}
      </section>
    </section>
  );
}

export default Experiences;
