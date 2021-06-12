import React , { useState } from 'react';
import { Spring } from 'react-spring/renderprops';

import Label from '../../../../../../common/Label/Label';
import { ListCard } from '../../../../../../common/Card/Card';
import Button from '../../../../../../common/Button/Button';
import { NewItemModal as AddItem, ItemModal as ViewItem, ModifyItemModal as EditItem } from '../../../../../../common/Modals/Modal';

const WhateverListGoesHere = [
    {
        Name: 'Chicken Burger', 
        Price: 75, 
        Quantity: 13
    },
    {
        Name: 'Spaghetti', 
        Price: 50, 
        Quantity: 3 
    },
    {
        Name: 'Sandwich', 
        Price: 25, 
        Quantity: 5
    },
    {
        Name: 'Roasted Nuts', 
        Price: 12, 
        Quantity: 2
    }
]

const Inventory = () => {

    const [ AddItemModalStatus, SetAddItemModalStatus ] = useState(false);
    const [ InventoryItemModalStatus, SetInventoryItemModalStatus ] = useState(false);
    const [ EditItemModalStatus, SetEditItemModalStatus] = useState(false);
    const [ ItemFocus, SetItemFocus] = useState({});

    return (
        <Spring
        from = {{opacity: 0, transition: '0.1s ease-in-out'}}
        to = {{opacity: 1}}
        >
            {
                props => 
                <div className="InventoryContainer" style={{...props}}>

{
                        AddItemModalStatus ?
                            <AddItem
                                SetModalStatus = {SetAddItemModalStatus}
                                isModalContrast = {true}
                            />
                        :
                            null
                    }
                    {
                        InventoryItemModalStatus ? 
                        <ViewItem
                            FoodId = { ItemFocus.Id }
                            FoodName = { ItemFocus.Name }
                            FoodPrice = { ItemFocus.Price }
                            ItemQuantity = { ItemFocus.Quantity }
                            SetModalStatus = { SetInventoryItemModalStatus }
                            SetEditStatus = { SetEditItemModalStatus }
                            isModalContrast = {true}
                        />
                        :
                            null
                    }
                    {
                        EditItemModalStatus ?
                            <EditItem 
                                isModalContrast = {true}
                                ItemName = {ItemFocus.Name}
                                InitialQuantity = {ItemFocus.Quantity}
                                SetEditStatus = { SetEditItemModalStatus }
                            />
                        :
                            null
                    }

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
                            {
                                WhateverListGoesHere.map((Items, key) => 
                                <ListCard 
                                    key = {key} 
                                    CardContent = {Items.Name}
                                    CardFunction = {() => {
                                        SetInventoryItemModalStatus(true);
                                        SetItemFocus({Id: key, Name: Items.Name, Price: Items.Price, Quantity: Items.Quantity});
                                    }}
                                />
                                )
                            }
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
