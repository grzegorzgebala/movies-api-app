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
        }
    };
    
    componentDidUpdate() {
        try {
            fetch('http://www.omdbapi.com/?apikey=5449130e&t=' + this.state.searchingText)
                .then(res => res.json())
                .then(res => this.setState(res))
                .catch(err => console.log(err))
        } catch (error) {
                alert('No movie');
        }
    }

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
                <img src={this.state.searchingText === undefined ? GIPHY_LOADING_URL : this.state.Poster} alt="Poster" />;
            </div>
            
        )
    }
}
