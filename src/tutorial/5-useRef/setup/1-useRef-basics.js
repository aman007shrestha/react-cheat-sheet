import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <div style={{ margin: "2.5rem 0" }}>
      <p>
        ref attribute in input field references to useRef initialized with null
        and can be accessed with current as refContainer.current.value.
        Uncontrolled form behaviour.{" "}
      </p>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" name="" id="" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UseRefBasics;
