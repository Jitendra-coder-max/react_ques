import React ,{Component} from 'react';

class Count extends Component{

    constructor(){

        super();
        this.state ={
            data: 0
        }
    }

    increment = () =>{
             this.setState({data: this.state.data+1})
    }

    decrement = () => {
        this.setState({data: this.state.data-1})
    }
    render(){

        return(
            <div>Count 
                <h1>{this.state.data}</h1>
                <button onClick={() =>this.increment()}>increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default Count;