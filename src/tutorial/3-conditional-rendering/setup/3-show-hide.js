import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ margin: "2.5rem 0" }}>
      <h3>3. show/hide</h3>
      <p>
        Use of cleanup for show/hide component using short circuit evaluation.
      </p>
      <button type="button" className="btn" onClick={() => setShow(!show)}>
        Toggle Show?
      </button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <>
      <h2>{size} px</h2>
    </>
  );
};

export default ShowHide;
