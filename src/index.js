import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import './index.css';

import trello from './reducers'

let store = createStore(trello)

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)

render()
store.subscribe(render)
