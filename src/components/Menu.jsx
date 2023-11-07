import React from 'react';
import Pizza from "./Pizza";
import getFakePizzas from "../fakeDataPizza";
import {Col, Row} from "react-bootstrap";

const pizzas = getFakePizzas()
console.log(pizzas)

function Menu(props) {
    return (
        <div className={"menu"}>
            <h2>Our Menu</h2>
            {pizzas && (
                <Row className={"pizzas"}>
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className={"pizza"}>
                        <Col>
                            <Pizza pizza={pizza}/>
                        </Col>
                    </div>
                ))}
            </Row>
            )}
        </div>
    );
}

export default Menu;