import React from 'react';
import AppLogo from '../assets/applogo.svg';
const MainPage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={AppLogo} alt="Harbinger Musik Logo" />
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

export default MainPage;