 /* eslint-disable no-unused-vars */
 /* eslint-disable */ 
import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name = 'vivek' heroname = 'superman'>
          This is childern props
        </Greet>
        <Greet name = 'amit' heroname = 'batman'>
          <button>Click me</button>
        </Greet>
        <Greet name = 'sam' heroname = 'spiderman'></Greet> */}
        <Welcome name = 'vivek' heroname = 'superman'>
          This is class children props 
          </Welcome>
        <Welcome name = 'amit' heroname = 'batman'>
          <button>click!</button>
        </Welcome>
      </div>
    );
  }
}

export default App;
