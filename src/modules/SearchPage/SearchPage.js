import React from "react";
import { useState } from "react";
import styles from "./SearchPage.module.css";
import asyncFetchTrackData from "./asyncFetchTrackData.js";
// import { Link } from "react-router-dom";

function SearchPage(props) {
  const APP_BASENAME = "/Harbinger-Musik";
  const API_KEY = process.env.REACT_APP_NAPSTER_API_KEY;
  const [trackData, setTrackData] = useState({actualTrackData: [], isDataRetrieved: false});
  
  /*
  * Router automatically passes in some props. 
  * The query parameters for the API call can be found in props.location.search.
  * As of now props.location.search is in the form '?query=searchString&type=track'
  * and we must cut off the ? to get the query parameters by themselves
  */
  if (!trackData.isDataRetrieved) {
    const queryParameters = props.location.search.split("?")[1];
    let finalTrackData = [];
    asyncFetchTrackData(queryParameters, API_KEY).then(fetchedTrackData => {
      // still need to extract specific track data from result of API call
      console.log("track data: ", fetchedTrackData.search.data.tracks);
      // order in which the track appears
      let trackOrder = 1;
      fetchedTrackData.search.data.tracks.forEach(track => {
        finalTrackData.push({
          trackImageSrc: "https://api.napster.com/imageserver/v2/albums/" + track.albumId + "/images/500x500.jpg",
          trackID: track.id,
          trackShortcut: track.shortcut,
          trackName: track.name,
          trackArtist: track.artistName,
          trackOrder: trackOrder
        })
        trackOrder++;
      })
      console.log("final tracks data: ", finalTrackData);
      setTrackData({actualTrackData: finalTrackData, isDataRetrieved: true})
    })
  }

  let trackDOMElements = [];
  // create elements only if data is ready and data exists
  if (trackData.isDataRetrieved && trackData.actualTrackData.length) {
    trackData.actualTrackData.forEach(track => {
      trackDOMElements.push(
        <div className={`${styles["track"]} ${styles["flex-row-container"]}`}>
          <img src={track.trackImageSrc} alt={"Album cover of " + track.trackName} className={styles["track-image"]} />
          <div className={`${styles["track-info-wrapper"]} ${styles["flex-row-container"]}`}>
            <div className={`${styles["track-info"]} ${styles["flex-row-container"]}`}>
              <div className={`${styles["track-order"]}`}>
                <span>{`${track.trackOrder + "."}`}</span>
              </div>
              <div className={`${styles["track-name-and-artist"]} ${styles["flex-column-container"]}`}>
                {/* <span className={`${styles["link-to-track"]}`}>
                  <Link to={"/song/" + track.trackShortcut}>
                    <span className={`${styles["track-name"]}`}>
                      {track.trackName}
                    </span>
                  </Link>
                </span> */}
                
                <a href={APP_BASENAME + "/song/" + track.trackShortcut} className={`${styles["link-to-track"]}`}>
                  <span className={`${styles["track-name"]}`}>
                    {track.trackName}
                  </span>
                </a>
                <span className={`${styles["track-artist"]}`}>
                  {track.trackArtist}
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  /*
  * Explanation of below code:
  * If data has been retrieved, check if there is any data to be displayed.
  * If there is, display the tracks. If not, display 'no songs found'.
  * If data hasn't been retrieved, display 'Loading...'
  */

  return (
    <div id={styles["search-page"]} className={styles["flex-column-container"]}>
        {trackData.isDataRetrieved 
          ? <div id={styles["top-matching-songs"]} className={styles["flex-column-container"]}>
              <h2>Top Matching Songs</h2>
              {trackData.actualTrackData.length
                ? 
                  <div id={styles["track-list"]} className={styles["flex-column-container"]}>
                    {trackDOMElements}
                  </div>
                :
                  <h3>No songs found!</h3> 
              }
            </div>
          :
            <div id={styles["top-matching-songs"]} className={styles["flex-column-container"]}>
              <h2>Top Matching Songs</h2>
              <span>Loading...</span>
            </div>
        }
    </div>
  );
}

export default SearchPage;