import React from 'react';


function Word(props) {
    const item = props.item;
    return (
        <tr>
            <td>{item.word}</td>
            <td>{item.meaning}</td>
        </tr>
    );
}

export default Word;