import React, { useState,useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
const AddTransactions = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

    const {addTransactions} = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();
      const newTransaction = {
        id:Math.floor(Math.random()*100000000),
        text,
        amount:+amount
      }

      addTransactions(newTransaction);
    }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransactions;
