import React from "react";
import UseEffectBasics from "../tutorial/2-useEffect/setup/1-useEffect-basics";
import UseEffectCleanup from "../tutorial/2-useEffect/setup/2-useEffect-cleanup";
import UseEffectFetchData from "../tutorial/2-useEffect/setup/3-useEffect-fetch-data";
const MyUseEffect = () => {
  return (
    <>
      <h2>2. useEffect Hook</h2>
      <hr />
      <UseEffectBasics />
      <hr />
      <UseEffectCleanup />
      <hr />
      <UseEffectFetchData />
    </>
  );
};

export default MyUseEffect;
