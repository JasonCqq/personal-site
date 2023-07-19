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
      <div id="cursor"></div>

      <header className="landing">
        <h1 className="landing-title">Jason Huang</h1>
        <div className="landing-links">
          <AiFillGithub size={40} />
          <AiFillLinkedin size={40} />
          <HiOutlineMail size={40} />
        </div>

        <nav>
          <ol>
            <a>About</a>
            <a>Skills</a>
            <a>Projects</a>
            <a>Contact</a>
          </ol>
        </nav>
      </header>

      <div id="about">
        <p>
          About me Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. <br></br>
          Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.
        </p>
      </div>

      <div id="skills">
        <p>
          Skills/Tech Typescript, Typescript, Typescript, Typescript,
          Typescript, Typescript,{" "}
        </p>
      </div>

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
