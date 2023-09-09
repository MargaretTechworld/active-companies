import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import Navbar from './Navbar';
import './home.css';

function Home() {
  const {
    loading, error, companies, filterCompanies, isTyping,
  } = useSelector((state) => state.companies);
  const displayCompanies = isTyping ? filterCompanies : companies;
  return (
    <section>
      <Navbar />
      <div className="home-section">
        {loading && <p className="no-match">Loading, please wait!</p>}
        {error && <p className="no-match">Error loading data, please try again!</p>}
        {!loading && displayCompanies.length === 0 && <p className="no-match">No Match found</p>}
        {displayCompanies.map((company) => (
          <div key={company.symbol}>
            <NavLink to={`/companyDetails/${company.symbol}`}>
              <div className="container">
                <FaArrowCircleRight className="arrow-icon" />
                <div className="company-info">
                  <p data-testid="company-name" className="company-name">{company.name}</p>
                  <p data-testid="company-symbol" className="company-symbol">{company.symbol}</p>
                  <p data-testid="company-price" className="company-price">{company.price}</p>
                </div>
              </div>
            </NavLink>
          </div>

        ))}
      </div>
    </section>
  );
}

export default Home;
