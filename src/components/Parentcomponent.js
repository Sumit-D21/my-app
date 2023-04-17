/* eslint-disable */
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class Parentcomponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Parent'
      }
      this.clickhandeler = this.clickhandeler.bind(this)
    }

    clickhandeler(childName) {
        alert(`Hello ${this.state.name} from ${childName}`)
    }

  render() {
    return (
      <div>
        <ChildComponent greethandeler = {this.clickhandeler} />
      </div>
    )
  }
}
