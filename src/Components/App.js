import React from "react";
import "../Styling/App.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Container from "./Container";

function App() {
  return (
    <>
      <main className="App">
        {/* Landing Section */}
        <Container>
          <section name="landing" id="landing">
            <div className="landing-left">
              <h1 className="landing-title">Jason Huang</h1>
              <h2>Fullstack Web Developer</h2>
              <div className="landing-links">
                <a
                  href="https://github.com/JasonCqq"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <AiFillGithub size={40} className="landing-socials" />
                </a>

                <a
                  href="https://www.linkedin.com/in/jason-huang-38813324b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin Profile"
                >
                  <AiFillLinkedin size={40} className="landing-socials" />
                </a>
              </div>

              <a href="#projects" className="landing-button">
                View My Projects
              </a>
            </div>

            <div className="landing-right">
              <h1 style={{ color: "white" }}>Skills & Technologies</h1>
              <div className="skills-grid">
                <div className="skills-item">
                  <img
                    alt="HTML5"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  />
                  <p>HTML</p>
                </div>

                <div className="skills-item">
                  <img
                    alt="SASS"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  />
                  <p>SASS</p>
                </div>
                <div className="skills-item">
                  <img
                    alt="Javascript"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  />
                  <p>JAVASCRIPT</p>
                </div>
                <div className="skills-item">
                  <img
                    alt="Typescript"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  />
                  <p>TYPESCRIPT</p>
                </div>
                <div className="skills-item">
                  <img
                    alt="React"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  />
                  <p>REACT</p>
                </div>
                <div className="skills-item">
                  <img
                    alt="Express"
                    src="https://devicon-website.vercel.app/api/express/original.svg?color=%23FFFFFF"
                  ></img>

                  <p>EXPRESS</p>
                </div>
                <div className="skills-item">
                  <img
                    alt="NodeJS"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  />
                  <p>NODE.JS</p>
                </div>

                <div className="skills-item">
                  <img
                    alt="PostgreSQL"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                  />
                  <p>POSTGRESQL</p>
                </div>

                <div className="skills-item">
                  <img
                    alt="MongoDB"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                  />
                  <p>MONGODB</p>
                </div>
                <div className="skills-item">
                  <img
                    alt="Firebase"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
                  />
                  <p>FIREBASE</p>
                </div>
                <div className="skills-item">
                  <img
                    alt="Ubuntu"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg"
                  />
                  <p>UBUNTU</p>
                  
                </div>
                <div className="skills-item">
                  <img
                    alt="Jest"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                  />
                  <p>JEST</p>
                </div>
                <div className="skills-item">
                  <img
                    alt="Git"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  />
                  <p>GIT</p>
                </div>
              </div>
            </div>
          </section>
        </Container>

        {/* Projects Section */}
        <Container>
          <section name="projects" id="projects">
            <h1 className="projects-heading">Projects</h1>
            <p style={{ fontSize: "0.8rem" }}>
              * Site API data takes time to load due to memory saving, please
              keep refreshing
            </p>

            <div className="projects-grid">
              <div className="projects-item">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/J5s9PAta4V0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              ></iframe>

                <div>
                  <h1 className="projects-title">CodePlanner</h1>
                  <p className="projects-tech">
                    <i className="devicon-postgresql-plain-wordmark colored"></i>
                    <i className="devicon-jest-plain colored"></i>
                    <i className="devicon-express-original"></i>
                    <i className="devicon-react-original-wordmark colored"></i>
                    <i className="devicon-nodejs-plain colored"></i>
                    <i className="devicon-typescript-plain colored"></i>
                  </p>
                  <p className="projects-description">
                    minBlog is a reading platform, and a blog sharing platform
                    with short (~1500chars) blogs. With features like REST API,
                    secure authentication with bcrypt, passport/sessions along
                    with blog searching, filtering, and pagination
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
                      GITHUB
                    </a>
                  </div>
                </div>
              </div>
              <div className="projects-item">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/J5s9PAta4V0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              ></iframe>

                <div>
                  <h1 className="projects-title">minBlog</h1>
                  <p className="projects-tech">
                    <i className="devicon-mongodb-plain-wordmark colored"></i>
                    <i className="devicon-express-original"></i>
                    <i className="devicon-nodejs-plain colored"></i>
                    <i className="devicon-react-original-wordmark colored"></i>
                    <i className="devicon-typescript-plain colored"></i>
                  </p>
                  <p className="projects-description">
                    minBlog is a reading platform, and a blog sharing platform
                    with short (~1500chars) blogs. With features like REST API,
                    secure authentication with bcrypt, passport/sessions along
                    with blog searching, filtering, and pagination
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
                      GITHUB
                    </a>
                  </div>
                </div>
              </div>
              <div className="projects-item">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/J5s9PAta4V0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              ></iframe>

                <div>
                  <h1 className="projects-title">Jwitter</h1>
                  <p className="projects-tech">
                    <i className="devicon-react-original-wordmark colored"></i>
                    <i className="devicon-typescript-plain colored"></i>
                    <i className="devicon-firebase-plain-wordmark colored"></i>
                  </p>
                  <p className="projects-description">
                    Jwitter is a Twitter clone that replicates the core features
                    of Twitter such as realtime tweets, follow system, and
                    likes. This project was developed from scratch without
                    relying on tutorials to practice full stack skills.
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
                      GITHUB
                    </a>
                  </div>
                </div>
              </div>

              <div className="projects-item">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/J5s9PAta4V0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              ></iframe>

                <div>
                  <h1 className="projects-title">WimmelBilder</h1>
                  <p className="projects-tech">
                    <i className="devicon-react-original-wordmark colored"></i>
                    <i className="devicon-typescript-plain colored"></i>
                    <i className="devicon-firebase-plain-wordmark colored"></i>
                  </p>
                  <p className="projects-description">
                  A where's waldo based web game built with HTML/CSS, React,
                    Typescript, Firebase, and deployed from Netlify. Site
                    Features - Authentication / Leaderboard / Image Magnifier /
                    Clean/Responsive UI / Scalable Positions
                  </p>
                  <div className="projects-links">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://main--nimble-cendol-ef155b.netlify.app/#/"
                    >
                      LIVE APP
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/JasonCqq/Wimmelbilder"
                    >
                      GITHUB
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>

        {/* Contact Section */}
        <Container>
          <section name="contact" id="contact">
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
          </section>
        </Container>
      </main>
    </>
  );
}

export default App;
