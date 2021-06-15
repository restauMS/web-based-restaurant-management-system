import { createContext, useState, useEffect } from 'react';

export const WorkerContext = createContext();

export const WorkerProvider = (props) => {
    
    const authToken = localStorage.getItem('AccessToken');
    const [ Data, SetData ] = useState({});

    const GetData = async() => {
        try {
            
        } catch (error) {
            
        }
    }

    useEffect(() => {

    }, []);

    return (
        <WorkerContext.Provider
            value = {
                {
                    Data
                }
            }
        >
            {props.children}
        </WorkerContext.Provider>
    )
}