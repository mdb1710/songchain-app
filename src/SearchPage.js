import React, { Component } from 'react';

class Searchpage extends Component{
    handleFirstArtistChange = (e) => {
        let nameOne = e.target.value
        console.log(nameOne);
    }
   
   
    handleSecondArtistChange = (e) =>{
        let nameTwo = e.target.value
        console.log(nameTwo);

    }

    handleArtistSearch(event){
     event.preventDefault();
     console.log('Search started');
     
    }
    
    render(){
      

        return(
        <>
            <h2>Start Your Search Here</h2>
              <div className="searchform">
                <form onSubmit={this.handleArtistSearch}>
                   <fieldset>
                   <label name="firstArtist">Artist/Band 1</label>
                   <input type="text" onChange={this.handleFirstArtistChange}/>
                   <label name="secondArtist">Artist/Band 2</label>
                   <input type="text" onChange={this.handleSecondArtistChange}/>
                   </fieldset>
                   <button type="Reset">Start Over</button>
                   <button type="submit">Show Matches</button>
                </form>
            </div>
            
        </>
        )
    }
};

export default Searchpage;