import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter'

import { increment } from './actions/actions'


class App extends Component {

  render() {
    const store = this.props.store
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">Hello world</p>

        <div>
          <Counter value={store.getState()} onIncrement={() => store.dispatch(increment(6))}></Counter>
        </div>
      </div>
    );
  }

}

export default App;
