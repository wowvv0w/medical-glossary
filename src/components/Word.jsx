import React from 'react';
import '../App.css';

function Word(props) {
    const item = props.item;
    return (
        <tr className="word_block">
            <td>{item.word}</td>
            <td>{item.eng}</td>
            <td>{item.kor}</td>
        </tr>
    );
}

export default Word;