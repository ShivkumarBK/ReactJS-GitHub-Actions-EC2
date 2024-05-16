import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
      }
      this.clickHandler2 = this.clickHandler2.bind(this)
    }
    clickHandler(){
        this.setState({
            message:"Good Bye!"
        })
    }
    clickHandler2(){
        this.setState({
            message:"Good Bye!"
        })
    }
    clickHandler3=()=>{
        this.setState({
            message:"Good Bye!"
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click1</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click1</button> */}
        <button onClick={this.clickHandler2}>Click1</button>
        {/* <button onClick={this.clickHandler3}>Click1</button> */}
      </div>
    )
  }
}

export default EventBind