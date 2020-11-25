import React from "react";

function Component1() {
  const sayHello = () => {
    alert("Hello");
  };

  return (
    <div className="App">
      <button onClick={Component1}>Component1</button>
    </div>
  );
}

export default Component1;
