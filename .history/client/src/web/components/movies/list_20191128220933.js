import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
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
                            <td>Titanic</td>
                            <td>1986</td>
                            <td>Link</td>
                            <td>Description lorem ipsum</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Panic Room</td>
                            <td>1999</td>
                            <td>Link</td>
                            <td>Description lorem ipsum</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Closure</td>
                            <td>1999</td>
                            <td>Link</td>
                            <td>Description lorem ipsum</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            
        )
    }
}
