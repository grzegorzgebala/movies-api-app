import React from 'react';
import './App.css';
import Movies from './components/movies/movies';
import Search from './components/movies/search';
const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://movies-api-app:<password>@movies-api-app-wtaig.mongodb.net/test?retryWrites=true&w=majority')
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
