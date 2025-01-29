import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/expenses', { name, amount, category })
      .then(response => console.log('Expense added!', response))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount}onChange={(e) => setAmount(e.target.value)} />
      <input type="text" placeholder="Category" value={category}onChange={(e) => setCategory(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;