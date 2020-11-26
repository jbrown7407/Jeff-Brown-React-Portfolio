import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "../logo.svg";

function Header() {
  //   const sayHello = () => {
  //     alert("Hello");
  //   };

  return (
    // <div className="App">
    //   <button onClick={sayHello}>Hello Component</button>
    // </div>
    <div className="Header">
      <h1> Jeffrey Brown - React Developer </h1>{" "}
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
    </div>
  );
}

export default Header;
