import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const [text, setText] = useState("");
  const [text] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <div style={{ margin: '2.5rem 0' }}>
      <h3>2. short circuit</h3>
      <p>
        Short-circuit evaluation, minimal evaluation, or McCarthy evaluation
        (after John McCarthy) is the semantics of some Boolean operators in some
        programming languages in which the second argument is executed or
        evaluated only if the first argument does not suffice to determine the
        value of the expression. <br /> const firstValue = text || 'hello
        world'; => return text if both true
        <br />
        const secondValue = text && 'hello world'; => return hello world if both
        true <br /> <b>Ternary Operator</b> bool? return if bool == True: return
        if bool == false
      </p>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      {/* {if(){console.log('hello world')}} */}
      <h1>{text || 'John Doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h3>There is no error</h3>
        </div>
      )}
      {/* {!text && <h1>hello world</h1>} */}
    </div>
  );
};

export default ShortCircuit;
