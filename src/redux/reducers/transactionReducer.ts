import { createReducer } from '@reduxjs/toolkit';
import { fetchTransactions, addTransaction, filterTransactions } from '../actions/transactionActions';
import { Transaction } from '../../types';

interface TransactionState {
  transactions: Transaction[];
  filteredTransactions: Transaction[];
}

// Initial state
const initialState: TransactionState = {
  transactions: [
    { id: 1, description: 'Salary', amount: 3000, type: 'income', category: 'Job', date: '2024-06-01' },
    { id: 2, description: 'Groceries', amount: -150, type: 'expense', category: 'Food', date: '2024-06-02' }
  ],
  filteredTransactions: []
};

// Creating the transaction reducer using createReducer
const transactionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchTransactions, (state, action) => {
      state.transactions = action.payload;
      state.filteredTransactions = action.payload;
    })
    .addCase(addTransaction, (state, action) => {
      const newTransaction = { ...action.payload, id: state.transactions.length + 1 };
      state.transactions.push(newTransaction);
      state.filteredTransactions.push(newTransaction);
    })
    .addCase(filterTransactions, (state, action) => {
      if (action.payload === 'All') {
        state.filteredTransactions = state.transactions;
      } else {
        state.filteredTransactions = state.transactions.filter(transaction => transaction.category === action.payload);
      }
    });
});

export default transactionReducer;
