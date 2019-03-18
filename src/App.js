import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Homepage from './Homepage'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Welcome to TuneChain</h1>
        </header>
        <Route
        path='/'
        component={Homepage} />
      </div>
    );
  }
}

export default App;
