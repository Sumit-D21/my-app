 /* eslint-disable no-unused-vars */
 /* eslint-disable */ 
import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import Functionclick from './components/functionClick';
import Classclick from './components/Classclick';
import EventBind from './components/EventBind';
import Parentcomponent from './components/Parentcomponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import RefsDemo from './components/RefsDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RefsDemo/>
        {/* <Form/> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <Parentcomponent /> */}
        {/* <EventBind /> */}
        {/* <Functionclick /><br></br>
        <Classclick /> */}
        {/* <Message />
        <Counter /> */}
        {/* <Greet name = 'vivek' heroname = 'superman'>
          This is childern props
        </Greet>
        <Greet name = 'amit' heroname = 'batman'>
          <button>Click me</button>
        </Greet>
        <Greet name = 'sam' heroname = 'spiderman'></Greet> */}
        {/* <Welcome name = 'vivek' heroname = 'superman'>
          This is class children props 
          </Welcome>
        <Welcome name = 'amit' heroname = 'batman'>
          <button>click!</button>
        </Welcome> */}
      </div>
    );
  }
}

export default App;
