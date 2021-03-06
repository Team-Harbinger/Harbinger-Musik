import React from 'react';
import { useRef, useEffect, useState } from 'react';
import styles from './AudioPlayer.module.css';
import play_button_asset from '../../assets/play_button.png';
import stop_button_asset from '../../assets/stop_button.svg';
import loading_asset from '../../assets/applogo.svg';

function AudioPlayer(props) {
  // 0 = stopped, 1 = loading, 2 = playing, 3 = unavailable
  const [audioPlayerStatus, setAudioPlayerStatus] = useState(0);
  const audioPlayerRef = useRef();
  // runs AFTER render() so it knows that videoPlayerRef is ref to audio tag
  useEffect(() => {
    audioPlayerRef.current.onplaying = () => {
      // console.log("finished loading");
      setAudioPlayerStatus(2);
    }
    audioPlayerRef.current.onended = () => {
      // console.log("playback reached end");
      setAudioPlayerStatus(0);
    }
    // runs when audio src is broken
    audioPlayerRef.current.onerror = () => {
      // console.log("playback reached end");
      // alert("404");
      setAudioPlayerStatus(3);
    }
    
    // runs if audioPlayer isn't permanently disabled, it is told to stop and it isn't in a stop state
    if (audioPlayerStatus !== 3 && (props.audioPlayerStatus === 0 && audioPlayerStatus !== 0)) {
      // console.log("change");
      setAudioPlayerStatus(0);
      handlePlayback(0);
    }
  }, [props.audioPlayerStatus]);

  // 0 = stop, 2 = play (to stay consistent with audioPlayerStatus modes)
  function handlePlayback(playbackAction) {
    switch (playbackAction) {
      case (0):
        audioPlayerRef.current.pause();
        audioPlayerRef.current.currentTime = 0;
        break;
      case (2):
        audioPlayerRef.current.play();
        break;
      default:
        console.log("Error: playbackAction took on an impossible value");
    }
  }

  function handleClick() {
    switch (audioPlayerStatus) {
      // clicked when stopped: start loading
      case (0):
        // console.log("stopped -> loading");
        setAudioPlayerStatus(1);
        // tells other audio players to stop
        props.onClickHandler(props.previewProp);
        handlePlayback(2);
        break;
      // clicked when loading: stop 
      case (1):
        // console.log("loading -> stopped");
        setAudioPlayerStatus(0);
        handlePlayback(0);
        break;
      // clicked when playing: stop 
      case (2):
        // console.log("playing -> stopped");
        setAudioPlayerStatus(0);
        handlePlayback(0);
        break;
      default:
        console.log("Error: audio player state took on an impossible value");
    }
  }   

  // could just put case (3) but this doesn't even need to run at all if it's 3
  let icon = null;                                        
  if (audioPlayerStatus !== 3) {
    switch (audioPlayerStatus) {
      case (0):
        icon = play_button_asset;
        break;
      case (1):
        icon = loading_asset;
        break;
      case (2):
        icon = stop_button_asset; 
        break;
      default:
        console.log("Error: audio player state took on an impossible value");
    }
  }
  
  return (
    <div>
      <audio id={props.previewProp} ref={audioPlayerRef} src={props.previewProp}></audio>
      {audioPlayerStatus !== 3
        ?
          <div>
            <img 
              onClick={() => handleClick()} 
              src={icon} 
              alt="Play Button" 
              className={`${audioPlayerStatus === 1 ? styles["rotate"] : ""} ${styles["play-button-image"]}`} 
            />
            <div className={styles["powered"]}>Powered by Napster</div>
          </div>
        :
          <span>Sorry, this track is unavailable.</span>
      }
    </div>
  );
}

export default AudioPlayer;