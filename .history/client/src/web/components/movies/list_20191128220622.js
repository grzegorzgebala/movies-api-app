import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
export default class List extends Component {
    
    // Prepared component for movies from DataBase
    render() {
        return (
            <div>
                <h2>Movies list from Data Base:</h2>
                <p>To get movies from Data Base press button below:</p>
                <Button variant="primary">Get movies</Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Title:</th>
                        <th>Year:</th>
                        <th>Poster:</th>
                        <th>Last comment:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                {/* <ul className="resultList">
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
                </ul> */}
            </div>
            
        )
    }
}