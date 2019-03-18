import React, { Component } from 'react';

class Results extends Component {
    render(){
        return(
        <>    
        <div className="search-results">
               <h3>Here are your search results</h3>
            <div className="result-list">
               <ul>
                   <li>Playlist 1</li>
                   <li>Playlist 2</li>
                   <li>Playlist 3</li>
               </ul>
               <p>See more playlists with artist here</p>
            </div>
        </div>
        </>
        )
    }
}

export default Results