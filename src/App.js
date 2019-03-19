import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Homepage from './Homepage'
import Searchpage from './SearchPage';
import Header from './components/Header';
import Results from './Results';
import Footer from './components/Footer';




class App extends Component {

  constructor(props){
    super(props)
    this.state = {
     artistOne: "",
     artistTwo: ""
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route
        exact path='/'
        component={Homepage} />
        <Route
        path='/search' 
        component={Searchpage}/>
        <Route 
        path='/results'
        component={Results}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
