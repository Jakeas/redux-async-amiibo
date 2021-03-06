import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { reducer } from './store/reducers/index'

const store = createStore(reducer, applyMiddleware(thunk)) 

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);