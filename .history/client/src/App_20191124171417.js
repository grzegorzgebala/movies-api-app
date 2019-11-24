import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies/movies';
import Search from './components/movies/search';
import MoviePoster from './components/movies/moviePoster';

class App extends Component {

  constructor() {
    super();
    this.state = {
    }
}
  handleSearch = (searchingText) => {  // 1.
    this.setState({
      loading: true  // 2.
    });
    this.getMoviePoster(searchingText, (moviePoster) => {  // 3.
      console.log(moviePoster);
      this.setState({  // 4
        loading: false,  // a
        url: moviePoster,  // b
        searchingText: searchingText  // c
      }).bind(this);
    })
  };

  getMoviePoster(searchingText, callback) {  // 1.
      const url = 'http://www.omdbapi.com/?apikey=5449130e&t=' + searchingText; //'https://api.giphy.com' + '/v1/gifs/random?api_key=' + '3KGfvAd3dPojEVRrAjZIBMznHR0PvBwU' + '&tag=' + searchingText;  // 2.
      const xhr = new XMLHttpRequest();  // 3.
      xhr.open('GET', url);
      xhr.onload = () => {
        console.log(xhr.status);
          if (xhr.status === 200) {
            console.log(xhr);
            const data = JSON.parse(xhr.responseText); // 4.
            console.log(data);
              const moviePoster = {  // 5.
                  url: data.Poster,
                  // sourceUrl: data.url
              };
              callback(moviePoster);  // 6.
          }
      };
      xhr.send();
  };

  getInitialState() {
    return {
      loading: false,
      searchingText: '',
      moviePoster: {}
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          This is movies DataBase
        </header>
        <p>Write movie title and press enter</p>
        <Search onSearch={this.handleSearch}/>
        <Movies />
        <MoviePoster
                loading={this.state.loading}
                url={this.state.url}
                // sourceUrl={this.state.sourceUrl} 
            />
      </div>
    );
  }
}

export default App;


      // return (
      //   <div style={styles}>
      //         <h1>Wyszukiwarka GIFow!</h1>
      //         <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
      //         <Search onSearch={this.handleSearch}/>
      //     <Gif
      //         loading={this.state.loading}
      //         url={this.state.gif.url}
      //         sourceUrl={this.state.gif.sourceUrl} 
      //     />
      //   </div>
      // );