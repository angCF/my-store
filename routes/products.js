const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (request,response)=>{

    const products = [];
    const { size } = request.query;
    const limit = size || 10;
    for( let i =0; i < limit; i++){
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(),10),
            image: faker.image.imageUrl()
        });
    }
    response.json(products);
});

router.get('/filter', (request,response) => {
    response.send('Filtros')
});

router.get('/:id',(request,response) => {
    const { id } = request.params;
    response.json({
        name:'Producto 2',
        price: 1000,
        description: 'Segundo producto'
    })
});

module.exports = router;