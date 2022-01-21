import React from "react";
import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  // console.log(data);
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    const newNames = people.filter((person) => person.id !== id);
    console.log(newNames);
    setPeople(newNames);
    console.log(id);
  };
  return (
    <>
      <hr />
      <h3>3.useState array example</h3>
      <p>
        map function for listing out elements. filter with id !== person.id to
        remove the selcted item.
      </p>
      {people.map(({ id, name }) => {
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear
      </button>
    </>
  );
};

export default UseStateArray;
