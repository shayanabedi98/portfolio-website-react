import React, { useState } from "react";
import menu from "../assets/menu.png";

const Navbar = ({ onClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar" style={{gridTemplateColumns: !isMenuOpen && "1fr"}}>
      <div className={`menu${isMenuOpen ? " open" : ""}`}>
        {isMenuOpen && (
          <ul>
            <li onClick={() => onClick("home")}>Home</li>
            <li onClick={() => onClick("projects")}>Projects</li>
            <li onClick={() => onClick("about")}>About</li>
            <li onClick={() => onClick("contact")}>Contact</li>
          </ul>
        )}
      </div>
      <img className={isMenuOpen ? "clicked" : ""} onClick={toggleMenu} src={menu} alt="Menu icon" />
    </div>
  );
};

export default Navbar;
