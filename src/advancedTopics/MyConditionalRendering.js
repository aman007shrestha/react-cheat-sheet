import React from "react";
import MultipleReturns from "../tutorial/3-conditional-rendering/setup/1-multiple-returns";
import ShortCircuit from "../tutorial/3-conditional-rendering/setup/2-short-circuit";
import ShowHide from "../tutorial/3-conditional-rendering/setup/3-show-hide";

const MyConditionalRendering = () => {
  return (
    <div>
      <h2>3. Conditional Rendering</h2>
      <hr />
      <MultipleReturns />
      <hr />
      <ShortCircuit />
      <hr />
      <ShowHide />
    </div>
  );
};

export default MyConditionalRendering;
