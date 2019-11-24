import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <input
                type="text"
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
                placeholder="Tutaj wpisz wyszukiwaną frazę"
                style={styles}
                value={this.state.searchTerm}
            />
        )
    }
}
