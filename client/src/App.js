import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">"TINDAWG"</h1>
        </header>
        <p className="App-intro">
          Never underestimate the greed of the other dog owner.
        </p>
        <button onClick="myFunction()">Like</button>
        <button onClick="myFunction()">Dislike</button>
      </div>
    );
  }
}

export default App;
