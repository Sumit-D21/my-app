import React, { Component } from 'react'
import updatedComponent from './withComponent'

class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count : 0
    //   }
    // }

    // incriment=()=>{
    //     this.setState(previousState=>{
    //       return {count: previousState.count+1}
    //     })
    // }

  render() {
    const {count, incriment} = this.props
    return (
        <button onClick={incriment}>Clicked {count} times</button>
    )
  }
}

export default updatedComponent(ClickCounter)