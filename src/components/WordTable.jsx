import React, { Component } from 'react';
import Word from './Word';

class WordTable extends Component {
    constructor(props) {
        super(props);
        const file = new XMLHttpRequest();
        const url = 'https://raw.githubusercontent.com/wowvv0w/medical-glossary/master/src/glossary.json';
        file.open('GET', url);
        file.responseType = 'json';
        file.send();
        file.onload = function() {
            this.list = file.response;
            console.log(this.list);
        }
    }
    filter(text) {
        return text ? this.list.filter((item) => item.word.toLowerCase().startsWith(text.toLowerCase())) : this.list;
    }
    render() {
        const words = this.filter(this.props.text);
        const items = words.map((item) => <Word key={item.word} item={item} />)
        return (
            <table>
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Meaning</th>
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