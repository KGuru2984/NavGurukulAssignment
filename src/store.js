// src/store.js
import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(
  counterReducer,
  // Add Redux DevTools extension support
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
