import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Home from '../components/Home';
import '@testing-library/jest-dom';

const mockStore = configureMockStore();
const store = mockStore({
  companies: {
    loading: false,
    error: null,
    companies: [
      { name: 'Company 1', price: 100, symbol: 'C1' },
      { name: 'Company 2', price: 200, symbol: 'C2' },
    ],
    filterCompanies: [],
    isTyping: false,
  },
});

describe('Home component', () => {
  it('renders without errors', () => {
    const { queryByText, getAllByTestId } = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );

    expect(queryByText('Loading, please wait!')).toBeNull();

    expect(queryByText('Error loading data, please try again!')).toBeNull();

    expect(queryByText('No Match found')).toBeNull();

    const companyNames = getAllByTestId('company-name');
    expect(companyNames.length).toBeGreaterThan(0);
    expect(companyNames[0]).toHaveTextContent('Company 1');

    const companySymbols = getAllByTestId('company-symbol');
    expect(companySymbols.length).toBeGreaterThan(0);
    expect(companySymbols[0]).toHaveTextContent('C1');

    const companyPrices = getAllByTestId('company-price');
    expect(companyPrices.length).toBeGreaterThan(0);
    expect(companyPrices[0]).toHaveTextContent('100');

    // You can add more assertions as needed
  });
});
