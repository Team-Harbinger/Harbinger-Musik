import React from 'react';
import { useState } from 'react'; 
import './Searchbar.css';
import SearchIcon from '../../assets/searchicon.svg';

function Searchbar() {
  const [searchString, setSearchString] = useState("");

  function handleInputChange(e) {
    setSearchString(e.target.value)
  }

  return (
    <div className="search-container">
      <input type="text" placeholder="" name="search" onChange={(handleInputChange)} value={searchString} />
        <a href={"/search?query=" + searchString}>
          <button type="submit">
            <img src={SearchIcon} className="search-icon" alt="search icon (click to search)" />
          </button>
        </a>
    </div>
  )
}

export default Searchbar;