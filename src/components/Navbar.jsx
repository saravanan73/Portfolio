import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <a href="/" className="navbar__title">
        Portfolio
      </a>
      <div className="navbar__menu">
        <i
          className={`navbar__menuBtn ${
            menuOpen ? "fa-solid fa-x":"fa-solid fa-bars"
          }`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
        <ul
          className={`navbar__menu_items ${menuOpen && "navbar__menuOpen"}`}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
