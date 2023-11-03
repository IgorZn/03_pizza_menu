import {faker} from '@faker-js/faker';
import * as fs from 'node:fs/promises';

const pictures = await fs.readdir('../public/pizzas').catch(err => console.log(err))

const getFakePizzas = (num = 10) => {
    const pizzaData = []
    for (let i = 0; i < num; i++) {
        pizzaData.push({
            name: `Pizza ${faker.lorem.word()}`,
            ingredients: faker.lorem.sentence(3),
            price: Math.floor(Math.random() * faker.number.int({min: 10, max: 100})),
            photoName: `pizzas/${pictures[Math.floor(Math.random() * pictures.length)]}`,
            soldOut: i % 2 > 0 ? true : false
        })
    }

    return pizzaData
}

export default getFakePizzas;