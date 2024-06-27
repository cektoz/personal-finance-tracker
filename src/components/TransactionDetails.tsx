import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Text } from '@chakra-ui/react';
import { Transaction } from '../types';

interface TransactionDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: Transaction;
}

const TransactionDetails: React.FC<TransactionDetailsProps> = ({ isOpen, onClose, transaction }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Transaction Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text><strong>Description:</strong> {transaction.description}</Text>
          <Text><strong>Amount:</strong> ${transaction.amount}</Text>
          <Text><strong>Type:</strong> {transaction.type}</Text>
          <Text><strong>Category:</strong> {transaction.category}</Text>
          <Text><strong>Date:</strong> {transaction.date}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TransactionDetails;
