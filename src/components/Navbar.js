import React from 'react';
import { useDispatch } from 'react-redux';
import { FaAngleLeft, FaCog, FaMicrophone } from 'react-icons/fa';
import { filter, checkTyping } from '../redux/companiesSlice';
import './navBar.css';

function Navbar() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(checkTyping(e.target.value));
    dispatch(filter(e.target.value));
  };
  return (
    <div className="navbar-container">
      <div className="nav-icons">
        <div className="date">
          <FaAngleLeft className="navcons-arrow" data-testid="navcons-arrow" />
          <p>2023</p>
        </div>
        <p className="logo1">MOST ACTIVE</p>
        <div className="set-micro">
          <FaCog className="navcons" data-testid="navcons-cog" />
          <FaMicrophone className="navcons" data-testid="navcons-microphone" />
        </div>
      </div>
      <input className="search-input" onChange={handleChange} type="text" placeholder="SEARCH COMPANIES BY NAME" />
    </div>
  );
}

export default Navbar;
