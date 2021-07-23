import React from 'react';
import {useState} from 'react';
import './Home.css';

function Home() {
  const API_KEY = process.env.REACT_APP_NAPSTER_API_KEY;
  const [genreData, setGenreData] = useState([]);
  if (!genreData.length) {
    console.log(genreData)
    let genres = [];
    // fetch genre images.
    fetch('https://api.napster.com/v2.2/genres?apikey=' + API_KEY)
    .then(function(response) {
      // Successful response :)
      console.log("success");
      return response.json(); 
    })
    .then(function(response) {
      console.log(response)
      response.genres.forEach(genre => {
        // don't need to fetch() the images.
        genres.push({
          genreName: genre.name,
          genreImageSrc: "https://api.napster.com/imageserver/images/" + genre.id + "/240x160.jpg"
        })
      })
      console.log(genres);
      /*
        Initially, the component will render without the genre images, because the API call
        is async. That means we need to re-render the component once the call finishes. I use
        useState() to update state and re-render the component with the genre images.
      */
      setGenreData(genres);
    })
    .catch(function(err) {
      // Error :(
      console.log("Error: unable to fetch genre data");
    });
  }
  let genreDOMElements = [];
  genreData.forEach(genre => {
    genreDOMElements.push(
      <div className="genre">
        <img src={genre.genreImageSrc} alt={"Image Representing " + genre.genreName} className="genre-image" />
        <span className="genre-image-description">{genre.genreName}</span>
      </div>
    )
  })
  return (
    <div className="Home">
      <div className="flex-column-container">
        {/* place navbar here */}
        <div id="discover-genres" className="flex-column-container">
          <h2>Discover Music</h2>
          <div id="genre-list" className="flex-row-container">
            {genreDOMElements}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;