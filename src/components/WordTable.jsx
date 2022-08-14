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
            <table className="table">
                <thead>
                    <tr>
                        <th className="word">Word</th>
                        <th className="meaning">Meaning</th>
                        <th className="meaning">뜻</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        );
    }
}

export default WordTable;