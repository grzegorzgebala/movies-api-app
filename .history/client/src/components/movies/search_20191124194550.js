import React, { Component } from 'react'

export default class Search extends Component {
    
    constructor() {
        super();
        this.state = {
            movie: {},
        }
        console.log('this.state: ', this.state);
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=5449130e&t=Titanic')
            .then(res => this.setState(movie, res.json())
            // .then(movie => this.setState(movie, () => console.log('Movies fetched..', movie)))
            console.log(this.state);
    }

    render() {
        return (
            <input
                type="text"
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
                placeholder="Tutaj wpisz wyszukiwaną frazę"
                // value={this.state.searchTerm}
            />
        )
    }
}
