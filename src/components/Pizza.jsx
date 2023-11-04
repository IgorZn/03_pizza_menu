import React from 'react';

/*
name
ingredients
price
photoName
soldOut
* */

function Pizza(props) {
    const { pizza } = props
    return (
        <div key={pizza.id}>
            <h2>{pizza.name}</h2>
        </div>
    );
}

export default Pizza;