import React from 'react';
import { useState } from 'react'; 
import './Searchbar.css';
import SearchIcon from '../../assets/searchicon.svg';

function Searchbar() {
  const [searchString, setSearchString] = useState("");

  function handleInputChange(e) {
    setSearchString(e.target.value);
  }

  function validateInput(e) {
    if (searchString === "") {
      console.log("nothing in searchbar, don't search");
      e.preventDefault();
    }
  }

  return (
    <div className="search-container">
      <input type="text" placeholder="" name="search" onChange={handleInputChange} value={searchString} />
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
            <img src={SearchIcon} className="search-icon" alt="search icon (click to search)" />
          </button>
        </a>
    </div>
  )
}

export default Searchbar;