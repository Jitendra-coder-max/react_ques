import React, { Component } from 'react'

 class Increment extends Component {
constructor(){
    super()
    this.state = {

        count:0
    }
}



shouldComponentUpdate(){
    console.log("SHOULD")
    if(this.state.count>5 && this.state.count<10){
    return true;
    }
}

  render() {
    return (
      <div>Increment<h1>{this.state.count}</h1>
        <button onClick={ () => this.setState({count: this.state.count+1})}>Click here</button>
      </div>
    )
  }
}

export default Increment