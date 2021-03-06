import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Homepage from './Homepage'
import Searchpage from './SearchPage';
import Header from './components/Header';
import Results from './Results';
import Footer from './components/Footer';
import SearchContext from './context/SearchContext';
import { BASE_API_URL } from './config';



class App extends Component {

  state = {
    artist: "",
    mood: "",
    genre: "",
    playlists: [],
    error: null
  }

  displaySearchResults = (m) => {
    console.log('Search ended');
    console.log(m);
    fetch(`${BASE_API_URL}/search?mood=${m}`, {
      
      'content-type': 'application-json',
     
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    
    });
  }

  updateArtist = (name) => {
    console.log(name);
    this.setState({
      artist: name
    })
  }

  updateMood = (name) => {
    console.log(name);
    this.setState({
      mood: name
    })
  }

  updateGenre = (name) => {
    console.log(name);
    this.setState({
      genre: name
    })
  }

  render() {
    const contextValue = {
      artist: this.state.artist,
      mood: this.state.mood,
      genre: this.state.genre,
      playlists: this.state.playlists,
      updateArtist: this.updateArtist,
      updateMood: this.updateMood,
      updateGenre: this.updateGenre,
      displaySearchResults: this.displaySearchResults
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
