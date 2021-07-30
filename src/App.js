import './App.css';
import MainPage from './modules/MainPage.js';
import Navbar from './modules/Navbar/Navbar.js';
import Home from './modules/Home/Home.js';
import About from './modules/About/About.js';
import SearchPage from './modules/SearchPage/SearchPage.js';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        <Route exact path="/search" component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
