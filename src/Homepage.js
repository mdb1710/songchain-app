import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Login from './components/AppLogin';


class Homepage extends Component {
    
    handleStartSearch = () => {
        console.log('Search has started');
    }

    render(){
        return(
            <div className="landing-page">
                <header>
                    <h2>Find the connections between your favorite artists</h2>
                </header>
                <div className='intro'>
                   <h3>About this app...</h3>
                   <p>Did you ever wonder how two artists are connected? 
                Search now to see how two 'unrelated' artists/bands are connected and view playlists with them both</p>
               
                </div>
                <div className="start">
                   <Link to='/search'>
                     <button type="submit" onClick={() => this.handleStartSearch()}>Start Here</button>
                   </Link>
                   
                </div>
                
            </div>
        )

    }
};

export default Homepage;