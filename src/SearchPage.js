import React, { Component } from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';

import SearchContext from './context/SearchContext';


class Searchpage extends Component{
    
    static contextType = SearchContext;

    

    handleFirstArtistChange = (e) => {
       
        console.log(e.target.value);
        this.context.updateArtist(e.target.value);
    };
   
   
    handleMoodChange = (e) =>{
       
        
        console.log(e.target.value);
        this.context.updateMood(e.target.value);
    };

    handleGenreChange = (e) =>{
       
        
        console.log(e.target.value);
        this.context.updateGenre(e.target.value);
    };

    

    handleArtistSearch = (e) => {
     e.preventDefault();   
     const { artist, mood, genre } = this.state;
     console.log('Search started');
     console.log('artist', artist);
     console.log('mood', mood);
     console.log('genre', genre);
     this.context.displaySearchResults(mood);
     
    };

    // resetArtistSearch(event){
    //     event.preventDefault();
    //     console.log('Search has reset');
        
    // }
    
    render() {
        const { artist, mood, genre } = this.context;
        console.log(artist, mood, genre);

        return(
        <>
            <h2>Fill Out At Least One of the Search Area</h2>
            <div className="searchform">
                <form id='artist-search-form' onSubmit={this.handleArtistSearch}>
                   <fieldset>
                   <label name="Artist">Name of Artist</label>
                   <input type="text" name="artistOne"  onChange={this.handleFirstArtistChange}/>
                   <br />
                   <label name="Mood">Your Mood</label>
                   <input type="text"  name='mood-search' onChange={this.handleMoodChange}/>
                   <br />
                   <label name="Genre">Your Genre</label>
                   <input type="text"  name='genre-search' onChange={this.handleGenreChange}/>
                   <br />
                   </fieldset>
                   <button type="Reset" >Start Over</button>
                   <Link to="/results">
                   <button type="submit" >Show Matches</button>
                   </Link>
                </form>
            </div>
            <div className="search-results">
             
            </div>
            
        </>
        )
    
  }
};

export default Searchpage;