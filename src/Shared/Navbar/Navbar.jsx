import { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" }
  
  ];

  return (
    <nav className="bg-[#0F0F1B] text-white px-4 md:px-12 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <span className="text-orange-500">JAHA</span>
          <span className="text-green-400">NGIR</span>
          <span className="text-blue-400"> ALAM</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 border-b-2 border-blue-600"
                  : "hover:text-cyan-400"
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="btn bg-gradient-to-r from-green-400 to-teal-500 text-white border-none">
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 border-b border-blue-600 pb-1"
                  : "hover:text-cyan-400"
              }
            >
              {name}
            </NavLink>
          ))}
          <Link to="/contact">
            <button
              onClick={() => setIsOpen(false)}
              className="btn bg-gradient-to-r from-green-400 to-teal-500 text-white border-none w-full mt-2"
            >
              Contact
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
