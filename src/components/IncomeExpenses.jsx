import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

function IncomeExpenses() {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts
    .filter(item => item >0)
    .reduce((acc, item) => (acc+=item), 0).toFixed(2)

    const expense = (amounts
    .filter(item => item <0)
    .reduce((acc, item) => (acc+=item), 0)*-1).toFixed(2)

    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h5 className="text-center">Income</h5>
                    <p className="money plus">+${income}</p>
                </div>
                <div>
                    <h5>Expense</h5>
                    <p className="money minus">-${expense}</p>
                </div>
            </div>
        </div>
    )
}

export default IncomeExpenses
