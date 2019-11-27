import React, { Component } from 'react'
const GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
export default class Search extends Component {
    
    constructor() {
        super();
        this.state = {}
    }
    // handleChange(event) {
        
    //     if (searchingText.length > 2) {
    //         this.props.onSearch(searchingText);
    //     }
    // };
    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            const searchingText = event.target.value;
            this.setState({searchingText});
            fetch('http://www.omdbapi.com/?apikey=5449130e&t=' + searchingText)
                .then(res => res.json())
                .then(res => this.setState(res))
            // this.props.onSearch(this.state.searchingText);
        }
    };
    
    // componentDidMount() {
    // }

    render() {
        return (
            <div>
                <input
                    type="text"
                    // onKeyPress={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    placeholder="Tutaj wpisz wyszukiwaną frazę"
                    // value={this.state.searchTerm}
                />
                <ul>
                    <li>{this.state.Title} </li>
                    <li>{this.state.year}</li>
                </ul>
                <img src={this.state.searchingText === undefined ? GIPHY_LOADING_URL : this.state.Poster} alt="Poster" />;
            </div>
            
        )
    }
}
