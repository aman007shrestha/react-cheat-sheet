import React, { useState } from "react";

const UseStateBasics = () => {
  const [state, setState] = useState("Random Title");
  const handleClick = () => {
    if (state === "Random Title") {
      setState("Hello World");
    } else {
      setState("Random Title");
    }
  };
  return (
    <>
      <hr />
      <h3>2. Use of useState</h3>
      <p>
        Change in state triggers rerender. [state, setState] = useState. state
        being the value and setState being the function used to change this
        value
      </p>
      <h2>{state}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
