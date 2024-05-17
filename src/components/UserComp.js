import React ,{Component} from 'react';

class UserComp extends Component{

    constructor(props){
        super(props);
        this.state = {
            text: 'My user compo'
        }
    }

    handleClick = () => {
        this.setState({text: 'MY JIT'})
    }

    render(){
return(
    <div>My user Compo
<p>{this.state.text}</p>
        <button onClick={this.handleClick}> click here</button>
    </div>
)

    }

}

export default UserComp;