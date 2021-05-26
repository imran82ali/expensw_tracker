import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Transaction  = ({transaction}) => {
    const {deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionamount < 0 ? '-' : '+';

    return (
        
            <li className={transaction.transactionamount < 0 ? 'minus' : 'plus'}>
               {transaction.description}

               <span>{sign}$ {Math.abs(transaction.transactionamount)}</span>

               <button onClick={() => deleteTransaction(transaction.id) } 
               className="delete-btn">  
                   X
                   </button>

            </li>
        
    )
}
