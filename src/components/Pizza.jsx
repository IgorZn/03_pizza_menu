import React from 'react';
import {Card, ListGroup, Button} from "react-bootstrap";

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
            <ListGroup>
                <ListGroup.Item>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={pizza.photoName} rounded={"true"} />
                        <Card.Body>
                            <Card.Title><h3>{pizza.name}</h3></Card.Title>
                            <Card.Text>
                                {pizza.ingredients}
                            </Card.Text>
                            <span>{pizza.price}</span>
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
            </ListGroup>

        </>
    );
}

export default Pizza;