// Dependency Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Component Styling Imports
import './index.scss';

// Component Imports
import App from './components/views/Master/Master';

// Root Element of the Application
const RootElement = document.getElementById('root');

// ! Currently testing the Router for all services to be rendered
ReactDOM.render(
    <div className="ContainerIndex">
        <App/>
    </div>,
    RootElement
);