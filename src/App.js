import './App.css';
import MainPage from './modules/MainPage.js';
import Navbar from './modules/Navbar/Navbar';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './modules/Home/Home';
import About from './modules/About/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
      </Switch>
    </Router>
  );
}

export default App;
