import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           username: '',
           comments: '',
           select: 'none'
        }
    } 

    changeUsernameHandler=(event) => {
        this.setState({
            username : event.target.value
        })
    }

    changeComments=(event) => {
        this.setState({
            comments : event.target.value
        })
    }

    changeOptions=(event) => {
        this.setState({
            select : event.target.value
        })
    }

    submithandler=(event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.select}`)
        event.preventDefault()
    }

  render() {
    return (
        <form onSubmit={this.submithandler}>
            <div>
                <label>UserName</label>
                <input type="text" value={this.state.username} onChange={this.changeUsernameHandler}></input>
            </div>
            <div>
                <label>comments</label>
                <textarea value={this.state.comments} onChange={this.changeComments}></textarea>
            </div>
            <div>
                <label>Select your choice</label>
                <select value={this.state.select} onChange={this.changeOptions}>
                    <option value ='none'>None</option>
                    <option value ='react'>React</option>
                    <option value ='angular'>Angular</option>
                    <option value ='vue'>Vue</option>
                </select>
            </div>
            <button value='submit'>Submit</button>
        </form>
    )
  }
}

export default Form