import React from "react";

const updatedComponent = OriginalCompont => {
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count : 0
            }
          }
      
          incriment=()=>{
              this.setState(previousState=>{
                return {count: previousState.count+1}
              })
          }
        render() {
            return <OriginalCompont
            count = {this.state.count}
            incriment = {this.incriment}
            />
        }
    }
    return NewComponent
}

export default updatedComponent