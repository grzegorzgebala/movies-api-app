import React, { Component } from 'react'
const GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
export default class Search extends Component {
    
    constructor() {
        super();
        this.state = {}
    }
    
    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            const searchingText = event.target.value;
            this.setState({searchingText});
            // this.props.onSearch(this.state.searchingText);
            fetch('http://www.omdbapi.com/?apikey=5449130e&t=' + searchingText)
                .then(res => 
                    res.json()
                    cosnole.log(res.json())
                )
                .then(res => this.setState(res))
                .catch(err => console.log(err))
        }
    };
    

    render() {
        return (
            <div>
                <input
                    type="text"
                    // onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    placeholder="Tutaj wpisz wyszukiwaną frazę"
                    // value={this.state.searchTerm}
                />
                <ul>
                    <li>Title: {this.state.Title} </li>
                    <li>Year: {this.state.Year}</li>
                </ul>
                <img src={this.state.searchingText === undefined ? GIPHY_LOADING_URL : this.state.Poster} alt="Poster" />;
            </div>
            
        )
    }
}