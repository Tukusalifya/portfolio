import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    const scrollY = window.scrollY;

    if(scrollY > 100) {
      setScrolled(true);
    }else { 
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll); 
  }, []);



  return (
    <nav className={`bg-[var(--background-color)] fixed w-full top-0 left-0 z-10 ${scrolled ? "border-b border-gray-200" : ""}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15">
          {/* logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex-shrink-0 text-2xl font-bold text-[var(--primary-color)] ">
              T
            </div>
            <div className="flex-shrink-0 text-2xl font-bold c">S</div>
          </div>

          {/* menu */}
          <div className="hidden md:flex space-x-8 text-[16px]">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-120}
              className="text-[var(--text-color)] hover:text-[var(--primary-color)] hover:cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-15}
              className="text-[var(--text-color)] hover:text-[var(--primary-color)] hover:cursor-pointer"
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-15}
              className="text-[var(--text-color)] hover:text-[var(--primary-color)] hover:cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-15}
              className="text-[var(--text-color)] hover:text-[var(--primary-color)] hover:cursor-pointer"
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-15}
              className="text-[var(--text-color)] hover:text-[var(--primary-color)] hover:cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-15}
              className="text-[var(--text-color)]hover:text-[var(--primary-color)] hover:cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button*/}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[var(--primary-color)] focus:outline-none focus:text-[var(--primary-color)]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, ease: "easeInOut"}}
        
        className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-120}
              className="block text-gray-700 hover:text-[var(--primary-color)] hover:cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-15}
              className="block text-gray-700hover:text-[var(--primary-color)] hover:cursor-pointer"
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-15}
              className="block text-gray-700hover:text-[var(--primary-color)] hover:cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-15}
              className="block text-gray-700hover:text-[var(--primary-color)] hover:cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-15}
              className="block text-gray-700hover:text-[var(--primary-color)] hover:cursor-pointer"
            >
              Experience
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-15}
              className="block text-gray-700hover:text-[var(--primary-color)] hover:cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
