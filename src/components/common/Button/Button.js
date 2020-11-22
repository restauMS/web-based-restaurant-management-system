import React from 'react';
import './style/Button.scss';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // State stuff goes here
        }
        // Binding the handlerChange to be exclusive only to a particular instance
        this.handlerChange = this.handlerChange.bind(this);
    }

    handlerChange(){
        // Some stuff happens here
    }

    render(){
        return (<button className={this.props.isContrast ? 'Button-Contrast' : 'Button'}>
            {this.props.ButtonText}
        </button>)
    }
}