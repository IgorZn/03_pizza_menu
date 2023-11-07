import React from 'react';
import {Card, Image, ListGroup} from "react-bootstrap";

/*
name
ingredients
price
photoName
soldOut
* */

function Pizza(props) {
    const {pizza} = props
    return (
        <>
            <Card style={{width: '23rem'}} className={
                pizza.soldOut ? "sold-out" : ""
            }>
                <Card.Img src={pizza.photoName} className={"rounded"}/>
                <Card.Body>
                    <Card.Title><h3>{pizza.name}</h3></Card.Title>
                    <Card.Text>
                        {pizza.ingredients}
                    </Card.Text>
                    <span className={pizza.soldOut ? "sold-out-txt" : ""}>
                        <h1 className={"display-4"}>{pizza.soldOut ? "Sold out" : "$" + pizza.price}</h1>
                    </span>
                </Card.Body>
            </Card>
        </>
    );
}

export default Pizza;