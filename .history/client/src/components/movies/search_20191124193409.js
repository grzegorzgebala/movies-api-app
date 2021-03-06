import React, { Component } from 'react'

export default class Search extends Component {
    
    constructor() {
        super();
        this.state = {
            posterUrl: '',
            
        }
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=5449130e&t=Titanic')
            .then(res => res.json())
            .then(posterUrl => this.setState({movies}, () => console.log('Movies fetched..', movies)))
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
