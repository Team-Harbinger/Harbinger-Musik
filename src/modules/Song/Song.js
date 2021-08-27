import React from 'react';
import { useState, useRef } from 'react';
import styles from './Song.module.css';
import AudioPlayer from '../AudioPlayer/AudioPlayer.js';
import LoadingImage from '../../assets/song-details-album-image-placeholder.gif';
import * as apiCall from './asyncFetchSongPageData.js';

function Song(props) {

  const API_KEY = process.env.REACT_APP_NAPSTER_API_KEY;
  const [songDetailsData, setSongDetailsData] = useState({ actualSongDetailsData: [], isSongDetailsDataRetrieved: false });
  const [songListData, setSongListData] = useState({ actualSongListData: [], isSongListDataRetrieved: false });
  // const [audioPlayer, setAudioPlayer] = useState({audioObject: new Audio(), currentAudioSrc: null});
  const currentAudioSrc = useRef(null);
  /* 
    For Song Details:
    Pass in track ID -> tracks API -> (song) name, artistName
    From tracks API -> albumID for albums API

    From albums API -> released, label
    From albums API -> links { image { href = images API }} for album image API

    From albums images API -> 170 x 170 pixels image
  */

  /*
    normally, need to set state here to re-render the play buttons, but a setState is
    already done when changing the song info to reflect the current playing song
  */

  function updateCurrentAudioSrc(newAudioSrc) {
    currentAudioSrc.current = newAudioSrc;
  }
  
  /*
    For Song Album:
    From albums API, use the API link to find tracks -> list of tracks each has: (song) name, previewURL
  */

  /*
  * pathname format: /song/trackShortcut
  * Must get trackShortcut by itself
  */
  const trackShortcut = props.location.pathname.slice(6, props.location.pathname.length);
  //console.log(trackShortcut);

  /* 
    tra.327023393 - Kamikaze Eminem
    tra.549084779 - Astronaut
    tra.459083355 - Body Like A Back Road by Sam Hunt
    tra.524675774 - RAAAAAAAAAAAAAAAAUUUUUUUL
    WARNING: AUDIO DOES NOT PLAY FOR 50 CENT
    tra.10381859 - Into/ 50 Cent / The Massacre by 50 Cent
  */

  let songDetails = {
    songImageSrc: null,
    songName: null,
    artistName: null,
    released: null,
    label: null,
    tracks: null,
  };

  /* 
    The first time this is called is when the user first loads the page
    After that, any time the user clicks on a play button, this would
    be called 
  */
  async function songDetailsAPICalls(trackShortcut) {

    let albumHref;

    // fetch track using track shortcut (ID works too but we want the shortcut in the URL).
    await apiCall.asyncFetchTrackData(trackShortcut, API_KEY).then(response => {
      //console.log(response);

      songDetails.songName = response.tracks[0].name;
      songDetails.artistName = response.tracks[0].artistName;

      //console.log(songDetails);

      // Fetch from albums API
      return apiCall.asyncFetchAlbumsData(response.tracks[0].albumId, API_KEY);
    })
    .then(function (response) {
      //console.log(response);

      songDetails.released = (new Date(response.albums[0].released)).toDateString();
      songDetails.label = response.albums[0].label;
      songDetails.tracks = response.albums[0].links.tracks.href + '?apikey=' + API_KEY;

      //console.log(songDetails);

      // Fetch data from (albums) images API
      albumHref = response.albums[0].links.images.href + "?apikey=" + API_KEY;
    })

    return apiCall.asyncFetchDataFromLink(albumHref);
  }
  
  // Song Details
  if (!songDetailsData.isSongDetailsDataRetrieved) {

    //console.log(songDetailsData);
    let songList = [];

    songDetailsAPICalls(trackShortcut)
      .then(function (response) {
        console.log(response);

        songDetails.songImageSrc = response.images[0].url;

        //console.log(songDetails);
        setSongDetailsData({ actualSongDetailsData: [songDetails], isSongDetailsDataRetrieved: true });

        // Fetch the list of tracks now
        return apiCall.asyncFetchDataFromLink(songDetails.tracks);
      })
      .then(function (response) {
        // For every track in an album 
        // create an object and push on to songList array
        response.tracks.forEach(track => {
          songList.push({
            trackName: track.name,
            trackIndex: track.index,
            trackPreviewSrc: track.previewURL,
            trackShortcut: track.shortcut,
          })
        });
        //console.log("SongList:");
        //console.log(songList);
        setSongListData({ actualSongListData: songList, isSongListDataRetrieved: true });
      })
      .catch(function (err) {
        // Error fetching image from API
        console.log(err);
      });
  }

  let songDetailsDOMElement = [];
  if (songDetailsData.isSongDetailsDataRetrieved && songDetailsData.actualSongDetailsData.length) {
    console.log('added song details');
    songDetailsData.actualSongDetailsData.forEach(song => {
      songDetailsDOMElement.push(
        <div className={`${styles["Song-details"]} ${styles["row"]}`}>
          <img src={song.songImageSrc} alt={"Image Representing " + song.songName} className={`${styles["image"]} ${styles["col"]}`} />
          <div className={`${styles["song-info"]} ${styles["col"]}`}>
            <p>SONG</p>
            <p>{song.songName}</p>
            <p>{song.artistName}</p>
            <p>Released: {song.released}</p>
            <p>Label: {song.label}</p>
          </div>
        </div>
      )
    }
    );
  }

  // Updates song details to the song
  const updateSongDetails = (shortcut) => {
    console.log("updateSongDetails(" + shortcut + ")");

    // Reset song details state
    //setSongDetailsData({ actualSongDetailsData: [], isSongDetailsDataRetrieved: true, isReloaded: true });

    // fetch track using track shortcut (ID works too but we want the shortcut in the URL).
    songDetailsAPICalls(shortcut)
      .then(function (response) {
        //console.log(response);

        songDetails.songImageSrc = response.images[0].url;

        //console.log("Updated song details: ");
        //console.log(songDetails);
        setSongDetailsData({ actualSongDetailsData: [songDetails], isSongDetailsDataRetrieved: true });
      })
      .catch(function (err) { 
        console.log("updateSongDetails() error: ");
        console.log(err);
      });
  }

  let songListDOMElement = [];
  if (songListData.isSongListDataRetrieved && songListData.actualSongListData.length) { 
    //console.log('updated song list');
    songListData.actualSongListData.forEach(track => {
      songListDOMElement.push(
        <div className={`${styles["song"]} ${styles["row"]}`}>
          <div className={`${styles["play-button"]} ${styles["col"]}`} onClick={() => updateSongDetails(track.trackShortcut)}>
            <AudioPlayer previewProp={track.trackPreviewSrc} onClickHandler={updateCurrentAudioSrc} audioPlayerStatus={track.trackPreviewSrc === currentAudioSrc.current ? 1 : 0} />
          </div>
          <div className={`${styles["song-name-row"]} ${styles["col"]}`}>
            <span className={styles["song-name-col"]}>{track.trackIndex + '.'}</span>
            <span className={`${styles["song-name-col"]} ${styles["song-page-track-name"]}`}>{track.trackName}</span>
          </div>
        </div>
      )
    });
  }

  return(
    <div className={styles["Song"]}>

      {songDetailsData.isSongDetailsDataRetrieved ?
        songDetailsDOMElement :
        <div className={`${styles["Song-details"]} ${styles["row"]}`}>
          <img src={LoadingImage} alt={"Loading"} className={`${styles["image"]} ${styles["col"]}`} />
          <div className={`${styles["song-info"]} ${styles["col"]}`}>
            <h2>Song Details</h2>
            <span>Loading...</span>
          </div>
        </div>
      }

      <div className={styles["Song-album"]}>
        <h2 className={styles["album-header"]}>Songs</h2>
        <div className={`${styles["song-list-container"]} ${styles["flex-row-container"]}`}>
          <div className={styles["flex-row-item"]}></div>
          <div className={`${styles["song-list"]} ${styles["flex-row-item"]}`}>
            {songListData.isSongListDataRetrieved ?
                songListDOMElement :
                <div>
                  <span>Loading...</span>
                </div>
            }
          </div>
          <div className={styles["flex-row-item"]}></div>
        </div>
      </div>

    </div>
  );
}

export default Song;