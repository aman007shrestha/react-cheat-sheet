import React, { useState, useContext } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)
const PersonContext = React.createContext();
// two components: Provider and Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const addPerson = (item) => {
    setPeople([...people, item]);
  };
  const removePerson = (id) => {
    setPeople((people) => people.filter((person) => person.id !== id));
  };
  return (
    <PersonContext.Provider value={{ removePerson, people, addPerson }}>
      <div style={{ margin: "2.5rem 0" }}>
        <p>
          Context is designed to share data that can be considered “global” for
          a tree of React components, such as the current authenticated user,
          theme, or preferred language.React.createContext() creates context
          which wraps the whole component tree requiring its use via the
          Provider property. The context can be consumer by useContext hook.
        </p>
        <Form />
        <List />
      </div>
    </PersonContext.Provider>
  );
};

const Form = () => {
  const [name, setName] = useState("");
  const { addPerson } = useContext(PersonContext);
  // console.log(addPerson);
  const submitForm = (e) => {
    e.preventDefault();
    if (name) {
      addPerson({
        id: new Date().getTime().toString(),
        name,
      });
      setName("");
    } else {
      throw new Error("Add input");
    }
  };
  return (
    <form action="" className="form">
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={submitForm}>Submit</button>
    </form>
  );
};

const List = () => {
  const { people } = useContext(PersonContext);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ name, id }) => {
  const { removePerson } = useContext(PersonContext);
  console.log(data);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button className="btn" onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};
export default ContextAPI;
