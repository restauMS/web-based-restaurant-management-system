import React from 'react';
import { Spring } from 'react-spring/renderprops';
import './style/CustomerLayout.scss';
import CustomerView from '../../views/Customer/CustomerView';

export default function CustomerLayout(){
    return (
        <Spring
        from = {{opacity: 0, transition: '0.1s ease-in-out'}}
        to = {{opacity: 1}}
        >
            {
                props => 
                <div className="CustomerLayoutContainer" style={{...props}}>
                    <CustomerView/>
                </div>
            }
        </Spring>
    )
}