import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import AddCard from './components/AddCard'
import CardList from './components/CardList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo}  role="presentation" className="App-logo"></img>
          <h2>React Trello-like app</h2>
        </div>
        <div className="App-body">
            <div>
              <CardList />
      
            </div>

        </div>
      </div>
    );
  }

}

export default App;
