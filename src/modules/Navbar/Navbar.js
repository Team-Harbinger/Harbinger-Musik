import React from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import AppLogo from '../../assets/applogo.svg';
import Searchbar from './Searchbar.js';

function Navbar() {
  return (
    <nav className="NavbarItems">
      <ul className='nav-menu'>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>

      <img src={AppLogo} className="navbar-logo" alt="Harbinger Musik Logo" width="70" height="70" />
      
      <Searchbar />
    </nav>
  )
}

export default Navbar;