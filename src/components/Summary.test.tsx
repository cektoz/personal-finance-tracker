import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Summary from './Summary';

const mockStore = configureStore([]);

describe('Summary', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      transactions: { transactions: [{ id: 1, description: 'Salary', amount: 3000, type: 'income', category: 'Job', date: '2024-06-01' }, 
      { id: 2, description: 'Groceries', amount: -150, type: 'expense', category: 'Food', date: '2024-06-02' }] }
    });
  });

  it('should render total income, total expenses, and balance', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Summary />
      </Provider>
    );

    expect(getByText('Total Income: $3000')).toBeInTheDocument();
    expect(getByText('Total Expenses: $-150')).toBeInTheDocument();
    expect(getByText('Balance: $2850')).toBeInTheDocument();
  });
});
