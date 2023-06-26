import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userId : '',
       title : '',
       body : ''
    }
  }

  onChangeHandeler = (event) =>{
    this.setState({[event.target.name] : event.target.value})
  }

  onSubmitHandeler = (event) =>{
    event.preventDefault()
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(res=>{
      console.log(res.data)
    }).catch(errors=>{
      console.log(errors)
    })
    
  }

  render() {
    const {userId, title, body} = this.state
    return (
      <div>
        <form onSubmit = {this.onSubmitHandeler}>
          <div>
          <input 
            type = 'text' 
            name = 'userId' 
            value = {userId} 
            onChange={this.onChangeHandeler}
          />
          </div>
          <div>
          <input type = 'text' name = 'title' value = {title} onChange={this.onChangeHandeler}></input>
          </div>
          <div>
          <input type = 'text' name = 'body' value = {body} onChange={this.onChangeHandeler}></input>
          </div>
          <button type = 'submit' >Submit</button>
        </form>
      </div>
    )
  }
}

export default PostList