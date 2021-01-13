import React, { useEffect, useState } from 'react';
import {Spring} from 'react-spring/renderprops';
// Component Imports
import CustomerLabel from '../../../common/Label/Label';
import CustomerButton from '../../../common/Button/Button';
import {FoodItemCardComponent as FoodCard, CheckoutFoodCard as CheckoutCard} from '../../../common/Card/Card';
// Testing Data Import
import FoodList from './TestData.json';
// Asset Imports
import './style/Menu.scss';
import CheckoutIcon from '../../../../assets/button-assets/checkout-icon.png';

const CustomerMenu = props => {

    // ! Code to => util directory
    // ? Create a Builder for this
    const CurrentDate = new Date();
    const Day = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];
    const TodayDate = `${CurrentDate.getDate()}/${CurrentDate.getMonth()+1}/${CurrentDate.getFullYear()}`;

    const [DropdownStatus, SetDropdownStatus] = useState(false);
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
                        FoodList.length <= 0 ?
                        <CustomerLabel
                            LabelContent = {`We're very sorry for this, the Menu seems to be empty 😢`}
                        />
                        :
                        FoodList.map(Dish => 
                        <FoodCard 
                            key={Dish.FoodId}
                            FoodName = {Dish.FoodName}
                            FoodPrice = {Dish.FoodPrice}
                            isRounded = {false}
                            FoodCardFunction = {() => {SetCheckoutList([...CheckoutList, {Id: Dish.FoodId, Name: Dish.FoodName, Price: Dish.FoodPrice}])}}
                        />)
                    }
                </div>
            </div>
            {
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
                                            isLabelContrast = {false}
                                            LabelContent = 'Your Checkout List is Empty!'
                                        />
                                        :
                                        CheckoutList.map(CheckedOut => 
                                            <CheckoutCard
                                            Key = {CheckedOut.Id}
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
