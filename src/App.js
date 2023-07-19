import React, { useContext, useEffect, useRef } from "react";
import "./App.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import Container from "./Container";

function App() {
  // Custom Cursor
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const positionElement = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    window.addEventListener("mousemove", positionElement);
    return () => {
      window.removeEventListener("mousemove", positionElement);
    };
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <nav id="navbar">
        <ol className="nav-flex">
          <div className="nav-right">
            <motion.a
              href="#landing"
              smooth={true}
              className="nav-link"
              whileHover={{ scale: 1.1 }}
            >
              Home
            </motion.a>
            <motion.a
              href="#projects"
              smooth={true}
              className="nav-link"
              whileHover={{ scale: 1.1 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              smooth={true}
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

      <motion.div className="App">
        <Container>
          <div name="landing" id="landing">
            <div className="landing-left">
              <h1 className="landing-title">Jason Huang</h1>
              <h2>Fullstack Web Developer</h2>
              <h2>San Francisco</h2>
              <div className="landing-links">
                <a
                  href="https://github.com/JasonCqq"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <AiFillGithub size={40} />
                </a>

                <a
                  href="https://www.linkedin.com/in/jason-huang-38813324b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin Profile"
                >
                  <AiFillLinkedin size={40} />
                </a>
              </div>

              <a href="#projects" className="landing-button">
                View My Projects
              </a>
            </div>

            <div className="landing-right">
              <h1 style={{ color: "#4f3dff" }}>Skills & Technologies</h1>
              <div className="skills-grid">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <SiExpress color="white" size={50} className="skills-express" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div name="projects" id="projects">
            <h1>Projects</h1>

            <div className="projects-grid">
              <div className="projects-item">
                <img src={"https://placehold.co/600x400"}></img>

                <div>
                  <h1>Project #1</h1>
                  <p>
                    Lorem Ipsum. Lorem Ipsum.Lorem Ipsum. Lorem Ipsum. <br></br>{" "}
                    Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. <br></br> Lorem
                    Ipsum.Lorem Ipsum.Lorem Ipsum.
                  </p>
                  <div className="projects-links">
                    <a>LIVE APP</a>
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="projects-item">
                <img src={"https://placehold.co/600x400"}></img>

                <div>
                  {" "}
                  <h1>Project #2</h1>
                  <p>
                    Lorem Ipsum. Lorem Ipsum.Lorem Ipsum. Lorem Ipsum. <br></br>{" "}
                    Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. <br></br> Lorem
                    Ipsum.Lorem Ipsum.Lorem Ipsum.
                  </p>
                  <div className="projects-links">
                    <a>LIVE APP</a>
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="projects-item">
                <img src={"https://placehold.co/600x400"}></img>

                <div>
                  <h1>Project #3</h1>
                  <p>
                    Lorem Ipsum. Lorem Ipsum.Lorem Ipsum. Lorem Ipsum. <br></br>{" "}
                    Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. <br></br> Lorem
                    Ipsum.Lorem Ipsum.Lorem Ipsum.
                  </p>
                  <div className="projects-links">
                    <a>LIVE APP</a>
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="projects-item">
                <img src={"https://placehold.co/600x400"}></img>
                <div>
                  <h1>Project #4</h1>
                  <p>
                    Lorem Ipsum. Lorem Ipsum.Lorem Ipsum. Lorem Ipsum. <br></br>{" "}
                    Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. <br></br> Lorem
                    Ipsum.Lorem Ipsum.Lorem Ipsum.
                  </p>
                  <div className="projects-links">
                    <a>LIVE APP</a>
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div name="contact" id="contact">
            <h1>Contact</h1>
            <form className="contact-form">
              <div className="contact-flex">
                <div className="contact-name">
                  <label htmlFor="name">NAME</label>
                  <input type="text" id="name" name="name" required></input>
                </div>
                <div className="contact-name">
                  <label htmlFor="email">EMAIL</label>
                  <input type="email" id="email" name="email" required></input>
                </div>
              </div>

              <label htmlFor="subject">SUBJECT</label>
              <input type="text" id="subject" name="subject" required></input>

              <label htmlFor="message">MESSAGE</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </Container>
      </motion.div>
    </>

    // </div>
  );
}

export default App;
