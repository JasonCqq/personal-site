import React from "react";
import "./Nav.scss";
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav id="navbar">
      <ol className="nav-flex">
        <div className="nav-right">
          <a href="#landing" className="nav-link">
            Home
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a href="#" className="nav-link" id="resume">
            Resume
          </a>
        </div>
      </ol>
    </nav>
  );
}

export default Nav;
