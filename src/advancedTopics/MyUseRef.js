import React from "react";
import UseRefBasics from "../tutorial/5-useRef/setup/1-useRef-basics";

export const MyUseRef = () => {
  return (
    <div>
      <h2>5. Use Ref</h2>
      <p>
        The useRef is a hook that allows to directly create a reference to the
        DOM element in the functional component. Syntax: const refContainer =
        useRef(initialValue); The useRef returns a mutable ref object. <br />{" "}
        doesnt trigger rerender. Use case if to Target DOM nodes/ elements.
      </p>
      <hr />
      <UseRefBasics />
    </div>
  );
};
