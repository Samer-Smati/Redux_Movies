import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'; 
import {movieReducer} from './redux/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [
  thunk,
];
const store = createStore(movieReducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any)
  ));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
