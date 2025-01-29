const express = require('express');
const Expense = require('../models/Expense');
const router = express.Router();

// GET all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create a new expense
router.post('/', async (req, res) => {
  const { name, amount, category } = req.body;
  const expense = new Expense({ name, amount, category });

  try {
    const newExpense = await expense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;