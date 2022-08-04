import React, { Component } from 'react';
import Word from './Word';

class WordTable extends Component {
    constructor(props) {
        super(props);
        this.list = [
            {word: "A", meaning: "Football"},
            {word: "B", meaning: "Baseball"},
            {word: "C", meaning: "Basketball"},
            {word: "AA", meaning: "iPod Touch"},
            {word: "BB", meaning: "iPhone 5"},
            {word: "CA", meaning: "Nexus 7"}
          ];
    }
    filter(text) {
        return text ? this.list.filter((item) => item.word.toLowerCase().startsWith(text.toLowerCase())) : this.list;
    }
    render() {
        const words = this.filter(this.props.text);
        const items = words.map((item) => <Word key={item.id} item={item} />)
        return (
            <div>{items}</div>
        );
    }
}

export default WordTable;