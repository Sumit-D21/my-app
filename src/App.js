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
import FocusInput from './components/FocusInput';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './advanced/ClickCounter';
import HoverCounter from './advanced/HoverCounter';
import ClickCounterProps from './advanced/ClickCounterProps';
import HoverCounterProps from './advanced/HoverCounterProps';
import CounterProps from './advanced/CounterProps';
import ComponentA from './advanced/ComponentA';
import { UserProvider } from './advanced/UserComponent';
import PostsList from './http/PostsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsList/>
        {/* <UserProvider value ='SAM'> 
        <ComponentA/>
        </UserProvider> */}
        {/* <CounterProps render={(count,increment) => (<ClickCounterProps count={count} increment={increment} />)} /> */}
        {/* <CounterProps render={(count,increment) => (<HoverCounterProps count={count} increment={increment} />)} /> */}
        {/* <ClickCounterProps/> */}
        {/* <HoverCounterProps/> */}
        {/* <ClickCounter/> */}
        {/* <HoverCounter/> */}
        {/* <PortalDemo/> */}
        {/* <FocusInput/> */}
        {/* <RefsDemo/> */}
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
