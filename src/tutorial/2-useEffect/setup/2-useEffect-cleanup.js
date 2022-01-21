import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("useeffect rerender");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup here");
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log("2. initial rerender");
  return (
    <div style={{ margin: "2.5rem 0" }}>
      <h3>2. UseEffect Cleanup</h3>
      <p>
        Note: we have an option of cleanup function in useEffect for preventing
        memory leakage. window.addEventListener object is created each time size
        is rerendered. which needs to be cleanup in useEffect return statement.
        cleanUp cleans the previous resources for useEffect before new resource
        is allocated. cleanUp function is essentialy return statement.
      </p>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </div>
  );
};

export default UseEffectCleanup;
