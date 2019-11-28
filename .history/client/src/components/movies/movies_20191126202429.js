import React, { Component } from 'react';
import './movies.css';

class Movies extends Component {

    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch('api/movies')
            .then(res => res.json())
            .then(movies => this.setState({movies}))
    }
    render() {
        return (
            <div>
                <h2>Choose Movie</h2>
                <p>To search movie write title in field and press ENTER:</p>
                <ul>
                    {this.state.movies.map(movies => 
                        <li key={movies.id}>{movies.title}  {movies.year}</li>
                    )}
                </ul>
            </div>    
        )
    } 
}

export default Movies;
