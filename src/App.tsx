import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Summary from './components/Summary';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import CategoryFilter from './components/CategoryFilter';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

const Dashboard: React.FC = () => (
  <div>
    <Summary />
    <TransactionForm />
  </div>
);

const Transactions: React.FC = () => (
  <div>
    <CategoryFilter />
    <TransactionList />
  </div>
);

export default App;
