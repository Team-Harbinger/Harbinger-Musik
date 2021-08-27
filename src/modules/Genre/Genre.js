import React from 'react';
import { useState } from 'react';
import styles from './Genre.module.css';
import AudioPlayer from '../AudioPlayer/AudioPlayer.js';
import genreImages from '../../assets/genre_images/genreImages';
// import { Link } from 'react-router-dom';

function stripHtml(html) {
  let tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function Genre(props) {

  const API_KEY = process.env.REACT_APP_NAPSTER_API_KEY;
  const APP_BASENAME = "/Harbinger-Musik";

  const [genreDetailsData, setGenreDetailsData] = useState([]);
  const [songListData, setSongListData] = useState([]);
  const [currentAudioSrc, setCurrentAudioSrc] = useState(null);

  function updateCurrentAudioSrc(newAudioSrc) {
    setCurrentAudioSrc(newAudioSrc);
  }

  // To get Genre Description:
  // Pass in genre ID -> genre API -> (genre) name, description

  /**
  * Some api endpoints work using shortcut name, but some don't.
  * All work with the genreID, so we will use that for all calls
  * after the first one (we have to use the shortcut name for the 
  * first call b/c that is the only thing passed in the url by Home.js.
  * We can get the id from the first call then use it for subsequent calls
  */

  const genreShortcutName = props.location.pathname.split("/")[2];
  let genreID = null;

  // Genre Description
  if (!genreDetailsData.length) {
    let genreDetails = {
      genreImageSrc: null,
      genreName: null,
      albumIds: null,
      genreDescription: null,
    };
    let songList = [];

    fetch('https://api.napster.com/v2.2/genres/' + genreShortcutName + '?apikey=' + API_KEY)
      .then(function (response) {
        console.log("Tracks API fetched success");
        return response.json();
      })
      .then(function (response) {
        // assigning the id to use in subsequent api calls
        genreID = response.genres[0].id;
        genreDetails.genreName = response.genres[0].name;
        genreDetails.genreDescription = response.genres[0].description;
        // console.log(genreDetails);
      })
      .then(function (response) {
        genreDetails.genreImageSrc = genreImages[genreDetails.genreName];
        setGenreDetailsData([genreDetails]);
        return fetch("https://api.napster.com/v2.2/genres/" + genreID + "/tracks/top?apikey=" + API_KEY);
      })
      .then(function (response) {
        // Albums API successful response
        console.log("Top Tracks API fetched successfully :O");
        return response.json();
      })
      .then(function (response) {
        let count = 1;
        response.tracks.forEach(track => {
          songList.push({
            albumIds: track.albumId,
            songImageSrc: "https://api.napster.com/imageserver/v2/albums/" + track.albumId + "/images/500x500.jpg",
            songName: track.name,
            artistName: track.artistName,
            trackID: track.id,
            trackShortcut: track.shortcut,
            trackIndex: count,
            trackPreviewSrc: track.previewURL
          })
          count++;
        })
        console.log("songlist: :", songList);
        setSongListData(songList);

      })
      .catch(function (err) {
        // Error fetching image from API
        console.log(err);
      });
  }

  let genreNameDOMElement = [];
  genreDetailsData.forEach(genre => {
    genreNameDOMElement.push(
      <div className={`${styles["genre-name"]} ${styles["row"]}`}>
        <p>{genre.genreName}</p>
      </div>
    )
  }
  );

  let genreDetailsDOMElement = [];
  genreDetailsData.forEach(genre => {
    console.log('updated genre details');
    genreDetailsDOMElement.push(
      <div className={`${styles["genre-details"]} ${styles["row"]}`}>
        <img src={genre.genreImageSrc} alt={"Image Representing " + genre.genreName} className={`${styles["image-col"]}`} />
        <div className={`${styles["genre-description"]} ${styles["desc-col"]}`}>
          <p>{stripHtml(genre.genreDescription)}</p>
        </div>
      </div>
    )
  }
  );

  let songListDOMElement = [];
  songListData.forEach(track => {
    console.log('updated song list');
    songListDOMElement.push(
      <div className={`${styles["song"]} ${styles["row"]}`}>
        <div className={`${styles["song-image"]} ${styles["column"]}`}>
          <div className={`${styles["container"]}`}>
            <img src={track.songImageSrc} alt={"Image Representing " + track.songName} className={`${styles["image"]} ${styles["column"]}`} />
            <div className={`${styles["overlay"]}`}>
              <div className={`${styles["icon"]}`}>
                <AudioPlayer 
                  previewProp={track.trackPreviewSrc} 
                  onClickHandler={updateCurrentAudioSrc} 
                  audioPlayerStatus={track.trackPreviewSrc === currentAudioSrc ? 1 : 0} 
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles["song-name"]} ${styles["column"]}`}>
          <div className={`${styles["track-index"]}`}>{track.trackIndex + '.'}</div>
          <div className={`${styles["track-name-and-artist"]}`}>
            {/* <span className="link-to-track">
              <Link to={"/song/" + track.trackShortcut}>
                {track.songName}
              </Link>
            </span> */}
            <a href={APP_BASENAME + "/song/" + track.trackShortcut} className={`${styles["link-to-track"]}`} >
              {track.songName}
            </a>
            <div className={`${styles["artist-name"]}`}>
              {track.artistName}
            </div>
          </div>
        </div>
      </div>
    )
  });

  return (
    // Change to ids
    <div className={`${styles["Song"]}`}>
      <h2 className={`${styles["genre-header"]}`}>{genreNameDOMElement}</h2>
      <div className={`${styles["holder"]} ${styles["flex-row-item"]}`}>
        <div className={`${styles["song"]} ${styles["flex-row-item"]}`}>
          {genreDetailsDOMElement}
        </div>
      </div>
      <div className={`${styles["Song-album"]}`}>
        <h2 className={`${styles["album-header"]}`}>Top Songs</h2>
        <div className={`${styles["song-list-container"]} ${styles["flex-row-container"]}`}>
          <div className={`${styles["flex-row-item"]}`}></div>
          <div className={`${styles["song-list"]} ${styles["flex-row-item"]}`}>
            {songListDOMElement}
          </div>
          <div className={`${styles["flex-row-item"]}`}></div>
        </div>
      </div>
    </div>
  );
}

export default Genre;