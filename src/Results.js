import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchContext from './context/SearchContext';

class Results extends Component {
  
    static contextType = SearchContext
    
    render(){
        const { artist, mood, genre} = this.context;
        return(
        <>    
         
            <h3>Here are your {mood} & {genre} search results for {artist} </h3>
            <div className="result-list">
               <ul>
                   <li>Playlist 1</li>
                   <li>Playlist 2</li>
                   <li>Playlist 3</li>
               </ul>
               <p>See more playlists with artist here</p>
            </div>
            <div className="new-search">
              <Link to='/search'>
                <button type='submit'>Search Again</button>
              </Link>
            </div>
            
            
        </>
        )
    }
}

export default Results