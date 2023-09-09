import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import Navbar from '../components/Navbar';
import { checkTyping, filter } from '../redux/companiesSlice';

const mockStore = configureStore([]);

describe('Navbar component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    component = render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    );
  });

  test('renders Navbar component correctly', () => {
    expect(component.getByText('MOST ACTIVE')).toBeInTheDocument();
  });

  test('dispatches checkTyping and filter actions on input change', () => {
    const input = component.getByPlaceholderText('SEARCH COMPANIES BY NAME');
    fireEvent.change(input, { target: { value: 'example' } });

    const actions = store.getActions();
    expect(actions[0]).toEqual(checkTyping('example'));
    expect(actions[1]).toEqual(filter('example'));
  });

  test('renders correct icons', () => {
    expect(component.getByTestId('navcons-arrow')).toBeInTheDocument();
    expect(component.getByTestId('navcons-cog')).toBeInTheDocument();
    expect(component.getByTestId('navcons-microphone')).toBeInTheDocument();
  });
});
