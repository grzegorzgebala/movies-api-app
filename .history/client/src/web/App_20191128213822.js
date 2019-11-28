import React from 'react';
import './App.css';
import Search from './components/movies/search';
import List from './components/movies/list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Movies DataBase
      </header>
      <Search />
      <List />
    </div>
  );
}

export default App;
