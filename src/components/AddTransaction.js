import React,{ useState,useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'


export const AddTransaction = () => {
    const {addTransaction } = useContext(GlobalContext);
    const [description,setDescription] = useState();
    const [transactionamount,setTransactionAmount] = useState();
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionamount : +transactionamount
        }

        addTransaction(newTransaction);
    }
    
    return (
        <div>
            <h3> Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor='description'> 
                        Description
                    </label>
                    <input 
                        type="text" 
                        id="description" 
                        placeholder="Deatail of Transaction" 
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        required="required"

                    /> 
                </div>
                <div className="form-control"> 
                <label htmlFor="transactionamount">
                    Transaction Amount

                </label>
                    <input 
                        type="number" 
                        id="transactionamount" 
                        placeholder="Transaction Amount" 
                        value={transactionamount}
                        onChange={(e)=>setTransactionAmount(e.target.value)}
                        required="required"
                    />

                </div>
                <button className="btn"> 
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
