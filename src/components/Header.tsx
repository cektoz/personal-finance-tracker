import React from 'react';
import { Box, Heading, HStack, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Box as="header" py={4} px={6} bg="#319793" color="white">
      <HStack justifyContent="space-between">
        <Heading as="h1" size="lg">
          Personal Finance Tracker
        </Heading>
        <HStack spacing={4}>
          <ChakraLink as={Link} to="/" _hover={{ textDecoration: 'underline' }}>
            Dashboard
          </ChakraLink>
          <ChakraLink as={Link} to="/transactions" _hover={{ textDecoration: 'underline' }}>
            Transactions
          </ChakraLink>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
