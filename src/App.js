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
      <Header></Header>

      <header className="App-header">
        <div className="App">
          <Route exact path="/" component={Projects} />
          <Route path="/articles" component={Articles} />
          <Route path="/about" component={About} />
        </div>
        Jeffrey Brown - <code>Developer </code>
        <p></p>
        <a
          className="App-link"
          href="email me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </header>
      <CanvasAlpha> </CanvasAlpha>
    </BrowserRouter>
  );
}

export default App;
