import React, { Component } from 'react'

export default class Search extends Component {

    constructor() {
        super();
        this.state = {
            posterUrl: '';
            
        }
    }
    apiKey = '5449130e';
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=`+searchText)
            .then(res => res.json())
            .then(movies => this.setState({movies}, () => console.log('Movies fetched..', movies)))
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
