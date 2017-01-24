import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// Reducer
function counter(state = { name: 'Count', count: 0, renaming: false }, action) {
  const count = state.count,
        name = state.name,
        renaming = state.renaming;

  switch (action.type) {
    case 'increase':
      return { name: name, count: count + 1, renaming: renaming };
    case 'reset':
      return { name: name, count: 0, renaming: renaming };
    case 'renameStart':
      return { name: name, count: count, renaming: true };
    case 'renameEnd':
      return { name: action.name, count: count, renaming: false};
    default:
      return state;
  }
};

// Store
const store = createStore(counter);

export default store;
