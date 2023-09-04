import { useEffect, useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import BurgerMenu from './MenuBurger';
import { Link } from 'react-scroll';
import DarkModeToggle from './DarkModeToggle'

import data from '../data/navData'



function Header() {
  
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  useEffect(() => {
    if (burgerIsOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [burgerIsOpen]);


    return (
      <header className="flex justify-between items-center p-8 lg:py-16  xl:w-4/5 lg:mx-auto ">
        <div className="">
            <span className="">SL -</span>
            <span className="font-bold text-emerald-500"> Web Developer</span>
        </div>

      <BurgerMenu setBurgerIsOpen={setBurgerIsOpen} burgerIsOpen={burgerIsOpen}/>
        <ul className="hidden md:flex  gap-6 lg:gap-12 ">
            {data.map((value) => {
                return (
                    <li>
                        <Link
                            to={value.to}
                            smooth={true} 
                            className="cursor-pointer md:hover:text-cyan-500"
                            >
                            {value.content}
                        </Link>
                    </li>
                );
            })}
        </ul>
        <div className='flex items-center gap-x-2'>
          <span className='flex'>
            <DarkModeToggle />
          </span>
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