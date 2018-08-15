import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';


import Main from './Components/main'
import Nav from './Components/navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div className="App">
            <Main />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
