import React, { Component } from 'react';
import Word from './Word';
import wordList from '../glossary.json';
import '../App.css';

class WordTable extends Component {
    constructor(props) {
        super(props);
        this.list = wordList;
    }
    filter(text) {
        return text ? this.list.filter((item) => item.word.toLowerCase().startsWith(text.toLowerCase())) : this.list;
    }
    render() {
        const words = this.filter(this.props.text);
        const items = words.map((item) => <Word key={item.eng} item={item} />)
        return (
            <div className="table">
                <p>Word Table</p>
                {items}
            </div>
        );
    }
}

export default WordTable;