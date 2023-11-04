import React from 'react';
import Pizza from "./Pizza";
import getFakePizzas from "../fakeDataPizza";

const pizzas = getFakePizzas()

function Menu(props) {
    return (
        <div>
            <h1>Menu</h1>
            {pizzas.map((pizza) => (
                <Pizza pizza={pizza}/>
            ))}

        </div>
    );
}

export default Menu;