import React from 'react';


function Word(props) {
    const item = props.item;
    return (
        <tr>
            <td>{item.word}</td>
            <td>{item.eng}</td>
            <td>{item.kor}</td>
        </tr>
    );
}

export default Word;