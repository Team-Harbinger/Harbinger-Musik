import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import AppLogo from '../../assets/applogo.svg';
import SearchIcon from '../../assets/searchicon.svg';

class Navbar extends Component {
  render() {
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

        <div className="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="" name="search"></input>
            <button type="submit">
              <img src={SearchIcon} className="Search-Icon" width="40" height="40" />
            </button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar