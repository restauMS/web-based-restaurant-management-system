import React from 'react';
import { Spring } from 'react-spring/renderprops';

import Label from '../../../../../../common/Label/Label';
import { ListCard } from '../../../../../../common/Card/Card';

const Home = ({info}) => {
    return (
        <Spring
        from = {{opacity: 0, transition: '0.1s ease-in-out'}}
        to = {{opacity: 1}}
        >
            {
                props => 
                <div className = "HomeContainer" style={{...props}}>
                    <div className="TopBar">
                        <Label
                            LabelContent = "Dashboard"
                            isLabelContrast = {true}
                            Style = {{fontSize: 'clamp(20px, 30px, 40px)', color: '#E56B6F'}}
                        />
                        <Label
                            LabelContent = {`Hello, ${info.Username}`}
                            Style = {{fontSize: 'clamp(20px, 30px, 40px)', color: '#E56B6F'}}
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
                                {/* {
                                    OrderList.length > 0 ?
                                    OrderList.map(Items => <ListCard CardContent = {Items} />)
                                    :
                                    <h3> Whaaaat, well you can take a break I guess...🤷‍♂️</h3>
                                } */}
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
                                    {/* {
                                            TransactionList.length > 0 ?
                                            TransactionList.map(Items => <ListCard CardContent = {Items} />)
                                            :
                                            <h3> List is empty! </h3>
                                    } */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Spring>
    );
}

export default Home;
