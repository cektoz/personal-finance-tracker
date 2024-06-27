import React, { useState } from 'react';
import { Box, Button, Input, Select, VStack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../redux/actions/transactionActions';
import { Transaction } from '../types';

const TransactionForm: React.FC = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [category, setCategory] = useState('Job');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = () => {
    const finalAmount = type === 'expense' ? -Math.abs(amount) : amount;
    const newTransaction: Omit<Transaction, 'id'> = { description, amount: finalAmount, type, category, date };
    dispatch(addTransaction(newTransaction as any));
    setDescription('');
    setAmount(0);
    setType('income');
    setCategory('Job');
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <Box mt={4}>
      <VStack spacing={4} align="stretch">
        <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
        <Select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Select>
        <Select placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Job">Job</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
        </Select>
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <Button onClick={handleSubmit}>Add Transaction</Button>
      </VStack>
    </Box>
  );
};

export default TransactionForm;
