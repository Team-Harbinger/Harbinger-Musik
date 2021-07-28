import React from 'react';
import { useState } from 'react'; 

import SearchIcon from '../../assets/searchicon.svg';
function Searchbar() {
  const [searchString, setSearchString] = useState("");
  return (
    <div className="search-container">
      <input type="text" placeholder="" name="search"></input>
        <button type="submit">
          <img src={SearchIcon} className="Search-Icon" width="40" height="40" alt="search icon (click to search)" />
        </button>
    </div>
  )
}

export default Searchbar;