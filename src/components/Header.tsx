import { useEffect, useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import BurgerMenu from './MenuBurger';
import { Link } from 'react-scroll';

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
      <header className="flex flex-row justify-between p-8 lg:py-16  text-white xl:w-4/5 lg:mx-auto ">
        <div className="">
            <span className="">SL -</span>
            <span className="font-bold text-emerald-500"> Web Developer</span>
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
      <BurgerMenu setBurgerIsOpen={setBurgerIsOpen} burgerIsOpen={burgerIsOpen}/>
      <nav className='hidden'>
            <ul className="md:flex text-slate-900 gap-6 lg:gap-12 ">
                {data.map((value) => {
                    return (
                        <li>
                            <Link
                                to={value.to}
                                smooth={true} 
                                className="text-white cursor-pointer md:hover:text-cyan-500"
                                >
                                {value.content}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    </header>
    );
  }
export default Header;