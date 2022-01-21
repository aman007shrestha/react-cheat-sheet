import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ margin: "2.5rem 0" }}>
      <p>
        React is a JavaScript library for building user interfaces. React is
        used to build single-page applications. React allows us to create
        reusable UI components.
      </p>
      <hr />
      <h3>Topics</h3>
      <ul className="links">
        <li>
          <Link to="/useState">1. useState</Link>
        </li>
        <li>
          <Link to="/useEffect">2. useEffect</Link>
        </li>
        <li>
          <Link to="/conditionalRendering">3. Conditional Rendering</Link>
        </li>
        <li>
          <Link to="/form">4. Form</Link>
        </li>
        <li>
          <Link to="/useRef">5. useRef</Link>
        </li>
        <li>
          <Link to="/useReducer">6. useReducer</Link>
        </li>
        <li>
          <Link to="/propDrilling">7. Prop Drilling</Link>
        </li>
        <li>
          <Link to="/useContext">8. useContext</Link>
        </li>
        <li>
          <Link to="/customHook">9. Custom Hooks</Link>
        </li>
        <li>
          <Link to="/propType">10. Prop Types</Link>
        </li>
        <li>
          <Link to="/router">11. Router</Link>
        </li>
        <li>
          <Link to="/useMemo">12. useMemo</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
