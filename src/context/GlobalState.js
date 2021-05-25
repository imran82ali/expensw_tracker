import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
//create initial state

const initialState = {
    transactions:[
        {id:1, description: "income 1, transactionamount: 1000"},
        {id:2, description: "Expense 1, transactionamount: -100"},
        {id:3, description: "income 2, transactionamount: 1000"},
        {id:4, description: "income 2, transactionamount: -600"}
    ]
}

//create global context
export const GlobalContext = createContext(initialState);

//create a provider for the Global Context
export const GlobalProvider =({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}
            </GlobalContext.Provider>
            
    )
}