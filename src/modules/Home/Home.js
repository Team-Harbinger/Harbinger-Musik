import React from 'react';
import {useState} from 'react';
import './Home.css';
import genreImages from '../../assets/genre_images/genreImages';

function Home() {
  const API_KEY = process.env.REACT_APP_NAPSTER_API_KEY;
  const [genreData, setGenreData] = useState([]);
  if (!genreData.length) {
    console.log(genreData);
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
          /** 
          *  genreName is what is displayed on the screen. genreShortcutName is used
          *  for the API call in Genre.js.
          */
          genreName: genre.name,
          genreShortcutName: genre.shortcut,
          genreID: genre.id,
          genreImageSrc: genreImages[genre.name]
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
        <a href={"/genre/" + genre.genreShortcutName}>
          <img src={genre.genreImageSrc} alt={"Image Representing " + genre.genreName} className="genre-image" />
          <span className="genre-image-description">{genre.genreName}</span>
        </a>
      </div>
    )
  });

  return (
    <div className="Home">
      <div className="flex-column-container">
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