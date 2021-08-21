import React from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import AppLogo from '../../assets/applogo.svg';
import Searchbar from '../Searchbar/Searchbar.js';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="NavbarItems">
        <ul className='nav-menu'>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <span className={item.cName}>
                  <Link to={item.url} >
                    {item.title}
                  </Link>
                </span>
              </li>
            )
          })}
        </ul>

        <img src={AppLogo} className="navbar-logo" alt="Harbinger Musik Logo" width="70" height="70" />

        <Searchbar />
      </nav>
      <div className="navbar-margin">Margin</div>
    </div>
  )
}

export default Navbar;