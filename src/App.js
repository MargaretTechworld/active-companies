import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getCompanies } from './redux/companiesSlice';
import Home from './components/Home';
import CompanyDetails from './components/CompanyDetails';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/companyDetails/:symbol" element={<CompanyDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
