/* eslint-disable */
import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick = {() => props.greethandeler('child')}>Greet Parents</button>
    </div>
  )
}

export default ChildComponent