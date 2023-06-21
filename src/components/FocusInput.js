import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    componentDidMount(){
        console.log(this.inputRef)
    }


    clickHandeler = () => {
        this.inputRef.current.focusInput()
    }

  render() {
    return (
      <div>
        <Input ref={this.inputRef} />
        <button onClick={this.clickHandeler} >Focus Input</button>
      </div>
    )
  }
}

export default FocusInput