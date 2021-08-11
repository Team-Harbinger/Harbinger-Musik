import React from "react";
import { useState } from "react"; 
import styles from "./Searchbar.module.css";
import SearchIcon from "../../assets/searchicon.svg";

function Searchbar() {
  /**
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
      // we don't want user to submit empty string
      if (searchString === "") {
        // console.log("nothing in searchbar, don't search");
        e.preventDefault();
      }
    }
    else {
      if (e.key === "Enter" && searchString !== "") {
        // this method of changing the page seems to work with router
        window.location.href = "/search?query=" + searchString + "&type=track";
      }
    }
  }

  return (
    <div id={`${styles["search-container"]}`}>
      <input type="text" placeholder="" name="search" onChange={handleInputChange} onKeyPress={validateInput} value={searchString} />
        {
          /**  
          * In this case the href doesn't have to match the Router path exactly.
          * Anything after the /search can be found in the location prop that is passed
          * into the component that Router switches to after clicking the link, 
          * specifically, in props.location.search
          */
        }
        <a href={"/search?query=" + searchString + "&type=track"}  onClick={validateInput}>
          <button type="submit">
            <img src={SearchIcon} id={`${styles["search-icon"]}`} alt="search icon (click to search)" />
          </button>
        </a>
    </div>
  )
}

export default Searchbar;