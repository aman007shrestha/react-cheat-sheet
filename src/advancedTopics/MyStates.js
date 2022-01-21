import React from "react";
// components for state examples
import ErrorExample from "../tutorial/1-useState/setup/1-error-example";
import UseStateBasics from "../tutorial/1-useState/setup/2-useState-basics";
import UseStateArray from "../tutorial/1-useState/setup/3-useState-array";
import UseStateObject from "../tutorial/1-useState/setup/4-useState-object";
import UseStateCounter from "../tutorial/1-useState/setup/5-useState-counter";

export const MyStates = () => {
  return (
    <>
      <hr />
      <h2>1. useState Hook</h2>
      <ErrorExample />
      <UseStateBasics />
      <UseStateArray />
      <UseStateObject />
      <UseStateCounter />
    </>
  );
};
