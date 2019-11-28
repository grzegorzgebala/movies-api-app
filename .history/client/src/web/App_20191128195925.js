import React from 'react';
import './App.scss';
// import Movies from './components/movies/movies';
import Search from './components/movies/search';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Movies DataBase
      </header>
      {/* <Movies /> */}
      <Search />
    </div>
  );
}

export default App;
