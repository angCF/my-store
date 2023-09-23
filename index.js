const express = require('express');
const app= express();
const port = 3000;

app.get('/', (request,response)=>{
    response.send('Hola desde ExpressJS');
});

app.get('/nueva-ruta', (request,response)=>{
    response.send('Hola soy un nuevo endpoint');
});

app.get('/products', (request,response)=>{
    response.json({
        name:'Producto 1',
        price: 1200,
        description: 'Primer producto'
    });
});

app.listen(port, () =>{
    console.log('Escuchando por el puerto ' + port)
});