import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './Store/'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
const initialState = {};

ReactDOM.render(
  <Provider store={ configureStore(initialState) }>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </Router>
  </Provider>,
    document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
