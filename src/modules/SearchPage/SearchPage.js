import React from 'react';
function SearchPage(props) {
  // props.location
  return (
    <p>
      <strong>Query Params: </strong>
      {props.location.search}
    </p>
    // <div className="Home">
    //   <div className="flex-column-container">
    //     <div id="discover-genres" className="flex-column-container">
    //       <h2>Discover Music</h2>
    //       <div id="genre-list" className="flex-row-container">
    //         {genreDOMElements}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default SearchPage;