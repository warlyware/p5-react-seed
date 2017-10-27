import React, { Component } from 'react';
import p5 from 'p5';

import './App.css';
import sketch from './sketch';

class App extends Component {

  componentWillMount() {
    window.p5 = p5;
  }

  render() {
    return (
      <div className="App">
        <div id="sketch"></div>
      </div>
    );
  }
}

export default App;
