import React, { Component } from 'react';
import { useState } from 'react';
import './Genre.css';
import PlayButton from '../PlayButton/PlayButton';

function stripHtml(html) {
  let tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function Genre(props) {

  const API_KEY = process.env.REACT_APP_NAPSTER_API_KEY;
  const [genreDetailsData, setGenreDetailsData] = useState([]);
  const [songListData, setSongListData] = useState([]);

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
        genreDetails.genreImageSrc = "https://api.napster.com/imageserver/images/" + genreID + "/240x160.jpg";
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
      <div className="genre-name row">
        <p>{genre.genreName}</p>
      </div>
    )
  }
  );

  let genreDetailsDOMElement = [];
  genreDetailsData.forEach(genre => {
    console.log('updated genre details');
    genreDetailsDOMElement.push(
      <div className="genre-details row">
        <img src={genre.genreImageSrc} alt={"Image Representing " + genre.genreName} className="image-col" />
        <div className="genre-description desc-col">
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
      <div className="song row">
        <div className="song-image col">
          <div className="container">
            <img src={track.songImageSrc} alt={"Image Representing " + track.songName} className="image col" />
            <div className="overlay">
              <div className="icon">
                <PlayButton previewProp={track.trackPreviewSrc} />
              </div>
            </div>
          </div>
        </div>
        <div className="song-name col">
          <span>{track.trackIndex + '. '}</span>
          <a href={"/song/" + track.trackID}>{track.songName}
          </a>
          <div className="artist-name list-col">
            {track.artistName}
          </div>
        </div>
      </div>
    )
  });

  return (
    // Change to ids
    <div className="Song">
      <h2 className="genre-header">{genreNameDOMElement}</h2>
      <div className="holder flex-row-item">        
          <div className="song flex-row-item">
            {genreDetailsDOMElement}
        </div>
      </div>
      <div className="Song-album">
        <h2 className="album-header">Top Songs</h2>
        <div className="song-list-container flex-row-container">
          <div className="flex-row-item"></div>
          <div className="song-list flex-row-item">
            {songListDOMElement}
          </div>
          <div className="flex-row-item"></div>
        </div>
      </div>
    </div>
  );
}

export default Genre;