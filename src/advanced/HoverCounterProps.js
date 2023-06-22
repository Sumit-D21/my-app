import React, { Component } from 'react'

class HoverCounterProps extends Component {
  render() {
    const {count,increment} = this.props
    return (
      <h1 onMouseOver={increment}>
        Hovered {count} times
      </h1>
    )
  }
}

export default HoverCounterProps