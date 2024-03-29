import React from 'react';
import '../App.css';

function Word(props) {
    const item = props.item;
    return (
        <div className="word_block">
            <label>{item.word}</label>
            <br />
            <label>{item.eng}<br />{item.kor}</label>
        </div>
    );
}

export default Word;