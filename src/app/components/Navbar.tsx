import React from "react";
import { Link } from 'react-scroll';



export interface INavbarProps {

}

const Navbar: React.FunctionComponent<INavbarProps> = () => {

  return (

    <nav className="flex justify-around md:justify-between bg-slate-900/75">
        <a href="/"><h1 className="hidden sm:block md:w-3/5 text-xl md:text-3xl font-semibold px-6 py-5">K<span className='italic'>A</span></h1></a>

        <div className="md:w-2/5 flex gap-2 md:gap-0 px-6 py-5 md:p-0 lg:text-lg">
            <button className="w-full px-2 hover:border-t-2">
                <Link activeClass="active" to="top" spy={true} smooth={true} offset={0} duration={500}>
                    About
                </Link>
            </button>
            <button className="w-full hover:border-t-2">
                <Link activeClass="active" to="education" spy={true} smooth={true} offset={0} duration={500}>
                    Education
                </Link>
            </button>
            <button className="w-full hover:border-t-2">
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>
                    Projects
                </Link>
            </button>
            <button className="w-full hover:border-t-2">
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                    Contact
                </Link>
            </button>
        </div>
    </nav>
  );
};

export default Navbar;