import { NavLink } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './singleCompany.css';
import { useSelector } from 'react-redux';

const SingleCompanyDetails = () => {
  const { companyDetails } = useSelector((state) => state.companies);
  const {
    companyName: name, ceo, sector, industry, image, currency, city, phone, website,
  } = companyDetails;
  return (
    <div>
      <div className="single-company">
        <NavLink className="navlink" to="/">
          <FaArrowCircleLeft className="back-arrow" />
          <p className="back">back</p>
        </NavLink>
        <p className="logo">{name}</p>
      </div>
      <div className="single-company-container">
        <div>
          <img className="image-container" src={image} alt="Company Logo" />
        </div>
        <p>
          {ceo}
          (CEO)
        </p>
        <p>
          {currency}
          (CURRENCY)
        </p>
        <p>
          {industry}
          (INDUSTRY)
        </p>
        <p>
          {sector}
          (sector)
        </p>
        <p>
          {city}
          (city)
        </p>
        <p>
          {phone}
          (phone)
        </p>
        <a href={website}>website</a>

      </div>
    </div>
  );
};

export default SingleCompanyDetails;
