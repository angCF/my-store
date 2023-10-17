const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (request,response)=>{
    response.json([
        {
            name:'Categoria 1',
            stock: 30,
            description: 'Primera Categoria'
        },
        {
            name:'Categoria 2',
            stock: 20,
            description: 'Segunda Categoria'
        }
    ]);
});

router.get('/:categoryId/products/:productId',(request,response) => {
    const { categoryId, productId } = request.params;
    response.json({
        categoryId,
        productId
    })
});

module.exports = router;