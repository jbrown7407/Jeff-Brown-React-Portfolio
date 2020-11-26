import React from "react";
import Thumbnail from "./Thumbnail.jsx"; // Import the Thumbnail component
import "../App.css";
import Slide from "./Slide.jsx";

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div className="Projects">
      <h1>Projects</h1>
      <Thumbnail link="" image="" title="" category="" />
      <Slide></Slide>
    </div>
  );
}

export default Projects;
