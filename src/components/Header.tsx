interface HeaderProps {
    headerCategory: {
      label: string;
      route: string;
    }[];
  }
  
  function Header({headerCategory}: HeaderProps) {
    return (
      <header className="flex flex-row justify-between p-6 bg-blue-800">
        <div className="">
            <span>Sébastien Laurent</span>
            <span> Web Developer</span>
        </div>
        <nav className="mr-8">
            <ul className="flex flex-row">
                {headerCategory.map((headerCategory) => {
                        return (
                            <li className="px-4">
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