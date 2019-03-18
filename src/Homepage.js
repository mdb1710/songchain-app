import React, { Component } from 'react';

class Homepage extends Component {
    render(){
        return(
            <div className="landing-page">
                <header>
                    <h1>Welcome To Six Degrees of Music</h1>
                </header>
                <div className='intro'>
                   <h2>About Six Degrees..</h2>
                   <p>Did you ever wonder how two artists are connected? 
                Search now to see how two 'unrelated' artists/bands are connected and view playlists with them both</p>
                </div>
                <div className="start">
                   <button type="submit">Start Here</button>
                </div>
                
            </div>
        )

    }
};

export default Homepage;