import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello WOrld");
    console.log(firstName, email);
    if (firstName && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        email,
      };
      setPeople((people) => {
        return [...people, person];
      });

      setFirstName("");
      setEmail("");
      console.log(person);
      console.log(people);
    } else {
      console.log("empty values");
    }
  };
  return (
    <div style={{ margin: "2.5rem 0" }}>
      <h3>1. controlled inputs</h3>
      <p>
        Controlled component: hooking inputs to states. onSubmit can be on form
        or onClick on button, <br /> value of input field is hooked to state
        with onChange handler.
        <br />
        onSubmit prevents events default behavious. Then makes person object
        which is added to people list and people list is mapped. the states are
        reseted to default.
      </p>
      <article>
        <form action="" className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add person
          </button>
        </form>
        {people.map(({ id, firstName, email }) => {
          return (
            <div className="item" key={id}>
              <h3>{firstName}</h3>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default ControlledInputs;
