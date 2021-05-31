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
        <div className = "DashboardModalContainer">
            <div className={props.isModalContrast ? 'ItemModal DashboardModalBase Contrast' : 'ItemModal DashboardModalBase NonContrast'}>
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
                            isButtonContrast = {props.isModalContrast ? false : true}
                            ButtonFunction = {() => {
                                // Deleted function
                            }}
                        />
                    <ModalButton
                        isButtonLink = {false}
                        isButtonContrast = {props.isModalContrast ? false : true}
                        ButtonContent = "Edit Item"
                        ButtonFunction = {() => {
                            props.SetEditStatus(true);
                            props.SetModalStatus(false);
                        }}
                    />
                    <ModalButton
                        isButtonLink = {false}
                        isButtonContrast = {props.isModalContrast ? false : true}
                        ButtonContent = "Cancel"
                        ButtonFunction = {() => {
                            props.SetModalStatus(false);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export const ModifyItemModal = (props) => {
    return (
        <div className = "DashboardModalContainer">
            <div className={props.isModalContrast ? 'ModifyItemModal DashboardModalBase Contrast' : 'ModifyItemModal DashboardModalBase NonContrast'}>
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
                <Textfield
                    Type = "number"
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
                                props.SetEditStatus(false);
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
        <div className="DashboardModalContainer">
            <div className = {props.isModalContrast ? 'NewItemModal DashboardModalBase Contrast' : 'NewItemModal DashboardModalBase NonContrast'}>
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
                            isButtonContrast = {props.isModalContrast ? false : true}
                            ButtonFunction = {() => {
                                props.SetModalStatus(false);
                            }}
                        />
                        <ModalButton
                            isButtonLink = {false}
                            isButtonContrast = {props.isModalContrast ? false : true}
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

export const EditSettingInfoModal = (props) => {
    return (
        <div className='DashboardModalContainer'>
            <div className = {
                props.isModalContrast ? 
                'EditSettingInfoModal DashboardModalBase Contrast'
                    :
                'EditSettingInfoModal DashboardModalBase NonContrast'
            } >
                <ModalLabel
                    LabelContent = {`Editing ${props.InfoEditable}`}
                    isLabelContrast = {false}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)'
                    }}
                />
                <Textfield
                    Type = {props.InfoEditable === 'Password' ? "password" : "text"}
                    PlaceholderTitle = {`New ${props.InfoEditable}`}
                    Name = {`New${props.InfoEditable}`}
                />
                <Textfield
                    Type = {props.InfoEditable === 'Password' ? "password" : "text"}
                    PlaceholderTitle = {`Old ${props.InfoEditable}`}
                    Name = {`Old${props.InfoEditable}`}
                />
                <div className="ModalButtonGroup">
                    <ModalButton
                        isButtonLink = {false}
                        ButtonContent = "Cancel"
                        isButtonContrast = {props.isModalContrast ? false : true}
                        ButtonFunction = {() => {
                            // Goes back to its initial states
                            props.SetModalActive(false);
                            props.SetModalType('');
                        }}
                    />
                    <ModalButton
                        isButtonLink = {false}
                        isButtonContrast = {props.isModalContrast ? false : true}
                        ButtonContent = "Accept Changes"
                        ButtonFunction = {() => {
                            alert('Are you sure?');
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

