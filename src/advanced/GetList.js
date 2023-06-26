import axios from 'axios'
import React, { Component } from 'react'

class GetList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [] 
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            this.setState({posts : res.data})
        })
        .catch(err =>{
          console.log(err)
        })
    }

  render() {
    const {posts} = this.state
    return (
      <div>
        list 
      {
        posts.map(post => (<div key={post.id}>{post.title}</div>))
      }
      </div>
    )
  }
}

export default GetList