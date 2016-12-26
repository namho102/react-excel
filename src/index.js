import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import { createStore } from 'redux'
import counter from './reducers/index'
let store = createStore(counter)

const render = () => ReactDOM.render(

    <App store={store}/>,

  document.getElementById('root')
);

render()
store.subscribe(render)
