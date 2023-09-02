import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Link } from 'react-scroll';

import data from '../data/navData'

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
      <nav>
        <ul
          className="text-slate-900 flex flex-col gap-12 text-center text-xl mt-12"
          onClick={() => setBurgerIsOpen(false)}
        >
            {data.map((value) => {
                    return (
                        <li>
                            <Link
                                to={value.to}
                                smooth={true} 
                                className="text-white text-xl"
                                onClick={() => setBurgerIsOpen(false)}
                                >
                                {value.content}
                            </Link>
                        </li>
                    );
                })}
        </ul>
      </nav>

    </div>
  );
}

export default BurgerMenu;

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