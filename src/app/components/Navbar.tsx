import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-around md:justify-between bg-slate-900 transition-all duration-500 px-6 ${isScrolled ? 'h-12' : 'h-12 md:h-16'}`}>
        {/* {!isScrolled && (
            <div className={`hidden sm:block md:w-3/5 text-xl md:text-3xl font-semibold`}>
                <a href="/">K<span className='italic'>A</span></a>
            </div>
        )} */}

        <div className={`hidden md:flex items-center md:w-3/5 text-xl md:text-3xl font-semibold h-full transition-width duration-500 ${isScrolled ? 'md:w-0' : 'md:w-3/5'}`}>
            <a href="/" className={`transition-opacity duration-200 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>K<span className='italic'>A</span></a>
        </div>

        <div className={`md:w-2/5 flex gap-4 md:gap-0 m-auto transition-width duration-500 h-full ${isScrolled ? 'md:w-3/5' : 'md:w-2/5 lg:text-lg'}`}>
            <Link
                to="top"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="w-full flex justify-center items-center cursor-pointer border-b-2 border-transparent hover:border-white"
            >
                About
            </Link>

            <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="w-full flex justify-center items-center cursor-pointer border-b-2 border-transparent hover:border-white"
            >
                Education
            </Link>

            <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="w-full flex justify-center items-center cursor-pointer border-b-2 border-transparent hover:border-white"
            >
                Projects
            </Link>

            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="w-full flex justify-center items-center cursor-pointer border-b-2 border-transparent hover:border-white"
            >
                Contact
            </Link>
        </div>
    </nav>
  );
};

export default Navbar;
