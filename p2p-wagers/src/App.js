import React from 'react';
import './App.css';
import AuthGateway from './AuthGateway/AuthGateway';
import {Switch, Route, Link } from 'react-router-dom';
import MainContainer from './MainContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> P2P SportsBook!</h1>
        <h3>Win lots of $$$$$ !!!</h3>
        <br></br>
        <MainContainer />
      </header>

    </div>
  );
}

export default App;









