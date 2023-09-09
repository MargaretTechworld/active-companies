import { NavLink } from 'react-router-dom';
import { FaAngleLeft, FaCog, FaMicrophone } from 'react-icons/fa';
import './singleCompany.css';
import { useSelector } from 'react-redux';

const SingleCompanyDetails = () => {
  const { companyDetails } = useSelector((state) => state.companies);
  const {
    companyName: name, ceo, sector, country, image, currency, city, phone, website,
  } = companyDetails;
  return (
    <div>
      <div className="single-company">
        <div className="nav-icons">
          <NavLink className="navlink" to="/">
            <FaAngleLeft className="navcons-arrow" />
          </NavLink>
          <p className="logo">{name}</p>
          <div className="set-micro">
            <FaCog className="navcons" />
            <FaMicrophone className="navcons" />
          </div>
        </div>
      </div>
      <div className="details-img">
        <img className="image-container" src={image} alt="Company Logo" />
      </div>
      <div className="single-company-container">
        <div className="details-info">
          <p>Ceo:</p>
          <p>{ceo}</p>
        </div>
        <div className="details-info">
          <p>CURRENCY:</p>
          <p>{currency}</p>
        </div>
        <div className="details-info">
          <p>Country:</p>
          <p>{country}</p>
        </div>
        <div className="details-info">
          <p>Sector:</p>
          <p>{sector}</p>
        </div>
        <div className="details-info">
          <p>City:</p>
          <p>{city}</p>
        </div>
        <div className="details-info">
          <p> Phone:</p>
          <p>{phone}</p>
        </div>
        <div className="details-info">
          <p>Website</p>
          <a href={website}>www.apple.com</a>
        </div>
      </div>
    </div>
  );
};

export default SingleCompanyDetails;
