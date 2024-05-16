import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
      this.state = {
         count : 0
      }
    }
    increment(){
        this.setState((prevState,props) => ({
            count : prevState.count+1
        })) //do this if want to wait
        // this.setState({
        //     count : this.state.count+1
        // },()=>console.log("callback",this.state.count)) //do this if want to wait
        console.log(this.state.count)  //this will be printed first
    }
    render() {
        return (
        <div>
            <h1>Count - {this.state.count}</h1>
            <button onClick={()=>this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter