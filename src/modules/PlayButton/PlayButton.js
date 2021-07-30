import React from 'react';
import './PlayButton.css';
import play_button_asset from '../../assets/play_button.png';

function PlayButton(prop) {

  // {prop.previewProp}

  const start = () => {

    // This has to be in here because there's
    // a limit to how many Audio objects are created
    // in the browser
    // If we want more audio functionality 
    // (pausing, pasuing when another song starts playing, etc),
    // we might have to limit how many tracks are displayed on
    // one page
    let audio = new Audio(prop.previewProp);
    audio.play();
  }

  return (
    <div>
      <img onClick={start} src={play_button_asset} alt="Play Button" className="play-button-image" />
      <div className="powered">Powered by Napster</div>
    </div>
  );
}

export default PlayButton;