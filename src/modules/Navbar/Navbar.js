import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import AppLogo from '../../assets/applogo.svg';
import SearchIcon from '../../assets/searchicon.svg';

class Navbar extends Component {
  state = { clicked: false }
  render() {
    return (
      <nav className="NavbarItems">
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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

        <h1 className="navbar-logo">
          <img src={AppLogo} className="App-logo" alt="Harbinger Musik Logo" width="70" height="70" />
          <i className="fab fa-react">
          </i>
        </h1>

        <div class="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="" name="search"></input>
            <button type="submit"><img src={SearchIcon} className="Search-Icon" width="40" height="40" />
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar