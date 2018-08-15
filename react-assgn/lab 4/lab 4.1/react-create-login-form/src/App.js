import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
           isLoggedIn: false,
           username: '',
           password: ''
    }
  }

    login = (event) =>
    {
       event.preventDefault()
       this.setState({
       isLoggedIn: true
    })
  }

  logout = (event) => {
    event.preventDefault()
    this.setState({
        isLoggedIn: false,
        username: '',
        password: ''
    })
  }

  changeUsername = (event) => {
    this.setState({
         username: event.target.value
    })
  }

  changePassword = (event) => {
    this.setState({
        password: event.target.value
    })
  }

  render() {
    return (
      <div className='App'>
        <h2>Login Page</h2>
            {
                !this.state.isLoggedIn ? (
                <div className='LoggedOut'>
                     <h4>Sign In</h4>
                     <form onSubmit={this.login}>
                     <input type='text' placeholder='Enter your Username' value={this.state.username} onChange={this.changeUsername} required/> <br />
                     <input type='password' placeholder='Enter Password' value={this.state.password} onChange={this.changePassword}  required /> <br />
              <input type='submit' value='Login' />
            </form>
          </div>
        ) : (
            <div className="LoggedIn">
              Welcome <strong>{this.state.username}</strong> <a href='#' onClick={this.logout} >Log Out</a>
            </div>
          )}
      </div>
    );
  }
}

export default App;
