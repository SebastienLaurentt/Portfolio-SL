import { AiOutlineCloseCircle } from 'react-icons/ai';

interface BurgerMenuProps {
  setBurgerIsOpen: Function;
  headerCategory: {
    label: string;
    route: string;
  }[];
}

function BurgerMenu({ setBurgerIsOpen, headerCategory }: BurgerMenuProps) {
  return (
    <div className="bg-slate-800 absolute top-0 left-0 p-6 h-52 w-full">
      <AiOutlineCloseCircle
        size={32}
        className={'absolute top-14 right-14 fill-gray-50 cursor-pointer'}
        onClick={() => setBurgerIsOpen(false)}
      />
        <ul
          className="text-gray-50 flex flex-col gap-4 text-center text-xl mt-8"
          onClick={() => setBurgerIsOpen(false)}
        >
          {headerCategory.map((headerCategory) => {
                  return (
                      <li className="px-4 hover:text-cyan-400 ">
                          <a className="" href={headerCategory.route} key = {headerCategory.label}>
                          {headerCategory.label}
                          </a>
                      </li>
                      )
                  }
                  )
              }
        </ul>

    </div>
  );
}

export default BurgerMenu;
