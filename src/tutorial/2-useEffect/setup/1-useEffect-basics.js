import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("useEffect triggered");
    if (state > 0) {
      document.title = `New Message(${state})`;
    }
  }, [state]);
  console.log("render Component");
  return (
    <div style={{ margin: "2.5rem 0" }}>
      <h3>1. useEffect Basics</h3>
      <p>
        Notes: useEffect are triggered after component rerender as a sideEffect
        or after the change in dependancy array.
      </p>
      <h1>{state}</h1>
      <button
        type="button"
        className="btn"
        onClick={() => setState((prev) => prev + 1)}
      >
        click me
      </button>
    </div>
  );
};

export default UseEffectBasics;
