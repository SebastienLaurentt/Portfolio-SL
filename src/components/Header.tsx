
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import BurgerMenu from './MenuBurger';
import headerCategory from '../data/headerCategory';

  
  function Header() {

    const [burgerIsOpen, setBurgerIsOpen] = useState(false);

    return (
      <header className="flex flex-row justify-between p-6 text-white text-lg">
        <div className="">
            <span>SL -</span>
            <span className="font-bold text-cyan-400"> Web Developer</span>
        </div>
        <div>
        <IoMdMenu
          size={32}
          className={'cursor-pointer'}
          onClick={() => {
            setBurgerIsOpen(true);
          }}
        />
      </div>
      {burgerIsOpen && <BurgerMenu setBurgerIsOpen={setBurgerIsOpen} headerCategory={headerCategory}/>}
      </header>
    );
  }
export default Header;