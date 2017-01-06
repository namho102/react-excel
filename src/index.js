import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './App';
import './index.css';

import createLogger from 'redux-logger';

import reducer from './reducers'

const logger = createLogger()

let store = createStore(reducer, applyMiddleware(logger))

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)



render()
store.subscribe(render)
