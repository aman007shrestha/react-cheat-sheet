import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "New Title ";
    console.log(title);
  };
  return (
    <React.Fragment>
      <hr />
      <h3>1. Error example. Rerendering requires change in state</h3>
      <p>
        directly changing the value cause change in variable but not rerendering
        the change.
      </p>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        ChangeTitle
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
