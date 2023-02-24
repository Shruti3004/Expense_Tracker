import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const { addTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000000),
      text,
      amount: parseInt(amount),
    };
    if (
      newTransaction.text == "" ||
      newTransaction.amount == NaN ||
      newTransaction.amount == ""
    ) {
      setShowErrorMessage(true);
      setMessage("Invalid inputs ! either text or amount can't be empty");
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 4000);
      return;
    }
    addTransaction(newTransaction);
  };
  return (
    <>
      <div>
        {showErrorMessage ? (
          <p className="error-message">{message}</p>
        ) : (
          <h5 className="normal-p"> Add new transaction</h5>
        )}
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-control1">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control1">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
