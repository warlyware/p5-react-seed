import React, { Component } from 'react';

import './App.css';
import Sketch from './sketch/Sketch';

class App extends Component {

  componentDidMount() {
    // new p5(sketch);
  }

  render() {
    return (
      <div className="App">
        <Sketch />
      </div>
    );
  }
}

export default App;
