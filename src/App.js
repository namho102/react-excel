import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter'
import { increment } from './actions/actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">Hello world</p>

        <div>
            <Counter value={this.props.value} onIncrement={this.props.onIncrement.bind(this, 10)}></Counter>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    value: state
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    onIncrement: (value) => dispatch(increment(value))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
