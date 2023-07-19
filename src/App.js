import { useEffect } from "react";
import "./App.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

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
    <div className="App">
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

      <div id="cursor"></div>

      <header id="landing">
        <div className="landing-left">
          <h1 className="landing-title">Jason Huang</h1>
          <h2>San Francisco</h2>
          <h2>Fullstack Web Developer</h2>
          <div className="landing-links">
            <AiFillGithub size={40} />
            <AiFillLinkedin size={40} />
            <HiOutlineMail size={40} />
          </div>
        </div>

        <div className="landing-right">
          <h1>Skills & Technologies</h1>
          <div className="skills-grid">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          </div>
        </div>
      </header>

      <div id="projects">
        <p> Projects </p>
      </div>

      <div id="contact">
        <p>Contact / Resume</p>
      </div>
    </div>
  );
}

export default App;
