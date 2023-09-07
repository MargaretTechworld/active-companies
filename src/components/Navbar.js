import React from 'react';
import { useDispatch } from 'react-redux';
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
      <p className="logo1">MOST ACTIVE</p>
      <input className="search-input" onChange={handleChange} type="text" placeholder="SEARCH COMPANIES BY NAME" />
    </div>
  );
}

export default Navbar;
