import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Transaction  = ({transaction}) => {
    const {deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionamount < 0 ? '-' : '+';

    return (
        
            <li className={transaction.transactionamount < 0 ? 'minus' : 'plus'}>
               {transaction.description}

               <span>{sign}$ {Math.abs(transaction.transactionamount)}</span>

               <button className="delete-btn"
                       onClick={() => deleteTransaction(transaction.id) } >  
                   X
                   </button>

            </li>
        
    )
}
