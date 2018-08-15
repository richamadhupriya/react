import React, { Component } from 'react';
import './App.css';

import Mall from './Components/mall'

export const AppContext = React.createContext()

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      theatreType: 'PVR',
      screens: ['A-1', 'A-2', 'A-3'],
      timings: ['9 PM', '1 PM', '5 PM']
    }
  }
  render() {
    return (
      <div className="App">
        <AppContext.Provider value={this.state}>
          <Mall />
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
