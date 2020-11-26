import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Slide from "./components/Slide.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
// import Thumbnail from "./components/Thumbnail.jsx";
import Articles from "./components/Articles.jsx";
import Projects from "./components/Projects.jsx";
import CanvasAlpha from "./components/CanvasAlpha.jsx";

import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);
  // };

  return (
    <BrowserRouter>
      <img src={logo} className="logo-image" alt="Logo Image" />
      <Header></Header>

      <div className="navigation">
        <div className="navigation-sub">
          <Link to="/" className="item">
            Projects
          </Link>{" "}
          |
          <Link to="/articles" className="item">
            Articles
          </Link>{" "}
          |
          <Link to="/about" className="item">
            About
          </Link>
        </div>
      </div>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
      </div>
      <CanvasAlpha> </CanvasAlpha>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </BrowserRouter>
  );
}

export default App;
