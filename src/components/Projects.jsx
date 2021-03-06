import React from "react";
import Thumbnail from "./Thumbnail.jsx"; // Import the Thumbnail component
import "../App.css";
import Slide from "./Slide.jsx";

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div className="Projects">
      <h1>Projects</h1>
      <Thumbnail
        link="http://codenoodle.netlify.app/"
        image=""
        title="Thumbnail"
        category=""
      />
      <Slide></Slide>
      <ul>
        <li>
          <a href="http://codenoodle.netlify.app/">CodeNoodle</a>
        </li>
        <li>
          <a href="news.asp">P2</a>
        </li>
        <li>
          <a href="contact.asp">P3</a>
        </li>
        <li>
          <a href="about.asp">P4</a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
