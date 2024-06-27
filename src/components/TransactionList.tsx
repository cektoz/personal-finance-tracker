import React, { useState } from 'react';
import { Box, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Transaction } from '../types';
import TransactionDetails from './TransactionDetails';

const TransactionList: React.FC = () => {
  const transactions = useSelector((state: RootState) => state.transactions.filteredTransactions as Transaction[]);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRowClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    onOpen();
  };

  return (
    <Box mt={4}>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Description</Th>
            <Th isNumeric>Amount</Th>
            <Th>Category</Th>
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map(transaction => (
            <Tr key={transaction.id} onClick={() => handleRowClick(transaction)}>
              <Td>{transaction.date}</Td>
              <Td>{transaction.description}</Td>
              <Td isNumeric>{transaction.amount}</Td>
              <Td>{transaction.category}</Td>
              <Td>{transaction.type}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {selectedTransaction && (
        <TransactionDetails isOpen={isOpen} onClose={onClose} transaction={selectedTransaction} />
      )}
    </Box>
  );
};

export default TransactionList;
