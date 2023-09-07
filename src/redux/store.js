import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './companiesSlice';

const store = configureStore({
  reducer: {
    companies: companyReducer,
  },
});

export default store;
