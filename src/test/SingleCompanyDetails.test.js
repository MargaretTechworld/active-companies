import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SingleCompanyDetails from '../components/SingleCompanyDetails';
import '@testing-library/jest-dom';

test('renders SingleCompanyDetails component correctly', () => {
  // Render the component within the necessary context
  const { getByText, getByAltText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <SingleCompanyDetails />
      </BrowserRouter>
    </Provider>,
  );

  // Assert that specific elements are present in the rendered output
  const ceoElement = getByText('Ceo:');
  expect(ceoElement).toBeInTheDocument();

  const currencyElement = getByText('CURRENCY:');
  expect(currencyElement).toBeInTheDocument();

  const countryElement = getByText('Country:');
  expect(countryElement).toBeInTheDocument();

  const sectorElement = getByText('Sector:');
  expect(sectorElement).toBeInTheDocument();

  const cityElement = getByText('City:');
  expect(cityElement).toBeInTheDocument();

  const phoneElement = getByText('Phone:');
  expect(phoneElement).toBeInTheDocument();

  const websiteElement = getByText('Website');
  expect(websiteElement).toBeInTheDocument();

  const imageElement = getByAltText('Company Logo');
  expect(imageElement).toBeInTheDocument();

  // You can add more assertions as needed
});
