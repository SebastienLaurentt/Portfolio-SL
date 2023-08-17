
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import BurgerMenu from './MenuBurger';
import headerCategory from '../data/headerCategory';

  
  function Header() {

    const [burgerIsOpen, setBurgerIsOpen] = useState(false);

    return (
      <header className="flex flex-row justify-between p-6 text-white text-lg">
        <div className="">
            <span className="">SL -</span>
            <span className="font-bold text-cyan-400"> Web Developer</span>
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
      <BurgerMenu setBurgerIsOpen={setBurgerIsOpen} burgerIsOpen={burgerIsOpen} headerCategory={headerCategory}/>
        <ul
          className=" hidden md:flex text-slate-900   gap-6 text-center text-xl"

        >
          <li className='text-white '>
            Home
          </li>
          <li className='text-white'>
            Experiences
          </li>
          <li className='text-white'>
            Projects
          </li>
          <li className='text-white'>
            Contact
          </li>
        </ul>
      </header>
    );
  }
export default Header;