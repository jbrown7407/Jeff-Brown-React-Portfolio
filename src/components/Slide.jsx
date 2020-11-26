import React from "react";

function Slide({ name, message, likes }) {
  return (
    <div className="Slide">
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>{likes}</h3>
    </div>
  );
}
export default Slide;
