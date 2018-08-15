import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
        <div className='classApp'>
          {this.props.isLoggedIn ? 
                 (
				  <figure>
				    <img src='/img/User.png' alt='This is user' />
                    <figcaption> User </figcaption>
                 </figure>
				)
				:
                (
				 <figure>
                    <img src='/img/Guest.jpeg' alt='This is guest' />
                    <figcaption> Guest </figcaption>
                </figure>
				)}
			</div>
		)
	}

}
export default App;
