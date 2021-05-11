import React from 'react';
import ModalButton from '../Button/Button';
import ModalLabel from '../Label/Label';
import { CheckoutFoodCard } from '../Card/Card';

import './style/Modal.scss';
import Textfield from '../Textfield/Textfield';

export const FoodModal = (props) => {

    return (
        <div className = "ModalContainer">
            <div className="FoodModal">
                <ModalLabel
                    LabelContent = {`${props.FoodName}`}
                    Style = {{fontSize: 'clamp(15px, 25px, 30px)'}}
                />
                <ModalLabel
                    LabelContent = {`Price: ${props.FoodPrice}`}
                    Style = {{fontSize: 'clamp(15px, 25px, 30px)'}}
                />
                <Textfield
                    Type = "number"
                    PlaceholderTitle = {`Quantity`}
                    Name = "FoodQty"
                />
                <div className="ModalButtonGroup">
                    <ModalButton
                            isButtonLink = {false}
                            ButtonContent = "Proceed"
                            isButtonContrast = {true}
                            ButtonFunction = {() => {
                                props.SetCheckoutList([...props.CheckoutList, {Id: props.FoodId, Name: props.FoodName, Price: props.FoodPrice}]);    
                                props.SetFoodModalStatus(false);
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
                        {
                            props.CheckoutList.length > 0 ?
                                props.CheckoutList.map((Items, key) => 
                                <CheckoutFoodCard
                                    key = {key}
                                    CheckoutList = {props.CheckoutList}
                                    SetCheckoutList = {props.SetCheckoutList}
                                    id = {Items.Id}
                                    FoodName = {Items.Name}
                                    FoodQty = {Items.Price}
                                />
                                )
                            :
                                <ModalLabel
                                    LabelContent = "Checkout card is Empty! Start Ordering 👀"
                                    isLabelContrast = {true}
                                    Style = {{
                                        fontSize: 'clamp(20px, 25px, 30px)'
                                    }}
                                />
                        }
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