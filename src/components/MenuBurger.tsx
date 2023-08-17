import { AiOutlineCloseCircle } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';

interface BurgerMenuProps {
  setBurgerIsOpen: Function;
  burgerIsOpen: boolean;
  headerCategory: {
    label: string;
    route: string;
  }[];
}

function BurgerMenu({ setBurgerIsOpen, burgerIsOpen}: BurgerMenuProps) {

  const position = burgerIsOpen ? 'top-0 h-screen' : '-top-full h-0';

  return (
    <div
      className={`bg-slate-800 absolute left-0 ${position} duration-500 px-8 py-16 w-full z-50 transition-all rounded-b-2xl`}
    >
      <AiOutlineCloseCircle
        size={32}
        className={'absolute top-14 right-14 fill-white-600 cursor-pointer'}
        onClick={() => setBurgerIsOpen(false)}
      />
      <ul
        className="text-slate-900 flex flex-col gap-6 text-center text-xl"
        onClick={() => setBurgerIsOpen(!burgerIsOpen)}
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
    </div>
  );
}

export default BurgerMenu;

