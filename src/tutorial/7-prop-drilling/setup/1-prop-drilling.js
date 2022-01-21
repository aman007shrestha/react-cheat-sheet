import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople((prev) => {
      return prev.filter((person) => id !== person.id);
    });
  };
  const addItem = (item) => {
    setPeople([...people, item]);
  };
  console.log(people);
  return (
    <div style={{ margin: "2.5rem 0" }}>
      <p>
        passing states from top components to bottom tree. Can be fixed by
        useContext hook or context api. SetFunction passed down to child through
        trees as props.
      </p>
      <MyForm addItem={addItem} />
      <List people={people} removeItem={removeItem} />
    </div>
  );
};

const List = ({ people, removeItem }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <Individual removeItem={removeItem} key={person.id} {...person} />
        );
      })}
    </>
  );
};

const Individual = ({ id, name, removeItem }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removeItem(id)}>remove</button>
    </div>
  );
};
const MyForm = ({ addItem }) => {
  const [name, setName] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    const item = { id: new Date().getTime().toString(), name };
    addItem(item);
    setName("");
    console.log("hey");
  };
  return (
    <div>
      <form action="" className="form">
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn" onClick={submitForm}>
          submit
        </button>
      </form>
    </div>
  );
};

export default PropDrilling;
