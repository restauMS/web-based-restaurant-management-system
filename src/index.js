import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Customer from './components/layouts/Customer/CustomerLayout';

// Root Element of the Application
const RootElement = document.getElementById('root');
// Test Component Render
ReactDOM.render(
    <div className="ContainerIndex">
        <Customer/>
    </div>,
    RootElement
);