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
        <h4 className="mb-0">PhD Student</h4>
        <h5 className="">Gustave Eiffel University</h5>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis sunt nobis earum id a dolor eos? Eius odit necessitatibus ab earum error aperiam, maxime ea eveniet sequi et voluptatem ipsa adipisci illo consectetur iusto, cupiditate alias nemo nihil ipsam.
        </p>
        <img src={brainlogo} alt="" className="mt-4 h-52" />
      </div>
    );
  } else if (activeButton === 'Post Doc') {
    sectionContent = (
      <>
        <h4 className="mb-0">Post Doc</h4>
        <h5 className="">Gustave Eiffel University</h5>
        <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis sunt nobis earum id a dolor eos? Eius odit necessitatibus ab earum error aperiam, maxime ea eveniet sequi et voluptatem ipsa adipisci illo consectetur iusto, cupiditate alias nemo nihil ipsam.
        </p>
        <img src={carlogo} alt="" className="mt-4 h-52" />
      </>
    );
  } else if (activeButton === 'Web Dev') {
    sectionContent = (
      <>
        <h4 className="mb-0">Web Dev</h4>
        <h5 className="">O'Clock Company</h5>
        <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis sunt nobis earum id a dolor eos? Eius odit necessitatibus ab earum error aperiam, maxime ea eveniet sequi et voluptatem ipsa adipisci illo consectetur iusto, cupiditate alias nemo nihil ipsam.
        </p>
        <img src={computerlogo} alt="" className="mt-4 h-52" />
      </>
    );
  }

  return (
    <section className="bg-gradient-to-tl from-slate-900 to-gray-700 min-h-screen p-8">
      <h2>Experiences</h2>
      <div className="flex flex-row justify-between mt-4">
        <button
          className={`${
            activeButton === 'PhD Student'
              ? 'bg-gradient-to-r from-teal-700 to-cyan-400 text-white'
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
              ? 'bg-gradient-to-r from-teal-700 to-cyan-400 text-white'
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
              ? 'bg-gradient-to-r from-teal-700 to-cyan-400 text-white'
              : 'bg-white text-black'
          } flex flex-col p-2 rounded-lg items-center`}
          onClick={() => handleButtonClick('Web Dev')}
        >
          <span>Web Dev</span>
          <span>2022 - 2023</span>
        </button>
      </div>
      <section className="p-4 text-white w-full text-center mt-8 flex flex-col">
        {sectionContent}
      </section>
    </section>
  );
}

export default Experiences;
