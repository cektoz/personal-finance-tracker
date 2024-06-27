import { createAction } from '@reduxjs/toolkit';
import { Transaction } from '../../types';


// Creating an action to fetch transactions
export const fetchTransactions = createAction<Transaction[]>('transactions/fetch');
export const addTransaction = createAction<Transaction>('transactions/add');
export const filterTransactions = createAction<string>('transactions/filter');
