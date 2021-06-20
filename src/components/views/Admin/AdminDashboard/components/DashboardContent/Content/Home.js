import React , { useState, useContext } from 'react';
import { Spring } from 'react-spring/renderprops';
import { OrderTransactionModal } from '../../../../../../common/Modals/Modal';
import { AdminContext } from '../../../../../../contexts/AdminContext';
import '../style/Content.scss';

import Label from '../../../../../../common/Label/Label';
import { ListCard } from '../../../../../../common/Card/Card';

const Home = ({info}) => {

    const { ActiveSessions, SetActiveSessions, AllSessions, AsyncEndSession, AsyncClearSessions } = useContext(AdminContext);
    const [ TransactionModalActive, SetTransactionModalActive ] = useState(false);
    const [ TransactionFocus, SetTransactionFocus ] = useState({});

    return (
        <Spring
            from = {{opacity: 0, transition: '0.1s ease-in-out'}}
            to = {{opacity: 1}}
        >
            {
                props => 
                <div className="HomeContainer" style={{...props}}>

                    {
                        TransactionModalActive ? 
                        <OrderTransactionModal
                            isModalContrast = {false}
                            key = {TransactionFocus.Key}                         
                            TransactionId = {TransactionFocus.Id}
                            TransactionName = {TransactionFocus.Name}
                            TransactionList = {TransactionFocus.Checkout}
                            TransactionTable = {TransactionFocus.Table}
                            TransactionStatus = {TransactionFocus.Status}
                            TempSessions = {ActiveSessions}
                            UpdateSessions = {SetActiveSessions}
                            Cancel = {SetTransactionModalActive}
                            ClearSessions = {AsyncClearSessions}
                            EndSession = {AsyncEndSession}
                        />
                        :
                        null
                    }

                    <div className="TopBar">
                        <Label
                            LabelContent = "Dashboard"
                            isLabelContrast = {true}
                        />
                        <Label
                            LabelContent = {`Hello, ${info.Username}`}
                            Style = {{fontSize: 'clamp(20px, 30px, 40px)'}}
                            isLabelContrast = {true}
                        />
                    </div>
                    <div className="MainContainer">
                        <div className="OrderSessionList">
                            <Label
                                LabelContent = {`Active Order Sessions`}
                                Style = {{fontSize: 'clamp(10px, 20px, 30px)'}}
                                isLabelContrast = {false}
                            />
                            <div className="OrderList">
                                {
                                    ActiveSessions.length !== 0 ?
                                    ActiveSessions.map((Items, key) => 
                                    <ListCard 
                                        key = {key}
                                        CardContent = {Items.customer_name} 
                                        CardFunction = {() => {
                                            SetTransactionModalActive(true);
                                            SetTransactionFocus({Key: key, Id: Items.customer_id, Name: Items.customer_name, Table: Items.customer_table_no, Checkout: JSON.parse(Items.checkout).checkout , Status: Items.status});
                                        }}
                                    />)
                                    :
                                    <Label
                                        LabelContent = {`Whaaaat, well you can take a break I guess...🤷‍♂️`}
                                        Style = {{fontSize: 'clamp(7px, 14px, 21px)'}}
                                        isLabelContrast = {false}
                                    />
                                }
                            </div>
                        </div>
                        <div className="SideContentContainer">
                            <div className="DishOTD">
                                <Label
                                    LabelContent = {`Trending Dish of the Day`}
                                    Style = {{fontSize: 'clamp(9px, 18px, 21px)', textAlign: 'start'}}
                                    isLabelContrast = {false}
                                />
                                <div className="Dish">
                                </div>
                            </div>
                            <div className="RecentTransactions">
                                <Label
                                    LabelContent = {`Recent Transactions`}
                                    Style = {{fontSize: 'clamp(12px, 24px, 48px)', textAlign: 'start'}}
                                    isLabelContrast = {false}
                                />
                                <div className="TransactionList">
                                    {
                                            AllSessions.length !== 0 ?
                                            AllSessions.map((Items, key) => 
                                            <ListCard 
                                                key = {key} 
                                                CardContent = {Items.customer_name} 
                                                CardFunction = {() => {
                                                    SetTransactionModalActive(true);
                                                    SetTransactionFocus({Key: key, Id: Items.customer_id, Name: Items.customer_name, Table: Items.customer_table_no, Checkout: JSON.parse(Items.checkout).checkout, Status: Items.status});
                                                }}
                                            />)
                                            :
                                            <Label
                                            LabelContent = {`No recent transactions`}
                                            Style = {{fontSize: 'clamp(7px, 14px, 21px)'}}
                                            isLabelContrast = {false}
                                        />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
    </Spring>
    )
}

export default Home
