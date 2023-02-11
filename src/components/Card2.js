import React, {Component} from "react";

class Card2 extends Component{
    render(){
        return(
            //<h3>Hello From Card2 (Class Component)</h3>
            <h2>{this.props.name}</h2>
        )
    }
}

export default Card2;