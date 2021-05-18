import React from 'react';
import { Spring } from 'react-spring/renderprops';

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
                <div className="InventoryContainer" style={{...props}}>
                    <div className="TopBar">
                        <Label
                            LabelContent = "Inventory"
                            isLabelContrast = {true}
                            Style = {{color: '#E56B6F'}}
                        />
                        <Label
                            LabelContent = {`Hello, ${localStorage.getItem("Username")}`}
                            Style = {{fontSize: 'clamp(20px, 30px, 40px)', color: '#E56B6F'}}
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
                                isButtonContrast = {false}
                                ButtonContent = 'Add Item'
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
}

export default Inventory;
