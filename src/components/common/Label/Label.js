import React from 'react';
import './style/Label.scss';

export default function Label(props){
    // The ternary operator returns either Label 
    // or the Label-Contrast on the state value of useContrast
    return (
    <strong>
        <p className={props.isLabelContrast ? 'Label LabelContrast' : 'Label'}> 
        {props.LabelContent} 
        </p>
    </strong>
    );
}