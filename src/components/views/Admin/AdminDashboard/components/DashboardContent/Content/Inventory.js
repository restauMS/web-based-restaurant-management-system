import React from 'react';
import { Spring } from 'react-spring/renderprops';
import '../style/Content.scss';
import Label from '../../../../../../common/Label/Label';
import { ListCard } from '../../../../../../common/Card/Card';
import Button from '../../../../../../common/Button/Button';

const Inventory = () => {
    return (
        <Spring
            from = {{opacity: 0, transition: '0.1s ease-in-out'}}
            to = {{opacity: 1}}
        >
            {
                props => 
                <div className = "InventoryContainer" style = {{...props}}>
                    <div className="TopBar">
                        <Label
                            LabelContent = "Inventory"
                            isLabelContrast = {true}
                        />
                        <Label
                            LabelContent = {`Hello, ${localStorage.getItem("Username")}`}
                            Style = {{fontSize: 'clamp(20px, 30px, 40px)'}}
                            isLabelContrast = {true}
                        />
                    </div>
                    <div className="InventoryListContainer">
                        <div className="InventoryList">
                            {/* {
                                WhateverListGoesHere.map((Items, key) => <ListCard key = {key} CardContent = {Items}/>)
                            } */}
                        </div>
                    </div>
                    <div className="ButtonContainer">
                        <Button
                            isButtonLink = {false}
                            ButtonContent = 'Add New Item'
                            isButtonContrast= {true}
                            ButtonFunction = {() => {
                                // Add new item in the database
                                // Will trigger a modal
                            }}
                        />
                    </div>
                </div>
        }
        </Spring>
    );
};

export default Inventory;
