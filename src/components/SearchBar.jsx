import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onChange(e.target.value);
    }
    render() {
        return (
            <div className="div_search">
                <input className="search_bar" type="text" onChange={this.handleChange}></input>
            </div>
        );
    }
}

export default SearchBar;