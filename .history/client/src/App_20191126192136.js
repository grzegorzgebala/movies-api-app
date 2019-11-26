import React from 'react';
import './App.css';
import Movies from './components/movies/movies';
import Search from './components/movies/search';
const mongoose = require ('mongoose');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello react
      </header>
      <Movies />
      <Search />
    </div>
  );
}

export default App;
