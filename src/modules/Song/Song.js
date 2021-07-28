import React from 'react';
import './Song.css';

function Song() {
  return(
    // Change to ids
    <div className="Song">

      <div className="Song-details row">
        <div className="image col">Song Image Placeholder</div>
        <div className="song-info col">
          <p>SONG</p>
          <p>Levitating (feat. DaBaby)</p>
          <p>Dua Lipa</p>
          <p>Released: Mar 2020</p>
          <p>Label: Warner Records</p>
        </div>
      </div>

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