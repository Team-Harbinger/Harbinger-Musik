import React from "react";
import { useState, useEffect, useRef } from "react"; 
import styles from "./Searchbar.module.css";
import SearchIcon from "../../assets/searchicon.svg";

function Searchbar(props) {
  const searchbarRef = useRef();
  useEffect(() => {
    function switchToMobileStyling() {
      searchbarRef.current.classList.remove(styles["search-container-nonmobile"]);
      searchbarRef.current.classList.add(styles["search-container-mobile"]);
    }

    function switchToPCStyling() {
      searchbarRef.current.classList.remove(styles["search-container-mobile"]);
      searchbarRef.current.classList.add(styles["search-container-nonmobile"]);
    }

    function checkScreenSizeOnPageLoad(mediaQueryAboveVal) {
      console.log("check initlal page load");
      if (mediaQueryAboveVal.matches) {
        console.log('In searchbar.js: Screen size > 700');
        switchToPCStyling();
      }
      else {
        console.log('In searchbar.js: Screen size <= 700');
        switchToMobileStyling();
      }
    } 

    function handleTabletChange(e) {
      if (e.matches) {
        console.log('In searchbar.js: Screen size < 700');
        switchToMobileStyling();
      }
    }

    function handlePCChange(e) {
      if (e.matches) {
        console.log('In searchbar.js: Screen size > 700');
        switchToPCStyling();
      }
    }

    /* Media Queries implemented with JS */
    const mediaQueryBelow700 = window.matchMedia('(max-width: 700px)');

    mediaQueryBelow700.addEventListener('change', handleTabletChange);

    const mediaQueryAbove700 = window.matchMedia('(min-width: 701px)');

    mediaQueryAbove700.addEventListener('change', handlePCChange);

    // need to check if you need to resize on page load
    checkScreenSizeOnPageLoad(mediaQueryAbove700);
  }, []);
  /*
  * Holds the user's input. Updates every time the input changes 
  * and the input element's value is set to this (controlled component)
  */ 
  const [searchString, setSearchString] = useState("");

  function handleInputChange(e) {
    setSearchString(e.target.value);
  }

  // runs when enter key is pressed or search icon is clicked
  function validateInput(e) {
    // check whether event was a keypress or a click. 
    if (e.key === undefined) {
      console.log("click");
      // we don't want user to submit empty string
      if (searchString === "") {
        console.log("nothing in searchbar, don't search");
        e.preventDefault();
      }
      console.log("submit");
    }
    else {
      if (e.key === "Enter" && searchString !== "") {
        // this method of changing the page seems to work with router
        window.location.href = props.APP_BASENAME + "/search?query=" + searchString + "&type=track";
      }
    }
  }

  return (
    <div className={`${styles["search-container"]}`} ref={searchbarRef}>
      <input type="text" placeholder="Search for a song" name="search" onChange={handleInputChange} onKeyPress={validateInput} value={searchString} />
        {
          /* 
            Appparently, when you are using Link components, and you are on a route and click 
            on a link that goes to the same route, there is no re-render. This is a problem
            for the search page since we can re-search something on that page and the results
            won't show up. The props passed in are different, but apparently it doesn't care
            about that. This problem doesn't occur with <a> tags. I will keep <a> tag until I 
            find a workaround.
          */
        }

        {/* <Link to={"/search?query=" + searchString + "&type=track"}>
          <button type="submit" onClick={validateInput}>
            <img src={SearchIcon} id={`${styles["search-icon"]}`} alt="search icon (click to search)" />
          </button>
        </Link> */}

        {
          /*  
          * In this case the href doesn't have to match the Router path exactly.
          * Anything after the /search can be found in the location prop that is passed
          * into the component that Router switches to after clicking the link, 
          * specifically, in props.location.search
          */
        }
        <a href={props.APP_BASENAME + "/search?query=" + searchString + "&type=track"} onClick={validateInput}>
          <button type="submit">
            <img src={SearchIcon} id={`${styles["search-icon"]}`} alt="search icon (click to search)" />
          </button>
        </a>
    </div>
  )
}

export default Searchbar;