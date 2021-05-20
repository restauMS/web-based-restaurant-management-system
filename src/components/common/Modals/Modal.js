import React from 'react';
import ModalButton from '../Button/Button';
import ModalLabel from '../Label/Label';
import { CheckoutFoodCard, ListCard } from '../Card/Card';

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
};

export const ItemModal = (props) => {
    return (
        <div className = "ModalContainer">
            <div className="ItemModal">
                <ModalLabel
                    LabelContent = {`Item Id: ${props.FoodId}`}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <ModalLabel
                    LabelContent = {`Item Name: ${props.FoodName}`}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <ModalLabel
                    LabelContent = {`Price: ${props.FoodPrice}`}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <ModalLabel
                    LabelContent = {`Qty: ${props.ItemQuantity}`}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <div className="ModalButtonGroup">
                    <ModalButton
                            isButtonLink = {false}
                            ButtonContent = "Delete Item"
                            isButtonContrast = {true}
                            ButtonFunction = {() => {
                                // Deleted function
                            }}
                        />
                    <ModalButton
                        isButtonLink = {false}
                        isButtonContrast = {true}
                        ButtonContent = "Edit Item"
                        ButtonFunction = {() => {
                            // Triggers Edit modal
                        }}
                    />
                    <ModalButton
                        isButtonLink = {false}
                        isButtonContrast = {true}
                        ButtonContent = "Cancel"
                        ButtonFunction = {() => {
                            // Exits the modal
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export const ModifyItemModal = (props) => {
    return (
        <div className = "ModalContainer">
            <div className="ModifyItemModal">
                <ModalLabel
                    LabelContent = {`Item: ${props.ItemName}`}
                    isLabelContrast = {false}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <Textfield
                    Type = "text"
                    PlaceholderTitle = {`New Name`}
                    Name = "UpdateName"
                />
                    {
                        props.IsInventoryEdit ? 
                            <Textfield
                                Type = "text"
                                PlaceholderTitle = {`New Quantity`}
                                Name = "UpdateQuantity"
                            />
                        :
                            null
    
                    }
                <Textfield
                    Type = "text"
                    PlaceholderTitle = {`New Quantity`}
                    Name = "UpdateQuantity"
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
                                // Cancel function
                            }}
                        />
                    </div>
            </div>
        </div>
    );
};

export const OrderTransactionModal = (props) => {
    return (
        <div className = "ModalContainer">
            <div className="TransactionModal">
                <ModalLabel
                    LabelContent = {`Transaction Id: ${props.TransactionId}`}
                    isLabelContrast = {false}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <ModalLabel
                    LabelContent = {`Customer Name: ${props.TransactionId}`}
                    isLabelContrast = {false}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <div className="OrderedItemsContainer">
                    {
                        props.TransactionList.map(Items => (
                            <ListCard
                                CardContent = {Items}
                            />
                        ))
                    }
                </div>
                <div className="ModalButtonGroup">
                        <ModalButton
                            isButtonLink = {false}
                            ButtonContent = "End Session"
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
                                // Cancel function
                            }}
                        />
                </div>
            </div>
        </div>
    );
};

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
};

export const NewItemModal = (props) => {
    return (
        <div className="ModalContainer">
            <div className="NewItemModal">
                <Textfield
                        Type = "text"
                        PlaceholderTitle = {`New Item Name`}
                        Name = "ItemName"
                />
                <Textfield
                        Type = "number"
                        PlaceholderTitle = {`Initial Quantity`}
                        Name = "InitQty"
                />
                <Textfield
                        Type = "number"
                        PlaceholderTitle = {`Price`}
                        Name = "Price"
                />
                <div className="ModalButtonGroup">
                        <ModalButton
                            isButtonLink = {false}
                            ButtonContent = "Cancel"
                            isButtonContrast = {true}
                            ButtonFunction = {() => {
                                alert('Are you sure?');
                            }}
                        />
                        <ModalButton
                            isButtonLink = {false}
                            isButtonContrast = {true}
                            ButtonContent = "Add Item"
                            ButtonFunction = {() => {
                                // Cancel function
                            }}
                        />
                </div>
            </div>
        </div>
    );
}