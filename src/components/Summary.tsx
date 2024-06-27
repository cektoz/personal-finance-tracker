import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Summary: React.FC = () => {
  const transactions = useSelector((state: RootState) => state.transactions.transactions);

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome + totalExpenses;

  return (
    <Box ml={4} pt={4}>
        <Text>Summary:</Text>
        <Text>Total Income: ${totalIncome}</Text>
        <Text>Total Expenses: ${totalExpenses}</Text>
        <Text>Balance: ${balance}</Text>
    </Box>
  );
};

export default Summary;