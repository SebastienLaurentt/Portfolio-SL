import { useEffect, useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import BurgerMenu from './MenuBurger';
import { Link } from 'react-scroll';
import DarkModeToggle from './DarkModeToggle'
import LanguageToggle from './LanguageToggle'


import data from '../data/navData'

import { EnglishLanguageContext } from "../contexts/LanguageProvider";
import { useContext } from 'react';


function Header() {
  
  // ENGLISH MODE
  const context = useContext(EnglishLanguageContext);

  if (!context) {
    throw new Error("EnglishLanguageContext is not available.");
  }

  const { englishLanguage } = context;

  const dataLanguage = englishLanguage ? data.english : data.french;

  // BURGER STATE
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  useEffect(() => {
    if (burgerIsOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [burgerIsOpen]);

    return (
      <header className="flex justify-between items-center p-8 lg:py-16  xl:w-4/5 lg:mx-auto 2xl:w-2/3 ">
        <div className="hidden lg:flex gap-x-1">
            <span className="">SL - </span>
            <span className="font-bold text-emerald-500"> Web Developer</span>
        </div>

      <BurgerMenu 
        setBurgerIsOpen={setBurgerIsOpen} 
        burgerIsOpen={burgerIsOpen}
        gradientToBl={true}
      />
        <ul className="hidden md:flex  gap-6 lg:gap-12  ">
            {dataLanguage.map((value) => {
                return (
                    <li className=''>
                        <Link
                            to={value.to}
                            smooth={true} 
                            className="cursor-pointer md:hover:text-sky-500 2xl:text-xl"
                            >
                            {value.content}
                        </Link>
                    </li>
                );
            })}
        </ul>
        <div className='flex flex-row-reverse justify-between w-full md:w-1/5'>
          <div className='flex gap-x-4 2xl:gap-x-6 '>
            <span  className='flex'>
              <LanguageToggle />
            </span>
            <span  className='flex'>
              <DarkModeToggle />
            </span>
          </div>
          <div className="md:hidden">
            <IoMdMenu
              size={32}
              className={'cursor-pointer'}
              onClick={() => {
                setBurgerIsOpen(true);
              }}
            />
          </div>
        </div>
    </header>
    );
  }
export default Header;