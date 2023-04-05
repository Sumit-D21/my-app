import React, { Component } from "react";

class Welcome extends Component {
    render(){
    console.log(this.props)
       return(
        <div>
            <h2>Welcome {this.props.name} aka {this.props.heroname} </h2>
            <h3>{this.props.children}</h3>
        </div>
       )
    }
}

export default Welcome