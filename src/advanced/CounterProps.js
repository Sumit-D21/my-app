import React, { Component } from 'react'

export class CounterProps extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          count : 0
        }
      }
  
      increment=()=>{
          this.setState(previousState => {
               return {count : previousState.count+1}
              }
      )}
  
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.increment)}
      </div>
    )
  }
}

export default CounterProps