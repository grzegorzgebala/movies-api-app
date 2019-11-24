import React, { Component } from 'react'

export default class Search extends Component {
    
    constructor() {
        super();
        this.state = {}
    }
    componentDidMount() {
            fetch('http://www.omdbapi.com/?apikey=5449130e&t=Titanic')
                .then(res => res.json())
                .then(res => this.setState(res, () => console.log('Movies fetched..', res)))
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    placeholder="Tutaj wpisz wyszukiwaną frazę"
                    // value={this.state.searchTerm}
                />
                <img key={this.state.id}> {this.state.Poster}
                {/* <ul>
                    {this.state.movies.map(movies => 
                        <li key={movies.id}>{movies.title}  {movies.year}</li>
                    )}
                </ul> */}
            </div>
            
        )
    }
}
