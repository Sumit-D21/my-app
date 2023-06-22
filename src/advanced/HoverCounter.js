import React, { Component } from 'react'
import updatedComponent from './withComponent'

class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count : 0
    //     }
    //   }
  
    //   incriment=()=>{
    //       this.setState(previousState=>{
    //         return {count: previousState.count+1}
    //       })
    //   }
  
  render() {
    const {count, incriment} = this.props
    return (
      <h1 onMouseOver={incriment}> Moved {count} times</h1>
    )
  }
}

export default updatedComponent(HoverCounter)