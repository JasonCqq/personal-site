import React from "react";
import ReactDOM from "react-dom/client";
import "./Styling/index.scss";
import App from "./Components/App";
import Footer from "./Components/Footer";
import Three from "./Components/Three";
import Nav from "./Components/Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Three />
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>
);
