import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Homepage from './Homepage'
import Searchpage from './SearchPage';
import Header from './components/Header';
import Results from './Results';
import Footer from './components/Footer';
import SearchContext from './context/SearchContext';




class App extends Component {

  state = {
    artist: "",
    mood: "",
    genre: "",
    error: null
  }

  displaySearchResults = (a, b, c,) => {
    const { artist, mood, genre } = this.state;
    console.log('artist', artist);
    console.log('mood', mood);
    console.log('genre', genre);
  }

  render() {
    const contextValue = {
      artist: this.state.artist,
      mood: this.state.mood,
      genre: this.state.genre,
      displaySearchResults: this.state.displaySearchResults
    }
    return (
      <div className="App">
        <Header />
        <main>
        <SearchContext.Provider value={contextValue}>  
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
        </SearchContext.Provider>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
