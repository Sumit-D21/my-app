import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    componentDidMount(){
     this.inputRef.current.focus()
     console.log(this.inputRef)
    }

    clickHandeler = () =>{
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <button onClick={this.clickHandeler}>Click here</button>
      </div>
    )
  }
}

export default RefsDemo