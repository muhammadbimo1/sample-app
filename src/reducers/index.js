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
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          isDone: false, // Setel isDone ke false secara default saat menambahkan tugas
        },
      ];
    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.payload);
    case 'MARK_TASK_AS_DONE':
      return state.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    default:
      return state;
  }
};


  export default combineReducers({
    counter,
    tasks,
  });