import React from "react";
import "./App.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import Container from "./Container";
import project1 from "./project1.png";
import project3 from "./project2.png";

//Minify JS

function App() {
  return (
    <>
      <nav id="navbar">
        <ol className="nav-flex">
          <div className="nav-right">
            <motion.a
              href="#landing"
              className="nav-link"
              whileHover={{ scale: 1.1 }}
            >
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

      <div className="App">
        {/* Landing Section */}
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
                <img
                  alt="HTML5"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                />
                <img
                  alt="SASS"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                />
                <img
                  alt="Javascript"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                />
                <img
                  alt="Typescript"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                />
                <img
                  alt="React"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                />
                <SiExpress
                  alt="Express"
                  color="white"
                  size={50}
                  className="skills-express"
                />
                <img
                  alt="NodeJS"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                />
                <img
                  alt="MongoDB"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                />
                <img
                  alt="Firebase"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
                />
                <img
                  alt="PostgreSQL"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                />
                <img
                  alt="Jest"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                />
                <img
                  alt="Git"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                />
              </div>
            </div>
          </div>
        </Container>

        {/* Projects Section */}
        <Container>
          <div name="projects" id="projects">
            <h1>Projects</h1>
            <p>
              * Site API data takes time to load due to memory saving, please
              keep refreshing
            </p>

            <div className="projects-grid">
              <div className="projects-item">
                <img alt="Project 1" src={project1}></img>

                <div>
                  <h1 className="projects-title">minBlog</h1>
                  <p className="projects-tech">
                    Tech: MongoDB, Express, NodeJS, React, Typescript
                  </p>
                  <p className="projects-description">
                    minBlog is a reading platform, and a blog sharing platform
                    with short (~1500chars) blogs With features like secure
                    authentication encrypted with bcrypt Secured with
                    passport/cookie-session along with mobile responsiveness
                  </p>
                  <div className="projects-links">
                    <a
                      href="https://minblog21715.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE APP
                    </a>
                    <a
                      href="https://github.com/JasonCqq/minBlog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="projects-item">
                <img alt="Project 2" src={"https://placehold.co/700x400"}></img>

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
                <img alt="Project 3" src={project3}></img>

                <div>
                  <h1 className="projects-title">Jwitter</h1>
                  <p className="projects-tech">
                    Tech: Firebase, React, Typescript
                  </p>
                  <p className="projects-description">
                    Jwitter is a Twitter clone that replicates the core features
                    of the popular social media platform. This project was
                    developed from scratch without relying on tutorials to
                    practice full stack skills.
                  </p>
                  <div className="projects-links">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://chipper-gnome-4de1e9.netlify.app/#/"
                    >
                      LIVE APP
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/JasonCqq/Jwitter"
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="projects-item">
                <img alt="Project 4" src={"https://placehold.co/700x400"}></img>
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

        {/* Contact Section */}
        <Container>
          <div name="contact" id="contact">
            <h1>Contact</h1>
            <form
              action="https://formsubmit.co/jason.cq.huang@gmail.com"
              method="POST"
              className="contact-form"
            >
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
      </div>
    </>

    // </div>
  );
}

export default App;
