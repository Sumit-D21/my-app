import axios from 'axios'
import React, { Component } from 'react'

class PostsList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : []
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(recieved =>{
            console.log(recieved)
            this.setState({posts : recieved.data})
        })
        .catch(errors =>{
            console.log(errors)
        })
    }

  render() {
    const {posts} = this.state
    return (
        {
            posts.map(posts => (<div key={posts.id}>{posts.label}</div>)
        }
    )
  }
}

export default PostsList