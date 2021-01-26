import React, { useEffect, useState } from 'react';
import {Spring} from 'react-spring/renderprops';

// ? Component Imports
import CustomerLabel from '../../../common/Label/Label';
import CustomerButton from '../../../common/Button/Button';
import {FoodItemCardComponent as FoodCard, CheckoutFoodCard as CheckoutCard} from '../../../common/Card/Card';

// ? Asset Imports
import './style/Menu.scss';
import CheckoutIcon from '../../../../assets/button-assets/checkout-icon.png';

const CustomerMenu = props => {

    // ! Code to => util directory
    // ? Create a Builder for this maybe if there's time...
    const CurrentDate = new Date();
    const Day = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];
    const TodayDate = `${CurrentDate.getDate()}/${CurrentDate.getMonth()+1}/${CurrentDate.getFullYear()}`;
    const FetchMenuData = async() => {
        try {
            const Data = await fetch('/API/Customer/FetchMenuData', {
                method: 'POST'
            });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    }
    const [DropdownStatus, SetDropdownStatus] = useState(false);
    const [MenuList, SetMenuList] = useState([]);
    const [CheckoutList, SetCheckoutList] = useState([]);
    const {
        // eslint-disable-next-line
            CustomerAddress: Address,
            // eslint-disable-next-line
            CustomerContact: Contact,
            CustomerName: Name,
            // eslint-disable-next-line
            CustomerTable: Table
        } = props.LoggedData;

    // Fetch data from the Database
    useEffect(() =>{
        FetchMenuData()
        .then(Data => SetMenuList(Data))
        .catch(Error => console.trace(Error));
    }
    ,[CheckoutList]
    )

    if(props.Stage !== 2)
        return null;

    return (
        // ? To form or not To form
        <form
        className = 'MenuContainer'
        >
            <div className="InnerContainer">
                <div className="HeaderCheckoutContainer">
                    <CustomerLabel
                        LabelContent = {`Hello${Name.length > 0 ? `, ${props.LoggedData.CustomerName}` : ' 😊'}`}
                        Style = {{margin: '10px auto',textAlign: "start"}}
                    />
                    <CustomerButton
                    isButtonLink = {false}
                    ButtonFunction = {(e) => {
                                        e.preventDefault();
                                        SetDropdownStatus(true);
                                        }}
                    isButtonContrast = {true}
                    Style = {{height: '10px', minWidth: '45px', backgroundImage: `url('${CheckoutIcon}')`, backgroundPosition: 'center', backgroundSize: 'cover'}}
                    />
                </div>
                <CustomerLabel
                    LabelContent = {`${Day[CurrentDate.getDay()]}, ${TodayDate}, Weather information unavailable at the moment`}
                    Style = {{fontSize: '17px', margin: '0 auto', textAlign: "start"}}
                />
                <div className="FoodMenuContainer">
                    {
                        MenuList.length <= 0 ?
                        <CustomerLabel
                            LabelContent = {`We're very sorry for this, the Menu seems to be empty 😢`}
                        />
                        :
                        MenuList.map(Dish => 
                        <FoodCard 
                            key={Dish.item_id}
                            FoodName = {Dish.item_name}
                            FoodPrice = {Dish.item_price}
                            isRounded = {false}
                            FoodCardFunction = {() => {SetCheckoutList([...CheckoutList, {Id: Dish.item_id, Name: Dish.item_name, Price: Dish.item_price}])}}
                        />)
                    }
                </div>
            </div>
            {
                // ! Needs major refactoring, using the component wrong
                DropdownStatus ? 
                <Spring
                    from = {{transform: 'translateY(-1000px)', transition: '0.1s ease-in-out'}}
                    to = {{transform: 'translateY(0px)'}} 
                >
                    {props => 
                        <div className="CheckoutDropdown" style={{...props}}>
                            <CustomerButton
                                isButtonLink = {false}
                                isButtonContrast = {false}
                                ButtonFunction = {e => {
                                    e.preventDefault();
                                    SetDropdownStatus(false);
                                }}
                                ButtonContent = 'exit'
                                Style = {{minWidth: '70px', minHeight: '10px', margin: '10px 10px'}}
                            />
                            <CustomerLabel
                                isLabelContrast = {false}
                                LabelContent = 'Checkout'
                            />
                            <div className="CheckoutContainer">
                                <div className="CheckoutList">
                                    {
                                        CheckoutList.length <= 0 ?
                                        <CustomerLabel
                                            isLabelContrast = {true}
                                            LabelContent = 'Your Checkout List is Empty!'
                                        />
                                        :
                                        CheckoutList.map(CheckedOut => 
                                            <CheckoutCard
                                            key = {CheckedOut.Id}
                                            FoodName = {CheckedOut.Name}
                                            FoodQty = {`Qty: ${CheckedOut.Price}`}
                                            FoodTotal = {`Total: ${CheckedOut.Price * 2}`}
                                            />
                                        )
                                    }
                                </div>
                                <CustomerButton
                                    isButtonLink = {false}
                                    isButtonContrast = {true}
                                    ButtonFunction = {e => {
                                        e.preventDefault();
                                        console.log(CheckoutList);
                                    }}
                                    ButtonContent = 'proceed'
                                    Style={{margin: 'auto'}}
                                />
                        </div>
            </div>
                    }
                </Spring>
            :
            null
            }
        </form>
    );
}
export default CustomerMenu;
