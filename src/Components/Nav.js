import React from "react";
import { motion, useScroll } from "framer-motion";
import "../Styling/Nav.scss";

function Nav() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {" "}
      <nav id="navbar">
        <ol className="nav-flex">
          <div className="nav-right">
            <motion.a href="#" className="nav-link" whileHover={{ scale: 1.1 }}>
              Home
            </motion.a>
            <motion.a
              href="#projects"
              className="nav-link"
              whileHover={{ scale: 1.1 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="nav-link"
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </motion.a>
            <motion.a
              href="#"
              className="nav-link"
              id="resume"
              whileHover={{ scale: 1.1 }}
            >
              Resume
            </motion.a>
          </div>
        </ol>
      </nav>
      {/* Progress Bar */}
      <motion.div
        className="progress"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
    </>
  );
}

export default Nav;
