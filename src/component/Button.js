import React, {Component} from 'react';

class Button extends Component{

// the idea here is that i need the symbol to determine the action .. that's y I pass it in to the function . 
// birds flying high . . you know how i feel .. sun in the sky .. u know how i feel .. '
// `column-${this.props.cols}`} .. to bind each button with the col size it takes. . . . . . . . .
     render()
    {
        return (
<div className={`coulmn-${this.props.cols}`}>
    <button className="calc-button" onClick={() => this.props.action(this.props.symbol)}>{this.props.symbol}</button>
</div>


        );
    }





}

export default Button ; 