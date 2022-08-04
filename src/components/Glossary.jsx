import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import WordTable from './WordTable';

class Glossary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
        this.updateResult = this.updateResult.bind(this);
    }
    updateResult(text) {
        this.setState({text});
    }
    render() {
        return (
            <React.StrictMode>
                <Header />
                <SearchBar onChange={this.updateResult}/>
                <WordTable text={this.state.text}/>
            </React.StrictMode>
        );
    }
}

export default Glossary;