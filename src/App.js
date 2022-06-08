import React from 'react';

// components
import { MyStates } from './advancedTopics/MyStates';
import MyUseEffect from './advancedTopics/MyUseEffect';
import MyConditionalRendering from './advancedTopics/MyConditionalRendering';
import { MyForms } from './advancedTopics/MyForms';
import { MyUseRef } from './advancedTopics/MyUseRef';
import MyUseReducer from './advancedTopics/MyUseReducer';
import MyPropDrilling from './advancedTopics/MyPropDrilling';
import MyContextAPI from './advancedTopics/MyContextAPI';
import MyCustomHooks from './advancedTopics/MyCustomHooks';
import MyPropType from './advancedTopics/MyPropTypes';
import MyRouter from './advancedTopics/MyRouter';
import MyUseMemo from './advancedTopics/MyUseMemo';
// Routing
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//main
import Home from './Home';
import Error from './Error';
function App() {
  // const home = "https://aman007shrestha.github.io/react-cheat-sheet/";
  return (
    <div className='container'>
      <Router>
        <Link to='/react-cheat-sheet/'>
          <h2>React</h2>
        </Link>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/react-cheat-sheet/'>
            <Home />
          </Route>

          <Route exact path='/useState'>
            <MyStates />
          </Route>
          <Route exact path='/useEffect'>
            <MyUseEffect />
          </Route>

          <Route exact path='/conditionalRendering'>
            <MyConditionalRendering />
          </Route>

          <Route exact path='/form'>
            <MyForms />
          </Route>

          <Route exact path='/useRef'>
            <MyUseRef />
          </Route>

          <Route exact path='/useReducer'>
            <MyUseReducer />
          </Route>

          <Route exact path='/propDrilling'>
            <MyPropDrilling />
          </Route>

          <Route exact path='/useContext'>
            <MyContextAPI />
          </Route>

          <Route exact path='/customHook'>
            <MyCustomHooks />
          </Route>

          <Route exact path='/propType'>
            <MyPropType />
          </Route>

          <Route exact path='/router'>
            <MyRouter />
          </Route>

          <Route exact path='/useMemo'>
            <MyUseMemo />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
