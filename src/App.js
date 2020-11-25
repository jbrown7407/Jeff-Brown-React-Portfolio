import logo from "./logo.svg";
import "./App.css";

// import Hello from "./components/sayHello.jsx";
// import Component1 from "./components/component1.jsx";
import React, { useState } from "react";
import Slide from "./components/Slide.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Articles from "./components/Articles.jsx";
import Projects from "./components/Projects.jsx";
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
      <h1 className={isRed ? "red" : "green"}>
        {/* <-- add correlating CSS --> */}
      </h1>
      <Header></Header>
      <About />
      <Articles />
      <Projects />
      {/* <Hello></Hello>
      <Component1></Component1> */}
      <Slide name="1" message="this is a Slide"></Slide>x
      <Slide name="2"></Slide>x<Slide name="3"></Slide>
      <button onClick={increment}> Increment </button>
      <h1> {count} </h1>
    </div>
  );
}

export default App;
