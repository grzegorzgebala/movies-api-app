import React, { Component } from 'react'

export default class Search extends Component {
    
    constructor() {
        super();
        this.state = {}
    }
    handleChange() {
        var searchingText = event.target.value;
        this.setState({searchingText: searchingText});

        if (searchingText.length > 2) {
          this.props.onSearch(searchingText);
        }
    };

    handleKeyUp() {
        if (event.keyCode === 13) {
          this.props.onSearch(this.state.searchingText);
        }
    };

    componentDidMount() {
            fetch('http://www.omdbapi.com/?apikey=5449130e&t=Titanic')
                .then(res => res.json())
                .then(res => this.setState(res))
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    placeholder="Tutaj wpisz wyszukiwaną frazę"
                    // value={this.state.searchTerm}
                />
                <img src={this.state.Poster} alt="Poster" />;
            </div>
            
        )
    }
}
