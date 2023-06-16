import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }

  render() {
    // 4th approach 
        return (
            (this.state.isLoggedIn && <div>Hello user</div>) || (!this.state.isLoggedIn && <div>Hello guest</div>)
            ) 
    // 3rd approach
        // return this.state.isLoggedIn ? 
        // <div>Hello User</div>:
        // <div>Please login</div>
    // 2nd approach
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Hello user</div>
        // }else{
        //     message = <div>Please login</div>
        // }

        // return <div>{message}</div>
    // 1st approach
        // if(this.state.isLoggedIn){
        //   return <div>Hello User</div>
        // }
        // else{
        //     return <div>Please log in</div>
        // }
  }
}

export default UserGreeting