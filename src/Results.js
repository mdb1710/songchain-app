import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchContext from './context/SearchContext';

class Results extends Component {
  
    static contextType = SearchContext;

    

    componentDidMount(){
        const { mood, genre } = this.context
        this.context.displaySearchResults(mood, genre);
    }

   
    
    render(){
        const { artist, mood, genre, playlists } = this.context;
        
        
        return(
        <>    
          
            <h3>Here are your {mood} & {genre} search results for {artist} </h3>
            <div className="result-list">
                <ul>
                   {playlists.map((note, index) =>{
                       return (
                           <li key={index}>
                             <div className="result-name" id={index}>
                              <p>Playlist Name: {note.name}</p>
                             </div>
                             <div className="result-image">
                              <p>{note.images[0].url}</p>
                             </div>
                             <div className="result-tracks">
                              <p>Tracks: {note.tracks.total}</p>
                             </div>
                             <div className="result-url">
                             <p>Start Listening Here</p>
                             </div>
                           </li>  
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
            
         
        </>
        )
    }
}

export default Results