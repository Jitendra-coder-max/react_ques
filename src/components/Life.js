import React,{Component}  from 'react'

class Life extends Component {

    constructor(){
        super()
        console.log('constructor')
        this.state ={
            name: 'Jittu'
        }
    }


    // componentDidMount(){
    //     console.log('did mount')
    // }

    componentDidUpdate(){
        console.log('did update')
    }

    render(){

        console.log('render')
       
        return(
            <div> Life of
                <h1> Component Did Mount {this.state.name}</h1>
                <button onClick={() => this.setState({name: 'Roshan'})}> update name</button>
            </div>

        )
    }
}

export default Life;