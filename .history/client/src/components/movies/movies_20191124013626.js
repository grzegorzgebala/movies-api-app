import React, { Component } from 'react';
import './movies.css';

class Movies extends Component {

    constructor() {
        super();
        this.state = {
            moveis: [];
        }
    }
  render() {
    return (
        <div>
            <h2>Movies</h2>
        </div>    
    )
  } 
}

export default Movies;
