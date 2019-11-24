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
            // this.props.onSearch(this.state.searchingText);
        }
    };
    
    componentDidMount() {
        console.log('this.state.serachingtext: ', this.state.searchingText);
            fetch('http://www.omdbapi.com/?apikey=5449130e&t=' + this.state.searchingText)
                .then(res => res.json())
                .then(res => this.setState(res))
    }

    render() {
        console.log(this.state)
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
