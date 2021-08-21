import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={`${styles["About"]}`}>
      <header className={`${styles["About-header"]}`}>
        <p>
          About
        </p>
      </header>
      <div className={`${styles["About-body"]}`}>
        This product uses the NAPSTER PLATFORM but is not endorsed,
        certified, or otherwise approved by Napster ®.
        <br/><br/>
        We are a team of aspiring software engineers who are using
        this project to learn the frontend framework React. Harbinger
        Musik uses the Napster API to fetch and display data such 
        as genres, playlists, song names, and playable song previews.
        <br /><br />
        <a className={`${styles["About-link"]}`} target="_blank" rel="noopener noreferrer" href="https://github.com/Team-Harbinger/Harbinger-Musik">GitHub Link</a>
      </div>
    </div>
  );
}

export default About;