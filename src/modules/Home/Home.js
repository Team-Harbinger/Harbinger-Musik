import React from 'react';
import {useState} from 'react';
import './Home.css';

function Home() {
  const API_KEY = process.env.REACT_APP_NAPSTER_API_KEY;
  const [genreData, setGenreData] = useState([]);
  if (!genreData.length) {
    console.log(genreData)
    let genres = [];
    //fetch genre images.
    fetch('https://api.napster.com/v2.2/genres?apikey=' + API_KEY)
    .then(function(response) {
      // Successful response :)
      console.log("success");
      return response.json(); 
    })
    .then(function(response) {
      console.log(response)
      response.genres.forEach(genre => {
        //don't need to api call the image?
        genres.push({
          genreName: genre.name,
          genreImageSrc: "https://api.napster.com/imageserver/images/" + genre.id + "/240x160.jpg"
        })
      })
      console.log(genres);
      setGenreData(genres);
    })
    .catch(function(err) {
      // Error :(
        console.log("Error: unable to fetch genre data");
    });
  }
  let genreDOMEles = [];
  genreData.forEach(genre => {
    genreDOMEles.push(
      <div className="genre" >
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
            {genreDOMEles}
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Home;