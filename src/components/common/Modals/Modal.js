import React from 'react';
import ModalButton from '../Button/Button';
import ModalLabel from '../Label/Label';
import { CheckoutFoodCard } from '../Card/Card';

import './style/Modal.scss';
import Textfield from '../Textfield/Textfield';

const TestData = [
    {
        Name: 'Fried Chicken',
        Qty: '3',
    },
    {
        Name: 'Burger',
        Qty: '20',
    },
    {
        Name: 'Spaghetti',
        Qty: '2',
    },
    {
        Name: 'Lasagna',
        Qty: '7',
    },
    {
        Name: 'Lasagna',
        Qty: '7',
    },
    {
        Name: 'Lasagna',
        Qty: '7',
    },
    {
        Name: 'Lasagna',
        Qty: '7',
    },
    {
        Name: 'Lasagna',
        Qty: '7',
    },
]

export const FoodModal = (props) => {
    return (
        <div className = "ModalContainer">
            <div className="FoodModal">
                <ModalLabel
                    // LabelContent = {props.FoodName}
                    LabelContent = {"Test"}
                />
                <Textfield
                    Type = "number"
                    PlaceholderTitle = {`Enter ${props.FoodName} Quantity`}
                    Name = "FoodQty"
                />
                <div className="ModalButtonGroup">
                    <ModalButton
                            isButtonLink = {false}
                            ButtonContent = "Proceed"
                            isButtonContrast = {true}
                            ButtonFunction = {() => {
                                alert('Are you sure?');
                            }}
                        />
                    <ModalButton
                        isButtonLink = {false}
                        isButtonContrast = {true}
                        ButtonContent = "Cancel"
                        ButtonFunction = {() => {
                            props.SetFoodModalStatus(false);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export const ItemModal = () => {
    return (
        <div className = "ModalContainer">
            <div className="ItemModal">

            </div>
        </div>
    );
}

export const ModifyItemModal = () => {
    return (
        <div className = "ModalContainer">
            <div className="ModifyItemModal">

            </div>
        </div>
    );
}

export const OrderTransactionModal = () => {
    return (
        <div className = "ModalContainer">
            <div className="TransactionModal">

            </div>
        </div>
    );
}

export const CheckoutModal = (props) => {
    return (
        <div className = "ModalContainer">
            <div className="CheckoutModal">
                <ModalLabel
                    LabelContent = "Checkout"
                    Style = {{
                        fontSize: 'clamp(20px, 25px, 30px)'
                    }}
                />
                <div className="CheckoutContainer">
                    <div className="ModalList">
                        {TestData.map((Items, key) => 
                            <CheckoutFoodCard
                                key = {key}
                                FoodName = {Items.Name}
                                FoodQty = {Items.Price}
                            />
                        )}
                    </div>
                    <div className="ModalButtonGroup">
                        <ModalButton
                            isButtonLink = {false}
                            ButtonContent = "Proceed"
                            isButtonContrast = {true}
                            ButtonFunction = {() => {
                                alert('Are you sure?');
                            }}
                        />
                        <ModalButton
                            isButtonLink = {false}
                            isButtonContrast = {true}
                            ButtonContent = "Cancel"
                            ButtonFunction = {() => {
                                props.SetModalStatus(false);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}