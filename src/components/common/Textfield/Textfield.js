import React from 'react';
import './style/Textfield.scss';
export default class Textfield extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // State stuff goes here
        }
    }
    render(){
        return (
            <input type="text" className="Textfield"/>
        )
    }
}