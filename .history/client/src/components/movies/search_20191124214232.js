import React, { Component } from 'react'

export default class Search extends Component {
    
    constructor() {
        super();
        this.state = {
            movie: {},
        }
    }
    componentDidMount() {
            fetch('http://www.omdbapi.com/?apikey=5449130e&t=Titanic')
                .then(res => res.json())
                .then(movie => this.setState(res, () => console.log('Movies fetched..', res)))
    }

    render() {
        console.log(this.state)
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
