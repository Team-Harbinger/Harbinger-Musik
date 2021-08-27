import React from "react";
import { MenuItems } from "./MenuItems";
import styles from "./Navbar.module.css";
import AppLogo from "../../assets/applogo.svg";
import Searchbar from "../Searchbar/Searchbar.js";
// import { Link } from 'react-router-dom';

function Navbar() {
  const APP_BASENAME = "/Harbinger-Musik";
  return (
    <div>
      <nav className={styles["navbar-items"]}>
        <ul className={styles["nav-menu"]}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                {/* <span className={item.cName}>
                  <Link to={item.url} >
                    {item.title}
                  </Link>
                </span> */}
                <a className={styles[item.cName]} href={APP_BASENAME + item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>

        <img src={AppLogo} className={styles["navbar-logo"]} alt="Harbinger Musik Logo" width="70" height="70" />

        <Searchbar />
      </nav>
      <div className={styles["navbar-margin"]}>Margin</div>
    </div>
  )
}

export default Navbar;