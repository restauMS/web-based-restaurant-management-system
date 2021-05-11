import React from 'react';
import '../style/Content.scss';

import Label from '../../../../../../common/Label/Label';

const Home = ({info}) => {
    return (
        <div className="HomeContainer">
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
                                <div className="OrdersContainer">
                                    {/*
                                        TODO: Fetch Data from API
                                        * Make a Card
                                        * Fetch API
                                        * Render all active sessions in here as card
                                        * Modal for modifying sessions stuff
                                    */}
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
                                        {/* 
                                        TODO: Fetch Data from API
                                        * Make a Card
                                        * Fetch API
                                        * Render all active sessions in here as card
                                        */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default Home
