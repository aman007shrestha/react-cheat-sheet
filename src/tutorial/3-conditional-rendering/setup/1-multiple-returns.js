import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default User");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (isLoading) {
    return (
      <div style={{ margin: "2.5rem 0" }}>
        <h3>Loading ...</h3>
      </div>
    );
  }
  if (isError) {
    return (
      <div style={{ margin: "2.5rem 0" }}>
        <h3>Error ...</h3>
      </div>
    );
  }
  return (
    <div style={{ margin: "2.5rem 0" }}>
      <h3>1. Multiple returns</h3>
      <p>
        A component must always return something be it loading or error or the
        content.
      </p>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturns;
