import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Link } from 'react-scroll';

interface BurgerMenuProps {
  setBurgerIsOpen: Function;
  burgerIsOpen: boolean;
}

function BurgerMenu({ setBurgerIsOpen, burgerIsOpen}: BurgerMenuProps) {

  const position = burgerIsOpen ? 'top-0 h-screen no-scroll' : '-top-full h-0';

  return (
    <div
      className={`bg-slate-800 absolute left-0 ${position} duration-500 px-8 py-16 w-full z-50 transition-all rounded-b-2xl`}
      onClick={() => setBurgerIsOpen(false)}
    >
      <AiOutlineCloseCircle
        size={32}
        className={'absolute top-14 right-14 fill-white-600 cursor-pointer'}
        onClick={() => setBurgerIsOpen(false)}
      />
      <ul
        className="text-slate-900 flex flex-col gap-12 text-center text-xl mt-12"
        onClick={() => setBurgerIsOpen(false)}
      >
        <li>
          <Link
            to="about"
            smooth={true} // Active le défilement fluide
            className="text-white text-xl"
            onClick={() => setBurgerIsOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="experiences"
            smooth={true} // Active le défilement fluide
            className="text-white text-xl"
            onClick={() => setBurgerIsOpen(false)}
          >
            Experiences
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            className="text-white text-xl"
            onClick={() => setBurgerIsOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            className="text-white text-xl"
            onClick={() => setBurgerIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BurgerMenu;

