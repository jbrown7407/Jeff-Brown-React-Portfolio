import logo from "./logo.svg";
import "./App.css";

// import Hello from "./components/sayHello.jsx";

import React, { useState } from "react";
import Slide from "./components/Slide.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Articles from "./components/Articles.jsx";
import Projects from "./components/Projects.jsx";
import Component1 from "./components/component1.jsx";
// import Hello from "./components/SayHello.jsx";

function App() {
  const [isRed, setRed] = useState(false);
  //[bhconst name, function]
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div>
      <div className="navigation">
        <img src={logo} className="logo" alt="Logo Image" />
        <div className="navigation">
          <div className="navigation-sub">
            <a href="" className="item">
              Projects
            </a>{" "}
            |
            <a href="" className="item">
              Articles
            </a>{" "}
            |
            <a href="" className="item">
              About
            </a>
          </div>
        </div>
      </div>
      <Header></Header>
      <Projects></Projects>
      <Articles></Articles>
      <About></About>
      <Slide name="1" message="this is a Slide"></Slide>x
      <Slide name="2"></Slide>x<Slide name="3"></Slide>
      <button onClick={increment}> Increment </button>
      <h1> {count} </h1>
    </div>
  );
}

export default App;
