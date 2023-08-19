import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link} from "react-scroll";
import logo from "../assets/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../index.css";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const navVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
  hover: { scale: 1.1, cursor: "pointer" },
};

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbar = document.getElementById("navbar");

      if (currentScrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`navbar flex items-center justify-between h-16 max-w-full desktop:px-[46px] tablet:px-[48px] z-40 ${
        nav ? "scrolled" : ""
      }`}
    >
      <Link
        to="home" // Scroll to the home section
        smooth={true}
        duration={500}
        offset={-70}
        className="cursor-pointer"
      >
        <motion.img
          src={logo}
          alt="Logo"
          className="h-8 mt-2 tablet:px-0 px-10"
          whileHover="hover"
          variants={navVariants}
        />
      </Link>
      <ul
        className={`smartphone:hidden flex pb-2 tablet:hidden desktop:px-8 ${
          nav ? "hidden" : ""
        }`}
      >
        <motion.li
          className="p-4 text-white"
          whileHover="hover"
          variants={navVariants}
        >
          <Link
            to="home" // Scroll ke halaman dengan id 'home'
            smooth={true}
            duration={500}
            offset={-70}
          >
            Home
          </Link>
        </motion.li>
        <motion.li
          className="p-4 text-white"
          whileHover="hover"
          variants={navVariants}
        >
          <Link
            to="about" // Scroll ke halaman dengan id 'about'
            smooth={true}
            duration={500}
            offset={-40}
          >
            About
          </Link>
        </motion.li>
        <motion.li
          className="p-4 text-white"
          whileHover="hover"
          variants={navVariants}
        >
          <Link
            to="skills" // Scroll ke halaman dengan id 'skills'
            smooth={true}
            duration={500}
            offset={20}
          >
            Skills
          </Link>
        </motion.li>
        <motion.li
          className="p-4 text-white"
          whileHover="hover"
          variants={navVariants}
        >
          <Link
            to="portfolio" // Scroll ke halaman dengan id 'portfolio'
            smooth={true}
            duration={500}
            offset={-70}
          >
            Portfolio
          </Link>
        </motion.li>
        <motion.li
          className="p-4 text-white"
          whileHover="hover"
          variants={navVariants}
        >
          <a href="mailto:Robyhdyt97@gmail.com">Contact</a>
        </motion.li>
      </ul>
      <motion.div
        onClick={handleNav}
        className="block desktop:hidden z-50 fixed mt-0 right-12 tablet:right-14"
        whileHover="hover"
        variants={navVariants}
      >
        {!nav ? <AiOutlineMenu size={20} color="white" /> : <AiOutlineClose size={20} color="white" />}
      </motion.div>
      <motion.div
        className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-90 transition-all duration-500 z-40"
        initial="closed"
        animate={nav ? "open" : "closed"}
        variants={variants}
      >
        <img src={logo} alt="Logo" className="h-8 m-0 px-10 mt-5 " />
        <ul className={`w-full h-full flex flex-col items-center justify-center text-center uppercase ${nav ? '' : 'hidden'}`}>
          <li className="p-4 text-white">
            <Link
              to="home" // Scroll ke halaman dengan id 'home'
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleNav} // Menutup menu setelah link diklik
            >
              Home
            </Link>
          </li>
          <li className="p-4 text-white">
            <Link
              to="about" // Scroll ke halaman dengan id 'about'
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleNav} // Menutup menu setelah link diklik
            >
              About
            </Link>
          </li>
          <li className="p-4 text-white">
            <Link
              to="skills" // Scroll ke halaman dengan id 'skills'
              smooth={true}
              duration={500}
              offset={-5}
              onClick={handleNav} // Menutup menu setelah link diklik
            >
              Skills
            </Link>
          </li>
          <li className="p-4 text-white">
            <Link
              to="portfolio" // Scroll ke halaman dengan id 'portfolio'
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleNav} // Menutup menu setelah link diklik
            >
              Portfolio
            </Link>
          </li>
          <li className="p-4 text-white">
            <a href="mailto:Robyhdyt97@gmail.com" onClick={handleNav}>
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
