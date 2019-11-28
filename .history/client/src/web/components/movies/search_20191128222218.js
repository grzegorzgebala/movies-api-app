import React, { Component } from 'react'
const GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
export default class Search extends Component {
    
    constructor() {
        super();
        this.state = {}
    }
    // Connection with API - moviesDB
    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            const searchingText = event.target.value;
            this.setState({searchingText});
            fetch('http://www.omdbapi.com/?apikey=5449130e&t=' + searchingText)
                .then(res => res.json())
                .then(res => this.setState(res))
                .catch(err => console.log(err))
        }
    };

    render() {
        return (
            <div>
                <h2>Choose Movie:</h2>
                <p>To search movie write title in field below and press ENTER:</p>
                <input
                    type="text"
                    onKeyUp={this.handleKeyUp}
                    placeholder="Tutaj wpisz wyszukiwaną frazę"
                />
                <ul className="result">
                    <li>
                        <h2>Title:</h2> 
                        <p>{this.state.Title}</p> 
                    </li>
                    <li>
                        <h2>Year:</h2> 
                        <p>{this.state.Year}</p>
                    </li>
                    <li>
                        <h2>Poster:</h2>
                        <img src={this.state.searchingText === undefined ? Waiting ... : this.state.Poster} alt="Poster" />
                    </li>
                </ul>
            </div>
            
        )
    }
}
