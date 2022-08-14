import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WordTable from './components/WordTable';

class App extends Component {
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
                <br />
                <WordTable text={this.state.text}/>
            </React.StrictMode>
        );
    }
}

export default App;