import React from 'react';
import './About.css';

function About() {
  return (
    <div className="About">
      <header className="About-header">
        <p>
          About
        </p>
      </header>
      <div className="About-body">
        <div className="flex-row-container">
          <div className="flex-row-item"></div>
          <div className="flex-row-item">
            This product uses the NAPSTER PLATFORM but is not endorsed,
            certified, or otherwise approved by Napster ®.
            <br/><br/>
            We are a team of aspiring software engineers who are using
            this project to learn the frontend framework React. Harbinger
            Musik uses the Napster API to fetch and display data such 
            as genres, playlists, song names, and playable song previews.
            <br /><br />
            <a className="About-link" target="_blank" rel="noopener noreferrer" href="https://github.com/Team-Harbinger/Harbinger-Musik">GitHub Link</a>
            <br /><br />
            Placeholder text, remove later: 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br /><br />
            Placeholder text, remove later: 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br /><br />
            Placeholder text, remove later: 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="flex-row-item"></div>
        </div>
      </div>
    </div>
  );
}

export default About;