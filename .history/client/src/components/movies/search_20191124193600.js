import React, { Component } from 'react'

export default class Search extends Component {
    
    constructor() {
        super();
        this.state = {
            poster: '',
            
        }
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=5449130e&t=Titanic')
            .then(res => res.json().Poster)
            .then(poster => this.setState({poster}, () => console.log('Movies fetched..', poster)))
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
