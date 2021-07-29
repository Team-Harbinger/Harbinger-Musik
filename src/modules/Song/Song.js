import React from 'react';
import { useState } from 'react';
import './Song.css';

function Song() {

  const API_KEY = process.env.REACT_APP_NAPSTER_API_KEY;
  const [songData, setSongData] = useState([]);


  // For Song Details:
  // Pass in track ID -> tracks API -> (song) name, artistName
  // From tracks API -> albumID for albums API

  // From albums API -> released, label
  // From albums API -> links { image { href = images API }} for album image API

  // From albums images API -> 170 x 170 pixels image


  // For Song Album:
  // From albums API, search for tracks -> list of tracks each has: (song) name, previewURL

  // Song Details
  if (!songData.length) {

    console.log(songData);
    let songDetails =  {
      songImageSrc: null,
      songName: null,
      artistName: null,
      released: null,
      label: null,
    };

    // Hardcoded for now
    let trackID = 'tra.5156528';

    // fetch track using track ID.
    fetch('http://api.napster.com/v2.2/tracks/'+ trackID + '?apikey=' + API_KEY)
      .then(function (response) {
        // Track API successful response
        console.log("Track API fetched successfully");
        return response.json();
      })
      .then(function (response) {
        console.log(response);

        songDetails.songName = response.tracks[0].name;
        songDetails.artistName = response.tracks[0].artistName;

        console.log(songDetails);

        // Fetch from albums API
        fetch('https://api.napster.com/v2.2/albums/' + response.tracks[0].albumId + '?apikey=' + API_KEY)
          .then(function (response) {
            // Albums API successful response
            console.log("Albums API fetched successfully");
            return response.json();
          })
          .then(function (response) {
            console.log(response);

            songDetails.released = response.albums[0].released;
            songDetails.label = response.albums[0].label;

            console.log(songDetails);

            console.log(response.albums[0].links.images.href);

            // Fetch data from (albums) images API
            fetch(response.albums[0].links.images.href + '?apikey=' +  API_KEY)
              .then(function (response) {
                // (Albums) images API successful response
                console.log("Images API fetched successfully");
                return response.json();
              })
              .then(function (response) {
                console.log(response);

                songDetails.songImageSrc = response.images[0].url;

                console.log(songDetails);
              })
              .catch(function (err) {
                // Error fetching image from album API
                console.log("Error: unable to fetch albums API's image");
              });
          })
          .catch(function (err) {
            // Error fetching albums API data
            console.log("Error: unable to fetch albums API data");
          });

          setSongData([songDetails]);
      })
      .catch(function (err) {
        // Error fetching tracks API data
        console.log("Error: unable to fetch tracks API data");
      });
  }

  let songDetailsDOMElement = [];
  songData.forEach(song => {
    songDetailsDOMElement.push(
      <div className="Song-details row">
        <img src={song.songImageSrc} alt={"Image Representing " + song.songName} className="image col" />
        <div className="song-info col">
          <p>
            SONG<br />
            {song.songName}<br />
            {song.artistName}<br />
            Released: {song.released}<br />
            Label: {song.label}
          </p>
        </div>
      </div>
    )}
  );

  return(
    // Change to ids
    <div className="Song">

      {songDetailsDOMElement}

      <div className="Song-album">
        <h2 className="album-header">Songs</h2>
        <div className="song-list-container flex-row-container">
          <div className="flex-row-item"></div>
          <div className="song-list flex-row-item">
          
            <div className="song row">
              <div className="play-button col">
                <div className="play-button-image">Play Button Here</div>
                <div className="powered">Powered by Napster</div>
              </div>
              <div className="song-name col">1. Levitating (feat. DaBaby)</div>
            </div>
            
            <div className="song row">
              <div className="play-button col">
                <div className="play-button-image">Play Button Here</div>
                <div className="powered">Powered by Napster</div>
              </div>
              <div className="song-name col">1. Levitating (feat. DaBaby)</div>
            </div>

            <div className="song row">
              <div className="play-button col">
                <div className="play-button-image">Play Button Here</div>
                <div className="powered">Powered by Napster</div>
              </div>
              <div className="song-name col">1. Levitating (feat. DaBaby)</div>
            </div>
            
          </div>
          <div className="flex-row-item"></div>
        </div>
      </div>

    </div>
  );
}

export default Song;