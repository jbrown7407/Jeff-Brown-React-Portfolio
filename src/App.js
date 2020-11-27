import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Slide from "./components/Slide.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
// import Thumbnail from "./components/Thumbnail.jsx";
import Tech from "./components/Tech.jsx";
import Projects from "./components/Projects.jsx";
import CanvasAlpha from "./components/CanvasAlpha.jsx";
import Home from "./components/Home.jsx";
import Sidebar from "./components/Sidebar.jsx";

import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);
  // };

  return (
    <BrowserRouter>
      <div className="App" id="outer-container">
        <div id="page-wrap"></div>

        <Sidebar></Sidebar>
        <Header></Header>

        <header className="App-header">
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/tech" component={Tech} />
            <Route path="/about" component={About} />
          </div>
          {/* Jeffrey Brown - <code>Developer </code> */}
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
      </div>
    </BrowserRouter>
  );
}

export default App;
