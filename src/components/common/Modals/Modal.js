import React , { useState } from 'react';
import ModalButton from '../Button/Button';
import ModalLabel from '../Label/Label';
import { CheckoutFoodCard, ListCard } from '../Card/Card';

import './style/Modal.scss';
import Textfield from '../Textfield/Textfield';

export const FoodModal = (props) => {

    const [ FoodQty, SetFoodQty ] = useState(0);

    return (
        <div className = "ModalContainer">
            <div className="FoodModal ModalBase">
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
                    HandleChange = {(e) => {
                        e.preventDefault();
                        SetFoodQty(e.target.value);
                    }}
                />
                <div className="ModalButtonGroup">
                    <ModalButton
                            isButtonLink = {false}
                            ButtonContent = "Proceed"
                            isButtonContrast = {true}
                            ButtonFunction = {() => {    
                                const exist = props.CheckoutList.find((item) => item.Id === props.FoodId);
                                if(exist) 
                                    alert('Item is already in checkout!')
                                else 
                                    props.SetCheckoutList([...props.CheckoutList, { Id: props.FoodId, Name: props.FoodName, Price: props.FoodPrice, Qty: FoodQty, Total: (props.FoodPrice * FoodQty)}]);
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

    const RemoveItem = (Id) => {
        const UpdatedInventoryList = props.TempInventory.filter(Item => Item.id !== Id);
        props.UpdateInventory(UpdatedInventoryList);
        props.PopItem(Id);
    }

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
                                RemoveItem(props.FoodId);
                                props.SetModalStatus(false);
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
        <div className = "DashboardModalContainer">
            <div className={props.isModalContrast ? "TransactionModal DashboardModalBase Contrast" : "TransactionModal DashboardModalBase NonContrast"}>
                <ModalLabel
                    LabelContent = {`Transaction Id: ${props.TransactionId}`}
                    isLabelContrast = {false}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <ModalLabel
                    LabelContent = {`Customer Name: ${props.TransactionName}`}
                    isLabelContrast = {false}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <ModalLabel
                    LabelContent = {`Customer's Table: ${props.TransactionTable}`}
                    isLabelContrast = {false}
                    Style = {{
                        fontSize: 'clamp(15px, 20px, 25px)',
                        textAlign: 'start'
                    }}
                />
                <div className={props.isModalContrast ? "OrderedItemsContainer NonContrast" : "OrderedItemsContainer Contrast"}>
                    {
                        props.TransactionList.map((Items, key) => (
                            <ListCard
                                key = {key}
                                CardContent = {Items.Name}
                            />
                        ))
                    }
                </div>
                <div className="ModalButtonGroup">
                        <ModalButton
                            isButtonLink = {false}
                            ButtonContent = "End Session"
                            isButtonContrast = {props.isModalContrast ? false : true}
                            ButtonFunction = {() => {
                                alert('Are you sure?');
                            }}
                        />
                        <ModalButton
                            isButtonLink = {false}
                            isButtonContrast = {props.isModalContrast ? false : true}
                            ButtonContent = "Cancel"
                            ButtonFunction = {() => {
                                props.Cancel(false);
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
            <div className="CheckoutModal ModalBase">
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

    const [ ItemName , SetItemName ] = useState('');
    const [ ItemType , SetItemType ] = useState('');
    const [ ItemQty , SetItemQty ] = useState('');
    const [ ItemPrice , SetItemPrice ] = useState('');

    return (
        <div className="DashboardModalContainer">
            <div className = {props.isModalContrast ? 'NewItemModal DashboardModalBase Contrast' : 'NewItemModal DashboardModalBase NonContrast'}>
                <div className="InnerContainer">
                <ModalLabel
                    LabelContent = "New Item"
                    Style = {{
                        fontSize: 'clamp(10px, 20px, 30px)'
                    }}
                />
                    <Textfield
                            Type = "text"
                            PlaceholderTitle = {`New Item Name`}
                            Name = "ItemName"
                            HandleChange = {(e) => {
                                e.preventDefault();
                                SetItemName(e.target.value);
                            }}
                    />
                    <Textfield
                            Type = "text"
                            PlaceholderTitle = {`New Item Type`}
                            Name = "ItemType"
                            HandleChange = {(e) => {
                                e.preventDefault();
                                SetItemType(e.target.value);
                            }}
                    />
                    <Textfield
                            Type = "number"
                            PlaceholderTitle = {`Initial Quantity`}
                            Name = "InitQty"
                            HandleChange = {(e) => {
                                e.preventDefault();
                                SetItemQty(e.target.value);
                            }}
                    />
                    <Textfield
                            Type = "number"
                            PlaceholderTitle = {`Initial Price`}
                            Name = "InitPrice"
                            HandleChange = {(e) => {
                                e.preventDefault();
                                SetItemPrice(e.target.value);
                            }}
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
                                    const lastItemId = (props.TempInventory.length + 1);
                                    console.log(lastItemId);
                                    props.PushItem( ItemName, ItemType, ItemQty, ItemPrice );
                                    props.UpdateInventory([...props.TempInventory, { id: lastItemId, name: ItemName, type: ItemType, quantity: ItemQty, price: ItemPrice }])
                                    props.SetModalStatus(false);
                                }}
                            />
                    </div>
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
                'DashboardModalBase EditSettingInfoModal Contrast'
                    :
                'DashboardModalBase EditSettingInfoModal NonContrast'
            } >
                <div className="InnerContainer">
                    <ModalLabel
                        LabelContent = {`Editing ${props.InfoEditable}`}
                        isLabelContrast = {false}
                        Style = {{
                            fontSize: 'clamp(15px, 20px, 25px)'
                        }}
                    />
                    <div className="ModalInputGroup">
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
                    </div>
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
        </div>
    );
};

