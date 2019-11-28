import React, { Component } from 'react'
export default class List extends Component {
    
    render() {
        return (
            <div>
                <h2>Movies list from Data Base:</h2>
                <p>To get movies from Data Base press button below:</p>
                <button type="button" className="btn btn-primary">Get movies</button>
                <ul className="result">
                    <li>
                        <h2>Title:</h2> 
                        <p>Example Title 1</p> 
                    </li>
                    <li>
                        <h2>Year:</h2> 
                        <p>Example year 2009</p>
                    </li>
                    <li>
                        <h2>Poster:</h2>
                        <img src="#" alt="Poster" />;
                    </li>
                </ul>
            </div>
            
        )
    }
}