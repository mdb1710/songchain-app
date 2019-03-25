import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchContext from './context/SearchContext';

class Results extends Component {
  
    static contextType = SearchContext;

    // updatePlaylists = () => {
    //     const { mood, genre, playlists } = this.context;
    //     console.log(playlists);
    //     this.context.displaySearchResults(mood, genre);
    // }
    
    render(){
        const { artist, mood, genre, playlists } = this.context;
        const test = this.context.displaySearchResults(mood, genre);
        console.log(playlists);
        return(
        <>    
          {/* <SearchContext.Consumer playlist={playlists}> */}
            <h3>Here are your {mood} & {genre} search results for {artist} </h3>
            <div className="result-list">
               <ul>
                   {playlists.map((note, index) =>{
                       return (
                           <li key={index}>{note.name}</li>
                       )
                   })}
               </ul>
               <p>See more playlists with artist here</p>
            </div>
            <div className="new-search">
              <Link to='/search'>
                <button type='submit'>Search Again</button>
              </Link>
            </div>
            
         {/* </SearchContext.Consumer>    */}
        </>
        )
    }
}

export default Results