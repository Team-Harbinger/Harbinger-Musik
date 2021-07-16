import React from 'react';
import AppLogo from '../../assets/applogo.svg';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={AppLogo} className="App-logo" alt="Harbinger Musik Logo" />
        <p>
          Harbinger Music
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;