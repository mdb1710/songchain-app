import React, { Component } from 'react';

class Login extends Component {

handleUserChange = (e) => {
    console.log(e.target.value);
}

handlePassChange = (e) => {
    console.log(e.target.value);
}

    render () {
        return (
            <>
              <div className="login-form">
                <h3>Sign In Here</h3>
                <form>
                    <fieldset>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" onChange={this.handleUserChange}/>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" onChange={this.handlePassChange}/>
                        <button type='submit'>Submit</button>
                    </fieldset>
                </form>
              </div>
            </>
        )
    }
}

export default Login;