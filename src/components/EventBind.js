/* eslint-disable */
import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
      }

    //   this.clickhandeler = this.clickhandeler.bind(this)
    }

    // clickhandeler() {
    //     this.setState({
    //         message : "Morning"
    //     })
    // }

    clickhandeler=() => {
        this.setState({
            message : "Morning"
        })
    }


  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick = {this.clickhandeler.bind(this)} >click</button> */}
        {/* <button onClick = {() => this.clickhandeler()} >click</button> */}
        <button onClick = {this.clickhandeler} >click</button>
      </div>
    )
  }
}

export default EventBind