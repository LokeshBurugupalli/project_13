const request = require('supertest');
const app = require('../server'); // import your express app

describe('Expense Tracker API', () => {
  it('should fetch all expenses', async () => {
    const response = await request(app).get('/api/expenses');
    expect(response.status).toBe(200);
  });

  it('should create a new expense', async () => {
    const newExpense = { name: 'Coffee', amount: 5, category: 'Food' };
    const response = await request(app).post('/api/expenses').send(newExpense);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newExpense.name);
  });
});