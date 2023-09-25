import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'; // importing the combined reducer

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);