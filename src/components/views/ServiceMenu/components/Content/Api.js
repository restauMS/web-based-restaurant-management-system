import React from 'react';
import './style/Content.scss';
import Label from '../../../../common/Label/Label';

const Api = () => {
    return (
        <div className = "ApiContainer">
            <Label
                LabelContent = "API"
                isLabelContrast = {true}
                Style = {{textAlign: 'start'}}
            />
            <Label
                LabelContent = "This page is only available for the development/prototyping stage, this page or module will not be included in deployment."
                Style = {{textAlign: 'start', color: '#E56B6F', fontSize: 'clamp(10px,20px,30px)'}}
            />
            <Label
                LabelContent = {`What is an API? An API is the interface that connects the font-end and the back-end, the back-end stores the data the API serves that data and the front-end presents the data.`}
                isLabelContrast = {true}
                Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)'}}
            />
            <Label
                LabelContent = "Available Endpoints"
                isLabelContrast = {true}
                Style = {{textAlign: 'start', fontSize: 'clamp(15px,30px,45px)'}}
            />
        </div>
    )
}

export default Api;
