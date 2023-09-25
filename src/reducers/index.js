import { combineReducers } from "redux";

// reducers/index.js
const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };
  
  const tasks = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, action.payload];
      case 'REMOVE_TASK':
        return state.filter((task) => task.id !== action.payload);
      default:
        return state;
    }
  };  

  export default combineReducers({
    counter,
    tasks,
  });