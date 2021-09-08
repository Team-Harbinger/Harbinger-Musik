import styles from './App.module.css';
import Navbar from './modules/Navbar/Navbar.js';
import Home from './modules/Home/Home.js';
import About from './modules/About/About.js';
import SearchPage from './modules/SearchPage/SearchPage.js';
import Genre from './modules/Genre/Genre.js';
import Song from './modules/Song/Song.js';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';

function App() {
  // all links to other components of the app must be prefixed with this
  const APP_BASENAME = "/Harbinger-Musik"; 
  // api key
  const NAPSTER_API_KEY = process.env.REACT_APP_NAPSTER_API_KEY;
  return (
    <BrowserRouter basename="/Harbinger-Musik">
      <Navbar APP_BASENAME={APP_BASENAME} NAPSTER_API_KEY={NAPSTER_API_KEY}/>
      <Switch>
        <Route path='/' exact render={(props) => <Home {...props} APP_BASENAME={APP_BASENAME} NAPSTER_API_KEY={NAPSTER_API_KEY} />} />
        <Route path='/about' render={(props) => <About {...props} APP_BASENAME={APP_BASENAME} NAPSTER_API_KEY={NAPSTER_API_KEY} />} />
        <Route path='/search' render={(props) => <SearchPage {...props} APP_BASENAME={APP_BASENAME} NAPSTER_API_KEY={NAPSTER_API_KEY} />} />
        <Route path='/genre' render={(props) => <Genre {...props} APP_BASENAME={APP_BASENAME} NAPSTER_API_KEY={NAPSTER_API_KEY} />} />
        <Route path='/song' render={(props) => <Song {...props} APP_BASENAME={APP_BASENAME} NAPSTER_API_KEY={NAPSTER_API_KEY} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
