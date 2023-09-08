import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CompanyDetails from '../components/CompanyDetails';

test('Check if CompanyDetails component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <CompanyDetails />
      </BrowserRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});
