import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
           <h3> Transanction History</h3> 
           <ul className="list"> 
           <li className="plus">
               Project 1 income
               <span>$1,000</span>
               <button className="delete-btn">X</button>
            </li>
            <li className="minus">
                Project 1 Utility bill
                <span>$-1,000</span>
                <button className="delete-btn">X</button>
            </li>

           </ul>
        </div>
    )
}
