import React, { useState, useReducer } from 'react';
import Modal from './Modal';
// import { data } from "../../../data";
// reducer function
import reducer from './reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  // console.log(state.people);
  return (
    <div style={{ margin: '2.5rem 0' }}>
      <p>
        useReducer is usually preferable to useState when you have complex state
        logic that involves multiple sub-values or when the next state depends
        on the previous one. useReducer also lets you optimize performance for
        components that trigger deep updates because you can pass dispatch down
        instead of callbacks. <br />
        const [state, dispatch] = useReducer(reducerFunc, initialArg, init);
        <br /> dispatch function accepts arg type and payload which is accessed
        by reducer function by action object(action.type and action.payload).
        action.type defines type of action to perform while action.payload is
        the new item to be passed which could be via form or id. <br /> function
        reducer takes state and action as argument and must always return
        something.
        <br />
        Dispatch the action type with payload. And deal with the state on
        reducer function.
      </p>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form action='' className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='name'
            id=''
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
      {state.people.map(({ id, name }) => {
        return (
          <div className='item' key={id}>
            <h3>{name}</h3>
            <button
              onClick={() => {
                console.log(id);
                dispatch({ type: 'REMOVE_ITEM', payload: id });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
