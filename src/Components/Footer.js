import React from "react";
import "../Styling/Footer.scss";

function Footer() {
  return (
    <footer>
      Made with ❤️ by Jason – Code available on{" "}
      <a
        href="https://github.com/JasonCqq/personal-site"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Site Source Code"
        style={{ marginLeft: "5px", textDecoration: "underline" }}
      >
        GitHub
      </a>
    </footer>
  );
}

export default Footer;
