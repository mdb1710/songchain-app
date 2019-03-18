import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Homepage from './Homepage'
import Searchpage from './SearchPage';
import Results from './Results';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Welcome to TuneChain</h1>
        </header>
        <Route
        exact path='/'
        component={Homepage} />
        <Route
        path='/search' 
        component={Searchpage}/>
        <Route 
        path='/results'
        component={Results}/>
      </div>
    );
  }
}

export default App;
