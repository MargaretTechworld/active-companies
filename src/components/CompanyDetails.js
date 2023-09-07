import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SingleCompanyDetails from './SingleCompanyDetails';
import { singleCompanyData } from '../redux/companiesSlice';

function CompanyDetails() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.companies);
  const parms = useParams();
  const { symbol } = parms;

  useEffect(() => {
    dispatch(singleCompanyData(symbol));
  }, [dispatch, symbol]);

  return (
    <div>
      {loading && <p className="loading">Loading, please wait!</p>}
      {error && <p className="loading">Error loading data, please try again!</p>}
      {!loading && (
      <SingleCompanyDetails />
      )}
    </div>
  );
}

export default CompanyDetails;
