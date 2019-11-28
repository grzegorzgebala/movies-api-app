import React, { Component } from 'react'
export default class List extends Component {
    
    // Prepared component for movies from DataBase
    render() {
        return (
            <div>
                <h2>Movies list from Data Base:</h2>
                <p>To get movies from Data Base press button below:</p>
                <button type="button" className="btn btn-primary">Get movies</button>
                <ul className="resultList">
                    <li className="list">
                        <h3>Title:</h3> 
                        <p>Example Title 1</p>
                    </li>
                    <li className="list">
                        <h3>Year:</h3> 
                        <p>Example year 2009</p>
                    </li>
                    <li className="list">
                        <h3>Poster:</h3>
                        <p>Poster link</p>
                    </li>
                    <li className="list">
                        <h3>Comments:</h3>
                        <p>Description</p>
                    </li>
                </ul>
            </div>
            
        )
    }
}