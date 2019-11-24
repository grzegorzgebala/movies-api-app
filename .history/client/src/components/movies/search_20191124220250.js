import React, { Component } from 'react'

export default class Search extends Component {
    
    constructor() {
        super();
        this.state = {}
    }
    handleChange(event) {
        const searchingText = event.target.value;
        this.setState({searchingText: searchingText});

        // if (searchingText.length > 2) {
        //   this.props.onSearch(searchingText);
        // }
    };

    handleKeyUp(event) {
        if (event.keyCode === 13) {
          this.props.onSearch(this.state.searchingText);
        }
    };
    
    componentDidMount() {
            fetch('http://www.omdbapi.com/?apikey=5449130e&t=' + this.props.searchingText)
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
