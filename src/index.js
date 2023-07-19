import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import Footer from "./Footer";
import Nav from "./Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>
);
