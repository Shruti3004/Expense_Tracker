import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

function Balance() {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0 ).toFixed(2)
    return (
        <>
            <h6>Your Balance</h6>
            <h4 id="balance">${total}</h4>
        </>
    )
}

export default Balance
