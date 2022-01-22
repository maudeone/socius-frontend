import React from 'react';
import logo from '../socius.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <img src={logo} alt="logo" />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color: 'white'}}/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Who We Serve</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Solutions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Why Socius</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link phone-number" href="#">888-876-2487</a>
          </li>
          <li className="nav-item">
            <button className="nav-button"type="button"> Lets Talk</button>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;
