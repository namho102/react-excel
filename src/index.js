import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import './index.css';


import { createStore } from 'redux'
import counter from './reducers/index'
let store = createStore(counter)


const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

console.log(store.getState());

// const render = () => ReactDOM.render(
//
//     <App store={store}/>,
//
//   document.getElementById('root')
// );

render()
store.subscribe(render)
