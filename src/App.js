import './App.css';
import Navbar from './modules/Navbar/Navbar.js';
import Home from './modules/Home/Home.js';
import About from './modules/About/About.js';
import SearchPage from './modules/SearchPage/SearchPage.js';
import Genre from './modules/Genre/Genre.js';
import Song from './modules/Song/Song.js';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import HashRouter from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route exact path='/search' component={SearchPage} />
        <Route path='/genre' component={Genre} />
        <Route path='/song' component={Song} />
      </Switch>
    </Router>
  );
}

export default App;
