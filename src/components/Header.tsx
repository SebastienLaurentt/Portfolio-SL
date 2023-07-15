interface HeaderProps {
    headerCategory: {
      label: string;
      route: string;
    }[];
  }
  
  function Header({headerCategory}: HeaderProps) {
    return (
      <header className="flex flex-row justify-between p-6 text-white text-lg">
        <div className="">
            <span>Sébastien Laurent -</span>
            <span className="font-bold text-cyan-400"> Web Developer</span>
        </div>
        <nav className="">
            <ul className="flex flex-row">
                {headerCategory.map((headerCategory) => {
                        return (
                            <li className="px-4 hover:text-cyan-400">
                                <a className="" href={headerCategory.route} key = {headerCategory.label}>
                                {headerCategory.label}
                                </a>
                            </li>
                            )
                        }
                        )
                    }
            </ul>
        </nav>
      </header>
    );
  }
export default Header;