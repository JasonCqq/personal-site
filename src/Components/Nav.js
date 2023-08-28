import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "../Styling/Nav.scss";

function Nav() {
  const { scrollYProgress } = useScroll();

  const [resume, setResume] = useState(false);
  const resumeHandle = () => {
    setResume(!resume);
  };

  useEffect(() => {
    if (!resume) {
      document.body.style.overflowY = "auto";
    } else if (resume) {
      document.body.style.overflowY = "hidden";
    }
  }, [resume]);

  return (
    <>
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
            <button id="resume" onClick={() => resumeHandle()}>
              Resume
            </button>
          </div>
        </ol>
      </nav>

      {/* Resume Pop up */}
      {resume && (
        <div id="resumePop">
          <motion.div
            className="resumeWindow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="resumeFunctions">
              <button className="resumeClose" onClick={() => resumeHandle()}>
                EXIT
              </button>

              <a
                className="resumeDownload resumeClose"
                href="https://docs.google.com/document/d/e/2PACX-1vTo0oEx09zJo9-S7obHrBx7yvxTHsBbfbWIrNBdzn_HPCbIyuyLqlSQS4GJtCoRF_PuZTOoOnYPJQu_/pub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume on Google Docs"
              >
                Open on Docs
              </a>
            </div>

            <iframe
              id="resumeEmbed"
              title="Resume"
              width="100%"
              height="700px"
              src="https://docs.google.com/document/d/e/2PACX-1vTo0oEx09zJo9-S7obHrBx7yvxTHsBbfbWIrNBdzn_HPCbIyuyLqlSQS4GJtCoRF_PuZTOoOnYPJQu_/pub?embedded=true"
            ></iframe>
          </motion.div>
        </div>
      )}

      {/* Progress Bar */}
      <motion.div
        className="progress"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
    </>
  );
}

export default Nav;
