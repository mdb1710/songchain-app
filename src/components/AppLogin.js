import React, { Component } from 'react';
import SearchContext from '../context/SearchContext';

class Login extends Component {

static contextType = SearchContext;

handleUserChange = (e) => {
    console.log(e.target.value);
    this.context.setUsername(e.target.value);
   
}

handlePassChange = (e) => {
    console.log(e.target.value);
    this.context.setPassword(e.target.value);
}

handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    const { username, password } = this.context;
    const { history } = this.props;
    // let username = this.refs.username.value;
    // let password = this.refs.password.value;
    console.log(username, password);
    history.push('/search');
    // this.context.onLoginSuccess()
}


    

    render () {
        return (
            <>
              <div className="login-form">
                <h3>Sign In Here</h3>
                <form onSubmit={(event) => this.handleLoginSubmit(event)}>
                    <fieldset>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" ref="username" onChange={this.handleUserChange}/>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" ref="password" onChange={this.handlePassChange}/>
                        <button type='submit'>Submit</button>
                    </fieldset>
                </form>
              </div>
            </>
        )
    }
}

export default Login;