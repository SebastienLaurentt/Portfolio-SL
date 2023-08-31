import { Link } from "react-scroll";

import data from '../data/navData'

function Nav () {
    return (
        <nav>
            <ul className="hidden md:flex text-slate-900 gap-6 lg:gap-12 ">
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
            </ul>
        </nav>
    )
}

export default Nav;