import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {
    
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction ={
            id: Math.floor(Math.random() * 1000000000),
            text,
            amount: parseInt(amount)
            // amount: +amount
        }
        addTransaction(newTransaction)
    }
    return (
        <>
            <h5>Add new transaction</h5>
            <form onSubmit={onSubmit}>
                <div className="form-control1">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="form-control1">
                    <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)</label>
                    <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
