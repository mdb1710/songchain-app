import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Searchpage extends Component{
    

    handleFirstArtistChange = (e) => {
        let nameOne = e.target.value
        console.log(nameOne);
    }
   
   
    handleSecondArtistChange = (e) =>{
        let nameTwo = e.target.value
        console.log(nameTwo);

    }

    handleArtistSearch = (e) => {
     e.preventDefault();
     console.log('Search started');
     return
     
     
    }

    resetArtistSearch(event){
        event.preventDefault();
        console.log('Search has reset');
        
    }
    
    render(){
      

        return(
        <>
            <h2>Start Your Search Here</h2>
            <div className="searchform">
                <form id='artist-search-form' onSubmit={this.handleArtistSearch}>
                   <fieldset>
                   <label name="firstArtist">Artist/Band 1</label>
                   <input type="text" ref="artistOne" onChange={this.handleFirstArtistChange}/>
                   <label name="secondArtist">Artist/Band 2</label>
                   <input type="text"  ref='artistTwo' onChange={this.handleSecondArtistChange}/>
                   </fieldset>
                   <button type="Reset" onClick={() => this.resetArtistSearch()}>Start Over</button>
                   <Link to="/results">
                   <button type="submit">Show Matches</button>
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