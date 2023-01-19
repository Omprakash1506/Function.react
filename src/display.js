import React, { Component } from 'react'


export default class Display extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    
  render() {
    return (

      <div>
      <h1>Counter app</h1>
      <h2>{this.state.count}</h2>
      <button onClick={()=> this.setState({count: this.state.count+1})}>increment</button>
      <button onClick={()=> this.setState({count: this.state.count-1})}>decrement</button>
      


      </div>
    ) 
  }
}


