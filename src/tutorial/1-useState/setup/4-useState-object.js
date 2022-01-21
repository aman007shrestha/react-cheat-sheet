import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "aman",
    age: "22",
    message: "Hello Aman",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "Hello Peter" });
  };
  return (
    <>
      <hr />
      <h3>4. useState object example</h3>
      <p>
        to change specific attribute of object setObject as &#123;
        ...object_name, attributeToBeChanged: "new value"&#125;
      </p>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
      <button type="button" className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
