import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import BurgerMenu from './MenuBurger';
import { Link } from 'react-scroll';

function Header() {
  
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

    return (
      <header className="flex flex-row justify-between p-6 text-white text-lg">
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
      <ul className="hidden md:flex text-slate-900 gap-6 text-center text-xl">
        <li>
          <Link
            to="experiences"
            smooth={true} // Active le défilement fluide
            className="text-white cursor-pointer"
          >
            Experiences
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            className="text-white cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            className="text-white cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
    );
  }
export default Header;