import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexCounter = () => {
    setTimeout(() => setValue((prev) => prev + 1), 2000);
  };
  return (
    <>
      <hr />
      <section style={{ margin: "4rem 0" }}>
        <h3>5.useState counter example</h3>
        <p>use of setValue((prev) = prev +- 1) for counter value</p>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => setValue((prev) => prev - 1)}
        >
          decrease
        </button>
        <button type="button" className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setValue((prev) => prev + 1)}
        >
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex Counter</h2>
        <p>SetTimout func for later increase action</p>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={complexCounter}>
          Increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
