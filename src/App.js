import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import GameItem from './GameItem'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App1 from './App1'
import Details from './Details'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/details" component={Details} exact />
        <Route path="/" component={App1} exact />
      </Switch>
    </Router>

  );
}

export default App;
