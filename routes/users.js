const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (request,response) => {
    const users = [];
    const { size } = request.query;
    const limit = size || 10;
    for( let i =0; i < limit; i++){
        users.push({
            name: faker.internet.userName(),
            image: faker.image.imageUrl()
        });
    }
    response.json(users);
});

module.exports = router;