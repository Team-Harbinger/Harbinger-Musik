import React from "react";
import { MenuItems } from "./MenuItems";
import styles from "./Navbar.module.css";
import AppLogo from "../../assets/applogo.svg";
import Searchbar from "../Searchbar/Searchbar.js";
import { Link } from 'react-router-dom';
import MenuIcon from "../../assets/icons8-menu.svg";
import CloseIcon from "../../assets/icons8-close.svg";
import { useRef, useEffect } from "react";

function Navbar(props) {
  // references to navbar dom elements
  const toggleNavbarButtonRef = useRef();
  const navbarItemsRef = useRef();
  const navbarClickableLinksRef = useRef();
  const navbarAppLogoRef = useRef();
  // booleans
  const isMobileNavbarExpanded = useRef(false);
  const isMobileLayoutActive = useRef(false);
  // layout switch breakpoint in variable so it can easily be changed
  const layoutSwitchBreakpoint = useRef(950);
  useEffect(() => {
    /* 
      copy of this ref so its event listener can still be removed in the cleanup function 
      after the original ref is destroyed after unmounting?
    */
    const toggleNavbarButtonRefCpy = toggleNavbarButtonRef;
    function toggleMobileNavbar() {
      
      if (isMobileNavbarExpanded.current) {
        // collapse navbar
        navbarItemsRef.current.classList.remove(styles["navbar-items-mobile-expanded"]);
        // change toggle icon
        toggleNavbarButtonRef.current.childNodes[0].src = MenuIcon;
        /* 
          We want a collapsing animation which by-button has but media-query doesn't so we remove it.
        */
        navbarItemsRef.current.classList.remove(styles["navbar-items-mobile-collapsed-by-media-query"]);
        navbarItemsRef.current.classList.add(styles["navbar-items-mobile-collapsed-by-button"]);
        // update state
        isMobileNavbarExpanded.current = false;

      }
      else {
        // expand navbar
        navbarItemsRef.current.classList.remove(styles["navbar-items-mobile-collapsed-by-button"]);
        // change toggle icon
        toggleNavbarButtonRef.current.childNodes[0].src = CloseIcon;
        /* 
          We want a collapsing animation which by-button has but media-query doesn't so we remove it.
        */
        navbarItemsRef.current.classList.remove(styles["navbar-items-mobile-collapsed-by-media-query"]);
        navbarItemsRef.current.classList.add(styles["navbar-items-mobile-expanded"]);
        // update state
        isMobileNavbarExpanded.current = true;
      }
    }

    function switchToMobileStyling() {
      console.log("switching 2 mobile");
      navbarItemsRef.current.classList.remove(styles["navbar-items-nonmobile"]);
      navbarItemsRef.current.classList.add(styles["navbar-items-mobile"]);
      /*
        This class hides the navbar, same as navbar-items-mobile-collapsed-by-by-button, but with 
        no animation, otherwise it looks really bad. More detail in the stylesheet comments.

        This class is only added once, when we switch to mobile layout, then removed on button click/switching
        to nonmobile.
      */
      navbarItemsRef.current.classList.add(styles["navbar-items-mobile-collapsed-by-media-query"]);

      toggleNavbarButtonRef.current.classList.remove(styles["hidden"]);

      navbarClickableLinksRef.current.classList.remove(styles["navbar-clickable-links-nonmobile"]);
      navbarClickableLinksRef.current.classList.add(styles["navbar-clickable-links-mobile"]);

      // mobile navbar should be in a state of collapsed when switching layouts
      isMobileNavbarExpanded.current = false;

      // change toggle icon
      toggleNavbarButtonRef.current.childNodes[0].src = MenuIcon;
    }

    function switchToPCStyling() {
      console.log("switching 2 pc");
      // remove any mobile styles.
      navbarItemsRef.current.classList.remove(styles["navbar-items-mobile"]);
      navbarItemsRef.current.classList.remove(styles["navbar-items-mobile-expanded"]);
      navbarItemsRef.current.classList.remove(styles["navbar-items-mobile-collapsed-by-button"]);
      navbarItemsRef.current.classList.remove(styles["navbar-items-mobile-collapsed-by-media-query"]);
      navbarItemsRef.current.classList.add(styles["navbar-items-nonmobile"]);

      toggleNavbarButtonRef.current.classList.add(styles["hidden"]);

      navbarClickableLinksRef.current.classList.remove(styles["navbar-clickable-links-mobile"]);
      navbarClickableLinksRef.current.classList.add(styles["navbar-clickable-links-nonmobile"]);

      // mobile navbar should be in a state of collapsed when switching layouts
      isMobileNavbarExpanded.current = false;

       // change toggle icon
      toggleNavbarButtonRef.current.childNodes[0].src = MenuIcon;
    }

    function checkScreenSizeOnPageLoad() {
      // console.log("check initlal page load");
      if (window.innerWidth > layoutSwitchBreakpoint.current) {
        // console.log('Screen size > 900');
        isMobileLayoutActive.current = false;
        switchToPCStyling();
      }
      else {
        // console.log('Screen size <= 900');
        isMobileLayoutActive.current = true;
        switchToMobileStyling();
      }
    } 

    /* Media Queries implemented with JS */
    /*
      two ways of checking window size: window.matchMedia and window.resize event.
      matchMedia only fires when the screen size passes a certain point. resize event
      fires for any resize. So matchMedia could have better performance than resize.

      However for some reason when I use matchMedia, when in chrome dev tools and navbar 
      is in mobile layout, I exit chrome dev tools, the navbar stays in mobile layout even if
      the screen is nonmobile resolution. I assume the resize caused by closing chrome dev tools 
      doesn't fire the change event? resize event seems to catch this though.

      Since the function called on resize will only do a lot of work when it passes the breakpoint
      (similar to matchMedia so not too time costly) I switched to resize to get rid of the bug and 
      simplify the code.
    */
    // expands the navbar when on mobile view
    toggleNavbarButtonRef.current.addEventListener('click', toggleMobileNavbar);

    function checkIfShouldSwitchToMobileStyling() {
      // console.log(window.innerWidth, window.innerHeight);
      // above 900 and not already in PC styling
      if (window.innerWidth > layoutSwitchBreakpoint.current && isMobileLayoutActive.current) {
        isMobileLayoutActive.current = false;
        switchToPCStyling();
      }
      // below 900 and not already in mobile styling
      if (window.innerWidth <= layoutSwitchBreakpoint.current && !isMobileLayoutActive.current) {
        isMobileLayoutActive.current = true;
        switchToMobileStyling();
      }
    }
    // need to check if you need to resize on page load
    checkScreenSizeOnPageLoad();
    window.addEventListener('resize', checkIfShouldSwitchToMobileStyling);

    return () => {
      window.removeEventListener('resize', checkIfShouldSwitchToMobileStyling);
      toggleNavbarButtonRefCpy.current.removeEventListener('click', toggleMobileNavbar);
    }
  }, []);

  return (
    <div>
      <div className={styles["navbar"]}>
        <div className={`${styles["navbar-items"]}`} ref={navbarItemsRef}>
          <nav className={styles["navbar-clickable-links"]} ref={navbarClickableLinksRef}>
            <ul>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.url} className={styles[item.cName]}>
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <Searchbar APP_BASENAME={props.APP_BASENAME} />
        </div>
        {/* logo is not in navbar-items because it stays in the same position, mobile or nonmobile. */}
        <img src={AppLogo} className={styles["navbar-app-logo"]} ref={navbarAppLogoRef} alt="Harbinger Musik Logo" width="70" height="70" />
        <button id={styles["dropdown-menu-button"]} ref={toggleNavbarButtonRef}>
          <img src={MenuIcon} alt="Toggle Mobile Navbar"/>
        </button>
      </div>
      {/* Removing the text inside the div messes up the navbar position, don't know why */}
      <div className={styles["navbar-margin"]}>Margin</div>
    </div>
  )
}

export default Navbar;