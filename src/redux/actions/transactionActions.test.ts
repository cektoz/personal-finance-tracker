import { fetchTransactions, addTransaction, filterTransactions } from './transactionActions';
import { Transaction } from '../../types';

describe('transactionActions', () => {
  it('should create an action to fetch transactions', () => {
    const transactions: Transaction[] = [
      { id: 1, description: 'Salary', amount: 3000, type: 'income', category: 'Job', date: '2024-06-01' }
    ];
    const expectedAction = {
      type: fetchTransactions.type,
      payload: transactions,
    };
    expect(fetchTransactions(transactions)).toEqual(expectedAction);
  });

  it('should create an action to add a transaction', () => {
    const transaction: Transaction = {
      id: 2,
      description: 'Groceries',
      amount: -150,
      type: 'expense',
      category: 'Food',
      date: '2024-06-02'
    };
    const expectedAction = {
      type: addTransaction.type,
      payload: transaction,
    };
    expect(addTransaction(transaction)).toEqual(expectedAction);
  });

  it('should create an action to filter transactions', () => {
    const category = 'Food';
    const expectedAction = {
      type: filterTransactions.type,
      payload: category,
    };
    expect(filterTransactions(category)).toEqual(expectedAction);
  });
});
