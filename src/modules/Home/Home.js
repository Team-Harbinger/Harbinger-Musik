import React from "react";
import {useState} from "react";
import styles from "./Home.module.css";
import genreImages from "../../assets/genre_images/genreImages";
import asyncFetchGenreData from "./asyncFetchGenreData.js";
import { Link } from "react-router-dom";

function Home(props) {
  const [genreData, setGenreData] = useState([]);
  if (!genreData.length) {
    // console.log(genreData);
    let genres = [];
    // fetch genre images.
    asyncFetchGenreData(props.NAPSTER_API_KEY).then(fetchedGenreData => {
      // console.log(fetchedGenreData);
      fetchedGenreData.genres.forEach(genre => {
        genres.push({
          /* 
          * genreName is what is displayed on the screen. genreShortcutName is used
          * for the API call in Genre.js.
          */
          genreName: genre.name,
          genreShortcutName: genre.shortcut,
          genreID: genre.id,
          genreImageSrc: genreImages[genre.name]
        })
      })
      // console.log(genres);
      /*
      * Initially, the component will render without the genre images, because the API call
      * is async. That means we need to re-render the component once the call finishes. I use
      * useState() to update state and re-render the component with the genre images.
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
      <div className={`${styles["genre"]}`} key={genre.genreName}>
        <Link to={"/genre/" + genre.genreShortcutName} >
          <img src={genre.genreImageSrc} alt={"Image Representing " + genre.genreName} className={`${styles["genre-image"]}`} />
          <span className={`${styles["genre-image-description"]}`}>{genre.genreName}</span>
        </Link>
      </div>
    )
  });

  return (
    <div id={`${styles["home"]}`}>
      <div id={`${styles["discover-genres"]}`} className={`${styles["flex-column-container"]}`}>
        <h2>Discover Music</h2>
        <div id={`${styles["genre-list"]}`} className={`${styles["flex-row-container"]}`}>
          {genreDOMElements}
        </div>
      </div>
    </div>
  );
}

export default Home;