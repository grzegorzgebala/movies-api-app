import React, { Component } from 'react'
const GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
export default class List extends Component {
    
    render() {
        return (
            <div>
                <h2>Movies list from Data Base:</h2>
                <p>To search movie write title in field below and press ENTER:</p>
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
                        <img src={this.state.searchingText === undefined ? GIPHY_LOADING_URL : this.state.Poster} alt="Poster" />;
                    </li>
                </ul>
            </div>
            
        )
    }
}