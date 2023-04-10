/* eslint-disable */
import React, { Component } from 'react'

export default class Classclick extends Component {

    clickhandler() {
        console.log("clicked")
    } 

  render() {
    return (
      <div>
        <button onClick = {this.clickhandler} >Click me</button>
      </div>
    )
  }
}
