import { createContext, useState } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = (props) => {

    const OrderSessionFormat = {

    };

    const [OrderSession, SetOrderSession] = useState(OrderSessionFormat);
    const [PageCount, SetPageCount] = useState(1);

    const _NextPage = () => {

    }

    const _BackPage = () => {

    }

    


    return (
        <CustomerContext.Provider value = {{}}>
            {props.children}
        </CustomerContext.Provider>
    )
}