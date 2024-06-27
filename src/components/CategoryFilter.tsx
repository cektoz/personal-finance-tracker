import React from 'react';
import { Box, Select } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { filterTransactions } from '../redux/actions/transactionActions';

const CategoryFilter: React.FC = () => {
  const dispatch = useDispatch();
    
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterTransactions(e.target.value));
  };

  return (
    <Box>
      <Select placeholder="Filter by category" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Job">Job</option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
      </Select>
    </Box>
  );
};

export default CategoryFilter;
