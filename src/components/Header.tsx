import { useEffect, useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import BurgerMenu from './MenuBurger';
import { Link } from 'react-scroll';

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
      <header className="flex flex-row justify-between p-8 lg:py-16  text-white lg:w-4/5 lg:mx-auto ">
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
      <ul className="hidden md:flex text-slate-900 gap-6 lg:gap-12 ">
        <li>
          <Link
            to="experiences"
            smooth={true} // Active le défilement fluide
            className="text-white cursor-pointer md:hover:text-cyan-500"
          >
            Experiences
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            className="text-white cursor-pointer md:hover:text-cyan-500"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            className="text-white cursor-pointer md:hover:text-cyan-500"
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
    );
  }
export default Header;