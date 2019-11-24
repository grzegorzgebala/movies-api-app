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
        const data = fetch('http://www.omdbapi.com/?apikey=5449130e&t=Titanic')
            const item = await data.json()
            // .then(res => res.json())
            // .then(res => this.setState(res, () => console.log('Movies fetched..', res)))
            console.log(item);
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
