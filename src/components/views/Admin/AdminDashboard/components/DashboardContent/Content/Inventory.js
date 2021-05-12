import React from 'react';
import '../style/Content.scss';

import Label from '../../../../../../common/Label/Label';
import { ListCard } from '../../../../../../common/Card/Card';

const Inventory = () => {
    return (
        <div className = "InventoryContainer">
            <div className="TopBar">
                <Label
                    LabelContent = "Inventory"
                    isLabelContrast = {true}
                />
                <Label
                    // TODO: Create context to pass through all the Dashboard Content pages
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
        </div>
    );
};

export default Inventory;
