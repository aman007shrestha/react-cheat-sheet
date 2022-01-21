import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs2 = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    age: "",
    firstName: "",
    email: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson((person) => {
      return { ...person, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    if (person.age && person.firstName && person.email) {
      console.log("all oka");
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople((people) => [...people, newPerson]);
      setPerson({ age: "", firstName: "", email: "" });
    }
    console.log(person);
  };
  return (
    <div style={{ margin: "2.5rem 0" }}>
      <h3>2. Multiple inputs with same handler</h3>
      <p>
        a common handleChange function. <br /> name = e.target.name <br />
        value = e.target.value <br />
        setPerson(&#123;...person, [name]: value&#125;) on handleChange
        <br />
        this person is added to peopleList . setPeople((people) => [...people,
        newPerson])
      </p>
      <article>
        <form action="" className="form">
          <div className="form-control">
            <label htmlFor="firstName"> Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email"> Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add person
          </button>
        </form>
      </article>
      {people.map(({ id, firstName, email, age }) => {
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
            <p>{age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ControlledInputs2;
