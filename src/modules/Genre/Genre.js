import React, { Component } from 'react';
import { useState } from 'react';
import './Genre.css';
import PlayButton from '../PlayButton/PlayButton';

function Genre() {

  const API_KEY = process.env.REACT_APP_NAPSTER_API_KEY;
  const [genreDetailsData, setGenreDetailsData] = useState([]);
  const [songListData, setSongListData] = useState([]);
  // To get Genre Description:
  // Pass in genre ID -> genre API -> (genre) name, description
  // From genre API -> albumID for tracks API

  // From albums API -> released, label
  // From albums API -> links { image { href = images API }} for album image API

  // From albums images API -> 170 x 170 pixels image


  // For Song Album:
  // From albums API, use the API link to find tracks -> list of tracks each has: (song) name, previewURL

  // Hardcoded for now
  let genreID = 'g.115';
  // g.115- Pop
  // g.5 - Rock
  // g.33 - Alternative

  // Genre Description
  if(!genreDetailsData.length){
    console.log(genreDetailsData);
    let genreDetails = {
      genreImageSrc:null,
      genreName: null,
      albumIds: null,
      genreDescription: null,
    };


    let songList = [];

    fetch('https://api.napster.com/v2.2/genres/'+genreID+'?apikey='+API_KEY)
      .then(function (response) {

        console.log("Tracks API fetched success");
        return response.json();
      })
      .then(function(response){
        // console.log(response);

        genreDetails.genreName = response.genres[0].name;
        genreDetails.genreDescription = response.genres[0].description;

        // console.log(genreDetails);
      })
      .then(function(response){
        // console.log(response);
        genreDetails.genreImageSrc = "https://api.napster.com/imageserver/images/" + genreID + "/240x160.jpg";
        console.log(genreDetails);
        setGenreDetailsData([genreDetails]);
        return fetch("https://api.napster.com/v2.2/genres/" + genreID + "/tracks/top?apikey=" + API_KEY);
      })
      .then(function (response) {
        // Albums API successful response
        console.log("Top Tracks API fetched successfully :O");
        return response.json();

      })
      .then(function(response){
        console.log(response);
        let count = 1;
        response.tracks.forEach(track => {
          songList.push({
            albumIds: track.albumId,
            songImageSrc:"https://api.napster.com/imageserver/v2/albums/" + track.albumId + "/images/500x500.jpg",
            songName: track.name,
            trackIndex: count,
            trackPreviewSrc:track.previewURL
          })
          count++;
        })
        console.log(songList);
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
        <div className = "genre-name row">
          <p>{genre.genreName}</p>
        </div>
      )}
    );

    let genreDetailsDOMElement = [];
    genreDetailsData.forEach(genre => {
      console.log('updated genre details');
      genreDetailsDOMElement.push(
        <div className = "genre-details row">
          
          <img src = {genre.genreImageSrc} alt ={"Image Representing " + genre.genreName} className="image desc-col"/>
          <div className = "genre-description desc-col">
            <p>{genre.genreDescription}</p>
          </div>
        </div>
      )}
    );
    let songListDOMElement = [];
    songListData.forEach(track => { 
      console.log('updated song list');
      songListDOMElement.push(
        <div className="song row">
          <div className="song-image col">
            <img src = {track.songImageSrc} alt = {"Image Representing " + track.songName} className="image col"/>
          </div>
          <div className="play-button col">
            <PlayButton previewProp={track.trackPreviewSrc} />
          </div>
          <div className="song-name col">
            {track.trackIndex + '. ' + track.songName}
          </div>
        </div>
      )
    });
  
  
  return(
    // Change to ids
    <div className="Song">
      <h2 className= "genre-header">{genreNameDOMElement}</h2>
      
      <div className= "holder flex-row-item">
        <div className="song-list-container flex-row-container">
        <div className="song row">
          {genreDetailsDOMElement}
          </div>
        </div>
      </div>
      <div className="Song-album">
        <h2 className="album-header">Songs</h2>
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