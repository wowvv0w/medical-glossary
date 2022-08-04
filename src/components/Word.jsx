import React from 'react';


function Word(props) {
    const item = props.item;
    return (
        <p>{item.word} {item.meaning}</p>
    );
}

export default Word;